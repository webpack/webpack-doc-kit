# MinChunk

<!-- type=misc -->

## `MinChunkSizePluginOptions`

### Properties

#### `chunkOverhead`

* Type: {number} Optional.

Constant overhead for a chunk.

***

#### `entryChunkMultiplicator`

* Type: {number} Optional.

Multiplicator for initial chunks.

***

#### `minChunkSize`

* Type: {number}

Minimum number of characters.

## Class: `MinChunkSizePlugin`

### Constructors

#### `new MinChunkSizePlugin(options)`

##### Parameters

* `options` {MinChunkSizePluginOptions}

* Returns: {MinChunkSizePlugin}

### Properties

#### `options`

* Type: {MinChunkSizePluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
