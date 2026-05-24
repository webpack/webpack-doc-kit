import createNodeSlugger from '@node-core/doc-kit/src/generators/metadata/utils/slugger.mjs';
import {
  DeclarationReflection,
  PageKind,
  Reflection,
  ReflectionKind,
} from 'typedoc';
import { MemberRouter } from 'typedoc-plugin-markdown';
import { categoryForReflection } from '../shared/categories.mjs';
import { getMemberTitle } from '../shared/titles.mjs';

/**
 * The router owns the public Markdown shape. It keeps one class per file,
 * namespaces on index pages, namespace functions/constants as anchored entries,
 * root plugin classes under plugins/, and structural types on category types
 * pages instead of the root README.
 */
export const SOURCE_METADATA = Symbol.for('webpack-doc-kit.sourceMetadata');
export const TYPE_PAGE_METADATA = Symbol.for(
  'webpack-doc-kit.typePageMetadata'
);

const sluggers = new Map();

// Interfaces and type aliases are still public API, but doc-kit consumes them
// more cleanly when category pages collect them instead of leaving hundreds of
// structural entries on README.md.
const TYPE_PAGE_KINDS = ReflectionKind.Interface | ReflectionKind.TypeAlias;

const fullNameParts = reflection => reflection.getFullName().split('.');

const pagePath = parts => parts.join('/');

const rootExportBaseName = reflection => {
  const category = categoryForReflection(reflection);
  return category ? `${category}/${reflection.name}` : reflection.name;
};

const namespaceBaseName = reflection => {
  if (!reflection.kindOf(ReflectionKind.Namespace)) {
    return;
  }

  const parts = fullNameParts(reflection);

  if (parts.length === 1) {
    const category = categoryForReflection(reflection);

    if (category) {
      return `${category}/${reflection.name}`;
    }

    // Lowercase root namespaces behave like source directories: their classes
    // can live beside an index page, while uppercase namespace-like objects
    // (for example RuntimeGlobals) remain a single file.
    return /^[a-z]/.test(reflection.name)
      ? `${reflection.name}/index`
      : reflection.name;
  }

  return /^[a-z]/.test(reflection.name)
    ? pagePath([...parts, 'index'])
    : pagePath(parts);
};

const classBaseName = reflection => {
  const parts = fullNameParts(reflection);

  if (parts.length === 1) {
    return rootExportBaseName(reflection);
  }

  return pagePath(parts);
};

export const sourcePageBaseName = reflection => {
  if (
    !(reflection instanceof Reflection) ||
    !reflection.kindOf(ReflectionKind.Class | ReflectionKind.Namespace)
  ) {
    return;
  }

  if (reflection.kindOf(ReflectionKind.Class)) {
    return classBaseName(reflection);
  }

  if (reflection.kindOf(ReflectionKind.Namespace)) {
    return namespaceBaseName(reflection);
  }

  return;
};

export const hasSourcePage = reflection =>
  Boolean(sourcePageBaseName(reflection));

export const sourceAnchorName = reflection => {
  if (
    !(reflection instanceof Reflection) ||
    !reflection.kindOf(ReflectionKind.Function | ReflectionKind.Variable)
  ) {
    return;
  }

  const baseName = sourcePageBaseName(reflection);
  if (!baseName || baseName.split('/').at(-1) === reflection.name) {
    return;
  }

  return reflection[SOURCE_METADATA]?.anchorName;
};

const typePageBaseName = reflection => {
  const category = categoryForReflection(reflection);
  return category ? `${category}/types` : 'types';
};

const typePageTitle = baseName =>
  baseName === 'types'
    ? 'webpack.types'
    : `webpack.${baseName.replace(/\/types$/, '').replace(/\//g, '.')}.types`;

const typePageName = baseName => baseName.replace(/\//g, '.');

const removeChildren = (items, moved) =>
  items?.filter(item => !moved.has(item));

const removeFromGroups = (groups, moved) =>
  groups
    ?.map(group => ({
      ...group,
      children: group.children.filter(child => !moved.has(child)),
      categories: removeFromGroups(group.categories, moved),
    }))
    .filter(group => group.children.length || group.categories?.length);

const makeTypeGroup = (title, children) =>
  children.length ? { title, children } : undefined;

const createTypePage = (project, baseName, children) => {
  const page = new DeclarationReflection(
    typePageName(baseName),
    ReflectionKind.Namespace,
    project
  );
  const interfaces = children.filter(child =>
    child.kindOf(ReflectionKind.Interface)
  );
  const typeAliases = children.filter(child =>
    child.kindOf(ReflectionKind.TypeAlias)
  );

  page.children = children;
  page.childrenIncludingDocuments = children;
  page.groups = [
    makeTypeGroup('Interfaces', interfaces),
    makeTypeGroup('Type Aliases', typeAliases),
  ].filter(Boolean);
  // Synthetic type pages are not TypeDoc declarations from the input file. This
  // metadata gives the theme and router a stable title and output path for them.
  page[TYPE_PAGE_METADATA] = {
    baseName,
    title: typePageTitle(baseName),
  };

  return page;
};

const compareByName = (a, b) => a.name.localeCompare(b.name);

export class DocKitRouter extends MemberRouter {
  /** @param {import('typedoc').ProjectReflection} project */
  buildPages(project) {
    const typePages = this.prepareTypePages(project);
    const pages = super.buildPages(project);

    for (const { baseName, children, model } of typePages) {
      const url = this.getFileName(baseName);
      this.fullUrls.set(model, url);
      pages.push({ kind: PageKind.Reflection, model, url });

      for (const child of children) {
        this.buildAnchors(child, model);
      }
    }

    return pages;
  }

  /** @param {import('typedoc').ProjectReflection} project */
  prepareTypePages(project) {
    const movedTypes = (project.children ?? [])
      .filter(child => child.kindOf(TYPE_PAGE_KINDS))
      .sort(compareByName);
    const movedSet = new Set(movedTypes);
    const byPage = new Map();

    for (const reflection of movedTypes) {
      const baseName = typePageBaseName(reflection);
      const group = byPage.get(baseName) ?? [];
      group.push(reflection);
      byPage.set(baseName, group);
    }

    // Remove moved structural types from the project root before TypeDoc builds
    // README.md; their URLs are rebuilt below against the synthetic type pages.
    project.children = removeChildren(project.children, movedSet);
    project.childrenIncludingDocuments = removeChildren(
      project.childrenIncludingDocuments,
      movedSet
    );
    project.groups = removeFromGroups(project.groups, movedSet);
    project.categories = removeFromGroups(project.categories, movedSet);

    return [...byPage].map(([baseName, children]) => ({
      baseName,
      children,
      model: createTypePage(project, baseName, children),
    }));
  }

  /**
   * @param {import('typedoc').DeclarationReflection} reflection
   * @param {import('typedoc').MarkdownPageEvent<import('typedoc').RouterTarget>[]} outPages
   */
  buildChildPages(reflection, outPages) {
    const kind = this.getPageKind(reflection);

    if (!kind) {
      // Functions and constants are entries on their parent page, never files.
      this.buildAnchors(reflection, reflection.parent);
      return;
    }

    if (hasSourcePage(reflection)) {
      const shouldWritePage = this.shouldWritePage(reflection);
      const idealName = this.getIdealBaseName(reflection);
      const actualName = shouldWritePage
        ? this.getFileName(idealName)
        : `${idealName}${this.extension}`;

      this.fullUrls.set(reflection, actualName);

      if (shouldWritePage) {
        outPages.push({ kind, model: reflection, url: actualName });
      }
    } else if (
      !reflection.kindOf(
        ReflectionKind.Module |
          ReflectionKind.Namespace |
          ReflectionKind.Document
      )
    ) {
      this.buildAnchors(reflection, reflection.parent);
    }

    reflection.traverse(child => {
      this.buildChildPages(child, outPages);
      return true;
    });
  }

  /** @param {import('typedoc').DeclarationReflection} reflection */
  getIdealBaseName(reflection) {
    return sourcePageBaseName(reflection) ?? super.getIdealBaseName(reflection);
  }

  /** @param {import('typedoc').RouterTarget} pageTarget */
  getSlugger(pageTarget) {
    if (sluggers.has(pageTarget)) {
      return sluggers.get(pageTarget);
    }

    // Use doc-kit's slugger so type-map anchors match the parser's heading
    // normalization instead of TypeDoc's default GitHub-style slugs.
    const slugger = createNodeSlugger();
    sluggers.set(pageTarget, slugger);
    return slugger;
  }

  /** @param {import('typedoc').RouterTarget} target */
  getAnchoredURL(target) {
    const fullUrl = this.getFullUrl(target);
    const [page, routedAnchor] = fullUrl.split('#');
    const anchor =
      routedAnchor ?? sourceAnchorName(target) ?? this.getAnchor(target);
    const pageUrl = anchor ? page.replace(/\.md$/, '.html') : page;

    return anchor ? `${pageUrl}#${anchor}` : page;
  }

  /**
   * @param {import('typedoc').RouterTarget} target
   * @param {import('typedoc').RouterTarget} pageTarget
   */
  buildAnchors(target, pageTarget) {
    if (
      !(target instanceof Reflection) ||
      !(pageTarget instanceof Reflection)
    ) {
      return;
    }

    const pageUrl = this.fullUrls.get(pageTarget);
    if (!pageUrl) return;

    if (
      !target.isDeclaration() &&
      !target.isSignature() &&
      !target.isTypeParameter()
    ) {
      return;
    }

    if (
      target.kindOf(ReflectionKind.TypeLiteral) &&
      (!target.parent?.kindOf(ReflectionKind.SomeExport) ||
        target.parent.type?.type !== 'reflection')
    ) {
      return;
    }

    if (!target.kindOf(ReflectionKind.TypeLiteral)) {
      const title = getMemberTitle(target);
      const anchor = this.getSlugger(pageTarget).slug(title);

      this.fullUrls.set(
        target,
        `${pageUrl.replace(/\.md$/, '.html')}#${anchor}`
      );
      this.anchors.set(target, anchor);
    }

    target.traverse(child => {
      this.buildAnchors(child, pageTarget);
      return true;
    });
  }
}
