import { Converter, ReflectionKind, Renderer } from 'typedoc';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

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
          accessor.comment = accessor.getSignature.comment;
        } else if (accessor.setSignature) {
          accessor.type = accessor.setSignature.parameters?.[0]?.type;
          accessor.comment = accessor.setSignature.comment;
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

    const outputPath = join(app.options.getValue('out'), 'type-map.json');

    try {
      // Ensure directory exists
      mkdirSync(dirname(outputPath), { recursive: true });

      // Write file safely
      writeFileSync(outputPath, JSON.stringify(typeMap, null, 2));
    } catch (err) {
      console.error('Failed to write type-map.json:', err);
    }
  });
}
