import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fetchWithRetry } from '../utils/fetch.mjs';
import { rewriteRelativeLinks } from './sanitize.mjs';

const REPO = 'webpack/governance';
const RAW_URL = `https://raw.githubusercontent.com/${REPO}/HEAD`;
// GitHub's editor needs a real branch name, HEAD only works for reading.
const EDIT_URL = `https://github.com/${REPO}/edit/main`;

const { GH_TOKEN } = process.env;

const BASE_HEADERS = {
  ...(GH_TOKEN && { Authorization: `Bearer ${GH_TOKEN}` }),
};

// Maps source filenames in webpack/governance repo to their output slug and sidebar label.
// Insertion order determines sidebar order, this could be changed as per need.
const FILE_MAP = {
  'README.md': { output: 'index', label: 'Overview' },
  'CHARTER.md': { output: 'charter', label: 'Charter' },
  'MEMBER_EXPECTATIONS.md': {
    output: 'member-expectations',
    label: 'Member Expectations',
  },
  'MODERATION_POLICY.md': {
    output: 'moderation-policy',
    label: 'Moderation Policy',
  },
  'WORKING_GROUPS.md': { output: 'working-groups', label: 'Working Groups' },
  'AI_POLICY.md': { output: 'ai-policy', label: 'AI Policy' },
};

const pageLink = output =>
  output === 'index' ? '/about/governance' : `/about/governance/${output}`;

// Derived from FILE_MAP - stays in sync automatically if entries are added/removed.
const LINK_REWRITE_MAP = Object.fromEntries(
  Object.entries(FILE_MAP).map(([source, { output }]) => [
    source,
    pageLink(output),
  ])
);

const outputDir = join(
  import.meta.dirname,
  '..',
  '..',
  'pages',
  'about',
  'governance'
);
await mkdir(outputDir, { recursive: true });

const results = await Promise.all(
  Object.entries(FILE_MAP).map(async ([source, { output, label }]) => {
    const res = await fetchWithRetry(`${RAW_URL}/${source}`, {
      headers: BASE_HEADERS,
    });

    if (!res.ok) {
      console.error(`Failed: ${source} -> ${res.status} ${res.statusText}`);
      return null;
    }

    let body = rewriteRelativeLinks(
      await res.text(),
      file => LINK_REWRITE_MAP[file] ?? null
    );

    // Some governance docs (e.g. MEMBER_EXPECTATIONS.md) have no H1, which the
    // site derives the page title from — fall back to the sidebar label.
    if (!/^# /m.test(body)) body = `# ${label}\n\n${body}`;

    const content = `---\nsource: ${EDIT_URL}/${source}\n---\n\n${body}`;
    await writeFile(join(outputDir, `${output}.md`), content, 'utf8');
    console.log(`Fetched: ${source} -> ${output}.md`);
    return { output, label };
  })
);

const fetched = results.filter(Boolean);

const siteJson = {
  sidebar: [
    {
      groupName: 'Governance',
      items: fetched.map(({ output, label }) => ({
        link: pageLink(output),
        label,
      })),
    },
  ],
};

await writeFile(
  join(outputDir, 'site.json'),
  JSON.stringify(siteJson, null, 2) + '\n',
  'utf8'
);
console.log(
  `Written: pages/about/governance/site.json (${fetched.length} pages)`
);
