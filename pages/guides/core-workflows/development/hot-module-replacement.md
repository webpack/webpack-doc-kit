---
authors: jmreidy,jhnns,sararubin,rohannair,joshsantos,drpicox,skipjack,sbaidon,gdi2290,bdwain,caryli,xgirma,EugeneHlushko,AnayaDesign,aviyacohen,dhruvdutt,wizardofhogwarts,aholzner,snitin315,Brennvo,avivkeller
---

# Hot Module Replacement

> [!TIP]
> This guide builds on the code examples found in the [Development](/guides/core-workflows/development) guide.

Hot Module Replacement (HMR) is one of the most useful features webpack offers. It lets all kinds of modules update at runtime without a full page refresh. This page focuses on **implementation**, while the [concepts page](/guides/getting-started/concepts/hot-module-replacement) covers how HMR works and why it's useful.

> [!WARNING]
> HMR is not intended for use in production; it should only be used during development. See the [building for production guide](/guides/core-workflows/production) for more information.

## Enabling HMR

This feature is great for productivity. All we need to do is update our [webpack-dev-server](https://github.com/webpack/webpack-dev-server) configuration and use webpack's built-in HMR plugin. We'll also remove the entry point for `print.js`, since it will now be consumed by the `index.js` module.

Since `webpack-dev-server` v4.0.0, Hot Module Replacement is enabled by default.

> [!TIP]
> If you took the route of using `webpack-dev-middleware` instead of `webpack-dev-server`, use the [`webpack-hot-middleware`](https://github.com/webpack/webpack-hot-middleware) package to enable HMR on your custom server or application.

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';
  import HtmlWebpackPlugin from 'html-webpack-plugin';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    entry: {
       app: './src/index.js',
-      print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
+     hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

You can also provide manual entry points for HMR:

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';
  import HtmlWebpackPlugin from 'html-webpack-plugin';
+ import webpack from 'webpack';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    entry: {
       app: './src/index.js',
-      print: './src/print.js',
+      // Runtime code for hot module replacement
+      hot: 'webpack/hot/dev-server.js',
+      // Dev server client for web socket transport, hot and live reload logic
+      client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
+     // Dev server client for web socket transport, hot and live reload logic
+     hot: false,
+     client: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
+     // Plugin for hot module replacement
+     new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

> [!TIP]
> You can use the CLI to modify the [webpack-dev-server](https://github.com/webpack/webpack-dev-server) configuration with the following command: `webpack serve --hot-only`.

Now let's update the `index.js` file so that when a change inside `print.js` is detected, we tell webpack to accept the updated module.

```diff displayName="index.js"
  import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());
+
+ if (module.hot) {
+   module.hot.accept('./print.js', function() {
+     console.log('Accepting the updated printMe module!');
+     printMe();
+   })
+ }
```

Start changing the `console.log` statement in `print.js`, and you should see the following output in the browser console (don't worry about that `button.onclick = printMe` output for now; we'll update that part later).

```diff displayName="print.js"
  export default function printMe() {
-   console.log('I get called from print.js!');
+   console.log('Updating print.js...');
  }
```

```diff displayName="console"
[HMR] Waiting for update signal from WDS...
main.js:4395 [WDS] Hot Module Replacement enabled.
+ 2main.js:4395 [WDS] App updated. Recompiling...
+ main.js:4395 [WDS] App hot update...
+ main.js:4330 [HMR] Checking for updates on the server...
+ main.js:10024 Accepting the updated printMe module!
+ 0.4b8ee77….hot-update.js:10 Updating print.js...
+ main.js:4330 [HMR] Updated modules:
+ main.js:4330 [HMR]  - 20
```

## Via the Node.js API

When using webpack-dev-server with the Node.js API, don't put the dev server options on the webpack configuration object. Instead, pass them as a second parameter on creation. For example:

`new WebpackDevServer(options, compiler)`

To enable HMR, you also need to modify your webpack configuration object to include the HMR entry points. Here's a small example of how that might look:

```js displayName="dev-server.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: 'development',
  entry: [
    // Runtime code for hot module replacement
    'webpack/hot/dev-server.js',
    // Dev server client for web socket transport, hot and live reload logic
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    // Your entry
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  plugins: [
    // Plugin for hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
const compiler = webpack(config);

// `hot` and `client` options are disabled because we added them manually
const server = new WebpackDevServer({ hot: false, client: false }, compiler);

try {
  await server.start();
  console.log('dev server is running');
} catch (err) {
  throw new Error(`Failed to start dev server: ${err.message}`, { cause: err });
}
```

See the [full documentation of the `webpack-dev-server` Node.js API](#TODO[/api/webpack-dev-server/]).

> [!TIP]
> If you're [using `webpack-dev-middleware`](/guides/core-workflows/development/#using-webpack-dev-middleware), check out the [`webpack-hot-middleware`](https://github.com/webpack/webpack-hot-middleware) package to enable HMR on your custom dev server.

## Gotchas

Hot Module Replacement can be tricky. To show this, let's return to our working example. If you click the button on the example page, you'll notice the console prints the old `printMe` function.

This happens because the button's `onclick` event handler is still bound to the original `printMe` function.

To make this work with HMR, we need to update that binding to the new `printMe` function using `module.hot.accept`:

```diff displayName="index.js"
  import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick event is bound to the original printMe function

    element.appendChild(btn);

    return element;
  }

- document.body.appendChild(component());
+ let element = component(); // Store the element to re-render on print.js changes
+ document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
-     printMe();
+     document.body.removeChild(element);
+     element = component(); // Re-render the "component" to update the click handler
+     document.body.appendChild(element);
    })
  }
```

This is only one example, but many others can easily trip people up. Fortunately, there are a lot of loaders out there (some mentioned below) that make hot module replacement much easier.

## HMR with stylesheets

Hot Module Replacement with CSS is actually fairly straightforward with the help of `style-loader`. Behind the scenes, this loader uses `module.hot.accept` to patch `<style>` tags when CSS dependencies are updated.

First, let's install both loaders with the following command:

```bash
npm install --save-dev style-loader css-loader
```

Now let's update the configuration file to make use of the loader.

```diff displayName="webpack.config.js"
  import path from 'node:path';
  import { fileURLToPath } from 'node:url';
  import HtmlWebpackPlugin from 'html-webpack-plugin';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  export default {
    entry: {
      app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: ['style-loader', 'css-loader'],
+       },
+     ],
+   },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

Hot loading stylesheets is done by importing them into a module:

```diff displayName="project"
  webpack-demo
  ├── package.json
  ├── webpack.config.js
  ├── /dist
  │   └── bundle.js
  └── /src
      ├── index.js
      ├── print.js
+     └── styles.css
```

```css displayName="styles.css"
body {
  background: blue;
}
```

```diff displayName="index.js"
  import _ from 'lodash';
  import printMe from './print.js';
+ import './styles.css';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick event is bound to the original printMe function

    element.appendChild(btn);

    return element;
  }

  let element = component();
  document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    })
  }
```

Change the style on `body` to `background: red;`, and you should immediately see the page's background color change without a full refresh.

```diff displayName="styles.css"
  body {
-   background: blue;
+   background: red;
  }
```

## Other code and frameworks

There are many other loaders and examples in the community to make HMR interact smoothly with a variety of frameworks and libraries:

- [React Hot Loader](https://github.com/gaearon/react-hot-loader): Tweak React components in real time.
- [Vue Loader](https://github.com/vuejs/vue-loader): Supports HMR for Vue components out of the box.
- [Elm Hot webpack Loader](https://github.com/klazuka/elm-hot-webpack-loader): Supports HMR for the Elm programming language.
- [Angular HMR](https://angular.io/cli/serve): No loader necessary! HMR support is built into the Angular CLI; add the `--hmr` flag to your `ng serve` command.
- [Svelte Loader](https://github.com/sveltejs/svelte-loader): Supports HMR for Svelte components out of the box.

> [!TIP]
> If you know of any other loaders or plugins that help with or enhance HMR, please submit a pull request to add them to this list!
