import { Converter, ReflectionKind, Renderer } from 'typedoc';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, context => {
    // Convert accessors to properties
    context.project
      .getReflectionsByKind(ReflectionKind.Accessor)
      .forEach(accessor => {
        accessor.kind = ReflectionKind.Property;
        if (accessor.getSignature) {
          accessor.type = accessor.getSignature.type;
          accessor.comment = accessor.getSignature.comment ?? accessor.comment;
        } else if (accessor.setSignature) {
          accessor.type = accessor.setSignature.parameters?.[0]?.type;
          accessor.comment = accessor.setSignature.comment ?? accessor.comment;
        }
      });

    // Remove re-exports
    context.project
      .getReflectionsByKind(ReflectionKind.Reference)
      .forEach(ref => context.project.removeReflection(ref));

    // Merge `export=` namespaces into their parent
    context.project
      .getReflectionsByKind(ReflectionKind.Namespace)
      .filter(ref => ref.name === 'export=')
      .forEach(namespace =>
        context.project.mergeReflections(namespace, namespace.parent)
      );
  });

  app.renderer.on(Renderer.EVENT_END, () => {
    const typeMap = Object.fromEntries(
      app.renderer.router
        .getLinkTargets()
        .map(target => [
          target.getFullName(),
          app.renderer.router.getAnchoredURL(target),
        ])
    );

    writeFileSync(
      join(app.options.getValue('out'), 'type-map.json'),
      JSON.stringify(typeMap, null, 2)
    );
  });
}
