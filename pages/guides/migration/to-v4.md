---
authors: sokra,EugeneHlushko,Kolhar730,avivkeller
---

# To v4 from v3

This guide covers only the major changes that affect end users. For the full picture, see [the changelog](https://github.com/webpack/webpack/releases).

## Node.js v4

If you are still on Node.js v4 or lower, upgrade your Node.js installation to v6 or higher.

You can find instructions for upgrading Node.js [here](https://stackoverflow.com/questions/10075990/upgrading-node-js-to-latest-version).

## CLI

The CLI has moved into its own package, `webpack-cli`. You must install it before using webpack; see [basic setup](/guides/getting-started/#basic-setup).

The installation guide is available [here](/guides/getting-started/installing-webpack).

## Update plugins

Many third-party plugins need to be updated to their latest versions to be compatible with webpack 4. Links to popular plugins can be found [here](#TODO[/awesome-webpack/#webpack-plugins]).

## `mode`

Add the new [`mode`](#TODO[/configuration/mode/]) option to your configuration, setting it to `'production'`, `'development'`, or `'none'` depending on your use case.

```diff displayName="webpack.config.js"
module.exports = {
  // ...
+  mode: 'production',
}
```

> [!TIP]
> `'development'` mode and `'production'` mode serve different purposes. You can use `webpack-merge`, as shown in the [production guide](/guides/core-workflows/production/#setup), to maintain separate optimized configurations.

## Deprecated and removed plugins

The following plugins can be removed from your configuration because they are enabled by default in production mode:

```diff displayName="webpack.config.js"
module.exports = {
  // ...
  plugins: [
-    new NoEmitOnErrorsPlugin(),
-    new ModuleConcatenationPlugin(),
-    new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
-    new UglifyJsPlugin()
  ],
}
```

These plugins are enabled by default in development mode:

```diff displayName="webpack.config.js"
module.exports = {
  // ...
  plugins: [
-    new NamedModulesPlugin()
  ],
}
```

These plugins were deprecated and have now been removed:

```diff displayName="webpack.config.js"
module.exports = {
  // ...
  plugins: [
-    new NoErrorsPlugin(),
-    new NewWatchingPlugin()
  ],
}
```

## `CommonsChunkPlugin`

`CommonsChunkPlugin` has been removed. Use the [`optimization.splitChunks`](#TODO[/configuration/optimization/#optimizationsplitchunks]) options instead.

See the [`optimization.splitChunks`](#TODO[/configuration/optimization/#optimizationsplitchunks]) documentation for details. The default configuration may already meet your needs.

> [!TIP]
> When generating HTML from the stats, you can set `optimization.splitChunks.chunks: "all"`, which is the optimal configuration in most cases.

## `import()` and CommonJS

When using `import()` to load a non-ESM module, the result has changed in webpack 4. You now need to access the `default` property to get the value of `module.exports`.

```js displayName="non-esm.js"
module.exports = {
  sayHello: () => {
    console.log('hello world');
  },
};
```

```js displayName="example.js"
function sayHello() {
  import('./non-esm.js').then(module => {
    module.default.sayHello();
  });
}
```

## JSON and loaders

When using a custom loader to transform `.json` files, you now need to change the module `type`:

```diff displayName="webpack.config.js"
module.exports = {
  // ...
  rules: [
    {
      test: /config\.json$/,
      loader: 'special-loader',
+     type: 'javascript/auto',
      options: {...}
    }
  ]
};
```

If you are still using `json-loader`, you can remove it:

```diff displayName="webpack.config.js"
module.exports = {
  // ...
  rules: [
    {
-     test: /\.json$/,
-     loader: 'json-loader'
    }
  ]
};
```

## `module.loaders`

`module.loaders` was deprecated in webpack 2 and is now removed in favor of [`module.rules`](#TODO[/configuration/module/#rule]).

## Further reading

- [To v2 or v3 from v1](https://webpack.js.org/migrate/3/)
- [RIP CommonChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)
- [webpack 4: migration guide for plugins/loaders](https://medium.com/webpack/webpack-4-migration-guide-for-plugins-loaders-20a79b927202)
