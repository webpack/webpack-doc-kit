---
title: Plugins
authors: ryzrr, samc4e
---

# Plugins

Plugins hook into webpack's build lifecycle to do work that loaders cannot, such
as optimizing output and managing assets. See
[Concepts: Plugins](/guides/getting-started/concepts/plugins) for how they fit
into a build.

Plugins built into webpack are documented in the [API reference](/docs/api).
The plugins below are separate packages maintained by the webpack organization.

| Plugin                                                                   | Description                                                            |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)     | Minify and compress assets, with support for several minifiers         |
| [`diagnostics-webpack-plugin`](/docs/plugins/diagnostics-webpack-plugin) | Run ESLint, Stylelint, TypeScript, and other checkers during the build |

## Deprecated plugins

webpack or the plugins above now cover what these plugins did, so these
packages are deprecated and no longer documented here.

| Plugin                                                                                        | Use instead                                                                   |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`mini-css-extract-plugin`](https://github.com/webpack/mini-css-extract-plugin)               | [Native CSS](/guides/modern-web/native-css#3-replace-mini-css-extract-plugin) |
| [`copy-webpack-plugin`](https://github.com/webpack/copy-webpack-plugin)                       | The `output.copy` option, from webpack 5.111.0                                |
| [`compression-webpack-plugin`](https://github.com/webpack/compression-webpack-plugin)         | [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)          |
| [`css-minimizer-webpack-plugin`](https://github.com/webpack/css-minimizer-webpack-plugin)     | [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)          |
| [`html-minimizer-webpack-plugin`](https://github.com/webpack/html-minimizer-webpack-plugin)   | [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)          |
| [`image-minimizer-webpack-plugin`](https://github.com/webpack/image-minimizer-webpack-plugin) | [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)          |
| [`json-minimizer-webpack-plugin`](https://github.com/webpack/json-minimizer-webpack-plugin)   | [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)          |
| `eslint-webpack-plugin`                                                                       | [`diagnostics-webpack-plugin`](/docs/plugins/diagnostics-webpack-plugin)      |
| [`stylelint-webpack-plugin`](https://github.com/webpack/stylelint-webpack-plugin)             | [`diagnostics-webpack-plugin`](/docs/plugins/diagnostics-webpack-plugin)      |
