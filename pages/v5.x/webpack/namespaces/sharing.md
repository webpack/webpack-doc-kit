# sharing

## Class: `ConsumeSharedPlugin`

### Constructors

#### `new ConsumeSharedPlugin(options)`

* `options` {ConsumeSharedPluginOptions}
* Returns: {ConsumeSharedPlugin}

### Properties

* `options` {ConsumeSharedPluginOptions}

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

### Properties

* `options` {ProvideSharedPluginOptions}

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

> `const` **scope**: {(scope: string, options: ContainerOptionsFormat<T>) => Record<string, string|string[]|T>}

* `T`
* `scope` {string}
* `options` {ContainerOptionsFormat<T>}
* Returns: {Record<string, string|string[]|T>}
