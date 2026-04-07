# OriginalSource

<!-- type=misc -->

## Class: `OriginalSource`

* Extends: {Source}

### Constructors

#### `new OriginalSource(value, name)`

##### Parameters

* `value` {string|Buffer<ArrayBufferLike>}
* `name` {string}

* Returns: {OriginalSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

***

#### `getName()`

* Returns: {string}

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

#### `streamChunks(options, onChunk, onSource, _onName)`

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
* `_onName` {Function}
  * `nameIndex` {number}
  * `name` {string}
  * Returns: {void}

* Returns: {GeneratedSourceInfo}

***

#### `updateHash(hash)`

##### Parameters

* `hash` {HashLike}

* Returns: {void}
