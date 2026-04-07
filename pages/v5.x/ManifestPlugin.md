# ManifestPlugin

<!-- type=misc -->

## Class: `ManifestPlugin`

### Constructors

#### `new ManifestPlugin([options])`

##### Parameters

* `options` {ManifestPluginOptions}

* Returns: {ManifestPlugin}

### Properties

#### `options`

* Type: {ManifestPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `ManifestPluginOptions`

### Properties

#### `entrypoints`

* Type: {boolean} Optional.

Enables/disables generation of the entrypoints manifest section.

#### `filename`

* Type: {string} Optional.

Specifies the filename of the output file on disk. By default the plugin will emit `manifest.json` inside the 'output.path' directory.

#### `filter`

* Type: {Filter} Optional.

Allows filtering the files which make up the manifest.

#### `generate`

* Type: {Generate} Optional.

A function that receives the manifest object, modifies it, and returns the modified manifest.

#### `prefix`

* Type: {string} Optional.

Specifies a path prefix for all keys in the manifest.

#### `serialize`

* Type: {Serialize} Optional.

A function that receives the manifest object and returns the manifest string.
