import { readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path/posix';
import { Application } from 'typedoc';
import { major } from 'semver';
import { buildIndex, buildSidebar } from './sidebar.mjs';
import {
  getSources,
  outputDir,
  getPackageFile,
  typeDocConfig,
} from './utils.mjs';

const readJson = async file => JSON.parse(await readFile(file, 'utf8'));

const writeJson = (file, value) =>
  writeFile(file, `${JSON.stringify(value, null, 2)}\n`);

/**
 * doc-kit resolves type-map entries relative to the root of its input, which
 * for a versioned build is the version's directory rather than the site root
 * the plugin's paths start from. Strip the base path from the entries.
 */
const localizeTypeMap = async (out, basePath) => {
  const file = join(out, 'type-map.json');
  const prefix = `${basePath.slice(1)}/`;
  const typeMap = await readJson(file);

  for (const [name, url] of Object.entries(typeMap)) {
    if (url.startsWith(prefix)) typeMap[name] = url.slice(prefix.length);
  }

  await writeJson(file, typeMap);
};

const generate = async packageDir => {
  const { version } = await getPackageFile(packageDir);
  const out = join(outputDir, `v${major(version)}.x`);
  const basePath = `/docs/api/v${major(version)}.x`;

  // The plugin doesn't empty its output, so pages of removed exports linger.
  await rm(out, { recursive: true, force: true });

  const app = await Application.bootstrapWithPlugins({
    ...typeDocConfig,
    entryPoints: [join(packageDir, 'types.d.ts')],
    // Source links are relative to this: the root of webpack's repository
    basePath: packageDir,
    docKit: out,
    docKitBasePath: basePath,
  });

  const project = await app.convert();
  if (!project) throw new Error(`TypeDoc failed to convert ${packageDir}`);

  await app.generateOutputs(project);

  const pages = await readJson(join(out, 'pages.json'));
  await writeJson(join(out, 'site.json'), {
    sidebar: buildSidebar(pages, basePath),
  });
  // The plugin leaves the project's own page to the site.
  await writeFile(join(out, 'index.md'), buildIndex(pages, basePath, version));
  await localizeTypeMap(out, basePath);
};

const sources = await getSources();
for (const source of sources) {
  await generate(source);
}
