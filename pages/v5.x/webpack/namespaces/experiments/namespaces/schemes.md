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

#### `new VirtualUrlPlugin(modules[, schemeOrOptions])`

* `modules` {VirtualModules}
* `schemeOrOptions` {string|Omit<VirtualUrlOptions, "modules">}
* Returns: {VirtualUrlPlugin}

### Properties

* `context` {string}
* `modules` {NormalizedModules}
* `options` {VirtualUrlOptions}
* `scheme` {string}
* `DEFAULT_SCHEME` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Apply the plugin

#### `findVirtualModuleConfigById(id)`

* `id` {string}
* Returns: {VirtualModule}

#### `getCacheVersion(version)`

* `version` {string|true|() => string}
* Returns: {string}

Get the cache version for a given version value
