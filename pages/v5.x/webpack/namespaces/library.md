# library

## Class: `AbstractLibraryPlugin`

### Type Parameters

### Constructors

#### `new AbstractLibraryPlugin(__namedParameters)`

* `__namedParameters` {AbstractLibraryPluginOptions}
* Returns: {AbstractLibraryPlugin<T>}

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
* `libraryContext` {LibraryContext<T>}
* Returns: {void}

#### `embedInRuntimeBailout(module, renderContext, libraryContext)`

* `module` {Module}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}
* Returns: {string}

#### `finishEntryModule(module, entryName, libraryContext)`

* `module` {Module}
* `entryName` {string}
* `libraryContext` {LibraryContext<T>}
* Returns: {void}

#### `parseOptions(library)`

* `library` {LibraryOptions}
* Returns: {T}

#### `render(source, renderContext, libraryContext)`

* `source` {Source}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}
* Returns: {Source}

#### `renderModuleContent(source, module, renderContext, libraryContext)`

* `source` {Source}
* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `libraryContext` {Omit<LibraryContext<T>, "options">}
* Returns: {Source}

#### `renderStartup(source, module, renderContext, libraryContext)`

* `source` {Source}
* `module` {Module}
* `renderContext` {StartupRenderContext}
* `libraryContext` {LibraryContext<T>}
* Returns: {Source}

#### `runtimeRequirements(chunk, set, libraryContext)`

* `chunk` {Chunk}
* `set` {Set<string>}
* `libraryContext` {LibraryContext<T>}
* Returns: {void}

#### `strictRuntimeBailout(renderContext, libraryContext)`

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}
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
