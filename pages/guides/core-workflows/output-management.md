---
authors: skipjack,TheDutchCoder,sudarsangp,JGJP,EugeneHlushko,AnayaDesign,chenxsan,snitin315,Brennvo,avivkeller
---

# Output Management

> [!TIP]
> This guide builds on the code examples from the [Asset Management](/guides/core-workflows/asset-management) guide.

So far we've manually listed every asset in our `index.html` file. As an application grows, and once you start [using hashes in filenames](/guides/optimization/caching) and outputting [multiple bundles](/guides/optimization/code-splitting), maintaining `index.html` by hand becomes difficult. Fortunately, a few plugins make this much easier to manage.

## Preparation

First, let's adjust the project a little:

```diff displayName="project"
  webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  ├── /src
  │   ├── index.js
+ │   ├── print.js
  └── /node_modules
```

Add some logic to `src/print.js`:

```js displayName="src/print.js"
export default function printMe() {
  console.log('I get called from print.js!');
}
```

Then use that function in `src/index.js`:

```diff displayName="src/index.js"
 import _ from 'lodash';
+import printMe from './print.js';

 function component() {
   const element = document.createElement('div');
+  const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

+  btn.innerHTML = 'Click me and check the console!';
+  btn.onclick = printMe;
+
+  element.appendChild(btn);
+
   return element;
 }

 document.body.appendChild(component());
```

Update `dist/index.html` as well, preparing webpack to split out entries:

```diff displayName="dist/index.html"
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
-    <title>Asset Management</title>
+    <title>Output Management</title>
+    <script src="./print.bundle.js"></script>
   </head>
   <body>
-    <script src="bundle.js"></script>
+    <script src="./index.bundle.js"></script>
   </body>
 </html>
```

Now adjust the configuration. We'll add `src/print.js` as a new entry point named `print`, and we'll change the output so bundle names are generated dynamically from the entry point names:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
-  entry: './src/index.js',
+  entry: {
+    index: './src/index.js',
+    print: './src/print.js',
+  },
   output: {
-    filename: 'bundle.js',
+    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

Run `npm run build` and see what gets generated:

```bash
...
[webpack-cli] Compilation finished
asset index.bundle.js 69.5 KiB [emitted] [minimized] (name: index) 1 related asset
asset print.bundle.js 316 bytes [emitted] [minimized] (name: print)
runtime modules 1.36 KiB 7 modules
cacheable modules 530 KiB
  ./src/index.js 406 bytes [built] [code generated]
  ./src/print.js 83 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 1996 ms
```

webpack generates `print.bundle.js` and `index.bundle.js`, both of which we referenced in `index.html`. Open `index.html` in your browser and click the button to see what happens.

But what if we renamed one of our entry points, or added a new one? The generated bundles would be renamed on the next build, yet `index.html` would still reference the old names. Let's fix that with [`HtmlWebpackPlugin`](#TODO[/plugins/html-webpack-plugin]).

> [!TIP]
> If you inspected `print.bundle.js`, you might have noticed that it does not contain the `printMe` function. Instead, it contains only an [IIFE](/guides/getting-started/concepts/why-webpack/#iifes---immediately-invoked-function-expressions) with no observable side effects.
>
> This is because, in our current setup, webpack treats each entry point as a standalone program that runs when the bundle is loaded. Since `print.js` only exports a function and never calls `printMe()`, running it as its own entry requires no executable runtime code. As a result, [webpack can omit that code as an optimization](/guides/optimization/tree-shaking) because it would have no observable effect.
>
> By contrast, since `index.js` imports and uses `printMe`, webpack includes that function directly in `index.bundle.js`. Remember that webpack is a module _bundler_, so `index.bundle.js` contains all the code it needs to run rather than unresolved import statements.
>
> The multiple entry points here exist solely to demonstrate output management and `HtmlWebpackPlugin`. In a real project, you'd typically avoid creating a separate entry point for a utility module like this. If you do have multiple entry points that share dependencies, see [Prevent Duplication](/guides/optimization/code-splitting/#prevent-duplication) in the Code Splitting guide.

## Setting up `HtmlWebpackPlugin`

First install the plugin and adjust `webpack.config.js`:

```bash
npm install --save-dev html-webpack-plugin
```

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
+import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
+  plugins: [
+    new HtmlWebpackPlugin({
+      title: 'Output Management',
+    }),
+  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

Before building, note that by default `HtmlWebpackPlugin` generates its own `index.html` file, even though we already have one in `dist/`. This means it will replace our `index.html` with a freshly generated one. Let's see what happens when we run `npm run build`:

```bash
...
[webpack-cli] Compilation finished
asset index.bundle.js 69.5 KiB [compared for emit] [minimized] (name: index) 1 related asset
asset print.bundle.js 316 bytes [compared for emit] [minimized] (name: print)
asset index.html 253 bytes [emitted]
runtime modules 1.36 KiB 7 modules
cacheable modules 530 KiB
  ./src/index.js 406 bytes [built] [code generated]
  ./src/print.js 83 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 2189 ms
```

If you open `index.html` in your editor, you'll see that `HtmlWebpackPlugin` created an entirely new file and added all the bundles automatically.

To learn more about the features and options that `HtmlWebpackPlugin` provides, read up on it in the [`HtmlWebpackPlugin`](https://github.com/jantimon/html-webpack-plugin) repository.

## Cleaning up the `/dist` folder

As you may have noticed over the previous guides and examples, our `/dist` folder has become cluttered. webpack generates files and places them in `/dist` for you, but it doesn't track which files are actually still in use.

In general, it's good practice to clean the `/dist` folder before each build so that only the files in use are generated. The [`output.clean`](#TODO[/configuration/output/#outputclean]) option takes care of this:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
+    clean: true,
   },
 };
```

Run `npm run build` again and inspect the `/dist` folder. If everything went well, you should see only the files from the latest build and no leftover old files.

## The manifest

You might wonder how webpack and its plugins seem to "know" which files are being generated. The answer lies in the manifest that webpack keeps to track how all the modules map to the output bundles. If you're interested in managing webpack's [`output`](#TODO[/configuration/output]) in other ways, the manifest is a good place to start.

The manifest data can be extracted into a JSON file for consumption using the [`ManifestPlugin`](#TODO[/plugins/manifest-plugin/]).

We won't walk through a full example of using this plugin in your project, but you can read the [concept page](/guides/getting-started/concepts/manifest) and the [caching guide](/guides/optimization/caching) to learn how this ties into long-term caching.

## Conclusion

Now that you've learned how to add bundles to your HTML dynamically, dive into the [development guide](/guides/core-workflows/development). Or, if you want to explore more advanced topics, head over to the [code splitting guide](/guides/optimization/code-splitting).
