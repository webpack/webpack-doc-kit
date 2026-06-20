// Builds the banner config doc-kit fetches at runtime, pointing it at the
// latest webpack release .

import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { major, minor } from 'semver';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const POSTS_DIR = join(ROOT, 'pages', 'blog', 'posts');

// How long the banner stays up after a release.
const BANNER_DURATION_DAYS = 7;

const titleFromBody = body => body.match(/^#\s+(.+)$/m)?.[1].trim() ?? null;

const isRelease = category =>
  typeof category === 'string' && category.toLowerCase() === 'release';

// Reads `category: Release` blog posts, newest first.
const readReleasePosts = async () => {
  const files = (await readdir(POSTS_DIR)).filter(name => name.endsWith('.md'));

  const posts = await Promise.all(
    files.map(async file => {
      const { data, content } = matter(
        await readFile(join(POSTS_DIR, file), 'utf8')
      );

      return isRelease(data.category)
        ? {
            slug: file.replace(/\.md$/, ''),
            title: titleFromBody(content),
            date: new Date(data.date),
          }
        : null;
    })
  );

  return posts.filter(Boolean).sort((a, b) => b.date - a.date);
};

// Builds the banner config for `version` (e.g. `v5.107.2`): links to the
// matching release post, or the newest one if none matches.
export const buildWebsiteBanners = async version => {
  const releases = await readReleasePosts();

  if (!releases.length) {
    return { websiteBanners: {} };
  }

  const series = new RegExp(`\\b${major(version)}\\.${minor(version)}\\b`);
  const release =
    releases.find(post => post.title && series.test(post.title)) ?? releases[0];

  const endDate = new Date(release.date);
  endDate.setUTCDate(endDate.getUTCDate() + BANNER_DURATION_DAYS);

  return {
    websiteBanners: {
      index: {
        text: `webpack ${version} is now available - read the release notes`,
        link: `/blog/posts/${release.slug}`,
        type: 'default',
        startDate: release.date.toISOString(),
        endDate: endDate.toISOString(),
      },
    },
  };
};
