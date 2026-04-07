# Cache

<!-- type=misc -->

## Class: `Cache`

### Constructors

#### `new Cache()`

* Returns: {CacheClass}

### Properties

#### `hooks`

* Type: {object}

* `beginIdle` {SyncHook<[]>}
* `endIdle` {AsyncParallelHook<[]>}
* `get` {AsyncSeriesBailHook<[string, Etag, GotHandler<any>[]], any>}
* `shutdown` {AsyncParallelHook<[]>}
* `store` {AsyncParallelHook<[string, Etag, any]>}
* `storeBuildDependencies` {AsyncParallelHook<[Iterable<string, any, any>]>}

***

#### `STAGE_DEFAULT`

* Type: {number}

***

#### `STAGE_DISK`

* Type: {number}

***

#### `STAGE_MEMORY`

* Type: {number}

***

#### `STAGE_NETWORK`

* Type: {number}

### Methods

#### `beginIdle()`

* Returns: {void}

***

#### `endIdle(callback)`

##### Parameters

* `callback` {CallbackCacheCache<void>}

* Returns: {void}

***

#### `get(identifier, etag, callback)`

##### Parameters

* `identifier` {string}
* `etag` {Etag}
* `callback` {CallbackCacheCache<T>}

* Returns: {void}

***

#### `shutdown(callback)`

##### Parameters

* `callback` {CallbackCacheCache<void>}

* Returns: {void}

***

#### `store(identifier, etag, data, callback)`

##### Parameters

* `identifier` {string}
* `etag` {Etag}
* `data` {T}
* `callback` {CallbackCacheCache<void>}

* Returns: {void}

***

#### `storeBuildDependencies(dependencies, callback)`

##### Parameters

* `dependencies` {Iterable<string>}
* `callback` {CallbackCacheCache<void>}

* Returns: {void}

After this method has succeeded the cache can only be restored when build dependencies are
