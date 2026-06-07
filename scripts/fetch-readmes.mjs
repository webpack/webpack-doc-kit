import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const { GH_TOKEN } = process.env;

const BASE_HEADERS = {
  ...(GH_TOKEN && { Authorization: `Bearer ${GH_TOKEN}` }),
  'X-GitHub-Api-Version': '2022-11-28',
};

const parseNextLink = linkHeader => {
  if (!linkHeader) return null;
  const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
  return match ? match[1] : null;
};

const discoverRepos = async () => {
  const loaders = [];
  const plugins = [];
  let url =
    'https://api.github.com/orgs/webpack/repos?per_page=100&type=public';

  while (url) {
    const res = await fetch(url, { headers: BASE_HEADERS });
    if (!res.ok)
      throw new Error(
        `Failed to list org repos: ${res.status} ${res.statusText}`
      );

    const repos = await res.json();
    for (const repo of repos) {
      if (repo.archived) continue;
      if (repo.name.endsWith('-loader')) {
        loaders.push(repo.full_name);
      } else if (
        repo.name.endsWith('-plugin')
      ) {
        plugins.push(repo.full_name);
      }
    }

    url = parseNextLink(res.headers.get('link'));
  }

  return { loaders, plugins };
};

const stripLeadingDiv = content =>
  content.replace(/^\s*<div[\s\S]*?<\/div>\n*/i, '');

// Remove badge lines - lines consisting only of [![...][ref]][ref] or [![...](url)](url) links
const stripBadges = content =>
  content
    .replace(
      /^(\[!\[[^\]]*\](?:\[[^\]]*\]|\([^)]*\))\]\s*(?:\[[^\]]*\]|\([^)]*\))\s*)+$/gm,
      ''
    )
    .replace(/\n{3,}/g, '\n\n');

// TODO: remove this allowlist once Shiki silently skips unknown languages instead of build errors.
const SUPPORTED_LANGS = new Set([
  'bash',
  'c',
  'c++',
  'cjs',
  'coffee',
  'coffeescript',
  'console',
  'cpp',
  'diff',
  'docker',
  'dockerfile',
  'glsl',
  'gql',
  'graphql',
  'http',
  'ini',
  'java',
  'javascript',
  'js',
  'json',
  'jsx',
  'mjs',
  'powershell',
  'ps',
  'ps1',
  'regex',
  'regexp',
  'sh',
  'shell',
  'shellscript',
  'shellsession',
  'sql',
  'ts',
  'tsx',
  'typescript',
  'xml',
  'yaml',
  'yml',
  'zsh',
]);

const sanitizeCodeFences = content =>
  content.replace(/^```([a-zA-Z0-9_+-]+)\b/gm, (match, lang) =>
    SUPPORTED_LANGS.has(lang.toLowerCase()) ? match : '```'
  );

// remark-gfm does not support GitHub alert syntax (> [!TYPE]); rewrite to bold label inside the blockquote.
const GFM_ALERT_LABELS = {
  NOTE: 'Note',
  TIP: 'Tip',
  IMPORTANT: 'Important',
  WARNING: 'Warning',
  CAUTION: 'Caution',
};
const GFM_ALERT_RE =
  /^([ \t]*>[ \t]*)\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*$/gim;

const transformGfmAlerts = content =>
  content.replace(
    GFM_ALERT_RE,
    (_, prefix, type) => `${prefix}**${GFM_ALERT_LABELS[type]}:**`
  );

const processContent = content =>
  transformGfmAlerts(sanitizeCodeFences(stripBadges(stripLeadingDiv(content))));

const fetchReadme = async fullName => {
  const url = `https://raw.githubusercontent.com/${fullName}/HEAD/README.md`;
  const res = await fetch(url);
  return res.ok
    ? { ok: true, text: await res.text() }
    : { ok: false, status: res.status };
};

const processRepos = async (repos, { groupName, basePath, outputDir }) => {
  mkdirSync(outputDir, { recursive: true });
  const repoName = r => r.split('/')[1];
  console.log(
    `Discovered ${groupName.toLowerCase()}: ${repos.map(repoName).join(', ')}`
  );

  const fetched = [];
  for (const fullName of repos) {
    const name = repoName(fullName);
    const result = await fetchReadme(fullName);
    if (!result.ok) {
      console.log(`Failed: ${name} — ${result.status}`);
      continue;
    }
    const content = processContent(result.text);
    writeFileSync(join(outputDir, `${name}.md`), content, 'utf8');
    fetched.push(name);
    console.log(`Fetched: ${name}`);
  }

  const siteJson = {
    sidebar: [
      {
        groupName,
        items: fetched
          .sort()
          .map(name => ({ link: `${basePath}/${name}`, label: name })),
      },
    ],
  };
  writeFileSync(
    join(outputDir, 'site.json'),
    JSON.stringify(siteJson, null, 2) + '\n',
    'utf8'
  );
  console.log(
    `Written: ${outputDir}/site.json (${fetched.length} ${groupName.toLowerCase()})`
  );
};

const args = process.argv.slice(2);
const runLoaders = args.includes('--loaders') || args.length === 0;
const runPlugins = args.includes('--plugins') || args.length === 0;

const root = join(import.meta.dirname, '..');
const { loaders, plugins } = await discoverRepos();

if (runLoaders) {
  await processRepos(loaders, {
    groupName: 'Loaders',
    basePath: '/loaders',
    outputDir: join(root, 'pages/loaders'),
  });
}

if (runPlugins) {
  await processRepos(plugins, {
    groupName: 'Plugins',
    basePath: '/plugins',
    outputDir: join(root, 'pages/plugins'),
  });
}
