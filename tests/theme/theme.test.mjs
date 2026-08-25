import { test } from 'node:test';
import { Application } from 'typedoc';
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path/posix';
import { execSync } from 'node:child_process';
import { typeDocConfig } from '../../scripts/markdown/api/utils.mjs';

const fixturesDir = './tests/theme/fixtures';
const outputDir = './tests/theme/.temp';
const typesDir = './tests/theme/.temp/types';
const tsconfig = { include: ['**/*.d.ts'] };

test('TypeDoc Theme - Edge Cases Fixture', async t => {
  execSync(`npx tsc -p ${join(fixturesDir, 'tsconfig.json')}`, {
    stdio: 'inherit',
  });
  writeFileSync(join(typesDir, 'tsconfig.json'), JSON.stringify(tsconfig));

  const app = await Application.bootstrapWithPlugins({
    ...typeDocConfig,
    entryPoints: [join(typesDir, 'input.d.ts')],
    out: outputDir,
    publicPath: '/',
    tsconfig: join(typesDir, 'tsconfig.json'),
  });

  const project = await app.convert();
  await app.generateOutputs(project);

  const mdFiles = readdirSync(outputDir, { recursive: true }).filter(f =>
    f.endsWith('.md')
  );

  if (mdFiles.length === 0) throw new Error('No markdown file generated');

  mdFiles.sort();

  const actualMarkdown = mdFiles
    .map(f => readFileSync(join(outputDir, f), 'utf-8'))
    .join('\n\n---\n\n');

  rmSync(outputDir, { recursive: true, force: true });

  t.assert.snapshot(actualMarkdown, { serializers: [val => val] });
});
