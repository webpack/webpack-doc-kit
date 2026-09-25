import { strict as assert } from 'node:assert';
import { execFile } from 'node:child_process';
import {
  copyFile,
  mkdtemp,
  mkdir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { test } from 'node:test';

const execFileAsync = promisify(execFile);
const blogScript = fileURLToPath(
  new URL('../../scripts/data/blog.mjs', import.meta.url)
);

const createFixture = async content => {
  const root = await mkdtemp(join('tests', 'data', '.blog-'));
  await mkdir(join(root, 'scripts', 'data'), { recursive: true });
  await mkdir(join(root, 'pages', 'blog', 'posts'), { recursive: true });
  await mkdir(join(root, 'generated'), { recursive: true });
  await copyFile(blogScript, join(root, 'scripts', 'data', 'blog.mjs'));
  await writeFile(join(root, 'pages', 'blog', 'posts', 'example.md'), content);
  return root;
};

const runFixture = (root, timeZone = 'UTC') =>
  execFileAsync(process.execPath, ['scripts/data/blog.mjs'], {
    cwd: root,
    env: { ...process.env, TZ: timeZone },
  });

test('generates blog data for valid dates', async t => {
  const root = await createFixture("---\ndate: '2026-09-22'\n---\n# Test\n");
  t.after(() => rm(root, { recursive: true, force: true }));

  await runFixture(root);
  const posts = JSON.parse(
    await readFile(join(root, 'generated', 'blog.json'), 'utf8')
  );

  assert.equal(posts[0].date, '2026-09-22T00:00:00.000Z');
});

test('normalizes offset-less quoted date-times as UTC', async t => {
  const root = await createFixture(
    "---\ndate: '2026-09-22 10:00'\n---\n# Test\n"
  );
  t.after(() => rm(root, { recursive: true, force: true }));

  const dates = [];
  for (const timeZone of ['UTC', 'America/Los_Angeles']) {
    await runFixture(root, timeZone);
    const posts = JSON.parse(
      await readFile(join(root, 'generated', 'blog.json'), 'utf8')
    );
    dates.push(posts[0].date);
  }

  assert.deepEqual(dates, [
    '2026-09-22T10:00:00.000Z',
    '2026-09-22T10:00:00.000Z',
  ]);
});

test('reports the file for an invalid blog date', async t => {
  const root = await createFixture('---\ndate: not-a-date\n---\n# Test\n');
  t.after(() => rm(root, { recursive: true, force: true }));

  await assert.rejects(runFixture(root), error => {
    assert.match(error.stderr, /InvalidBlogDateError: Invalid blog date/);
    assert.match(error.stderr, /pages[\\/]blog[\\/]posts[\\/]example\.md/);
    assert.match(error.stderr, /not-a-date/);
    return true;
  });
});

test('rejects nonexistent calendar dates', async t => {
  const root = await createFixture('---\ndate: 2026-02-30\n---\n# Test\n');
  t.after(() => rm(root, { recursive: true, force: true }));

  await assert.rejects(runFixture(root), error => {
    assert.match(error.stderr, /Invalid blog date/);
    assert.match(error.stderr, /2026-02-30/);
    return true;
  });
});

test('rejects one-digit dates that roll over', async t => {
  const root = await createFixture(
    '---\ndate: 2024-2-30 10:00:00\n---\n# Test\n'
  );
  t.after(() => rm(root, { recursive: true, force: true }));

  await assert.rejects(runFixture(root), error => {
    assert.match(error.stderr, /Invalid blog date/);
    assert.match(error.stderr, /2024-2-30/);
    return true;
  });
});

test('rejects out-of-range time components', async t => {
  const root = await createFixture(
    '---\ndate: 2024-01-01 25:60:60\n---\n# Test\n'
  );
  t.after(() => rm(root, { recursive: true, force: true }));

  await assert.rejects(runFixture(root), error => {
    assert.match(error.stderr, /Invalid blog date/);
    assert.match(error.stderr, /25:60:60/);
    return true;
  });
});

test('accepts ISO end-of-day timestamps', async t => {
  for (const value of ['2026-09-22T24:00:00Z', '2026-09-22 24:00']) {
    const root = await createFixture(`---\ndate: '${value}'\n---\n# Test\n`);
    t.after(() => rm(root, { recursive: true, force: true }));

    await runFixture(root);
  }
});

test('rejects nonzero end-of-day time components', async t => {
  const root = await createFixture(
    "---\ndate: '2026-09-22T24:00:01Z'\n---\n# Test\n"
  );
  t.after(() => rm(root, { recursive: true, force: true }));

  await assert.rejects(runFixture(root), error => {
    assert.match(error.stderr, /Invalid blog date/);
    assert.match(error.stderr, /24:00:01/);
    return true;
  });
});

test('reports the file for a missing blog date', async t => {
  const root = await createFixture('---\ntitle: Test\n---\n# Test\n');
  t.after(() => rm(root, { recursive: true, force: true }));

  await assert.rejects(runFixture(root), error => {
    assert.match(error.stderr, /Invalid blog date/);
    assert.match(error.stderr, /example\.md/);
    assert.match(error.stderr, /<missing>/);
    return true;
  });
});
