import { ReflectionKind } from 'typedoc';
import { fullName } from '../shared/titles.mjs';

const ROOT_GROUP = 'webpack';

const toOutputPath = url => {
  const withoutExtension = url.replace(/\.md$/, '');
  if (withoutExtension === 'README') return '';
  return withoutExtension.replace(/\/index$/, '');
};

const toSidebarLink = url => {
  const path = toOutputPath(url);
  return path ? `/${path}` : '/';
};

const pagePathParts = url =>
  url.replace(/\.md$/, '').split('/').filter(Boolean);

const groupKeyFor = url => {
  const parts = pagePathParts(url);
  return parts.length > 1 ? parts[0] : ROOT_GROUP;
};

const rawPageName = url => {
  if (url === 'README.md') return ROOT_GROUP;
  return (
    pagePathParts(url)
      .at(-1)
      ?.replace(/\/index$/, '') ?? ROOT_GROUP
  );
};

const stripWebpackPrefix = value => value.replace(/^webpack\.?/, '');

const trimGroupPrefix = (value, groupKey) => {
  if (value === groupKey) return rawPageName(`${groupKey}/index.md`);
  return value.startsWith(`${groupKey}.`)
    ? value.slice(groupKey.length + 1)
    : value;
};

const itemLabelFor = (target, url, groupKey) => {
  const name = stripWebpackPrefix(fullName(target));
  const label = trimGroupPrefix(name, groupKey);
  return label || rawPageName(url);
};

const isSidebarTarget = (router, target) => {
  if (
    !target.kindOf?.(
      ReflectionKind.Project | ReflectionKind.Namespace | ReflectionKind.Class
    )
  ) {
    return false;
  }

  if (!router.hasOwnDocument(target)) return false;

  const url = router.getFullUrl(target);
  return url.endsWith('.md') && !url.includes('#');
};

export const sidebar = router => {
  const groups = new Map();

  for (const target of router.getLinkTargets()) {
    if (!isSidebarTarget(router, target)) continue;

    const url = router.getFullUrl(target);
    const groupKey = groupKeyFor(url);
    const group = groups.get(groupKey) ?? [];
    const link = toSidebarLink(url);

    if (!group.some(item => item.link === link)) {
      group.push({
        link,
        label: itemLabelFor(target, url, groupKey),
      });
    }

    groups.set(groupKey, group);
  }

  return [...groups]
    .map(([groupKey, items]) => ({
      groupName: groupKey,
      items,
    }))
    .filter(group => group.items.length);
};
