# SharePlugin

<!-- type=misc -->

## Class: `SharePlugin`

### Constructors

#### `new SharePlugin(options)`

##### Parameters

* `options` {SharePluginOptions}

* Returns: {SharePlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `SharePluginOptions`

Options for shared modules.

### Properties

#### `shared`

* Type: {Shared}

Modules that should be shared in the share scope. When provided, property names are used to match requested modules in this compilation.

#### `shareScope`

* Type: {string} Optional.

Share scope name used for all shared modules (defaults to 'default').
