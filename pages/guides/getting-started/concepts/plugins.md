---
authors: TheLarkInn,jhnns,rouzbeh84,johnstew,MisterDev,byzyk,chenxsan,avivkeller
---

# Plugins

Plugins are the [backbone](https://github.com/webpack/tapable) of webpack. webpack itself is built on the **same plugin system** that you use in your own configuration.

Plugins also handle **anything else** that a [loader](/guides/getting-started/concepts/loaders) cannot do. webpack ships with [many plugins](/docs/plugins) out of the box.

> [!TIP]
> When consuming the [`webpack-sources`](https://github.com/webpack/webpack-sources) package in plugins, prefer `compiler.webpack.sources` over importing from `webpack` or `webpack-sources` directly. This avoids version conflicts with persistent caching.

## Anatomy

A webpack plugin is a JavaScript object with an [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) method. The webpack compiler calls this `apply` method, giving the plugin access to the **entire** compilation lifecycle.

```js displayName="ConsoleLogOnBuildWebpackPlugin.js"
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!');
    });
  }
}

export default ConsoleLogOnBuildWebpackPlugin;
```

The first argument to the compiler hook's `tap` method should be a camelized version of the plugin name. Defining it as a constant is recommended so it can be reused across all hooks.

## Usage

Because plugins can take arguments and options, you pass a `new` instance to the `plugins` property in your webpack configuration. Depending on how you use webpack, there are several ways to add plugins.

### Configuration

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; // to access built-in plugins

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};
```

`ProgressPlugin` customizes how progress is reported during compilation, and `HtmlWebpackPlugin` generates an HTML file that includes `my-first-webpack.bundle.js` via a `script` tag.

### Node API

When using the Node API, you can also pass plugins through the `plugins` property in the configuration.

```js displayName="some-node-script.js"
import webpack from 'webpack'; // to access webpack runtime
import configuration from './webpack.config.js';

const compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run((err, stats) => {
  // ...
});
```

> [!TIP]
> The example above is remarkably similar to the [webpack runtime itself](https://github.com/webpack/webpack/blob/e7087ffeda7fa37dfe2ca70b5593c6e899629a2c/bin/webpack.js#L290-L292). The [webpack source code](https://github.com/webpack/webpack) hides plenty of great usage examples that you can apply to your own configurations and scripts.
