---
authors: TheLarkInn,jhnns,grgur,johnstew,jimrfenner,TheDutchCoder,adambraimbridge,EugeneHlushko,jeremenichelli,arjunsajeev,byzyk,yairhaimo,farskid,LukeMwila,Jalitha,muhmushtaha,chenxsan,RyanGreyling2,saishankar404,avivkeller
---

# Concepts

At its core, **webpack** is a _static module bundler_ for modern JavaScript applications. When webpack processes your application, it internally builds a [dependency graph](/guides/getting-started/concepts/dependency-graph) from one or more _entry points_ and then combines every module your project needs into one or more _bundles_, which are static assets that serve your content.

> [!TIP]
> Learn more about JavaScript modules and webpack modules [here](/guides/getting-started/concepts/modules).

Since version 4.0.0, **webpack does not require a configuration file** to bundle your project. Even so, it is [incredibly configurable](#TODO[/configuration]) to better fit your needs.

To get started, you only need to understand its **core concepts**:

- [Entry](#entry)
- [Output](#output)
- [Loaders](#loaders)
- [Plugins](#plugins)
- [Mode](#mode)
- [Browser Compatibility](#browser-compatibility)

This document gives a **high-level** overview of these concepts while linking to more detailed, concept-specific use cases.

For a deeper understanding of the ideas behind module bundlers and how they work under the hood, consult these resources:

- [Manually Bundling an Application](https://www.youtube.com/watch?v=UNMkLHzofQI)
- [Live Coding a Basic Module Bundler](https://www.youtube.com/watch?v=Gc9-7PBqOC8)
- [Detailed Explanation of a Basic Module Bundler](https://github.com/ronami/minipack)

## Entry

An **entry point** tells webpack which module to use to begin building its internal [dependency graph](/guides/getting-started/concepts/dependency-graph). From there, webpack determines which other modules and libraries that entry point depends on, both directly and indirectly.

By default the entry is `./src/index.js`, but you can specify a different entry point — or multiple — by setting the [`entry` property in the webpack configuration](#TODO[/configuration/entry-context/#entry]). For example:

```js displayName="webpack.config.js"
export default {
  entry: './path/to/my/entry/file.js',
};
```

> [!TIP]
> When you run webpack without a configuration file, the entry defaults to `'./src/index.js'`. If that file does not exist — even when your `src/` directory does — webpack throws:
>
> **`ERROR in Entry module not found: Error: Can't resolve './src'`**
>
> The error mentions `'./src'` rather than `'./src/index.js'` because webpack resolves the directory first and then fails to find the default `index.js` inside it. To use a different entry filename, add a `webpack.config.js` as shown in the example above.

> [!TIP]
> Learn more in the [entry points](/guides/getting-started/concepts/entry-points) section.

## Output

The **output** property tells webpack where to emit the _bundles_ it creates and how to name those files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.

You can configure this part of the process with an `output` field in your configuration:

```js displayName="webpack.config.js"
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```

In the example above, the `output.filename` and `output.path` properties tell webpack the name of our bundle and where to emit it. If you're wondering about the `path` module imported at the top, it is a core [Node.js module](https://nodejs.org/api/modules.html) used to manipulate file paths.

> [!TIP]
> The `output` property has [many more configurable features](#TODO[/configuration/output]). To learn about the concepts behind it, [read more in the output section](/guides/getting-started/concepts/output).

## Loaders

Out of the box, webpack only understands JavaScript and JSON files. **Loaders** let webpack process other types of files and convert them into valid [modules](/guides/getting-started/concepts/modules) that your application can consume and that can be added to the dependency graph.

> [!WARNING]
> One of webpack's distinctive features is the ability to `import` any type of module, for example `.css` files, which other bundlers or task runners may not support. We feel this extension of the language is warranted, because it lets developers build a more accurate dependency graph.

At a high level, **loaders** have two properties in your webpack configuration:

1. The `test` property identifies which file or files should be transformed.
2. The `use` property indicates which loader should perform the transformation.

```js displayName="webpack.config.js"
import path from 'node:path';

export default {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
};
```

The configuration above defines a `rules` property with a single rule that has the two required properties `test` and `use`. This tells webpack's compiler the following:

> "Hey webpack compiler, when you come across a path that resolves to a '.js' file inside a `require()`/`import` statement, **use** the `babel-loader` to transform it before you add it to the bundle."

> [!WARNING]
> Remember that when you define rules in your webpack configuration, you define them under `module.rules`, not `rules`. webpack will warn you if you get this wrong.

> [!WARNING]
> Keep in mind that when you use a regular expression to match files, you must not quote it. For example, `/\.txt$/` is not the same as `'/\.txt$/'` or `"/\.txt$/"`. The former tells webpack to match any file ending in `.txt`, while the latter tells webpack to match a single file with the absolute path `'.txt'`, which is likely not your intention.

You can learn more about including loaders in the [loaders section](/guides/getting-started/concepts/loaders).

## Plugins

While loaders transform certain types of modules, plugins can perform a much wider range of tasks, such as bundle optimization, asset management, and injecting environment variables.

> [!TIP]
> Check out the [plugin interface](/docs/api/plugins/types#interface-webpackplugininstance) and how to use it to extend webpack's capabilities.

To use a plugin, you `import` it and add it to the `plugins` array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you create an instance of it by calling it with the `new` operator.

```js displayName="webpack.config.js"
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; // to access built-in plugins

export default {
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```

In the example above, the `html-webpack-plugin` generates an HTML file for your application and automatically injects all of your generated bundles into it.

> [!TIP]
> webpack provides many plugins out of the box. Check out the [list of plugins](/docs/plugins).

Using plugins in your webpack configuration is straightforward, but there are many use cases worth exploring further. [Learn more about them here](/guides/getting-started/concepts/plugins).

## Mode

By setting the `mode` parameter to `development`, `production`, or `none`, you can enable webpack's built-in optimizations for the corresponding environment. The default value is `production`.

```js
export default {
  mode: 'production',
};
```

Learn more about the [mode configuration here](#TODO[/configuration/mode]) and which optimizations each value enables.

## Browser Compatibility

webpack supports all browsers that are [ES5-compliant](https://compat-table.github.io/compat-table/es5/); IE8 and below are not supported. webpack needs `Promise` for [`import()` and `require.ensure()`](/guides/optimization/code-splitting/#dynamic-imports). To support older browsers, you will need to [load a polyfill](/guides/modules-and-dependencies/shimming) before using these expressions.

## Environment

webpack 5 requires Node.js version 10.13.0 or later.
