---
authors: SpaceK33z,rafde,fvgs,TheDutchCoder,WojciechKo,Calinou,GAumala,EugeneHlushko,byzyk,trivikr,aholzner,chenxsan,maxloh,snitin315,f3ndot,Brennvo,avivkeller
---

# Development

> [!TIP]
> This guide builds on the code examples from the [Output Management](/guides/core-workflows/output-management) guide.

If you've worked through the previous guides, you should now have a solid grasp of webpack's fundamentals. Before moving on, let's set up a development environment that makes day-to-day work a little smoother.

> [!WARNING]
> The tools described in this guide are intended **only for development**. Do **not** use them in production.

Start by setting [`mode` to `'development'`](#TODO[/configuration/mode/#mode-development]) and `title` to `'Development'`.

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
+  mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
-      title: 'Output Management',
+      title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
```

## Using source maps

When webpack bundles your source code, tracing errors and warnings back to their original location can be difficult. For example, if you bundle three source files (`a.js`, `b.js`, and `c.js`) into a single `bundle.js` and one of them throws an error, the stack trace points to `bundle.js`. That's rarely helpful, since you usually want to know exactly which source file the error came from.

To make errors and warnings easier to track down, JavaScript supports [source maps](http://blog.teamtreehouse.com/introduction-source-maps), which map your compiled code back to the original source. If an error originates in `b.js`, the source map will tell you precisely that.

webpack offers many [different options](#TODO[/configuration/devtool]) for source maps. It's worth reviewing them so you can pick the one that fits your needs.

For this guide, we'll use the `inline-source-map` option. It's well suited for demonstration, though not for production:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
+  devtool: 'inline-source-map',
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };
```

Now let's give ourselves something to debug by introducing an error in `print.js`:

```diff displayName="src/print.js"
 export default function printMe() {
-  console.log('I get called from print.js!');
+  cosnole.log('I get called from print.js!');
 }
```

Run `npm run build`, and it should compile to something like this:

```bash
...
[webpack-cli] Compilation finished
asset index.bundle.js 1.38 MiB [emitted] (name: index)
asset print.bundle.js 6.25 KiB [emitted] (name: print)
asset index.html 272 bytes [emitted]
runtime modules 1.9 KiB 9 modules
cacheable modules 530 KiB
  ./src/index.js 406 bytes [built] [code generated]
  ./src/print.js 83 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 706 ms
```

Now open the resulting `index.html` in your browser, click the button, and check the console where the error appears. It should read something like:

```bash
Uncaught ReferenceError: cosnole is not defined
   at HTMLButtonElement.printMe (print.js:2)
```

Notice that the error references the file (`print.js`) and the line number (2) where it occurred. That's exactly what we want, since it tells us precisely where to look to fix the problem.

## Choosing a development tool

> [!WARNING]
> Some text editors have a "safe write" feature that can interfere with the tools below. See [Adjusting your text editor](#adjusting-your-text-editor) for a fix.

Manually running `npm run build` every time you want to compile quickly becomes tedious.

webpack provides several options that recompile your code automatically whenever it changes:

1. webpack's [Watch Mode](#TODO[/configuration/watch/#watch])
2. [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
3. [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)

In most cases you'll want `webpack-dev-server`, but let's walk through all three.

### Using Watch Mode

You can tell webpack to "watch" every file in your dependency graph for changes. When one of them is updated, your code is recompiled automatically, so you don't have to run a full build by hand.

Let's add an npm script that starts webpack's Watch Mode:

```diff displayName="package.json"
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
+    "watch": "webpack --watch",
     "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "html-webpack-plugin": "^5.6.6",
     "webpack": "^5.105.0",
     "webpack-cli": "^7.0.0"
   },
   "dependencies": {
     "lodash": "^4.17.21"
   }
 }
```

Now run `npm run watch` from the command line and watch webpack compile your code. Notice that it doesn't return to the prompt, because the script keeps watching your files.

While webpack is watching, let's remove the error we introduced earlier:

```diff displayName="src/print.js"
 export default function printMe() {
-  cosnole.log('I get called from print.js!');
+  console.log('I get called from print.js!');
 }
```

Save the file and check the terminal. You should see webpack automatically recompile the changed module.

The one drawback is that you still have to refresh the browser to see the changes. It would be far nicer if that happened automatically too, so let's try `webpack-dev-server`, which does exactly that.

### Using webpack-dev-server

`webpack-dev-server` gives you a basic web server with live reloading. Let's set it up:

```bash
npm install --save-dev webpack-dev-server
```

Update your configuration file to tell the dev server where to find files:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   devtool: 'inline-source-map',
+  devServer: {
+    static: './dist',
+  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
+  optimization: {
+    runtimeChunk: 'single',
+  },
 };
```

This tells `webpack-dev-server` to serve the files from the `dist` directory on `localhost:8080`.

> [!TIP]
> `optimization.runtimeChunk: 'single'` was added because this example uses more than one entry point on a single HTML page. Without it, we'd run into the problem described [here](https://bundlers.tooling.report/code-splitting/multi-entry/). See the [Code Splitting](/guides/optimization/code-splitting) chapter for more details.

> [!TIP]
> `webpack-dev-server` serves bundled files from the directory defined in [`output.path`](#TODO[/configuration/output/#outputpath]); that is, files are available under `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]`.

> [!WARNING]
> `webpack-dev-server` doesn't write any output files after compiling. Instead, it keeps the bundles in memory and serves them as if they were real files mounted at the server's root path. If your page expects the bundles at a different path, change it with the [`devMiddleware.publicPath`](#TODO[/configuration/dev-server/#devserverdevmiddleware]) option in the dev server's configuration.

Let's also add a script to make running the dev server easier:

```diff displayName="package.json"
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "watch": "webpack --watch",
+    "start": "webpack serve --open",
     "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "html-webpack-plugin": "^5.6.6",
     "webpack": "^5.105.0",
     "webpack-cli": "^7.0.0",
     "webpack-dev-server": "^5.2.3"
   },
   "dependencies": {
     "lodash": "^4.17.21"
   }
 }
```

Now run `npm start` from the command line, and your browser will open the page automatically. Change and save any source file, and the server will reload once the code has recompiled. Give it a try!

`webpack-dev-server` offers many configurable options. Head over to the [documentation](#TODO[/configuration/dev-server]) to learn more.

> [!TIP]
> Now that your server is up and running, you might want to give [Hot Module Replacement](/guides/core-workflows/development/hot-module-replacement) a try!

### Using webpack-dev-middleware

`webpack-dev-middleware` is a wrapper that emits files processed by webpack to a server. It's used internally by `webpack-dev-server`, but it's also available as a standalone package for more custom setups. Let's look at an example that pairs `webpack-dev-middleware` with an Express server.

First, install `express` and `webpack-dev-middleware`:

```bash
npm install --save-dev express webpack-dev-middleware
```

Next, adjust the webpack configuration so the middleware works correctly:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: {
     index: './src/index.js',
     print: './src/print.js',
   },
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
+    publicPath: '/',
   },
 };
```

The `publicPath` will also be used in our server script to ensure files are served correctly on `http://localhost:3000`. We'll specify the port shortly. Next, set up the custom Express server:

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
   ├── webpack.config.js
+  ├── server.js
   ├── /dist
   ├── /src
   │   ├── index.js
   │   └── print.js
   └── /node_modules
```

```js displayName="server.js"
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';

const app = express();
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n');
});
```

Now add an npm script to make running the server a little easier:

```diff displayName="package.json"
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "watch": "webpack --watch",
     "start": "webpack serve --open",
+    "server": "node server.js",
     "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "express": "^5.2.1",
     "html-webpack-plugin": "^5.6.6",
     "webpack": "^5.105.0",
     "webpack-cli": "^7.0.0",
     "webpack-dev-middleware": "^8.0.3",
     "webpack-dev-server": "^5.2.3"
   },
   "dependencies": {
     "lodash": "^4.17.21"
   }
 }
```

Now run `npm run server` in your terminal. The output should look similar to this:

```bash
Example app listening on port 3000!
...
<i> [webpack-dev-middleware] asset index.bundle.js 1.38 MiB [emitted] (name: index)
<i> asset print.bundle.js 6.25 KiB [emitted] (name: print)
<i> asset index.html 274 bytes [emitted]
<i> runtime modules 1.9 KiB 9 modules
<i> cacheable modules 530 KiB
<i>   ./src/index.js 406 bytes [built] [code generated]
<i>   ./src/print.js 83 bytes [built] [code generated]
<i>   ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
<i> webpack 5.x.x compiled successfully in 709 ms
<i> [webpack-dev-middleware] Compiled successfully.
<i> [webpack-dev-middleware] Compiling...
<i> [webpack-dev-middleware] assets by status 1.38 MiB [cached] 2 assets
<i> cached modules 530 KiB (javascript) 1.9 KiB (runtime) [cached] 12 modules
<i> webpack 5.x.x compiled successfully in 19 ms
<i> [webpack-dev-middleware] Compiled successfully.
```

Now open your browser at `http://localhost:3000`. You should see your webpack app up and running!

> [!TIP]
> If you'd like to learn more about how Hot Module Replacement works, we recommend reading the [Hot Module Replacement](/guides/core-workflows/development/hot-module-replacement) guide.

## Adjusting your text editor

When relying on automatic compilation, you may hit issues when saving files. Some editors have a "safe write" feature that can interfere with recompilation.

To disable it in a few common editors:

- **Sublime Text 3**: Add `atomic_save: 'false'` to your user preferences.
- **JetBrains IDEs (e.g. WebStorm)**: Uncheck "Use safe write" under `Preferences > Appearance & Behavior > System Settings`.
- **Vim**: Add `:set backupcopy=yes` to your settings.

## Conclusion

Now that you know how to compile your code automatically and run a development server, you can move on to the next guide, which covers [Code Splitting](/guides/optimization/code-splitting).
