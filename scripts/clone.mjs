import { readFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const WEBPACK_DIR = 'webpack';
const REF = (await readFile('HEAD_COMMIT', 'utf-8')).trim();

try {
  await access(WEBPACK_DIR);
  execFileSync('git', ['fetch', '--all'], {
    cwd: WEBPACK_DIR,
    stdio: 'inherit',
  });
} catch {
  execFileSync(
    'git',
    ['clone', 'https://github.com/webpack/webpack.git', WEBPACK_DIR],
    {
      stdio: 'inherit',
    }
  );
}

execFileSync('git', ['fetch', 'origin', REF], {
  cwd: WEBPACK_DIR,
  stdio: 'inherit',
});

execFileSync('git', ['checkout', REF], {
  cwd: WEBPACK_DIR,
  stdio: 'inherit',
});
