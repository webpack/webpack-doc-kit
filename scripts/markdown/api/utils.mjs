import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path/posix';

const [packageDir] = process.argv.slice(2);
const cacheDir = join('.', '.cache', 'webpack');

export const sources = packageDir
  ? [packageDir]
  : (await readdir(cacheDir, { withFileTypes: true }))
      .filter(entry => entry.isDirectory())
      .map(entry => join(cacheDir, entry.name));

export const outputDir = join('pages', 'docs', 'api');

export const getPackageFile = async (packageDir, file = 'package.json') =>
  JSON.parse(await readFile(join(packageDir, file), 'utf8'));
