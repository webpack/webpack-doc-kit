import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path/posix';
import { load } from '@doc-kit/typedoc';

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
    load,
    'typedoc-plugin-missing-exports',
    './plugins/webpack.mjs',
    './plugins/sources.mjs',
  ],

  readme: 'none',
  tsconfig: 'tsconfig.json',
  excludeExternals: true,
};
