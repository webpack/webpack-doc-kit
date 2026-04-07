# CachedSource

<!-- type=misc -->

## Class: `CachedSource`

* Extends: {Source}

### Constructors

#### `new CachedSource(source[, cachedData])`

##### Parameters

* `source` {Source|Function}
* `cachedData` {CachedData}

* Returns: {CachedSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

***

#### `getCachedData()`

* Returns: {CachedData}

***

#### `map([options])`

##### Parameters

* `options` {MapOptions}

* Returns: {RawSourceMap}

***

#### `original()`

* Returns: {Source}

***

#### `originalLazy()`

* Returns: {Source|Function}

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
