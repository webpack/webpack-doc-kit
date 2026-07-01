---
authors: ryzrr
---

# Plugins

Plugins hook into webpack's build lifecycle to do work that loaders cannot, such
as optimizing output and managing assets. See
[Concepts: Plugins](/guides/getting-started/concepts/plugins) for how they fit
into a build.

Plugins built into webpack are documented in the [API reference](/docs/api/v5.x).
The plugins below are separate packages maintained by the webpack organization.

| Plugin                                                                           | Description                                                         |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [`mini-css-extract-plugin`](/docs/plugins/mini-css-extract-plugin)               | Extract CSS into separate files, one per JS file that imports CSS   |
| [`copy-webpack-plugin`](/docs/plugins/copy-webpack-plugin)                       | Copy individual files or whole directories into the build output    |
| [`compression-webpack-plugin`](/docs/plugins/compression-webpack-plugin)         | Emit compressed versions of assets to serve with `Content-Encoding` |
| [`image-minimizer-webpack-plugin`](/docs/plugins/image-minimizer-webpack-plugin) | Compress images during the build                                    |
| [`eslint-webpack-plugin`](/docs/plugins/eslint-webpack-plugin)                   | Run ESLint on your modules during the build                         |
| [`stylelint-webpack-plugin`](/docs/plugins/stylelint-webpack-plugin)             | Run Stylelint on your styles during the build                       |
| [`minimizer-webpack-plugin`](/docs/plugins/minimizer-webpack-plugin)             | Minify assets, with support for several minifiers                   |
