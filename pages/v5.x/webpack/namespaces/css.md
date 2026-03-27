# css

## 
### Class: `CssModulesPlugin`

### Constructors

#### `new CssModulesPlugin()`

---
### CssModulesPlugin

* ###Returns: {CssModulesPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### `getModulesInOrder(chunk, modules, compilation)`

---
### getModulesInOrder

* `chunk` {Chunk}
* `modules` {Iterable<Module, any, any>}
* `compilation` {Compilation}

* ###Returns: {Module[]}

#### `getOrderedChunkCssModules(chunk, chunkGraph, compilation)`

---
### getOrderedChunkCssModules

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `compilation` {Compilation}

* ###Returns: {CssModule[]}

#### `renderChunk(__namedParameters, hooks)`

---
### renderChunk

* `__namedParameters` {RenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}

* ###Returns: {Source}

#### Static method: `chunkHasCss(chunk, chunkGraph)`

---
### chunkHasCss

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* ###Returns: {boolean}

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

---
### getChunkFilenameTemplate

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}

* ###Returns: {TemplatePath}

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {CompilationHooksCssModulesPlugin}

#### Static method: `renderModule(module, renderContext, hooks)`

---
### renderModule

* `module` {CssModule}
* `renderContext` {ChunkRenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}

* ###Returns: {Source}
