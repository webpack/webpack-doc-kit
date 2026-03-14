# library

## Class: `AbstractLibraryPlugin`

### Type Parameters

#### T

`T`

### Constructors

#### `new AbstractLibraryPlugin(options)`

###### T

`T`
* `options` {AbstractLibraryPluginOptions}
* Returns: {AbstractLibraryPlugin}

### Properties

* `COMMON_LIBRARY_NAME_MESSAGE` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `chunkHash(chunk, hash, chunkHashContext, libraryContext)`

* `chunk` {Chunk}
* `hash` {Hash}
* `chunkHashContext` {ChunkHashContext}
* `libraryContext` {LibraryContext}
* Returns: {void}

#### `embedInRuntimeBailout(module, renderContext, libraryContext)`

* `module` {Module}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext}
* Returns: {string}

#### `finishEntryModule(module, entryName, libraryContext)`

* `module` {Module}
* `entryName` {string}
* `libraryContext` {LibraryContext}
* Returns: {void}

#### `parseOptions(library)`

* `library` {LibraryOptions}
* Returns: {T}

#### `render(source, renderContext, libraryContext)`

* `source` {Source}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext}
* Returns: {Source}

#### `renderModuleContent(source, module, renderContext, libraryContext)`

* `source` {Source}
* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `libraryContext` {Omit}
* Returns: {Source}

#### `renderStartup(source, module, renderContext, libraryContext)`

* `source` {Source}
* `module` {Module}
* `renderContext` {StartupRenderContext}
* `libraryContext` {LibraryContext}
* Returns: {Source}

#### `runtimeRequirements(chunk, set, libraryContext)`

* `chunk` {Chunk}
* `set` {Set}
* `libraryContext` {LibraryContext}
* Returns: {void}

#### `strictRuntimeBailout(renderContext, libraryContext)`

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext}
* Returns: {string}

***

## Class: `EnableLibraryPlugin`

### Constructors

#### `new EnableLibraryPlugin(type[, options])`

* `type` {string}
* `options` {EnableLibraryPluginOptions}
* Returns: {EnableLibraryPlugin}

### Properties

* `options` {EnableLibraryPluginOptions}
* `type` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `checkEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

#### Static method: `setEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}
