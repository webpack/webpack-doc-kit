import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';

// Directories, that are auto-generated, should be ignored
const IGNORED_DIRS = [
  'docs/api',
  'docs/loaders',
  'docs/plugins',
  'about/governance',
];

// Files that intentionally do not have an H1 heading (e.g. custom layouts)
const IGNORED_FILES = [
  '404.md',
  'index.md',
  'blog/index.md',
  'about/sponsors.md',
];

const isIgnored = relativePath => {
  return (
    IGNORED_DIRS.some(dir => relativePath.startsWith(dir + '/')) ||
    IGNORED_FILES.some(file => relativePath === file)
  );
};

const run = async () => {
  const args = process.argv.slice(2);
  const isFixMode = args.includes('--fix');
  const pagesDir = join(import.meta.dirname, '..', '..', 'pages');
  let hasErrors = false;

  const files = await readdir(pagesDir, { recursive: true });

  for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) {
      continue;
    }

    const relativePath = file.replace(/\\/g, '/');

    if (isIgnored(relativePath)) {
      continue;
    }

    const fullPath = join(pagesDir, file);

    const content = await readFile(fullPath, 'utf8');
    const parsed = matter(content);

    const frontmatterTitle = parsed.data.title;

    const h1Match = parsed.content.match(/^#\s+(.+)$/m);
    const h1Title = h1Match ? h1Match[1].trim() : null;

    if (!frontmatterTitle && !h1Title) {
      continue;
    }

    if (frontmatterTitle && h1Title && frontmatterTitle !== h1Title) {
      if (isFixMode) {
        parsed.data.title = h1Title;
        await writeFile(
          fullPath,
          matter.stringify(parsed.content, parsed.data, { lineWidth: -1 }),
          'utf8'
        );
        console.log(
          `[lint] Fixed: Updated frontmatter title to "${h1Title}" in ${file}`
        );
      } else {
        console.error(
          `[lint] Mismatch in ${file}:\nFrontmatter: "${frontmatterTitle}"\nH1 Heading : "${h1Title}"`
        );
        hasErrors = true;
      }
    } else if (!frontmatterTitle && h1Title) {
      if (isFixMode) {
        parsed.data.title = h1Title;
        await writeFile(
          fullPath,
          matter.stringify(parsed.content, parsed.data, { lineWidth: -1 }),
          'utf8'
        );
        console.log(
          `[lint] Fixed: Added frontmatter title "${h1Title}" in ${file}`
        );
      } else {
        console.error(
          `[lint] Missing frontmatter title in ${file} (H1 is "${h1Title}")`
        );
        hasErrors = true;
      }
    } else if (frontmatterTitle && !h1Title) {
      console.error(
        `[lint] Missing H1 heading in ${file} (Frontmatter is "${frontmatterTitle}")`
      );
      hasErrors = true;
    }
  }

  if (hasErrors) {
    throw new Error(
      'Lint failed: Frontmatter title and H1 heading must match.'
    );
  } else {
    console.log(
      '[lint] All manually written pages have matching frontmatter and H1 titles.'
    );
  }
};

await run();
