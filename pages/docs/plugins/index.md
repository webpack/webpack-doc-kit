---
authors: simon04,gonzoyumo,rouzbeh84,aretecode,eko3alpha,refactorized,byzyk,EugeneHlushko,snitin315,chenxsan
---

# Plugins

Webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface. This makes webpack **flexible**.

| Name                                                                                    | Description                                                                                         |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [`BannerPlugin`](/docs/api/v5.x/plugins/BannerPlugin)                                   | Add a banner to the top of each generated chunk                                                     |
| [`ChunksWebpackPlugin`](https://www.npmjs.com/package/chunks-webpack-plugin)            | Create HTML files with entrypoints and chunks relations to serve your bundles                       |
| [`CompressionWebpackPlugin`](/docs/plugins/compression-webpack-plugin)                  | Prepare compressed versions of assets to serve them with Content-Encoding                           |
| [`ContextReplacementPlugin`](/docs/api/v5.x/plugins/ContextReplacementPlugin)           | Override the inferred context of a `require` expression                                             |
| [`CopyWebpackPlugin`](/docs/plugins/copy-webpack-plugin)                                | Copies individual files or entire directories to the build directory                                |
| [`DefinePlugin`](/docs/api/v5.x/plugins/DefinePlugin)                                   | Allow global constants configured at compile time                                                   |
| [`DllPlugin`](/docs/api/v5.x/plugins/DllPlugin)                                         | Split bundles in order to drastically improve build time                                            |
| [`EnvironmentPlugin`](/docs/api/v5.x/plugins/EnvironmentPlugin)                         | Shorthand for using the [`DefinePlugin`](/docs/api/v5.x/plugins/DefinePlugin) on `process.env` keys |
| [`EslintWebpackPlugin`](/docs/plugins/eslint-webpack-plugin)                            | A ESLint plugin for webpack                                                                         |
| [`HotModuleReplacementPlugin`](/docs/api/v5.x/plugins/HotModuleReplacementPlugin)       | Enable Hot Module Replacement (HMR)                                                                 |
| [`HtmlWebpackPlugin`](https://www.npmjs.com/package/html-webpack-plugin)                | Easily create HTML files to serve your bundles                                                      |
| [`IgnorePlugin`](/docs/api/v5.x/plugins/IgnorePlugin)                                   | Exclude certain modules from bundles                                                                |
| [`LimitChunkCountPlugin`](/docs/api/v5.x/optimize/LimitChunkCountPlugin)                | Set min/max limits for chunking to better control chunking                                          |
| [`MergeDuplicateChunksPlugin`](/docs/api/v5.x/optimize/MergeDuplicateChunksPlugin)      | Merge chunks that contain the same modules                                                          |
| [`MinChunkSizePlugin`](/docs/api/v5.x/optimize/MinChunkSizePlugin)                      | Keep chunk size above the specified limit                                                           |
| [`MiniCssExtractPlugin`](/docs/plugins/mini-css-extract-plugin)                         | creates a CSS file per JS file which requires CSS                                                   |
| [`NoEmitOnErrorsPlugin`](/docs/api/v5.x/plugins/NoEmitOnErrorsPlugin)                   | Skip the emitting phase when there are compilation errors                                           |
| [`NormalModuleReplacementPlugin`](/docs/api/v5.x/plugins/NormalModuleReplacementPlugin) | Replace resource(s) that matches a regexp                                                           |
| [`ProgressPlugin`](/docs/api/v5.x/plugins/ProgressPlugin)                               | Report compilation progress                                                                         |
| [`ProvidePlugin`](/docs/api/v5.x/plugins/ProvidePlugin)                                 | Use modules without having to use import/require                                                    |
| [`SourceMapDevToolPlugin`](/docs/api/v5.x/plugins/SourceMapDevToolPlugin)               | Enables a more fine grained control of source maps                                                  |
| [`EvalSourceMapDevToolPlugin`](/docs/api/v5.x/plugins/EvalSourceMapDevToolPlugin)       | Enables a more fine grained control of eval source maps                                             |
| [`SvgChunkWebpackPlugin`](https://www.npmjs.com/package/svg-chunk-webpack-plugin)       | Generate SVG sprites optimized by SVGO based on your entry point dependencies                       |
| [`MinimizerPlugin`](/docs/plugins/minimizer-webpack-plugin)                             | Uses Terser (or other) to minify the JS/CSS/HTML/JSON/etc in your project                           |

For more third-party plugins, see the list from [awesome-webpack](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins).
