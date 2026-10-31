import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildIndex, buildSidebar } from '../scripts/markdown/api/sidebar.mjs';

const BASE = '/docs/api/v5.x';

const pages = [
  {
    name: 'optimize.SplitChunksPlugin',
    kind: 'Class',
    url: `${BASE}/classes/optimize.SplitChunksPlugin`,
  },
  { name: 'Compiler', kind: 'Class', url: `${BASE}/classes/Compiler` },
  { name: 'optimize', kind: 'Namespace', url: `${BASE}/modules/optimize` },
  { name: 'webpack', kind: 'Function', url: `${BASE}/functions/webpack` },
  { name: 'version', kind: 'Variable', url: `${BASE}/variables/version` },
  {
    name: 'Configuration',
    kind: 'Interface',
    url: `${BASE}/interfaces/Configuration`,
  },
  {
    name: 'Configuration.output',
    kind: 'Property',
    url: `${BASE}/interfaces/Configuration.output`,
  },
];

test('lists namespaces, classes and functions between the overview and the options page', () => {
  assert.deepEqual(buildSidebar(pages, BASE), [
    {
      groupName: 'API',
      items: [
        { link: BASE, label: 'Overview' },
        {
          label: 'Namespaces',
          items: [
            {
              label: 'optimize',
              items: [
                { link: `${BASE}/modules/optimize`, label: 'Overview' },
                {
                  link: `${BASE}/classes/optimize.SplitChunksPlugin`,
                  label: 'SplitChunksPlugin',
                },
              ],
            },
          ],
        },
        {
          label: 'Classes',
          items: [{ link: `${BASE}/classes/Compiler`, label: 'Compiler' }],
        },
        {
          label: 'Functions',
          items: [{ link: `${BASE}/functions/webpack`, label: 'webpack' }],
        },
        { link: `${BASE}/options`, label: 'Options' },
      ],
    },
  ]);
});

test('nests namespaces in namespaces, and links those exporting nothing listed', () => {
  const nested = [
    { name: 'util', kind: 'Namespace', url: `${BASE}/modules/util` },
    {
      name: 'util.runtime',
      kind: 'Namespace',
      url: `${BASE}/modules/util.runtime`,
    },
    {
      name: 'util.runtime.forEachRuntime',
      kind: 'Function',
      url: `${BASE}/functions/util.runtime.forEachRuntime`,
    },
    {
      name: 'RuntimeGlobals',
      kind: 'Namespace',
      url: `${BASE}/modules/RuntimeGlobals`,
    },
  ];

  assert.deepEqual(buildSidebar(nested, BASE)[0].items[1], {
    label: 'Namespaces',
    items: [
      { link: `${BASE}/modules/RuntimeGlobals`, label: 'RuntimeGlobals' },
      {
        label: 'util',
        items: [
          { link: `${BASE}/modules/util`, label: 'Overview' },
          {
            label: 'runtime',
            items: [
              { link: `${BASE}/modules/util.runtime`, label: 'Overview' },
              {
                link: `${BASE}/functions/util.runtime.forEachRuntime`,
                label: 'forEachRuntime',
              },
            ],
          },
        ],
      },
    ],
  });
});

test('leaves out the groups of kinds without pages', () => {
  assert.deepEqual(buildSidebar([], BASE), [
    {
      groupName: 'API',
      items: [
        { link: BASE, label: 'Overview' },
        { link: `${BASE}/options`, label: 'Options' },
      ],
    },
  ]);
});

test('links every page from the index, by kind', () => {
  const index = buildIndex(pages, BASE, '5.0.0');

  assert.match(index, /^# API\n/);
  assert.match(
    index,
    /## Variables\n\n\* \[`version`\]\(variables\/version\.md\)/
  );
  assert.match(
    index,
    /## Members\n\n\* \[`Configuration.output`\]\(interfaces\/Configuration\.output\.md\)/
  );
  assert.doesNotMatch(index, /## Enums/);
});
