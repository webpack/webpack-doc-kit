import { matchesFamilyPrefix, getFamilyCandidates } from './shared/family.mjs';
import {
  getPageTarget,
  getRoutingAliases,
} from './theme/utils/routing/state.mjs';
import { visitTypeDeclarations } from './shared/type-visitor.mjs';
import { Converter, ReflectionKind, Renderer } from 'typedoc';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * @param {import('typedoc').ProjectReflection} project
 */
function normalizeAccessors(project) {
  project.getReflectionsByKind(ReflectionKind.Accessor).forEach(accessor => {
    accessor.kind = ReflectionKind.Property;

    if (accessor.getSignature) {
      accessor.type = accessor.getSignature.type;
      accessor.comment = accessor.getSignature.comment;
    } else if (accessor.setSignature) {
      accessor.type = accessor.setSignature.parameters?.[0]?.type;
      accessor.comment = accessor.setSignature.comment;
    }
  });
}

/**
 * @param {import('typedoc').ProjectReflection} project
 */
function removeReferenceReflections(project) {
  project
    .getReflectionsByKind(ReflectionKind.Reference)
    .forEach(reference => project.removeReflection(reference));
}

/**
 * @param {import('typedoc').SomeType | undefined} type
 * @returns {import('typedoc').DeclarationReflection | undefined}
 */
function getLargestTypeDeclaration(type) {
  /** @type {import('typedoc').DeclarationReflection | undefined} */
  let objectDeclaration;

  visitTypeDeclarations(type, declaration => {
    if (
      declaration.children?.length &&
      (!objectDeclaration ||
        declaration.children.length > objectDeclaration.children.length)
    ) {
      objectDeclaration = declaration;
    }
  });

  return objectDeclaration;
}

/**
 * @param {import('typedoc').DeclarationReflection} declaration
 * @param {import('typedoc').DeclarationReflection} child
 */
function removeTypeDeclarationChild(declaration, child) {
  declaration.children = declaration.children?.filter(entry => entry !== child);
  declaration.childrenIncludingDocuments =
    declaration.childrenIncludingDocuments?.filter(entry => entry !== child);
}

/**
 * @param {import('typedoc').ProjectReflection} project
 */
function normalizeExportAssignmentVariables(project) {
  project
    .getReflectionsByKind(ReflectionKind.Variable)
    .filter(reflection => reflection.name === 'export=')
    .forEach(exportAssignment => {
      const normalizedName = exportAssignment.parent?.name;

      if (!normalizedName) {
        return;
      }

      exportAssignment.name = normalizedName;

      const objectDeclaration = getLargestTypeDeclaration(
        exportAssignment.type
      );

      const selfProperty = objectDeclaration?.children?.find(
        child => child.name === normalizedName
      );

      if (objectDeclaration && selfProperty) {
        removeTypeDeclarationChild(objectDeclaration, selfProperty);
      }
    });
}

/**
 * @param {import('typedoc').ProjectReflection} project
 * @param {import('typedoc').DeclarationReflection} reflection
 */
function moveReflectionToProject(project, reflection) {
  if (
    reflection.parent === project &&
    project.childrenIncludingDocuments?.includes(reflection)
  ) {
    return;
  }

  reflection.parent = project;
  project.addChild(reflection);
  project.registerReflection(reflection);
}

/**
 * @param {import('typedoc').ProjectReflection} project
 * @param {string} name
 */
function hasProjectChild(project, name) {
  return project.childrenIncludingDocuments?.some(child => child.name === name);
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
function shouldPromoteNestedExport(reflection) {
  return /^[A-Z][A-Za-z0-9]*$/.test(reflection.name);
}

/**
 * @param {import('typedoc').ProjectReflection} project
 * @param {import('typedoc').DeclarationReflection} reflection
 */
function promoteNestedExportMembers(project, reflection) {
  if (
    shouldPromoteNestedExport(reflection) &&
    !hasProjectChild(project, reflection.name)
  ) {
    moveReflectionToProject(project, reflection);
  }

  reflection.children
    ?.filter(child => child.isDeclaration())
    .forEach(child => promoteNestedExportMembers(project, child));
}

/**
 * @param {import('typedoc').DeclarationReflection} module
 */
function getModuleBaseName(module) {
  return module.name.split('/').at(-1) ?? module.name;
}

/**
 * Declaration entrypoints are only used to recover public helper types that
 * never make it into `types.d.ts`. We promote symbols that either match the
 * file's main family (`ContainerPlugin*`) or belong to another stable family
 * declared alongside it (`Consumes*`, `Exposes*`, etc.).
 *
 * @param {import('typedoc').DeclarationReflection} module
 * @param {import('typedoc').DeclarationReflection} child
 * @param {string[]} familyPrefixes
 */
function shouldPromoteDeclarationModuleChild(module, child, familyPrefixes) {
  const moduleBaseName = getModuleBaseName(module);

  if (matchesFamilyPrefix(moduleBaseName, child)) {
    return true;
  }

  return familyPrefixes.some(prefix => matchesFamilyPrefix(prefix, child));
}

/**
 * @param {import('typedoc').ProjectReflection} project
 * @param {import('typedoc').DeclarationReflection} module
 */
function moveDeclarationModuleChildren(project, module) {
  const children =
    module.children?.filter(child => child.isDeclaration()) ?? [];
  const familyPrefixes = getFamilyCandidates(children);

  children
    .filter(child =>
      shouldPromoteDeclarationModuleChild(module, child, familyPrefixes)
    )
    .forEach(child => {
      // When `types.d.ts` already exports a symbol, prefer that richer
      // reflection over the declaration-file duplicate.
      if (!hasProjectChild(project, child.name)) {
        moveReflectionToProject(project, child);
      }
    });
}

/**
 * @param {import('typedoc').ProjectReflection} project
 * @param {import('typedoc').DeclarationReflection} module
 */
function moveTypesModuleChildren(project, module) {
  const exportAssignments =
    module.children?.filter(
      child => child.isDeclaration() && child.name === 'export='
    ) ?? [];

  module.children
    ?.filter(child => child.isDeclaration() && child.name !== 'export=')
    .forEach(child => moveReflectionToProject(project, child));

  exportAssignments.forEach(exportAssignment =>
    exportAssignment.children
      ?.filter(child => child.isDeclaration())
      .forEach(child => promoteNestedExportMembers(project, child))
  );
}

/**
 * Rebuild the project child list from three different sources:
 * 1. `lib` contributes the root `webpack` export object page.
 * 2. `types.d.ts` contributes the primary public declarations.
 * 3. declaration-file entrypoints contribute exported helper families that are
 *    referenced publicly but never re-exported through `types.d.ts`.
 *
 * @param {import('typedoc').ProjectReflection} project
 */
function flattenEntryPointModules(project) {
  const entryModules =
    project.childrenIncludingDocuments?.filter(
      child =>
        child.isDeclaration() &&
        child.kindOf(ReflectionKind.Module) &&
        (child.name === 'lib' ||
          child.name === 'types' ||
          child.name === 'declarations' ||
          child.name.startsWith('declarations/'))
    ) ?? [];

  const libModule = entryModules.find(module => module.name === 'lib');
  const typesModule = entryModules.find(module => module.name === 'types');
  const declarationModules = entryModules.filter(
    module =>
      module.name === 'declarations' || module.name.startsWith('declarations/')
  );

  const libRootExport = libModule?.children
    ?.filter(child => child.isDeclaration())
    .find(
      child => child.name === 'export=' && child.kindOf(ReflectionKind.Variable)
    );

  if (libRootExport) {
    // The runtime export object should render as `webpack`, not `export=`.
    libRootExport.name = project.name;

    const objectDeclaration = getLargestTypeDeclaration(libRootExport.type);
    const selfProperty = objectDeclaration?.children?.find(
      child => child.name === project.name
    );

    if (objectDeclaration && selfProperty) {
      removeTypeDeclarationChild(objectDeclaration, selfProperty);
    }

    moveReflectionToProject(project, libRootExport);
  }

  if (typesModule) {
    moveTypesModuleChildren(project, typesModule);
  }

  declarationModules.forEach(module =>
    moveDeclarationModuleChildren(project, module)
  );

  entryModules.forEach(module => project.removeReflection(module));

  delete project.groups;
  delete project.categories;
}

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
function writeTypeMap(app) {
  const getUrl =
    typeof app.renderer.router.getAnchoredURL === 'function'
      ? target => app.renderer.router.getAnchoredURL(target)
      : target => app.renderer.router.getFullUrl(target);

  const typeMap = Object.fromEntries(
    app.renderer.router.getLinkTargets().flatMap(target => {
      const url = getUrl(target);
      const aliasTarget =
        target.isDeclaration?.() &&
        getPageTarget(target) !== target &&
        getPageTarget(target).name === target.name
          ? getPageTarget(target)
          : target;
      const aliasUrl = getUrl(aliasTarget);
      const entries = [[target.getFullName(), url]];

      getRoutingAliases(target).forEach(key => {
        entries.push([key, aliasUrl]);
      });

      return entries;
    })
  );

  writeFileSync(
    join(app.options.getValue('out'), 'type-map.json'),
    JSON.stringify(typeMap, null, 2)
  );
}

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, context => {
    normalizeAccessors(context.project);
    removeReferenceReflections(context.project);
    flattenEntryPointModules(context.project);
    normalizeExportAssignmentVariables(context.project);
  });

  app.renderer.on(Renderer.EVENT_END, () => {
    writeTypeMap(app);
  });
}
