---
authors: smelukov,EugeneHlushko,chenxsan,amirsaeed671,avivkeller
---

# Under the Hood

> [!NOTE]
> This section describes webpack internals and is useful primarily for plugin developers.

At its core, bundling is a function that takes some files and emits others.

Between input and output, however, it works with [modules](/guides/getting-started/concepts/modules), [entry points](/guides/getting-started/concepts/entry-points), chunks, chunk groups, and many other intermediate pieces.

## The main parts

Every file used in your project is a [module](/guides/getting-started/concepts/modules).

```js displayName="./index.js"
import app from './app.js';
```

```js displayName="./app.js"
export default 'the app';
```

By referencing one another, the modules form a graph (`ModuleGraph`).

During bundling, modules are combined into chunks. Chunks combine into chunk groups and form a graph (`ChunkGraph`) interconnected through modules. When you describe an entry point, webpack creates a chunk group with one chunk under the hood.

```js displayName="./webpack.config.js"
export default {
  entry: './index.js',
};
```

This creates one chunk group named `main` (`main` is the default name for an entry point). The chunk group contains the `./index.js` module, and as the parser handles the imports inside `./index.js`, new modules are added to this chunk.

Another example:

```js displayName="./webpack.config.js"
export default {
  entry: {
    home: './home.js',
    about: './about.js',
  },
};
```

This creates two chunk groups, named `home` and `about`. Each has one chunk containing a single module: `./home.js` for `home` and `./about.js` for `about`.

> [!NOTE]
> A chunk group may contain more than one chunk. For example, [`SplitChunksPlugin`](/docs/api/optimize/SplitChunksPlugin) splits a chunk into one or more chunks.

## Chunks

Chunks come in two forms:

- `initial` is the main chunk for an entry point. It contains all the modules and their dependencies that you specify for that entry point.
- `non-initial` is a chunk that may be lazy-loaded. It can appear when a [dynamic import](/guides/optimization/code-splitting/#dynamic-imports) or [`SplitChunksPlugin`](/docs/api/optimize/SplitChunksPlugin) is used.

Each chunk has a corresponding **asset**. Assets are the output files, the result of bundling.

```js displayName="webpack.config.js"
export default {
  entry: './src/index.jsx',
};
```

```jsx displayName="./src/index.jsx"
import { createRoot } from 'react-dom/client';

import('./app.jsx').then(App => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
});
```

An initial chunk named `main` is created. It contains:

- `./src/index.jsx`
- `react`
- `react-dom`

along with all of their dependencies, except `./app.jsx`.

A non-initial chunk for `./app.jsx` is created because that module is imported dynamically.

**Output:**

- `/dist/main.js` — an `initial` chunk
- `/dist/394.js` — a `non-initial` chunk

By default, `non-initial` chunks have no name, so a unique ID is used instead. When using a dynamic import, you can specify a chunk name explicitly with a ["magic" comment](/guides/optimization/code-splitting/#magic-comments):

```jsx
import(
  /* webpackChunkName: "app" */
  './app.jsx'
).then(App => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
});
```

**Output:**

- `/dist/main.js` — an `initial` chunk
- `/dist/app.js` — a `non-initial` chunk

## Output

The names of the output files are controlled by two fields in the config:

- [`output.filename`](#TODO[/configuration/output/#outputfilename]) — for `initial` chunk files
- [`output.chunkFilename`](#TODO[/configuration/output/#outputchunkfilename]) — for `non-initial` chunk files
- In some cases a chunk is used as both `initial` and `non-initial`. In those cases, `output.filename` is used.

A [few placeholders](#TODO[/configuration/output/#template-strings]) are available in these fields. The most common are:

- `[id]` — the chunk id (e.g. `[id].js` → `485.js`)
- `[name]` — the chunk name (e.g. `[name].js` → `app.js`); if a chunk has no name, its id is used instead
- `[contenthash]` — an md4 hash of the output file's content (e.g. `[contenthash].js` → `4ea6ff1de66c537eb9b2.js`)
