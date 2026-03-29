import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const WEBPACK_DIR = resolve(ROOT, 'webpack');
const HEAD_COMMIT_FILE = resolve(ROOT, 'HEAD_COMMIT');
const WEBPACK_REPO_URL = 'https://github.com/webpack/webpack.git';

const log = message => {
  console.log(`[bootstrap:webpack] ${message}`);
};

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    stdio: 'inherit',
    ...options,
  });

  if (result.status !== 0) {
    const fullCommand = [command, ...args].join(' ');
    throw new Error(`Command failed: ${fullCommand}`);
  }
};

const runCapture = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    cwd: ROOT,
    encoding: 'utf8',
    ...options,
  });

  if (result.status !== 0) {
    const fullCommand = [command, ...args].join(' ');
    throw new Error(`Command failed: ${fullCommand}`);
  }

  return result.stdout.trim();
};

if (!existsSync(HEAD_COMMIT_FILE)) {
  throw new Error('Missing HEAD_COMMIT file.');
}

const targetCommit = readFileSync(HEAD_COMMIT_FILE, 'utf8').trim();

if (!/^[a-f0-9]{40}$/i.test(targetCommit)) {
  throw new Error(`Invalid commit SHA in HEAD_COMMIT: ${targetCommit}`);
}

let currentCommit = null;

if (existsSync(WEBPACK_DIR)) {
  if (!existsSync(resolve(WEBPACK_DIR, '.git'))) {
    throw new Error('webpack directory exists but is not a git repository.');
  }

  currentCommit = runCapture('git', ['-C', WEBPACK_DIR, 'rev-parse', 'HEAD']);
}

if (currentCommit === targetCommit) {
  log(`Already up to date at ${targetCommit}.`);
  process.exit(0);
}

if (!existsSync(WEBPACK_DIR)) {
  log('Cloning webpack repository...');
  run('git', ['clone', WEBPACK_REPO_URL, WEBPACK_DIR]);
} else {
  log('Updating existing webpack repository...');
}

run('git', ['-C', WEBPACK_DIR, 'fetch', '--all', '--tags', '--prune']);
run('git', ['-C', WEBPACK_DIR, 'checkout', '--detach', targetCommit]);

const checkedOutCommit = runCapture('git', [
  '-C',
  WEBPACK_DIR,
  'rev-parse',
  'HEAD',
]);
log(`Checked out ${checkedOutCommit}.`);
