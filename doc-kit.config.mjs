import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { major } from 'semver';
import webpack from './webpack/package.json' with { type: 'json' };

const ROOT = dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = `pages/v${major(webpack.version)}.x`;

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
    input: [`./${DOCS_DIR}/**/*.md`],
    output: 'out',

    // Base URL,
    baseURL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  },
  threads: 1,
  metadata: {
    typeMap: `./${DOCS_DIR}/type-map.json`,
  },
  'jsx-ast': {
    generateIndexPage: false,
    generateAllPage: false,
  },
  web: {
    project: 'webpack',
    useAbsoluteURLs: true,
    remoteConfigUrl: null,
    imports: {
      '#theme/Sidebar': join(ROOT, 'components/SideBar.jsx'),
      '#theme/site': join(ROOT, DOCS_DIR, 'site.json'),
    },
  },
};
