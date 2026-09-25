// Builds the data file consumed by the Blog layout (`#theme/blog`)

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const POSTS_DIR = join(ROOT, 'pages', 'blog', 'posts');
const OUTPUT = join(ROOT, 'generated', 'blog.json');

const titleFromBody = body => body.match(/^#\s+(.+)$/m)?.[1].trim() ?? null;

class InvalidBlogDateError extends Error {
  constructor(file, display) {
    super(
      `Invalid blog date in ${join('pages', 'blog', 'posts', file)}: ${display} ` +
        '(expected an ISO 8601 date or timestamp)'
    );
    this.name = 'InvalidBlogDateError';
  }
}

const daysInMonth = (year, month) => {
  if (month === 2) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
  }

  return [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1] ?? 0;
};

const normalizeDate = (value, file, source) => {
  const rawDate = source
    .match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1]
    ?.match(/^date:\s*(.*?)\s*$/m)?.[1];
  const calendar = rawDate?.match(
    /^['"]?(\d{4})-(\d{1,2})-(\d{1,2})(?:(?:[Tt]|[ \t]+)(\d{1,2}):(\d{2})(?::(\d{2}))?)?/
  );

  if (
    calendar &&
    (Number(calendar[2]) < 1 ||
      Number(calendar[2]) > 12 ||
      Number(calendar[3]) < 1 ||
      Number(calendar[3]) >
        daysInMonth(Number(calendar[1]), Number(calendar[2])) ||
      (calendar[4] !== undefined &&
        (Number(calendar[4]) > 24 ||
          (Number(calendar[4]) === 24 &&
            (Number(calendar[5]) !== 0 ||
              (calendar[6] !== undefined && Number(calendar[6]) !== 0))))) ||
      (calendar[5] !== undefined && Number(calendar[5]) > 59) ||
      (calendar[6] !== undefined && Number(calendar[6]) > 59))
  ) {
    const display = JSON.stringify(rawDate.trim());
    throw new InvalidBlogDateError(file, display);
  }

  const date =
    value instanceof Date
      ? value
      : typeof value === 'string' && value.trim()
        ? new Date(
            /^\d{4}-\d{1,2}-\d{1,2}(?:[Tt]|[ \t]+)\d{1,2}:\d{2}(?::\d{2}(?:\.\d+)?)?$/.test(
              value.trim()
            )
              ? `${value.trim().replace(/[ \t]+/, 'T')}Z`
              : value
          )
        : null;

  if (!date || Number.isNaN(date.getTime())) {
    const displayValue = rawDate?.trim() || value;
    const display =
      displayValue === undefined ? '<missing>' : JSON.stringify(displayValue);
    throw new InvalidBlogDateError(file, display);
  }

  return date.toISOString();
};

const readPosts = async () => {
  const entries = await readdir(POSTS_DIR);
  const files = entries.filter(name => name.endsWith('.md'));

  const posts = await Promise.all(
    files.map(async file => {
      const slug = file.replace(/\.md$/, '');
      const source = await readFile(join(POSTS_DIR, file), 'utf8');
      const { data, content } = matter(source);

      return {
        slug,
        title: titleFromBody(content) ?? slug,
        authors: data.authors?.split(',').map(s => s.trim()),
        date: normalizeDate(data.date, file, source),
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
