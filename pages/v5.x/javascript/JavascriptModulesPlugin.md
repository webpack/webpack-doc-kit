# JavascriptModulesPlugin

<!-- type=misc -->

## Class: `JavascriptModulesPlugin`

### Constructors

#### `new JavascriptModulesPlugin([options])`

##### Parameters

* `options` {object}

* Returns: {JavascriptModulesPlugin}

### Properties

#### `options`

* Type: {object}

***

#### `chunkHasJs`

* Type: {Function}

##### Parameters

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* Returns: {boolean}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### `renderBootstrap(renderContext, hooks)`

##### Parameters

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* Returns: {Bootstrap}

***

#### `renderChunk(renderContext, hooks)`

##### Parameters

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* Returns: {Source}

***

#### `renderMain(renderContext, hooks, compilation)`

##### Parameters

* `renderContext` {MainRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* `compilation` {Compilation}

* Returns: {Source}

***

#### `renderModule(module, renderContext, hooks)`

##### Parameters

* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* Returns: {Source}

***

#### `renderRequire(renderContext, hooks)`

##### Parameters

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* Returns: {string}

***

#### `updateHashWithBootstrap(hash, renderContext, hooks)`

##### Parameters

* `hash` {Hash}
* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* Returns: {void}

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

* Returns: {CompilationHooksJavascriptModulesPlugin}
