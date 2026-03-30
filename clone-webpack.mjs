import fs from 'fs';
import { execFileSync } from 'child_process';

const webpackDir = './webpack';
const headCommitFile = './HEAD_COMMIT';

// Allow an env var override (used by CI)
let ref = process.env.WEBPACK_REF;

if (!ref && fs.existsSync(headCommitFile)) {
  ref = fs.readFileSync(headCommitFile, 'utf-8').trim();
}

if (!ref) {
  // Default fallback if running locally before any syncing has happened
  console.log(
    `Warning: WEBPACK_REF not set and ${headCommitFile} not found. Defaulting to 'main'.`
  );
  ref = 'main';
}

console.log(`Cloning webpack repository at ref: ${ref}...`);

try {
  if (fs.existsSync(webpackDir)) {
    console.log(
      `Repository already exists at ${webpackDir}. Fetching latest updates...`
    );
    execFileSync('git', ['fetch', '--all'], {
      cwd: webpackDir,
      stdio: 'inherit',
    });
  } else {
    // Clone the repository
    console.log('Running git clone https://github.com/webpack/webpack.git...');
    execFileSync(
      'git',
      ['clone', 'https://github.com/webpack/webpack.git', webpackDir],
      {
        stdio: 'inherit',
      }
    );
  }

  // Checkout the target commit
  console.log(`Checking out commit/branch: ${ref}...`);
  execFileSync('git', ['checkout', ref], { cwd: webpackDir, stdio: 'inherit' });

  console.log('Successfully completed clone-webpack script.');
} catch (error) {
  console.error('Error during git clone or checkout:', error.message);
  process.exit(1);
}
