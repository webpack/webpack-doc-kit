---
title: Public Path
authors: rafaelrinaldi,chrisVillanueva,gonzoyumo,chenxsan,avivkeller
---

# Public Path

[`output.publicPath`](/docs/api/options#outputpublicpath) tells webpack the base URL that the browser should use when it requests the files your build emits. Every file written to [`output.path`](/docs/api/options#outputpath) is referenced from `output.publicPath` at runtime: the chunks created by [code splitting](/guides/optimization/code-splitting), and any other asset in your dependency graph such as images and fonts.

Getting this wrong is one of the more confusing failure modes in webpack, because the build succeeds and only the browser notices: the page loads, then a chunk or an image 404s from a path that looks almost right.

## Set it from an environment variable

The most common reason to change the public path is that the same code is served from different places in different environments. During development, assets might sit next to the page in an `assets/` folder; in production, they are served from a CDN.

An environment variable handles both cases with one configuration. Say the variable is `ASSET_PATH`:

```js displayName="webpack.config.js"
import webpack from 'webpack';

// Try the environment variable, otherwise use root.
const ASSET_PATH = process.env.ASSET_PATH || '/';

export default {
  output: {
    publicPath: ASSET_PATH,
  },

  plugins: [
    // Make the same value readable from application code.
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
};
```

See the [environment variables guide](/guides/core-workflows/environment-variables) for the different ways to feed a value into a configuration.

## Set it at runtime

Sometimes the base URL is not knowable at build time at all: it depends on the tenant, the deployment, or a value the server injects into the page. webpack exposes a free variable, `__webpack_public_path__`, that overrides `output.publicPath` for the rest of the run:

```js
__webpack_public_path__ = process.env.ASSET_PATH;
```

Because the `DefinePlugin` entry above replaces `process.env.ASSET_PATH` at build time, this works without any runtime lookup.

> [!WARNING]
> The assignment has to run before webpack loads anything else. In an ES module, all `import` statements are evaluated before the module body, so an assignment written at the top of your entry file still runs too late. Move it into its own module and import that module first.

```js displayName="src/index.js"
import './public-path';
import './app';
```

```js displayName="src/public-path.js"
__webpack_public_path__ = process.env.ASSET_PATH;
```

## Let webpack work it out

If you don't know the public path in advance and don't want to thread one through, set it to `'auto'` and webpack derives it at runtime from whatever the current environment exposes: [`import.meta.url`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta), [`document.currentScript`](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript), `script.src`, or `self.location`.

```js displayName="webpack.config.js"
export default {
  output: {
    publicPath: 'auto',
  },
};
```

This is a good default for a library or a micro-frontend that gets dropped into a host page you don't control, since the bundle locates itself instead of trusting a configured path.

## Which one should you use?

| Situation                                                  | Use                                                             |
| ---------------------------------------------------------- | --------------------------------------------------------------- |
| Assets are served from a fixed, known URL per environment  | `output.publicPath` from an environment variable                |
| The base URL is only known once the page is running        | `__webpack_public_path__` in a dedicated first import           |
| The bundle is embedded in a host you don't control         | `output.publicPath: 'auto'`                                     |
| A single asset needs a different base than everything else | [`publicPath` on the asset rule](/docs/api/options#modulerules) |

## Further reading

- [Asset Modules: public path](/guides/core-workflows/asset-modules#public-path) — overriding the public path for individual assets.
- [Concepts: Output](/guides/getting-started/concepts/output#advanced) — combining a CDN public path with content hashes.
- [Module Federation: dynamic public path](/guides/getting-started/concepts/module-federation#dynamic-public-path) — setting a remote's public path from its host.
