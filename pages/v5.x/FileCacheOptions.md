# FileCacheOptions

<!-- type=misc -->

## `FileCacheOptions`

Options object for persistent file-based caching.

### Properties

#### `allowCollectingMemory`

* Type: {boolean} Optional.

Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost.

***

#### `buildDependencies`

* Type: {object} Optional.

Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').

##### Index Signature

\[`index`: {string}\]: {string[]}

***

#### `cacheDirectory`

* Type: {string} Optional.

Base directory for the cache (defaults to node_modules/.cache/webpack).

***

#### `cacheLocation`

* Type: {string} Optional.

Locations for the cache (defaults to cacheDirectory / name).

***

#### `compression`

* Type: {false|"gzip"|"brotli"} Optional.

Compression type used for the cache files.

***

#### `hashAlgorithm`

* Type: {string} Optional.

Algorithm used for generation the hash (see node.js crypto package).

***

#### `idleTimeout`

* Type: {number} Optional.

Time in ms after which idle period the cache storing should happen.

***

#### `idleTimeoutAfterLargeChanges`

* Type: {number} Optional.

Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time).

***

#### `idleTimeoutForInitialStore`

* Type: {number} Optional.

Time in ms after which idle period the initial cache storing should happen.

***

#### `immutablePaths`

* Type: {string|RegExp[]} Optional.

List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.

***

#### `managedPaths`

* Type: {string|RegExp[]} Optional.

List of paths that are managed by a package manager and can be trusted to not be modified otherwise.

***

#### `maxAge`

* Type: {number} Optional.

Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds).

***

#### `maxMemoryGenerations`

* Type: {number} Optional.

Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache.

***

#### `memoryCacheUnaffected`

* Type: {boolean} Optional.

Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory.

***

#### `name`

* Type: {string} Optional.

Name for the cache. Different names will lead to different coexisting caches.

***

#### `profile`

* Type: {boolean} Optional.

Track and log detailed timing information for individual cache items.

***

#### `readonly`

* Type: {boolean} Optional.

Enable/disable readonly mode.

***

#### `store`

* Type: {"pack"} Optional.

When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).

***

#### `type`

* Type: {"filesystem"}

Filesystem caching.

***

#### `version`

* Type: {string} Optional.

Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.
