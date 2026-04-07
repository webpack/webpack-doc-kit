# VirtualUrlPlugin

<!-- type=misc -->

## Class: `VirtualUrlPlugin`

### Constructors

#### `new VirtualUrlPlugin(modules[, schemeOrOptions])`

##### Parameters

* `modules` {VirtualModules}
* `schemeOrOptions` {string|Omit<VirtualUrlOptions, "modules">}

* Returns: {VirtualUrlPlugin}

### Properties

#### `context`

* Type: {string} Optional.

***

#### `modules`

* Type: {NormalizedModules}

***

#### `options`

* Type: {VirtualUrlOptions}

***

#### `scheme`

* Type: {string}

***

#### `DEFAULT_SCHEME`

* Type: {string}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### `findVirtualModuleConfigById(id)`

##### Parameters

* `id` {string}

* Returns: {VirtualModule}

***

#### `getCacheVersion(version)`

##### Parameters

* `version` {string|true|Function}

* Returns: {string}

Get the cache version for a given version value

## `VirtualUrlPluginOptions`

* Type: {VirtualUrlOptions}
