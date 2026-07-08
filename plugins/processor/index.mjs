import { Converter, ReflectionKind, Renderer } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import { getSourceMetadata } from './metadata.mjs';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { applyExportEqualsReflections } from './exportEquals.mjs';
import { applySourceMetadata } from './source.mjs';
import { DocKitRouter } from './router.mjs';
import { sidebar } from './site.mjs';
import { createTypeMap } from './typeMap.mjs';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
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

    // Destructured parameters are not supported by TypeDoc, so we rename them to
    // a more generic name.
    context.project
      .getReflectionsByKind(ReflectionKind.Parameter)
      .forEach(param => {
        if (param.name.startsWith('__namedParameters')) {
          if (
            param.type?.type === 'reflection' &&
            param.type.declaration?.children
          ) {
            const destructuredKeys = param.type.declaration.children.map(
              child => child.name
            );
            param.name = `{ ${destructuredKeys.join(', ')} }`;
          } else if (param.type?.type === 'reference' && param.type.name) {
            const interfaceName = param.type.name;
            param.name =
              interfaceName[0].toLowerCase() + interfaceName.slice(1);
          } else {
            param.name = 'options';
          }
        }
      });

    applyExportEqualsReflections(context.project);
    applySourceMetadata(context.project);
  });

  app.converter.on(Converter.EVENT_RESOLVE_END, context => {
    const project = context.project;

    const internalModule = project.children?.find(c => c.name === '<internal>');

    if (internalModule) {
      project.mergeReflections(internalModule, project);
    }
  });

  app.renderer.on(MarkdownPageEvent.END, page => {
    const sourceMeta = getSourceMetadata(page.model);

    if (sourceMeta && sourceMeta.sourceRelativePath) {
      const source = `https://github.com/webpack/webpack/edit/main/lib/${sourceMeta.sourceRelativePath}`;
      const frontmatter = `---\n` + `source: ${source}\n` + `---\n\n`;

      page.contents = frontmatter + page.contents;
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
          sidebar: sidebar(
            app.renderer.router,
            app.options.getValue('publicPath')
          ),
        },
        null,
        2
      )
    );
  });
}
