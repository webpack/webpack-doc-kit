# schemes

## Class: `HttpUriPlugin`

### Constructors

#### `new HttpUriPlugin(options)`

* `options` {HttpUriOptions}
* Returns: {HttpUriPlugin}

Creates an instance of HttpUriPlugin.

### Properties

* `options` {HttpUriOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `VirtualUrlPlugin`

### Constructors

#### `new VirtualUrlPlugin(modules[, schemeOrOptions])`

* `modules` {VirtualModules}
* `schemeOrOptions` {string|Omit}
* Returns: {VirtualUrlPlugin}

Creates an instance of VirtualUrlPlugin.

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

Applies the plugin by registering its hooks on the compiler.

#### `findVirtualModuleConfigById(id)`

* `id` {string}
* Returns: {VirtualModule}

Finds virtual module config by id.

#### `getCacheVersion(version)`

* `version` {string|true|object}
* Returns: {string}

Get the cache version for a given version value
