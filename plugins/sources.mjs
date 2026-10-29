import { readdirSync, readFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import ts from 'typescript';
import { Converter, ReflectionKind, SourceReference } from 'typedoc';

/**
 * `@typedef {Type} Name` and `@callback Name`, but not the typedefs importing
 * a type from another file (`@typedef {import("./Chunk")} Chunk`), which are
 * not where it is declared.
 */
const TYPEDEF = /@(?:typedef\s+\{(?!import\().*\}|callback)\s+([\w$]+)/;
const PROPERTY = /@property\s+\{.*\}\s+\[?([\w$]+)/;

/** @param {Map<string, object[]>} map */
const add = (map, name, entry) =>
  map.set(name, [...(map.get(name) ?? []), entry]);

/**
 * Where the members of a class are declared: methods, accessors and fields,
 * then the `this.name = …` assignments of its constructor.
 *
 * @param {ts.ClassDeclaration} node
 * @param {(node: ts.Node) => number} lineOf
 */
const classMembers = (node, lineOf) => {
  const members = new Map();

  for (const member of node.members) {
    if (ts.isConstructorDeclaration(member)) {
      members.set('constructor', lineOf(member));

      for (const statement of member.body?.statements ?? []) {
        const expression = ts.isExpressionStatement(statement)
          ? statement.expression
          : undefined;

        if (
          expression &&
          ts.isBinaryExpression(expression) &&
          expression.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
          ts.isPropertyAccessExpression(expression.left) &&
          expression.left.expression.kind === ts.SyntaxKind.ThisKeyword &&
          !members.has(expression.left.name.text)
        ) {
          members.set(expression.left.name.text, lineOf(statement));
        }
      }
    } else if (member.name && ts.isIdentifier(member.name)) {
      if (!members.has(member.name.text)) {
        members.set(member.name.text, lineOf(member));
      }
    }
  }

  return members;
};

/**
 * Where webpack's `lib` declares its classes, top-level functions and
 * constants, and JSDoc typedefs, by name.
 *
 * @param {string} root The webpack package
 */
const indexSources = root => {
  const classes = new Map();
  const values = new Map();
  const typedefs = new Map();

  const files = readdirSync(join(root, 'lib'), { recursive: true })
    .filter(file => file.endsWith('.js'))
    .map(file => join(root, 'lib', file));

  for (const path of files) {
    const file = relative(root, path);
    const text = readFileSync(path, 'utf8');
    const source = ts.createSourceFile(path, text, ts.ScriptTarget.Latest);
    const lineOf = node =>
      source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1;

    for (const statement of source.statements) {
      if (ts.isClassDeclaration(statement) && statement.name) {
        add(classes, statement.name.text, {
          file,
          line: lineOf(statement),
          members: classMembers(statement, lineOf),
        });
      } else if (ts.isFunctionDeclaration(statement) && statement.name) {
        add(values, statement.name.text, { file, line: lineOf(statement) });
      } else if (ts.isVariableStatement(statement)) {
        for (const declaration of statement.declarationList.declarations) {
          if (ts.isIdentifier(declaration.name)) {
            add(values, declaration.name.text, {
              file,
              line: lineOf(statement),
            });
          }
        }
      }
    }

    // Typedefs are comments, so they are read line by line, with the
    // `@property` lines of the comment each one is in.
    const lines = text.split('\n');
    lines.forEach((content, index) => {
      const name = content.match(TYPEDEF)?.[1];
      if (!name) return;

      const members = new Map();
      for (let next = index + 1; next < lines.length; next++) {
        if (lines[next].includes('*/') || TYPEDEF.test(lines[next])) break;

        const property = lines[next].match(PROPERTY)?.[1];
        if (property && !members.has(property)) members.set(property, next + 1);
      }

      add(typedefs, name, { file, line: index + 1, members });
    });
  }

  return { classes, values, typedefs };
};

/**
 * The one declaration of a name, or the one in a file named after it when
 * several files declare it.
 *
 * @param {object[] | undefined} entries
 * @param {string} name
 */
const pick = (entries = [], name) => {
  if (entries.length === 1) return entries[0];

  const named = entries.filter(({ file }) => basename(file, '.js') === name);
  return named.length === 1 ? named[0] : undefined;
};

/**
 * Points the source links at the JavaScript in webpack's `lib` that
 * implements each declaration, rather than at `types.d.ts`, which only
 * declares it. Declarations not found there get no source link.
 *
 * @param {import('typedoc').Application} app
 */
export const load = app => {
  app.converter.on(
    Converter.EVENT_RESOLVE_END,
    ({ project }) => {
      const { classes, values, typedefs } = indexSources(
        app.options.getValue('basePath')
      );

      /** @type {Map<import('typedoc').Reflection, { file: string, line: number } | undefined>} */
      const located = new Map();

      /** @param {import('typedoc').Reflection} reflection */
      const ownerOf = reflection => {
        const { parent } = reflection;

        if (parent?.kindOf(ReflectionKind.Class)) {
          return pick(classes.get(parent.name), parent.name);
        }
        if (
          parent?.kindOf(ReflectionKind.Interface | ReflectionKind.TypeAlias)
        ) {
          return pick(typedefs.get(parent.name), parent.name);
        }
      };

      /** @param {import('typedoc').Reflection} reflection */
      const find = reflection => {
        if (reflection.isSignature?.()) return locate(reflection.parent);

        if (reflection.kindOf(ReflectionKind.Class)) {
          return pick(classes.get(reflection.name), reflection.name);
        }
        if (
          reflection.kindOf(ReflectionKind.Function | ReflectionKind.Variable)
        ) {
          return pick(values.get(reflection.name), reflection.name);
        }
        if (
          reflection.kindOf(ReflectionKind.Interface | ReflectionKind.TypeAlias)
        ) {
          return pick(typedefs.get(reflection.name), reflection.name);
        }

        // Inherited members are declared where they are inherited from
        const inherited = reflection.inheritedFrom?.reflection;
        if (inherited && inherited !== reflection) return locate(inherited);

        const owner = ownerOf(reflection);
        const name = reflection.kindOf(ReflectionKind.Constructor)
          ? 'constructor'
          : reflection.name;
        const line = owner?.members.get(name);

        return line ? { file: owner.file, line } : undefined;
      };

      /** @param {import('typedoc').Reflection} reflection */
      const locate = reflection => {
        if (!located.has(reflection)) {
          located.set(reflection, undefined);
          located.set(reflection, find(reflection));
        }
        return located.get(reflection);
      };

      for (const reflection of Object.values(project.reflections)) {
        if (!reflection.sources) continue;

        const source = locate(reflection);
        reflection.sources = source
          ? [new SourceReference(source.file, source.line, 0)]
          : undefined;
      }
    },
    // After `plugins/webpack.mjs` merges the declarations into the project
    -100
  );
};
