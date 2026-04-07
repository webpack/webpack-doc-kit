# ConsumeShared

<!-- type=misc -->

## `ConsumeSharedPluginOptions`

Options for consuming shared modules.

### Properties

#### `consumes`

* Type: {Consumes}

Modules that should be consumed from share scope. When provided, property names are used to match requested modules in this compilation.

***

#### `shareScope`

* Type: {string} Optional.

Share scope name used for all consumed modules (defaults to 'default').

## Class: `ConsumeSharedPlugin`

### Constructors

#### `new ConsumeSharedPlugin(options)`

##### Parameters

* `options` {ConsumeSharedPluginOptions}

* Returns: {ConsumeSharedPlugin}

### Properties

#### `options`

* Type: {ConsumeSharedPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
