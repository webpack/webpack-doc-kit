---
authors: phoekerson,avivkeller
---

# Modern Web Platform

This guide describes practical webpack patterns for **Web Components**, **Import Maps**, and **Progressive Web Apps** (PWAs) with **Service Workers**. Each section states the problem, shows a minimal configuration you can copy, and notes the current limits relative to future webpack improvements.

> [!TIP]
> Familiarity with [code splitting](/guides/optimization/code-splitting), [caching](/guides/optimization/caching) (`[contenthash]`), and the [`SplitChunksPlugin`](#TODO[/plugins/split-chunks-plugin/]) is helpful here.

## Web Components with webpack

### Problem

If more than one JavaScript bundle calls `customElements.define()` for the same tag name, the browser throws a [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException): `Failed to execute 'define' on 'CustomElementRegistry'`. This often happens when the module that registers an element is duplicated: separate entry points or async chunks each contain a copy of the registration code, so two bundles both run `define` for the same tag.

### Approach

Use [`optimization.splitChunks`](#TODO[/configuration/optimization/#optimizationsplitchunks]) so the module that defines the element lives in a **single shared chunk** that loads once. Adjust `cacheGroups` so your element definitions (or a dedicated folder such as `src/elements/`) are forced into one chunk. See [Prevent Duplication](/guides/optimization/code-splitting/#prevent-duplication) for the general idea.

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    main: './src/main.js',
    admin: './src/admin.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Put shared custom element modules in one async chunk.
        customElements: {
          test: /[\\/]src[\\/]elements[\\/]/,
          name: 'custom-elements',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
```

Ensure both entries import the same registration module (for example, `./elements/my-element.js`) so webpack can emit one `custom-elements.js` chunk instead of inlining duplicate registration in `main` and `admin`.

### Limitations and future work

Splitting alone does not change **browser** rules: the tag name must still be registered exactly once per document. webpack does not yet provide a first-class "register this custom element once" primitive beyond chunk graph control. Native support for deduplicating custom element registration across the build is **planned**; until then, rely on shared chunks and a single registration module.

## Import Maps with webpack

### Problem

[Import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap) let the browser resolve **bare specifiers** (such as `import "lodash-es"`) from an `importmap.json` file or an inline `<script type="importmap">`. If webpack **bundles** those dependencies, you don't need an import map for them. If you want the **browser** to load a dependency from a URL (a CDN or `/vendor/`) while your application code keeps bare imports, mark those modules as [`externals`](#TODO[/configuration/externals/]) so webpack emits `import` statements that match your map.

### Approach

Enable [ES module output](#TODO[/configuration/output/#outputmodule]) (`experiments.outputModule` and `output.module`), set [`externalsType: "module"`](#TODO[/configuration/externals/#externalstypemodule]) for static imports, and list each bare specifier in `externals` using the same string the browser will resolve via the import map.

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  entry: './src/index.js',
  externalsType: 'module',
  externals: {
    'lodash-es': 'lodash-es',
  },
  output: {
    module: true,
    filename: '[name].mjs',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
```

For the import map itself (served alongside your HTML, with URLs that must match your deployment), use a local vendor file:

```json displayName="importmap.json"
{
  "imports": {
    "lodash-es": "/vendor/lodash-es.js"
  }
}
```

Or use a CDN (no self-hosting required):

```json displayName="importmap.json"
{
  "imports": {
    "lodash-es": "https://cdn.jsdelivr.net/npm/lodash-es@4/+esm"
  }
}
```

The key `"lodash-es"` must match both the **`externals` key** and the **specifier** in your source (`import … from "lodash-es"`). The value is the URL the browser loads — either a local path or a CDN URL; webpack does not validate that file.

The order matters: the import map must come before your bundle.

```html displayName="index.html"
<script type="importmap" src="/importmap.json"></script>
<script type="module" src="/dist/main.mjs"></script>
```

> [!WARNING]
> [`experiments.outputModule`](#TODO[/configuration/experiments/#experimentsoutputmodule]) and [`output.module`](#TODO[/configuration/output/#outputmodule]) are still experimental. Check the latest [webpack release notes](https://github.com/webpack/webpack/releases) before relying on them in production.

### Limitations and future work

webpack **does not** emit or update `importmap.json` for you. You must maintain the map so specifiers and URLs stay aligned with `externals` and your server layout. Automatic import-map generation is **not** available in webpack 5 today; future tooling may reduce this manual step.

## Progressive Web Apps (PWA) and Service Workers

### Problem

Long-lived caching requires **stable URLs** for HTML but **versioned URLs** for scripts and styles. Using [`[contenthash]`](/guides/optimization/caching) in `output.filename` changes those URLs every build. A **service worker** precache list must list the **exact** URLs after each build, or offline shells will point at missing files.

The [`workbox-webpack-plugin`](/guides/modern-web/progressive-web-application) **`GenerateSW`** plugin generates an entire service worker for you. That is convenient, but when you need **full control** over the service worker code (custom routing, `skipWaiting` behavior, or coordination with `[contenthash]` and other plugins), **`InjectManifest`** is appropriate: you write the worker, and Workbox injects the precache manifest at build time from webpack's asset list.

### Approach

Use `[contenthash]` for emitted assets and add **`InjectManifest`** from `workbox-webpack-plugin`. Your source template imports `workbox-precaching` and calls `precacheAndRoute(self.__WB_MANIFEST)`; the plugin replaces `self.__WB_MANIFEST` with the list of webpack assets (including hashed filenames).

Install the packages:

```bash
npm install workbox-webpack-plugin workbox-precaching --save-dev
```

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'PWA + content hashes' }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/service-worker.js'),
      swDest: 'service-worker.js',
    }),
  ],
};
```

```js displayName="src/service-worker.js"
import { precacheAndRoute } from 'workbox-precaching';

// Replaced at build time with webpack's precache manifest (hashed asset URLs).
precacheAndRoute(globalThis.__WB_MANIFEST);
```

Register the emitted `service-worker.js` from your app (for example, in `src/index.js`) with `navigator.serviceWorker.register("/service-worker.js")`, served from `dist/` with the correct scope.

### Limitations and future work

You must keep **`InjectManifest`** in sync with your output filenames and plugins; `GenerateSW` remains the simpler path when you don't need a custom worker. webpack does not ship a built-in service worker precache generator, though tighter integration with hashed assets may arrive in future releases. Until then, Workbox's **`InjectManifest`** is a well-supported way to align `[contenthash]` output with precaching.
