# library

## Class: `AbstractLibraryPlugin`

### Type Parameters

#### T

`T`

### Constructors

#### `new AbstractLibraryPlugin(__namedParameters)`

###### T

`T`
* `__namedParameters` {AbstractLibraryPluginOptions}
* Returns: {AbstractLibraryPlugin}

Creates an instance of AbstractLibraryPlugin.

Creates an instance of AbstractLibraryPlugin.

Creates an instance of AbstractLibraryPlugin.

Creates an instance of AbstractLibraryPlugin.

### Properties

* `COMMON_LIBRARY_NAME_MESSAGE` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### `chunkHash(chunk, hash, chunkHashContext, libraryContext)`

* `chunk` {Chunk}
* `hash` {Hash}
* `chunkHashContext` {ChunkHashContext}
* `libraryContext` {LibraryContext}
* Returns: {void}

Processes the provided chunk.

#### `embedInRuntimeBailout(module, renderContext, libraryContext)`

* `module` {Module}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext}
* Returns: {string}

Embed in runtime bailout.

#### `finishEntryModule(module, entryName, libraryContext)`

* `module` {Module}
* `entryName` {string}
* `libraryContext` {LibraryContext}
* Returns: {void}

Finish entry module.

#### `parseOptions(library)`

* `library` {LibraryOptions}
* Returns: {T}

Returns preprocess as needed by overriding.

#### `render(source, renderContext, libraryContext)`

* `source` {Source}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext}
* Returns: {Source}

Returns source with library export.

#### `renderModuleContent(source, module, renderContext, libraryContext)`

* `source` {Source}
* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `libraryContext` {Omit}
* Returns: {Source}

Renders module content.

#### `renderStartup(source, module, renderContext, libraryContext)`

* `source` {Source}
* `module` {Module}
* `renderContext` {StartupRenderContext}
* `libraryContext` {LibraryContext}
* Returns: {Source}

Renders source with library export.

#### `runtimeRequirements(chunk, set, libraryContext)`

* `chunk` {Chunk}
* `set` {Set}
* `libraryContext` {LibraryContext}
* Returns: {void}

Processes the provided chunk.

#### `strictRuntimeBailout(renderContext, libraryContext)`

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext}
* Returns: {string}

Strict runtime bailout.

***

## Class: `EnableLibraryPlugin`

### Constructors

#### `new EnableLibraryPlugin(type[, options])`

* `type` {string}
* `options` {EnableLibraryPluginOptions}
* Returns: {EnableLibraryPlugin}

Creates an instance of EnableLibraryPlugin.

### Properties

* `options` {EnableLibraryPluginOptions}
* `type` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `checkEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

Checks enabled.

#### Static method: `setEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

Updates enabled using the provided compiler.
