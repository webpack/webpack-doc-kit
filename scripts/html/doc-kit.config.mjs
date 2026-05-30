import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { major } from 'semver';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const VERSION = process.env.VERSION;
const MAJOR_VERSION = VERSION ? `v${major(VERSION)}.x` : undefined;
const inputDir = join(
  ROOT,
  VERSION ? `./pages/api/${MAJOR_VERSION}` : './pages'
);

/**
 * Configuration for @node-core/doc-kit when generating webpack API docs.
 *
 * @type {import('@node-core/doc-kit/src/utils/configuration/types').Configuration}
 */
export default {
  global: {
    repository: 'webpack/webpack',
    version: VERSION,
    input: [`${inputDir}/**/*.md`],
    ignore: VERSION ? [] : ['./pages/api/**/*.md'],
    output: VERSION ? `./out/api/${MAJOR_VERSION}` : './out',
    baseURL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  },
  threads: 1,
  metadata: {
    typeMap: VERSION ? join(inputDir, 'type-map.json') : undefined,
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
      '#theme/site': join(inputDir, 'site.json'),
      '#theme/Layout': join(ROOT, 'components/Layout.jsx'),
    },
  },
};
