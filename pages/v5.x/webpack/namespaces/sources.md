# sources

## Class: `CachedSource`

### Extends

- {Source}

### Constructors

#### `new CachedSource(source[, cachedData])`

* `source` {Source|() => Source}
* `cachedData` {CachedData}
* Returns: {CachedSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `getCachedData()`

* Returns: {CachedData}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `original()`

* Returns: {Source}

#### `originalLazy()`

* Returns: {Source|() => Source}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `CompatSource`

### Extends

- {Source}

### Constructors

#### `new CompatSource(sourceLike)`

* `sourceLike` {SourceLike}
* Returns: {CompatSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

#### Static method: `from(sourceLike)`

* `sourceLike` {SourceLike}
* Returns: {Source}

***

## Class: `ConcatSource`

### Extends

- {Source}

### Constructors

#### `new ConcatSource(args)`

* `args` {ConcatSourceChild[]}
* Returns: {ConcatSource}

### Methods

#### `add(item)`

* `item` {ConcatSourceChild}
* Returns: {void}

#### `addAllSkipOptimizing(items)`

* `items` {ConcatSourceChild[]}
* Returns: {void}

#### `buffer()`

* Returns: {Buffer}

#### `getChildren()`

* Returns: {Source[]}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `OriginalSource`

### Extends

- {Source}

### Constructors

#### `new OriginalSource(value, name)`

* `value` {string|Buffer<ArrayBufferLike>}
* `name` {string}
* Returns: {OriginalSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `getName()`

* Returns: {string}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, _onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `_onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `PrefixSource`

### Extends

- {Source}

### Constructors

#### `new PrefixSource(prefix, source)`

* `prefix` {string}
* `source` {string|Buffer<ArrayBufferLike>|Source}
* Returns: {PrefixSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `getPrefix()`

* Returns: {string}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `original()`

* Returns: {Source}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `RawSource`

### Extends

- {Source}

### Constructors

#### `new RawSource(value[, convertToString])`

* `value` {string|Buffer<ArrayBufferLike>}
* `convertToString` {boolean}
* Returns: {RawSource}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `isBuffer()`

* Returns: {boolean}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `ReplaceSource`

### Extends

- {Source}

### Constructors

#### `new ReplaceSource(source[, name])`

* `source` {Source}
* `name` {string}
* Returns: {ReplaceSource}

### Properties

* `Replacement` {Replacement}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `getName()`

* Returns: {string}

#### `getReplacements()`

* Returns: {Replacement[]}

#### `insert(pos, newValue[, name])`

* `pos` {number}
* `newValue` {string}
* `name` {string}
* Returns: {void}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `original()`

* Returns: {Source}

#### `replace(start, end, newValue[, name])`

* `start` {number}
* `end` {number}
* `newValue` {string}
* `name` {string}
* Returns: {void}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `SizeOnlySource`

### Extends

- {Source}

### Constructors

#### `new SizeOnlySource(size)`

* `size` {number}
* Returns: {SizeOnlySource}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `Source`

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

* Returns: {Source}

### Methods

#### `buffer()`

* Returns: {Buffer}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}

***

## Class: `SourceMapSource`

### Extends

- {Source}

### Constructors

#### `new SourceMapSource(value, name[, sourceMap][, originalSource][, innerSourceMap][, removeOriginalSource])`

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

#### `getArgsAsBuffers()`

* Returns: {Tuple<Buffer<ArrayBufferLike>, string, Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>, boolean>}

#### `map([options])`

* `options` {MapOptions}
* Returns: {RawSourceMap}

#### `size()`

* Returns: {number}

#### `source()`

* Returns: {SourceValue}

#### `sourceAndMap([options])`

* `options` {MapOptions}
* Returns: {SourceAndMap}

#### `streamChunks(options, onChunk, onSource, onName)`

* `options` {StreamChunksOptions}
* `onChunk` {(chunk: string, generatedLine: number, generatedColumn: number, sourceIndex: number, originalLine: number, originalColumn: number, nameIndex: number) => void}
* `onSource` {(sourceIndex: number, source: string, sourceContent?: string) => void}
* `onName` {(nameIndex: number, name: string) => void}
* Returns: {GeneratedSourceInfo}

#### `updateHash(hash)`

* `hash` {HashLike}
* Returns: {void}
