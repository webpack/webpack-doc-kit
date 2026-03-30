import { resolve } from 'node:path';

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
    // Override selected doc-kit theme aliases with webpack-branded components.
    imports: {
      '#theme/Logo': resolve(
        import.meta.dirname,
        './plugins/web-theme/WebpackLogo.jsx'
      ),
      '#theme/Navigation':
        '@node-core/doc-kit/src/generators/web/ui/components/NavBar.jsx',
      '#theme/Sidebar':
        '@node-core/doc-kit/src/generators/web/ui/components/SideBar/index.jsx',
      '#theme/Metabar':
        '@node-core/doc-kit/src/generators/web/ui/components/MetaBar/index.jsx',
      '#theme/Footer': resolve(
        import.meta.dirname,
        './plugins/web-theme/WebpackFooter.jsx'
      ),
      '#theme/Layout':
        '@node-core/doc-kit/src/generators/web/ui/components/Layout/index.jsx',
    },
  },
  'jsx-ast': {
    // Disable the "Edit this page" link — webpack API docs are generated from
    // TypeScript types and don't have a corresponding hand-editable source file.
    editURL: '',
  },
};
