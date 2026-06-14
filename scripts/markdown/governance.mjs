import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fetchWithRetry } from '../utils/fetch.mjs';

const { GH_TOKEN } = process.env;

const BASE_HEADERS = {
  ...(GH_TOKEN && { Authorization: `Bearer ${GH_TOKEN}` }),
};

// Maps source filenames in webpack/governance repo to their output slug and sidebar label.
// Insertion order determines sidebar order, this could be changed as per need.
const FILE_MAP = {
  'README.md': { output: 'index', label: 'Governance Overview' },
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

// Derived from FILE_MAP - stays in sync automatically if entries are added/removed.
const LINK_REWRITE_MAP = Object.fromEntries(
  Object.entries(FILE_MAP).map(([source, { output }]) => [
    source,
    `/about/governance/${output}`,
  ])
);

// Rewrites relative cross-references between governance docs.
// Covers both inline [text](./FILE.md) and reference-style [label]: ./FILE.md.
// Negative lookaheads prevent rewriting absolute URLs that happen to end in a known filename.
const rewriteLinks = content =>
  content.replace(
    /(\]\(|\]:\s*)(?!https?:\/\/)(?!\/)(\.\/)?([A-Z_]+\.md)/g,
    (match, prefix, _dot, filename) =>
      LINK_REWRITE_MAP[filename]
        ? `${prefix}${LINK_REWRITE_MAP[filename]}`
        : match
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
    const url = `https://raw.githubusercontent.com/webpack/governance/HEAD/${source}`;
    const res = await fetchWithRetry(url, { headers: BASE_HEADERS });

    if (!res.ok) {
      console.error(`Failed: ${source} -> ${res.status} ${res.statusText}`);
      return null;
    }

    const content = `---\nsource: ${url}\n---\n\n${rewriteLinks(await res.text())}`;
    await writeFile(join(outputDir, `${output}.md`), content, 'utf8');
    console.log(`Fetched: ${source} -> ${output}.md`);
    return { output, label };
  })
);

const fetched = results.filter(Boolean);

const siteJson = {
  sidebar: [
    {
      label: 'Governance',
      items: fetched.map(({ output, label }) => ({
        link: `/about/governance/${output}`,
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
