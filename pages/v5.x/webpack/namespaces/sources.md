# sources

## 
### Class: `CachedSource`

### Extends

- {Source}

### Constructors

#### `new CachedSource(source[, cachedData])`

---
### CachedSource

* `source` {Source|object}
* `cachedData` {CachedData}

* ###Returns: {CachedSource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `getCachedData()`

---
### getCachedData

* ###Returns: {CachedData}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `original()`

---
### original

* ###Returns: {Source}

#### `originalLazy()`

---
### originalLazy

* ###Returns: {Source|object}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `CompatSource`

### Extends

- {Source}

### Constructors

#### `new CompatSource(sourceLike)`

---
### CompatSource

* `sourceLike` {SourceLike}

* ###Returns: {CompatSource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

#### Static method: `from(sourceLike)`

---
### from

* `sourceLike` {SourceLike}

* ###Returns: {Source}

***

## 
### Class: `ConcatSource`

### Extends

- {Source}

### Constructors

#### `new ConcatSource(args)`

---
### ConcatSource

* `args` {ConcatSourceChild[]}

* ###Returns: {ConcatSource}

### Methods

#### `add(item)`

---
### add

* `item` {ConcatSourceChild}

* ###Returns: {void}

#### `addAllSkipOptimizing(items)`

---
### addAllSkipOptimizing

* `items` {ConcatSourceChild[]}

* ###Returns: {void}

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `getChildren()`

---
### getChildren

* ###Returns: {Source[]}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `OriginalSource`

### Extends

- {Source}

### Constructors

#### `new OriginalSource(value, name)`

---
### OriginalSource

* `value` {string|Buffer<ArrayBufferLike>}
* `name` {string}

* ###Returns: {OriginalSource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `getName()`

---
### getName

* ###Returns: {string}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, _onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `_onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `PrefixSource`

### Extends

- {Source}

### Constructors

#### `new PrefixSource(prefix, source)`

---
### PrefixSource

* `prefix` {string}
* `source` {string|Buffer<ArrayBufferLike>|Source}

* ###Returns: {PrefixSource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `getPrefix()`

---
### getPrefix

* ###Returns: {string}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `original()`

---
### original

* ###Returns: {Source}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `RawSource`

### Extends

- {Source}

### Constructors

#### `new RawSource(value[, convertToString])`

---
### RawSource

* `value` {string|Buffer<ArrayBufferLike>}
* `convertToString` {boolean}

* ###Returns: {RawSource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `isBuffer()`

---
### isBuffer

* ###Returns: {boolean}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `ReplaceSource`

### Extends

- {Source}

### Constructors

#### `new ReplaceSource(source[, name])`

---
### ReplaceSource

* `source` {Source}
* `name` {string}

* ###Returns: {ReplaceSource}

### Properties

* `Replacement` {Replacement}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `getName()`

---
### getName

* ###Returns: {string}

#### `getReplacements()`

---
### getReplacements

* ###Returns: {Replacement[]}

#### `insert(pos, newValue[, name])`

---
### insert

* `pos` {number}
* `newValue` {string}
* `name` {string}

* ###Returns: {void}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `original()`

---
### original

* ###Returns: {Source}

#### `replace(start, end, newValue[, name])`

---
### replace

* `start` {number}
* `end` {number}
* `newValue` {string}
* `name` {string}

* ###Returns: {void}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `SizeOnlySource`

### Extends

- {Source}

### Constructors

#### `new SizeOnlySource(size)`

---
### SizeOnlySource

* `size` {number}

* ###Returns: {SizeOnlySource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `Source`

### Extended by

- {RawSource}
- {OriginalSource}
- {ReplaceSource}
- {SourceMapSource}
- {ConcatSource}
- {PrefixSource}
- {CachedSource}
- {SizeOnlySource}
- {CompatSource}

### Constructors

#### `new Source()`

---
### Source

* ###Returns: {Source}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}

***

## 
### Class: `SourceMapSource`

### Extends

- {Source}

### Constructors

#### `new SourceMapSource(value, name[, sourceMap][, originalSource][, innerSourceMap][, removeOriginalSource])`

---
### SourceMapSource

* `value` {string|Buffer<ArrayBufferLike>}
* `name` {string}
* `sourceMap` {string|Buffer<ArrayBufferLike>|RawSourceMap}
* `originalSource` {string|Buffer<ArrayBufferLike>}
* `innerSourceMap` {string|Buffer<ArrayBufferLike>|RawSourceMap}
* `removeOriginalSource` {boolean}

* ###Returns: {SourceMapSource}

### Methods

#### `buffer()`

---
### buffer

* ###Returns: {Buffer}

#### `getArgsAsBuffers()`

---
### getArgsAsBuffers

* ###Returns: {Tuple<Buffer<ArrayBufferLike>, string, Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>, boolean>}

#### `map([options])`

---
### map

* `options` {MapOptions}

* ###Returns: {RawSourceMap}

#### `size()`

---
### size

* ###Returns: {number}

#### `source()`

---
### source

* ###Returns: {SourceValue}

#### `sourceAndMap([options])`

---
### sourceAndMap

* `options` {MapOptions}

* ###Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

---
### streamChunks

* `options` {StreamChunksOptions}
* `onChunk` {object}
* `onSource` {object}
* `onName` {object}

* ###Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

---
### updateHash

* `hash` {HashLike}

* ###Returns: {void}
