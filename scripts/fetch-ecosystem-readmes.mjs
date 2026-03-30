import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const TARGET_DIR = resolve(
  import.meta.dirname,
  '../pages/v5.x/ecosystem/readmes'
);

const SOURCES = [
  {
    slug: 'html-webpack-plugin',
    repo: 'jantimon/html-webpack-plugin',
    branch: 'main',
  },
  {
    slug: 'mini-css-extract-plugin',
    repo: 'webpack-contrib/mini-css-extract-plugin',
    branch: 'master',
  },
  {
    slug: 'css-loader',
    repo: 'webpack-contrib/css-loader',
    branch: 'master',
  },
  {
    slug: 'style-loader',
    repo: 'webpack-contrib/style-loader',
    branch: 'master',
  },
  {
    slug: 'sass-loader',
    repo: 'webpack-contrib/sass-loader',
    branch: 'master',
  },
  {
    slug: 'babel-loader',
    repo: 'babel/babel-loader',
    branch: 'main',
  },
  {
    slug: 'ts-loader',
    repo: 'TypeStrong/ts-loader',
    branch: 'main',
  },
  {
    slug: 'webpack-dev-server',
    repo: 'webpack/webpack-dev-server',
    branch: 'master',
  },
];

const rawUrl = ({ repo, branch }) =>
  `https://raw.githubusercontent.com/${repo}/${branch}/README.md`;

const frontmatter = ({ slug, repo, branch }) =>
  `---\ntitle: ${slug}\nsource: https://github.com/${repo}/blob/${branch}/README.md\n---\n\n`;

const normalizeReadme = markdown => {
  const lines = markdown.split('\n');

  while (lines.length && !lines[0].trim()) lines.shift();
  if (lines[0]?.startsWith('#')) lines.shift();

  const normalized = lines.join('\n').trim();

  // Keep highlighting stable for doc-kit by downgrading unknown fence languages.
  return (
    normalized.replace(/^```([A-Za-z0-9_-]+)$/gm, (_, lang) =>
      /^(bash|sh|shell|js|javascript|ts|typescript|json|yml|yaml|diff|md|markdown|txt|text)$/i.test(
        lang
      )
        ? `\`\`\`${lang}`
        : '```text'
    ) + '\n'
  );
};

await mkdir(TARGET_DIR, { recursive: true });

for (const source of SOURCES) {
  const response = await fetch(rawUrl(source));

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${source.repo} README (${response.status} ${response.statusText})`
    );
  }

  const markdown = normalizeReadme(await response.text());
  const output = frontmatter(source) + markdown;

  await writeFile(resolve(TARGET_DIR, `${source.slug}.md`), output, 'utf8');
}

console.log(`Synced ${SOURCES.length} ecosystem README files.`);
