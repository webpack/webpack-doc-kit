import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { major } from 'semver';

import createTailwindReader from './tailwind.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const VERSION = process.env.VERSION;
const MAJOR_VERSION = VERSION ? `v${major(VERSION)}.x` : undefined;
const URL_PATH = VERSION ? `/api/${MAJOR_VERSION}` : '/';

const ORIGIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const BASE_URL = `${ORIGIN}${URL_PATH}`;

const INPUT_DIR = `./pages/${URL_PATH}`;
const SITE_MODULE = join(ROOT, 'pages/site.mjs');

/**
 * Configuration for @node-core/doc-kit when generating webpack API docs.
 *
 * @type {import('@node-core/doc-kit/src/utils/configuration/types').Configuration}
 */
export default {
  global: {
    repository: 'webpack/webpack',
    version: VERSION,
    input: [`${INPUT_DIR}/**/*.md`],
    ignore: VERSION ? [] : ['./pages/api/**/*.md'],
    output: VERSION ? `./out/api/${MAJOR_VERSION}` : './out',
    baseURL: BASE_URL,
  },
  threads: 1,
  metadata: {
    typeMap: VERSION ? `${INPUT_DIR}/type-map.json` : undefined,
  },
  'jsx-ast': {
    generateIndexPage: false,
    generateAllPage: false,
  },
  web: {
    project: 'webpack',
    useAbsoluteURLs: true,
    remoteConfigUrl: null,
    title: VERSION ? `Webpack ${MAJOR_VERSION} Documentation` : 'Webpack',
    head: {
      meta: [
        {
          name: 'description',
          content:
            'Webpack is the build tool for modern web applications run on NodeJS. Webpack is a module bundler and its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
        },
        {
          property: 'og:image',
          content: `${BASE_URL}/assets/og_preview.png`,
        },
      ],
      links: [
        {
          rel: 'icon',
          href: '/assets/favicon.ico',
        },
      ],
    },
    imports: {
      '#theme/local/site': VERSION
        ? join(ROOT, INPUT_DIR, 'site.json')
        : SITE_MODULE,
      '#theme/site': SITE_MODULE,

      '#theme/Sidebar': join(ROOT, 'components/SideBar.jsx'),
      '#theme/sponsors': join(ROOT, 'generated/sponsors.json'),
      '#theme/Layout': join(ROOT, 'components/Layout.jsx'),
      '#theme/Navigation': join(ROOT, 'components/NavBar.jsx'),
      '#theme/Footer': join(ROOT, 'components/Footer/index.jsx'),
      '#theme/Logo': join(ROOT, 'components/Icons/Webpack.jsx'),
    },
    lightningcss: {
      resolver: {
        read: createTailwindReader(),
      },
    },
  },
};
