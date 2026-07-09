---
authors: sokra,jhnns,grgur,domfarolino,johnnyreilly,jouni-kantola,frederikprijck,chrisVillanueva,bebraw,howdy39,selbekk,ndelangen,EugeneHlushko,byzyk,avivkeller
---

# To v2 or v3 from v1

The sections below walk through the major changes between webpack 1 and webpack 2.

> [!TIP]
> Far fewer things changed between webpack 2 and 3, so that upgrade should be relatively painless. If you do run into trouble, consult [the changelog](https://github.com/webpack/webpack/releases) for the details.

## `resolve.root`, `resolve.fallback`, `resolve.modulesDirectories`

These three options were consolidated into a single `resolve.modules` option. See [resolving](#TODO[/configuration/resolve]) for usage.

```diff
  resolve: {
-   root: path.join(__dirname, "src")
+   modules: [
+     path.join(__dirname, "src"),
+     "node_modules"
+   ]
  }
```

## `resolve.extensions`

You no longer need to pass an empty string in this option. That behavior moved to `resolve.enforceExtension`. See [resolving](#TODO[/configuration/resolve]) for usage.

## `resolve.*`

Several APIs changed here. They are not documented in detail because they are rarely used. See [resolving](#TODO[/configuration/resolve]) for the specifics.

## `module.loaders` is now `module.rules`

The old loader configuration has been superseded by a more capable rules system that can configure loaders and much more. For backward compatibility the old `module.loaders` syntax remains valid and the old property names are still parsed, but the new naming conventions are clearer and worth adopting by switching to `module.rules`.

```diff
  module: {
-   loaders: [
+   rules: [
      {
        test: /\.css$/,
-       loaders: [
-         "style-loader",
-         "css-loader?modules=true"
+       use: [
+         {
+           loader: "style-loader"
+         },
+         {
+           loader: "css-loader",
+           options: {
+             modules: true
+           }
+         }
        ]
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader", // Do not use "use" here
        options: {
          // ...
        }
      }
    ]
  }
```

## Chaining loaders

As in webpack 1, loaders can be chained so that the output of one is passed to the next. With the [`rule.use`](#TODO[/configuration/module/#ruleuse]) option, `use` accepts an array of loaders. In webpack 1, loaders were typically chained with `!`; that style is now only supported through the legacy `module.loaders` option.

```diff
  module: {
-   loaders: [{
+   rules: [{
      test: /\.less$/,
-     loader: "style-loader!css-loader!less-loader"
+     use: [
+       "style-loader",
+       "css-loader",
+       "less-loader"
+     ]
    }]
  }
```

## Automatic `-loader` module name extension removed

You can no longer omit the `-loader` suffix when referencing loaders:

```diff
  module: {
    rules: [
      {
        use: [
-         "style",
+         "style-loader",
-         "css",
+         "css-loader",
-         "less",
+         "less-loader",
        ]
      }
    ]
  }
```

You can still opt back in to the old behavior with the `resolveLoader.moduleExtensions` option, though it is not recommended.

```diff
+ resolveLoader: {
+   moduleExtensions: ["-loader"]
+ }
```

See [#2986](https://github.com/webpack/webpack/issues/2986) for the reasoning behind this change.

## `json-loader` is no longer required

When no loader is configured for a JSON file, webpack automatically loads it with [`json-loader`](https://github.com/webpack-contrib/json-loader).

```diff
  module: {
    rules: [
-     {
-       test: /\.json/,
-       loader: "json-loader"
-     }
    ]
  }
```

[This change was made](https://github.com/webpack/webpack/issues/3363) to smooth out the differences in environment behavior between webpack, Node.js, and Browserify.

## Loaders in configuration resolve relative to context

In **webpack 1**, configured loaders resolved relative to the matched file. In **webpack 2**, they resolve relative to the `context` option instead.

This fixes duplicate-module problems caused by loaders when using `npm link` or referencing modules outside the `context`. As a result, you can drop any workarounds you added for that:

```diff
  module: {
    rules: [
      {
        // ...
-       loader: require.resolve("my-loader")
+       loader: "my-loader"
      }
    ]
  },
  resolveLoader: {
-   root: path.resolve(__dirname, "node_modules")
  }
```

## `module.preLoaders` and `module.postLoaders` were removed

```diff
  module: {
-   preLoaders: [
+   rules: [
      {
        test: /\.js$/,
+       enforce: "pre",
        loader: "eslint-loader"
      }
    ]
  }
```

## `UglifyJsPlugin` `sourceMap`

The `sourceMap` option of `UglifyJsPlugin` now defaults to `false` rather than `true`. If you want source maps for minified code, or correct line numbers in uglifyjs warnings, set `sourceMap: true` explicitly.

```diff
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
+     sourceMap: true
    })
  ]
```

## `UglifyJsPlugin` warnings

The `compress.warnings` option of `UglifyJsPlugin` now defaults to `false` rather than `true`. To see uglifyjs warnings, set `compress.warnings` to `true`.

```diff
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
+     compress: {
+       warnings: true
+     }
    })
  ]
```

## `UglifyJsPlugin` minimize loaders

`UglifyJsPlugin` no longer switches loaders into minimize mode. In the long term, `minimize: true` must be passed through loader options instead, so check each loader's documentation for the relevant settings.

The minimize mode for loaders will be removed in webpack 3 or later.

For compatibility with older loaders, you can still toggle minimize mode through a plugin:

```diff
  plugins: [
+   new webpack.LoaderOptionsPlugin({
+     minimize: true
+   })
  ]
```

## `DedupePlugin` has been removed

`webpack.optimize.DedupePlugin` is no longer needed. Remove it from your configuration.

## `BannerPlugin` - breaking change

`BannerPlugin` no longer accepts two arguments; it takes a single options object.

```diff
  plugins: [
-    new webpack.BannerPlugin('Banner', {raw: true, entryOnly: true});
+    new webpack.BannerPlugin({banner: 'Banner', raw: true, entryOnly: true});
  ]
```

## `OccurrenceOrderPlugin` is now on by default

`OccurrenceOrderPlugin` is now enabled by default and has been renamed (it was `OccurenceOrderPlugin` in webpack 1). Remove it from your configuration:

```diff
  plugins: [
    // webpack 1
-   new webpack.optimize.OccurenceOrderPlugin()
    // webpack 2
-   new webpack.optimize.OccurrenceOrderPlugin()
  ]
```

## `ExtractTextWebpackPlugin` - breaking change

[`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) requires version 2 to work with webpack 2.

```bash
npm install --save-dev extract-text-webpack-plugin
```

The configuration changes for this plugin are mostly syntactical.

### `ExtractTextPlugin.extract`

```diff
module: {
  rules: [
    {
      test: /.css$/,
-      loader: ExtractTextPlugin.extract("style-loader", "css-loader", { publicPath: "/dist" })
+      use: ExtractTextPlugin.extract({
+        fallback: "style-loader",
+        use: "css-loader",
+        publicPath: "/dist"
+      })
    }
  ]
}
```

### `new ExtractTextPlugin({options})`

```diff
plugins: [
-  new ExtractTextPlugin("bundle.css", { allChunks: true, disable: false })
+  new ExtractTextPlugin({
+    filename: "bundle.css",
+    disable: false,
+    allChunks: true
+  })
]
```

## Fully dynamic requires now fail by default

A dependency consisting solely of an expression (for example `require(expr)`) now creates an empty context rather than the context of the entire directory.

Code like this should be refactored, since it will not work with ES2015 modules. If refactoring is not possible, you can use `ContextReplacementPlugin` to hint the compiler toward the correct resolution.

> [!NOTE]
> Link to an article about dynamic dependencies.

### Using custom arguments in CLI and configuration

If you previously misused the CLI to pass custom arguments into your configuration like this:

```bash
webpack --custom-stuff
```

```js
// webpack.config.js
const customStuff = process.argv.includes('--custom-stuff');

/* ... */
module.exports = config;
```

you will find that it is no longer permitted, since the CLI is now stricter. There is instead a dedicated interface for passing arguments into the configuration, which you should use; future tooling may depend on it.

```bash
webpack --env.customStuff
```

```js
module.exports = function (env) {
  const { customStuff } = env;
  /* ... */
  return config;
};
```

See [CLI](https://github.com/webpack/webpack-cli).

## `require.ensure` and AMD `require` are asynchronous

These functions are now always asynchronous, rather than invoking their callback synchronously when the chunk is already loaded.

> [!WARNING]
> `require.ensure` now depends on native `Promise`s. If you use `require.ensure` in an environment that lacks them, you will need a polyfill.

## Loader configuration is through `options`

You can _no longer_ configure a loader with a custom property in `webpack.config.js`; it must be done through `options`. The following configuration, which uses a top-level `ts` property, is no longer valid in webpack 2:

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  // does not work with webpack 2
  ts: { transpileOnly: false },
};
```

### What are `options`?

Good question. Strictly speaking, `options` refers to two possible things, both ways of configuring a webpack loader. Historically `options` was called `query`, and was a string appended to the loader name, much like a query string but with [greater capabilities](https://github.com/webpack/loader-utils#parsequery):

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: `ts-loader?${JSON.stringify({ transpileOnly: false })}`,
      },
    ],
  },
};
```

Alternatively, it can be a separate object supplied alongside the loader:

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: false },
      },
    ],
  },
};
```

## `LoaderOptionsPlugin` context

Some loaders need contextual information and read it from the configuration. In the long term, this should be passed through loader options, so check each loader's documentation for the relevant settings.

For compatibility with older loaders, the information can still be passed through a plugin:

```diff
  plugins: [
+   new webpack.LoaderOptionsPlugin({
+     options: {
+       context: __dirname
+     }
+   })
  ]
```

## `debug`

In webpack 1, the `debug` option switched loaders into debug mode. In the long term, this should be passed through loader options, so check each loader's documentation for the relevant settings.

The debug mode for loaders will be removed in webpack 3 or later.

For compatibility with older loaders, you can still switch them into debug mode through a plugin:

```diff
- debug: true,
  plugins: [
+   new webpack.LoaderOptionsPlugin({
+     debug: true
+   })
  ]
```

## Code splitting with ES2015

In webpack 1, you could use `require.ensure()` to lazily load chunks of your application:

```js
require.ensure([], require => {
  const foo = require('./module');
});
```

The ES2015 loader spec defines [`import()`](/guides/optimization/code-splitting/#dynamic-imports) as the way to load ES2015 modules dynamically at runtime. webpack treats `import()` as a split point and places the requested module in a separate chunk. `import()` takes the module name as its argument and returns a Promise.

```js
function onClick() {
  import('./module')
    .then(module => module.default)
    .catch(err => {
      console.log('Chunk loading failed');
    });
}
```

A welcome benefit: because loading is now Promise-based, you can handle the failure to load a chunk.

## Dynamic expressions

You can pass a partial expression to `import()`. This works much like expressions in CommonJS: webpack creates a [context](/guides/modules-and-dependencies/dependency-management/#context-module) containing all possible files, and `import()` produces a separate chunk for each possible module.

```js
function route(path, query) {
  return import(`./routes/${path}/route`).then(route => new route.Route(query));
}
// This creates a separate chunk for each possible route
```

## Mixing ES2015 with AMD and CommonJS

As with AMD and CommonJS, you can freely mix all three module types, even within a single file. webpack behaves much like Babel and node-eps here:

```js
// CommonJS consuming ES2015 Module
const book = require('./book');

book.currentPage;
book.readPage();
book.default === 'This is a book';
```

```js
// ES2015 Module consuming CommonJS
import fs from 'node:fs'; // module.exports maps to default

typeof fs.readFileSync === 'function';
```

```js
// ES2015 Module consuming CommonJS
import { readFileSync } from 'node:fs'; // named exports are read from the returned object

typeof readFileSync === 'function';
```

Note that you will want to tell Babel not to parse these module symbols, so that webpack can use them. Do this by adding the following to your `.babelrc` or `babel-loader` options.

```json displayName=".babelrc"
{
  "presets": [["es2015", { "modules": false }]]
}
```

## Hints

Nothing here is required, but each is an opportunity to improve your setup.

### Template strings

webpack now supports template strings in expressions, so you can use them in webpack constructs:

```diff
- require("./templates/" + name);
+ require(`./templates/${name}`);
```

### Configuration Promise

webpack now supports returning a `Promise` from the configuration file, which allows asynchronous processing during configuration.

```js displayName="webpack.config.js"
module.exports = function () {
  return fetchLangs().then(lang => ({
    entry: '...',
    // ...
    plugins: [new DefinePlugin({ LANGUAGE: lang })],
  }));
};
```

### Advanced loader matching

webpack now supports more ways to match loaders.

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        resource: /filename/, // matches "/path/filename.js"
        resourceQuery: /^\?querystring$/, // matches "?querystring"
        issuer: /filename/, // matches "/path/something.js" if requested from "/path/filename.js"
      },
    ],
  },
};
```

### More CLI options

Several new CLI options are available:

- `--define process.env.NODE_ENV="production"` — see [`DefinePlugin`](/docs/api/plugins/DefinePlugin).
- `--display-depth` — displays the distance from the entry point for each module.
- `--display-used-exports` — displays which exports are used in a module.
- `--display-max-modules` — sets how many modules appear in the output (defaults to 15).
- `-p` — now also defines `process.env.NODE_ENV` as `"production"`.

## Loader changes

The following changes are relevant only to loader authors.

### Cacheable

Loaders are now cacheable by default. A loader must opt out if it is not cacheable.

```diff
  // Cacheable loader
  module.exports = function(source) {
-   this.cacheable();
    return source;
  }
```

```diff
  // Not cacheable loader
  module.exports = function(source) {
+   this.cacheable(false);
    return source;
  }
```

### Complex options

**webpack 1** supports only `JSON.stringify`-able options for loaders, whereas **webpack 2** supports any JavaScript object as loader options.

Before webpack [2.2.1](https://github.com/webpack/webpack/releases/tag/v2.2.1) (that is, from 2.0.0 through 2.2.0), complex options required an `ident` on the `options` object so that it could be referenced from other loaders. **This was removed in 2.2.1**, so current migrations do not need the `ident` key.

```diff
{
  test: /\.ext/
  use: {
    loader: '...',
    options: {
-     ident: 'id',
      fn: () => require('./foo.js')
    }
  }
}
```
