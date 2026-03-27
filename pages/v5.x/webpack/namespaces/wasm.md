# wasm

## 
### Class: `AsyncWebAssemblyModulesPlugin`

### Constructors

#### `new AsyncWebAssemblyModulesPlugin(options)`

---
### AsyncWebAssemblyModulesPlugin

* `options` {AsyncWebAssemblyModulesPluginOptions}

* ###Returns: {AsyncWebAssemblyModulesPlugin}

### Properties

* `options` {AsyncWebAssemblyModulesPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### `renderModule(module, renderContext, hooks)`

---
### renderModule

* `module` {Module}
* `renderContext` {WebAssemblyRenderContext}
* `hooks` {CompilationHooksAsyncWebAssemblyModulesPlugin}

* ###Returns: {Source}

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {CompilationHooksAsyncWebAssemblyModulesPlugin}

***

## 
### Class: `EnableWasmLoadingPlugin`

### Constructors

#### `new EnableWasmLoadingPlugin(type)`

---
### EnableWasmLoadingPlugin

* `type` {string}

* ###Returns: {EnableWasmLoadingPlugin}

### Properties

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
