---
authors: pksjce,pastelsky,simon04,jonwheeler,johnstew,shinxi,tomtasche,levy9527,rahulcs,chrisVillanueva,rafde,bartushek,shaunwallace,skipjack,jakearchibald,TheDutchCoder,rouzbeh84,shaodahong,sudarsangp,kcolton,efreitasn,EugeneHlushko,Tiendo1011,byzyk,AnayaDesign,wizardofhogwarts,maximilianschmelzer,smelukov,chenxsan,Adarah,atesgoral,snitin315,artem-malko,Brennvo,ThierryRakotomanana,avivkeller
---

# Code Splitting

> [!TIP]
> This guide builds on the example from [Getting Started](/guides/getting-started). Make sure you are at least familiar with that example and the [Output Management](/guides/core-workflows/output-management) chapter before continuing.

Code splitting is one of webpack's most compelling features. It lets you split your code into multiple bundles that can be loaded on demand or in parallel. Used well, it produces smaller bundles and gives you control over resource load prioritization, which can have a significant impact on load time.

There are three general approaches to code splitting:

- **Entry points**: Manually split code using the [`entry`](#TODO[/configuration/entry-context]) configuration.
- **Prevent duplication**: Use [entry dependencies](#TODO[/configuration/entry-context/#dependencies]) or the [`SplitChunksPlugin`](#TODO[/plugins/split-chunks-plugin/]) to deduplicate and split chunks.
- **Dynamic imports**: Split code through inline function calls within modules.

## Entry Points

This is by far the easiest and most intuitive way to split code. It is, however, more manual and comes with a few pitfalls we will cover below. Let's look at how we might split another module out of the main bundle:

```diff displayName="project"
 webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  ├── /src
  │   ├── index.js
+ │   └── another-module.js
  └── /node_modules
```

```js displayName="another-module.js"
import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], ' '));
```

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
-  entry: './src/index.js',
+  mode: 'development',
+  entry: {
+    index: './src/index.js',
+    another: './src/another-module.js',
+  },
   output: {
-    filename: 'main.js',
+    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

This produces the following build result:

```bash
...
[webpack-cli] Compilation finished
asset index.bundle.js 553 KiB [emitted] (name: index)
asset another.bundle.js 553 KiB [emitted] (name: another)
runtime modules 2.49 KiB 12 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./src/another-module.js 84 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 245 ms
```

As mentioned, this approach has a few pitfalls:

- Any modules duplicated between entry chunks will be included in both bundles.
- It isn't flexible and can't be used to dynamically split code together with the core application logic.

The first point is clearly a problem in our example: `lodash` is also imported in `./src/index.js`, so it ends up duplicated in both bundles. Let's remove that duplication in the next section.

## Prevent Duplication

### Entry dependencies

The [`dependOn` option](#TODO[/configuration/entry-context/#dependencies]) lets you share modules between chunks:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: {
-    index: './src/index.js',
-    another: './src/another-module.js',
+    index: {
+      import: './src/index.js',
+      dependOn: 'shared',
+    },
+    another: {
+      import: './src/another-module.js',
+      dependOn: 'shared',
+    },
+    shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

If you plan to use multiple entry points on a single HTML page, you also need `optimization.runtimeChunk: 'single'`. Without it, you can run into the problem described [here](https://bundlers.tooling.report/code-splitting/multi-entry/).

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: {
     index: {
       import: './src/index.js',
       dependOn: 'shared',
     },
     another: {
       import: './src/another-module.js',
       dependOn: 'shared',
     },
     shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  optimization: {
+    runtimeChunk: 'single',
+  },
 };
```

This yields the following build result:

```bash
...
[webpack-cli] Compilation finished
asset shared.bundle.js 549 KiB [compared for emit] (name: shared)
asset runtime.bundle.js 7.79 KiB [compared for emit] (name: runtime)
asset index.bundle.js 1.77 KiB [compared for emit] (name: index)
asset another.bundle.js 1.65 KiB [compared for emit] (name: another)
Entrypoint index 1.77 KiB = index.bundle.js
Entrypoint another 1.65 KiB = another.bundle.js
Entrypoint shared 557 KiB = runtime.bundle.js 7.79 KiB shared.bundle.js 549 KiB
runtime modules 3.76 KiB 7 modules
cacheable modules 530 KiB
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
  ./src/another-module.js 84 bytes [built] [code generated]
  ./src/index.js 257 bytes [built] [code generated]
webpack 5.x.x compiled successfully in 249 ms
```

As you can see, alongside `shared.bundle.js`, `index.bundle.js`, and `another.bundle.js`, there's now an additional `runtime.bundle.js` file.

Although webpack allows multiple entry points per page, you should avoid it when possible in favor of a single entry point with multiple imports, such as `entry: { page: ['./analytics', './app'] }`. This results in better optimization and a consistent execution order when using `async` script tags.

### SplitChunksPlugin

The [`SplitChunksPlugin`](#TODO[/plugins/split-chunks-plugin/]) lets you extract common dependencies into an existing entry chunk or an entirely new one. Let's use it to deduplicate the `lodash` dependency from the previous example:

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    mode: 'development',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
+   optimization: {
+     splitChunks: {
+       chunks: 'all',
+     },
+   },
  };
```

With the [`optimization.splitChunks`](#TODO[/plugins/split-chunks-plugin/#optimizationsplitchunks]) option in place, the duplicate dependency should now be removed from both `index.bundle.js` and `another.bundle.js`. The plugin recognizes that `lodash` has been separated into its own chunk and strips the dead weight from the main bundles. Note, however, that common dependencies are only extracted into a separate chunk if they meet the [size thresholds](#TODO[/plugins/split-chunks-plugin/#splitchunksminsize]) specified by webpack.

Run `npm run build` to confirm it worked:

```bash
...
[webpack-cli] Compilation finished
asset vendors-node_modules_lodash_lodash_js.bundle.js 549 KiB [compared for emit] (id hint: vendors)
asset index.bundle.js 8.92 KiB [compared for emit] (name: index)
asset another.bundle.js 8.8 KiB [compared for emit] (name: another)
Entrypoint index 558 KiB = vendors-node_modules_lodash_lodash_js.bundle.js 549 KiB index.bundle.js 8.92 KiB
Entrypoint another 558 KiB = vendors-node_modules_lodash_lodash_js.bundle.js 549 KiB another.bundle.js 8.8 KiB
runtime modules 7.64 KiB 14 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./src/another-module.js 84 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 241 ms
```

Here are some other useful community plugins and loaders for splitting code:

- [`mini-css-extract-plugin`](/docs/plugins/mini-css-extract-plugin): Useful for splitting CSS out of the main application.

## Dynamic Imports

webpack supports two similar techniques for dynamic code splitting. The first and recommended approach is the [`import()` syntax](#TODO[/api/module-methods/#import-1]), which conforms to the [ECMAScript proposal](https://github.com/tc39/proposal-dynamic-import) for dynamic imports. The legacy, webpack-specific approach uses [`require.ensure`](#TODO[/api/module-methods/#requireensure]). Let's try the first of these.

> [!WARNING]
> `import()` calls use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) internally. If you use `import()` with older browsers (such as IE 11), remember to shim `Promise` with a polyfill like [es6-promise](https://github.com/stefanpenner/es6-promise) or [promise-polyfill](https://github.com/taylorhakes/promise-polyfill).

Before we begin, let's remove the extra [`entry`](/guides/getting-started/concepts/entry-points) and [`optimization.splitChunks`](#TODO[/plugins/split-chunks-plugin]) configuration from the previous example, since they aren't needed for this demonstration:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: {
     index: './src/index.js',
-    another: './src/another-module.js',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
-  optimization: {
-    splitChunks: {
-      chunks: 'all',
-    },
-  },
 };
```

We'll also update the project to remove the now unused file:

```diff displayName="project"
 webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  ├── /src
  │   ├── index.js
- │   └── another-module.js
  └── /node_modules
```

Now, instead of statically importing `lodash`, we'll use a dynamic import to split it into its own chunk:

```diff displayName="src/index.js"
-import _ from 'lodash';
-
-function component() {
+function getComponent() {
-  const element = document.createElement('div');

-  // Lodash, now imported by this script
-  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+  return import('lodash')
+    .then(({ default: _ }) => {
+      const element = document.createElement('div');
+
+      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

-  return element;
+      return element;
+    })
+    .catch((error) => 'An error occurred while loading the component');
 }

-document.body.appendChild(component());
+getComponent().then((component) => {
+  document.body.appendChild(component);
+});
```

We need `default` here because, since webpack 4, importing a CommonJS module no longer resolves to the value of `module.exports`. Instead, webpack creates an artificial namespace object for the CommonJS module. For more background, read [webpack 4: import() and CommonJs](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655).

Run webpack to see `lodash` split out into a separate bundle:

```bash
...
[webpack-cli] Compilation finished
asset vendors-node_modules_lodash_lodash_js.bundle.js 549 KiB [compared for emit] (id hint: vendors)
asset index.bundle.js 13.5 KiB [compared for emit] (name: index)
runtime modules 7.37 KiB 11 modules
cacheable modules 530 KiB
  ./src/index.js 434 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 268 ms
```

> [!TIP]
> You can also use the `webpackExports` magic comment with `import()` to expose specific exports from a dynamically imported module:
>
> ```js
> import(
>   /* webpackExports: ["default", "namedExport"] */
>   './module'
> );
> ```
>
> This helps webpack tree shake the other unused exports. See [Magic Comments](#TODO[/api/module-methods/#magic-comments]) for details.

Because `import()` returns a promise, it can be used with [`async` functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Here's how that simplifies the code:

```diff displayName="src/index.js"
-function getComponent() {
+async function getComponent() {
+  const element = document.createElement('div');
+  const { default: _ } = await import('lodash');

-  return import('lodash')
-    .then(({ default: _ }) => {
-      const element = document.createElement('div');
+  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

-      element.innerHTML = _.join(['Hello', 'webpack'], ' ');
-
-      return element;
-    })
-    .catch((error) => 'An error occurred while loading the component');
+  return element;
 }

 getComponent().then((component) => {
   document.body.appendChild(component);
 });
```

> [!TIP]
> You can also provide a [dynamic expression](#TODO[/api/module-methods/#dynamic-expressions-in-import]) to `import()` when you need to import a specific module based on a value computed later.

### Understanding ChunkLoadError

When using dynamic `import()` or code splitting, webpack may throw a `ChunkLoadError` if a chunk fails to load at runtime.

This error usually means the requested chunk could not be executed or resolved properly. In some cases, the browser's underlying network or script-loading error isn't fully reflected in the `ChunkLoadError` message itself.

If you encounter this error:

- Verify that the chunk file is accessible over the network.
- Check that the `publicPath` is configured correctly.
- Inspect the browser console for additional script or network errors.

For more context, see the related discussion in the webpack issue tracker.

## Prefetching/Preloading modules

webpack 4.6.0+ adds support for prefetching and preloading.

Using these inline directives when declaring your imports lets webpack output a "Resource Hint" that tells the browser:

- **prefetch**: the resource is probably needed for some navigation in the future.
- **preload**: the resource will also be needed during the current navigation.

For example, consider a `HomePage` component that renders a `LoginButton` component, which in turn loads a `LoginModal` component on demand after being clicked.

```js displayName="LoginButton.js"
// ...
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```

This appends `<link rel="prefetch" href="login-modal-chunk.js">` to the page's head, instructing the browser to prefetch the `login-modal-chunk.js` file during idle time.

> [!TIP]
> webpack adds the prefetch hint once the parent chunk has finished loading.

Preload differs from prefetch in several ways:

- A preloaded chunk starts loading in parallel with the parent chunk, whereas a prefetched chunk starts after the parent chunk finishes loading.
- A preloaded chunk has medium priority and is downloaded immediately, whereas a prefetched chunk is downloaded while the browser is idle.
- A preloaded chunk should be requested immediately by the parent chunk, whereas a prefetched chunk can be used at any point in the future.
- Browser support differs.

As an example, consider a `Component` that always depends on a large library, which should live in a separate chunk.

Imagine a `ChartComponent` that needs a huge `ChartingLibrary`. It displays a `LoadingIndicator` when rendered and immediately performs an on-demand import of `ChartingLibrary`:

```js displayName="ChartComponent.js"
// ...
import(/* webpackPreload: true */ 'ChartingLibrary');
```

When a page that uses `ChartComponent` is requested, the charting-library-chunk is also requested via `<link rel="preload">`. Assuming the page-chunk is smaller and finishes first, the page renders with a `LoadingIndicator` until the already-requested charting-library-chunk finishes. This gives a small load-time boost, since it requires only one round trip instead of two, especially in high-latency environments.

> [!TIP]
> Using `webpackPreload` incorrectly can actually hurt performance, so use it with care.

Sometimes you need direct control over preloading. For example, you can preload any dynamic import via an async script, which is useful for streaming server-side rendering.

```js
const lazyComp = () =>
  import('DynamicComponent').catch(error => {
    // Do something with the error.
    // For example, we can retry the request in case of a network error.
  });
```

If the script fails to load before webpack starts loading it on its own (webpack creates a script tag to load its code if that script isn't already on the page), the `catch` handler won't run until [chunkLoadTimeout](#TODO[/configuration/output/#outputchunkloadtimeout]) is reached. This behavior can be surprising, but it's explainable: webpack can't throw an error because it doesn't know the script failed. webpack adds an `onerror` handler to the script only after the error has already happened.

To avoid this problem, add your own `onerror` handler that removes the script whenever an error occurs:

```html
<script
  src="https://example.com/dist/dynamicComponent.js"
  async
  onerror="this.remove()"
></script>
```

In that case, the errored script is removed. webpack then creates its own script, and any error is processed without timeouts.

## Bundle Analysis

Once you start splitting your code, it can be helpful to analyze the output to see where modules ended up. The [official analyze tool](https://github.com/webpack/analyse) is a good place to start. There are also several community-supported options:

- [webpack-chart](https://alexkuz.github.io/webpack-chart/): Interactive pie chart for webpack stats.
- [webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/): Visualize and analyze your bundles to see which modules take up space and which might be duplicates.
- [webpack-bundle-analyzer](https://github.com/webpack/webpack-bundle-analyzer): A plugin and CLI utility that represents bundle content as a convenient, interactive, zoomable treemap.
- [webpack bundle optimize helper](https://webpack.jakoblind.no/optimize): Analyzes your bundle and gives you actionable suggestions for reducing its size.
- [bundle-stats](https://github.com/bundle-stats/bundle-stats): Generates a bundle report (bundle size, assets, modules) and compares the results between different builds.
- [webpack-stats-viewer](https://github.com/moonrailgun/webpack-stats-viewer): A plugin with a build for webpack stats that shows more detail about your webpack bundle.

## Next Steps

See [Lazy Loading](/guides/optimization/code-splitting/lazy-loading) for a more concrete example of how `import()` can be used in a real application, and [Caching](/guides/optimization/caching) to learn how to split code more effectively.

## Further reading

- [`<link rel="prefetch/preload" />` in webpack](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
- [Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [Preloading content with `<link rel="preload" />`](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
