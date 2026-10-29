---
title: Loaders
authors: ryzrr, samc4e
---

# Loaders

Out of the box, webpack only understands JavaScript and JSON. Loaders let it
handle other file types by transforming their contents into modules that webpack
can add to the dependency graph. See
[Concepts: Loaders](/guides/getting-started/concepts/loaders) for how they fit
into a build.

The loaders below are maintained by the webpack organization.

| Loader                                           | Description                                     |
| ------------------------------------------------ | ----------------------------------------------- |
| [`sass-loader`](/docs/loaders/sass-loader)       | Compile Sass and SCSS to CSS                    |
| [`less-loader`](/docs/loaders/less-loader)       | Compile Less to CSS                             |
| [`stylus-loader`](/docs/loaders/stylus-loader)   | Compile Stylus to CSS                           |
| [`postcss-loader`](/docs/loaders/postcss-loader) | Process CSS with PostCSS                        |
| [`coffee-loader`](/docs/loaders/coffee-loader)   | Compile CoffeeScript to JavaScript              |
| [`thread-loader`](/docs/loaders/thread-loader)   | Run the loaders that follow it in a worker pool |

## Deprecated loaders

These loaders are deprecated and their repositories are archived, so they are
no longer documented here. Each one lists what to use instead.

| Loader                                                        | Use instead                                                                                                      |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`css-loader`](https://github.com/webpack/css-loader)         | [Native CSS](/guides/modern-web/native-css#4-replace-css-loader)                                                 |
| [`style-loader`](https://github.com/webpack/style-loader)     | [Native CSS](/guides/modern-web/native-css#5-replace-style-loader)                                               |
| [`html-loader`](https://github.com/webpack/html-loader)       | [`experiments.html`](/docs/api/options#experimentshtml)                                                          |
| [`exports-loader`](https://github.com/webpack/exports-loader) | A small plugin, see the [migration recipe](https://github.com/webpack/exports-loader#deprecation)                |
| [`imports-loader`](https://github.com/webpack/imports-loader) | A small plugin, see the [add-imports example](https://github.com/webpack/webpack/tree/main/examples/add-imports) |
| [`expose-loader`](https://github.com/webpack/expose-loader)   | A small plugin, see the [migration recipe](https://github.com/webpack/expose-loader#deprecation)                 |
| [`remark-loader`](https://github.com/webpack/remark-loader)   | The [markdown example](https://github.com/webpack/webpack/tree/main/examples/markdown)                           |
