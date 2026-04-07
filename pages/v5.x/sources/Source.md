# Source

<!-- type=misc -->

## Class: `Source`

### Constructors

#### `new Source()`

* Returns: {Source}

### Methods

#### `buffer()`

* Returns: {Buffer}

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

#### `updateHash(hash)`

##### Parameters

* `hash` {HashLike}

* Returns: {void}

## `SourceMapDevToolPluginOptions`

### Properties

#### `append`

* Type: {string|false|TemplatePathFn} Optional.

Appends the given value to the original asset. Usually the #sourceMappingURL comment. [url] is replaced with a URL to the source map file. false disables the appending.

#### `columns`

* Type: {boolean} Optional.

Indicates whether column mappings should be used (defaults to true).

#### `debugIds`

* Type: {boolean} Optional.

Emit debug IDs into source and SourceMap.

#### `exclude`

* Type: {Rules} Optional.

Exclude modules that match the given value from source map generation.

#### `fallbackModuleFilenameTemplate`

* Type: {string|ModuleFilenameTemplateFunction} Optional.

Generator string or function to create identifiers of modules for the 'sources' array in the SourceMap used only if 'moduleFilenameTemplate' would result in a conflict.

#### `fileContext`

* Type: {string} Optional.

Path prefix to which the [file] placeholder is relative to.

#### `filename`

* Type: {string|false} Optional.

Defines the output filename of the SourceMap (will be inlined if no value is provided).

#### `ignoreList`

* Type: {Rules} Optional.

Decide whether to ignore source files that match the specified value in the SourceMap.

#### `include`

* Type: {Rules} Optional.

Include source maps for module paths that match the given value.

#### `module`

* Type: {boolean} Optional.

Indicates whether SourceMaps from loaders should be used (defaults to true).

#### `moduleFilenameTemplate`

* Type: {string|ModuleFilenameTemplateFunction} Optional.

Generator string or function to create identifiers of modules for the 'sources' array in the SourceMap.

#### `namespace`

* Type: {string} Optional.

Namespace prefix to allow multiple webpack roots in the devtools.

#### `noSources`

* Type: {boolean} Optional.

Omit the 'sourceContents' array from the SourceMap.

#### `publicPath`

* Type: {string} Optional.

Provide a custom public path for the SourceMapping comment.

#### `sourceRoot`

* Type: {string} Optional.

Provide a custom value for the 'sourceRoot' property in the SourceMap.

#### `test`

* Type: {Rules} Optional.

Include source maps for modules based on their extension (defaults to .js and .css).

## Class: `SourceMapDevToolPlugin`

### Constructors

#### `new SourceMapDevToolPlugin([options])`

##### Parameters

* `options` {SourceMapDevToolPluginOptions}

* Returns: {SourceMapDevToolPlugin}

### Properties

#### `fallbackModuleFilenameTemplate`

* Type: {DevtoolFallbackModuleFilenameTemplate}

#### `moduleFilenameTemplate`

* Type: {DevtoolModuleFilenameTemplate}

#### `namespace`

* Type: {string}

#### `options`

* Type: {SourceMapDevToolPluginOptions}

#### `sourceMapFilename`

* Type: {string|false} Optional.

#### `sourceMappingURLComment`

* Type: {string|false|Function}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

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
