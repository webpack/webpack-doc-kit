/** The groups of the API reference, with the page kinds they list. */
const GROUPS = [
  { label: 'Namespaces', kinds: ['Namespace', 'Module'] },
  { label: 'Classes', kinds: ['Class'] },
  { label: 'Functions', kinds: ['Function'] },
  { label: 'Variables', kinds: ['Variable'] },
  { label: 'Interfaces', kinds: ['Interface'] },
  { label: 'Enums', kinds: ['Enum'] },
  { label: 'Type Aliases', kinds: ['TypeAlias'] },
  { label: 'Members', kinds: ['Property', 'Method', 'Accessor'] },
];

/**
 * The pages of each group, leaving out groups without pages.
 *
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} pages
 * @param {typeof GROUPS} groups
 */
const groupPages = (pages, groups) =>
  groups
    .map(({ label, kinds }) => ({
      label,
      pages: pages.filter(page => kinds.includes(page.kind)),
    }))
    .filter(group => group.pages.length);

/**
 * Every page of the reference embeds the sidebar, so it only lists these
 * kinds; the others are linked from the index page.
 */
const SIDEBAR_KINDS = ['Namespace', 'Module', 'Class', 'Function'];

const NAMESPACE_KINDS = ['Namespace', 'Module'];

const byLabel = (a, b) => a.label.localeCompare(b.label);

/**
 * The pages directly in a namespace, split into its namespaces and the rest.
 *
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} pages
 * @param {string} prefix The namespace's full name and a dot, or `''` for the
 *   top level
 */
const childrenOf = (pages, prefix) => {
  const own = pages.filter(
    page =>
      page.name.startsWith(prefix) &&
      !page.name.slice(prefix.length).includes('.')
  );

  return {
    namespaces: own.filter(page => NAMESPACE_KINDS.includes(page.kind)),
    others: own.filter(page => !NAMESPACE_KINDS.includes(page.kind)),
  };
};

/**
 * Sidebar links to pages, labelled by their names within the namespace.
 *
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} entries
 * @param {string} prefix
 */
const links = (entries, prefix) =>
  entries
    .map(page => ({ link: page.url, label: page.name.slice(prefix.length) }))
    .sort(byLabel);

/**
 * A namespace collapsed into a sub-group: its own page, its namespaces, then
 * its classes and functions. A namespace exporting none of these is a link.
 *
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} pages
 * @param {import('@doc-kit/typedoc/src/types').PageEntry} namespace
 * @param {string} prefix The prefix of the namespace's own name
 */
const namespaceItem = (pages, namespace, prefix) => {
  const label = namespace.name.slice(prefix.length);
  const items = namespaceItems(pages, `${namespace.name}.`);

  return items.length
    ? { label, items: [{ link: namespace.url, label: 'Overview' }, ...items] }
    : { link: namespace.url, label };
};

/**
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} pages
 * @param {string} prefix
 */
const namespaceItems = (pages, prefix) => {
  const { namespaces, others } = childrenOf(pages, prefix);

  return [
    ...namespaces
      .map(namespace => namespaceItem(pages, namespace, prefix))
      .sort(byLabel),
    ...links(others, prefix),
  ];
};

/**
 * The sidebar of a versioned API reference, from the page list written by
 * `@doc-kit/typedoc`: the overview, the namespaces (collapsed into sub-groups
 * of what they export), the top-level classes and functions, then the
 * configuration options page.
 *
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} pages
 * @param {string} basePath The URL path the reference is served under
 */
export const buildSidebar = (pages, basePath) => {
  const listed = pages.filter(page => SIDEBAR_KINDS.includes(page.kind));
  const { namespaces, others } = childrenOf(listed, '');

  const groups = [
    {
      label: 'Namespaces',
      items: namespaces
        .map(namespace => namespaceItem(listed, namespace, ''))
        .sort(byLabel),
    },
    {
      label: 'Classes',
      items: links(
        others.filter(page => page.kind === 'Class'),
        ''
      ),
    },
    {
      label: 'Functions',
      items: links(
        others.filter(page => page.kind === 'Function'),
        ''
      ),
    },
  ].filter(group => group.items.length);

  return [
    {
      groupName: 'API',
      items: [
        { link: basePath, label: 'Overview' },
        ...groups,
        { link: `${basePath}/options`, label: 'Options' },
      ],
    },
  ];
};

/**
 * The index page of a versioned API reference, linking to every page.
 *
 * @param {Array<import('@doc-kit/typedoc/src/types').PageEntry>} pages
 * @param {string} basePath The URL path the reference is served under
 * @param {string} version The documented webpack version
 */
export const buildIndex = (pages, basePath, version) => {
  const lines = [
    '# API',
    '',
    `The API of webpack ${version}, generated from its type declarations. ` +
      'Its configuration is documented in [Configuration Options](options.md).',
  ];

  for (const { label, pages: entries } of groupPages(pages, GROUPS)) {
    lines.push('', `## ${label}`, '');
    for (const { name, url } of entries) {
      lines.push(`* [\`${name}\`](${url.slice(basePath.length + 1)}.md)`);
    }
  }

  return `${lines.join('\n')}\n`;
};
