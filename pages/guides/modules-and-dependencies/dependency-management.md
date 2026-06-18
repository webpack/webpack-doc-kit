---
authors: ndelangen,chrisVillanueva,sokra,byzyk,AnayaDesign,ThierryRakotomanana,avivkeller
---

# Dependency Management

## Dynamic expressions in `import()` or `require()`

When a request contains an expression, webpack cannot determine the **exact** module at compile time, so it creates a context instead.

For example, suppose you have the following folder structure, which includes a number of `.ejs` files:

```text
example_directory
└── template/
    ├── table.ejs
    ├── table-row.ejs
    └── directory/
        └── another.ejs
```

Now consider what happens when webpack evaluates the following `import()` or `require()` call:

```js
import(`./template/${name}.ejs`);
require(`./template/${name}.ejs`);
```

webpack parses the call and extracts the following information from it:

```text
Directory: ./template
Regular expression: /^.*\.ejs$/
```

### Context module

From this, webpack generates a context module. The context module references **every module in that directory** that can be required with a request matching the regular expression, and it includes a map that translates each request to a module id.

Here is an example of such a map:

```json
{
  "./table.ejs": 42,
  "./table-row.ejs": 43,
  "./directory/another.ejs": 44
}
```

The context module also contains the runtime logic needed to look up modules in this map.

As a result, dynamic calls are supported, but every matching module ends up included in the bundle.

## `import.meta.webpackContext`

`import.meta.webpackContext` is the ESM equivalent of `require.context`.

```js
import.meta.webpackContext(directory, {
  recursive: true,
  regExp: /^\.\/.*$/,
  mode: 'sync',
});
```

> [!WARNING]
> The arguments passed to `import.meta.webpackContext` must be literals.

## `require.context`

You can create your own context with the `require.context()` function.

It accepts a directory to search, a flag that indicates whether subdirectories should also be searched, and a regular expression to match files against.

webpack scans the code for `require.context()` calls while building.

The syntax is as follows:

```js
require.context(
  directory,
  (useSubdirectories = true),
  (regExp = /^\.\/.*$/),
  (mode = 'sync')
);
```

Examples:

```js
require.context('./test', false, /\.test\.js$/);
// A context with files from the test directory that can be required with a request ending in `.test.js`.
```

```js
require.context('../', true, /\.stories\.js$/);
// A context with all files in the parent folder and its descendant folders ending in `.stories.js`.
```

> [!WARNING]
> The arguments passed to `require.context` must be literals.

### Context module API

A context module exports a (require) function that takes a single argument: the request.

This exported function has three properties: `resolve`, `keys`, and `id`.

- `resolve` is a function that returns the module id of the parsed request.
- `keys` is a function that returns an array of every request the context module can handle.

This is handy when you want to require all files in a directory, or all files matching a pattern. For example:

```js
function importAll(r) {
  r.keys().forEach(r);
}

importAll(
  import.meta.webpackContext('../components/', {
    recursive: true,
    regExp: /\.js$/,
  })
);
```

```js
const cache = {};

function importAll(r) {
  for (const key of r.keys()) cache[key] = r(key);
}

importAll(
  import.meta.webpackContext('../components/', {
    recursive: true,
    regExp: /\.js$/,
  })
);
// At build time, cache will be populated with all required modules.
```

- `id` is the module id of the context module. This can be useful for `import.meta.webpackHot.accept` or `module.hot.accept`.
