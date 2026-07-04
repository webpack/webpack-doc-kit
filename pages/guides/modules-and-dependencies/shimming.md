---
authors: pksjce,jhnns,simon04,jeremenichelli,svyandun,byzyk,EugeneHlushko,AnayaDesign,dhurlburtusa,plr108,NicolasLetellier,wizardofhogwarts,snitin315,chenxsan,avivkeller
---

# Shimming

The webpack compiler can understand modules written as ES2015 modules, CommonJS, or AMD. However, some third-party libraries expect global dependencies (for example, `$` for jQuery). These libraries may also create globals that need to be exported. Such "broken modules" are one case where _shimming_ comes into play.

> [!WARNING]
> **We don't recommend using globals!** The whole concept behind webpack is to enable more modular front-end development. That means writing isolated modules that are well contained and do not rely on hidden dependencies (such as globals). Please use these features only when necessary.

Another case where shimming is useful is when you want to [polyfill](https://en.wikipedia.org/wiki/Polyfill_%28programming%29) browser functionality to support more users. Here, you may want to deliver those polyfills only to the browsers that need patching (that is, load them on demand).

The following article walks through both of these use cases.

> [!TIP]
> For simplicity, this guide builds on the examples from [Getting Started](/guides/getting-started). Make sure you're familiar with that setup before moving on.

## Shimming globals

Let's start with the first use case: shimming global variables. Before doing anything, let's take another look at our project:

```diff displayName="project"
webpack-demo
 ├── package.json
 ├── package-lock.json
 ├── webpack.config.js
 ├── /dist
 │   └── index.html
 ├── /src
 │   └── index.js
 └── /node_modules
```

Remember the `lodash` package we were using? For demonstration purposes, let's say we want to provide it as a global throughout our application instead. To do this, we can use `ProvidePlugin`.

The [`ProvidePlugin`](/docs/api/plugins/ProvidePlugin) makes a package available as a variable in every module compiled through webpack. If webpack sees that variable used, it includes the given package in the final bundle. Let's remove the `import` statement for `lodash` and provide it through the plugin instead:

```diff displayName="src/index.js"
-import _ from 'lodash';
-
 function component() {
   const element = document.createElement('div');

-  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

```diff displayName="webpack.config.js"
 import path from "node:path";
 import { fileURLToPath } from 'url';
+import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  plugins: [
+    new webpack.ProvidePlugin({
+      _: 'lodash',
+    }),
+  ],
 };
```

What we've essentially told webpack is this:

> If you encounter at least one instance of the variable `_`, include the `lodash` package and provide it to the modules that need it.

If we run a build, we should still see the same output:

```bash
$ npm run build

..

[webpack-cli] Compilation finished
asset main.js 69.1 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 344 bytes 2 modules
cacheable modules 530 KiB
  ./src/index.js 191 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 2910 ms
```

We can also use `ProvidePlugin` to expose a single export of a module by configuring it with an "array path" (for example, `[module, child, ...children?]`). Let's imagine we only want to provide the `join` method from `lodash` wherever it's invoked:

```diff displayName="src/index.js"
 function component() {
   const element = document.createElement('div');

-  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+  element.innerHTML = join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

```diff displayName="webpack.config.js"
 import path from "node:path";
 import webpack from "webpack";
 import { fileURLToPath } from 'url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
     new webpack.ProvidePlugin({
-      _: 'lodash',
+      join: ['lodash', 'join'],
     }),
   ],
 };
```

This pairs nicely with [Tree Shaking](/guides/optimization/tree-shaking), as the rest of the `lodash` library should get dropped.

## Granular shimming

Some legacy modules rely on `this` being the `window` object. Let's update our `index.js` so that's the case:

```diff
 function component() {
   const element = document.createElement('div');

   element.innerHTML = join(['Hello', 'webpack'], ' ');

+  // Assume we are in the context of `window`
+  this.alert("Hmmm, this probably isn't a great idea...");
+
   return element;
 }

 document.body.appendChild(component());
```

This becomes a problem when the module runs in a CommonJS context, where `this` equals `module.exports`. In that case, you can override `this` using the [`imports-loader`](/docs/loaders/imports-loader):

```diff displayName="webpack.config.js"
 import path from "node:path";
 import webpack from "webpack";
 import { fileURLToPath } from 'url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
+  module: {
+    rules: [
+      {
+        test: import.meta.resolve('./src/index.js'),
+        use: 'imports-loader?wrapper=window',
+      },
+    ],
+  },
   plugins: [
     new webpack.ProvidePlugin({
       join: ['lodash', 'join'],
     }),
   ],
 };
```

## Global exports

Let's say a library creates a global variable that it expects its consumers to use. We can add a small module to our setup to demonstrate this:

```diff displayName="project"
  webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  ├── /src
  │   ├── index.js
+ │   ├── globals.js
  └── /node_modules
```

```js displayName="src/globals.js"
const file = 'blah.txt';
const helpers = {
  test() {
    console.log('test something');
  },
  parse() {
    console.log('parse something');
  },
};
```

You'd likely never write code like this in your own source, but you may come across a dated library that contains something similar. In that case, we can use [`exports-loader`](/docs/loaders/exports-loader) to export that global variable as a normal module export. For instance, to export `file` as `file` and `helpers.parse` as `parse`:

```diff displayName="webpack.config.js"
 import path from "node:path";
 import webpack from "webpack";
 import { fileURLToPath } from 'url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: import.meta.resolve('./src/index.js'),
         use: 'imports-loader?wrapper=window',
       },
+      {
+        test: import.meta.resolve('./src/globals.js'),
+        use:
+          'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
+      },
     ],
   },
   plugins: [
     new webpack.ProvidePlugin({
       join: ['lodash', 'join'],
     }),
   ],
 };
```

Now, from within our entry script (`src/index.js`), we can use `const { file, parse } = require('./globals.js');` and everything should work smoothly.

## Loading polyfills

Almost everything we've discussed so far has dealt with handling legacy packages. Let's move on to our second topic: **polyfills**.

There are many ways to load polyfills. For example, to include [`babel-polyfill`](https://babeljs.io/docs/en/babel-polyfill/) we might:

```bash
npm install --save babel-polyfill
```

and `import` it so it's included in our main bundle:

```diff displayName="src/index.js"
+import 'babel-polyfill';
+
 function component() {
   const element = document.createElement('div');

   element.innerHTML = join(['Hello', 'webpack'], ' ');

   // Assume we are in the context of `window`
   this.alert("Hmmm, this probably isn't a great idea...");

   return element;
 }

 document.body.appendChild(component());
```

> [!TIP]
> Note that we don't bind the `import` to a variable. This is because polyfills run on their own, before the rest of the code base, allowing us to assume certain native functionality exists.

Note that this approach prioritizes correctness over bundle size. To be safe and robust, polyfills and shims must run **before all other code**, so they either need to load synchronously, or all app code needs to load after all polyfills and shims have loaded.

There are many misconceptions in the community: that modern browsers "don't need" polyfills, or that polyfills and shims merely add missing features. In fact, they often _repair broken implementations_, even in the most modern browsers. The best practice therefore remains to load all polyfills and shims unconditionally and synchronously, despite the bundle-size cost this incurs.

If you've mitigated these concerns and are willing to accept the risk of breakage, here's one way you might do it. Let's move our `import` to a new file and add the [`whatwg-fetch`](https://github.com/github/fetch) polyfill:

```bash
npm install --save whatwg-fetch
```

```diff displayName="src/index.js"
-import 'babel-polyfill';
-
 function component() {
   const element = document.createElement('div');

   element.innerHTML = join(['Hello', 'webpack'], ' ');

   // Assume we are in the context of `window`
   this.alert("Hmmm, this probably isn't a great idea...");

   return element;
 }

 document.body.appendChild(component());
```

```diff displayName="project"
  webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  ├── /src
  │   ├── index.js
  │   ├── globals.js
+ │   └── polyfills.js
  └── /node_modules
```

```js displayName="src/polyfills.js"
import 'babel-polyfill';
import 'whatwg-fetch';
```

```diff displayName="webpack.config.js"
 import path from "node:path";
 import webpack from "webpack";
 import { fileURLToPath } from 'url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
-  entry: './src/index.js',
+  entry: {
+    polyfills: './src/polyfills',
+    index: './src/index.js',
+  },
   output: {
-    filename: 'main.js',
+    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: fileURLToPath(import.meta.resolve('./src/index.js')),
         use: 'imports-loader?wrapper=window',
       },
       {
         test: fileURLToPath(import.meta.resolve('./src/globals.js')),
         use:
           'exports-loader?type=commonjs&exports[]=file&exports[]=multiple|helpers.parse|parse',
       },
     ],
   },
   plugins: [
     new webpack.ProvidePlugin({
       join: ['lodash', 'join'],
     }),
   ],
 };
```

With that in place, we can add logic to conditionally load our new `polyfills.bundle.js` file. How you make that decision depends on the technologies and browsers you need to support. We'll do some testing to determine whether our polyfills are needed:

```diff displayName="dist/index.html"
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Getting Started</title>
+    <script>
+      const modernBrowser = 'fetch' in window && 'assign' in Object;
+
+      if (!modernBrowser) {
+        const scriptElement = document.createElement('script');
+
+        scriptElement.async = false;
+        scriptElement.src = '/polyfills.bundle.js';
+        document.head.appendChild(scriptElement);
+      }
+    </script>
   </head>
   <body>
-    <script src="main.js"></script>
+    <script src="index.bundle.js"></script>
   </body>
 </html>
```

Now we can `fetch` some data within our entry script:

```diff displayName="src/index.js"
 function component() {
   const element = document.createElement('div');

   element.innerHTML = join(['Hello', 'webpack'], ' ');

   // Assume we are in the context of `window`
   this.alert("Hmmm, this probably isn't a great idea...");

   return element;
 }

 document.body.appendChild(component());
+
+fetch('https://jsonplaceholder.typicode.com/users')
+  .then((response) => response.json())
+  .then((json) => {
+    console.log(
+      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
+    );
+    console.log(json);
+  })
+  .catch((error) =>
+    console.error('Something went wrong when fetching this data: ', error)
+  );
```

If we run our build, another `polyfills.bundle.js` file will be emitted and everything should still run smoothly in the browser. This setup could likely be improved further, but it should give you a good idea of how to provide polyfills only to the users who actually need them.

## Further optimizations

The `babel-preset-env` package uses [browserslist](https://github.com/browserslist/browserslist) to transpile only what your browser matrix doesn't support. This preset comes with the [`useBuiltIns`](https://babeljs.io/docs/en/babel-preset-env#usebuiltins) option (`false` by default), which converts your global `babel-polyfill` import into a more granular, feature-by-feature `import` pattern:

```js
import 'core-js/modules/es7.string.pad-start';
import 'core-js/modules/es7.string.pad-end';
import 'core-js/modules/web.timers';
import 'core-js/modules/web.immediate';
import 'core-js/modules/web.dom.iterable';
```

See [the babel-preset-env documentation](https://babeljs.io/docs/en/babel-preset-env) for more information.

## Node built-ins

Node built-ins, such as `process`, can be polyfilled directly from your configuration file without any special loaders or plugins. See the [node configuration page](#TODO[/configuration/node]) for more information and examples.

## Other utilities

A few other tools can help when dealing with legacy modules.

When a module has no AMD or CommonJS version and you want to include its `dist`, you can flag the module in [`noParse`](#TODO[/configuration/module/#modulenoparse]). This causes webpack to include the module without parsing it or resolving its `import` and `require()` statements. This practice can also improve build performance.

> [!WARNING]
> Any feature requiring the AST, such as `ProvidePlugin`, will not work.

Finally, some modules support multiple [module styles](/guides/getting-started/concepts/modules) (for example, a combination of AMD, CommonJS, and legacy). In most of these cases, they first check for `define` and then use some quirky code to export properties. In these cases, it can help to force the CommonJS path by setting `additionalCode=var%20define%20=%20false;` via the [`imports-loader`](/docs/loaders/imports-loader).

## Further reading

- [Reward modern browser users script](https://medium.com/hackernoon/10-things-i-learned-making-the-fastest-site-in-the-world-18a0e1cdf4a7)
- [`useBuiltIns` in babel-preset-env](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)
