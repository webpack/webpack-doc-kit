# AggressiveSplitting

<!-- type=misc -->

## `AggressiveSplittingPluginOptions`

### Properties

#### `chunkOverhead`

* Type: {number} Optional.

Extra cost for each chunk (Default: 9.8kiB).

***

#### `entryChunkMultiplicator`

* Type: {number} Optional.

Extra cost multiplicator for entry chunks (Default: 10).

***

#### `maxSize`

* Type: {number} Optional.

Byte, max size of per file (Default: 50kiB).

***

#### `minSize`

* Type: {number} Optional.

Byte, split point. (Default: 30kiB).

## Class: `AggressiveSplittingPlugin`

### Constructors

#### `new AggressiveSplittingPlugin([options])`

##### Parameters

* `options` {AggressiveSplittingPluginOptions}

* Returns: {AggressiveSplittingPlugin}

### Properties

#### `options`

* Type: {AggressiveSplittingPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### Static method: `wasChunkRecorded(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}
