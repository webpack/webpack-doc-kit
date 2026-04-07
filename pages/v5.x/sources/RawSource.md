# RawSource

<!-- type=misc -->

## Class: `RawSource`

* Extends: {Source}

### Constructors

#### `new RawSource(value[, convertToString])`

##### Parameters

* `value` {string|Buffer<ArrayBufferLike>}
* `convertToString` {boolean}

* Returns: {RawSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

***

#### `isBuffer()`

* Returns: {boolean}

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
