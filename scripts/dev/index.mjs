import { watch, existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { execFile, spawn as nativeSpawn } from 'node:child_process';
import { promisify } from 'node:util';
import { createRequire } from 'node:module';

const execFileAsync = promisify(execFile);
const require = createRequire(import.meta.url);

// Grace period between SIGINT and SIGKILL when cleaning up
const FORCE_KILL_SIG_MS = 3000;

// --- SHELL-FREE BINARY RESOLUTION ---

function resolveEntry(pkgName, binName) {
  const pkgJsonPath = require.resolve(`${pkgName}/package.json`);
  const { bin } = require(pkgJsonPath);
  const rel = typeof bin === 'string' ? bin : bin[binName];

  if (!rel) {
    throw new Error(`"${pkgName}" has no bin entry named "${binName}"`);
  }

  return join(dirname(pkgJsonPath), rel);
}

const DOC_KIT_ENTRY = resolveEntry('@doc-kit/cli', 'doc-kit');
const SERVE_ENTRY = resolveEntry('serve', 'serve');

// --- CHILD PROCESS TRACKING ---
const children = new Set();

const spawn = (cmd, args) => {
  const child = nativeSpawn(cmd, args, {
    stdio: 'inherit',
    shell: false,
    windowsHide: true,
  });

  children.add(child);
  child.once('close', () => children.delete(child));
  child.once('error', () => children.delete(child));

  return child;
};

// --- BUILD QUEUE & ABORT LOGIC ---
let activeBuildController = null;
const pending = { files: new Set(), full: false };
let draining = false;

async function runDocKit(filePath = null) {
  const args = [
    DOC_KIT_ENTRY,
    'generate',
    '-t',
    'web',
    '--config-file',
    './scripts/html/doc-kit.config.mjs',
  ];

  if (filePath) {
    args.push('-i', filePath);
    const normalizedPath = filePath.replace(/\\/g, '/');
    const relativeDir = dirname(normalizedPath).replace(/^pages\/?/, '');
    const outPath = relativeDir ? join('./out', relativeDir) : './out';
    args.push('-o', outPath);
  }

  // Create a new AbortController for this specific build
  activeBuildController = new AbortController();

  try {
    await execFileAsync(process.execPath, args, {
      shell: false,
      signal: activeBuildController.signal,
    });
    console.log('\n Build completed');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Build cancelled — restarting with the latest changes');
    } else {
      console.error(`\n Build failed: ${error.message}`);
    }
  } finally {
    activeBuildController = null;
  }
}

async function drain() {
  if (draining) return;
  draining = true;

  try {
    while (pending.full || pending.files.size) {
      if (pending.full) {
        pending.full = false;
        pending.files.clear();
        console.log('\n Running full build...');
        await runDocKit();
      } else {
        const file = pending.files.values().next().value;
        pending.files.delete(file);
        console.log(`\n Running fast partial build: ${file}`);
        await runDocKit(file);
      }
    }
  } finally {
    draining = false;
  }
}

function schedule() {
  // If a build is currently running, instantly cancel it using the AbortController.
  // execFileAsync's promise only settles once the process has actually exited
  // (Node waits for 'close' before rejecting with AbortError), so by the time
  // drain() runs again there's no risk of two builds writing to ./out at once.
  if (activeBuildController) {
    activeBuildController.abort();
  }
  drain();
}

// --- WATCHER ---
const globalDirs = [
  'api',
  'components',
  'hooks',
  'layouts',
  'public',
  'styles',
  'utils',
];

let debounceTimer = null;

const handleFileChange = (baseDir, filename) => {
  if (!filename || filename.startsWith('.')) return;

  const fullPath = join(baseDir, filename);
  const ext = extname(filename);

  // Record the change immediately; only the reaction is debounced, so a burst
  // of editor save events can never drop a file. If the current build gets
  // aborted below, its own file/full flag is put back by drain() before it
  // exits, so nothing here needs to account for that separately.
  if (ext === '.md' || ext === '.mdx') {
    pending.files.add(fullPath);
  } else {
    pending.full = true;
  }

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(schedule, 150);
};

// --- SHUTDOWN ---
let shuttingDown = false;

const cleanup = () => {
  if (shuttingDown) return;
  shuttingDown = true;

  // Stop any in-flight build so it doesn't keep writing into ./out after we exit.
  if (activeBuildController) {
    activeBuildController.abort();
  }

  // Politely ask servers to shut down
  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGINT');
    }
  }

  // Force kill if they don't exit gracefully in time
  const timer = setTimeout(() => {
    for (const child of children) {
      if (!child.killed) {
        child.kill('SIGKILL');
      }
    }
    process.exit(1);
  }, FORCE_KILL_SIG_MS);

  const check = () => {
    if (children.size === 0) {
      clearTimeout(timer);
      process.exit(0);
    }
  };

  for (const child of children) {
    child.once('close', check);
  }

  check();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// --- STARTUP ---
console.log(' Starting development environment...\n Running initial build...');
await runDocKit();

console.log('\n Watching directories for changes...');
const watchDirs = ['pages', ...globalDirs];

for (const dir of watchDirs) {
  if (existsSync(`./${dir}`)) {
    watch(`./${dir}`, { recursive: true }, (event, filename) =>
      handleFileChange(`./${dir}`, filename)
    );
  }
}

// --- LOCAL SERVER ---

console.log('\n🌐 Starting local server...');
spawn(process.execPath, [SERVE_ENTRY, './out']);
