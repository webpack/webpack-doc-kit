import { readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';

import Handlebars from 'handlebars';
import matter from 'gray-matter';

import { fetchWithAuth } from '../utils/fetch.mjs';

const { values } = parseArgs({
  options: {
    // Author
    author: { type: 'string', default: 'avivkeller' },
  },
});

const API_BASE = 'https://api.github.com/repos/webpack/webpack';
const TEMPLATE_PATH = new URL('./template.md.hbs', import.meta.url);

const fetchJSON = url => fetchWithAuth(url).then(r => r.json());

const getLatestVersion = async () => {
  const { tag_name } = await fetchJSON(`${API_BASE}/releases/latest`);
  return tag_name;
};

const getChangesets = async version => {
  try {
    const { files = [] } = await fetchJSON(`${API_BASE}/commits/${version}`);

    return files
      .filter(
        file =>
          file.status === 'removed' &&
          file.filename.startsWith('.changeset/') &&
          file.patch
      )
      .map(({ patch }) => stripPatchMarkers(patch));
  } catch {
    const changesets = await fetchJSON(`${API_BASE}/contents/.changeset`);
    return Promise.all(
      changesets.map(({ download_url }) =>
        fetch(download_url).then(d => d.text())
      )
    );
  }
};

const stripPatchMarkers = patch => patch.replace(/^@@.*\n|^[- ]/gm, '');
const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);

const parseChangeset = file => {
  const { data, content } = matter(file);
  const [title, ...paragraphs] = content.trim().split(/\n{2,}/);

  return {
    notable: data.notable === true,
    semver: capitalize(data.webpack),
    title,
    description: paragraphs.join('\n\n'),
  };
};

async function renderReleaseNotes(version, changes, date) {
  Handlebars.registerHelper('filter', (items, property, expected) =>
    items.filter(item => item[property] === expected)
  );

  Handlebars.registerHelper('groupBy', (items, property) =>
    Object.groupBy(items, item => item[property])
  );

  const source = await readFile(TEMPLATE_PATH, 'utf8');
  const render = Handlebars.compile(source, { noEscape: true });

  return render({
    changes,
    version,
    date,
    ...values,
  });
}

const date = new Date().toISOString().slice(0, 10);
const version = await getLatestVersion();
const changesets = await getChangesets(version);
const changes = changesets.map(parseChangeset);
const post = await renderReleaseNotes(version, changes, date);
writeFile(
  new URL(
    import.meta.resolve(`../../pages/blog/posts/${date}-webpack-${version}.md`)
  ),
  post
);
