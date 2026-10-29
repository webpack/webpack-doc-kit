import { Converter, ReflectionKind } from 'typedoc';

/**
 * Containers TypeDoc puts webpack's declarations in, which `@doc-kit/typedoc`
 * does not look into: it documents the children of the project (or of its
 * entry-point modules).
 *
 * - `export=`: webpack's `types.d.ts` is a CommonJS declaration file, and
 *   `export = exports` parks the real exports in a namespace of that name.
 * - `<internal>`: `typedoc-plugin-missing-exports` collects the unexported
 *   types the exports refer to in a module of that name.
 */
const CONTAINERS = new Set(['export=', '<internal>']);

/**
 * Merges both containers into the project, so their declarations get pages.
 * The callable side of `export =` (a function named `export=`) is dropped:
 * it is `webpack()`, which the `webpack` variable already documents.
 *
 * @param {import('typedoc').Application} app
 */
export const load = app => {
  app.converter.on(Converter.EVENT_RESOLVE_END, ({ project }) => {
    const containers = (project.children ?? []).filter(
      child =>
        child.kindOf(ReflectionKind.SomeModule) && CONTAINERS.has(child.name)
    );

    for (const container of containers) {
      project.mergeReflections(container, project);
    }

    for (const child of [...(project.children ?? [])]) {
      if (child.name === 'export=') project.removeReflection(child);
    }
  });
};
