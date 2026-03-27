# schemes

## 
### Class: `HttpUriPlugin`

### Constructors

#### `new HttpUriPlugin(options)`

---
### HttpUriPlugin

* `options` {HttpUriOptions}

* ###Returns: {HttpUriPlugin}

### Properties

* `options` {HttpUriOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `VirtualUrlPlugin`

### Constructors

#### `new VirtualUrlPlugin(modules[, schemeOrOptions])`

---
### VirtualUrlPlugin

* `modules` {VirtualModules}
* `schemeOrOptions` {string|Omit<VirtualUrlOptions, "modules">}

* ###Returns: {VirtualUrlPlugin}

### Properties

* `context` {string}
* `modules` {NormalizedModules}
* `options` {VirtualUrlOptions}
* `scheme` {string}
* `DEFAULT_SCHEME` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### `findVirtualModuleConfigById(id)`

---
### findVirtualModuleConfigById

* `id` {string}

* ###Returns: {VirtualModule}

#### `getCacheVersion(version)`

---
### getCacheVersion

* `version` {string|true|object}

* ###Returns: {string}

Get the cache version for a given version value
