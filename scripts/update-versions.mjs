// Called from release.yml when a new webpack tag is published.
// Usage: node scripts/update-versions.mjs v5.108.0 <commit-sha>
import { readFileSync, writeFileSync } from 'fs';
import { major, valid } from 'semver';

const VERSIONS_FILE = './versions.json';

function fail(msg) {
  console.error(`error: ${msg}`);
  process.exit(1);
}

const [tag, commit] = process.argv.slice(2);

if (!tag) fail('missing release tag (e.g. v5.108.0)');
if (!commit) fail('missing commit SHA');
if (!valid(tag)) fail(`"${tag}" is not a valid semver tag`);

const data = JSON.parse(readFileSync(VERSIONS_FILE, 'utf8'));

const incomingMajor = major(tag);
const label = `v${incomingMajor}.x`;
const exactVersion = tag.replace(/^v/, '');

const existing = data.versions.find(v => v.major === incomingMajor);

if (existing) {
  // frozen means the docs for this major are locked - don't touch them
  if (existing.frozen) {
    console.log(`${label} is frozen. Skipping.`);
    process.exit(0);
  }

  existing.exactVersion = exactVersion;
  existing.commit = commit;
  console.log(`updated ${label} → ${exactVersion} @ ${commit}`);
} else {
  // first release of a new major - create the entry from scratch
  data.versions.push({
    label,
    major: incomingMajor,
    exactVersion,
    commit,
    frozen: false,
  });
  console.log(`created new entry for ${label} → ${exactVersion} @ ${commit}`);
}

// only move latest forward, never back
const currentLatestMajor =
  data.versions.find(v => v.label === data.latest)?.major ?? 0;
if (incomingMajor > currentLatestMajor) {
  data.latest = label;
  console.log(`latest promoted to ${label}`);
}

writeFileSync(VERSIONS_FILE, JSON.stringify(data, null, 2) + '\n');
console.log(`versions.json written`);
process.exit(0);
