import { Comment, DeclarationReflection, ReflectionKind } from 'typedoc';
import { categoryForReflection } from '../shared/categories.mjs';
import { setTypePageMetadata } from './metadata.mjs';
import { soleOwnerPages } from './ownership.mjs';

export const TYPE_PAGE_HEADING_KINDS =
  ReflectionKind.Interface | ReflectionKind.TypeAlias;

const TYPE_PAGE_NOTICE =
  'These types are not exported by webpack, but they are available to TypeScript consumers.';

const categoryNameForReflection = reflection =>
  categoryForReflection(reflection)?.category;

const typePageBaseName = reflection => {
  const category = categoryNameForReflection(reflection);
  return category ? `${category}/types` : 'types';
};

const typePageNamespace = baseName =>
  baseName === 'types'
    ? 'webpack'
    : `webpack.${baseName.replace(/\/types$/, '').replace(/\//g, '.')}`;

const typePageTitle = baseName => `\`${typePageNamespace(baseName)}\` Types`;

const typePageName = baseName => baseName.replace(/\//g, '.');

const typePageComment = () =>
  new Comment([
    {
      kind: 'text',
      text: TYPE_PAGE_NOTICE,
    },
  ]);

const attachToOwner = (owner, children) => {
  for (const child of children) {
    child.parent = owner;
    owner.addChild(child);
  }

  owner.groups = [...(owner.groups ?? []), { title: 'Types', children }];
};

const removeChildren = (items, moved) =>
  items?.filter(item => !moved.has(item));

const removeFromGroups = (groups, moved) =>
  groups
    ?.map(group => ({
      ...group,
      children: group.children.filter(child => !moved.has(child)),
      categories: removeFromGroups(group.categories, moved),
    }))
    .filter(group => group.children.length || group.categories?.length);

const makeTypeGroup = (title, children) =>
  children.length ? { title, children } : undefined;

const createTypePage = (project, baseName, children) => {
  const page = new DeclarationReflection(
    typePageName(baseName),
    ReflectionKind.Namespace,
    project
  );
  const interfaces = children.filter(child =>
    child.kindOf(ReflectionKind.Interface)
  );
  const typeAliases = children.filter(child =>
    child.kindOf(ReflectionKind.TypeAlias)
  );

  page.children = children;
  page.childrenIncludingDocuments = children;
  page.comment = typePageComment();
  page.groups = [
    makeTypeGroup('Interfaces', interfaces),
    makeTypeGroup('Type Aliases', typeAliases),
  ].filter(Boolean);

  setTypePageMetadata(page, {
    baseName,
    title: typePageTitle(baseName),
  });

  return page;
};

const compareByName = (a, b) => a.name.localeCompare(b.name);

/**
 * Move root interfaces and type aliases onto the page that owns them so they
 * remain linkable without appearing as root API exports.
 *
 * @param {import('typedoc').ProjectReflection} project
 */
export const createTypePages = project => {
  const movedTypes = (project.children ?? [])
    .filter(child => child.kindOf(TYPE_PAGE_HEADING_KINDS))
    .sort(compareByName);
  const movedSet = new Set(movedTypes);
  const ownerPages = soleOwnerPages(project, movedTypes);
  const byPage = new Map();
  const byOwner = new Map();

  for (const reflection of movedTypes) {
    const owner = ownerPages.get(reflection);

    if (owner) {
      const siblings = byOwner.get(owner) ?? [];
      siblings.push(reflection);
      byOwner.set(owner, siblings);
      continue;
    }

    const baseName = typePageBaseName(reflection);
    const group = byPage.get(baseName) ?? [];
    group.push(reflection);
    byPage.set(baseName, group);
  }

  // Remove moved structural types from the project root before TypeDoc builds
  // README.md; their URLs are rebuilt by the router against these pages.
  project.children = removeChildren(project.children, movedSet);
  project.childrenIncludingDocuments = removeChildren(
    project.childrenIncludingDocuments,
    movedSet
  );
  project.groups = removeFromGroups(project.groups, movedSet);
  project.categories = removeFromGroups(project.categories, movedSet);

  for (const [owner, children] of byOwner) {
    attachToOwner(owner, children);
  }

  return [...byPage].map(([baseName, children]) => ({
    baseName,
    children,
    model: createTypePage(project, baseName, children),
  }));
};
