---
authors: henriquea,rajagopal4890,makuzaverite,markerikson,simon04,kisnows,chrisVillanueva,swapnilmishra,bring2dip,redian,skipjack,xgqfrms,kelset,xgirma,mehrdaad,SevenOutman,AnayaDesign,wizardofhogwarts,aholzner,EugeneHlushko,snitin315,Brennvo,ThierryRakotomanana,avivkeller
---

# Production

In this guide, we'll explore some of the best practices and utilities for building a production site or application.

> [!TIP]
> This walkthrough builds on [Tree Shaking](/guides/optimization/tree-shaking) and [Development](/guides/core-workflows/development). Make sure you're familiar with the concepts and setup from those guides before continuing.

## Setup

The goals of _development_ and _production_ builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift toward minified bundles, lighter-weight source maps, and optimized assets to improve load time. Because of this clear separation, we generally recommend writing **separate webpack configurations** for each environment.

While we'll split out the production- and development-specific bits, we'll still keep a "common" configuration to stay DRY. To merge these configurations together, we'll use a utility called [`webpack-merge`](https://github.com/survivejs/webpack-merge). With the common configuration in place, we won't have to duplicate code in the environment-specific configurations.

Let's start by installing `webpack-merge` and splitting out the work from previous guides:

```bash
npm install --save-dev webpack-merge
```

```diff displayName="project"
  webpack-demo
  ├── package.json
  ├── package-lock.json
- ├── webpack.config.js
+ ├── webpack.common.js
+ ├── webpack.dev.js
+ ├── webpack.prod.js
  ├── /dist
  ├── /src
  │   ├── index.js
  │   └── math.js
  └── /node_modules
```

```diff displayName="webpack.common.js"
+ import path from 'node:path';
+ import { fileURLToPath } from 'node:url';
+ import HtmlWebpackPlugin from 'html-webpack-plugin';
+
+ const __filename = fileURLToPath(import.meta.url);
+ const __dirname = path.dirname(__filename);
+
+ export default {
+   entry: {
+     app: './src/index.js',
+   },
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'Production',
+     }),
+   ],
+   output: {
+     filename: '[name].bundle.js',
+     path: path.resolve(__dirname, 'dist'),
+     clean: true,
+   },
+ };
```

```diff displayName="webpack.dev.js"
+ import { merge } from 'webpack-merge';
+ import common from './webpack.common.js';
+
+ export default merge(common, {
+   mode: 'development',
+   devtool: 'inline-source-map',
+   devServer: {
+     static: './dist',
+   },
+ });
```

```diff displayName="webpack.prod.js"
+ import { merge } from 'webpack-merge';
+ import common from './webpack.common.js';
+
+ export default merge(common, {
+   mode: 'production',
+ });
```

In `webpack.common.js`, we now have our `entry` and `output` configuration along with any plugins required by both environments. In `webpack.dev.js`, we've set `mode` to `development`, added the recommended `devtool` for that environment (strong source mapping), and configured our `devServer`. Finally, in `webpack.prod.js`, `mode` is set to `production`, which loads the [`MinimizerPlugin`](/docs/plugins/minimizer-webpack-plugin) first introduced in the [tree shaking](/guides/optimization/tree-shaking) guide.

Note the `merge()` calls in the environment-specific configurations, which pull in our common configuration in both `webpack.dev.js` and `webpack.prod.js`. `webpack-merge` offers a variety of advanced merging features, but we won't need any of them for this use case.

## npm scripts

Now let's update our npm scripts to use the new configuration files. The `start` script, which runs `webpack-dev-server`, will use `webpack.dev.js`, and the `build` script, which runs webpack to create a production build, will use `webpack.prod.js`:

```diff displayName="package.json"
  {
    "name": "development",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "scripts": {
-     "start": "webpack serve --open",
+     "start": "webpack serve --open --config webpack.dev.js",
-     "build": "webpack"
+     "build": "webpack --config webpack.prod.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "css-loader": "^7.1.3",
      "csv-loader": "^3.0.5",
      "express": "^5.2.1",
      "html-webpack-plugin": "^5.6.6",
      "style-loader": "^4.0.0",
      "webpack": "^5.105.0",
      "webpack-cli": "^7.0.0",
      "webpack-dev-middleware": "^8.0.3",
      "webpack-dev-server": "^5.2.3",
      "webpack-merge": "^6.0.1",
      "xml-loader": "^1.2.1"
    }
  }
```

Feel free to run these scripts and watch how the output changes as we continue building out our production configuration.

## Specify the mode

Many libraries key off the `process.env.NODE_ENV` variable to decide what to include. For example, when `process.env.NODE_ENV` is not set to `'production'`, some libraries add extra logging and testing to ease debugging; when it is set to `'production'`, they may drop or add significant portions of code to optimize for your real users. Since webpack v4, specifying [`mode`](#TODO[/configuration/mode/]) automatically configures `process.env.NODE_ENV` for you via [`DefinePlugin`](https://github.com/webpack/webpack/blob/fcccd192ce550210186f84a7ca59ee4cd47a8b2d/lib/WebpackOptionsApply.js#L565):

```diff displayName="webpack.prod.js"
  import { merge } from 'webpack-merge';
  import common from './webpack.common.js';

  export default merge(common, {
    mode: 'production',
  });
```

> [!TIP]
> Technically, `NODE_ENV` is a system environment variable that Node.js exposes to running scripts. By convention, server tools, build scripts, and client-side libraries use it to determine dev-versus-prod behavior. Contrary to expectations, `process.env.NODE_ENV` is not set automatically **within** the build script `webpack.config.js` when running webpack. As a result, conditionals like `process.env.NODE_ENV === 'production' ? '[name].[contenthash].bundle.js' : '[name].bundle.js'` won't work in webpack configurations unless you set `NODE_ENV` explicitly, for example with `NODE_ENV=production` via the CLI.

If you use a library like [`react`](https://reactjs.org/), you should see a significant drop in bundle size after adding `DefinePlugin`. Also note that any of our local `/src` code can key off this as well, so the following check is valid:

```diff displayName="src/index.js"
  import { cube } from './math.js';
+
+ if (process.env.NODE_ENV !== 'production') {
+   console.log('Looks like we are in development mode!');
+ }

  function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
```

## Minification

webpack v4+ minifies your code by default in [production mode](#TODO[/configuration/mode/#mode-production]).

While the [`MinimizerPlugin`](/docs/plugins/minimizer-webpack-plugin) is a great starting point and is used by default, other options exist:

- [`ClosureWebpackPlugin`](https://github.com/webpack-contrib/closure-webpack-plugin)

If you decide to try another minification plugin, make sure your choice also drops dead code as described in the [tree shaking](/guides/optimization/tree-shaking) guide, and provide it via [`optimization.minimizer`](#TODO[/configuration/optimization/#optimizationminimizer]).

## Source mapping

We encourage you to enable source maps in production, as they're useful for debugging as well as for running benchmark tests. That said, choose one with a reasonably quick build speed that's recommended for production use (see [`devtool`](#TODO[/configuration/devtool])). For this guide, we'll use the `source-map` option in production, as opposed to the `inline-source-map` we used in development:

```diff displayName="webpack.prod.js"
  import { merge } from 'webpack-merge';
  import common from './webpack.common.js';

  export default merge(common, {
    mode: 'production',
+   devtool: 'source-map',
  });
```

> [!TIP]
> Avoid `inline-***` and `eval-***` in production, as they can increase bundle size and reduce overall performance.

## Minimize CSS

It's crucial to minimize your CSS for production. See the [Minimizing for Production](/docs/plugins/mini-css-extract-plugin/#minimizing-for-production) section.

## CLI alternatives

Many of the options described above can be set as command-line arguments. For example, [`optimization.minimize`](#TODO[/configuration/optimization/#optimizationminimize]) can be set with `--optimization-minimize`, and [`mode`](#TODO[/configuration/mode/]) can be set with `--mode`. Run `npx webpack --help=verbose` for a full list of CLI arguments.

While these shorthand methods are useful, we recommend setting these options in a webpack configuration file for greater configurability.
