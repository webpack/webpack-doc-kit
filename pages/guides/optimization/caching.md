---
authors: okonet,jouni-kantola,skipjack,dannycjones,fadysamirsadek,afontcu,rosavage,saiprasad2595,EugeneHlushko,AnayaDesign,aholzner,snitin315,avivkeller
---

# Caching

> [!TIP]
> The examples in this guide build on [getting started](/guides/getting-started), [output management](/guides/core-workflows/output-management), and [code splitting](/guides/optimization/code-splitting).

We use webpack to bundle a modular application into a deployable `/dist` directory. Once that directory is deployed to a server, clients (usually browsers) request the site and its assets from that server. Downloading those assets can be slow, so browsers rely on a technique called [caching](<https://en.wikipedia.org/wiki/Cache_(computing)>) to load sites faster and avoid unnecessary network traffic. The downside is that caching can get in the way when you actually want clients to pick up new code.

This guide covers the configuration you need so that files produced by a webpack compilation stay cached until their content actually changes.

## Output filenames

The `output.filename` [substitutions](#TODO[/configuration/output/#outputfilename]) setting lets us define the names of our output files. webpack supports templating filenames with bracketed strings called **substitutions**. The `[contenthash]` substitution adds a unique hash derived from an asset's content, so whenever that content changes the hash changes too.

Let's set up the project using the example from [getting started](/guides/getting-started), along with the `plugins` from [output management](/guides/core-workflows/output-management), so we don't have to maintain `index.html` by hand:

```diff displayName="project"
webpack-demo
 ├── package.json
 ├── package-lock.json
 ├── webpack.config.js
 ├── /dist
 ├── /src
 │   └── index.js
 └── /node_modules
```

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   plugins: [
     new HtmlWebpackPlugin({
-      title: 'Output Management',
+      title: 'Caching',
     }),
   ],
   output: {
-    filename: 'bundle.js',
+    filename: '[name].[contenthash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
```

Running the build script, `npm run build`, with this configuration should produce output like the following:

```bash
...
                       Asset       Size  Chunks                    Chunk Names
main.7e2c49a622975ebd9b7e.js     544 kB       0  [emitted]  [big]  main
                  index.html  197 bytes          [emitted]
...
```

The bundle's name now reflects its content through the hash. If we run another build without changing anything, we'd expect the filename to stay the same. However, run it again and you may find that it doesn't:

```bash
...
                       Asset       Size  Chunks                    Chunk Names
main.205199ab45963f6a62ec.js     544 kB       0  [emitted]  [big]  main
                  index.html  197 bytes          [emitted]
...
```

This happens because webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk.

> [!WARNING]
> Your output may differ depending on the webpack version you're using. Newer versions may not have all the same hashing issues as some older versions, but we still recommend the following steps to be safe.

## Extracting boilerplate

As we saw in [code splitting](/guides/optimization/code-splitting), the [`SplitChunksPlugin`](/docs/api/optimize/SplitChunksPlugin) can split modules out into separate bundles. webpack also offers an optimization that splits the runtime code into its own chunk via the [`optimization.runtimeChunk`](#TODO[/configuration/optimization/#optimizationruntimechunk]) option. Set it to `single` to create a single runtime bundle shared across all chunks:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Caching',
     }),
   ],
   output: {
     filename: '[name].[contenthash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
+  optimization: {
+    runtimeChunk: 'single',
+  },
 };
```

Run another build to see the extracted `runtime` bundle:

```bash
Hash: 82c9c385607b2150fab2
Version: webpack 4.12.0
Time: 3027ms
                          Asset       Size  Chunks             Chunk Names
runtime.cc17ae2a94ec771e9221.js   1.42 KiB       0  [emitted]  runtime
   main.e81de2cf758ada72f306.js   69.5 KiB       1  [emitted]  main
                     index.html  275 bytes          [emitted]
[1] (webpack)/buildin/module.js 497 bytes {1} [built]
[2] (webpack)/buildin/global.js 489 bytes {1} [built]
[3] ./src/index.js 309 bytes {1} [built]
    + 1 hidden module
```

It's also good practice to extract third-party libraries, such as `lodash` or `react`, into a separate `vendor` chunk, since they change less often than our own source code. Doing so means clients have to re-download less in order to stay up to date. We can achieve this with the [`cacheGroups`](/docs/api/chunks/types#interface-optimizationsplitchunksoptions) option of the [`SplitChunksPlugin`](/docs/api/optimize/SplitChunksPlugin). Let's add `optimization.splitChunks` with `cacheGroups` and the following parameters, then build:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Caching',
     }),
   ],
   output: {
     filename: '[name].[contenthash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   optimization: {
     runtimeChunk: 'single',
+    splitChunks: {
+      cacheGroups: {
+        vendor: {
+          test: /[\\/]node_modules[\\/]/,
+          name: 'vendors',
+          chunks: 'all',
+        },
+      },
+    },
   },
 };
```

Run another build to see the new `vendor` bundle:

```bash
...
                          Asset       Size  Chunks             Chunk Names
runtime.cc17ae2a94ec771e9221.js   1.42 KiB       0  [emitted]  runtime
vendors.a42c3ca0d742766d7a28.js   69.4 KiB       1  [emitted]  vendors
   main.abf44fedb7d11d4312d7.js  240 bytes       2  [emitted]  main
                     index.html  353 bytes          [emitted]
...
```

The `main` bundle no longer contains the `vendor` code from `node_modules`, and its size has dropped to just `240 bytes`.

## Module identifiers

Let's add another module, `print.js`, to the project:

```diff displayName="project"
webpack-demo
 ├── package.json
 ├── package-lock.json
 ├── webpack.config.js
 ├── /dist
 ├── /src
 │   ├── index.js
+│   └── print.js
 └── /node_modules
```

```diff displayName="print.js"
+ export default function print(text) {
+   console.log(text);
+ };
```

```diff displayName="src/index.js"
  import _ from 'lodash';
+ import Print from './print';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
  }

  document.body.appendChild(component());
```

After running another build, we'd expect only the `main` bundle's hash to change. However:

```bash
...
                           Asset       Size  Chunks                    Chunk Names
  runtime.1400d5af64fc1b7b3a45.js    5.85 kB      0  [emitted]         runtime
  vendor.a7561fb0e9a071baadb9.js     541 kB       1  [emitted]  [big]  vendor
    main.b746e3eb72875af2caa9.js    1.22 kB       2  [emitted]         main
                      index.html  352 bytes          [emitted]
...
```

All three hashes changed. This is because, by default, each `module.id` is assigned incrementally based on resolution order. When that order changes, the IDs change too. To recap:

- The `main` bundle changed because of its new content.
- The `vendor` bundle changed because its `module.id` changed.
- The `runtime` bundle changed because it now references a new module.

The first and last changes are expected; it's the `vendor` hash we want to keep stable. Let's set [`optimization.moduleIds`](#TODO[/configuration/optimization/#optimizationmoduleids]) to `'deterministic'`:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Caching',
     }),
   ],
   output: {
     filename: '[name].[contenthash].js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   optimization: {
+    moduleIds: 'deterministic',
     runtimeChunk: 'single',
     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
   },
 };
```

Now, regardless of any new local dependencies, the `vendor` hash should stay consistent between builds:

```bash
...
                          Asset       Size  Chunks             Chunk Names
   main.216e852f60c8829c2289.js  340 bytes       0  [emitted]  main
vendors.55e79e5927a639d21a1b.js   69.5 KiB       1  [emitted]  vendors
runtime.725a1a51ede5ae0cfde0.js   1.42 KiB       2  [emitted]  runtime
                     index.html  353 bytes          [emitted]
Entrypoint main = runtime.725a1a51ede5ae0cfde0.js vendors.55e79e5927a639d21a1b.js main.216e852f60c8829c2289.js
...
```

To confirm, let's modify `src/index.js` to temporarily remove that extra dependency:

```diff displayName="src/index.js"
  import _ from 'lodash';
- import Print from './print';
+ // import Print from './print';

  function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
-   element.onclick = Print.bind(null, 'Hello webpack!');
+   // element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
  }

  document.body.appendChild(component());
```

And run the build one more time:

```bash
...
                          Asset       Size  Chunks             Chunk Names
   main.ad717f2466ce655fff5c.js  274 bytes       0  [emitted]  main
vendors.55e79e5927a639d21a1b.js   69.5 KiB       1  [emitted]  vendors
runtime.725a1a51ede5ae0cfde0.js   1.42 KiB       2  [emitted]  runtime
                     index.html  353 bytes          [emitted]
Entrypoint main = runtime.725a1a51ede5ae0cfde0.js vendors.55e79e5927a639d21a1b.js main.ad717f2466ce655fff5c.js
...
```

Both builds produced `55e79e5927a639d21a1b` in the `vendor` bundle's filename, exactly as we wanted.

## Conclusion

Caching can be tricky, but the benefit it brings to your application's or site's users makes the effort worthwhile. See the _Further reading_ section below to learn more.

## Further reading

- [Issue 652](https://github.com/webpack/webpack.js.org/issues/652)
