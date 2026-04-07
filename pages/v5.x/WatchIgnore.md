# WatchIgnore

<!-- type=misc -->

## `WatchIgnorePluginOptions`

### Properties

#### `paths`

* Type: {string|RegExp[]}

A list of RegExps or absolute paths to directories or files that should be ignored.

## Class: `WatchIgnorePlugin`

### Constructors

#### `new WatchIgnorePlugin(options)`

##### Parameters

* `options` {WatchIgnorePluginOptions}

* Returns: {WatchIgnorePlugin}

### Properties

#### `options`

* Type: {WatchIgnorePluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
