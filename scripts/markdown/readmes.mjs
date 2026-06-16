import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fetchWithRetry } from '../utils/fetch.mjs';
import cleanupMarkdown from './sanitize.mjs';

const { GH_TOKEN } = process.env;

const BASE_HEADERS = {
  ...(GH_TOKEN && { Authorization: `Bearer ${GH_TOKEN}` }),
  'X-GitHub-Api-Version': '2022-11-28',
};

const parseNextLink = linkHeader =>
  linkHeader?.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;

const discoverRepos = async () => {
  const loaders = [];
  const plugins = [];
  let url =
    'https://api.github.com/orgs/webpack/repos?per_page=100&type=public';

  while (url) {
    const res = await fetchWithRetry(url, { headers: BASE_HEADERS });

    for (const repo of await res.json()) {
      if (repo.archived) continue;
      if (repo.name.endsWith('-loader')) loaders.push(repo.full_name);
      else if (repo.name.endsWith('-plugin')) plugins.push(repo.full_name);
    }

    url = parseNextLink(res.headers.get('link'));
  }

  return { loaders, plugins };
};

// Strip repo chrome, then point any relative links at the source repo on GitHub.
const cleanReadme = (content, fullName) =>
  cleanupMarkdown(
    content,
    target => `https://github.com/${fullName}/blob/HEAD/${target}`
  );

const repoName = fullName => fullName.split('/')[1];

const fetchReadme = async fullName => {
  const url = `https://raw.githubusercontent.com/${fullName}/HEAD/README.md`;
  const res = await fetchWithRetry(url);
  return res.text();
};

const processRepos = async (repos, { label, basePath, outputDir }) => {
  await mkdir(outputDir, { recursive: true });

  const fetched = (
    await Promise.all(
      repos.map(async fullName => {
        const name = repoName(fullName);
        const result = await fetchReadme(fullName);
        await writeFile(
          join(outputDir, `${name}.md`),
          cleanReadme(result, fullName),
          'utf8'
        );
        return name;
      })
    )
  ).sort();

  const siteJson = {
    sidebar: [
      {
        groupName: label,
        items: fetched.map(name => ({
          link: `${basePath}/${name}`,
          label: name.replace(/-(?:webpack-)?(?:loader|plugin)$/, ''),
        })),
      },
    ],
  };
  await writeFile(
    join(outputDir, 'site.json'),
    JSON.stringify(siteJson, null, 2) + '\n',
    'utf8'
  );
};

const args = process.argv.slice(2);
const runLoaders = args.includes('--loaders') || args.length === 0;
const runPlugins = args.includes('--plugins') || args.length === 0;

const root = join(import.meta.dirname, '..', '..');
const { loaders, plugins } = await discoverRepos();

await Promise.all(
  [
    runLoaders &&
      processRepos(loaders, {
        label: 'Loaders',
        basePath: '/docs/loaders',
        outputDir: join(root, 'pages/docs/loaders'),
      }),
    runPlugins &&
      processRepos(plugins, {
        label: 'Plugins',
        basePath: '/docs/plugins',
        outputDir: join(root, 'pages/docs/plugins'),
      }),
  ].filter(Boolean)
);
