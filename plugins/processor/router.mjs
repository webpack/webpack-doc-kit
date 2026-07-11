import createNodeSlugger from '@node-core/doc-kit/src/generators/metadata/utils/slugger.mjs';
import { PageKind, Reflection, ReflectionKind } from 'typedoc';
import { MemberRouter } from 'typedoc-plugin-markdown';
import { categoryForReflection } from '../shared/categories.mjs';
import { getConstructorTitle, getMemberTitle } from '../shared/titles.mjs';
import { getSourceMetadata, isTypePage } from './metadata.mjs';
import { createTypePages, TYPE_PAGE_HEADING_KINDS } from './synthetic.mjs';
import { normalizeLink } from '../../utils/helpers/urls.mjs';

/**
 * The router owns the public Markdown shape. It keeps one class per file,
 * namespaces on index pages, namespace functions/constants as anchored entries,
 * root plugin classes under plugins/, and structural types on category types
 * pages instead of the root README.
 */
const sluggers = new Map();

const NON_HEADING_KINDS =
  ReflectionKind.Property |
  ReflectionKind.EnumMember |
  ReflectionKind.SomeSignature |
  ReflectionKind.TypeLiteral |
  ReflectionKind.TypeParameter;

const fullNameParts = reflection => reflection.getFullName().split('.');

const pagePath = parts => parts.join('/');

const categoryNameForReflection = reflection =>
  categoryForReflection(reflection)?.category;

const rootExportBaseName = reflection => {
  const category = categoryNameForReflection(reflection);
  return category ? `${category}/${reflection.name}` : reflection.name;
};

const namespaceBaseName = reflection => {
  if (!reflection.kindOf(ReflectionKind.Namespace)) {
    return;
  }

  const parts = fullNameParts(reflection);

  if (parts.length === 1) {
    const category = categoryNameForReflection(reflection);

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

  const anchorName = getSourceMetadata(reflection)?.anchorName;
  if (!anchorName) {
    return;
  }

  const baseName = sourcePageBaseName(reflection.parent);
  if (baseName?.split('/').at(-1) === reflection.name) {
    return;
  }

  return anchorName;
};

const rendersHeading = (target, pageTarget) => {
  if (!target.isDeclaration() || target.kindOf(NON_HEADING_KINDS)) {
    return false;
  }

  return isTypePage(pageTarget) ? target.kindOf(TYPE_PAGE_HEADING_KINDS) : true;
};

const anchorTitle = (target, pageTarget) =>
  target.kindOf(ReflectionKind.Constructor)
    ? getConstructorTitle(target)
    : getMemberTitle(target, { local: isTypePage(pageTarget) });

export class DocKitRouter extends MemberRouter {
  /** @param {import('typedoc').ProjectReflection} project */
  buildPages(project) {
    const typePages = createTypePages(project);
    const pages = super.buildPages(project);

    for (const { baseName, children, model } of typePages) {
      const url = this.getFileName(baseName);
      this.fullUrls.set(model, url);
      pages.push({ kind: PageKind.Reflection, model, url });

      for (const child of children) {
        this.buildAnchors(child, model, { includeChildren: false });
      }
    }

    return pages;
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
      sourceAnchorName(target) ?? routedAnchor ?? this.getAnchor(target);
    const pageUrl = normalizeLink(page);

    return anchor ? `${pageUrl}#${anchor}` : pageUrl;
  }

  /**
   * @param {import('typedoc').RouterTarget} target
   * @param {import('typedoc').RouterTarget} pageTarget
   * @param {{ includeChildren?: boolean }} [options]
   */
  buildAnchors(target, pageTarget, { includeChildren = true } = {}) {
    if (
      !(target instanceof Reflection) ||
      !(pageTarget instanceof Reflection)
    ) {
      return;
    }

    const pageUrl = this.fullUrls.get(pageTarget);
    if (!pageUrl) return;

    // Only publish URLs for headings the custom theme actually renders. TypeDoc
    // exposes signatures, type parameters, class properties, and type literals as
    // reflections too, but in these docs they are signature bodies or typed list
    // items rather than linkable headings.
    if (!rendersHeading(target, pageTarget)) {
      return;
    }

    const title = anchorTitle(target, pageTarget);
    const anchor = this.getSlugger(pageTarget).slug(title);

    this.fullUrls.set(target, `${normalizeLink(pageUrl)}#${anchor}`);
    this.anchors.set(target, anchor);

    if (!includeChildren) {
      return;
    }

    target.traverse(child => {
      this.buildAnchors(child, pageTarget);
      return true;
    });
  }
}
