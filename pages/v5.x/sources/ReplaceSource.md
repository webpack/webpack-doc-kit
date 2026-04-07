# ReplaceSource

<!-- type=misc -->

## Class: `ReplaceSource`

* Extends: {Source}

### Constructors

#### `new ReplaceSource(source[, name])`

##### Parameters

* `source` {Source}
* `name` {string}

* Returns: {ReplaceSource}

### Properties

#### `Replacement`

* Type: {Replacement}

### Methods

#### `buffer()`

* Returns: {Buffer}

***

#### `getName()`

* Returns: {string}

***

#### `getReplacements()`

* Returns: {Replacement[]}

***

#### `insert(pos, newValue[, name])`

##### Parameters

* `pos` {number}
* `newValue` {string}
* `name` {string}

* Returns: {void}

***

#### `map([options])`

##### Parameters

* `options` {MapOptions}

* Returns: {RawSourceMap}

***

#### `original()`

* Returns: {Source}

***

#### `replace(start, end, newValue[, name])`

##### Parameters

* `start` {number}
* `end` {number}
* `newValue` {string}
* `name` {string}

* Returns: {void}

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
