import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, unlinkSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const CACHE_DIR = join('.', '.cache', 'webpack');

const execOptions = {
  stdio: ['ignore', 'pipe', 'inherit'],
  encoding: 'utf8',
  shell: true,
};

const fetchWebpack = version => {
  console.log(`Fetching webpack ${version}`);

  const [{ filename }] = JSON.parse(
    execFileSync(
      'npm',
      ['pack', `webpack@${version}`, '--json', '--pack-destination', CACHE_DIR],
      execOptions
    )
  );
  const archive = join(CACHE_DIR, filename);
  const destination = join(CACHE_DIR, version);

  rmSync(destination, { recursive: true, force: true });
  mkdirSync(destination, { recursive: true });
  execFileSync(
    'tar',
    ['-xzf', archive, '-C', destination, '--strip-components=1'],
    execOptions
  );
  unlinkSync(archive);
};

rmSync(CACHE_DIR, { recursive: true, force: true });
mkdirSync(CACHE_DIR, { recursive: true });

const versions = JSON.parse(await readFile('./versions.json'));
for (const version of versions) {
  fetchWebpack(version);
}
