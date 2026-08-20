import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fetchWithAuth, fetchWithRetry } from '../utils/fetch.mjs';
import cleanupMarkdown from './sanitize.mjs';
import { toPublicLink } from '../../utils/helpers/urls.mjs';

const parseNextLink = linkHeader =>
  linkHeader?.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;

const discoverRepos = async () => {
  const loaders = [];
  const plugins = [];
  let url =
    'https://api.github.com/orgs/webpack/repos?per_page=100&type=public';

  while (url) {
    const res = await fetchWithAuth(url);
    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}: ${await res.text()}`);
    }

    for (const repo of await res.json()) {
      if (repo.archived) continue;
      const entry = {
        name: repo.name,
        fullName: repo.full_name,
        branch: repo.default_branch,
      };
      if (repo.name.endsWith('-loader')) loaders.push(entry);
      else if (repo.name.endsWith('-plugin')) plugins.push(entry);
    }

    url = parseNextLink(res.headers.get('link'));
  }

  return { loaders, plugins };
};

// GitHub's editor needs a real branch name, HEAD only works for reading.
const fileURL = ({ fullName, branch }, path, view = 'blob') =>
  `https://github.com/${fullName}/${view}/${branch}/${path}`;

// Strip repo chrome, point relative links and edits at the source repo.
const renderReadme = (content, repo) =>
  `---\nsource: ${fileURL(repo, 'README.md', 'edit')}\n---\n\n` +
  cleanupMarkdown(content, target => fileURL(repo, target)).trimStart();

const fetchReadme = async ({ fullName }) => {
  const url = `https://raw.githubusercontent.com/${fullName}/HEAD/README.md`;
  const res = await fetchWithRetry(url);
  return res.text();
};

const processRepos = async (repos, { label, basePath, outputDir }) => {
  await mkdir(outputDir, { recursive: true });

  const fetched = (
    await Promise.all(
      repos.map(async repo => {
        const result = await fetchReadme(repo);
        await writeFile(
          join(outputDir, `${repo.name}.md`),
          renderReadme(result, repo),
          'utf8'
        );
        return repo.name;
      })
    )
  ).sort();

  const siteJson = {
    sidebar: [
      {
        label: label,
        items: [
          {
            link: basePath,
            label: 'Overview',
          },
          ...fetched.map(name => ({
            link: toPublicLink(name, basePath),
            label: name.replace(/-(?:webpack-)?(?:loader|plugin)$/, ''),
          })),
        ],
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
