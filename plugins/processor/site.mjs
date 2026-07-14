import { ReflectionKind } from 'typedoc';
import { CATEGORY_RULES } from '../shared/categories.mjs';
import { toPublicLink } from '../../utils/helpers/urls.mjs';

const SIDEBAR_KINDS =
  ReflectionKind.Project | ReflectionKind.Namespace | ReflectionKind.Class;

const SIDEBAR_GROUP_NAME = 'API';

const getFirstAtxHeading = text => text.match(/^#\s+(.+)$/m)?.[1]?.trim();

const getFirstPathSegment = url => url.replace(/^\//, '').split('/')[0];

const defaultLabelFor = (target, url) => {
  if (url.endsWith('/index.md')) return 'Overview';
  if (url.endsWith('/types.md')) return 'Types';
  return target.name;
};

const isSidebarTarget = (router, target) => {
  if (!target.kindOf?.(SIDEBAR_KINDS)) return false;
  if (!router.hasOwnDocument(target)) return false;

  const url = router.getFullUrl(target);
  return url.endsWith('.md') && !url.includes('#');
};

export const sidebar = (router, basePath) => {
  const categories = new Map();
  const seen = new Set();

  for (const target of router.getLinkTargets()) {
    if (!isSidebarTarget(router, target)) continue;

    const url = router.getFullUrl(target);
    if (seen.has(url)) continue;
    seen.add(url);

    const firstPathSegment = getFirstPathSegment(url);
    const category = CATEGORY_RULES.find(
      cat => cat.category === firstPathSegment
    );

    if (!category) continue;

    const headingName = getFirstAtxHeading(
      target.comment?.summary?.[0]?.text ?? ''
    );
    const label = headingName ?? defaultLabelFor(target, url);

    const group = categories.get(category.category) ?? {
      label: category.label,
      items: [],
    };

    group.items.push({
      link: toPublicLink(url, basePath),
      label,
    });

    categories.set(category.category, group);
  }

  return [
    {
      groupName: SIDEBAR_GROUP_NAME,
      items: [
        ...[...categories.values()].filter(category => category.items.length),
        {
          link: `${basePath}/options`,
          label: 'Options',
        },
      ],
    },
  ];
};
