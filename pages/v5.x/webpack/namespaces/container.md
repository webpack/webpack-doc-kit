# container

## Class: `ContainerPlugin`

### Constructors

#### `new ContainerPlugin(options)`

* `options` {ContainerPluginOptions}
* Returns: {ContainerPlugin}

Creates an instance of ContainerPlugin.

### Properties

* `options` {ContainerPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ContainerReferencePlugin`

### Constructors

#### `new ContainerReferencePlugin(options)`

* `options` {ContainerReferencePluginOptions}
* Returns: {ContainerReferencePlugin}

Creates an instance of ContainerReferencePlugin.

### Properties

* `options` {ContainerReferencePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ModuleFederationPlugin`

### Constructors

#### `new ModuleFederationPlugin(options)`

* `options` {ModuleFederationPluginOptions}
* Returns: {ModuleFederationPlugin}

Creates an instance of ModuleFederationPlugin.

### Properties

* `options` {ModuleFederationPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

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
* `options` {ContainerOptionsFormat}
* Returns: {Record}
