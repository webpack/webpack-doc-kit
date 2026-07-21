import { execFile } from 'node:child_process';
import { cp, readFile, writeFile } from 'node:fs/promises';
import { statSync } from 'node:fs';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

// The llms-txt generator lists every page with a depth-1 heading. JSX-driven
// pages like the homepage produce entries with no title or description — drop
// them, they carry no information for LLMs.
const cleanLlmsTxt = async path => {
  const content = await readFile(path, 'utf8');
  const cleaned = content
    .split('\n')
    .filter(line => !line.startsWith('- []('))
    .join('\n');
  await writeFile(path, cleaned);
};

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
  await cleanLlmsTxt(`./out/docs/api/v${version.match(/\d+/)[0]}.x/llms.txt`);
}
await runDocKit();
await cleanLlmsTxt('./out/llms.txt');

// Publish the markdown sources next to the rendered pages so the llms.txt
// links (`{path}.md`) resolve to LLM-friendly raw markdown.
await cp('./pages', './out', {
  recursive: true,
  filter: source => statSync(source).isDirectory() || source.endsWith('.md'),
});
