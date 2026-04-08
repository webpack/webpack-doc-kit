import createNodeSlugger from '@node-core/doc-kit/src/generators/metadata/utils/slugger.mjs';
import { Reflection, ReflectionKind } from 'typedoc';
import { ModuleRouter } from 'typedoc-plugin-markdown';
import { getMemberTitle } from './partials/index.mjs';

const sluggers = new Map([]);

export class DocKitRouter extends ModuleRouter {
  /** @param {import('typedoc').RouterTarget} pageTarget */
  getSlugger(pageTarget) {
    if (sluggers.has(pageTarget)) {
      return sluggers.get(pageTarget);
    } else {
      const slugger = createNodeSlugger();
      sluggers.set(pageTarget, slugger);
      return slugger;
    }
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

      this.fullUrls.set(
        target,
        `${this.fullUrls.get(pageTarget).replace(/\.md$/, '.html')}#${anchor}`
      );
      this.anchors.set(target, anchor);
    }

    target.traverse(child => {
      this.buildAnchors(child, pageTarget);
      return true;
    });
  }
}
