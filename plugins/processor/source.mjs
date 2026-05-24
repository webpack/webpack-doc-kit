import ts from 'typescript';
import { Comment, CommentTag, ReflectionKind, ReflectionType } from 'typedoc';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';
import { getPublicName, setSourceMetadata } from './metadata.mjs';

/**
 * Source metadata is intentionally a documentation-only overlay:
 * 1. types.d.ts decides which symbols exist and what their signatures are.
 * 2. webpack/lib/index.js maps those public symbols back to implementation files.
 * 3. all JS files under webpack/lib contribute summaries, params, returns,
 *    and stability/deprecation tags when that source comment has real content.
 */
const DOC_BLOCK_TAGS = new Set([
  '@deprecated',
  '@example',
  '@legacy',
  '@remarks',
  '@see',
  '@since',
  '@throws',
]);

const MODIFIER_TAGS = new Set([
  '@alpha',
  '@beta',
  '@experimental',
  '@internal',
]);

const textPart = text => [{ kind: 'text', text }];

const normalizeText = value =>
  String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .trim();

const jsDocText = value => {
  if (!value) return '';
  if (Array.isArray(value)) {
    return normalizeText(
      value.map(part => part.text ?? part.getText?.() ?? '').join('')
    );
  }
  return normalizeText(value);
};

const hasCommentContent = comment =>
  Boolean(
    comment?.summary ||
    comment?.returns ||
    comment?.params?.size ||
    comment?.blockTags?.length ||
    comment?.modifierTags?.size
  );

const hasRenderableCommentContent = comment =>
  Boolean(
    comment?.summary ||
    comment?.returns ||
    [...(comment?.params?.values() ?? [])].some(Boolean) ||
    comment?.blockTags?.some(tag => tag.content) ||
    comment?.modifierTags?.size
  );

const mergeComments = comments => {
  const merged = {
    summary: '',
    params: new Map(),
    returns: '',
    blockTags: [],
    modifierTags: new Set(),
  };

  for (const comment of comments.filter(Boolean)) {
    if (comment.summary) merged.summary = comment.summary;
    if (comment.returns) merged.returns = comment.returns;
    for (const [name, value] of comment.params) {
      if (value) merged.params.set(name, value);
    }
    for (const tag of comment.blockTags) {
      if (tag.content) merged.blockTags.push(tag);
    }
    for (const tag of comment.modifierTags) {
      merged.modifierTags.add(tag);
    }
  }

  return hasCommentContent(merged) ? merged : undefined;
};

// TypeScript exposes JSDoc differently depending on whether a comment belongs
// to a declaration, assignment, or export wrapper. Walk up a tiny amount so
// comments attached to CommonJS assignment statements are still discovered.
const getJsDocs = node => {
  let current = node;

  while (current && !ts.isSourceFile(current)) {
    if (current.jsDoc?.length) return current.jsDoc;
    if (ts.isBlock(current) || ts.isClassDeclaration(current)) break;
    current = current.parent;
  }

  return [];
};

const getJsDocComment = node => {
  const jsDocs = getJsDocs(node);
  const comments = jsDocs.map(jsDoc => {
    const comment = {
      summary: jsDocText(jsDoc.comment),
      params: new Map(),
      returns: '',
      blockTags: [],
      modifierTags: new Set(),
    };

    for (const tag of jsDoc.tags ?? []) {
      const tagName = `@${tag.tagName?.escapedText ?? ''}`;
      const content = jsDocText(tag.comment);

      if (ts.isJSDocParameterTag(tag) && tag.name) {
        comment.params.set(tag.name.getText(), content);
        continue;
      }

      if (ts.isJSDocReturnTag(tag)) {
        comment.returns = content;
        continue;
      }

      if (MODIFIER_TAGS.has(tagName)) {
        comment.modifierTags.add(tagName);
        continue;
      }

      if (DOC_BLOCK_TAGS.has(tagName)) {
        comment.blockTags.push({ tag: tagName, content });
      }
    }

    return hasCommentContent(comment) ? comment : undefined;
  });

  return mergeComments(comments);
};

const toTypedocComment = sourceComment => {
  if (!sourceComment || !hasRenderableCommentContent(sourceComment)) {
    return undefined;
  }

  const blockTags = [];
  if (sourceComment.returns) {
    blockTags.push(new CommentTag('@returns', textPart(sourceComment.returns)));
  }

  for (const { tag, content } of sourceComment.blockTags ?? []) {
    blockTags.push(new CommentTag(tag, textPart(content)));
  }

  return new Comment(
    sourceComment.summary ? textPart(sourceComment.summary) : [],
    blockTags,
    new Set(sourceComment.modifierTags ?? [])
  );
};

const toParameterComment = text => {
  const content = normalizeText(text);
  return content ? new Comment(textPart(content)) : undefined;
};

const assignComment = (target, sourceComment) => {
  const typedocComment = toTypedocComment(sourceComment);
  if (typedocComment) target.comment = typedocComment;
};

const applySignatureComment = (signature, sourceComment) => {
  if (!signature || !hasRenderableCommentContent(sourceComment)) return;

  assignComment(signature, sourceComment);

  const params = [...sourceComment.params.values()].filter(Boolean);

  for (const parameter of signature.parameters ?? []) {
    const comment =
      sourceComment.params.get(parameter.name) ??
      (parameter.name.startsWith('__') && params.length === 1
        ? params[0]
        : undefined);
    const parameterComment = toParameterComment(comment);
    if (parameterComment) parameter.comment = parameterComment;
  }
};

const propertyNameText = name => {
  if (!name) return undefined;
  if (
    ts.isIdentifier(name) ||
    ts.isStringLiteral(name) ||
    ts.isNumericLiteral(name)
  ) {
    return name.text;
  }
  return undefined;
};

const getAssignedProperty = expression => {
  if (!ts.isPropertyAccessExpression(expression)) return undefined;

  const property = expression.name.text;
  const owner = expression.expression;

  if (
    ts.isPropertyAccessExpression(owner) &&
    owner.expression.getText() === 'module' &&
    owner.name.text === 'exports'
  ) {
    return property;
  }

  if (owner.getText() === 'exports') return property;

  return undefined;
};

const isModuleExports = expression =>
  ts.isPropertyAccessExpression(expression) &&
  expression.expression.getText() === 'module' &&
  expression.name.text === 'exports';

const expressionLocalName = expression =>
  ts.isIdentifier(expression) ? expression.text : undefined;

const resolveSourceRequest = (fromFile, request) => {
  if (!request.startsWith('.')) return undefined;

  const base = resolve(dirname(fromFile), request);
  const candidates = [base, `${base}.js`, join(base, 'index.js')];
  return candidates.find(candidate => existsSync(candidate));
};

const firstRequire = expression => {
  let found;

  const visit = node => {
    if (found) return;

    if (
      ts.isCallExpression(node) &&
      node.expression.getText() === 'require' &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      found = {
        request: node.arguments[0].text,
        property:
          node.parent && ts.isPropertyAccessExpression(node.parent)
            ? node.parent.name.text
            : undefined,
      };
      return;
    }

    ts.forEachChild(node, visit);
  };

  visit(expression);
  return found;
};

const listJsFiles = directory => {
  const entries = readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listJsFiles(path));
    } else if (entry.isFile() && extname(entry.name) === '.js') {
      files.push(path);
    }
  }

  return files;
};

const sourceFileFor = filePath =>
  ts.createSourceFile(
    filePath,
    readFileSync(filePath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  );

const sourceFileBase = filePath => basename(filePath, extname(filePath));

const createFileMetadata = (filePath, libDir) => {
  const sourceFile = sourceFileFor(filePath);
  const symbols = new Map();
  const classes = new Map();
  const namedExports = new Map();
  let defaultExport;

  const rememberSymbol = (name, data) => {
    if (!name) return;
    const existing = symbols.get(name) ?? {};
    symbols.set(name, {
      ...existing,
      ...data,
      comment: data.comment ?? existing.comment,
      members: data.members ?? existing.members,
    });
  };

  // Keep per-class member comments separate from file-level exports. A public
  // class comes from types.d.ts, but method/constructor prose usually lives in
  // the implementation file next to the code.
  const classMembers = node => {
    const members = new Map();

    for (const member of node.members ?? []) {
      if (ts.isConstructorDeclaration(member)) {
        const comment = getJsDocComment(member);
        if (comment) members.set('constructor', comment);
        continue;
      }

      const name = propertyNameText(member.name);
      if (!name) continue;

      const comment = getJsDocComment(member);
      if (comment) members.set(name, comment);
    }

    return members;
  };

  const visit = node => {
    if (ts.isClassDeclaration(node) && node.name) {
      const data = {
        kind: 'class',
        localName: node.name.text,
        comment: getJsDocComment(node),
        members: classMembers(node),
      };
      symbols.set(node.name.text, data);
      classes.set(node.name.text, data);
    }

    if (ts.isFunctionDeclaration(node) && node.name) {
      rememberSymbol(node.name.text, {
        kind: 'function',
        localName: node.name.text,
        comment: getJsDocComment(node),
      });
    }

    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)) {
      const comment = getJsDocComment(node);
      if (comment) {
        rememberSymbol(node.name.text, {
          kind: 'variable',
          localName: node.name.text,
          comment,
        });
      }
    }

    if (
      ts.isExpressionStatement(node) &&
      ts.isBinaryExpression(node.expression)
    ) {
      const { left, right } = node.expression;
      const comment = getJsDocComment(node) ?? getJsDocComment(right);

      if (isModuleExports(left)) {
        defaultExport = {
          localName: expressionLocalName(right),
          comment,
        };
      } else {
        const property = getAssignedProperty(left);
        if (property) {
          namedExports.set(property, {
            localName: expressionLocalName(right),
            comment,
          });
        }
      }

      if (
        ts.isPropertyAccessExpression(left) &&
        ts.isIdentifier(left.expression) &&
        classes.has(left.expression.text) &&
        comment
      ) {
        classes.get(left.expression.text).members.set(left.name.text, comment);
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return {
    filePath,
    fileBase: sourceFileBase(filePath),
    relativePath: relative(libDir, filePath).replace(/\\/g, '/'),
    symbols,
    classes,
    namedExports,
    defaultExport,
  };
};

const getExportObject = sourceFile => {
  let exportObject;

  const visit = node => {
    if (exportObject) return;

    if (
      ts.isExpressionStatement(node) &&
      ts.isBinaryExpression(node.expression) &&
      isModuleExports(node.expression.left) &&
      ts.isCallExpression(node.expression.right)
    ) {
      const objectArg = [...node.expression.right.arguments].find(
        ts.isObjectLiteralExpression
      );
      if (objectArg) exportObject = objectArg;
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return exportObject;
};

const buildExportMap = libDir => {
  const indexPath = join(libDir, 'index.js');
  const sourceFile = sourceFileFor(indexPath);
  const exportMap = new Map();
  const exportObject = getExportObject(sourceFile);

  const addExport = (parts, data) => {
    exportMap.set(parts.join('.'), {
      publicPath: parts.join('.'),
      publicName: parts.at(-1),
      ...data,
    });
  };

  // webpack's callable export is assigned outside lib/index.js, so seed the
  // root namespace before walking the object tree of re-exported helpers.
  addExport(['webpack'], {
    sourcePath: join(libDir, 'webpack.js'),
    localName: 'webpack',
  });

  const walkObject = (object, parts = []) => {
    for (const property of object.properties) {
      const name = propertyNameText(property.name);
      if (!name) continue;

      if (
        ts.isPropertyAssignment(property) &&
        ts.isObjectLiteralExpression(property.initializer)
      ) {
        walkObject(property.initializer, [...parts, name]);
        continue;
      }

      const expression = ts.isGetAccessor(property)
        ? property.body?.statements.filter(ts.isReturnStatement).at(-1)
            ?.expression
        : ts.isPropertyAssignment(property)
          ? property.initializer
          : undefined;

      if (!expression) continue;

      const requireCall = firstRequire(expression);
      const sourcePath = requireCall?.request
        ? resolveSourceRequest(indexPath, requireCall.request)
        : undefined;

      addExport([...parts, name], {
        sourcePath,
        localName: requireCall?.property,
        comment: getJsDocComment(property),
      });
    }
  };

  if (exportObject) walkObject(exportObject);
  return exportMap;
};

const buildSourceIndex = libDir => {
  const sourceFiles = new Map();
  for (const file of listJsFiles(libDir)) {
    sourceFiles.set(file, createFileMetadata(file, libDir));
  }
  return sourceFiles;
};

const publicName = reflection =>
  getPublicName(reflection) ?? reflection.getFullName?.();

const exportEntryFor = (name, exportMap) => {
  const exact = exportMap.get(name);
  if (exact) return exact;

  const parts = name.split('.');
  for (let i = parts.length - 1; i > 0; i--) {
    const parent = exportMap.get(parts.slice(0, i).join('.'));
    if (!parent?.sourcePath) continue;

    const memberPath = parts.slice(i);
    // If lib/index.js exports an object, types.d.ts may expose its properties as
    // public members. Reuse the parent source file and match the leaf locally.
    return {
      ...parent,
      publicPath: name,
      publicName: memberPath.at(-1),
      localName: memberPath.at(-1),
      parentPublicPath: parent.publicPath,
      memberPath,
    };
  }
};

const sourceEntryFor = (entry, sourceFiles) => {
  const file = entry.sourcePath ? sourceFiles.get(entry.sourcePath) : undefined;
  if (!file) return undefined;

  const exported = entry.publicName
    ? file.namedExports.get(entry.publicName)
    : undefined;
  const localName =
    entry.localName ??
    exported?.localName ??
    file.defaultExport?.localName ??
    entry.publicName;
  const symbol =
    file.symbols.get(localName) ?? file.symbols.get(entry.publicName);

  return {
    file,
    localName,
    comment:
      symbol?.comment ??
      entry.comment ??
      exported?.comment ??
      file.defaultExport?.comment,
    symbol,
  };
};

const commentForSourceEntry = sourceEntry =>
  sourceEntry?.comment ?? sourceEntry?.symbol?.comment;

const memberSourceComment = (sourceEntry, memberName) =>
  sourceEntry?.symbol?.members?.get(memberName) ??
  sourceEntry?.file.namedExports.get(memberName)?.comment ??
  sourceEntry?.file.symbols.get(memberName)?.comment;

const namedExportComment = (sourceEntry, memberName) => {
  const exported = sourceEntry?.file.namedExports.get(memberName);
  if (!exported) return undefined;
  return (
    exported.comment ??
    sourceEntry.file.symbols.get(exported.localName)?.comment ??
    sourceEntry.file.symbols.get(memberName)?.comment
  );
};

const ownSignatures = reflection => [
  ...(reflection.signatures ?? []),
  ...(reflection.type instanceof ReflectionType
    ? (reflection.type.declaration.signatures ?? [])
    : []),
];

const applyFunctionLikeComment = (reflection, sourceComment) => {
  if (!hasRenderableCommentContent(sourceComment)) return;

  const signatures = ownSignatures(reflection);
  if (signatures.length) {
    signatures.forEach(signature =>
      applySignatureComment(signature, sourceComment)
    );
  } else {
    assignComment(reflection, sourceComment);
  }
};

// Exported object literals (for example helper namespaces) often document their
// individual properties as named exports in the implementation file.
const applyObjectMembers = (reflection, sourceEntry) => {
  const declaration =
    reflection.type instanceof ReflectionType
      ? reflection.type.declaration
      : undefined;

  for (const child of declaration?.children ?? []) {
    const sourceComment =
      namedExportComment(sourceEntry, child.name) ??
      sourceEntry?.file.symbols.get(child.name)?.comment;

    if (!hasRenderableCommentContent(sourceComment)) continue;

    const signatures = ownSignatures(child);
    if (signatures.length) {
      signatures.forEach(signature =>
        applySignatureComment(signature, sourceComment)
      );
    } else {
      assignComment(child, sourceComment);
    }
  }
};

const applyNamespaceMembers = (reflection, sourceEntry) => {
  for (const child of reflection.children ?? []) {
    const sourceComment =
      namedExportComment(sourceEntry, child.name) ??
      sourceEntry?.file.symbols.get(child.name)?.comment;

    if (!hasRenderableCommentContent(sourceComment)) continue;

    applyFunctionLikeComment(child, sourceComment);
  }
};

const applyClassMembers = (reflection, sourceEntry) => {
  assignComment(reflection, commentForSourceEntry(sourceEntry));

  for (const child of reflection.children ?? []) {
    if (child.kindOf(ReflectionKind.Constructor)) {
      const comment = memberSourceComment(sourceEntry, 'constructor');
      child.signatures?.forEach(signature =>
        applySignatureComment(signature, comment)
      );
      continue;
    }

    const comment = memberSourceComment(sourceEntry, child.name);
    if (!hasRenderableCommentContent(comment)) continue;

    if (child.signatures?.length) {
      child.signatures.forEach(signature =>
        applySignatureComment(signature, comment)
      );
    } else {
      assignComment(child, comment);
    }
  }
};

const attachSourceMetadata = (reflection, sourceEntry, exportEntry) => {
  if (!sourceEntry?.file) return;

  const leaf = publicName(reflection)?.split('.').at(-1);
  const fileBase = sourceEntry.file.fileBase;

  setSourceMetadata(reflection, {
    sourcePath: sourceEntry.file.filePath,
    sourceRelativePath: sourceEntry.file.relativePath,
    fileBase,
    anchorName: fileBase !== leaf ? leaf : undefined,
    publicPath: exportEntry.publicPath,
  });
};

/**
 * Enrich declaration reflections with comments and source locations recovered
 * from webpack/lib. The declaration file remains authoritative for public API
 * shape; this pass only adds documentation content and routing hints.
 *
 * @param {import('typedoc').ProjectReflection} project
 * @param {{ libDir?: string }} [options]
 */
export const applySourceMetadata = (
  project,
  { libDir = './webpack/lib' } = {}
) => {
  const absoluteLibDir = resolve(libDir);
  if (!existsSync(absoluteLibDir) || !statSync(absoluteLibDir).isDirectory()) {
    return;
  }

  const sourceFiles = buildSourceIndex(absoluteLibDir);
  const exportMap = buildExportMap(absoluteLibDir);

  // The declaration file remains authoritative for shape. This pass only
  // enriches public reflections that can be matched back to webpack/lib source.
  for (const reflection of project.getReflectionsByKind(ReflectionKind.All)) {
    if (
      !reflection.kindOf(
        ReflectionKind.Class |
          ReflectionKind.Namespace |
          ReflectionKind.Function |
          ReflectionKind.Variable
      )
    ) {
      continue;
    }

    const name = publicName(reflection);
    const exportEntry = name ? exportEntryFor(name, exportMap) : undefined;
    if (!exportEntry?.sourcePath) continue;

    const sourceEntry = sourceEntryFor(exportEntry, sourceFiles);
    attachSourceMetadata(reflection, sourceEntry, exportEntry);

    if (reflection.kindOf(ReflectionKind.Namespace)) {
      applyNamespaceMembers(reflection, sourceEntry);
      continue;
    }

    if (reflection.kindOf(ReflectionKind.Class)) {
      applyClassMembers(reflection, sourceEntry);
      continue;
    }

    applyFunctionLikeComment(reflection, commentForSourceEntry(sourceEntry));
    applyObjectMembers(reflection, sourceEntry);
  }
};
