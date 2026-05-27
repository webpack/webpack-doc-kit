import { Converter, ReflectionKind, Renderer } from 'typedoc';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { applyExportEqualsReflections } from './exportEquals.mjs';
import { applySourceMetadata } from './source.mjs';
import { DocKitRouter } from './router.mjs';
import { sidebar } from './site.mjs';
import { createTypeMap } from './typeMap.mjs';
import { categoryForReflection } from '../shared/categories.mjs';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  // Keep router ownership in the processor plugin because routing depends on
  // source metadata and the synthetic type pages created during conversion.
  app.renderer.defineRouter('doc-kit', DocKitRouter);

  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, context => {
    // doc-kit has property metadata, not TypeDoc accessor metadata.
    context.project
      .getReflectionsByKind(ReflectionKind.Accessor)
      .forEach(accessor => {
        accessor.kind = ReflectionKind.Property;
        if (accessor.getSignature) {
          accessor.type = accessor.getSignature.type;
          accessor.comment = accessor.getSignature.comment;
        } else if (accessor.setSignature) {
          accessor.type = accessor.setSignature.parameters?.[0]?.type;
          accessor.comment = accessor.setSignature.comment;
        }
      });

    // Reference reflections duplicate the real declaration entries and confuse
    // both routing and the custom type map.
    context.project
      .getReflectionsByKind(ReflectionKind.Reference)
      .forEach(ref => context.project.removeReflection(ref));

    applyExportEqualsReflections(context.project);
    applySourceMetadata(context.project);
  });

  app.converter.on(Converter.EVENT_RESOLVE_END, context => {
    const project = context.project;

    const internalModule = project.children?.find(c => c.name === '<internal>');

    if (internalModule) {
      const importantTypes = [];

      internalModule.children.forEach(child => {
        // TODO: We are calling `categoryForReflection` here, and then again when routing
        // We should cache the result to avoid re-looking up that data
        if (categoryForReflection(child)) {
          importantTypes.push(child);
        } else {
          project.removeReflection(child);
        }
      });

      internalModule.children = importantTypes;
      project.mergeReflections(internalModule, project);
    }
  });

  app.renderer.on(Renderer.EVENT_END, () => {
    // doc-kit resolves custom type annotations from this map while generating
    // HTML, so use the final router URLs instead of recomputing paths here.
    const typeMap = createTypeMap(app.renderer.router);

    writeFileSync(
      join(app.options.getValue('out'), 'type-map.json'),
      JSON.stringify(typeMap, null, 2)
    );

    writeFileSync(
      join(app.options.getValue('out'), 'site.json'),
      JSON.stringify(
        {
          sidebar: sidebar(app.renderer.router),
        },
        null,
        2
      )
    );
  });
}
