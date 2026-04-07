# AsyncWebAssemblyModulesPlugin

<!-- type=misc -->

## Class: `AsyncWebAssemblyModulesPlugin`

### Constructors

#### `new AsyncWebAssemblyModulesPlugin(options)`

##### Parameters

* `options` {AsyncWebAssemblyModulesPluginOptions}

* Returns: {AsyncWebAssemblyModulesPlugin}

### Properties

#### `options`

* Type: {AsyncWebAssemblyModulesPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### `renderModule(module, renderContext, hooks)`

##### Parameters

* `module` {Module}
* `renderContext` {WebAssemblyRenderContext}
* `hooks` {CompilationHooksAsyncWebAssemblyModulesPlugin}

* Returns: {Source}

***

#### Static method: `getCompilationHooks(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {CompilationHooksAsyncWebAssemblyModulesPlugin}
