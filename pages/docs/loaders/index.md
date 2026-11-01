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
