import { Converter, ReflectionKind, Renderer } from "typedoc";
import { renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
    // Convert accessors to properties to simplify documentation
    context.project
      .getReflectionsByKind(ReflectionKind.Accessor)
      .forEach((accessor) => {
        accessor.kind = ReflectionKind.Property;
        if (accessor.getSignature) {
          accessor.type = accessor.getSignature.type;
          accessor.comment = accessor.getSignature.comment;
        } else if (accessor.setSignature) {
          accessor.type = accessor.setSignature.parameters?.[0]?.type;
          accessor.comment = accessor.setSignature.comment;
        }
      });

    // Merge `export=` namespaces into their parent
    context.project
      .getReflectionsByKind(ReflectionKind.Namespace)
      .filter((ref) => ref.name === "export=")
      .forEach((namespace) =>
        context.project.mergeReflections(namespace, namespace.parent),
      );
  });

  app.renderer.on(Renderer.EVENT_END, (context) => {
    const typeMap = Object.fromEntries(
      context.project
        .getReflectionsByKind(ReflectionKind.All)
        .filter((ref) => {
          // Drop internal TypeDoc artifacts
          if (ref.name === "export=" || ref.name === "__type") return false;
          // Drop Reference kind — duplicates of real types
          if (ref.kind === ReflectionKind.Reference) return false;
          // Must have a routable page
          if (!app.renderer.router.hasUrl(ref)) return false;
          return true;
        })
        .map((reference) => [
          reference.getFullName(),
          app.renderer.router.getFullUrl(reference).replace(".md", ".html"),
        ]),
    );

    const typeMapPath = join(app.options.getValue("out"), "type-map.json");
    if (Object.keys(typeMap).length === 0) {
      app.logger.warn(
        "TypeDoc processor: generated typeMap is empty. Check your entry points and routable URLs.",
      );
    }

    const tmpPath = `${typeMapPath}.tmp`;
    try {
      writeFileSync(tmpPath, JSON.stringify(typeMap, null, 2));
      renameSync(tmpPath, typeMapPath);
    } catch (e) {
      app.logger.error(
        `TypeDoc processor: Failed to write atomic type-map.json: ${e.message}`,
      );
    }
  });
}
