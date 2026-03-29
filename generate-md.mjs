import { Application } from 'typedoc';
import { major } from 'semver';

import fs from 'fs';

const webpack = JSON.parse(
  fs.readFileSync(new URL('./webpack/package.json', import.meta.url))
);

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
