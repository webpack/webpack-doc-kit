import { Reflection, ReflectionKind } from 'typedoc';
import {
  CLEAN_TYPE_PATTERN,
  LOWERCASE_START_PATTERN,
} from '../../../constants.mjs';
import { visitTypeDeclarations } from '../../../shared/type-visitor.mjs';
import { getBranchRoot } from '../branching.mjs';
import { NAMESPACE_EXPORTS } from './namespaces.mjs';

const ROUTING_STATE_BY_PROJECT = new WeakMap();

/**
 * @param {import('typedoc').ProjectReflection} project
 */
export function getRootApiReflection(project) {
  return project.childrenIncludingDocuments?.find(
    child =>
      child instanceof Reflection &&
      child.isDeclaration() &&
      child.kindOf(ReflectionKind.Variable) &&
      child.name === project.name
  );
}

/**
 * @param {import('typedoc').Reflection | undefined} reflection
 * @returns {import('typedoc').ProjectReflection | undefined}
 */
function getProject(reflection) {
  let current = reflection;

  while (current && !current.kindOf(ReflectionKind.Project)) {
    current = current.parent;
  }

  return current;
}

/**
 * @param {import('typedoc').SomeType | undefined} type
 * @returns {import('typedoc').DeclarationReflection | undefined}
 */
function getLargestTypeDeclaration(type) {
  /** @type {import('typedoc').DeclarationReflection | undefined} */
  let declaration;

  visitTypeDeclarations(type, d => {
    if (
      d.children?.length &&
      (!declaration || d.children.length > declaration.children.length)
    ) {
      declaration = d;
    }
  });

  return declaration;
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
function getTypeDeclarationChildren(reflection) {
  return (reflection.type?.declaration?.children ?? []).filter(child =>
    child.isDeclaration()
  );
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
function isPropertySubsectionRoot(reflection) {
  const declaration = reflection.type?.declaration;

  return Boolean(
    reflection.kindOf(ReflectionKind.Property) &&
    declaration?.children?.length &&
    !declaration.signatures?.length
  );
}

/**
 * @param {import('typedoc').DeclarationReflection | undefined} reflection
 */
function isNamespacePageReflection(reflection) {
  return Boolean(
    reflection?.kindOf(ReflectionKind.Namespace | ReflectionKind.Module)
  );
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
function shouldOwnSeparatePage(reflection) {
  return reflection.kindOf(
    ReflectionKind.Class |
      ReflectionKind.Interface |
      ReflectionKind.Enum |
      ReflectionKind.TypeAlias
  );
}

/**
 * @param {import('typedoc').ProjectReflection} project
 */
function getProjectReflectionsByName(project) {
  const index = new Map();

  project.childrenIncludingDocuments
    ?.filter(child => child.isDeclaration())
    .forEach(child => {
      const entries = index.get(child.name) ?? [];
      entries.push(child);
      index.set(child.name, entries);
    });

  return index;
}

/**
 * @param {Map<string, import('typedoc').DeclarationReflection[]>} index
 * @param {string} name
 * @param {(reflection: import('typedoc').DeclarationReflection) => boolean} predicate
 */
function findProjectReflection(index, name, predicate) {
  return (index.get(name) ?? []).find(predicate);
}

/**
 * @param {Map<string, import('typedoc').DeclarationReflection[]>} projectIndex
 * @param {import('typedoc').DeclarationReflection} reflection
 * @param {string[]} path
 */
function getNestedSubsectionSpec(projectIndex, reflection, path) {
  if (isPropertySubsectionRoot(reflection)) {
    return {
      pageReflection: reflection,
      aliasReflection: reflection,
      path,
      members: getTypeDeclarationChildren(reflection),
    };
  }

  const namespaceReflection = findProjectReflection(
    projectIndex,
    reflection.name,
    isNamespacePageReflection
  );

  if (namespaceReflection) {
    return {
      pageReflection: namespaceReflection,
      aliasReflection: reflection,
      path,
      members: (namespaceReflection.children ?? []).filter(child =>
        child.isDeclaration()
      ),
    };
  }

  const namespaceMembers = NAMESPACE_EXPORTS.get(reflection.name);

  if (namespaceMembers?.length) {
    return {
      pageReflection: reflection,
      aliasReflection: reflection,
      path,
      members: namespaceMembers
        .map(name =>
          findProjectReflection(projectIndex, name, candidate =>
            shouldOwnSeparatePage(candidate)
          )
        )
        .filter(Boolean),
    };
  }

  return null;
}

/**
 * @param {import('typedoc').ProjectReflection} project
 */
function ensureRoutingState(project) {
  if (ROUTING_STATE_BY_PROJECT.has(project)) {
    return;
  }

  const rootApiReflection = getRootApiReflection(project);
  const rootObjectDeclaration = getLargestTypeDeclaration(
    rootApiReflection?.type
  );
  const projectIndex = getProjectReflectionsByName(project);
  const state = {
    pageTargets: new Map(),
    subsectionPaths: new Map(),
    subsectionRoots: new Set(),
    subsectionChildren: new Map(),
    topLevelRoots: [],
  };

  /**
   * @param {import('typedoc').DeclarationReflection} reflection
   * @param {string[]} path
   * @param {import('typedoc').DeclarationReflection} pageTarget
   */
  const register = (reflection, path, pageTarget) => {
    state.pageTargets.set(reflection, pageTarget);
    state.subsectionPaths.set(reflection, path);
  };

  /**
   * @param {{
   *   pageReflection: import('typedoc').DeclarationReflection,
   *   aliasReflection: import('typedoc').DeclarationReflection,
   *   path: string[],
   *   members: (import('typedoc').DeclarationReflection | undefined)[]
   * }} spec
   */
  const indexSubsection = spec => {
    state.subsectionRoots.add(spec.pageReflection);
    state.subsectionChildren.set(
      spec.pageReflection,
      spec.members.filter(Boolean)
    );
    register(spec.pageReflection, spec.path, spec.pageReflection);

    if (spec.aliasReflection !== spec.pageReflection) {
      register(spec.aliasReflection, spec.path, spec.pageReflection);
    }

    spec.members.forEach(member => {
      if (!member) {
        return;
      }

      const nested = getNestedSubsectionSpec(projectIndex, member, [
        ...spec.path,
        member.name,
      ]);

      if (nested) {
        register(member, nested.path, nested.pageReflection);
        indexSubsection(nested);
        return;
      }

      const promotedPageReflection =
        findProjectReflection(projectIndex, member.name, candidate =>
          shouldOwnSeparatePage(candidate)
        ) ?? (shouldOwnSeparatePage(member) ? member : undefined);

      if (promotedPageReflection) {
        register(member, spec.path, promotedPageReflection);
        register(promotedPageReflection, spec.path, promotedPageReflection);
        return;
      }

      register(member, spec.path, spec.pageReflection);
    });
  };

  rootObjectDeclaration?.children
    ?.filter(child => child.isDeclaration())
    .filter(child => LOWERCASE_START_PATTERN.test(child.name))
    .forEach(child => {
      const subsection = getNestedSubsectionSpec(projectIndex, child, [
        child.name,
      ]);

      if (subsection) {
        state.topLevelRoots.push(subsection.pageReflection);
        indexSubsection(subsection);
      }
    });

  ROUTING_STATE_BY_PROJECT.set(project, state);
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function getSubsectionPath(reflection) {
  const project = getProject(reflection);

  if (!project) {
    return [];
  }

  ensureRoutingState(project);

  return (
    ROUTING_STATE_BY_PROJECT.get(project)?.subsectionPaths.get(reflection) ?? []
  );
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function isSubsectionRoot(reflection) {
  const project = getProject(reflection);

  if (!project) {
    return false;
  }

  ensureRoutingState(project);

  return (
    ROUTING_STATE_BY_PROJECT.get(project)?.subsectionRoots.has(reflection) ??
    false
  );
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function isManualSubsectionPage(reflection) {
  return (
    isSubsectionRoot(reflection) && reflection.kindOf(ReflectionKind.Property)
  );
}

/**
 * @param {import('typedoc').ProjectReflection} project
 */
export function getTopLevelSubsectionRoots(project) {
  ensureRoutingState(project);
  return ROUTING_STATE_BY_PROJECT.get(project)?.topLevelRoots ?? [];
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function getSubsectionChildren(reflection) {
  const project = getProject(reflection);

  if (project) {
    ensureRoutingState(project);

    const subsectionChildren =
      ROUTING_STATE_BY_PROJECT.get(project)?.subsectionChildren.get(reflection);

    if (subsectionChildren) {
      return subsectionChildren;
    }
  }

  return (reflection.children ?? []).filter(child => child.isDeclaration());
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function getPageTarget(reflection) {
  const project = getProject(reflection);

  if (!project) {
    return getBranchRoot(reflection);
  }

  ensureRoutingState(project);

  return (
    ROUTING_STATE_BY_PROJECT.get(project)?.pageTargets.get(reflection) ??
    getBranchRoot(reflection)
  );
}

/**
 * @param {import('typedoc').Reflection} reflection
 */
export function getRoutingAliases(reflection) {
  const aliases = new Set();
  const cleaned = reflection.getFullName().replace(CLEAN_TYPE_PATTERN, '');

  if (cleaned !== reflection.getFullName()) {
    aliases.add(cleaned);
  }

  if (reflection.isDeclaration()) {
    const subsectionPath = getSubsectionPath(reflection);
    const pageTarget = getPageTarget(reflection);

    if (subsectionPath.length) {
      aliases.add(
        isSubsectionRoot(reflection) ||
          (pageTarget !== reflection && pageTarget.name === reflection.name)
          ? `webpack.${subsectionPath.join('.')}`
          : `webpack.${[...subsectionPath, reflection.name].join('.')}`
      );
    }
  }

  return [...aliases];
}
