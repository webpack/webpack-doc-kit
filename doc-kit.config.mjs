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
    input: ['./pages/v5.x/**/*.md', './pages/v5.x/*.md'],
    output: 'out',
  },
  metadata: {
    typeMap: './pages/v5.x/type-map.json',
  },
  web: {
    project: 'webpack',
    useAbsoluteURLs: true,
  },
};
