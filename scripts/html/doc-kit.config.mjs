import { join, dirname } from 'node:path';
import { cp } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { major } from 'semver';

import { createViteBundler } from '@doc-kit/generator-react/html/bundlers/vite';
import tailwindcss from '@tailwindcss/vite';

import allVersions from '../../versions.json' with { type: 'json' };

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const VERSION = process.env.VERSION;
const MAJOR_VERSION = VERSION ? `v${major(VERSION)}.x` : undefined;
const URL_PATH = VERSION ? `/docs/api/${MAJOR_VERSION}` : '';

const ORIGIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const BASE_URL = `${ORIGIN}${URL_PATH}`;

const INPUT_DIR = `./pages/${URL_PATH}`;
const SITE_MODULE = join(ROOT, 'pages/site.mjs');
const OUTPUT_DIR = VERSION ? `./out/docs/api/${MAJOR_VERSION}` : './out';

/**
 * Configuration for doc-kit when generating webpack API docs.
 *
 * @type {import('@doc-kit/core/src/configuration/types').Configuration}
 */
export default {
  global: {
    project: 'webpack',
    repository: 'webpack/webpack',
    version: VERSION ?? allVersions[0],
    input: [`${INPUT_DIR}/**/*.md`],
    ignore: VERSION ? [] : ['./pages/docs/api/**/*.md'],
    output: OUTPUT_DIR,
    baseURL: BASE_URL,
  },

  threads: 1,

  metadata: {
    typeMap: VERSION
      ? pathToFileURL(`${INPUT_DIR}/type-map.json`).href
      : undefined,
  },

  'jsx-ast': {
    generateIndexPage: false,
    generateAllPage: false,
  },

  'llms-txt': {
    templatePath: join(ROOT, 'scripts/html/llms-template.txt'),
    pageURL: `${BASE_URL.replace(/\/$/, '')}{path}.md`,
  },

  html: {
    useAbsoluteURLs: true,
    remoteConfigUrl: '/assets/banners.json',
    title: VERSION ? `Webpack ${MAJOR_VERSION} Documentation` : 'Webpack',
    editURL:
      'https://github.com/webpack/webpack.js.org/blob/main/pages/{path}.md',
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
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Webpack Blog',
          href: 'https://webpack.js.org/feed.xml',
        },
      ],
    },
    imports: {
      '#theme/local/site': VERSION
        ? join(ROOT, INPUT_DIR, 'site.json')
        : SITE_MODULE,
      '#theme/site': SITE_MODULE,

      '#theme/Sidebar': join(ROOT, 'components/SideBar.jsx'),
      '#theme/Metabar': join(ROOT, 'components/MetaBar/index.jsx'),
      '#theme/blog': join(ROOT, 'generated/blog.json'),
      '#theme/Layout': join(ROOT, 'components/Layout.jsx'),
      '#theme/BlogLayout': join(ROOT, 'layouts/Blog/index.jsx'),
      '#theme/Blog/Byline': join(ROOT, 'components/Blog/Byline/index.jsx'),
      '#theme/Navigation': join(ROOT, 'components/NavBar.jsx'),
      '#theme/Footer': join(ROOT, 'components/Footer/index.jsx'),
      '#theme/Logo': join(ROOT, 'components/Icons/Webpack.jsx'),
      '#theme/Home/Hero': join(ROOT, 'components/HomePage/Hero/index.jsx'),
      '#theme/Home/ConfigSection': join(
        ROOT,
        'components/HomePage/ConfigSection/index.jsx'
      ),
      '#theme/Home/SponsorSection': join(
        ROOT,
        'components/HomePage/HomeSponsorSection/index.jsx'
      ),
      '#theme/Sponsors/Board': join(ROOT, 'layouts/Sponsors/Board.jsx'),
      '#theme/StackBlitzPreview': join(
        ROOT,
        'components/StackBlitzPreview/index.jsx'
      ),
    },

    components: {
      Hero: '#theme/Home/Hero',
      ConfigSection: '#theme/Home/ConfigSection',
      HomeSponsorSection: '#theme/Home/SponsorSection',
      SponsorBoard: '#theme/Sponsors/Board',
      BlogLayout: '#theme/BlogLayout',
      Byline: '#theme/Blog/Byline',
      MetaBar: '#theme/Metabar',
      StackBlitzPreview: '#theme/StackBlitzPreview',
    },
    bundler: createViteBundler({
      plugins: [tailwindcss()],
    }),
  },

  sitemap: {
    indexURL: '{baseURL}/',
    pageURL: '{baseURL}{path}.html',
  },
};

if (!VERSION) {
  cp('public', 'out', { recursive: true, force: true });
}
