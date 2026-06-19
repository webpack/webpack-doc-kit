---
authors: pksjce,johnstew,simon04,5angel,marioacc,byzyk,EugeneHlushko,AnayaDesign,chenxsan,wizardofhogwarts,Debraj2024,avivkeller
---

# Authoring Libraries

In addition to applications, webpack can bundle JavaScript libraries. This guide is aimed at library authors who want to streamline how they bundle and distribute their code.

## Authoring a library

Suppose we are building a small library called `webpack-numbers` that converts the numbers 1 through 5 between their numeric and textual representations, for example turning `2` into `'two'`.

The basic project layout looks like this:

```diff
+ ├── webpack.config.js
+ ├── package.json
+ └── /src
+     ├── index.js
+     └── ref.json
```

Initialize the project with npm, then install `webpack`, `webpack-cli`, and `lodash` as development dependencies:

```bash
npm init -y
npm install --save-dev webpack webpack-cli lodash
```

We install `lodash` as a `devDependency` because, to start with, we will bundle it directly into our library. Since it ends up in the final output, consumers of the library won't need to install it themselves.

```json displayName="src/ref.json"
[
  {
    "num": 1,
    "word": "One"
  },
  {
    "num": 2,
    "word": "Two"
  },
  {
    "num": 3,
    "word": "Three"
  },
  {
    "num": 4,
    "word": "Four"
  },
  {
    "num": 5,
    "word": "Five"
  },
  {
    "num": 0,
    "word": "Zero"
  }
]
```

```js displayName="src/index.js"
import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => (ref.num === num ? ref.word : accum),
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => (ref.word === word && word.toLowerCase() ? ref.num : accum),
    -1
  );
}
```

## webpack configuration

Let's begin with this basic webpack configuration:

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
  },
};
```

In this example, we tell webpack to bundle `src/index.js` into `dist/webpack-numbers.js`.

### Adding source maps

When bundling a library, it's a good idea to generate source maps. They let consumers debug against your original source code instead of the minified bundle. You can enable them with the [`devtool`](#TODO[/configuration/devtool/]) option:

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    entry: './src/index.js',
+   devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
    },
  };
```

> [!TIP]
> Setting `devtool` to `'source-map'` generates a separate `.map` file alongside your bundle. Be sure to publish this `.map` file too, so consumers can use it for debugging.

## Expose the library

So far this matches how you'd bundle an application. Here's where things differ: we need to expose the entry point's exports through the [`output.library`](#TODO[/configuration/output/#outputlibrary]) option.

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
+     library: 'webpackNumbers',
    },
  };
```

We exposed the entry point as `webpackNumbers` so it can be used through a script tag:

```html
<script src="https://example.org/webpack-numbers.js"></script>
<script>
  window.webpackNumbers.wordToNum('Five');
</script>
```

However, this only works when the library is referenced through a script tag. It can't be consumed in other environments such as CommonJS, AMD, or Node.js.

As library authors, we want our library to work across different environments. In other words, users should be able to consume it in all of the following ways:

- **CommonJS module require**:

  ```js
  const webpackNumbers = require('webpack-numbers');

  // ...
  webpackNumbers.wordToNum('Two');
  ```

- **AMD module require**:

  ```js
  require(['webpackNumbers'], webpackNumbers => {
    // ...
    webpackNumbers.wordToNum('Two');
  });
  ```

- **script tag**:

  ```html
  <!DOCTYPE html>
  <html>
    ...
    <script src="https://example.org/webpack-numbers.js"></script>
    <script>
      // ...
      // Global variable
      webpackNumbers.wordToNum('Five');
      // Property in the window object
      window.webpackNumbers.wordToNum('Five');
      // ...
    </script>
  </html>
  ```

To support all of these, update the `output.library` option and set its `type` to [`'umd'`](#TODO[/configuration/output/#type-umd]):

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'webpack-numbers.js',
-    library: 'webpackNumbers',
+    globalObject: 'this',
+    library: {
+      name: 'webpackNumbers',
+      type: 'umd',
+    },
   },
 };
```

Now webpack produces a library that works with CommonJS, AMD, and a script tag.

> [!TIP]
> Note that the `library` setup is tied to the `entry` configuration. For most libraries, a single entry point is enough. While [multi-part libraries](https://github.com/webpack/webpack/tree/master/examples/multi-part-library) are possible, it's simpler to expose partial exports through an [index script](https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file) that acts as a single entry point. Using an `array` as the `entry` for a library is **not recommended**.

## Externalize lodash

If you run `npx webpack` now, you'll notice the resulting bundle is fairly large. Inspecting the file reveals that lodash has been bundled along with your code. To avoid bundling `lodash` and bloating the library, we can configure webpack to treat it as an external module. Because we're no longer bundling it, the consumer is responsible for providing it, so you should move `lodash` from `devDependencies` to `dependencies` (or `peerDependencies`) so package managers install it automatically for your library's consumers.

This is done with the [`externals`](#TODO[/configuration/externals/]) configuration:

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      library: {
        name: 'webpackNumbers',
        type: 'umd',
      },
    },
+   externals: {
+     lodash: {
+       commonjs: 'lodash',
+       commonjs2: 'lodash',
+       amd: 'lodash',
+       root: '_',
+     },
+   },
  };
```

This tells webpack that your library expects a dependency named `lodash` to be available in the consumer's environment.

### External limitations

For libraries that import several files from a single dependency:

```js
import A from 'library/one';
import B from 'library/two';

// ...
```

You won't be able to exclude them from the bundle by listing `library` in `externals`. You'll need to exclude them individually, or with a regular expression:

```js
export default {
  // ...
  externals: [
    'library/one',
    'library/two',
    // Everything that starts with "library/"
    /^library\/.+$/,
  ],
};
```

## Final steps

Optimize your output for production by following the steps in the [production guide](/guides/core-workflows/production). Let's also point the package's `main` field in `package.json` at your generated bundle:

```json displayName="package.json"
{
  ...
  "main": "dist/webpack-numbers.js",
  ...
}
```

Or, to add it as a standard module per [this guide](https://github.com/dherman/defense-of-dot-js/blob/master/proposal.md#typical-usage):

```json displayName="package.json"
{
  ...
  "module": "src/index.js",
  ...
}
```

The `main` key refers to the [standard from `package.json`](https://docs.npmjs.com/files/package.json#main), while `module` refers to [a](https://github.com/dherman/defense-of-dot-js/blob/master/proposal.md) [proposal](https://github.com/rollup/rollup/wiki/pkg.module) that lets the JavaScript ecosystem adopt ES2015 modules without breaking backwards compatibility.

> [!WARNING]
> The `module` property should point to a script that uses ES2015 module syntax but no other syntax features that browsers or Node.js don't yet support. This lets webpack parse the module syntax itself, enabling lighter bundles through [tree shaking](https://webpack.js.org/guides/tree-shaking/) when users consume only certain parts of the library.

You can now [publish it as an npm package](https://docs.npmjs.com/getting-started/publishing-npm-packages) and find it on [unpkg.com](https://unpkg.com/#/) to distribute it to your users.

> [!TIP]
> To expose stylesheets associated with your library, use the [`MiniCssExtractPlugin`](/docs/plugins/mini-css-extract-plugin). Users can then consume and load them as they would any other stylesheet.
