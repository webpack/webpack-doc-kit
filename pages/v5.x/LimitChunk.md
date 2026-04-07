# LimitChunk

<!-- type=misc -->

## `LimitChunkCountPluginOptions`

### Properties

#### `chunkOverhead`

* Type: {number} Optional.

Constant overhead for a chunk.

***

#### `entryChunkMultiplicator`

* Type: {number} Optional.

Multiplicator for initial chunks.

***

#### `maxChunks`

* Type: {number}

Limit the maximum number of chunks using a value greater than or equal to 1.

## Class: `LimitChunkCountPlugin`

### Constructors

#### `new LimitChunkCountPlugin([options])`

##### Parameters

* `options` {LimitChunkCountPluginOptions}

* Returns: {LimitChunkCountPlugin}

### Properties

#### `options`

* Type: {LimitChunkCountPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}
