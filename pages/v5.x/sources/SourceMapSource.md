# SourceMapSource

<!-- type=misc -->

## Class: `SourceMapSource`

* Extends: {Source}

### Constructors

#### `new SourceMapSource(value, name[, sourceMap][, originalSource][, innerSourceMap][, removeOriginalSource])`

##### Parameters

* `value` {string|Buffer<ArrayBufferLike>}
* `name` {string}
* `sourceMap` {string|Buffer<ArrayBufferLike>|RawSourceMap}
* `originalSource` {string|Buffer<ArrayBufferLike>}
* `innerSourceMap` {string|Buffer<ArrayBufferLike>|RawSourceMap}
* `removeOriginalSource` {boolean}

* Returns: {SourceMapSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

***

#### `getArgsAsBuffers()`

* Returns: {[Buffer<ArrayBufferLike>, string, Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>, boolean]}

***

#### `map([options])`

##### Parameters

* `options` {MapOptions}

* Returns: {RawSourceMap}

***

#### `size()`

* Returns: {number}

***

#### `source()`

* Returns: {SourceValue}

***

#### `sourceAndMap([options])`

##### Parameters

* `options` {MapOptions}

* Returns: {SourceAndMap}

***

#### `streamChunks(options, onChunk, onSource, onName)`

##### Parameters

* `options` {StreamChunksOptions}
* `onChunk` {Function}
  * `chunk` {string}
  * `generatedLine` {number}
  * `generatedColumn` {number}
  * `sourceIndex` {number}
  * `originalLine` {number}
  * `originalColumn` {number}
  * `nameIndex` {number}
  * Returns: {void}
* `onSource` {Function}
  * `sourceIndex` {number}
  * `source` {string}
  * `sourceContent` {string}
  * Returns: {void}
* `onName` {Function}
  * `nameIndex` {number}
  * `name` {string}
  * Returns: {void}

* Returns: {GeneratedSourceInfo}

***

#### `updateHash(hash)`

##### Parameters

* `hash` {HashLike}

* Returns: {void}
