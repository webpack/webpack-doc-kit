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
