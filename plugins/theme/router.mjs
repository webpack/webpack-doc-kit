import createNodeSlugger from '@node-core/doc-kit/src/generators/metadata/utils/slugger.mjs';
import { PageKind, Reflection, ReflectionKind, Slugger } from 'typedoc';
import { MemberRouter } from 'typedoc-plugin-markdown';
import { getPageAlias } from './utils/branching.mjs';
import { getMemberTitle } from './utils/members.mjs';
import {
  getPageTarget,
  getRootApiReflection,
  getSubsectionChildren,
  getSubsectionPath,
  getTopLevelSubsectionRoots,
  isManualSubsectionPage,
  isSubsectionRoot,
} from './utils/routing/state.mjs';

const nodeSluggerCache = new Map();

export class DocKitRouter extends MemberRouter {
  // Grouped reflections are often discovered before their chosen page root.
  // Buffer them here so we can attach anchors once the root page has a URL.
  pendingGroupedReflections = new Map();
  seenReflections = new WeakSet();

  /**
   * @param {import('typedoc').ProjectReflection} project
   */
  buildPages(project) {
    this.usedFileNames = new Set();
    this.nodeSluggerCache = new Map([
      [project, new Slugger(this.sluggerConfiguration)],
    ]);
    this.fullUrls = new Map();
    this.anchors = new Map();
    this.pendingGroupedReflections = new Map();
    this.seenReflections = new WeakSet();

    const pages = [];
    project.childrenIncludingDocuments.forEach(child =>
      this.buildChildPages(child, pages)
    );
    getTopLevelSubsectionRoots(project).forEach(child =>
      this.buildChildPages(child, pages)
    );

    const rootApiReflection = getRootApiReflection(project);
    const projectUrl =
      (rootApiReflection && this.fullUrls.get(rootApiReflection)) ||
      pages.find(page => page.kind === PageKind.Reflection)?.url;

    if (projectUrl) {
      this.fullUrls.set(project, projectUrl);
    }

    return pages;
  }

  /**
   * @param {import('typedoc').Reflection} reflection
   */
  getIdealBaseName(reflection) {
    if (
      reflection.parent?.kindOf(ReflectionKind.Project) &&
      reflection.kindOf(ReflectionKind.Variable) &&
      reflection.name === reflection.parent.name
    ) {
      return 'index';
    }

    if (reflection.isDeclaration()) {
      const subsectionPath = getSubsectionPath(reflection);

      if (subsectionPath.length) {
        const basePath = subsectionPath.join('/');

        if (isSubsectionRoot(reflection)) {
          return `${basePath}/index`;
        }

        return `${basePath}/${this.getReflectionAlias(reflection)}`;
      }
    }

    if (reflection.parent?.kindOf(ReflectionKind.Project)) {
      return getPageAlias(reflection);
    }

    return super.getIdealBaseName(reflection);
  }

  /**
   * @param {import('typedoc').Reflection} reflection
   * @param {import('typedoc').PageDefinition<import('typedoc').PageKind>[]} outPages
   */
  buildChildPages(reflection, outPages) {
    if (reflection.isDeclaration()) {
      if (this.seenReflections.has(reflection)) {
        return;
      }

      this.seenReflections.add(reflection);

      const pageTarget = getPageTarget(reflection);

      if (pageTarget !== reflection) {
        if (this.fullUrls.has(pageTarget)) {
          this.buildAnchors(reflection, pageTarget);
        } else {
          // The root page has not been assigned a URL yet, so defer anchor
          // creation until that page is visited.
          const pending = this.pendingGroupedReflections.get(pageTarget) ?? [];
          pending.push(reflection);
          this.pendingGroupedReflections.set(pageTarget, pending);
        }

        return;
      }

      if (isManualSubsectionPage(reflection)) {
        const actualName = this.getFileName(this.getIdealBaseName(reflection));

        this.fullUrls.set(reflection, actualName);
        this.nodeSluggerCache.set(
          reflection,
          new Slugger(this.sluggerConfiguration)
        );
        outPages.push({
          kind: PageKind.Reflection,
          model: reflection,
          url: actualName,
        });

        getSubsectionChildren(reflection).forEach(child => {
          this.buildChildPages(child, outPages);
        });

        const pending = this.pendingGroupedReflections.get(reflection);

        if (pending?.length) {
          pending.forEach(groupedReflection =>
            this.buildAnchors(groupedReflection, reflection)
          );
          this.pendingGroupedReflections.delete(reflection);
        }

        return;
      }
    }

    super.buildChildPages(reflection, outPages);

    const pending = this.pendingGroupedReflections.get(reflection);

    if (pending?.length) {
      pending.forEach(groupedReflection =>
        this.buildAnchors(groupedReflection, reflection)
      );
      this.pendingGroupedReflections.delete(reflection);
    }
  }

  /** @param {import('typedoc').RouterTarget} pageTarget */
  getSlugger(pageTarget) {
    if (nodeSluggerCache.has(pageTarget)) {
      return nodeSluggerCache.get(pageTarget);
    }

    const slugger = createNodeSlugger();
    nodeSluggerCache.set(pageTarget, slugger);
    return slugger;
  }

  /** @param {import('typedoc').RouterTarget} target */
  getAnchoredURL(target) {
    const anchor = this.getAnchor(target);
    const [page] = this.getFullUrl(target).split('#');

    return anchor ? `${page}#${anchor}` : page;
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

      this.fullUrls.set(target, `${this.fullUrls.get(pageTarget)}#${anchor}`);
      this.anchors.set(target, anchor);
    }

    target.traverse(child => {
      this.buildAnchors(child, pageTarget);
      return true;
    });
  }
}
