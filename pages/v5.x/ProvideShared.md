# ProvideShared

<!-- type=misc -->

## `ProvideSharedPluginOptions`

### Properties

#### `provides`

* Type: {Provides}

Modules that should be provided as shared modules to the share scope. When provided, property name is used to match modules, otherwise this is automatically inferred from share key.

***

#### `shareScope`

* Type: {string} Optional.

Share scope name used for all provided modules (defaults to 'default').

## Class: `ProvideSharedPlugin`

### Constructors

#### `new ProvideSharedPlugin(options)`

##### Parameters

* `options` {ProvideSharedPluginOptions}

* Returns: {ProvideSharedPlugin}

### Properties

#### `options`

* Type: {ProvideSharedPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
