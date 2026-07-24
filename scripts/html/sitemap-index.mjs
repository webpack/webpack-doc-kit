import { readFile, writeFile } from 'node:fs/promises';
import { major } from 'semver';

const versions = JSON.parse(await readFile('./versions.json', 'utf8'));

const ORIGIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const sitemaps = [
  `${ORIGIN}/sitemap.xml`,
  ...versions.map(
    version => `${ORIGIN}/docs/api/v${major(version)}.x/sitemap.xml`
  ),
];

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(url => `  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>`)
  .join('\n')}
</sitemapindex>
`;

await writeFile('./out/sitemap-index.xml', sitemapIndex, 'utf8');
