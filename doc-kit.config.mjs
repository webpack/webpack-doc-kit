import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));

// TODO(@avivkeller): v5.x should not be hardcoded

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

    // Base URL,
    baseURL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  },
  threads: 1,
  metadata: {
    typeMap: './pages/v5.x/type-map.json',
  },
  web: {
    project: 'webpack',
    useAbsoluteURLs: true,
    remoteConfigUrl: null,
    imports: {
      '#theme/Sidebar': join(ROOT, 'components/SideBar.jsx'),
      '#theme/site': join(ROOT, 'pages/v5.x/site.json'),
    },
  },
};
