# css

## Class: `CssModulesPlugin`

### Constructors

#### `new CssModulesPlugin()`

* Returns: {CssModulesPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### `getModulesInOrder(chunk, modules, compilation)`

* `chunk` {Chunk}
* `modules` {Iterable}
* `compilation` {Compilation}
* Returns: {Module[]}

Gets modules in order.

#### `getOrderedChunkCssModules(chunk, chunkGraph, compilation)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `compilation` {Compilation}
* Returns: {CssModule[]}

Gets ordered chunk css modules.

#### `renderChunk(__namedParameters, hooks)`

* `__namedParameters` {RenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}
* Returns: {Source}

Renders generated source.

#### Static method: `chunkHasCss(chunk, chunkGraph)`

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Returns true, when the chunk has css.

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {TemplatePath}

Gets chunk filename template.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksCssModulesPlugin}

Returns the attached hooks.

#### Static method: `renderModule(module, renderContext, hooks)`

* `module` {CssModule}
* `renderContext` {ChunkRenderContextCssModulesPlugin}
* `hooks` {CompilationHooksCssModulesPlugin}
* Returns: {Source}

Renders css module source.
