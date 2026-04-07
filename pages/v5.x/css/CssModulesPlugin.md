# CssModulesPlugin

<!-- type=misc -->

## Class: `CssModulesPlugin`

### Constructors

#### `new CssModulesPlugin()`

* Returns: {CssModulesPlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### `getModulesInOrder(chunk, modules, compilation)`

##### Parameters

* `chunk` {Chunk}
* `modules` {Iterable<Module, any, any>}
* `compilation` {Compilation}

* Returns: {Module[]}

***

#### `getOrderedChunkCssModules(chunk, chunkGraph, compilation)`

##### Parameters

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `compilation` {Compilation}

* Returns: {CssModule[]}

***

#### `renderChunk(__namedParameters, hooks)`

##### Parameters

* `__namedParameters` {RenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}

* Returns: {Source}

***

#### Static method: `chunkHasCss(chunk, chunkGraph)`

##### Parameters

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* Returns: {boolean}

***

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

##### Parameters

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}

* Returns: {TemplatePath}

***

#### Static method: `getCompilationHooks(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {CompilationHooksCssModulesPlugin}

***

#### Static method: `renderModule(module, renderContext, hooks)`

##### Parameters

* `module` {CssModule}
* `renderContext` {ChunkRenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}

* Returns: {Source}
