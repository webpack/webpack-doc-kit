import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Application } from 'typedoc';
import { major } from 'semver';

const CACHE_DIR = join('.', '.cache', 'webpack');

const generate = async packageDir => {
  const { version } = JSON.parse(
    await readFile(join(packageDir, 'package.json'), 'utf8')
  );

  const app = await Application.bootstrapWithPlugins({
    entryPoints: [join(packageDir, 'types.d.ts')],
    out: join('pages', 'api', `v${major(version)}.x`),
    base: `api/v${major(version)}.x`,

    plugin: [
      'typedoc-plugin-markdown',
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
  });

  const project = await app.convert();
  await app.generateOutputs(project);
};

const [packageDir] = process.argv.slice(2);

const sources = packageDir
  ? [packageDir]
  : (await readdir(CACHE_DIR, { withFileTypes: true }))
      .filter(entry => entry.isDirectory())
      .map(entry => join(CACHE_DIR, entry.name));

for (const source of sources) {
  await generate(source);
}
