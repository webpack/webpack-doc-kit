# AbstractLibraryPlugin

<!-- type=misc -->

## Class: `AbstractLibraryPlugin`

### Type Parameters

### Constructors

#### `new AbstractLibraryPlugin(__namedParameters)`

##### Parameters

* `__namedParameters` {AbstractLibraryPluginOptions}

* Returns: {AbstractLibraryPlugin<T>}

### Properties

#### `COMMON_LIBRARY_NAME_MESSAGE`

* Type: {string}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### `chunkHash(chunk, hash, chunkHashContext, libraryContext)`

##### Parameters

* `chunk` {Chunk}
* `hash` {Hash}
* `chunkHashContext` {ChunkHashContext}
* `libraryContext` {LibraryContext<T>}

* Returns: {void}

***

#### `embedInRuntimeBailout(module, renderContext, libraryContext)`

##### Parameters

* `module` {Module}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}

* Returns: {string}

***

#### `finishEntryModule(module, entryName, libraryContext)`

##### Parameters

* `module` {Module}
* `entryName` {string}
* `libraryContext` {LibraryContext<T>}

* Returns: {void}

***

#### `parseOptions(library)`

##### Parameters

* `library` {LibraryOptions}

* Returns: {T}

***

#### `render(source, renderContext, libraryContext)`

##### Parameters

* `source` {Source}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}

* Returns: {Source}

***

#### `renderModuleContent(source, module, renderContext, libraryContext)`

##### Parameters

* `source` {Source}
* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `libraryContext` {Omit<LibraryContext<T>, "options">}

* Returns: {Source}

***

#### `renderStartup(source, module, renderContext, libraryContext)`

##### Parameters

* `source` {Source}
* `module` {Module}
* `renderContext` {StartupRenderContext}
* `libraryContext` {LibraryContext<T>}

* Returns: {Source}

***

#### `runtimeRequirements(chunk, set, libraryContext)`

##### Parameters

* `chunk` {Chunk}
* `set` {Set<string>}
* `libraryContext` {LibraryContext<T>}

* Returns: {void}

***

#### `strictRuntimeBailout(renderContext, libraryContext)`

##### Parameters

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}

* Returns: {string}
