# Configuration

<!-- type=misc -->

## `Configuration`

Options object as provided by the user.

### Properties

#### `amd`

* Type: {false|object} Optional.

Set the value of `require.amd` and `define.amd`. Or disable AMD support.

***

#### `bail`

* Type: {boolean} Optional.

Report the first error as a hard error instead of tolerating it.

***

#### `cache`

* Type: {boolean|FileCacheOptions|MemoryCacheOptions} Optional.

Cache generated modules and chunks to improve performance for multiple incremental builds.

***

#### `context`

* Type: {string} Optional.

The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.

***

#### `dependencies`

* Type: {string[]} Optional.

References to other configurations to depend on.

***

#### `devtool`

* Type: {string|false|object[]} Optional.

A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).

***

#### `dotenv`

* Type: {boolean|DotenvPluginOptions} Optional.

Enable and configure the Dotenv plugin to load environment variables from .env files.

***

#### `entry`

* Type: {string|string[]|EntryObject|Function} Optional.

The entry point(s) of the compilation.

***

#### `experiments`

* Type: {Experiments} Optional.

Enables/Disables experiments (experimental features with relax SemVer compatibility).

***

#### `extends`

* Type: {string|string[]} Optional.

Extend configuration from another configuration (only works when using webpack-cli).

***

#### `externals`

* Type: {string|RegExp|ExternalItemObjectKnown & ExternalItemObjectUnknown|Function|Function|ExternalItem[]} Optional.

Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.

***

#### `externalsPresets`

* Type: {ExternalsPresets} Optional.

Enable presets of externals for specific targets.

***

#### `externalsType`

* Type: {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} Optional.

Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).

***

#### `ignoreWarnings`

* Type: {RegExp|object|Function[]} Optional.

Ignore specific warnings.

***

#### `infrastructureLogging`

* Type: {InfrastructureLogging} Optional.

Options for infrastructure level logging.

***

#### `loader`

* Type: {Loader} Optional.

Custom values available in the loader context.

***

#### `mode`

* Type: {"development"|"none"|"production"} Optional.

Enable production optimizations or development hints.

***

#### `module`

* Type: {ModuleOptions} Optional.

Options affecting the normal modules (`NormalModuleFactory`).

***

#### `name`

* Type: {string} Optional.

Name of the configuration. Used when loading multiple configurations.

***

#### `node`

* Type: {false|NodeOptions} Optional.

Include polyfills or mocks for various node stuff.

***

#### `optimization`

* Type: {Optimization} Optional.

Enables/Disables integrated optimizations.

***

#### `output`

* Type: {Output} Optional.

Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.

***

#### `parallelism`

* Type: {number} Optional.

The number of parallel processed modules in the compilation.

***

#### `performance`

* Type: {false|PerformanceOptions} Optional.

Configuration for web performance recommendations.

***

#### `plugins`

* Type: {false|""|0|WebpackPluginInstance|Function[]} Optional.

Add additional plugins to the compiler.

***

#### `profile`

* Type: {boolean} Optional.

Capture timing information for each module.

***

#### `recordsInputPath`

* Type: {string|false} Optional.

Store compiler state to a json file.

***

#### `recordsOutputPath`

* Type: {string|false} Optional.

Load compiler state from a json file.

***

#### `recordsPath`

* Type: {string|false} Optional.

Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.

***

#### `resolve`

* Type: {ResolveOptions} Optional.

Options for the resolver.

***

#### `resolveLoader`

* Type: {ResolveOptions} Optional.

Options for the resolver when resolving loaders.

***

#### `snapshot`

* Type: {SnapshotOptionsWebpackOptions} Optional.

Options affecting how file system snapshots are created and validated.

***

#### `stats`

* Type: {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions} Optional.

Stats options object or preset name.

***

#### `target`

* Type: {string|false|string[]} Optional.

Environment to build for. An array of environments to build for all of them when possible.

***

#### `validate`

* Type: {boolean} Optional.

Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.

***

#### `watch`

* Type: {boolean} Optional.

Enter watch mode, which rebuilds on file change.

***

#### `watchOptions`

* Type: {WatchOptions} Optional.

Options for the watcher.
