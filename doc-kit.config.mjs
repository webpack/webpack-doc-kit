import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Configuration for @node-core/doc-kit when generating webpack API docs.
 *
 * @type {import('@node-core/doc-kit/src/utils/configuration/types').Configuration}
 */
export default {
  global: {
    // Point GitHub links to the webpack repository instead of nodejs/node
    repository: 'webpack/webpack',

    // Input & Output
    input: ['./pages/v5.x/**/*.md'],
    output: 'out',
  },
  metadata: {
    typeMap: './pages/v5.x/type-map.json',
  },
  web: {
    // Use "webpack" as the product name in navbar and sidebar labels
    title: 'webpack',

    // Override the default Node.js theming components with webpack-specific ones.
    // These aliases are resolved by the bundler during the doc-kit build step.
    // @see https://github.com/nodejs/doc-kit/issues/665
    imports: {
      '#theme/Logo': resolve(__dirname, './ui/WebpackLogo.jsx'),
    },
  },
  'jsx-ast': {
    // Disable the "Edit this page" link — webpack API docs are generated from
    // TypeScript types and don't have a corresponding hand-editable source file.
    editURL: '',
  },
};
