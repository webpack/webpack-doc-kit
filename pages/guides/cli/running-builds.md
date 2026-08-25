---
title: Running Builds
authors: anshumanv,rishabh3112,snitin315,evenstensberg,simon04,chenxsan,madhavarshney,EugeneHlushko,byzyk,smelukov,burhanuday,avivkeller
---

# Running Builds

Three commands cover almost everything you do day to day: build once, rebuild on change, or serve. This guide covers each of them, then how to tell the CLI which configuration to run and how to build without one at all.

## Build

`build` compiles once and exits. It is the default command, so these two are identical:

```bash
npx webpack
npx webpack build
```

Positional arguments are treated as entries, and flags map onto configuration options:

```bash
npx webpack build --config ./webpack.config.js --mode production
```

Use this in CI and in your `npm run build` script. It exits non-zero when the build fails, so a broken build stops the pipeline. See [exit codes](/guides/cli/inspecting-builds#exit-codes) for what each status means.

## Watch

`watch` runs the same build, then keeps the process alive and recompiles whenever a file in the dependency graph changes:

```bash
npx webpack watch --mode development
```

Rebuilds are much faster than the first build because webpack keeps the module graph in memory. `npx webpack --watch` does the same thing through the [`watch`](/docs/api/options#watch) option, and [`watchOptions`](/docs/api/options#watchoptions) tunes the polling and debouncing behavior.

Reach for `watch` when something other than a browser consumes the output — a server process, an extension host, an Electron main process. If you are building for a browser, `serve` is usually the better fit.

## Serve

`serve` starts [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server), which watches your files, keeps the bundles in memory, and serves them over HTTP with live reloading and [Hot Module Replacement](/guides/core-workflows/development/hot-module-replacement):

```bash
npx webpack serve --open
```

The dev server is a separate package, so install it first:

```bash
npm install --save-dev webpack-dev-server
```

Because it needs its own settings as well as webpack's, `webpack serve` accepts the union of both flag sets. The [development guide](/guides/core-workflows/development) walks through a realistic setup.

## Pointing at a configuration file

Without `--config`, the CLI [discovers a configuration file by convention](/guides/cli#how-the-configuration-file-is-found). Pass one explicitly when the file lives elsewhere or has a different name:

```bash
npx webpack --config ./config/webpack.prod.js
```

### Picking one of several configurations

A configuration file can export an array of configurations, which webpack builds in parallel. Give each one a [`name`](/docs/api/options#name) and you can build a single configuration on demand:

```js displayName="webpack.config.js"
export default [
  {
    name: 'client',
    entry: './src/client.js',
    output: { filename: 'client.js' },
    mode: 'development',
  },
  {
    name: 'server',
    entry: './src/server.js',
    output: { filename: 'server.js' },
    target: 'node',
    mode: 'development',
  },
];
```

```bash
npx webpack --config-name server
```

The flag can be repeated to select a subset:

```bash
npx webpack --config-name client --config-name server
```

### Merging several files

`--merge` combines two or more configuration files with [`webpack-merge`](https://github.com/survivejs/webpack-merge), with later files winning on conflicts:

```bash
npx webpack --config ./webpack.common.js --config ./webpack.prod.js --merge
```

This is a way to keep a shared base configuration separate from per-environment overrides without writing any merge code yourself. The [production guide](/guides/core-workflows/production) uses the same split.

### Extending a base configuration

`--extends` does the same job from the other direction: instead of listing every file on the command line, a configuration declares the base it builds on.

```bash
npx webpack --extends ./base.webpack.config.js
```

The equivalent [`extends`](/docs/api/options#extends) option inside the configuration file itself is usually tidier, since the relationship travels with the file rather than with the invocation.

## Building without a configuration file

For a quick one-off bundle, entry and output can come straight from the command line:

```bash
npx webpack --entry ./src/index.js --output-path dist
```

`--entry` accepts several values, each becoming a separate entry point:

```bash
npx webpack --entry-reset ./src/index.js ./src/admin.js --output-path dist
```

> [!WARNING]
> `--entry` **adds** to the entries already defined in your configuration. Use `--entry-reset` first when you want to replace them instead of appending to them.

> [!TIP]
> Prefer the `webpack [command] --entry-reset [entries...] [options]` shape. Some options accept multiple values, so a trailing positional argument can be swallowed by the preceding flag: `webpack --target node ./entry.js` is parsed as `target: ['node', './entry.js']`.

Given this project:

```text
.
├── dist
├── index.html
└── src
    ├── index.js
    ├── index2.js
    └── others.js
```

bundling one entry:

```bash
npx webpack ./src/index.js --output-path dist
```

produces a single bundle whose graph starts at `index.js`:

```text
asset main.js 142 bytes [compared for emit] [minimized] (name: main)
./src/index.js 30 bytes [built] [code generated]
./src/others.js 1 bytes [built] [code generated]
webpack 5.109.2 compiled successfully in 187 ms
```

while passing two files makes each one its own entry point:

```bash
npx webpack ./src/index.js ./src/index2.js --output-path dist
```

`--output-path` maps to [`output.path`](/docs/api/options#outputpath); the emitted filenames still come from [`output.filename`](/docs/api/options#outputfilename) and default to `[name].js`.

This is fine for experiments and one-liners. As soon as you need loaders, plugins, or more than a couple of options, move to a [configuration file](/guides/getting-started/concepts/configuration).

## Passing options to Node.js

Some builds need Node.js itself to be configured — a larger heap, a preloaded module, a custom loader hook. Those are not webpack flags, so pass them through `NODE_OPTIONS`:

```bash
NODE_OPTIONS="--max-old-space-size=4096" npx webpack
```

Several options can be combined in one value:

```bash
NODE_OPTIONS="--max-old-space-size=4096 -r ./preload.js" npx webpack
```

## Next steps

- [Environments and modes](/guides/cli/environments) — feeding values into a configuration that exports a function.
- [Inspecting builds](/guides/cli/inspecting-builds) — progress output, stats, and bundle analysis.
