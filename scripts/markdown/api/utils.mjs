import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path/posix';

const [packageDir] = process.argv.slice(2);
const cacheDir = join('.', '.cache', 'webpack');

export const getSources = async () => {
  if (packageDir) return [packageDir];
  const sources = await readdir(cacheDir, { withFileTypes: true });
  return sources
    .filter(entry => entry.isDirectory())
    .map(entry => join(cacheDir, entry.name));
};

export const outputDir = join('pages', 'docs', 'api');

export const getPackageFile = async (packageDir, file = 'package.json') =>
  JSON.parse(await readFile(join(packageDir, file), 'utf8'));

export const typeDocConfig = {
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-plugin-missing-exports',
    './plugins/processor/index.mjs',
    './plugins/theme/index.mjs',
  ],
  theme: 'doc-kit',
  router: 'doc-kit',

  hideGroupHeadings: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  readme: 'none',
  disableSources: true,
  propertiesFormat: 'table',
  membersWithOwnFile: ['Class'],

  modulesFileName: 'index',
  entryFileName: 'index',
  tsconfig: 'tsconfig.json',
  excludeExternals: true,
};
