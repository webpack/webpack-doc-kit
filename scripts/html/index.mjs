import { execFile } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { promisify } from 'node:util';

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
      '--config-file',
      './scripts/html/doc-kit.config.mjs',
    ],
    {
      env: {
        ...process.env,
        VERSION: version,
      },
    }
  );

// For each version in versions.json, run doc-kit to generate the API docs
// Plus, once more without a version to generate the latest API docs

const versions = JSON.parse(await readFile('./versions.json'));

for (const version of versions) {
  await runDocKit(version);
}
await runDocKit();
