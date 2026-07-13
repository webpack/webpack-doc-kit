import { readFile } from 'node:fs/promises';
import { join } from 'node:path/posix';
import { Application } from 'typedoc';
import { major } from 'semver';
import { sources } from './utils.mjs';

const generate = async packageDir => {
  const { version } = JSON.parse(
    await readFile(join(packageDir, 'package.json'), 'utf8')
  );

  const app = await Application.bootstrapWithPlugins({
    entryPoints: [join(packageDir, 'types.d.ts')],
    out: join('pages', 'docs', 'api', `v${major(version)}.x`),
    publicPath: `/docs/api/v${major(version)}.x/`,

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
  });

  const project = await app.convert();
  await app.generateOutputs(project);
};

for (const source of sources) {
  await generate(source);
}
