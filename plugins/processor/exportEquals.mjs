import { ReflectionKind } from 'typedoc';
import { setPublicName } from './metadata.mjs';

const EXPORT_EQUALS_NAME = 'export=';

/**
 * @param {import('typedoc').ProjectReflection} project
 * @param {import('typedoc').Reflection} reflection
 * @returns {string | undefined}
 */
const exportEqualsPublicName = (project, reflection) => {
  const rawParts = String(reflection.getFullName?.() ?? reflection.name).split(
    '.'
  );

  if (!rawParts.includes(EXPORT_EQUALS_NAME)) {
    return;
  }

  const parts = rawParts.filter(part => part && part !== EXPORT_EQUALS_NAME);
  return parts[0] === project.name
    ? parts.join('.')
    : [project.name, ...parts].filter(Boolean).join('.');
};

/**
 * TypeDoc exposes CommonJS `export = webpack` containers and callables as
 * `export=`. Normalize every such reflection while the processor still owns
 * the reflection graph: containers are merged into their parent and remaining
 * declarations get public webpack names.
 *
 * @param {import('typedoc').ProjectReflection} project
 */
export const applyExportEqualsReflections = project => {
  project
    .getReflectionsByKind(ReflectionKind.SomeModule)
    .filter(ref => ref.name === EXPORT_EQUALS_NAME && ref.parent)
    .forEach(namespace =>
      project.mergeReflections(namespace, namespace.parent)
    );

  for (const reflection of project.getReflectionsByKind(ReflectionKind.All)) {
    const name = exportEqualsPublicName(project, reflection);
    if (name) setPublicName(reflection, name || project.name);
  }
};
