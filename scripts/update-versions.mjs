import { readFileSync, writeFileSync } from 'node:fs';
import { major, valid } from 'semver';

const VERSIONS_FILE = './versions.json';
const VERCEL_CONFIG_FILE = './vercel.json';

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

// The unversioned /docs/api/* redirect always targets the latest major.
const latestOverallMajor = major(data[0]);
const vercelConfig = JSON.parse(readFileSync(VERCEL_CONFIG_FILE, 'utf8'));
const apiRedirect = vercelConfig.redirects.find(r =>
  r.source.startsWith('/docs/api/')
);

if (apiRedirect) {
  apiRedirect.destination = `/docs/api/v${latestOverallMajor}.x/:path`;
  writeFileSync(
    VERCEL_CONFIG_FILE,
    `${JSON.stringify(vercelConfig, null, 2)}\n`
  );
  console.log(`Updated vercel.json redirect to v${latestOverallMajor}.x`);
}
