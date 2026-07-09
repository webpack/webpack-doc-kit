---
authors: manekinekko,evenstensberg,SpaceK33z,gangachris,TheLarkInn,simon04,jhnns,byzyk,debs-obrien,EugeneHlushko,wizardofhogwarts,lukasgeiter,furkle,jamesgeorge007,textbook,avivkeller
---

# Loaders

Loaders are transformations applied to the source code of a module. They let you pre-process files as you `import` or "load" them, so loaders are a bit like the "tasks" in other build tools and offer a powerful way to handle front-end build steps. A loader can transform a file from another language (such as TypeScript) into JavaScript, or load an inline image as a data URL. Loaders even let you `import` CSS files directly from your JavaScript modules.

## Example

For instance, you can use loaders to tell webpack to load a CSS file or to convert TypeScript to JavaScript. Start by installing the loaders you need:

```bash
npm install --save-dev css-loader ts-loader
```

Then instruct webpack to use [`css-loader`](/docs/loaders/css-loader) for every `.css` file and [`ts-loader`](https://github.com/TypeStrong/ts-loader) for every `.ts` file:

```js displayName="webpack.config.js"
export default {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
```

> [!TIP]
> Although the examples above use a loader to load CSS files, webpack has an experimental option ([`experiments.css`](https://webpack.js.org/configuration/experiments/)) that lets webpack process CSS and automatically inject the styles into the webpage.

## Using loaders

There are two ways to use loaders in your application:

- [Configuration](#configuration) (recommended): specify them in your `webpack.config.js` file.
- [Inline](#inline): specify them explicitly in each `import` statement.

Note that loaders could be used from the CLI in webpack v4, but that feature was deprecated in webpack v5.

### Configuration

[`module.rules`](#TODO[/configuration/module/#modulerules]) lets you specify several loaders within your webpack configuration. This is a concise way to declare loaders, helps keep your code clean, and gives you a full overview of each loader.

Loaders are evaluated and executed from right to left (or from bottom to top). In the example below, execution starts with `sass-loader`, continues with `css-loader`, and finally ends with `style-loader`. See [Loader features](#loader-features) for more information about loader order.

```js
export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
```

### Inline

You can specify loaders directly in an `import` statement, or in any equivalent "importing" method. Separate loaders from the resource with `!`. Each part is resolved relative to the current directory.

> [!TIP]
> The `loader1!loader2!./file` syntax is shown here only for illustration. In most projects, prefer configuring loaders via `module.rules` and importing styles for their side effects (for example, `import "./styles.css"`).

```js
import * as styles from 'style-loader!css-loader?modules!./styles.css';
```

You can override any loaders, preLoaders, and postLoaders from the [configuration](#TODO[/configuration]) by prefixing the inline `import` statement:

- Prefixing with `!` disables all configured normal loaders:

  ```js
  import * as styles from '!style-loader!css-loader?modules!./styles.css';
  ```

- Prefixing with `!!` disables all configured loaders (preLoaders, loaders, and postLoaders):

  ```js
  import * as styles from '!!style-loader!css-loader?modules!./styles.css';
  ```

- Prefixing with `-!` disables all configured preLoaders and loaders, but not postLoaders:

  ```js
  import * as styles from '-!style-loader!css-loader?modules!./styles.css';
  ```

Options can be passed as a query parameter, such as `?key=value&foo=bar`, or as a JSON object, such as `?{"key":"value","foo":"bar"}`.

> [!TIP]
> Use `module.rules` whenever possible. It reduces boilerplate in your source code and makes it easier to debug or locate a loader if something goes wrong.

## Loader features

- Loaders can be chained. Each loader in the chain applies its transformations to the processed resource. A chain is executed in reverse order: the first loader passes its result (the resource with its transformations applied) to the next one, and so on. webpack expects the last loader in the chain to return JavaScript.
- Loaders can be synchronous or asynchronous.
- Loaders run in Node.js and can do anything that's possible there.
- Loaders can be configured with an `options` object. Setting options with `query` parameters is still supported but deprecated.
- Normal modules can export a loader in addition to the usual `main`, via the `loader` field in `package.json`.
- Plugins can give loaders additional features.
- Loaders can emit extra, arbitrary files.

Loaders let you customize the output through their preprocessing functions. This gives you the flexibility to include fine-grained logic such as compression, packaging, language translation, and [more](/docs/loaders).

## Resolving loaders

Loaders follow the standard [module resolution](/guides/getting-started/concepts/module-resolution). In most cases they are loaded from the [module path](/guides/getting-started/concepts/module-resolution/#module-paths) (think `npm install` and `node_modules`).

A loader module is expected to export a function and be written in Node.js-compatible JavaScript. Loaders are most commonly managed with npm, but you can also keep custom loaders as files within your application. By convention, loaders are usually named `xxx-loader` (for example, `json-loader`).
