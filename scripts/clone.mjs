import { readFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const WEBPACK_DIR = 'webpack';
const WEBPACK_REPO = 'https://github.com/webpack/webpack.git';
const REF = (await readFile('HEAD_COMMIT', 'utf-8')).trim();

const git = (args, options = {}) =>
  execFileSync('git', args, {
    stdio: 'inherit',
    ...options,
  });

let hasGitRepo = false;

try {
  await access(`${WEBPACK_DIR}/.git`);
  hasGitRepo = true;
} catch {}

if (!hasGitRepo) {
  git(['clone', WEBPACK_REPO, WEBPACK_DIR]);
} else {
  try {
    git(['remote', 'get-url', 'origin'], { cwd: WEBPACK_DIR, stdio: 'ignore' });
  } catch {
    git(['remote', 'add', 'origin', WEBPACK_REPO], { cwd: WEBPACK_DIR });
  }

  git(['fetch', 'origin', '--tags', '--prune'], { cwd: WEBPACK_DIR });
}

git(['fetch', 'origin', REF], { cwd: WEBPACK_DIR });
git(['checkout', '--detach', REF], { cwd: WEBPACK_DIR });
