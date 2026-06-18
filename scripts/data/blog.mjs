// Builds the data file consumed by the Blog layout (`#theme/blog`)

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const POSTS_DIR = join(ROOT, 'pages', 'blog', 'posts');
const OUTPUT = join(ROOT, 'generated', 'blog.json');

const titleFromBody = body => body.match(/^#\s+(.+)$/m)?.[1].trim() ?? null;

const readPosts = async () => {
  const entries = await readdir(POSTS_DIR);
  const files = entries.filter(name => name.endsWith('.md'));

  const posts = await Promise.all(
    files.map(async file => {
      const slug = file.replace(/\.md$/, '');
      const { data, content } = matter(
        await readFile(join(POSTS_DIR, file), 'utf8')
      );

      return {
        slug,
        title: titleFromBody(content) ?? slug,
        authors: data.authors?.split(',').map(s => s.trim()),
        date: new Date(data.date).toISOString(),
        category: data.category ?? null,
        image: data.image ?? null,
        ...(data.description && { description: data.description }),
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const posts = await readPosts();
await mkdir(dirname(OUTPUT), { recursive: true });
await writeFile(OUTPUT, `${JSON.stringify(posts, null, 2)}\n`);
console.log(`[blog] wrote ${posts.length} posts to ${OUTPUT}`);
