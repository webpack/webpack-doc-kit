# css

## Class: `CssModulesPlugin`

### Constructors

#### `new CssModulesPlugin()`

* Returns: {CssModulesPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `getModulesInOrder(chunk, modules, compilation)`

* `chunk` {Chunk}
* `modules` {Iterable<Module, any, any>}
* `compilation` {Compilation}
* Returns: {Module[]}

#### `getOrderedChunkCssModules(chunk, chunkGraph, compilation)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `compilation` {Compilation}
* Returns: {CssModule[]}

#### `renderChunk(__namedParameters, hooks)`

* `__namedParameters` {RenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}
* Returns: {Source}

#### Static method: `chunkHasCss(chunk, chunkGraph)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {TemplatePath}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksCssModulesPlugin}

#### Static method: `renderModule(module, renderContext, hooks)`

* `module` {CssModule}
* `renderContext` {ChunkRenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}
* Returns: {Source}
