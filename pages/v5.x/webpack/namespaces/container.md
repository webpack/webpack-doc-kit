# container

## Class: `ContainerPlugin`

### Constructors

#### `new ContainerPlugin(options)`

* `options` {ContainerPluginOptions}
* Returns: {ContainerPlugin}

### Properties

* `options` {ContainerPluginOptions}

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

### Properties

* `options` {ContainerReferencePluginOptions}

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

### Properties

* `options` {ModuleFederationPluginOptions}

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

* `scope` {string}
* `options` {ContainerOptionsFormat<T>}
* Returns: {Record<string, string|string[]|T>}
