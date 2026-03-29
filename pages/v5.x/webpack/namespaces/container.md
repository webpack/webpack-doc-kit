# container

## Class: `ContainerPlugin`

### Constructors

#### `new ContainerPlugin(options)`

* `options` {ContainerPluginOptions}
* Returns: {ContainerPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ContainerReferencePlugin`

### Constructors

#### `new ContainerReferencePlugin(options)`

* `options` {ContainerReferencePluginOptions}
* Returns: {ContainerReferencePlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ModuleFederationPlugin`

### Constructors

#### `new ModuleFederationPlugin(options)`

* `options` {ModuleFederationPluginOptions}
* Returns: {ModuleFederationPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksModuleFederationPlugin}

Get the compilation hooks associated with this plugin.

***

## `scope`

> `const` **scope**: {object}

#### T

`T`
* `scope` {string}
* `options` {ContainerOptionsFormat<T>}
* Returns: {Record<string, string|string[]|T>}
