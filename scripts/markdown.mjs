import { Application } from 'typedoc';
import webpack from '../webpack/package.json' with { type: 'json' };
import { major } from 'semver';

const app = await Application.bootstrapWithPlugins({
  entryPoints: ['./webpack/types.d.ts'],
  out: `pages/v${major(webpack.version)}.x`,

  // Plugins
  plugin: [
    'typedoc-plugin-markdown',
    './plugins/processor/index.mjs',
    './plugins/theme/index.mjs',
  ],
  theme: 'doc-kit',
  router: 'doc-kit',
  publicPath: '/',

  // Formatting
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

if (project) {
  await app.generateOutputs(project);
}
