import {
  existsSync,
  readFileSync,
  statSync,
  readdirSync,
  writeFileSync,
} from 'node:fs';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const HEAD_COMMIT_FILE = resolve(ROOT, 'HEAD_COMMIT');
const WEBPACK_DIR = resolve(ROOT, 'webpack');
const WEBPACK_PKG = resolve(WEBPACK_DIR, 'package.json');
const DOCS_STATE_FILE = resolve(ROOT, '.docs.generated.state.json');
const OUT_DIR = resolve(ROOT, 'out');

const args = new Set(process.argv.slice(2));
const force = args.has('--force');
const verbose = args.has('--verbose');
const noHtml = args.has('--no-html');

const log = message => {
  console.log(`[docs:quickstart] ${message}`);
};

const debug = message => {
  if (verbose) {
    console.log(`[docs:quickstart:verbose] ${message}`);
  }
};

const fail = message => {
  console.error(`[docs:quickstart:error] ${message}`);
  process.exit(1);
};

const run = (command, commandArgs) => {
  const fullCommand = [command, ...commandArgs].join(' ');
  debug(`Running: ${fullCommand}`);

  const result = spawnSync(command, commandArgs, {
    cwd: ROOT,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    fail(`Command failed: ${fullCommand}`);
  }
};

const runCapture = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, {
    cwd: ROOT,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    const fullCommand = [command, ...commandArgs].join(' ');
    fail(`Command failed: ${fullCommand}`);
  }

  return result.stdout.trim();
};

const loadState = () => {
  if (!existsSync(DOCS_STATE_FILE)) return {};

  try {
    return JSON.parse(readFileSync(DOCS_STATE_FILE, 'utf8'));
  } catch {
    return {};
  }
};

const saveState = state => {
  writeFileSync(DOCS_STATE_FILE, JSON.stringify(state, null, 2) + '\n');
};

const readTargetCommit = () => {
  if (!existsSync(HEAD_COMMIT_FILE)) {
    fail('HEAD_COMMIT file is missing.');
  }

  const commit = readFileSync(HEAD_COMMIT_FILE, 'utf8').trim();

  if (!/^[a-f0-9]{40}$/i.test(commit)) {
    fail(`Invalid commit SHA in HEAD_COMMIT: ${commit}`);
  }

  return commit;
};

const getWebpackCommit = () => {
  if (!existsSync(WEBPACK_DIR) || !existsSync(resolve(WEBPACK_DIR, '.git'))) {
    return null;
  }

  return runCapture('git', ['-C', WEBPACK_DIR, 'rev-parse', 'HEAD']);
};

const maxMtimeRecursive = targetPath => {
  if (!existsSync(targetPath)) return 0;

  const stats = statSync(targetPath);
  if (!stats.isDirectory()) {
    return stats.mtimeMs;
  }

  let max = stats.mtimeMs;
  for (const entry of readdirSync(targetPath)) {
    const entryPath = join(targetPath, entry);
    const entryMax = maxMtimeRecursive(entryPath);
    if (entryMax > max) max = entryMax;
  }

  return max;
};

const sourceFingerprint = () => {
  const inputs = [
    resolve(ROOT, 'generate-md.mjs'),
    resolve(ROOT, 'tsconfig.json'),
    resolve(ROOT, 'plugins'),
    resolve(ROOT, 'HEAD_COMMIT'),
  ];

  return Math.max(...inputs.map(maxMtimeRecursive));
};

const htmlFingerprint = docsDir => {
  const inputs = [resolve(ROOT, 'doc-kit.config.mjs'), docsDir];
  return Math.max(...inputs.map(maxMtimeRecursive));
};

const readWebpackMajorVersion = () => {
  if (!existsSync(WEBPACK_PKG)) {
    fail('webpack/package.json is missing. Run: npm run bootstrap:webpack');
  }

  const pkg = JSON.parse(readFileSync(WEBPACK_PKG, 'utf8'));
  const major = String(pkg.version || '').split('.')[0];

  if (!/^\d+$/.test(major)) {
    fail(`Unable to detect webpack major version from: ${pkg.version}`);
  }

  return major;
};

const verifyPreflight = () => {
  const nodeMajor = Number(process.versions.node.split('.')[0]);
  if (!Number.isInteger(nodeMajor) || nodeMajor < 20) {
    fail(`Node.js >= 20 is required. Current: ${process.version}`);
  }

  if (!existsSync(resolve(ROOT, 'node_modules'))) {
    fail('Dependencies are missing. Run: npm install');
  }

  debug(`Node.js version: ${process.version}`);
};

verifyPreflight();

const state = loadState();
const targetCommit = readTargetCommit();
const currentWebpackCommit = getWebpackCommit();

if (force || currentWebpackCommit !== targetCommit) {
  log('Step 1/3: bootstrap webpack source');
  run('node', ['scripts/bootstrap-webpack.mjs']);
} else {
  log('Step 1/3: bootstrap webpack source (skipped; already at target commit)');
}

const webpackMajor = readWebpackMajorVersion();
const docsDir = resolve(ROOT, `pages/v${webpackMajor}.x`);
const docsTypeMap = resolve(docsDir, 'type-map.json');
const nextSourceFingerprint = sourceFingerprint();

const needsGenerate =
  force ||
  !existsSync(docsDir) ||
  !existsSync(docsTypeMap) ||
  state.webpackCommit !== targetCommit ||
  state.sourceFingerprint !== nextSourceFingerprint;

if (needsGenerate) {
  log('Step 2/3: generate markdown docs');
  run('npm', ['run', 'generate-docs']);
  state.webpackCommit = targetCommit;
  state.docsDir = docsDir;
  state.sourceFingerprint = sourceFingerprint();
  state.generatedAt = new Date().toISOString();
  saveState(state);
} else {
  log('Step 2/3: generate markdown docs (skipped; no relevant changes)');
}

if (noHtml) {
  log('Step 3/3: build html docs (skipped; --no-html)');
  process.exit(0);
}

const nextHtmlFingerprint = htmlFingerprint(docsDir);
const needsHtmlBuild =
  force ||
  !existsSync(OUT_DIR) ||
  state.webpackCommit !== targetCommit ||
  state.htmlInputFingerprint !== nextHtmlFingerprint;

if (needsHtmlBuild) {
  log('Step 3/3: build html docs');
  run('npm', ['run', 'build-html']);
  state.webpackCommit = targetCommit;
  state.htmlInputFingerprint = htmlFingerprint(docsDir);
  state.htmlBuiltAt = new Date().toISOString();
  saveState(state);
} else {
  log('Step 3/3: build html docs (skipped; output is up to date)');
}
