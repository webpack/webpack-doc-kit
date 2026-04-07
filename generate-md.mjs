import { Application } from 'typedoc';
import { rmSync } from 'node:fs';
import webpack from './webpack/package.json' with { type: 'json' };
import { major } from 'semver';

const out = `pages/v${major(webpack.version)}.x`;

const app = await Application.bootstrapWithPlugins({
  // Inputs
  // `lib` gives us the runtime export surface for the root `webpack` page,
  // `types.d.ts` gives us the primary declarations, and the declaration files
  // fill in option/config types that are not re-exported through `types.d.ts`.
  entryPoints: [
    './webpack/lib',
    './webpack/types.d.ts',
    './webpack/declarations/**/*.d.ts',
  ],

  // Configuration
  tsconfig: './tsconfig.typedoc.json',

  // Outputs
  out,
  modulesFileName: 'index',
  readme: 'none',

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
});

const project = await app.convert();

if (project) {
  rmSync(out, { recursive: true, force: true });
  await app.generateOutputs(project);
}
