---
authors: sokra,tbroadley,byzyk,madhavarshney,wizardofhogwarts,anikethsaha,Brennvo,avivkeller
---

# Build Performance

This guide collects practical tips for improving the speed of your builds and compilations.

## General

The advice below applies whether you're running build scripts in [development](/guides/core-workflows/development) or [production](/guides/core-workflows/production).

### Stay up to date

Always use the latest version of webpack. Performance improvements land continuously, so newer releases tend to be faster. You can check the current recommended version here:

[![latest webpack version](https://img.shields.io/github/package-json/v/webpack/webpack.svg?label=webpack&style=flat-square&maxAge=3600)](https://github.com/webpack/webpack/releases)

Keeping **Node.js** current helps as well, and so does upgrading your package manager (such as `npm` or `yarn`). Recent versions produce more efficient module trees and resolve dependencies faster.

### Loaders

Apply loaders to as few modules as possible. Rather than this:

```js
export default {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
```

Use the `include` field so the loader only runs on the modules that actually need transforming:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
};
```

### Bootstrap

Every loader and plugin adds to startup time. Keep the number of tools you rely on to a minimum.

### Resolving

You can speed up module resolution with the following changes:

- Keep `resolve.modules`, `resolve.extensions`, `resolve.mainFiles`, and `resolve.descriptionFiles` as short as possible, since each entry adds filesystem lookups.
- Set `resolve.symlinks: false` if you don't use symlinks (for example, `npm link` or `yarn link`).
- Set `resolve.cacheWithContext: false` if you use custom resolving plugins that aren't context specific.

### DLLs

Use the `DllPlugin` to move infrequently changed code into a separate compilation. This speeds up your application's compilation at the cost of added complexity in the build process.

### Smaller is faster

Reducing the total size of the compilation improves build performance. Try to keep chunks small:

- Use fewer and smaller libraries.
- Use the `SplitChunksPlugin` in multi-page applications.
- Use the `SplitChunksPlugin` in `async` mode in multi-page applications.
- Remove unused code.
- Only compile the part of the codebase you're currently working on.

### Worker pool

The `thread-loader` lets you offload expensive loaders to a pool of workers.

> [!WARNING]
> Don't spawn too many workers, since the Node.js runtime and the loader both have boot overhead. Keep module transfers between the workers and the main process to a minimum, because inter-process communication is expensive.

### Persistent cache

Enable the [`cache`](#TODO[/configuration/cache]) option in your webpack configuration. Clear the cache directory on `"postinstall"` in `package.json`.

> [!TIP]
> Persistent caching supports Yarn PnP version 3 ([Yarn 2 Berry](https://yarnpkg.com/features/pnp)).

### Custom plugins and loaders

Profile your own plugins and loaders so they don't become a performance bottleneck.

### Progress plugin

You can shave time off builds by removing `ProgressPlugin` from your configuration. Bear in mind that `ProgressPlugin` offers less value for already-fast builds, so weigh its benefits against the cost.

## Development

These steps are especially helpful during _development_.

### Incremental builds

Use webpack's watch mode. Avoid third-party tools that watch your files and reinvoke webpack; the built-in watch mode tracks timestamps and forwards that information to the compilation for cache invalidation.

In some setups, watching falls back to polling, which can drive up CPU usage when many files are watched. In those cases, raise the polling interval with `watchOptions.poll`.

### Compile in memory

These utilities improve performance by compiling and serving assets from memory instead of writing them to disk:

- `webpack-dev-server`
- `webpack-hot-middleware`
- `webpack-dev-middleware`

### stats.toJson speed

By default, webpack 4 emits a large amount of data through `stats.toJson()`. Avoid reading parts of the `stats` object unless you need them in the incremental step. Starting with v3.1.3, `webpack-dev-server` included a significant fix that minimizes how much data it pulls from the `stats` object on each incremental build.

### Devtool

Be aware of the performance trade-offs between the different `devtool` settings:

- `"eval"` offers the best performance, but doesn't help with transpiled code.
- The `cheap-source-map` variants are faster if you can accept slightly lower-quality mappings.
- Use an `eval-source-map` variant for incremental builds.

> [!TIP]
> In most cases, `eval-cheap-module-source-map` is the best option.

### Avoid production-specific tooling

Certain utilities, plugins, and loaders only make sense when building for production. For instance, minifying and mangling your code with the `MinimizerPlugin` usually isn't worthwhile during development. The following tools are typically best left out in development:

- `MinimizerPlugin`
- `[fullhash]`, `[chunkhash]`, and `[contenthash]`
- `AggressiveSplittingPlugin`
- `AggressiveMergingPlugin`
- `ModuleConcatenationPlugin`

### Minimal entry chunk

webpack only writes updated chunks to the filesystem. For some configuration options — HMR; `[name]`, `[chunkhash]`, or `[contenthash]` in `output.chunkFilename`; and `[fullhash]` — the entry chunk is invalidated alongside the changed chunks.

Keep the entry chunk small so it's cheap to emit. The configuration below extracts the runtime code into its own chunk, making the entry chunk inexpensive to regenerate:

```js
export default {
  // ...
  optimization: {
    runtimeChunk: true,
  },
};
```

### Avoid extra optimization steps

webpack performs additional algorithmic work to optimize output for size and load performance. These optimizations are worthwhile for smaller codebases, but they can be costly in larger ones:

```js
export default {
  // ...
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};
```

### Output without path info

webpack can include path information in the output bundle, but this adds garbage collection pressure for projects that bundle thousands of modules. Disable it via `output.pathinfo`:

```js
export default {
  // ...
  output: {
    pathinfo: false,
  },
};
```

### Node.js versions 8.9.10 - 9.11.1

There was a [performance regression](https://github.com/nodejs/node/issues/19769) in Node.js versions 8.9.10 through 9.11.1 affecting the ES2015 `Map` and `Set` implementations. webpack uses these data structures heavily, so the regression slows down compile times. Earlier and later Node.js versions are unaffected.

### TypeScript loader

To improve build times with `ts-loader`, enable its `transpileOnly` option. This disables type checking on its own, so restore type checking with the [`ForkTsCheckerWebpackPlugin`](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin), which moves TypeScript type checking and ESLint linting into a separate process.

```js
export default {
  // ...
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  ],
};
```

> [!TIP]
> There's a [full example](https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker-webpack-plugin) in the `ts-loader` GitHub repository.

## Production

These steps are especially helpful for _production_ builds.

> [!WARNING]
> Don't sacrifice the quality of your application for small performance gains. In most cases, the quality of your optimizations matters more than how fast the build runs.

### Source maps

Source maps are genuinely expensive to generate. Make sure you actually need them.

## Specific tooling issues

The tools below have known issues that can hurt build performance.

### Babel

- Keep the number of presets and plugins to a minimum.

### TypeScript

- Use `fork-ts-checker-webpack-plugin` to run type checking in a separate process.
- Configure loaders to skip type checking.
- Run `ts-loader` with `happyPackMode: true` and `transpileOnly: true`.

### Sass

- `node-sass` has a bug that blocks threads in the Node.js thread pool. When pairing it with `thread-loader`, set `workerParallelJobs: 2`.
