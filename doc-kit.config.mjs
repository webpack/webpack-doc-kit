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
    // Webpack specific theming overrides (Note: Node.js doc-kit #665 needs to support these overrides fully)
    logo: 'https://webpack.js.org/icon-square-small-slack.png',
    theme: {
      accentColor: '#1C78C0',
      backgroundColor: '#ffffff'
    }
  },
  'jsx-ast': {
    // Disable the "Edit this page" link — webpack API docs are generated from
    // TypeScript types and don't have a corresponding hand-editable source file.
    editURL: '',
  },
};
