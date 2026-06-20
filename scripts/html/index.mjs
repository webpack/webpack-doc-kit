import { execFile } from 'node:child_process';
import { readFile, writeFile, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { buildWebsiteBanners } from '../data/banners.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

const ASSETS_SOURCE = join(ROOT, 'assets');
const ASSETS_DESTINATION = join(ROOT, 'out/assets');
const BANNERS_DESTINATION = join(ROOT, 'out/banners.json');

const execFileAsync = promisify(execFile);

const runDocKit = version =>
  execFileAsync(
    'npx',
    [
      '-p',
      '@node-core/doc-kit',
      'doc-kit',
      'generate',
      '-t',
      'web',
      '-t',
      'orama-db',
      '--config-file',
      './scripts/html/doc-kit.config.mjs',
    ],
    {
      env: {
        ...process.env,
        VERSION: version,
      },
      shell: true,
    }
  );

// For each version in versions.json, run doc-kit to generate the API docs
// Plus, once more without a version to generate the latest API docs

const versions = JSON.parse(await readFile('./versions.json'));

for (const version of versions) {
  await runDocKit(version);
}
await runDocKit();

// copy assets folder to the out directory

await cp(ASSETS_SOURCE, ASSETS_DESTINATION, { recursive: true });

// the announcement banner config advertising the latest webpack release

const banners = await buildWebsiteBanners(versions[0]);
await writeFile(BANNERS_DESTINATION, `${JSON.stringify(banners, null, 2)}\n`);
