# schemes

## Class: `HttpUriPlugin`

### Constructors

#### `new HttpUriPlugin(options)`

* `options` {HttpUriOptions}
* Returns: {HttpUriPlugin}

### Properties

* `options` {HttpUriOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

***

## Class: `VirtualUrlPlugin`

### Constructors

#### `new VirtualUrlPlugin(modules[, scheme])`

* `modules` {VirtualModules}
* `scheme` {string}
* Returns: {VirtualUrlPlugin}

### Properties

* `modules` {NormalizedModules}
* `scheme` {string}
* `DEFAULT_SCHEME` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `findVirtualModuleConfigById(id)`

* `id` {string}
* Returns: {VirtualModuleConfig}

#### `getCacheVersion(version)`

* `version` {string|true|object}
* Returns: {string}

Get the cache version for a given version value
