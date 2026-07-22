import { execFile } from 'node:child_process';
import { cp, readFile } from 'node:fs/promises';
import { statSync } from 'node:fs';
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
      '-t',
      'orama-db',
      '-t',
      'sitemap',
      'llms-txt',
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

// Publish the markdown sources next to the rendered pages so the llms.txt
// links (`{path}.md`) resolve to LLM-friendly raw markdown.
await cp('./pages', './out', {
  recursive: true,
  filter: source => statSync(source).isDirectory() || source.endsWith('.md'),
});
