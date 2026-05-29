import { readFileSync, writeFileSync } from 'node:fs';
import { major, valid } from 'semver';

const VERSIONS_FILE = './versions.json';

const [tag] = process.argv.slice(2);
if (!tag) throw new Error('Missing release tag (e.g. v5.108.0)');
if (!valid(tag)) throw new Error(`"${tag}" is not a valid semver tag`);

const latestMajor = major(tag);
const data = JSON.parse(readFileSync(VERSIONS_FILE, 'utf8'));

const existingIndex = data.findIndex(v => major(v) === latestMajor);

if (existingIndex !== -1) {
  data[existingIndex] = tag;
  console.log(`Updated v${latestMajor}.x to ${tag}`);
} else {
  data.unshift(tag);
  console.log(`Created new entry for v${latestMajor}.x: ${tag}`);
}

writeFileSync(VERSIONS_FILE, JSON.stringify(data, null, 2));
console.log('versions.json written');
