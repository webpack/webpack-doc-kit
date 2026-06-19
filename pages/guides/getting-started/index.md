---
authors: bebraw,varunjayaraman,cntanglijun,chrisVillanueva,johnstew,simon04,aaronang,TheDutchCoder,sudarsangp,Vanguard90,chenxsan,EugeneHlushko,ATGardner,ayvarot,bjarki,ztomasze,Spiral90210,byzyk,wizardofhogwarts,myshov,anshumanv,d3lm,snitin315,Etheryen,zowiebeha,avivkeller
---

# Getting Started

webpack is a good fit when your application needs a customizable build pipeline: bundling JavaScript modules, processing assets, integrating loaders and plugins, and shaping output for different environments. For a very small page with one or two scripts, a bundler may be unnecessary at first; but for an application with shared dependencies, npm packages, assets, and production builds, webpack gives you explicit control over how everything is assembled.

webpack is used to efficiently compile JavaScript modules. Once [installed](/guides/getting-started/installing-webpack), you can interact with webpack through either its [CLI](#TODO[/api/cli]) or its [API](#TODO[/api/node]). If you're new to webpack, please read through the [core concepts](/guides/getting-started/concepts) and [this comparison](#TODO[/comparison]) to learn why you might choose it over the other tools available in the community.

> [!WARNING]
> The examples in this guide use `webpack-cli` 7, which requires Node.js 20.9.0 or later.

<!-- TODO: StackBlitzPreview example="getting-started?terminal=" -->

## Quick start (minimal working example)

If you want to get a working webpack project up and running quickly, the easiest way is to scaffold one with `create-webpack-app`.

```bash
npx create-webpack-app webpack-demo
cd webpack-demo
```

> [!TIP]
> Need a CLI-based project setup or templates? See the [Init command](#TODO[/api/cli/#init]) for webpack's scaffolding flow.

> [!TIP]
> This command generates a ready-to-use webpack project with a sensible default configuration. Continue below if you'd like to understand how to set up webpack manually, step by step.

## Basic setup

First, let's create a directory, initialize npm, [install webpack locally](/guides/getting-started/installing-webpack/#local-installation), and install the [`webpack-cli`](https://github.com/webpack/webpack-cli) (the tool used to run webpack on the command line):

```bash
# Run the commands for one package manager only.

mkdir webpack-demo
cd webpack-demo

# npm
npm init -y
npm install webpack webpack-cli --save-dev

# yarn
yarn init -y
yarn add webpack webpack-cli --dev

# pnpm
pnpm init
pnpm add webpack webpack-cli -D
```

Throughout these guides, we use **`diff`** blocks to show you what changes we're making to directories, files, and code. For instance:

```diff
+ this is a new line you shall copy into your code
- and this is a line to be removed from your code
  and this is a line not to touch.
```

Now we'll create the following directory structure, files, and contents:

```diff displayName="project"
  webpack-demo
  ├── package.json
  ├── package-lock.json
+ ├── index.html
+ └── src/
+    └── index.js
```

```js displayName="src/index.js"
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

```html displayName="index.html"
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.21"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```

We also need to adjust our `package.json` file to mark the package as `private` and remove the `main` entry. This prevents an accidental publish of your code.

We also add `"type": "module"` so that Node.js treats `.js` files in this project as ES modules. That setting applies project-wide, including future Node.js scripts and webpack configuration files. If you'd rather keep Node's default CommonJS behavior, omit `"type": "module"` and write the configuration later in this guide with `require(...)` and `module.exports` instead of `import` and `export default`.

> [!TIP]
> If you want to learn more about the inner workings of `package.json`, we recommend reading the [npm documentation](https://docs.npmjs.com/files/package.json).

```diff displayName="package.json"
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
-  "main": "index.js",
+  "private": true,
+  "type": "module",
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.105.0",
     "webpack-cli": "^7.0.0"
   }
 }
```

In this example, there are implicit dependencies between the `<script>` tags. Our `index.js` file depends on `lodash` being included in the page before it runs. This creates an implicit dependency on a global variable (`_`), making script execution order critical and harder to maintain.

Managing JavaScript projects this way has several problems:

- It is not immediately apparent that the script depends on an external library.
- If a dependency is missing or included in the wrong order, the application will not function properly.
- If a dependency is included but not used, the browser is forced to download unnecessary code.

webpack solves these issues by explicitly declaring dependencies and bundling them together. This removes reliance on global variables and ensures scripts execute in the correct order.

## Creating a bundle

First, we'll tweak our directory structure slightly, separating the "source" code (`./src`) from the "distribution" code (`./dist`). The source code is what we write and edit. The distribution code is the minimized, optimized `output` of our build process that will eventually be loaded in the browser. Tweak the directory structure as follows:

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
+  ├── /dist
+  │   └── index.html
-  ├── index.html
   └── /src
       └── index.js
```

The `dist` directory is build output, so in a mature project you usually do not hand-edit files there. We are moving `index.html` into `dist` for now only as temporary scaffolding, so the browser has an HTML file that loads the first generated bundle. Later, in [another guide](/guides/core-workflows/output-management/#setting-up-htmlwebpackplugin), we'll generate `index.html` rather than edit it manually. Once that's done, it should be safe to empty the `dist` directory and regenerate all the files within it.

To bundle the `lodash` dependency with `index.js`, we'll need to install the library locally:

```bash
# Run the command for one package manager only.

# npm
npm install lodash

# yarn
yarn add lodash

# pnpm
pnpm add lodash
```

> [!TIP]
> With npm 5 and later, packages installed with `npm install <package>` are saved to `dependencies` by default. If you're installing a package for development purposes (such as a linter or testing library), use `npm install --save-dev`. More information can be found in the [npm documentation](https://docs.npmjs.com/cli/install).

Now let's import `lodash` in our script:

```diff displayName="src/index.js"
+import _ from 'lodash';
+
 function component() {
   const element = document.createElement('div');

-  // Lodash, currently included via a script, is required for this line to work
+  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

Since we'll be bundling our scripts, we now have to update our `index.html` file. Let's remove the lodash `<script>`, since we now `import` it, and modify the other `<script>` tag to load the bundle instead of the raw `./src` file:

```diff displayName="dist/index.html"
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Getting Started</title>
-    <script src="https://unpkg.com/lodash@4.17.21"></script>
   </head>
   <body>
-    <script src="./src/index.js"></script>
+    <script src="main.js"></script>
   </body>
 </html>
```

In this setup, `index.js` explicitly requires `lodash` to be present and binds it as `_` (with no global scope pollution). By declaring what dependencies a module needs, webpack can use that information to build a dependency graph. It then uses the graph to generate an optimized bundle in which scripts execute in the correct order.

> [!TIP]
> A couple of other script-loading strategies exist. Deferred loading is one alternative to the above: scripts are consolidated into the `<head>` and given the `defer` attribute. This strategy downloads external script resources in parallel with document parsing and executes the scripts in order of document appearance after parsing has finished. This contrasts with the approach above, in which the parser pauses to download and then execute the external resource synchronously. To learn more, MDN has a nice [reference guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script#async_and_defer).

With that said, let's run `npx webpack` from the project root. If webpack is installed locally, `npx` runs the local binary from `node_modules/.bin`; otherwise, it may download and execute it. This command takes our script at `src/index.js` as the [entry point](/guides/getting-started/concepts/entry-points) and generates `dist/main.js` as the [output](/guides/getting-started/concepts/output).

```bash
# Run the command for one package manager only.

# npm
npx webpack

# yarn
yarn webpack

# pnpm
pnpm exec webpack

[webpack-cli] Compilation finished
asset main.js 69.3 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 1851 ms
```

> [!TIP]
> Your output may vary a bit, but if the build is successful then you're good to go.

> [!TIP]
> webpack runs in production mode by default when no mode is set, so the output above includes `[minimized]` and the generated `dist/main.js` is optimized for browsers rather than for easy reading. While learning, you can run `npx webpack --mode development`, `yarn webpack --mode development`, or `pnpm exec webpack --mode development` to produce a more readable bundle.

Open `index.html` from the `dist` directory in your browser, and if everything went right, you should see the text `'Hello webpack'`.

## Modules

The [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements were standardized in [ES2015](https://babeljs.io/docs/en/learn/). They are supported in most browsers today, though some browsers don't recognize the new syntax. Don't worry, though: webpack supports them out of the box.

Behind the scenes, webpack analyzes your module graph and bundles the modules into code the browser can load in the right order. It handles module syntax such as `import` and `export`, and supports various other module syntaxes as well. See [Module API](#TODO[/api/module-methods]) for more information.

Note that webpack will not alter any code other than `import` and `export` statements. If you're using other [ES2015 features](http://es6-features.org/), make sure to [use a transpiler](#TODO[/loaders/#transpiling]) such as [Babel](https://babeljs.io/) via webpack's [loader system](/guides/getting-started/concepts/loaders).

## Using a configuration

As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a [configuration file](/guides/getting-started/concepts/configuration). This is much more efficient than manually typing a lot of commands in the terminal, so let's create one.

webpack configuration files can be written using either CommonJS or ECMAScript modules. The examples below use modern ESM syntax.

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
+  ├── webpack.config.js
   ├── /dist
   │   └── index.html
   └── /src
       └── index.js
```

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// In Node.js versions prior to native support for import.meta.dirname,
// derive __dirname from import.meta.url.
// (Node 20.11+ supports import.meta.dirname and import.meta.filename.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Now let's run the build again, but using our new configuration file this time:

```bash
# Run the command for one package manager only.

# npm
npx webpack --config webpack.config.js

# yarn
yarn webpack --config webpack.config.js

# pnpm
pnpm exec webpack --config webpack.config.js

[webpack-cli] Compilation finished
asset main.js 69.3 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 1934 ms
```

> [!TIP]
> If a `webpack.config.js` is present, the `webpack` command picks it up by default. We use the `--config` option here only to show that you can pass a configuration of any name. This is useful for more complex configurations that need to be split into multiple files.

A configuration file offers far more flexibility than CLI usage. We can specify loader rules, plugins, resolve options, and many other enhancements this way. See the [configuration documentation](#TODO[/configuration]) to learn more.

## npm scripts

Since running a local copy of webpack from the CLI isn't particularly fun, we can set up a little shortcut. Let's adjust our `package.json` by adding an [npm script](https://docs.npmjs.com/misc/scripts):

```diff displayName="package.json"
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.105.0",
     "webpack-cli": "^7.0.0"
   },
   "dependencies": {
     "lodash": "^4.17.21"
   }
 }
```

Now the `npm run build` command can be used in place of the `npx` command we used earlier. Note that within `scripts` we can reference locally installed npm packages by name, just as we did with `npx`. This convention is standard in most npm-based projects because it lets all contributors use the same set of common scripts.

Now run the following command and see if your script alias works:

```bash
# Run the command for one package manager only.

# npm
npm run build

# yarn
yarn build

# pnpm
pnpm run build
...

[webpack-cli] Compilation finished
asset main.js 69.3 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.x.x compiled successfully in 1940 ms
```

> [!TIP]
> Custom parameters can be passed to webpack by adding two dashes between the `npm run build` command and your parameters, e.g. `npm run build -- --color`.

## Conclusion

Now that you have a basic build together, you should move on to the next guide, [Asset Management](/guides/core-workflows/asset-management), to learn how to manage assets such as images and fonts with webpack. At this point, your project should look like this:

```diff displayName="project"
webpack-demo
 ├── package.json
 ├── package-lock.json
 ├── webpack.config.js
 ├── /dist
 │   ├── main.js
 │   └── index.html
 ├── /src
 │   └── index.js
 └── /node_modules
```

> [!WARNING]
> Do not compile untrusted code with webpack. It could lead to execution of malicious code on your computer, on remote servers, or in the web browsers of your application's end users.

If you want to learn more about webpack's design, you can check out the [basic concepts](/guides/getting-started/concepts) and [configuration](#TODO[/configuration]) pages. Furthermore, the [API](#TODO[/api]) section digs into the various interfaces webpack offers.
