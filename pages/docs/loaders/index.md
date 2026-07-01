---
authors: ryzrr
---

# Loaders

Out of the box, webpack only understands JavaScript and JSON. Loaders let it
handle other file types by transforming their contents into modules that webpack
can add to the dependency graph. See
[Concepts: Loaders](/guides/getting-started/concepts/loaders) for how they fit
into a build.

The loaders below are maintained by the webpack organization.

| Loader                                           | Description                                                                        |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`css-loader`](/docs/loaders/css-loader)         | Resolve `@import` and `url()` in CSS the way `import` and `require()` are resolved |
| [`style-loader`](/docs/loaders/style-loader)     | Inject CSS into the DOM                                                            |
| [`sass-loader`](/docs/loaders/sass-loader)       | Compile Sass and SCSS to CSS                                                       |
| [`less-loader`](/docs/loaders/less-loader)       | Compile Less to CSS                                                                |
| [`stylus-loader`](/docs/loaders/stylus-loader)   | Compile Stylus to CSS                                                              |
| [`postcss-loader`](/docs/loaders/postcss-loader) | Process CSS with PostCSS                                                           |
| [`html-loader`](/docs/loaders/html-loader)       | Export HTML as a string and resolve its asset references                           |
| [`coffee-loader`](/docs/loaders/coffee-loader)   | Compile CoffeeScript to JavaScript                                                 |
| [`exports-loader`](/docs/loaders/exports-loader) | Add exports to a module that does not define its own                               |
| [`imports-loader`](/docs/loaders/imports-loader) | Provide global variables to a module that expects them                             |
| [`expose-loader`](/docs/loaders/expose-loader)   | Expose a module on the global object                                               |
| [`thread-loader`](/docs/loaders/thread-loader)   | Run the loaders that follow it in a worker pool                                    |
