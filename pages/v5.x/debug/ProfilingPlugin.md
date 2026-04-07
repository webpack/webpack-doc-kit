# ProfilingPlugin

<!-- type=misc -->

## Class: `ProfilingPlugin`

### Constructors

#### `new ProfilingPlugin([options])`

##### Parameters

* `options` {ProfilingPluginOptions}

* Returns: {ProfilingPlugin}

### Properties

#### `options`

* Type: {ProfilingPluginOptions}

***

#### `Profiler`

* Type: {Profiler}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `ProfilingPluginOptions`

### Properties

#### `outputPath`

* Type: {string} Optional.

Path to the output file e.g. `path.resolve(__dirname, 'profiling/events.json')`. Defaults to `events.json`.
