# library

## 
### Class: `AbstractLibraryPlugin`

### Type Parameters

#### T

`T`

### Constructors

#### `new AbstractLibraryPlugin(__namedParameters)`

---
### AbstractLibraryPlugin

###### T

`T`

* `__namedParameters` {AbstractLibraryPluginOptions}

* ###Returns: {AbstractLibraryPlugin<T>}

### Properties

* `COMMON_LIBRARY_NAME_MESSAGE` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### `chunkHash(chunk, hash, chunkHashContext, libraryContext)`

---
### chunkHash

* `chunk` {Chunk}
* `hash` {Hash}
* `chunkHashContext` {ChunkHashContext}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {void}

#### `embedInRuntimeBailout(module, renderContext, libraryContext)`

---
### embedInRuntimeBailout

* `module` {Module}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {string}

#### `finishEntryModule(module, entryName, libraryContext)`

---
### finishEntryModule

* `module` {Module}
* `entryName` {string}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {void}

#### `parseOptions(library)`

---
### parseOptions

* `library` {LibraryOptions}

* ###Returns: {T}

#### `render(source, renderContext, libraryContext)`

---
### render

* `source` {Source}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {Source}

#### `renderModuleContent(source, module, renderContext, libraryContext)`

---
### renderModuleContent

* `source` {Source}
* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `libraryContext` {Omit<LibraryContext<T>, "options">}

* ###Returns: {Source}

#### `renderStartup(source, module, renderContext, libraryContext)`

---
### renderStartup

* `source` {Source}
* `module` {Module}
* `renderContext` {StartupRenderContext}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {Source}

#### `runtimeRequirements(chunk, set, libraryContext)`

---
### runtimeRequirements

* `chunk` {Chunk}
* `set` {Set<string>}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {void}

#### `strictRuntimeBailout(renderContext, libraryContext)`

---
### strictRuntimeBailout

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `libraryContext` {LibraryContext<T>}

* ###Returns: {string}

***

## 
### Class: `EnableLibraryPlugin`

### Constructors

#### `new EnableLibraryPlugin(type[, options])`

---
### EnableLibraryPlugin

* `type` {string}
* `options` {EnableLibraryPluginOptions}

* ###Returns: {EnableLibraryPlugin}

### Properties

* `options` {EnableLibraryPluginOptions}
* `type` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `checkEnabled(compiler, type)`

---
### checkEnabled

* `compiler` {Compiler}
* `type` {string}

* ###Returns: {void}

#### Static method: `setEnabled(compiler, type)`

---
### setEnabled

* `compiler` {Compiler}
* `type` {string}

* ###Returns: {void}
