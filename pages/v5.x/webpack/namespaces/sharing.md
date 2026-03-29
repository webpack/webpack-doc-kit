# sharing

## Class: `ConsumeSharedPlugin`

### Constructors

#### `new ConsumeSharedPlugin(options)`

* `options` {ConsumeSharedPluginOptions}
* Returns: {ConsumeSharedPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `ProvideSharedPlugin`

### Constructors

#### `new ProvideSharedPlugin(options)`

* `options` {ProvideSharedPluginOptions}
* Returns: {ProvideSharedPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `SharePlugin`

### Constructors

#### `new SharePlugin(options)`

* `options` {SharePluginOptions}
* Returns: {SharePlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## `scope`

> `const` **scope**: {object}

#### T

`T`
* `scope` {string}
* `options` {ContainerOptionsFormat<T>}
* Returns: {Record<string, string|string[]|T>}
