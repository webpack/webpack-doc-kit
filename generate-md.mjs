import { Application } from 'typedoc';
import { major } from 'semver';
import { existsSync, readFileSync } from 'node:fs';

if (!existsSync('./webpack')) {
  throw new Error('Webpack source not found. Run: npm run bootstrap:webpack');
}

if (
  !existsSync('./webpack/package.json') ||
  !existsSync('./webpack/types.d.ts')
) {
  throw new Error(
    'Webpack source is incomplete. Run: npm run bootstrap:webpack'
  );
}

const webpack = JSON.parse(readFileSync('./webpack/package.json', 'utf8'));

const app = await Application.bootstrapWithPlugins({
  entryPoints: ['./webpack/types.d.ts'],
  out: `pages/v${major(webpack.version)}.x`,

  // Plugins
  plugin: [
    'typedoc-plugin-markdown',
    './plugins/processor.mjs',
    './plugins/theme/index.mjs',
  ],
  theme: 'doc-kit',
  router: 'doc-kit',

  // Formatting
  hideGroupHeadings: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  disableSources: true,
  propertiesFormat: 'table',

  entryFileName: 'index',
  tsconfig: 'tsconfig.json',
});

const project = await app.convert();

if (project) {
  await app.generateOutputs(project);
}
