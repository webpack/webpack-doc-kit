# MemoryCache

<!-- type=misc -->

## `MemoryCacheOptions`

Options object for in-memory caching.

### Properties

#### `cacheUnaffected`

* Type: {boolean} Optional.

Additionally cache computation of modules that are unchanged and reference only unchanged modules.

***

#### `maxGenerations`

* Type: {number} Optional.

Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).

***

#### `type`

* Type: {"memory"}

In memory caching.

## Class: `MemoryCachePlugin`

### Constructors

#### `new MemoryCachePlugin()`

* Returns: {MemoryCachePlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
