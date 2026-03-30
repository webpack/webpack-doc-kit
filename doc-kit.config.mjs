import { resolve } from 'node:path';
import { readdirSync, existsSync } from 'node:fs';

const pagesRoot = resolve(import.meta.dirname, './pages');

const getLatestVersionDir = () => {
  if (!existsSync(pagesRoot)) return 'v5.x';

  const versions = readdirSync(pagesRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && /^v\d+\.x$/.test(entry.name))
    .map(entry => entry.name)
    .sort(
      (a, b) =>
        Number.parseInt(b.slice(1), 10) - Number.parseInt(a.slice(1), 10)
    );

  return versions[0] ?? 'v5.x';
};

const latestVersion = getLatestVersionDir();
const typeMapInApi = `./pages/${latestVersion}/api/type-map.json`;
const typeMapLegacy = `./pages/${latestVersion}/type-map.json`;
const typeMapPath = existsSync(resolve(import.meta.dirname, typeMapInApi))
  ? typeMapInApi
  : typeMapLegacy;

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
    input: [`./pages/${latestVersion}/**/*.md`],
    output: 'out',
  },
  metadata: {
    typeMap: typeMapPath,
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
