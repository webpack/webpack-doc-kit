# wasm

## Class: `AsyncWebAssemblyModulesPlugin`

### Constructors

#### `new AsyncWebAssemblyModulesPlugin(options)`

* `options` {AsyncWebAssemblyModulesPluginOptions}
* Returns: {AsyncWebAssemblyModulesPlugin}

Creates an instance of AsyncWebAssemblyModulesPlugin.

### Properties

* `options` {AsyncWebAssemblyModulesPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### `renderModule(module, renderContext, hooks)`

* `module` {Module}
* `renderContext` {WebAssemblyRenderContext}
* `hooks` {CompilationHooksAsyncWebAssemblyModulesPlugin}
* Returns: {Source}

Renders the newly generated source from rendering.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksAsyncWebAssemblyModulesPlugin}

Returns the attached hooks.

***

## Class: `EnableWasmLoadingPlugin`

### Constructors

#### `new EnableWasmLoadingPlugin(type)`

* `type` {string}
* Returns: {EnableWasmLoadingPlugin}

Stores the wasm loading backend name that should be enabled for the
compiler.

### Properties

* `type` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Enables the requested wasm loading backend once and applies the
environment-specific plugins that provide its parser, generator, and
runtime support.

#### Static method: `checkEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

Verifies that a wasm loading type has been enabled before code generation
attempts to use it.

#### Static method: `setEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

Marks a custom or built-in wasm loading type as enabled for the compiler
without applying additional built-in behavior.
