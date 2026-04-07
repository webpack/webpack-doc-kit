import { ReflectionKind } from 'typedoc';
import { FAMILY_ROOT_KIND_PRIORITY } from '../../constants.mjs';
import {
  getFamilyCandidates,
  isBranchedName,
  matchesFamilyPrefix,
} from '../../shared/family.mjs';

const pageRootsByContainer = new WeakMap();
const branchedChildrenByRoot = new WeakMap();
const pageAliasesByRoot = new WeakMap();

/**
 * @param {Map<import('typedoc').DeclarationReflection, import('typedoc').DeclarationReflection[]>} directChildren
 * @param {import('typedoc').ContainerReflection | import('typedoc').DeclarationReflection} parent
 * @param {import('typedoc').DeclarationReflection} child
 */
function pushDirectChild(directChildren, parent, child) {
  const children = directChildren.get(parent) ?? [];

  if (!children.includes(child)) {
    children.push(child);
    directChildren.set(parent, children);
  }
}

/**
 * @param {import('typedoc').DeclarationReflection[]} reflections
 */
function buildSameKindIndex(reflections) {
  const directParents = new Map();
  const roots = new Map();
  const directChildren = new Map();

  for (const child of reflections) {
    /** @type {import('typedoc').DeclarationReflection | undefined} */
    let parent;

    for (const candidate of reflections) {
      if (candidate === child || candidate.kind !== child.kind) {
        continue;
      }

      if (!isBranchedName(candidate.name, child.name)) {
        continue;
      }

      if (!parent || candidate.name.length > parent.name.length) {
        parent = candidate;
      }
    }

    directParents.set(child, parent);

    if (parent) {
      pushDirectChild(directChildren, parent, child);
    }
  }

  for (const child of reflections) {
    let root = child;
    let parent = directParents.get(child);

    while (parent) {
      root = parent;
      parent = directParents.get(parent);
    }

    roots.set(child, root);
  }

  return {
    roots,
    directChildren,
    topLevelRoots: reflections.filter(
      reflection => !directParents.get(reflection)
    ),
  };
}

/**
 * @param {string} familyPrefix
 * @param {import('typedoc').DeclarationReflection[]} roots
 */
function pickFamilyRoot(familyPrefix, roots) {
  const exactRoot = roots.find(root => root.name === familyPrefix);

  if (exactRoot) {
    return exactRoot;
  }

  return [...roots].sort((left, right) => {
    const kindDelta =
      (FAMILY_ROOT_KIND_PRIORITY.get(left.kind) ?? Number.MAX_SAFE_INTEGER) -
      (FAMILY_ROOT_KIND_PRIORITY.get(right.kind) ?? Number.MAX_SAFE_INTEGER);

    if (kindDelta !== 0) {
      return kindDelta;
    }

    const lengthDelta = left.name.length - right.name.length;

    if (lengthDelta !== 0) {
      return lengthDelta;
    }

    return left.name.localeCompare(right.name);
  })[0];
}

/**
 * @param {import('typedoc').ContainerReflection} container
 */
function ensureBranchIndex(container) {
  if (
    pageRootsByContainer.has(container) &&
    branchedChildrenByRoot.has(container) &&
    pageAliasesByRoot.has(container)
  ) {
    return;
  }

  const reflections = (container.children ?? []).filter(child =>
    child.isDeclaration()
  );
  const pageRoots = new Map();
  const directChildren = new Map();
  const pageAliases = new Map();
  const assigned = new Set();

  if (container.kindOf(ReflectionKind.Namespace | ReflectionKind.Module)) {
    // Nested namespace/module members stay on the namespace page itself so
    // helper collections like `InnerGraph` render as one root-level document.
    reflections.forEach(reflection => {
      pageRoots.set(reflection, container);
      pushDirectChild(directChildren, container, reflection);
    });

    pageRootsByContainer.set(container, pageRoots);
    branchedChildrenByRoot.set(container, directChildren);
    pageAliasesByRoot.set(container, pageAliases);
    return;
  }

  if (container.kindOf(ReflectionKind.Project)) {
    // At the project root we merge obvious families like `Stats*` or
    // `RuleSet*` into one page to keep the flattened API layout readable.
    const familyCandidates = getFamilyCandidates(reflections);
    const families = new Map();

    reflections.forEach(reflection => {
      const family = familyCandidates.find(candidate =>
        matchesFamilyPrefix(candidate.prefix, reflection)
      );

      if (!family) {
        return;
      }

      const members = families.get(family.prefix) ?? [];
      members.push(reflection);
      families.set(family.prefix, members);
    });

    for (const [familyPrefix, members] of families) {
      const sameKindIndex = buildSameKindIndex(members);
      const familyRoot = pickFamilyRoot(
        familyPrefix,
        sameKindIndex.topLevelRoots
      );

      pageAliases.set(familyRoot, familyPrefix);

      members.forEach(member => {
        pageRoots.set(member, familyRoot);
        assigned.add(member);
      });

      sameKindIndex.topLevelRoots.forEach(root => {
        if (root !== familyRoot) {
          pushDirectChild(directChildren, familyRoot, root);
        }
      });

      sameKindIndex.directChildren.forEach((children, parent) => {
        children.forEach(child =>
          pushDirectChild(directChildren, parent, child)
        );
      });
    }
  }

  const remainingReflections = reflections.filter(
    reflection => !assigned.has(reflection)
  );
  const sameKindIndex = buildSameKindIndex(remainingReflections);

  remainingReflections.forEach(reflection => {
    pageRoots.set(
      reflection,
      sameKindIndex.roots.get(reflection) ?? reflection
    );
  });

  sameKindIndex.directChildren.forEach((children, parent) => {
    children.forEach(child => pushDirectChild(directChildren, parent, child));
  });

  reflections.forEach(reflection => {
    const pageRoot = pageRoots.get(reflection) ?? reflection;

    if (!pageAliases.has(pageRoot)) {
      pageAliases.set(pageRoot, pageRoot.name);
    }
  });

  pageRootsByContainer.set(container, pageRoots);
  branchedChildrenByRoot.set(container, directChildren);
  pageAliasesByRoot.set(container, pageAliases);
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 * @returns {import('typedoc').DeclarationReflection}
 */
export function getBranchRoot(reflection) {
  if (!reflection.parent) {
    return reflection;
  }

  ensureBranchIndex(reflection.parent);

  return (
    pageRootsByContainer.get(reflection.parent)?.get(reflection) ?? reflection
  );
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function getBranchedReflections(reflection) {
  if (reflection.kindOf(ReflectionKind.Namespace | ReflectionKind.Module)) {
    ensureBranchIndex(reflection);

    return branchedChildrenByRoot.get(reflection)?.get(reflection) ?? [];
  }

  if (!reflection.parent) {
    return [];
  }

  ensureBranchIndex(reflection.parent);

  return branchedChildrenByRoot.get(reflection.parent)?.get(reflection) ?? [];
}

/**
 * @param {import('typedoc').DeclarationReflection} reflection
 */
export function getPageAlias(reflection) {
  if (!reflection.parent) {
    return reflection.name;
  }

  ensureBranchIndex(reflection.parent);

  return (
    pageAliasesByRoot.get(reflection.parent)?.get(reflection) ?? reflection.name
  );
}
