# container

## 
### Class: `ContainerPlugin`

### Constructors

#### `new ContainerPlugin(options)`

---
### ContainerPlugin

* `options` {ContainerPluginOptions}

* ###Returns: {ContainerPlugin}

### Properties

* `options` {ContainerPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ContainerReferencePlugin`

### Constructors

#### `new ContainerReferencePlugin(options)`

---
### ContainerReferencePlugin

* `options` {ContainerReferencePluginOptions}

* ###Returns: {ContainerReferencePlugin}

### Properties

* `options` {ContainerReferencePluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ModuleFederationPlugin`

### Constructors

#### `new ModuleFederationPlugin(options)`

---
### ModuleFederationPlugin

* `options` {ModuleFederationPluginOptions}

* ###Returns: {ModuleFederationPlugin}

### Properties

* `options` {ModuleFederationPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {CompilationHooksModuleFederationPlugin}

Get the compilation hooks associated with this plugin.

***

## 
### `scope`

> `const` **scope**: {object}

---
### __type

#### T

`T`

* `scope` {string}
* `options` {ContainerOptionsFormat<T>}

* ###Returns: {Record<string, string|string[]|T>}
