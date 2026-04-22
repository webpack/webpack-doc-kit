# webpack

## Namespaces

- [cache](webpack/namespaces/cache.md)
- [cli](webpack/namespaces/cli.md)
- [config](webpack/namespaces/config.md)
- [container](webpack/namespaces/container.md)
- [css](webpack/namespaces/css.md)
- [debug](webpack/namespaces/debug.md)
- [dependencies](webpack/namespaces/dependencies.md)
- [electron](webpack/namespaces/electron.md)
- [esm](webpack/namespaces/esm.md)
- [experiments](webpack/namespaces/experiments/index.md)
- [ids](webpack/namespaces/ids.md)
- [javascript](webpack/namespaces/javascript.md)
- [library](webpack/namespaces/library.md)
- [ModuleFilenameHelpers](webpack/namespaces/ModuleFilenameHelpers.md)
- [node](webpack/namespaces/node.md)
- [OptimizationStages](webpack/namespaces/OptimizationStages.md)
- [optimize](webpack/namespaces/optimize/index.md)
- [prefetch](webpack/namespaces/prefetch.md)
- [runtime](webpack/namespaces/runtime.md)
- [RuntimeGlobals](webpack/namespaces/RuntimeGlobals.md)
- [sharing](webpack/namespaces/sharing.md)
- [sources](webpack/namespaces/sources.md)
- [util](webpack/namespaces/util/index.md)
- [wasm](webpack/namespaces/wasm.md)
- [web](webpack/namespaces/web.md)
- [webworker](webpack/namespaces/webworker.md)

## Class: `AsyncDependenciesBlock`

### Extends

- {DependenciesBlock}

### Constructors

#### `new AsyncDependenciesBlock(groupOptions[, loc][, request])`

* `groupOptions` {string|GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}
* Returns: {AsyncDependenciesBlock}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `chunkName` {string}
* `circular` {boolean}
* `dependencies` {Dependency[]}
* `groupOptions` {GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `module` {any}
* `parent` {DependenciesBlock}
* `request` {string}

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

***

## Class: `AutomaticPrefetchPlugin`

### Constructors

#### `new AutomaticPrefetchPlugin()`

* Returns: {AutomaticPrefetchPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Registers hooks that remember previously built normal modules and enqueue
them as `PrefetchDependency` requests during the next make phase.

***

## Class: `BannerPlugin`

### Constructors

#### `new BannerPlugin(options)`

* `options` {BannerPluginArgument}
* Returns: {BannerPlugin}

Normalizes banner options and compiles the configured banner source into a
function that can render per-asset banner text.

### Properties

* `banner` {object}
* `options` {BannerPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Validates the configured options and injects rendered banner comments into
matching compilation assets at the configured process-assets stage.

***

## Class: `Cache`

### Constructors

#### `new Cache()`

* Returns: {CacheClass}

Initializes the cache lifecycle hooks implemented by cache backends.

### Properties

* `hooks` {object}
* `STAGE_DEFAULT` {number}
* `STAGE_DISK` {number}
* `STAGE_MEMORY` {number}
* `STAGE_NETWORK` {number}

### Methods

#### `beginIdle()`

* Returns: {void}

Signals that webpack is entering an idle phase and cache backends may flush
or compact pending work.

#### `endIdle(callback)`

* `callback` {CallbackCacheCache}
* Returns: {void}

Signals that webpack is leaving the idle phase and waits for cache
backends to finish any asynchronous resume work.

#### `get(identifier, etag, callback)`

###### T

`T`
* `identifier` {string}
* `etag` {Etag}
* `callback` {CallbackCacheCache}
* Returns: {void}

Retrieves a cached value and lets registered `gotHandlers` observe the
result before the caller receives it.

#### `shutdown(callback)`

* `callback` {CallbackCacheCache}
* Returns: {void}

Shuts down every registered cache backend and waits for cleanup to finish.

#### `store(identifier, etag, data, callback)`

###### T

`T`
* `identifier` {string}
* `etag` {Etag}
* `data` {T}
* `callback` {CallbackCacheCache}
* Returns: {void}

Stores a cache entry for the identifier and etag through the registered
cache backend hooks.

#### `storeBuildDependencies(dependencies, callback)`

* `dependencies` {Iterable}
* `callback` {CallbackCacheCache}
* Returns: {void}

Persists the set of build dependencies required to determine whether the
cache can be restored in a future compilation.

***

## Class: `Chunk`

### Extended by

- {HotUpdateChunk}

### Constructors

#### `new Chunk([name][, backCompat])`

* `name` {string}
* `backCompat` {boolean}
* Returns: {Chunk}

Creates an instance of Chunk.

### Properties

* `auxiliaryFiles` {Set}
* `chunkReason` {string}
* `contentHash` {Record}
* `cssFilenameTemplate` {string|object}
* `debugId` {number}
* `entryModule` {Module} Returns entry module.
* `extraAsync` {boolean}
* `filenameTemplate` {string|object}
* `files` {Set<string>}
* `groupsIterable` {SortableSet<ChunkGroup>} Gets groups iterable.
* `hash` {string}
* `id` {string|number}
* `idNameHints` {SortableSet}
* `ids` {ChunkId[]}
* `modulesIterable` {Iterable<Module>} 
* `name` {string}
* `preventIntegration` {boolean}
* `rendered` {boolean}
* `renderedHash` {string}
* `runtime` {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

Adds the provided chunk group to the chunk.

#### `addModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {boolean}

Adds the provided module to the chunk.

#### `canBeInitial()`

* Returns: {boolean}

Checks whether it can be initial.

#### `canBeIntegrated(otherChunk)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* Returns: {boolean}

Checks whether this chunk can be integrated with another chunk.

#### `compareTo(otherChunk)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* Returns: {-1|0|1}

Compares this chunk with another chunk.

#### `containsModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {boolean}

Checks whether this chunk contains the module.

#### `disconnectFromGroups()`

* Returns: {void}

Disconnects from groups.

#### `getAllAsyncChunks()`

* Returns: {Set}

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

#### `getAllInitialChunks()`

* Returns: {Set}

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set}

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

#### `getAllReferencedChunks()`

* Returns: {Set}

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

* `chunkGraph` {ChunkGraph}
* `filterFn` {object}
* Returns: {Record}

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {ChunkChildIdsByOrdersMapByData}

Gets child ids by orders map.

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* Returns: {ChunkChildOfTypeInOrder[]}

Gets children of type in order.

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

* `realHash` {boolean}
* Returns: {ChunkMaps}

Returns the chunk map information.

#### `getChunkModuleMaps(filterFn)`

> Stability: 0 - Deprecated

* `filterFn` {object}
* Returns: {ChunkModuleMaps}

Gets chunk module maps.

#### `getEntryOptions()`

* Returns: {EntryOptions}

Gets entry options.

#### `getModules()`

> Stability: 0 - Deprecated

* Returns: {Module[]}

Returns the modules for this chunk.

#### `getNumberOfGroups()`

* Returns: {number}

Gets number of groups.

#### `getNumberOfModules()`

> Stability: 0 - Deprecated

* Returns: {number}

Gets the number of modules in this chunk.

#### `hasAsyncChunks()`

* Returns: {boolean}

Checks whether this chunk has async chunks.

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {boolean}

Checks whether this chunk contains the chunk graph.

#### `hasEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

Checks whether this chunk has an entry module.

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

> Stability: 0 - Deprecated

* `filterFn` {object}
* `filterChunkFn` {object}
* Returns: {boolean}

Checks whether this chunk contains a matching module in the graph.

#### `hasRuntime()`

* Returns: {boolean}

Checks whether this chunk has runtime.

#### `integrate(otherChunk)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* Returns: {boolean}

Integrates another chunk into this chunk when possible.

#### `integratedSize(otherChunk, options)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

Returns the integrated size with another chunk.

#### `isEmpty()`

> Stability: 0 - Deprecated

* Returns: {boolean}

Checks whether this chunk is empty.

#### `isInGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

Checks whether this chunk is in group.

#### `isOnlyInitial()`

* Returns: {boolean}

Checks whether this chunk is only initial.

#### `modulesSize()`

> Stability: 0 - Deprecated

* Returns: {number}

Returns the total size of all modules in this chunk.

#### `moveModule(module, otherChunk)`

> Stability: 0 - Deprecated

* `module` {Module}
* `otherChunk` {Chunk}
* Returns: {void}

Moves a module from this chunk to another chunk.

#### `remove()`

> Stability: 0 - Deprecated

* Returns: {void}

Removes this chunk from the chunk graph and chunk groups.

#### `removeGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

Removes the provided chunk group from the chunk.

#### `removeModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

Removes the provided module from the chunk.

#### `size([options])`

> Stability: 0 - Deprecated

* `options` {ChunkSizeOptions}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `split(newChunk)`

* `newChunk` {Chunk}
* Returns: {void}

Processes the provided new chunk.

#### `updateHash(hash, chunkGraph)`

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Updates the hash with the data contributed by this instance.

***

## Class: `ChunkGraph`

### Constructors

#### `new ChunkGraph(moduleGraph[, hashFunction])`

* `moduleGraph` {ModuleGraph}
* `hashFunction` {HashFunction}
* Returns: {ChunkGraph}

Creates an instance of ChunkGraph.

### Properties

* `moduleGraph` {ModuleGraph}

### Methods

#### `addChunkRuntimeRequirements(chunk, items)`

* `chunk` {Chunk}
* `items` {Set}
* Returns: {void}

Adds chunk runtime requirements.

#### `addDependentHashModuleToChunk(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

Adds dependent hash module to chunk.

#### `addFullHashModuleToChunk(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

Adds full hash module to chunk.

#### `addModuleRuntimeRequirements(module, runtime, items[, transferOwnership])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `items` {Set}
* `transferOwnership` {boolean}
* Returns: {void}

Adds module runtime requirements.

#### `addTreeRuntimeRequirements(chunk, items)`

* `chunk` {Chunk}
* `items` {Iterable}
* Returns: {void}

Adds tree runtime requirements.

#### `attachDependentHashModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

Attach dependent hash modules.

#### `attachFullHashModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

Attach full hash modules.

#### `attachModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

Processes the provided chunk.

#### `attachRuntimeModules(chunk, modules)`

* `chunk` {Chunk}
* `modules` {Iterable}
* Returns: {void}

Attach runtime modules.

#### `canChunksBeIntegrated(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {boolean}

Checks whether it can chunks be integrated.

#### `compareChunks(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {-1|0|1}

Compares the provided values and returns their ordering.

#### `connectBlockAndChunkGroup(depBlock, chunkGroup)`

* `depBlock` {AsyncDependenciesBlock}
* `chunkGroup` {ChunkGroup}
* Returns: {void}

Connects block and chunk group.

#### `connectChunkAndEntryModule(chunk, module, entrypoint)`

* `chunk` {Chunk}
* `module` {Module}
* `entrypoint` {Entrypoint}
* Returns: {void}

Connects chunk and entry module.

#### `connectChunkAndModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

Connects chunk and module.

#### `connectChunkAndRuntimeModule(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

Connects chunk and runtime module.

#### `disconnectChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Processes the provided chunk.

#### `disconnectChunkAndEntryModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

Disconnects chunk and entry module.

#### `disconnectChunkAndModule(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {void}

Disconnects chunk and module.

#### `disconnectChunkAndRuntimeModule(chunk, module)`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* Returns: {void}

Disconnects chunk and runtime module.

#### `disconnectChunkGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

Disconnects chunk group.

#### `disconnectEntries(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Disconnects entries.

#### `disconnectEntryModule(module)`

* `module` {Module}
* Returns: {void}

Disconnects entry module.

#### `getBlockChunkGroup(depBlock)`

* `depBlock` {AsyncDependenciesBlock}
* Returns: {ChunkGroup}

Gets block chunk group.

#### `getChunkConditionMap(chunk, filterFn)`

* `chunk` {Chunk}
* `filterFn` {object}
* Returns: {ChunkConditionMap}

Gets chunk condition map.

#### `getChunkDependentHashModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

Gets chunk dependent hash modules iterable.

#### `getChunkEntryDependentChunksIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

Gets chunk entry dependent chunks iterable.

#### `getChunkEntryModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

Gets chunk entry modules iterable.

#### `getChunkEntryModulesWithChunkGroupIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

Gets chunk entry modules with chunk group iterable.

#### `getChunkFullHashModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

Gets chunk full hash modules iterable.

#### `getChunkFullHashModulesSet(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet}

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

Gets chunk full hash modules set.

#### `getChunkModuleIdMap(chunk, filterFn[, includeAllChunks])`

* `chunk` {Chunk}
* `filterFn` {object}
* `includeAllChunks` {boolean}
* Returns: {ChunkModuleIdMapEs5Alias_2}

Gets chunk module id map.

#### `getChunkModuleRenderedHashMap(chunk, filterFn[, hashLength][, includeAllChunks])`

* `chunk` {Chunk}
* `filterFn` {object}
* `hashLength` {number}
* `includeAllChunks` {boolean}
* Returns: {ChunkModuleHashMap}

Gets chunk module rendered hash map.

#### `getChunkModules(chunk)`

* `chunk` {Chunk}
* Returns: {Module[]}

Gets chunk modules.

#### `getChunkModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

Gets chunk modules iterable.

#### `getChunkModulesIterableBySourceType(chunk, sourceType)`

* `chunk` {Chunk}
* `sourceType` {string}
* Returns: {Iterable}

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

Gets chunk modules iterable by source type.

#### `getChunkModuleSourceTypes(chunk, module)`

* `chunk` {Chunk}
* `module` {Module}
* Returns: {ReadonlySet}

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

Gets chunk module source types.

#### `getChunkModulesSize(chunk)`

* `chunk` {Chunk}
* Returns: {number}

Gets chunk modules size.

#### `getChunkModulesSizes(chunk)`

* `chunk` {Chunk}
* Returns: {Record}

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

Gets chunk modules sizes.

#### `getChunkRootModules(chunk)`

* `chunk` {Chunk}
* Returns: {Module[]}

Gets chunk root modules.

#### `getChunkRuntimeModulesInOrder(chunk)`

* `chunk` {Chunk}
* Returns: {RuntimeModule[]}

Gets chunk runtime modules in order.

#### `getChunkRuntimeModulesIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

Gets chunk runtime modules iterable.

#### `getChunkRuntimeRequirements(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet}

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

Gets chunk runtime requirements.

#### `getChunkSize(chunk[, options])`

* `chunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

Returns total size of the chunk.

#### `getIntegratedChunksSize(chunkA, chunkB[, options])`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

Gets integrated chunks size.

#### `getModuleChunks(module)`

* `module` {Module}
* Returns: {Chunk[]}

Gets module chunks.

#### `getModuleChunksIterable(module)`

* `module` {Module}
* Returns: {Iterable}

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

Gets module chunks iterable.

#### `getModuleGraphHash(module, runtime[, withConnections])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}
* Returns: {string}

Gets module graph hash.

#### `getModuleGraphHashBigInt(module, runtime[, withConnections])`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}
* Returns: {bigint}

Gets module graph hash big int.

#### `getModuleHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

Returns hash.

#### `getModuleId(module)`

* `module` {Module}
* Returns: {string|number}

Returns the id of the module.

#### `getModuleRuntimeRequirements(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {ReadonlySet}

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

Gets module runtime requirements.

#### `getModuleRuntimes(module)`

* `module` {Module}
* Returns: {RuntimeSpecSet}

Gets module runtimes.

#### `getModuleSourceTypes(module)`

* `module` {Module}
* Returns: {ReadonlySet}

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

Gets module source types.

#### `getNumberOfChunkFullHashModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

Gets number of chunk full hash modules.

#### `getNumberOfChunkModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

Gets number of chunk modules.

#### `getNumberOfEntryModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

Gets number of entry modules.

#### `getNumberOfModuleChunks(module)`

* `module` {Module}
* Returns: {number}

Gets number of module chunks.

#### `getNumberOfRuntimeModules(chunk)`

* `chunk` {Chunk}
* Returns: {number}

Gets number of runtime modules.

#### `getOrderedChunkModules(chunk, comparator)`

* `chunk` {Chunk}
* `comparator` {object}
* Returns: {Module[]}

Gets ordered chunk modules.

#### `getOrderedChunkModulesIterable(chunk, comparator)`

* `chunk` {Chunk}
* `comparator` {object}
* Returns: {Iterable}

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

Gets ordered chunk modules iterable.

#### `getOrderedChunkModulesIterableBySourceType(chunk, sourceType, comparator)`

* `chunk` {Chunk}
* `sourceType` {string}
* `comparator` {object}
* Returns: {Iterable}

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

Gets ordered chunk modules iterable by source type.

#### `getOrderedModuleChunksIterable(module, sortFn)`

* `module` {Module}
* `sortFn` {object}
* Returns: {Iterable}

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

Gets ordered module chunks iterable.

#### `getRenderedModuleHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

Gets rendered module hash.

#### `getRuntimeChunkDependentChunksIterable(chunk)`

* `chunk` {Chunk}
* Returns: {Iterable}

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

Gets runtime chunk dependent chunks iterable.

#### `getRuntimeId(runtime)`

* `runtime` {string}
* Returns: {RuntimeId}

Returns the id of the runtime.

#### `getTreeRuntimeRequirements(chunk)`

* `chunk` {Chunk}
* Returns: {ReadonlySet}

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

Gets tree runtime requirements.

#### `hasChunkEntryDependentChunks(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this chunk graph contains the chunk.

#### `hasModuleHashes(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this chunk graph contains the module.

#### `hasModuleInGraph(chunk, filterFn[, filterChunkFn])`

* `chunk` {Chunk}
* `filterFn` {object}
* `filterChunkFn` {object}
* Returns: {boolean}

Checks whether this chunk graph contains the chunk.

#### `integrateChunks(chunkA, chunkB)`

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* Returns: {void}

Processes the provided chunk a.

#### `isEntryModule(module)`

* `module` {Module}
* Returns: {boolean}

Checks whether this chunk graph is entry module.

#### `isEntryModuleInChunk(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this chunk graph is entry module in chunk.

#### `isModuleInChunk(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this chunk graph is module in chunk.

#### `isModuleInChunkGroup(module, chunkGroup)`

* `module` {Module}
* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

Checks whether this chunk graph is module in chunk group.

#### `replaceModule(oldModule, newModule)`

* `oldModule` {Module}
* `newModule` {Module}
* Returns: {void}

Processes the provided old module.

#### `setChunkModuleSourceTypes(chunk, module, sourceTypes)`

* `chunk` {Chunk}
* `module` {Module}
* `sourceTypes` {ReadonlySet}
* Returns: {void}

Sets chunk module source types.

#### `setModuleHashes(module, runtime, hash, renderedHash)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `hash` {string}
* `renderedHash` {string}
* Returns: {void}

Sets module hashes.

#### `setModuleId(module, id)`

* `module` {Module}
* `id` {ModuleId}
* Returns: {void}

Updates module id using the provided module.

#### `setRuntimeId(runtime, id)`

* `runtime` {string}
* `id` {RuntimeId}
* Returns: {void}

Updates runtime id using the provided runtime.

#### `upgradeDependentToFullHashModules(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Upgrade dependent to full hash modules.

#### Static method: `clearChunkGraphForChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Clear chunk graph for chunk.

#### Static method: `clearChunkGraphForModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

Clear chunk graph for module.

#### Static method: `getChunkGraphForChunk(chunk, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ChunkGraph}

Gets chunk graph for chunk.

#### Static method: `getChunkGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ChunkGraph}

Gets chunk graph for module.

#### Static method: `setChunkGraphForChunk(chunk, chunkGraph)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Sets chunk graph for chunk.

#### Static method: `setChunkGraphForModule(module, chunkGraph)`

> Stability: 0 - Deprecated

* `module` {Module}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Sets chunk graph for module.

***

## Class: `ChunkGroup`

### Extended by

- {Entrypoint}

### Constructors

#### `new ChunkGroup()`

* Returns: {ChunkGroup}

### Properties

* `asyncEntrypointsIterable` {SortableSet<ChunkGroup>}
* `blocksIterable` {Iterable<AsyncDependenciesBlock>} Exposes the group's async dependency blocks as an iterable.
* `childrenIterable` {SortableSet<ChunkGroup>}
* `chunks` {Chunk[]}
* `debugId` {string} Returns a debug-only identifier derived from the group's member chunk
debug ids. This is primarily useful in diagnostics and assertions.
* `getModuleIndex` {object}
* `getModuleIndex2` {object}
* `groupDebugId` {number}
* `id` {string} Returns an identifier derived from the ids of the chunks currently in
the group.
* `index` {number}
* `name` {string} Returns the configured name of the chunk group, if one was assigned.
Updates the configured name of the chunk group.
* `options` {ChunkGroupOptions}
* `origins` {OriginRecord[]}
* `parentsIterable` {SortableSet}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

Registers an async entrypoint that is rooted in this chunk group.

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

Associates an async dependency block with this chunk group.

#### `addChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

Adds a child chunk group to the current group.

#### `addOptions(options)`

* `options` {ChunkGroupOptions}
* Returns: {void}

Merges additional options into the chunk group.
Order-based options are combined by taking the higher priority, while
unsupported conflicts surface as an explicit error.

#### `addOrigin(module, loc, request)`

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {void}

Records where this chunk group originated from in user code.
The origin is used for diagnostics, ordering, and reporting.

#### `addParent(parentChunk)`

* `parentChunk` {ChunkGroup}
* Returns: {boolean}

Records a parent chunk group relationship.

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}
* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

Returns the async dependency blocks that create or reference this group.

#### `getChildren()`

* Returns: {ChunkGroup[]}

Returns the child chunk groups reachable from this group.

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {Record}

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

#### `getFiles()`

* Returns: {string[]}

Collects the emitted files produced by every chunk in the group.

#### `getModulePostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Returns the module's bottom-up traversal index within this group.

#### `getModulePreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Returns the module's top-down traversal index within this group.

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

Returns the parent chunk groups that can lead to this group.

#### `hasBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

Checks whether an async dependency block is associated with this group.

#### `hasParent(parent)`

* `parent` {ChunkGroup}
* Returns: {boolean}

Checks whether the provided group is registered as a parent.

#### `insertChunk(chunk, before)`

* `chunk` {Chunk}
* `before` {Chunk}
* Returns: {boolean}

Inserts a chunk directly before another chunk that already belongs to the
group, preserving the rest of the ordering.

#### `isInitial()`

* Returns: {boolean}

Indicates whether this chunk group is loaded as part of the initial page
load instead of being created lazily.

#### `pushChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Appends a chunk to the group when it is not already a member.

#### `remove()`

* Returns: {void}

Disconnects this group from its parents, children, and chunks.
Child groups are reconnected to this group's parents so the surrounding
graph remains intact after removal.

#### `removeChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

Removes a child chunk group and clears the corresponding parent link on
the removed child.

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Removes a chunk from this group.

#### `removeParent(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

Removes a parent chunk group and clears the reverse child relationship.

#### `replaceChunk(oldChunk, newChunk)`

* `oldChunk` {Chunk}
* `newChunk` {Chunk}
* Returns: {boolean}

Replaces one member chunk with another while preserving the group's
ordering and avoiding duplicates.

#### `setModulePostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Stores the module's bottom-up traversal index within this group.

#### `setModulePreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Stores the module's top-down traversal index within this group.

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Moves a chunk to the front of the group or inserts it when it is not
already present.

***

## Class: `CleanPlugin`

### Constructors

#### `new CleanPlugin([options])`

* `options` {CleanOptions}
* Returns: {CleanPlugin}

### Properties

* `options` {CleanOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CleanPluginCompilationHooks}

Returns the attached hooks.

***

## Class: `CodeGenerationResults`

### Constructors

#### `new CodeGenerationResults()`

* Returns: {CodeGenerationResults}

### Properties

* `map` {Map}

### Methods

#### `add(module, runtime, result)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `result` {CodeGenerationResult}
* Returns: {void}

Stores a code generation result for a module/runtime pair, creating the
per-module runtime map when needed.

#### `get(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {CodeGenerationResult}

Returns the code generation result for a module/runtime pair, rejecting
ambiguous lookups where no unique runtime-independent result exists.

#### `getData(module, runtime, key)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `key` {string}
* Returns: {any}

Returns an arbitrary metadata entry recorded during code generation.

#### `getHash(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {string}

Returns a stable hash for the generated sources and runtime requirements,
computing and caching it on first access.

#### `getRuntimeRequirements(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {ReadonlySet}

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

Returns the runtime requirements captured during code generation for the
requested module/runtime pair.

#### `getSource(module, runtime, sourceType)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* `sourceType` {string}
* Returns: {Source}

Returns a generated source of the requested source type from a stored code
generation result.

#### `has(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Reports whether a module has a stored result for the requested runtime, or
a single unambiguous result when no runtime is specified.

***

## Class: `Compilation`

### Constructors

#### `new Compilation(compiler, params)`

* `compiler` {Compiler}
* `params` {CompilationParams}
* Returns: {Compilation}

Creates an instance of Compilation.

### Properties

* `additionalChunkAssets` {string[]}
* `addModuleQueue` {AsyncQueue}
* `assets` {CompilationAssets}
* `assetsInfo` {Map}
* `asyncEntrypoints` {Entrypoint[]}
* `bail` {boolean}
* `buildDependencies` {LazySet}
* `buildQueue` {AsyncQueue}
* `buildTimeExecutedModules` {WeakSet}
* `builtModules` {WeakSet}
* `children` {Compilation[]}
* `childrenCounters` {Record}
* `chunkGraph` {ChunkGraph}
* `chunkGroups` {ChunkGroup[]}
* `chunks` {Set}
* `chunkTemplate` {ChunkTemplate}
* `codeGeneratedModules` {WeakSet}
* `codeGenerationResults` {CodeGenerationResults}
* `comparedForEmitAssets` {Set}
* `compilationDependencies` {object} 
* `compiler` {Compiler}
* `compilerPath` {string}
* `contextDependencies` {LazySet}
* `creatingModuleDuringBuild` {WeakMap} Modules in value are building during the build of Module in key.
Means value blocking key from finishing.
Needed to detect build cycles.
* `dependencyFactories` {Map}
* `dependencyTemplates` {DependencyTemplates}
* `emittedAssets` {Set}
* `endTime` {number}
* `entries` {Map}
* `entrypoints` {Map}
* `errors` {Error[]}
* `factorizeQueue` {AsyncQueue}
* `fileDependencies` {LazySet}
* `fileSystemInfo` {FileSystemInfo}
* `fullHash` {string}
* `globalEntry` {EntryData}
* `hash` {string}
* `hooks` {Readonly}
* `inputFileSystem` {InputFileSystem}
* `logger` {WebpackLogger}
* `logging` {Map}
* `mainTemplate` {MainTemplate}
* `missingDependencies` {LazySet}
* `moduleGraph` {ModuleGraph}
* `moduleMemCaches` {Map}
* `moduleMemCaches2` {Map}
* `modules` {Set}
* `moduleTemplates` {ModuleTemplates}
* `name` {string}
* `namedChunkGroups` {Map}
* `namedChunks` {Map}
* `needAdditionalPass` {boolean}
* `options` {WebpackOptionsNormalizedWithDefaults}
* `outputOptions` {OutputNormalizedWithDefaults}
* `params` {CompilationParams}
* `processDependenciesQueue` {AsyncQueue}
* `profile` {boolean}
* `rebuildQueue` {AsyncQueue}
* `records` {Records}
* `requestShortener` {RequestShortener}
* `resolverFactory` {ResolverFactory}
* `runtimeTemplate` {RuntimeTemplate}
* `startTime` {number}
* `usedChunkIds` {Set}
* `usedModuleIds` {Set}
* `valueCacheVersions` {Map}
* `warnings` {Error[]}
* `PROCESS_ASSETS_STAGE_ADDITIONAL` {number} Add additional assets to the compilation.
* `PROCESS_ASSETS_STAGE_ADDITIONS` {number} Add additional sections to existing assets, like a banner or initialization code.
* `PROCESS_ASSETS_STAGE_ANALYSE` {number} Analyse existing assets.
* `PROCESS_ASSETS_STAGE_DERIVED` {number} Derive new assets from existing assets.
Existing assets should not be treated as complete.
* `PROCESS_ASSETS_STAGE_DEV_TOOLING` {number} Add development tooling to assets, e. g. by extracting a SourceMap.
* `PROCESS_ASSETS_STAGE_OPTIMIZE` {number} Optimize existing assets in a general way.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY` {number} Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT` {number} Optimize the count of existing assets, e. g. by merging them.
Only assets of the same type should be merged.
For assets of different types see PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_HASH` {number} Optimize the hashes of the assets, e. g. by generating real hashes of the asset content.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE` {number} Optimize the count of existing assets, e. g. by inlining assets of into other assets.
Only assets of different types should be inlined.
For assets of the same type see PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE` {number} Optimize the size of existing assets, e. g. by minimizing or omitting whitespace.
* `PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER` {number} Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset.
* `PROCESS_ASSETS_STAGE_PRE_PROCESS` {number} Basic preprocessing of assets.
* `PROCESS_ASSETS_STAGE_REPORT` {number} Creating assets for reporting purposes.
* `PROCESS_ASSETS_STAGE_SUMMARIZE` {number} Summarize the list of existing assets
e. g. creating an assets manifest of Service Workers.

### Methods

#### `addAsyncEntrypoint(options, module, loc, request)`

* `options` {EntryOptions}
* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {Entrypoint}

Adds the provided async entrypoint to this chunk group.

#### `addChunk([name])`

* `name` {string}
* Returns: {Chunk}

This method first looks to see if a name is provided for a new chunk,
and first looks to see if any named chunks already exist and reuse that chunk instead.

#### `addChunkInGroup(groupOptions[, module][, loc][, request])`

* `groupOptions` {string|ChunkGroupOptions}
* `module` {Module}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}
* Returns: {ChunkGroup}

If `module` is passed, `loc` and `request` must also be passed.

#### `addEntry(context, entry, optionsOrName, callback)`

* `context` {string}
* `entry` {Dependency}
* `optionsOrName` {string|EntryOptions}
* `callback` {object}
* Returns: {void}

Adds the provided string to the compilation.

#### `addInclude(context, dependency, options, callback)`

* `context` {string}
* `dependency` {Dependency}
* `options` {EntryOptions}
* `callback` {object}
* Returns: {void}

Adds the provided string to the compilation.

#### `addModule(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

Adds the provided module to the compilation.

#### `addModuleChain(context, dependency, callback)`

* `context` {string}
* `dependency` {Dependency}
* `callback` {object}
* Returns: {void}

Adds the provided string to the compilation.

#### `addModuleTree(__namedParameters, callback)`

* `__namedParameters` {object}
* `callback` {object}
* Returns: {void}

Adds the provided object to the compilation.

#### `addRuntimeModule(chunk, module[, chunkGraph])`

* `chunk` {Chunk}
* `module` {RuntimeModule}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Adds runtime module.

#### `assignDepth(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

Processes the provided module.

#### `assignDepths(modules)`

* `modules` {Module[]|Set<Module>}
* Returns: {void}

Assigns depth values to the provided modules.

#### `assignRuntimeIds()`

* Returns: {void}

#### `buildModule(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

Schedules a build of the module object

#### `checkConstraints()`

* Returns: {void}

#### `clearAssets()`

* Returns: {void}

#### `codeGeneration(callback)`

* `callback` {object}
* Returns: {void}

Generates code and runtime requirements for this module.

#### `createChildCompiler(name[, outputOptions][, plugins])`

* `name` {string}
* `outputOptions` {Partial}
* `plugins` {false|""|0|object|WebpackPluginInstance[]}
* Returns: {Compiler}

This function allows you to run another instance of webpack inside of webpack however as
a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
from parent (or top level compiler) and creates a child Compilation

#### `createChunkAssets(callback)`

* `callback` {object}
* Returns: {void}

Creates a chunk assets.

#### `createHash()`

* Returns: {CodeGenerationJob[]}

#### `createModuleAssets()`

* Returns: {void}

#### `createModuleHashes()`

* Returns: {void}

#### `createStatsFactory(options)`

* `options` {NormalizedStatsOptions}
* Returns: {StatsFactory}

Creates a stats factory.

#### `createStatsOptions([optionsOrPreset][, context])`

* `optionsOrPreset` {string|boolean|StatsOptions}
* `context` {CreateStatsOptionsContext}
* Returns: {NormalizedStatsOptions}

Creates a stats options.

#### `createStatsPrinter(options)`

* `options` {NormalizedStatsOptions}
* Returns: {StatsPrinter}

Creates a stats printer.

#### `deleteAsset(file)`

* `file` {string}
* Returns: {void}

Processes the provided file.

#### `emitAsset(file, source[, assetInfo])`

* `file` {string}
* `source` {Source}
* `assetInfo` {AssetInfo}
* Returns: {void}

Processes the provided file.

#### `executeModule(module, options, callback)`

* `module` {Module}
* `options` {ExecuteModuleOptions}
* `callback` {object}
* Returns: {void}

Processes the provided module.

#### `factorizeModule(options, callback)`

##### Call Signature

* `options` {FactorizeModuleOptions|object}
* `callback` {object}
* Returns: {void}

Processes the provided module callback.

##### Call Signature

* `options` {FactorizeModuleOptions|object}
* `callback` {object}
* Returns: {void}

Processes the provided module factory result callback.

#### `findModule(identifier)`

* `identifier` {string}
* Returns: {Module}

Attempts to search for a module by its identifier

#### `finish(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided callback.

#### `getAsset(name)`

* `name` {string}
* Returns: {Readonly}

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

Returns the asset or undefined when not found.

#### `getAssetPath(filename, data)`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {string}

Returns interpolated path.

#### `getAssetPathWithInfo(filename, data)`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {InterpolatedPathAndAssetInfo}

Gets asset path with info.

#### `getAssets()`

* Returns: {Readonly[]}

#### `getCache(name)`

* `name` {string}
* Returns: {CacheFacade}

Returns the cache facade instance.

#### `getDependencyReferencedExports(dependency, runtime)`

* `dependency` {Dependency}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Gets dependency referenced exports.

#### `getErrors()`

* Returns: {Error[]}

#### `getLogger(name)`

* `name` {string|object}
* Returns: {WebpackLogger}

Returns a logger with that name.

#### `getModule(module)`

* `module` {Module}
* Returns: {Module}

Fetches a module from a compilation by its identifier

#### `getPath(filename[, data])`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {string}

Returns interpolated path.

#### `getPathWithInfo(filename[, data])`

* `filename` {TemplatePath}
* `data` {PathData}
* Returns: {InterpolatedPathAndAssetInfo}

Gets path with info.

#### `getRenderManifest(options)`

* `options` {RenderManifestOptions}
* Returns: {RenderManifestEntry[]}

Gets render manifest.

#### `getStats()`

* Returns: {Stats}

#### `getWarnings()`

* Returns: {Error[]}

#### `handleModuleCreation(__namedParameters, callback)`

* `__namedParameters` {HandleModuleCreationOptions}
* `callback` {object}
* Returns: {void}

Handle module creation.

#### `patchChunksAfterReasonRemoval(module, chunk)`

* `module` {Module}
* `chunk` {Chunk}
* Returns: {void}

Patch chunks after reason removal.

#### `processModuleDependencies(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

Process module dependencies.

#### `processModuleDependenciesNonRecursive(module)`

* `module` {Module}
* Returns: {void}

Process module dependencies non recursive.

#### `processRuntimeRequirements([__namedParameters])`

* `__namedParameters` {object}
* Returns: {void}

Process runtime requirements.

#### `rebuildModule(module, callback)`

* `module` {Module}
* `callback` {object}
* Returns: {void}

Processes the provided module.

#### `removeChunkFromDependencies(block, chunk)`

* `block` {DependenciesBlock}
* `chunk` {Chunk}
* Returns: {void}

Removes chunk from dependencies.

#### `removeReasonsOfDependencyBlock(module, block)`

* `module` {Module}
* `block` {DependenciesBlockLike}
* Returns: {void}

Removes reasons of dependency block.

#### `renameAsset(file, newFile)`

* `file` {string}
* `newFile` {string}
* Returns: {void}

Processes the provided file.

#### `reportDependencyErrorsAndWarnings(module, blocks)`

* `module` {Module}
* `blocks` {DependenciesBlock[]}
* Returns: {boolean}

Report dependency errors and warnings.

#### `seal(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided callback.

#### `sortItemsWithChunkIds()`

* Returns: {void}

#### `summarizeDependencies()`

* Returns: {void}

#### `unseal()`

* Returns: {void}

#### `updateAsset(file, newSourceOrFunction[, assetInfoUpdateOrFunction])`

* `file` {string}
* `newSourceOrFunction` {Source|object}
* `assetInfoUpdateOrFunction` {AssetInfo|object}
* Returns: {void}

Updates asset using the provided file.

***

## Class: `Compiler`

### Constructors

#### `new Compiler(context[, options])`

* `context` {string}
* `options` {WebpackOptionsNormalized}
* Returns: {Compiler}

Creates an instance of Compiler.

### Properties

* `cache` {CacheClass}
* `compilerPath` {string}
* `context` {string}
* `contextTimestamps` {Map}
* `fileTimestamps` {Map}
* `fsStartTime` {number}
* `hooks` {Readonly}
* `idle` {boolean}
* `immutablePaths` {Set}
* `infrastructureLogger` {object}
* `inputFileSystem` {InputFileSystem}
* `intermediateFileSystem` {IntermediateFileSystem}
* `managedPaths` {Set}
* `modifiedFiles` {ReadonlySet}
* `moduleMemCaches` {Map}
* `name` {string}
* `options` {WebpackOptionsNormalized}
* `outputFileSystem` {OutputFileSystem}
* `outputPath` {string}
* `parentCompilation` {Compilation}
* `platform` {Readonly}
* `records` {Records}
* `recordsInputPath` {string}
* `recordsOutputPath` {string}
* `removedFiles` {ReadonlySet}
* `requestShortener` {RequestShortener}
* `resolverFactory` {ResolverFactory}
* `root` {Compiler}
* `running` {boolean}
* `unmanagedPaths` {Set}
* `watchFileSystem` {WatchFileSystem}
* `watching` {Watching}
* `watchMode` {boolean}
* `webpack` {exports}

### Methods

#### `close(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided error callback.

#### `compile(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

Processes the provided compilation.

#### `createChildCompiler(compilation, compilerName, compilerIndex[, outputOptions][, plugins])`

* `compilation` {Compilation}
* `compilerName` {string}
* `compilerIndex` {number}
* `outputOptions` {Partial}
* `plugins` {false|""|0|WebpackPluginInstance|object[]}
* Returns: {Compiler}

Creates a child compiler.

#### `createCompilation(params)`

* `params` {CompilationParams}
* Returns: {Compilation}

Creates a compilation.

#### `createContextModuleFactory()`

* Returns: {ContextModuleFactory}

#### `createNormalModuleFactory()`

* Returns: {NormalModuleFactory}

#### `emitAssets(compilation, callback)`

* `compilation` {Compilation}
* `callback` {object}
* Returns: {void}

Processes the provided compilation.

#### `emitRecords(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided error callback.

#### `getCache(name)`

* `name` {string}
* Returns: {CacheFacade}

Returns the cache facade instance.

#### `getInfrastructureLogger(name)`

* `name` {string|object}
* Returns: {WebpackLogger}

Gets infrastructure logger.

#### `isChild()`

* Returns: {boolean}

#### `newCompilation(params)`

* `params` {CompilationParams}
* Returns: {Compilation}

Returns the created compilation.

#### `newCompilationParams()`

* Returns: {object}

#### `purgeInputFileSystem()`

* Returns: {void}

#### `readRecords(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided error callback.

#### `run(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

Processes the provided stat.

#### `runAsChild(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided run as child callback.

#### `validate(schema, value[, options][, check])`

###### T

`T` *extends* {object|object[]} = {object}
* `schema` {JSONSchema4|ExtendedSchema|JSONSchema6|ExtendedSchema|JSONSchema7|ExtendedSchema|object}
* `value` {T}
* `options` {ValidationErrorConfiguration}
* `check` {object}
* Returns: {void}

Schema validation function with optional pre-compiled check

#### `watch(watchOptions, handler)`

* `watchOptions` {WatchOptions}
* `handler` {CallbackWebpackFunction_2}
* Returns: {Watching}

Returns a compiler watcher.

***

## Class: `ConcatenationScope`

### Constructors

#### `new ConcatenationScope(modulesMap, currentModule, usedNames)`

* `modulesMap` {ModuleInfo[]|Map}
* `currentModule` {ConcatenatedModuleInfo}
* `usedNames` {Set}
* Returns: {ConcatenationScope}

Creates the mutable scope object used while rendering a concatenated
module and its cross-module references.

### Properties

* `usedNames` {Set}
* `DEFAULT_EXPORT` {string}
* `NAMESPACE_OBJECT_EXPORT` {string}

### Methods

#### `createModuleReference(module, __namedParameters)`

* `module` {Module}
* `__namedParameters` {Partial}
* Returns: {string}

Encodes a reference to another concatenated module as a placeholder
identifier that can be parsed later during code generation.

#### `getRawExport(exportName)`

* `exportName` {string}
* Returns: {string}

Returns the raw expression registered for an export, if one exists.

#### `isModuleInScope(module)`

* `module` {Module}
* Returns: {boolean}

Checks whether a module participates in the current concatenation scope.

#### `registerExport(exportName, symbol)`

* `exportName` {string}
* `symbol` {string}
* Returns: {void}

Records the symbol that should be used when the current module exports a
named binding.

#### `registerNamespaceExport(symbol)`

* `symbol` {string}
* Returns: {void}

Records the symbol that should be used for the synthetic namespace export.

#### `registerRawExport(exportName, expression)`

* `exportName` {string}
* `expression` {string}
* Returns: {void}

Records a raw expression that can be used to reference an export without
going through the normal symbol map.

#### `setRawExportMap(exportName, expression)`

* `exportName` {string}
* `expression` {string}
* Returns: {void}

Replaces the raw expression for an export only when that export already
has an entry in the raw export map.

#### Static method: `isModuleReference(name)`

* `name` {string}
* Returns: {boolean}

Checks whether an identifier is one of webpack's encoded concatenation
module references.

#### Static method: `matchModuleReference(name)`

* `name` {string}
* Returns: {ModuleReferenceOptions|object}

Parses an encoded module reference back into its module index and
reference flags.

***

## Class: `ContextExclusionPlugin`

### Constructors

#### `new ContextExclusionPlugin(negativeMatcher)`

* `negativeMatcher` {RegExp}
* Returns: {ContextExclusionPlugin}

Creates an instance of ContextExclusionPlugin.

### Properties

* `negativeMatcher` {RegExp}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ContextReplacementPlugin`

### Constructors

#### `new ContextReplacementPlugin(resourceRegExp[, newContentResource][, newContentRecursive][, newContentRegExp])`

* `resourceRegExp` {RegExp}
* `newContentResource` {string|boolean|RegExp|object}
* `newContentRecursive` {boolean|RegExp|NewContentCreateContextMap}
* `newContentRegExp` {RegExp}
* Returns: {ContextReplacementPlugin}

Creates an instance of ContextReplacementPlugin.

### Properties

* `newContentCallback` {object}
* `newContentCreateContextMap` {object} Stores new content create context map.
* `newContentRecursive` {boolean}
* `newContentRegExp` {RegExp}
* `newContentResource` {string}
* `resourceRegExp` {RegExp}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `DefinePlugin`

### Constructors

#### `new DefinePlugin(definitions)`

* `definitions` {Definitions}
* Returns: {DefinePlugin}

Create a new define plugin

### Properties

* `definitions` {Definitions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {DefinePluginHooks}

Returns the attached hooks.

#### Static method: `runtimeValue(fn[, options])`

* `fn` {object}
* `options` {true|string[]|RuntimeValueOptions}
* Returns: {RuntimeValue}

Returns runtime value.

***

## Class: `DelegatedPlugin`

### Constructors

#### `new DelegatedPlugin(options)`

* `options` {Options}
* Returns: {DelegatedPlugin}

Creates an instance of DelegatedPlugin.

### Properties

* `options` {Options}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Dependency`

### Extended by

- {ModuleDependency}
- {NullDependency}

### Constructors

#### `new Dependency()`

* Returns: {Dependency}

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {any}
* `loc` {DependencyLocation} Returns location.
* `module` {any}
* `optional` {boolean}
* `type` {string} Returns a display name for the type of dependency.
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `TRANSITIVE` {symbol}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `DllPlugin`

### Constructors

#### `new DllPlugin(options)`

* `options` {DllPluginOptions}
* Returns: {DllPlugin}

Creates an instance of DllPlugin.

### Properties

* `options` {DllPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `DllReferencePlugin`

### Constructors

#### `new DllReferencePlugin(options)`

* `options` {DllReferencePluginOptions}
* Returns: {DllReferencePlugin}

Creates an instance of DllReferencePlugin.

### Properties

* `options` {DllReferencePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `DotenvPlugin`

### Constructors

#### `new DotenvPlugin([options])`

* `options` {DotenvPluginOptions}
* Returns: {DotenvPlugin}

Creates an instance of DotenvPlugin.

### Properties

* `options` {DotenvPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `DynamicEntryPlugin`

### Constructors

#### `new DynamicEntryPlugin(context, entry)`

* `context` {string}
* `entry` {object}
* Returns: {DynamicEntryPlugin}

Creates an instance of DynamicEntryPlugin.

### Properties

* `context` {string}
* `entry` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `EntryOptionPlugin`

### Constructors

#### `new EntryOptionPlugin()`

* Returns: {EntryOptionPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `applyEntryOption(compiler, context, entry)`

* `compiler` {Compiler}
* `context` {string}
* `entry` {EntryNormalized}
* Returns: {void}

Apply entry option.

#### Static method: `entryDescriptionToOptions(compiler, name, desc)`

* `compiler` {Compiler}
* `name` {string}
* `desc` {EntryDescriptionNormalized}
* Returns: {EntryOptions}

Entry description to options.

***

## Class: `EntryPlugin`

### Constructors

#### `new EntryPlugin(context, entry[, options])`

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}
* Returns: {EntryPlugin}

An entry plugin which will handle creation of the EntryDependency

### Properties

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `createDependency(entry, options)`

* `entry` {string}
* `options` {string|EntryOptions}
* Returns: {EntryDependency}

Creates a dependency.

***

## Class: `Entrypoint`

### Extends

- {ChunkGroup}

### Constructors

#### `new Entrypoint()`

* Returns: {Entrypoint}

### Properties

* `asyncEntrypointsIterable` {SortableSet<ChunkGroup>}
* `blocksIterable` {Iterable<AsyncDependenciesBlock>} Exposes the group's async dependency blocks as an iterable.
* `childrenIterable` {SortableSet<ChunkGroup>}
* `chunks` {Chunk[]}
* `debugId` {string} Returns a debug-only identifier derived from the group's member chunk
debug ids. This is primarily useful in diagnostics and assertions.
* `getModuleIndex` {object}
* `getModuleIndex2` {object}
* `groupDebugId` {number}
* `id` {string} Returns an identifier derived from the ids of the chunks currently in
the group.
* `index` {number}
* `name` {string} Returns the configured name of the chunk group, if one was assigned.
Updates the configured name of the chunk group.
* `options` {ChunkGroupOptions}
* `origins` {OriginRecord[]}
* `parentsIterable` {SortableSet}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

Registers an async entrypoint that is rooted in this chunk group.

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

Associates an async dependency block with this chunk group.

#### `addChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

Adds a child chunk group to the current group.

#### `addDependOn(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {void}

#### `addOptions(options)`

* `options` {ChunkGroupOptions}
* Returns: {void}

Merges additional options into the chunk group.
Order-based options are combined by taking the higher priority, while
unsupported conflicts surface as an explicit error.

#### `addOrigin(module, loc, request)`

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}
* Returns: {void}

Records where this chunk group originated from in user code.
The origin is used for diagnostics, ordering, and reporting.

#### `addParent(parentChunk)`

* `parentChunk` {ChunkGroup}
* Returns: {boolean}

Records a parent chunk group relationship.

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}
* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `dependOn(entrypoint)`

* `entrypoint` {Entrypoint}
* Returns: {boolean}

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

Returns the async dependency blocks that create or reference this group.

#### `getChildren()`

* Returns: {ChunkGroup[]}

Returns the child chunk groups reachable from this group.

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {Record}

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

Groups child chunk groups by their `*Order` options and sorts each group
by descending order and deterministic chunk-group comparison.

#### `getEntrypointChunk()`

* Returns: {Chunk}

Returns the chunk which contains the entrypoint modules
(or at least the execution of them)

#### `getFiles()`

* Returns: {string[]}

Collects the emitted files produced by every chunk in the group.

#### `getModulePostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Returns the module's bottom-up traversal index within this group.

#### `getModulePreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Returns the module's top-down traversal index within this group.

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

Returns the parent chunk groups that can lead to this group.

#### `getRuntimeChunk()`

* Returns: {Chunk}

Fetches the chunk reference containing the webpack bootstrap code

#### `hasBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {boolean}

Checks whether an async dependency block is associated with this group.

#### `hasParent(parent)`

* `parent` {ChunkGroup}
* Returns: {boolean}

Checks whether the provided group is registered as a parent.

#### `insertChunk(chunk, before)`

* `chunk` {Chunk}
* `before` {Chunk}
* Returns: {boolean}

Inserts a chunk directly before another chunk that already belongs to the
group, preserving the rest of the ordering.

#### `isInitial()`

* Returns: {boolean}

Indicates whether this chunk group is loaded as part of the initial page
load instead of being created lazily.

#### `pushChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Appends a chunk to the group when it is not already a member.

#### `remove()`

* Returns: {void}

Disconnects this group from its parents, children, and chunks.
Child groups are reconnected to this group's parents so the surrounding
graph remains intact after removal.

#### `removeChild(group)`

* `group` {ChunkGroup}
* Returns: {boolean}

Removes a child chunk group and clears the corresponding parent link on
the removed child.

#### `removeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Removes a chunk from this group.

#### `removeParent(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

Removes a parent chunk group and clears the reverse child relationship.

#### `replaceChunk(oldChunk, newChunk)`

* `oldChunk` {Chunk}
* `newChunk` {Chunk}
* Returns: {boolean}

Replaces one member chunk with another while preserving the group's
ordering and avoiding duplicates.

#### `setEntrypointChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Sets the chunk with the entrypoint modules for an entrypoint.

#### `setModulePostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Stores the module's bottom-up traversal index within this group.

#### `setModulePreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Stores the module's top-down traversal index within this group.

#### `setRuntimeChunk(chunk)`

* `chunk` {Chunk}
* Returns: {void}

Sets the runtimeChunk for an entrypoint.

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Moves a chunk to the front of the group or inserts it when it is not
already present.

***

## Class: `EnvironmentPlugin`

### Constructors

#### `new EnvironmentPlugin(keys)`

* `keys` {string|string[]|Record[]}
* Returns: {EnvironmentPlugin}

Creates an instance of EnvironmentPlugin.

### Properties

* `defaultValues` {Record}
* `keys` {string[]}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `EvalDevToolModulePlugin`

### Constructors

#### `new EvalDevToolModulePlugin([options])`

* `options` {EvalDevToolModulePluginOptions}
* Returns: {EvalDevToolModulePlugin}

Creates an instance of EvalDevToolModulePlugin.

### Properties

* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `sourceUrlComment` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `EvalSourceMapDevToolPlugin`

### Constructors

#### `new EvalSourceMapDevToolPlugin([inputOptions])`

* `inputOptions` {string|SourceMapDevToolPluginOptions}
* Returns: {EvalSourceMapDevToolPlugin}

Creates an instance of EvalSourceMapDevToolPlugin.

### Properties

* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `options` {SourceMapDevToolPluginOptions}
* `sourceMapComment` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ExternalModule`

### Extends

- {Module}

### Constructors

#### `new ExternalModule(request, type, userRequest[, dependencyMeta])`

* `request` {ExternalModuleRequest}
* `type` {ExternalsType}
* `userRequest` {string}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}
* Returns: {ExternalModule}

Creates an instance of ExternalModule.

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable<Chunk>} 
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}
* `depth` {number} Returns the depth.
Updates the depth using the provided value.
* `errors` {any}
* `exportsArgument` {string} Gets exports argument.
* `externalType` {ExternalsType}
* `factoryMeta` {FactoryMeta}
* `hasEqualsChunks` {any}
* `hash` {string} Returns the hash of the module.
* `hot` {boolean}
* `id` {string|number} Returns the module id assigned by the chunk graph.
Updates the module id using the provided value.
* `index` {number} Returns the pre-order index.
Updates the pre-order index using the provided value.
* `index2` {number} Returns the post-order index.
Updates the post-order index using the provided value.
* `issuer` {Module} Returns the issuer.
Updates the issuer using the provided value.
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string} Gets module argument.
* `needId` {boolean}
* `optimizationBailout` {string|object[]} Gets optimization bailout.
* `optional` {boolean} 
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile} 
* `renderedHash` {string} Returns the rendered hash of the module.
* `request` {ExternalModuleRequest}
* `resolveOptions` {ResolveOptions}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>} 
* `userRequest` {string}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}
* `getExternalModuleNodeCommonjsInitFragment` {object}
* `ModuleExternalInitFragment` {ModuleExternalInitFragment}

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

Adds the provided file dependencies to the module.

#### `addChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Adds the provided chunk to the module.

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

Adds code generation dependency.

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

Adds the provided error to the module.

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

Adds presentational dependency.

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

Adds the provided warning to the module.

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

Builds the module using the provided compilation context.

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

Returns true if the module can be placed in the chunk.

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

Generates code and runtime requirements for this module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getChunks()`

> Stability: 0 - Deprecated

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getErrors()`

* Returns: {Iterable}

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

Returns export type.

#### `getNumberOfChunks()`

> Stability: 0 - Deprecated

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

Gets number of errors.

#### `getNumberOfWarnings()`

* Returns: {number}

Gets number of warnings.

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets side effects connection state.

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Checks whether this module contains the chunk.

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module contains the module graph.

#### `identifier()`

* Returns: {string}

Returns the unique identifier used to reference this module.

#### `invalidateBuild()`

* Returns: {void}

Invalidates the cached state associated with this value.

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk.

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk group.

#### `isEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

#### `isInChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this module is in the provided chunk.

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

Checks whether this module is optional.

#### `isProvided(exportName)`

> Stability: 0 - Deprecated

* `exportName` {string}
* Returns: {boolean}

Checks whether this module provides the specified export.

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

Gets the library identifier.

#### `nameForCondition()`

* Returns: {string}

Returns the path used when matching this module against rule conditions.

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

Checks whether the module needs to be rebuilt for the current build state.

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated: Use needBuild instead

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Checks whether it needs rebuild.

#### `originalSource()`

* Returns: {Source}

Gets the original source.

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

Returns a human-readable identifier for this module.

#### `removeChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Removes the provided chunk from the module.

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}
* Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `size([type])`

* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated: Use codeGeneration() instead

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Returns generated source.

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {ExternalModuleHooks}

Returns the attached hooks.

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated: In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

* `module` {Module}
* Returns: {ReadonlySet}

Gets source basic types.

***

## Class: `ExternalsPlugin`

### Constructors

#### `new ExternalsPlugin(type, externals)`

* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|object}
* `externals` {Externals}
* Returns: {ExternalsPlugin}

Creates an instance of ExternalsPlugin.

### Properties

* `externals` {Externals}
* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Generator`

### Constructors

#### `new Generator()`

* Returns: {Generator}

### Methods

#### `generate(module, __namedParameters)`

* `module` {NormalModule}
* `__namedParameters` {GenerateContext}
* Returns: {Source}

Generates generated code for this runtime module.

#### `getConcatenationBailoutReason(module, context)`

* `module` {NormalModule}
* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getSize(module[, type])`

* `module` {NormalModule}
* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `getTypes(module)`

* `module` {NormalModule}
* Returns: {ReadonlySet}

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

Returns the source types available for this module.

#### `updateHash(hash, __namedParameters)`

* `hash` {Hash}
* `__namedParameters` {UpdateHashContextGenerator}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `byType(map)`

* `map` {object}
* Returns: {ByTypeGenerator}

Returns generator by type.

***

## Class: `HotModuleReplacementPlugin`

### Constructors

#### `new HotModuleReplacementPlugin()`

* Returns: {HotModuleReplacementPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `getParserHooks(parser)`

* `parser` {JavascriptParser}
* Returns: {HMRJavascriptParserHooks}

Returns the attached hooks.

***

## Class: `HotUpdateChunk`

### Extends

- {Chunk}

### Constructors

#### `new HotUpdateChunk()`

* Returns: {HotUpdateChunk}

### Properties

* `auxiliaryFiles` {Set}
* `chunkReason` {string}
* `contentHash` {Record}
* `cssFilenameTemplate` {string|object}
* `debugId` {number}
* `entryModule` {Module} Returns entry module.
* `extraAsync` {boolean}
* `filenameTemplate` {string|object}
* `files` {Set<string>}
* `groupsIterable` {SortableSet<ChunkGroup>} Gets groups iterable.
* `hash` {string}
* `id` {string|number}
* `idNameHints` {SortableSet}
* `ids` {ChunkId[]}
* `modulesIterable` {Iterable<Module>} 
* `name` {string}
* `preventIntegration` {boolean}
* `rendered` {boolean}
* `renderedHash` {string}
* `runtime` {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

Adds the provided chunk group to the chunk.

#### `addModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {boolean}

Adds the provided module to the chunk.

#### `canBeInitial()`

* Returns: {boolean}

Checks whether it can be initial.

#### `canBeIntegrated(otherChunk)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* Returns: {boolean}

Checks whether this chunk can be integrated with another chunk.

#### `compareTo(otherChunk)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* Returns: {-1|0|1}

Compares this chunk with another chunk.

#### `containsModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {boolean}

Checks whether this chunk contains the module.

#### `disconnectFromGroups()`

* Returns: {void}

Disconnects from groups.

#### `getAllAsyncChunks()`

* Returns: {Set}

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

Gets all async chunks.

#### `getAllInitialChunks()`

* Returns: {Set}

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

Gets all initial chunks.

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set}

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

Gets all referenced async entrypoints.

#### `getAllReferencedChunks()`

* Returns: {Set}

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

Gets all referenced chunks.

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

* `chunkGraph` {ChunkGraph}
* `filterFn` {object}
* Returns: {Record}

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

Gets child ids by orders.

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {ChunkChildIdsByOrdersMapByData}

Gets child ids by orders map.

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* Returns: {ChunkChildOfTypeInOrder[]}

Gets children of type in order.

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

* `realHash` {boolean}
* Returns: {ChunkMaps}

Returns the chunk map information.

#### `getChunkModuleMaps(filterFn)`

> Stability: 0 - Deprecated

* `filterFn` {object}
* Returns: {ChunkModuleMaps}

Gets chunk module maps.

#### `getEntryOptions()`

* Returns: {EntryOptions}

Gets entry options.

#### `getModules()`

> Stability: 0 - Deprecated

* Returns: {Module[]}

Returns the modules for this chunk.

#### `getNumberOfGroups()`

* Returns: {number}

Gets number of groups.

#### `getNumberOfModules()`

> Stability: 0 - Deprecated

* Returns: {number}

Gets the number of modules in this chunk.

#### `hasAsyncChunks()`

* Returns: {boolean}

Checks whether this chunk has async chunks.

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {object}
* Returns: {boolean}

Checks whether this chunk contains the chunk graph.

#### `hasEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

Checks whether this chunk has an entry module.

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

> Stability: 0 - Deprecated

* `filterFn` {object}
* `filterChunkFn` {object}
* Returns: {boolean}

Checks whether this chunk contains a matching module in the graph.

#### `hasRuntime()`

* Returns: {boolean}

Checks whether this chunk has runtime.

#### `integrate(otherChunk)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* Returns: {boolean}

Integrates another chunk into this chunk when possible.

#### `integratedSize(otherChunk, options)`

> Stability: 0 - Deprecated

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}
* Returns: {number}

Returns the integrated size with another chunk.

#### `isEmpty()`

> Stability: 0 - Deprecated

* Returns: {boolean}

Checks whether this chunk is empty.

#### `isInGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {boolean}

Checks whether this chunk is in group.

#### `isOnlyInitial()`

* Returns: {boolean}

Checks whether this chunk is only initial.

#### `modulesSize()`

> Stability: 0 - Deprecated

* Returns: {number}

Returns the total size of all modules in this chunk.

#### `moveModule(module, otherChunk)`

> Stability: 0 - Deprecated

* `module` {Module}
* `otherChunk` {Chunk}
* Returns: {void}

Moves a module from this chunk to another chunk.

#### `remove()`

> Stability: 0 - Deprecated

* Returns: {void}

Removes this chunk from the chunk graph and chunk groups.

#### `removeGroup(chunkGroup)`

* `chunkGroup` {ChunkGroup}
* Returns: {void}

Removes the provided chunk group from the chunk.

#### `removeModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

Removes the provided module from the chunk.

#### `size([options])`

> Stability: 0 - Deprecated

* `options` {ChunkSizeOptions}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `split(newChunk)`

* `newChunk` {Chunk}
* Returns: {void}

Processes the provided new chunk.

#### `updateHash(hash, chunkGraph)`

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Updates the hash with the data contributed by this instance.

***

## Class: `IgnorePlugin`

### Constructors

#### `new IgnorePlugin(options)`

* `options` {IgnorePluginOptions}
* Returns: {IgnorePlugin}

Creates an instance of IgnorePlugin.

### Properties

* `options` {IgnorePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### `checkIgnore(resolveData)`

* `resolveData` {BeforeContextResolveData|ResolveData}
* Returns: {false}

Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.

***

## Class: `InitFragment`

### Type Parameters

#### GenerateContext

`GenerateContext`

### Constructors

#### `new InitFragment(content, stage, position[, key][, endContent])`

###### GenerateContext

`GenerateContext`
* `content` {string|Source}
* `stage` {number}
* `position` {number}
* `key` {string}
* `endContent` {string|Source}
* Returns: {InitFragment}

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

Creates an instance of InitFragment.

### Properties

* `content` {string|Source}
* `endContent` {string|Source}
* `key` {string}
* `position` {number}
* `stage` {number}
* `STAGE_ASYNC_BOUNDARY` {number}
* `STAGE_ASYNC_DEPENDENCIES` {number}
* `STAGE_ASYNC_HARMONY_IMPORTS` {number}
* `STAGE_CONSTANTS` {number}
* `STAGE_HARMONY_EXPORTS` {number}
* `STAGE_HARMONY_IMPORTS` {number}
* `STAGE_PROVIDES` {number}

### Methods

#### `deserialize(context)`

* `context` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getContent(context)`

* `context` {GenerateContext}
* Returns: {string|Source}

Returns the source code that will be included as initialization code.

#### `getEndContent(context)`

* `context` {GenerateContext}
* Returns: {string|Source}

Returns the source code that will be included at the end of the module.

#### `serialize(context)`

* `context` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### Static method: `addToSource(source, initFragments, context)`

###### Context

`Context`
* `source` {Source}
* `initFragments` {MaybeMergeableInitFragment[]}
* `context` {Context}
* Returns: {Source}

Adds the provided source to the init fragment.

***

## Class: `JavascriptModulesPlugin`

### Constructors

#### `new JavascriptModulesPlugin([options])`

* `options` {object}
* Returns: {JavascriptModulesPlugin}

### Properties

* `options` {object}
* `chunkHasJs` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### `renderBootstrap(renderContext, hooks)`

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Bootstrap}

Renders the generated source of the bootstrap code.

#### `renderChunk(renderContext, hooks)`

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Source}

Renders the rendered source.

#### `renderMain(renderContext, hooks, compilation)`

* `renderContext` {MainRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* `compilation` {Compilation}
* Returns: {Source}

Renders the newly generated source from rendering.

#### `renderModule(module, renderContext, hooks)`

* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {Source}

Renders the newly generated source from rendering.

#### `renderRequire(renderContext, hooks)`

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {string}

Renders the generated source of the require function.

#### `updateHashWithBootstrap(hash, renderContext, hooks)`

* `hash` {Hash}
* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* Returns: {void}

Updates hash with bootstrap.

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}
* Returns: {TemplatePath}

Gets chunk filename template.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksJavascriptModulesPlugin}

Returns the attached hooks.

***

## Class: `LibManifestPlugin`

### Constructors

#### `new LibManifestPlugin(options)`

* `options` {LibManifestPluginOptions}
* Returns: {LibManifestPlugin}

Creates an instance of LibManifestPlugin.

### Properties

* `options` {LibManifestPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `LibraryTemplatePlugin`

### Constructors

#### `new LibraryTemplatePlugin(name, target, umdNamedDefine, auxiliaryComment, exportProperty)`

* `name` {LibraryName}
* `target` {string}
* `umdNamedDefine` {boolean}
* `auxiliaryComment` {AuxiliaryComment}
* `exportProperty` {LibraryExport}
* Returns: {LibraryTemplatePlugin}

Creates an instance of LibraryTemplatePlugin.

### Properties

* `library` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `LoaderOptionsPlugin`

### Constructors

#### `new LoaderOptionsPlugin([options])`

* `options` {LoaderOptionsPluginOptions|MatchObject}
* Returns: {LoaderOptionsPlugin}

Creates an instance of LoaderOptionsPlugin.

### Properties

* `options` {LoaderOptionsPluginOptions|MatchObject}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `LoaderTargetPlugin`

### Constructors

#### `new LoaderTargetPlugin(target)`

* `target` {string}
* Returns: {LoaderTargetPlugin}

Creates an instance of LoaderTargetPlugin.

### Properties

* `target` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ManifestPlugin`

### Constructors

#### `new ManifestPlugin([options])`

* `options` {ManifestPluginOptions}
* Returns: {ManifestPlugin}

Creates an instance of ManifestPlugin.

### Properties

* `options` {ManifestPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Module`

### Extends

- {DependenciesBlock}

### Extended by

- {ExternalModule}
- {NormalModule}
- {RuntimeModule}

### Constructors

#### `new Module(type[, context][, layer])`

* `type` {string}
* `context` {string}
* `layer` {string}
* Returns: {Module}

Creates an instance of Module.

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable<Chunk>} 
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `depth` {number} Returns the depth.
Updates the depth using the provided value.
* `errors` {any}
* `exportsArgument` {string} Gets exports argument.
* `factoryMeta` {FactoryMeta}
* `hasEqualsChunks` {any}
* `hash` {string} Returns the hash of the module.
* `hot` {boolean}
* `id` {string|number} Returns the module id assigned by the chunk graph.
Updates the module id using the provided value.
* `index` {number} Returns the pre-order index.
Updates the pre-order index using the provided value.
* `index2` {number} Returns the post-order index.
Updates the post-order index using the provided value.
* `issuer` {Module} Returns the issuer.
Updates the issuer using the provided value.
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string} Gets module argument.
* `needId` {boolean}
* `optimizationBailout` {string|object[]} Gets optimization bailout.
* `optional` {boolean} 
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile} 
* `renderedHash` {string} Returns the rendered hash of the module.
* `resolveOptions` {ResolveOptions}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>} 
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

Adds the provided file dependencies to the module.

#### `addChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Adds the provided chunk to the module.

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

Adds code generation dependency.

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

Adds the provided error to the module.

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

Adds presentational dependency.

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

Adds the provided warning to the module.

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

Builds the module using the provided compilation context.

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

Returns true if the module can be placed in the chunk.

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

Generates code and runtime requirements for this module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getChunks()`

> Stability: 0 - Deprecated

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getErrors()`

* Returns: {Iterable}

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

Returns export type.

#### `getNumberOfChunks()`

> Stability: 0 - Deprecated

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

Gets number of errors.

#### `getNumberOfWarnings()`

* Returns: {number}

Gets number of warnings.

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets side effects connection state.

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Checks whether this module contains the chunk.

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module contains the module graph.

#### `identifier()`

* Returns: {string}

Returns the unique identifier used to reference this module.

#### `invalidateBuild()`

* Returns: {void}

Invalidates the cached state associated with this value.

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk.

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk group.

#### `isEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

#### `isInChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this module is in the provided chunk.

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

Checks whether this module is optional.

#### `isProvided(exportName)`

> Stability: 0 - Deprecated

* `exportName` {string}
* Returns: {boolean}

Checks whether this module provides the specified export.

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

Gets the library identifier.

#### `nameForCondition()`

* Returns: {string}

Returns the path used when matching this module against rule conditions.

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

Checks whether the module needs to be rebuilt for the current build state.

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated: Use needBuild instead

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Checks whether it needs rebuild.

#### `originalSource()`

* Returns: {Source}

Gets the original source.

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

Returns a human-readable identifier for this module.

#### `removeChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Removes the provided chunk from the module.

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `size([type])`

* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated: Use codeGeneration() instead

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Returns generated source.

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated: In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

* `module` {Module}
* Returns: {ReadonlySet}

Gets source basic types.

***

## Class: `ModuleFactory`

### Constructors

#### `new ModuleFactory()`

* Returns: {ModuleFactory}

### Methods

#### `create(data, callback)`

* `data` {ModuleFactoryCreateData}
* `callback` {object}
* Returns: {void}

Processes the provided data.

***

## Class: `ModuleGraph`

### Constructors

#### `new ModuleGraph()`

* Returns: {ModuleGraph}

### Properties

* `ModuleGraphConnection` {ModuleGraphConnection}

### Methods

#### `addExplanation(dependency, explanation)`

* `dependency` {Dependency}
* `explanation` {string}
* Returns: {void}

Adds the provided dependency to the module graph.

#### `addExtraReason(module, explanation)`

* `module` {Module}
* `explanation` {string}
* Returns: {void}

Adds the provided module to the module graph.

#### `cached(fn, args)`

###### T

`T` *extends* {any[]}

###### R

`R`
* `fn` {object}
* `args` {T}
* Returns: {R}

Returns computed value or cached.

#### `cloneModuleAttributes(sourceModule, targetModule)`

* `sourceModule` {Module}
* `targetModule` {Module}
* Returns: {void}

Clones module attributes.

#### `copyOutgoingModuleConnections(oldModule, newModule, filterConnection)`

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {object}
* Returns: {void}

Copies outgoing module connections.

#### `dependencyCacheProvide(dependency, args)`

###### D

`D` *extends* {Dependency}

###### ARGS

`ARGS` *extends* {any[]}

###### R

`R`
* `dependency` {D}
* `args` {ARGS|unknown}
* Returns: {R}

Dependency cache provide.

#### `finishUpdateParent()`

* Returns: {void}

Finish update parent.

#### `freeze([cacheStage])`

* `cacheStage` {string}
* Returns: {void}

Processes the provided cache stage.

#### `getConnection(dependency)`

* `dependency` {Dependency}
* Returns: {ModuleGraphConnection}

Returns the connection.

#### `getDepth(module)`

* `module` {Module}
* Returns: {number}

Returns the depth of the module.

#### `getExportInfo(module, exportName)`

* `module` {Module}
* `exportName` {string}
* Returns: {ExportInfo}

Returns info about the export.

#### `getExportsInfo(module)`

* `module` {Module}
* Returns: {ExportsInfo}

Returns info about the exports.

#### `getIncomingConnections(module)`

* `module` {Module}
* Returns: {Iterable}

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

Gets incoming connections.

#### `getIncomingConnectionsByOriginModule(module)`

* `module` {Module}
* Returns: {ReadonlyMap}

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

Gets incoming connections by origin module.

#### `getIssuer(module)`

* `module` {Module}
* Returns: {Module}

Returns the issuer module.

#### `getMeta(thing)`

* `thing` {object}
* Returns: {Meta}

Returns metadata.

#### `getMetaIfExisting(thing)`

* `thing` {object}
* Returns: {Meta}

Gets meta if existing.

#### `getModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

Returns the referenced module.

#### `getOptimizationBailout(module)`

* `module` {Module}
* Returns: {string|object[]}

Gets optimization bailout.

#### `getOrigin(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

Returns the referencing module.

#### `getOutgoingConnections(module)`

* `module` {Module}
* Returns: {Iterable}

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

Gets outgoing connections.

#### `getOutgoingConnectionsByModule(module)`

* `module` {Module}
* Returns: {ReadonlyMap}

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

Gets outgoing connections by module.

#### `getParentBlock(dependency)`

* `dependency` {Dependency}
* Returns: {DependenciesBlock}

Returns parent block.

#### `getParentBlockIndex(dependency)`

* `dependency` {Dependency}
* Returns: {number}

Gets parent block index.

#### `getParentModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

Gets parent module.

#### `getPostOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets post order index.

#### `getPreOrderIndex(module)`

* `module` {Module}
* Returns: {number}

Gets pre order index.

#### `getProfile(module)`

* `module` {Module}
* Returns: {ModuleProfile}

Returns the module profile.

#### `getProvidedExports(module)`

* `module` {Module}
* Returns: {true|string[]}

Gets provided exports.

#### `getReadOnlyExportInfo(module, exportName)`

* `module` {Module}
* `exportName` {string}
* Returns: {ExportInfo}

Gets read only export info.

#### `getResolvedModule(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

Gets resolved module.

#### `getResolvedOrigin(dependency)`

* `dependency` {Dependency}
* Returns: {Module}

Gets resolved origin.

#### `getUsedExports(module, runtime)`

* `module` {Module}
* `runtime` {RuntimeSpec}
* Returns: {boolean|SortableSet}

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

Returns the used exports.

#### `isAsync(module)`

* `module` {Module}
* Returns: {boolean}

Checks whether this module graph is async.

#### `isDeferred(module)`

* `module` {Module}
* Returns: {boolean}

Checks whether this module graph is deferred.

#### `isExportProvided(module, exportName)`

* `module` {Module}
* `exportName` {string|string[]}
* Returns: {boolean}

Checks whether this module graph is export provided.

#### `moveModuleConnections(oldModule, newModule, filterConnection)`

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {object}
* Returns: {void}

Move module connections.

#### `removeAllModuleAttributes()`

* Returns: {void}

Removes all module attributes.

#### `removeConnection(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes connection.

#### `removeModuleAttributes(module)`

* `module` {Module}
* Returns: {void}

Removes module attributes.

#### `setAsync(module)`

* `module` {Module}
* Returns: {void}

Updates async using the provided module.

#### `setDepth(module, depth)`

* `module` {Module}
* `depth` {number}
* Returns: {void}

Updates depth using the provided module.

#### `setDepthIfLower(module, depth)`

* `module` {Module}
* `depth` {number}
* Returns: {boolean}

Sets depth if lower.

#### `setIssuer(module, issuer)`

* `module` {Module}
* `issuer` {Module}
* Returns: {void}

Updates issuer using the provided module.

#### `setIssuerIfUnset(module, issuer)`

* `module` {Module}
* `issuer` {Module}
* Returns: {void}

Sets issuer if unset.

#### `setModuleMemCaches(moduleMemCaches)`

* `moduleMemCaches` {Map}
* Returns: {void}

Sets module mem caches.

#### `setParentDependenciesBlockIndex(dependency, index)`

* `dependency` {Dependency}
* `index` {number}
* Returns: {void}

Sets parent dependencies block index.

#### `setParents(dependency, block, module[, indexInBlock])`

* `dependency` {Dependency}
* `block` {DependenciesBlock}
* `module` {Module}
* `indexInBlock` {number}
* Returns: {void}

Updates parents using the provided dependency.

#### `setPostOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets post order index.

#### `setPostOrderIndexIfUnset(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {boolean}

Sets post order index if unset.

#### `setPreOrderIndex(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {void}

Sets pre order index.

#### `setPreOrderIndexIfUnset(module, index)`

* `module` {Module}
* `index` {number}
* Returns: {boolean}

Sets pre order index if unset.

#### `setProfile(module[, profile])`

* `module` {Module}
* `profile` {ModuleProfile}
* Returns: {void}

Updates profile using the provided module.

#### `setResolvedModule(originModule, dependency, module)`

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* Returns: {void}

Sets resolved module.

#### `unfreeze()`

* Returns: {void}

#### `updateModule(dependency, module)`

* `dependency` {Dependency}
* `module` {Module}
* Returns: {void}

Updates module using the provided dependency.

#### `updateParent(dependency[, connection][, parentModule])`

* `dependency` {Dependency}
* `connection` {ModuleGraphConnection}
* `parentModule` {Module}
* Returns: {void}

Updates parent using the provided dependency.

#### Static method: `clearModuleGraphForModule(module)`

> Stability: 0 - Deprecated

* `module` {Module}
* Returns: {void}

Clear module graph for module.

#### Static method: `getModuleGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}
* Returns: {ModuleGraph}

Gets module graph for module.

#### Static method: `setModuleGraphForModule(module, moduleGraph)`

> Stability: 0 - Deprecated

* `module` {Module}
* `moduleGraph` {ModuleGraph}
* Returns: {void}

Sets module graph for module.

***

## Class: `ModuleGraphConnection`

### Constructors

#### `new ModuleGraphConnection(originModule, dependency, module[, explanation][, weak][, condition])`

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* `explanation` {string}
* `weak` {boolean}
* `condition` {false|object}
* Returns: {ModuleGraphConnection}

Creates an instance of ModuleGraphConnection.

### Properties

* `condition` {false|object}
* `conditional` {boolean}
* `dependency` {Dependency}
* `explanation` {string}
* `explanations` {Set}
* `module` {Module}
* `originModule` {Module}
* `resolvedModule` {Module}
* `resolvedOriginModule` {Module}
* `weak` {boolean}
* `addConnectionStates` {object}
* `CIRCULAR_CONNECTION` {CIRCULAR_CONNECTION}
* `TRANSITIVE_ONLY` {TRANSITIVE_ONLY}

### Methods

#### `addCondition(condition)`

* `condition` {object}
* Returns: {void}

Adds the provided condition to the module graph connection.

#### `addExplanation(explanation)`

* `explanation` {string}
* Returns: {void}

Adds the provided explanation to the module graph connection.

#### `clone()`

* Returns: {ModuleGraphConnection}

#### `getActiveState(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {ConnectionState}

Returns true: fully active, false: inactive, TRANSITIVE: direct module inactive, but transitive connection maybe active.

#### `isActive(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module graph connection is active.

#### `isTargetActive(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module graph connection is target active.

#### `setActive(value)`

* `value` {boolean}
* Returns: {void}

Updates active using the provided value.

***

## Class: `MultiCompiler`

### Constructors

#### `new MultiCompiler(compilers, options)`

* `compilers` {Compiler[]|Record}
* `options` {MultiCompilerOptions}
* Returns: {MultiCompiler}

Creates an instance of MultiCompiler.

### Properties

* `compilers` {Compiler[]}
* `dependencies` {WeakMap<Compiler, string[]>}
* `hooks` {Readonly<object>}
* `inputFileSystem` {InputFileSystem} Sets input file system.
* `intermediateFileSystem` {IntermediateFileSystem} Sets intermediate file system.
* `options` {WebpackOptionsNormalized[]|MultiCompilerOptions}
* `outputFileSystem` {OutputFileSystem} Sets output file system.
* `outputPath` {string}
* `running` {boolean}
* `watchFileSystem` {WatchFileSystem} Sets watch file system.

### Methods

#### `close(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided error callback.

#### `getInfrastructureLogger(name)`

* `name` {string|object}
* Returns: {WebpackLogger}

Gets infrastructure logger.

#### `purgeInputFileSystem()`

* Returns: {void}

#### `run(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

Processes the provided multi stat.

#### `runWithDependencies(compilers, fn, callback)`

> Stability: 0 - Deprecated: This method should have been private

* `compilers` {Compiler[]}
* `fn` {object}
* `callback` {CallbackWebpackFunction_2}
* Returns: {void}

Run with dependencies.

#### `setDependencies(compiler, dependencies)`

* `compiler` {Compiler}
* `dependencies` {string[]}
* Returns: {void}

Updates dependencies using the provided compiler.

#### `validateDependencies(callback)`

* `callback` {CallbackWebpackFunction_2}
* Returns: {boolean}

Validate dependencies.

#### `watch(watchOptions, handler)`

* `watchOptions` {WatchOptions|WatchOptions[]}
* `handler` {CallbackWebpackFunction_2}
* Returns: {MultiWatching}

Returns a compiler watcher.

***

## Class: `MultiStats`

### Constructors

#### `new MultiStats()`

* Returns: {MultiStats}

### Properties

* `hash` {string}
* `stats` {Stats[]}

### Methods

#### `hasErrors()`

* Returns: {boolean}

Checks whether this multi stats has errors.

#### `hasWarnings()`

* Returns: {boolean}

Checks whether this multi stats has warnings.

#### `toJson([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {StatsCompilation}

Returns json output.

#### `toString([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {string}

Returns a string representation.

***

## Class: `NoEmitOnErrorsPlugin`

### Constructors

#### `new NoEmitOnErrorsPlugin()`

* Returns: {NoEmitOnErrorsPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `NormalModule`

### Extends

- {Module}

### Constructors

#### `new NormalModule(__namedParameters)`

* `__namedParameters` {NormalModuleCreateData}
* Returns: {NormalModule}

### Properties

* `binary` {boolean}
* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable<Chunk>} 
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `depth` {number} Returns the depth.
Updates the depth using the provided value.
* `error` {WebpackError}
* `errors` {any}
* `exportsArgument` {string} Gets exports argument.
* `extractSourceMap` {boolean}
* `factoryMeta` {FactoryMeta}
* `generator` {Generator}
* `generatorOptions` {GeneratorOptions}
* `hasEqualsChunks` {any}
* `hash` {string} Returns the hash of the module.
* `hot` {boolean}
* `id` {string|number} Returns the module id assigned by the chunk graph.
Updates the module id using the provided value.
* `index` {number} Returns the pre-order index.
Updates the pre-order index using the provided value.
* `index2` {number} Returns the post-order index.
Updates the post-order index using the provided value.
* `issuer` {Module} Returns the issuer.
Updates the issuer using the provided value.
* `isUsed` {any}
* `layer` {string}
* `loaders` {LoaderItem[]}
* `matchResource` {string}
* `moduleArgument` {string} Gets module argument.
* `needId` {boolean}
* `optimizationBailout` {string|object[]} Gets optimization bailout.
* `optional` {boolean} 
* `parent` {DependenciesBlock}
* `parser` {ParserClass}
* `parserOptions` {ParserOptions}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile} 
* `rawRequest` {string}
* `renderedHash` {string} Returns the rendered hash of the module.
* `request` {string}
* `resolveOptions` {ResolveOptions}
* `resource` {string}
* `resourceResolveData` {ResourceSchemeData|Partial}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>} 
* `userRequest` {string}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

Adds the provided file dependencies to the module.

#### `addChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Adds the provided chunk to the module.

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

Adds code generation dependency.

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

Adds the provided error to the module.

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

Adds presentational dependency.

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

Adds the provided warning to the module.

#### `applyNoParseRule(rule, content)`

* `rule` {string|RegExp|object}
* `content` {string}
* Returns: {boolean}

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

Builds the module using the provided compilation context.

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

Returns true if the module can be placed in the chunk.

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

Generates code and runtime requirements for this module.

#### `createSource(context, content[, sourceMap][, associatedObjectForCache])`

* `context` {string}
* `content` {string|Buffer}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}
* Returns: {Source}

#### `createSourceForAsset(context, name, content[, sourceMap][, associatedObjectForCache])`

* `context` {string}
* `name` {string}
* `content` {string|Buffer}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}
* Returns: {Source}

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getChunks()`

> Stability: 0 - Deprecated

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getCurrentLoader(loaderContext[, index])`

* `loaderContext` {AnyLoaderContext}
* `index` {number}
* Returns: {LoaderItem}

#### `getErrors()`

* Returns: {Iterable}

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

Returns export type.

#### `getNumberOfChunks()`

> Stability: 0 - Deprecated

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

Gets number of errors.

#### `getNumberOfWarnings()`

* Returns: {number}

Gets number of warnings.

#### `getResource()`

* Returns: {string}

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets side effects connection state.

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Checks whether this module contains the chunk.

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module contains the module graph.

#### `identifier()`

* Returns: {string}

Returns the unique identifier used to reference this module.

#### `invalidateBuild()`

* Returns: {void}

Invalidates the cached state associated with this value.

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk.

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk group.

#### `isEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

#### `isInChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this module is in the provided chunk.

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

Checks whether this module is optional.

#### `isProvided(exportName)`

> Stability: 0 - Deprecated

* `exportName` {string}
* Returns: {boolean}

Checks whether this module provides the specified export.

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

Gets the library identifier.

#### `markModuleAsErrored(error)`

* `error` {WebpackError}
* Returns: {void}

#### `nameForCondition()`

* Returns: {string}

Returns the path used when matching this module against rule conditions.

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

Checks whether the module needs to be rebuilt for the current build state.

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated: Use needBuild instead

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Checks whether it needs rebuild.

#### `originalSource()`

* Returns: {Source}

Gets the original source.

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

Returns a human-readable identifier for this module.

#### `removeChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Removes the provided chunk from the module.

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}
* Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `shouldPreventParsing(noParseRule, request)`

* `noParseRule` {string|RegExp|object|string|RegExp|object[]}
* `request` {string}
* Returns: {boolean}

#### `size([type])`

* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated: Use codeGeneration() instead

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Returns generated source.

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `deserialize(context)`

* `context` {ObjectDeserializerContext}
* Returns: {NormalModule}

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {NormalModuleCompilationHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated: In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

* `module` {Module}
* Returns: {ReadonlySet}

Gets source basic types.

***

## Class: `NormalModuleReplacementPlugin`

### Constructors

#### `new NormalModuleReplacementPlugin(resourceRegExp, newResource)`

* `resourceRegExp` {RegExp}
* `newResource` {string|object}
* Returns: {NormalModuleReplacementPlugin}

Create an instance of the plugin

### Properties

* `newResource` {string|object}
* `resourceRegExp` {RegExp}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Parser`

### Extended by

- {JavascriptParser}

### Constructors

#### `new Parser()`

* Returns: {ParserClass}

### Methods

#### `parse(source, state)`

* `source` {string|Buffer|PreparsedAst}
* `state` {ParserState}
* Returns: {ParserState}

Parses the provided source and updates the parser state.

***

## Class: `PlatformPlugin`

### Constructors

#### `new PlatformPlugin(platform)`

* `platform` {Partial}
* Returns: {PlatformPlugin}

Creates an instance of PlatformPlugin.

### Properties

* `platform` {Partial}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `PrefetchPlugin`

### Constructors

#### `new PrefetchPlugin(context[, request])`

* `context` {string}
* `request` {string}
* Returns: {PrefetchPlugin}

Creates an instance of PrefetchPlugin.

### Properties

* `context` {string}
* `request` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ProgressPlugin`

### Constructors

#### `new ProgressPlugin([options])`

* `options` {ProgressPluginArgument}
* Returns: {ProgressPlugin}

Creates an instance of ProgressPlugin.

### Properties

* `dependenciesCount` {number}
* `handler` {object}
* `modulesCount` {number}
* `options` {ProgressPluginOptions}
* `percentBy` {"entries"|"modules"|"dependencies"}
* `profile` {boolean}
* `showActiveModules` {boolean}
* `showDependencies` {boolean}
* `showEntries` {boolean}
* `showModules` {boolean}
* `createDefaultHandler` {object}
* `defaultOptions` {Required}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler|MultiCompiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `getReporter(compiler)`

* `compiler` {Compiler}
* Returns: {object}

Returns a progress reporter, if any.

***

## Class: `ProvidePlugin`

### Constructors

#### `new ProvidePlugin(definitions)`

* `definitions` {Record}
* Returns: {ProvidePlugin}

Creates an instance of ProvidePlugin.

### Properties

* `definitions` {Record}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Resolver`

### Constructors

#### `new Resolver()`

* Returns: {Resolver}

### Properties

* `fileSystem` {FileSystem}
* `hooks` {KnownHooks}
* `options` {ResolveOptionsResolverFactoryObject1}

### Methods

#### `doResolve(hook, request, message, resolveContext, callback)`

* `hook` {AsyncSeriesBailHook}
* `request` {ResolveRequest}
* `message` {string}
* `resolveContext` {ResolveContext}
* `callback` {object}
* Returns: {void}

#### `ensureHook(name)`

* `name` {string|AsyncSeriesBailHook}
* Returns: {AsyncSeriesBailHook}

#### `getHook(name)`

* `name` {string|AsyncSeriesBailHook}
* Returns: {AsyncSeriesBailHook}

#### `isDirectory(path)`

* `path` {string}
* Returns: {boolean}

#### `isModule(path)`

* `path` {string}
* Returns: {boolean}

#### `isPrivate(path)`

* `path` {string}
* Returns: {boolean}

#### `join(path, request)`

* `path` {string}
* `request` {string}
* Returns: {string}

#### `normalize(path)`

* `path` {string}
* Returns: {string}

#### `parse(identifier)`

* `identifier` {string}
* Returns: {ParsedIdentifier}

#### `resolve(context, path, request, resolveContext, callback)`

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* `resolveContext` {ResolveContext}
* `callback` {object}
* Returns: {void}

#### `resolveSync(context, path, request)`

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* Returns: {string|false}

***

## Class: `RuntimeModule`

### Extends

- {Module}

### Extended by

- {GetChunkFilenameRuntimeModule}
- {JsonpChunkLoadingRuntimeModule}
- {CssLoadingRuntimeModule}
- {ModuleChunkLoadingRuntimeModule}

### Constructors

#### `new RuntimeModule(name[, stage])`

* `name` {string}
* `stage` {number}
* Returns: {RuntimeModule}

Creates an instance of RuntimeModule.

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `chunksIterable` {Iterable<Chunk>} 
* `codeGenerationDependencies` {Dependency[]}
* `compilation` {Compilation}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `dependentHash` {boolean}
* `depth` {number} Returns the depth.
Updates the depth using the provided value.
* `errors` {any}
* `exportsArgument` {string} Gets exports argument.
* `factoryMeta` {FactoryMeta}
* `fullHash` {boolean}
* `hasEqualsChunks` {any}
* `hash` {string} Returns the hash of the module.
* `hot` {boolean}
* `id` {string|number} Returns the module id assigned by the chunk graph.
Updates the module id using the provided value.
* `index` {number} Returns the pre-order index.
Updates the pre-order index using the provided value.
* `index2` {number} Returns the post-order index.
Updates the post-order index using the provided value.
* `issuer` {Module} Returns the issuer.
Updates the issuer using the provided value.
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string} Gets module argument.
* `name` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} Gets optimization bailout.
* `optional` {boolean} 
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile} 
* `renderedHash` {string} Returns the rendered hash of the module.
* `resolveOptions` {ResolveOptions}
* `stage` {number}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>} 
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}
* `STAGE_ATTACH` {number} Runtime modules which attach to handlers of other runtime modules
* `STAGE_BASIC` {number} Runtime modules with simple dependencies on other runtime modules
* `STAGE_NORMAL` {number} Runtime modules without any dependencies to other runtime modules
* `STAGE_TRIGGER` {number} Runtime modules which trigger actions on bootstrap

### Methods

#### `addBlock(block)`

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

Adds the provided file dependencies to the module.

#### `addChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Adds the provided chunk to the module.

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

Adds code generation dependency.

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

Adds the provided error to the module.

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

Adds presentational dependency.

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

Adds the provided warning to the module.

#### `attach(compilation, chunk[, chunkGraph])`

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Processes the provided compilation.

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

Builds the module using the provided compilation context.

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

Returns true if the module can be placed in the chunk.

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

Generates code and runtime requirements for this module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `generate()`

* Returns: {string}

Generates runtime code for this runtime module.

#### `getChunks()`

> Stability: 0 - Deprecated

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getErrors()`

* Returns: {Iterable}

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

Returns export type.

#### `getGeneratedCode()`

* Returns: {string}

Gets generated code.

#### `getNumberOfChunks()`

> Stability: 0 - Deprecated

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

Gets number of errors.

#### `getNumberOfWarnings()`

* Returns: {number}

Gets number of warnings.

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets side effects connection state.

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Checks whether this module contains the chunk.

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module contains the module graph.

#### `identifier()`

* Returns: {string}

Returns the unique identifier used to reference this module.

#### `invalidateBuild()`

* Returns: {void}

Invalidates the cached state associated with this value.

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk.

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk group.

#### `isEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

#### `isInChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this module is in the provided chunk.

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

Checks whether this module is optional.

#### `isProvided(exportName)`

> Stability: 0 - Deprecated

* `exportName` {string}
* Returns: {boolean}

Checks whether this module provides the specified export.

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

Gets the library identifier.

#### `nameForCondition()`

* Returns: {string}

Returns the path used when matching this module against rule conditions.

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

Checks whether the module needs to be rebuilt for the current build state.

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated: Use needBuild instead

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Checks whether it needs rebuild.

#### `originalSource()`

* Returns: {Source}

Gets the original source.

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

Returns a human-readable identifier for this module.

#### `removeChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Removes the provided chunk from the module.

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `shouldIsolate()`

* Returns: {boolean}

Returns true, if the runtime module should get it's own scope.

#### `size([type])`

* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated: Use codeGeneration() instead

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Returns generated source.

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated: In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

* `module` {Module}
* Returns: {ReadonlySet}

Gets source basic types.

***

## Class: `SourceMapDevToolPlugin`

### Constructors

#### `new SourceMapDevToolPlugin([options])`

* `options` {SourceMapDevToolPluginOptions}
* Returns: {SourceMapDevToolPlugin}

Creates an instance of SourceMapDevToolPlugin.

### Properties

* `fallbackModuleFilenameTemplate` {DevtoolFallbackModuleFilenameTemplate}
* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `options` {SourceMapDevToolPluginOptions}
* `sourceMapFilename` {string|false}
* `sourceMappingURLComment` {string|false|object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Stats`

### Constructors

#### `new Stats(compilation)`

* `compilation` {Compilation}
* Returns: {Stats}

Creates an instance of Stats.

### Properties

* `compilation` {Compilation}
* `endTime` {number}
* `hash` {string}
* `startTime` {number}

### Methods

#### `hasErrors()`

* Returns: {boolean}

Checks whether this stats has errors.

#### `hasWarnings()`

* Returns: {boolean}

Checks whether this stats has warnings.

#### `toJson([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {StatsCompilation}

Returns json output.

#### `toString([options])`

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}
* Returns: {string}

Returns a string representation.

***

## Class: `Template`

### Constructors

#### `new Template()`

* Returns: {Template}

### Properties

* `NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS` {number}
* `NUMBER_OF_IDENTIFIER_START_CHARS` {number}

### Methods

#### Static method: `asString(str)`

* `str` {string|string[]}
* Returns: {string}

Returns a single string from array.

#### Static method: `getFunctionContent(fn)`

* `fn` {Stringable}
* Returns: {string}

Gets function content.

#### Static method: `getModulesArrayBounds(modules)`

* `modules` {WithId[]}
* Returns: {false|number|number}

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

Gets modules array bounds.

#### Static method: `indent(s)`

* `s` {string|string[]}
* Returns: {string}

Returns converted identity.

#### Static method: `numberToIdentifier(n)`

* `n` {number}
* Returns: {string}

Number to identifier.

#### Static method: `numberToIdentifierContinuation(n)`

* `n` {number}
* Returns: {string}

Number to identifier continuation.

#### Static method: `prefix(s, prefix)`

* `s` {string|string[]}
* `prefix` {string}
* Returns: {string}

Returns new prefix string.

#### Static method: `renderChunkModules(renderContext, modules, renderModule[, prefix])`

* `renderContext` {ChunkRenderContextJavascriptModulesPlugin}
* `modules` {Module[]}
* `renderModule` {object}
* `prefix` {string}
* Returns: {Source}

Renders chunk modules.

#### Static method: `renderChunkRuntimeModules(runtimeModules, renderContext)`

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin}
* Returns: {Source}

Renders chunk runtime modules.

#### Static method: `renderRuntimeModules(runtimeModules, renderContext)`

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin|object}
* Returns: {Source}

Renders runtime modules.

#### Static method: `toComment(str)`

* `str` {string}
* Returns: {string}

Returns a commented version of string.

#### Static method: `toIdentifier(str)`

* `str` {string}
* Returns: {string}

Returns created identifier.

#### Static method: `toNormalComment(str)`

* `str` {string}
* Returns: {string}

Returns a commented version of string.

#### Static method: `toPath(str)`

* `str` {string}
* Returns: {string}

Returns normalized bundle-safe path.

***

## Class: `WatchIgnorePlugin`

### Constructors

#### `new WatchIgnorePlugin(options)`

* `options` {WatchIgnorePluginOptions}
* Returns: {WatchIgnorePlugin}

Creates an instance of WatchIgnorePlugin.

### Properties

* `options` {WatchIgnorePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `Watching`

### Constructors

#### `new Watching()`

* Returns: {Watching}

### Properties

* `blocked` {boolean}
* `callbacks` {object[]}
* `closed` {boolean}
* `compiler` {Compiler}
* `handler` {CallbackWebpackFunction_2}
* `invalid` {boolean}
* `lastWatcherStartTime` {number}
* `pausedWatcher` {Watcher}
* `running` {boolean}
* `startTime` {number}
* `suspended` {boolean}
* `watcher` {Watcher}
* `watchOptions` {WatchOptions}

### Methods

#### `close(callback)`

* `callback` {object}
* Returns: {void}

Processes the provided error callback.

#### `invalidate([callback])`

* `callback` {object}
* Returns: {void}

Processes the provided error callback.

#### `resume()`

* Returns: {void}

#### `suspend()`

* Returns: {void}

#### `watch(files, dirs, missing)`

* `files` {Iterable}
* `dirs` {Iterable}
* `missing` {Iterable}
* Returns: {void}

Processes the provided file.

***

## Class: `WebpackError`

### Extends

- {Error}

### Indexable

\[`index`: {number}\]: {object}

### Constructors

#### `new WebpackError([message][, options])`

* `message` {string}
* `options` {object}
* Returns: {WebpackError}

Creates an instance of WebpackError.

### Properties

* `chunk` {Chunk}
* `details` {string}
* `file` {string}
* `hideStack` {boolean}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `message` {string}
* `module` {Module}
* `name` {string}
* `stack` {string}
* `stackTraceLimit` {number} The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).
The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.
If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

### Methods

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

* `targetObject` {object}
* `constructorOpt` {Function}
* Returns: {void}

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.
```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```
The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.
The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.
The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:
```js
function a() {
  b();
}
function b() {
  c();
}
function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;
  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}
a();
```

#### Static method: `prepareStackTrace(err, stackTraces)`

* `err` {Error}
* `stackTraces` {CallSite[]}
* Returns: {any}

***

## Class: `WebpackOptionsApply`

### Extends

- {OptionsApply}

### Constructors

#### `new WebpackOptionsApply()`

* Returns: {WebpackOptionsApply}

### Methods

#### `process(options, compiler[, interception])`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compiler` {Compiler}
* `interception` {WebpackOptionsInterception}
* Returns: {WebpackOptionsNormalizedWithDefaults}

Returns options object.

***

## Class: `WebpackOptionsDefaulter`

### Constructors

#### `new WebpackOptionsDefaulter()`

* Returns: {WebpackOptionsDefaulter}

### Methods

#### `process(options)`

* `options` {Configuration}
* Returns: {WebpackOptionsNormalized}

Returns normalized webpack options.

***

## Class: `WebpackOptionsValidationError`

### Extends

- {Error}

### Constructors

#### `new WebpackOptionsValidationError(errors, schema[, configuration])`

* `errors` {SchemaUtilErrorObject[]} array of error objects
* `schema` {Schema} schema
* `configuration` {ValidationErrorConfiguration} configuration
* Returns: {ValidationError}

### Properties

* `baseDataPath` {string} 
* `errors` {SchemaUtilErrorObject[]} 
* `headerName` {string} 
* `message` {string}
* `name` {string}
* `postFormatter` {PostFormatter} 
* `schema` {Schema} 
* `stack` {string}
* `stackTraceLimit` {number} The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

### Methods

#### `formatSchema(schema[, logic][, prevSchemas])`

* `schema` {Schema} schema
* `logic` {boolean} logic
* `prevSchemas` {object[]} prev schemas
* Returns: {string} formatted schema

#### `formatValidationError(error)`

* `error` {SchemaUtilErrorObject} error object
* Returns: {string} formatted error object

#### `formatValidationErrors(errors)`

* `errors` {SchemaUtilErrorObject[]} errors
* Returns: {string} formatted errors

#### `getSchemaPart(path)`

* `path` {string} path
* Returns: {Schema} schema

#### `getSchemaPartDescription([schemaPart])`

* `schemaPart` {Schema} schema part
* Returns: {string} schema part description

#### `getSchemaPartText([schemaPart][, additionalPath][, needDot][, logic])`

* `schemaPart` {Schema} schema part
* `additionalPath` {boolean|string[]} additional path
* `needDot` {boolean} true when need dot
* `logic` {boolean} logic
* Returns: {string} schema part text

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

* `targetObject` {object}
* `constructorOpt` {Function}
* Returns: {void}

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Static method: `prepareStackTrace(err, stackTraces)`

* `err` {Error}
* `stackTraces` {CallSite[]}
* Returns: {any}

***

## Interface: `Argument`

Returns object of arguments.

### Properties

* `configs` {ArgumentConfig[]}
* `description` {string}
* `multiple` {boolean}
* `simpleType` {SimpleType}

***

## Interface: `Asset`

### Properties

* `info` {AssetInfo} info about the asset
* `name` {string} the filename of the asset
* `source` {Source} source of the asset

***

## Interface: `AssetEmittedInfo`

Checks whether this object is sorted.

### Properties

* `compilation` {Compilation}
* `content` {Buffer}
* `outputPath` {string}
* `source` {Source}
* `targetPath` {string}

***

## Interface: `Colors`

### Properties

* `bgBlack` {object}
* `bgBlackBright` {object}
* `bgBlue` {object}
* `bgBlueBright` {object}
* `bgCyan` {object}
* `bgCyanBright` {object}
* `bgGreen` {object}
* `bgGreenBright` {object}
* `bgMagenta` {object}
* `bgMagentaBright` {object}
* `bgRed` {object}
* `bgRedBright` {object}
* `bgWhite` {object}
* `bgWhiteBright` {object}
* `bgYellow` {object}
* `bgYellowBright` {object}
* `black` {object}
* `blackBright` {object}
* `blue` {object}
* `blueBright` {object}
* `bold` {object}
* `cyan` {object}
* `cyanBright` {object}
* `dim` {object}
* `gray` {object}
* `green` {object}
* `greenBright` {object}
* `hidden` {object}
* `inverse` {object}
* `italic` {object}
* `magenta` {object}
* `magentaBright` {object}
* `red` {object}
* `redBright` {object}
* `reset` {object}
* `strikethrough` {object}
* `underline` {object}
* `white` {object}
* `whiteBright` {object}
* `yellow` {object}
* `yellowBright` {object}

***

## Interface: `ColorsOptions`

Creates a colors from the provided colors option.

### Properties

* `useColor` {boolean} force use colors

***

## Interface: `Configuration`

Options object as provided by the user.

### Properties

* `amd` {false|object} Set the value of `require.amd` and `define.amd`. Or disable AMD support.
* `bail` {boolean} Report the first error as a hard error instead of tolerating it.
* `cache` {boolean|FileCacheOptions|MemoryCacheOptions} Cache generated modules and chunks to improve performance for multiple incremental builds.
* `context` {string} The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
* `dependencies` {string[]} References to other configurations to depend on.
* `devtool` {string|false|object[]} A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
* `dotenv` {boolean|DotenvPluginOptions} Enable and configure the Dotenv plugin to load environment variables from .env files.
* `entry` {string|string[]|EntryObject|object} The entry point(s) of the compilation.
* `experiments` {Experiments} Enables/Disables experiments (experimental features with relax SemVer compatibility).
* `extends` {string|string[]} Extend configuration from another configuration (only works when using webpack-cli).
* `externals` {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object|ExternalItem[]} Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
* `externalsPresets` {ExternalsPresets} Enable presets of externals for specific targets.
* `externalsType` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
* `ignoreWarnings` {RegExp|object|object[]} Ignore specific warnings.
* `infrastructureLogging` {InfrastructureLogging} Options for infrastructure level logging.
* `loader` {Loader} Custom values available in the loader context.
* `mode` {"development"|"none"|"production"} Enable production optimizations or development hints.
* `module` {ModuleOptions} Options affecting the normal modules (`NormalModuleFactory`).
* `name` {string} Name of the configuration. Used when loading multiple configurations.
* `node` {false|NodeOptions} Include polyfills or mocks for various node stuff.
* `optimization` {Optimization} Enables/Disables integrated optimizations.
* `output` {Output} Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
* `parallelism` {number} The number of parallel processed modules in the compilation.
* `performance` {false|PerformanceOptions} Configuration for web performance recommendations.
* `plugins` {false|""|0|WebpackPluginInstance|object[]} Add additional plugins to the compiler.
* `profile` {boolean} Capture timing information for each module.
* `recordsInputPath` {string|false} Store compiler state to a json file.
* `recordsOutputPath` {string|false} Load compiler state from a json file.
* `recordsPath` {string|false} Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.
* `resolve` {ResolveOptions} Options for the resolver.
* `resolveLoader` {ResolveOptions} Options for the resolver when resolving loaders.
* `snapshot` {SnapshotOptionsWebpackOptions} Options affecting how file system snapshots are created and validated.
* `stats` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions} Stats options object or preset name.
* `target` {string|false|string[]} Environment to build for. An array of environments to build for all of them when possible.
* `validate` {boolean} Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.
* `watch` {boolean} Enter watch mode, which rebuilds on file change.
* `watchOptions` {WatchOptions} Options for the watcher.

***

## Interface: `EntryObject`

Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.

### Indexable

\[`index`: {string}\]: {string|string[]|EntryDescription}

***

## Interface: `ExternalItemFunctionData`

### Properties

* `context` {string} the directory in which the request is placed
* `contextInfo` {ModuleFactoryCreateDataContextInfo} contextual information
* `dependencyType` {string} the category of the referencing dependency
* `getResolve` {object} get a resolve function with the current resolver options
* `request` {string} the request as written by the user in the require/import expression/statement

***

## Interface: `ExternalItemObjectKnown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Properties

* `byLayer` {object|object} Specify externals depending on the layer.

***

## Interface: `ExternalItemObjectUnknown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Indexable

\[`index`: {string}\]: {ExternalItemValue}

***

## Interface: `FileCacheOptions`

Options object for persistent file-based caching.

### Properties

* `allowCollectingMemory` {boolean} Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost.
* `buildDependencies` {object} Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').
* `cacheDirectory` {string} Base directory for the cache (defaults to node_modules/.cache/webpack).
* `cacheLocation` {string} Locations for the cache (defaults to cacheDirectory / name).
* `compression` {false|"gzip"|"brotli"} Compression type used for the cache files.
* `hashAlgorithm` {string} Algorithm used for generation the hash (see node.js crypto package).
* `idleTimeout` {number} Time in ms after which idle period the cache storing should happen.
* `idleTimeoutAfterLargeChanges` {number} Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time).
* `idleTimeoutForInitialStore` {number} Time in ms after which idle period the initial cache storing should happen.
* `immutablePaths` {string|RegExp[]} List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.
* `managedPaths` {string|RegExp[]} List of paths that are managed by a package manager and can be trusted to not be modified otherwise.
* `maxAge` {number} Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds).
* `maxMemoryGenerations` {number} Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache.
* `memoryCacheUnaffected` {boolean} Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory.
* `name` {string} Name for the cache. Different names will lead to different coexisting caches.
* `profile` {boolean} Track and log detailed timing information for individual cache items.
* `readonly` {boolean} Enable/disable readonly mode.
* `store` {"pack"} When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).
* `type` {"filesystem"} Filesystem caching.
* `version` {string} Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.

***

## Interface: `GeneratorOptionsByModuleTypeKnown`

Specify options for each generator.

### Properties

* `asset` {AssetGeneratorOptions} Generator options for asset modules.
* `asset/bytes` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `asset/inline` {AssetInlineGeneratorOptions} Generator options for asset/inline modules.
* `asset/resource` {AssetResourceGeneratorOptions} Generator options for asset/resource modules.
* `asset/source` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `css` {CssGeneratorOptions} Generator options for css modules.
* `css/auto` {CssModuleGeneratorOptions} Generator options for css/module modules.
* `css/global` {CssModuleGeneratorOptions} Generator options for css/module modules.
* `css/module` {CssModuleGeneratorOptions} Generator options for css/module modules.
* `javascript` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `javascript/auto` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `javascript/dynamic` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `javascript/esm` {EmptyGeneratorOptions} No generator options are supported for this module type.
* `json` {JsonGeneratorOptions} Generator options for json modules.

***

## Interface: `InputFileSystem`

Returns location of targetPath relative to rootPath.

### Properties

* `dirname` {object}
* `join` {object}
* `lstat` {LStatFs}
* `lstatSync` {LStatSync}
* `purge` {object}
* `readdir` {ReaddirFs}
* `readdirSync` {ReaddirSync}
* `readFile` {ReadFileFs}
* `readFileSync` {ReadFileSync}
* `readJson` {object}
* `readJsonSync` {object}
* `readlink` {ReadlinkFs}
* `readlinkSync` {ReadlinkSync}
* `realpath` {RealPathFs}
* `realpathSync` {RealPathSync}
* `relative` {object}
* `stat` {StatFs}
* `statSync` {StatSync}

***

## Interface: `LibraryOptions`

Options for library.

### Properties

* `amdContainer` {string} Add a container for define/require functions in the AMD module.
* `auxiliaryComment` {string|LibraryCustomUmdCommentObject} Add a comment in the UMD wrapper.
* `export` {string|string[]} Specify which export should be exposed as library.
* `name` {string|string[]|LibraryCustomUmdObject} The name of the library (some types allow unnamed libraries too).
* `type` {string} Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).
* `umdNamedDefine` {boolean} If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.

***

## Interface: `LoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `content` {string}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}
* Returns: {string|void|Buffer|Promise}

***

## Interface: `LoaderModule`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

### Properties

* `default` {RawLoaderDefinitionFunction|LoaderDefinitionFunction}
* `pitch` {PitchLoaderDefinitionFunction}
* `raw` {false}

***

## Interface: `MemoryCacheOptions`

Options object for in-memory caching.

### Properties

* `cacheUnaffected` {boolean} Additionally cache computation of modules that are unchanged and reference only unchanged modules.
* `maxGenerations` {number} Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).
* `type` {"memory"} In memory caching.

***

## Interface: `ModuleOptions`

Options affecting the normal modules (`NormalModuleFactory`).

### Properties

* `defaultRules` {false|""|0|"..."|RuleSetRule[]} An array of rules applied by default for modules.
* `exprContextCritical` {boolean} Enable warnings for full dynamic dependencies.
* `exprContextRecursive` {boolean} Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'.
* `exprContextRegExp` {boolean|RegExp} Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'.
* `exprContextRequest` {string} Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'.
* `generator` {GeneratorOptionsByModuleType} Specify options for each generator.
* `noParse` {string|RegExp|object|string|RegExp|object[]} Don't parse files matching. It's matched against the full resolved request.
* `parser` {ParserOptionsByModuleType} Specify options for each parser.
* `rules` {false|""|0|"..."|RuleSetRule[]} An array of rules applied for modules.
* `strictExportPresence` {boolean} Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'.
* `strictThisContextOnImports` {boolean} Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'.
* `unknownContextCritical` {boolean} Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'.
* `unknownContextRecursive` {boolean} Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'.
* `unknownContextRegExp` {boolean|RegExp} Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'.
* `unknownContextRequest` {string} Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'.
* `unsafeCache` {boolean|object} Cache the resolving of module requests.
* `wrappedContextCritical` {boolean} Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'.
* `wrappedContextRecursive` {boolean} Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'.
* `wrappedContextRegExp` {RegExp} Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'.

***

## Interface: `MultiCompilerOptions`

### Properties

* `parallelism` {number} how many Compilers are allows to run at the same time in parallel

***

## Interface: `ObjectDeserializerContext`

Updates set size using the provided set.

### Properties

* `read` {object}
* `setCircularReference` {object}

***

## Interface: `ObjectSerializerContext`

Updates set size using the provided set.

### Properties

* `rollback` {object}
* `setCircularReference` {object}
* `snapshot` {object}
* `write` {object}
* `writeLazy` {object}
* `writeSeparate` {object}

***

## Interface: `OutputFileSystem`

Returns location of targetPath relative to rootPath.

### Properties

* `createReadStream` {object}
* `dirname` {object}
* `join` {object}
* `lstat` {LStatFs}
* `mkdir` {Mkdir}
* `readdir` {ReaddirFs}
* `readFile` {ReadFileFs}
* `relative` {object}
* `rmdir` {object}
* `stat` {StatFs}
* `unlink` {object}
* `writeFile` {WriteFile}

***

## Interface: `ParserOptionsByModuleTypeKnown`

Specify options for each parser.

### Properties

* `asset` {AssetParserOptions} Parser options for asset modules.
* `asset/bytes` {EmptyParserOptions} No parser options are supported for this module type.
* `asset/inline` {EmptyParserOptions} No parser options are supported for this module type.
* `asset/resource` {EmptyParserOptions} No parser options are supported for this module type.
* `asset/source` {EmptyParserOptions} No parser options are supported for this module type.
* `css` {CssParserOptions} Parser options for css modules.
* `css/auto` {CssModuleParserOptions} Parser options for css/module modules.
* `css/global` {CssModuleParserOptions} Parser options for css/module modules.
* `css/module` {CssModuleParserOptions} Parser options for css/module modules.
* `javascript` {JavascriptParserOptions} Parser options for javascript modules.
* `javascript/auto` {JavascriptParserOptions} Parser options for javascript modules.
* `javascript/dynamic` {JavascriptParserOptions} Parser options for javascript modules.
* `javascript/esm` {JavascriptParserOptions} Parser options for javascript modules.
* `json` {JsonParserOptions} Parser options for JSON modules.

***

## Interface: `PathData`

### Properties

* `basename` {string}
* `chunk` {Chunk|ChunkPathData}
* `chunkGraph` {ChunkGraph}
* `contentHash` {string}
* `contentHashType` {string}
* `contentHashWithLength` {object}
* `filename` {string}
* `hash` {string}
* `hashWithLength` {object}
* `local` {string}
* `module` {Module|ModulePathData}
* `noChunkHash` {boolean}
* `prepareId` {object}
* `query` {string}
* `runtime` {RuntimeSpec}
* `url` {string}

***

## Interface: `PitchLoaderDefinitionFunction(this, remainingRequest, previousRequest, data)`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `remainingRequest` {string}
* `previousRequest` {string}
* `data` {object}
* Returns: {string|void|Buffer|Promise}

***

## Interface: `Problem`

Returns object of arguments.

### Properties

* `argument` {string}
* `expected` {string}
* `index` {number}
* `path` {string}
* `type` {ProblemType}
* `value` {string|number|boolean|RegExp}

***

## Interface: `RawLoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

* `this` {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `content` {Buffer}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}
* Returns: {string|void|Buffer|Promise}

***

## Interface: `RenderManifestOptions`

### Properties

* `chunk` {Chunk} the chunk used to render
* `chunkGraph` {ChunkGraph}
* `codeGenerationResults` {CodeGenerationResults}
* `dependencyTemplates` {DependencyTemplates}
* `fullHash` {string}
* `hash` {string}
* `moduleGraph` {ModuleGraph}
* `moduleTemplates` {object}
* `outputOptions` {OutputNormalizedWithDefaults}
* `runtimeTemplate` {RuntimeTemplate}

***

## Interface: `ResolveData`

### Properties

* `attributes` {ImportAttributes}
* `cacheable` {boolean} allow to use the unsafe cache
* `context` {string}
* `contextDependencies` {LazySet}
* `contextInfo` {ModuleFactoryCreateDataContextInfo}
* `createData` {Partial}
* `dependencies` {ModuleDependency[]}
* `dependencyType` {string}
* `fileDependencies` {LazySet}
* `ignoredModule` {Module}
* `missingDependencies` {LazySet<string>}
* `phase` {"defer"|"source"|"evaluation"}
* `request` {string}
* `resolveOptions` {ResolveOptions}

***

## Interface: `ResolveOptions`

Options object for resolving requests.

### Properties

* `alias` {object[]|object} Redirect module requests.
* `aliasFields` {string|string[][]} Fields in the description file (usually package.json) which are used to redirect requests inside the module.
* `byDependency` {object} Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm".
* `cache` {boolean} Enable caching of successfully resolved requests (cache entries are revalidated).
* `cachePredicate` {object} Predicate function to decide which requests should be cached.
* `cacheWithContext` {boolean} Include the context information in the cache identifier when caching.
* `conditionNames` {string[]} Condition names for exports field entry point.
* `descriptionFiles` {string[]} Filenames used to find a description file (like a package.json).
* `enforceExtension` {boolean} Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension).
* `exportsFields` {string[]} Field names from the description file (usually package.json) which are used to provide entry points of a package.
* `extensionAlias` {object} An object which maps extension to extension aliases.
* `extensions` {string[]} Extensions added to the request when trying to find the file.
* `fallback` {object[]|object} Redirect module requests when normal resolving fails.
* `fileSystem` {InputFileSystem} Filesystem for the resolver.
* `fullySpecified` {boolean} Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases).
* `importsFields` {string[]} Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal).
* `mainFields` {string|string[][]} Field names from the description file (package.json) which are used to find the default entry point.
* `mainFiles` {string[]} Filenames used to find the default entry point if there is no description file or main field.
* `modules` {string[]} Folder names or directory paths where to find modules.
* `plugins` {false|""|0|"..."|object|object[]} Plugins for the resolver.
* `preferAbsolute` {boolean} Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'.
* `preferRelative` {boolean} Prefer to resolve module requests as relative request and fallback to resolving as module.
* `resolver` {Resolver} Custom resolver.
* `restrictions` {string|RegExp[]} A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met.
* `roots` {string[]} A list of directories in which requests that are server-relative URLs (starting with '/') are resolved.
* `symlinks` {boolean} Enable resolving symlinks to the original location.
* `tsconfig` {string|boolean|object} TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options.
* `unsafeCache` {boolean|object} Enable caching of successfully resolved requests (cache entries are not revalidated).
* `useSyncFileSystemCalls` {boolean} Use synchronous filesystem calls for the resolver.

***

## Interface: `RuleSetRule`

A rule description with conditions and effects for modules.

### Properties

* `assert` {object} Match on import assertions of the dependency.
* `compiler` {string|RegExp|RuleSetLogicalConditions|object|RuleSetCondition[]} Match the child compiler name.
* `dependency` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match dependency type.
* `descriptionData` {object} Match values of properties in the description file (usually package.json).
* `enforce` {"pre"|"post"} Enforce this rule as pre or post step.
* `exclude` {string|RegExp|RuleSetLogicalConditionsAbsolute|object|RuleSetConditionAbsolute[]} Shortcut for resource.exclude.
* `extractSourceMap` {boolean} Enable/Disable extracting source map.
* `generator` {object} The options for the module generator.
* `include` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Shortcut for resource.include.
* `issuer` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Match the issuer of the module (The module pointing to this module).
* `issuerLayer` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match layer of the issuer of this module (The module pointing to this module).
* `layer` {string} Specifies the layer in which the module should be placed in.
* `loader` {string} Shortcut for use.loader.
* `mimetype` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match module mimetype when load from Data URI.
* `oneOf` {false|""|0|RuleSetRule[]} Only execute the first matching rule in this array.
* `options` {string|object} Shortcut for use.options.
* `parser` {object} Options for parsing.
* `phase` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match the import phase of the dependency.
* `realResource` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Match the real resource path of the module.
* `resolve` {ResolveOptions} Options for the resolver.
* `resource` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Match the resource path of the module.
* `resourceFragment` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match the resource fragment of the module.
* `resourceQuery` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match the resource query of the module.
* `rules` {false|""|0|RuleSetRule[]} Match and execute these rules when this rule is matched.
* `scheme` {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|object} Match module scheme.
* `sideEffects` {boolean} Flags a module as with or without side effects.
* `test` {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|object} Shortcut for resource.test.
* `type` {string} Module type to use for the module.
* `use` {string|RuleSetUseFunction|string|false|0|RuleSetUseFunction|object[]|object} Modifiers applied to the module when rule is matched.
* `with` {object} Match on import attributes of the dependency.

***

## Interface: `StatsOptions`

Stats options object.

### Properties

* `all` {boolean} Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).
* `assets` {boolean} Add assets information.
* `assetsSort` {string|false} Sort the assets by that field.
* `assetsSpace` {number} Space to display assets (groups will be collapsed to fit this space).
* `builtAt` {boolean} Add built at time information.
* `cached` {boolean} Add information about cached (not built) modules (deprecated: use 'cachedModules' instead).
* `cachedAssets` {boolean} Show cached assets (setting this to `false` only shows emitted files).
* `cachedModules` {boolean} Add information about cached (not built) modules.
* `children` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions|StatsValue[]} Add children information.
* `chunkGroupAuxiliary` {boolean} Display auxiliary assets in chunk groups.
* `chunkGroupChildren` {boolean} Display children of chunk groups.
* `chunkGroupMaxAssets` {number} Limit of assets displayed in chunk groups.
* `chunkGroups` {boolean} Display all chunk groups with the corresponding bundles.
* `chunkModules` {boolean} Add built modules information to chunk information.
* `chunkModulesSpace` {number} Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group).
* `chunkOrigins` {boolean} Add the origins of chunks and chunk merging info.
* `chunkRelations` {boolean} Add information about parent, children and sibling chunks to chunk information.
* `chunks` {boolean} Add chunk information.
* `chunksSort` {string|false} Sort the chunks by that field.
* `colors` {boolean|object} Enables/Disables colorful output.
* `context` {string} Context directory for request shortening.
* `dependentModules` {boolean} Show chunk modules that are dependencies of other modules of the chunk.
* `depth` {boolean} Add module depth in module graph.
* `entrypoints` {boolean|"auto"} Display the entry points with the corresponding bundles.
* `env` {boolean} Add --env information.
* `errorCause` {boolean|"auto"} Add cause to errors.
* `errorDetails` {boolean|"auto"} Add details to errors (like resolving log).
* `errorErrors` {boolean|"auto"} Add nested errors to errors (like in AggregateError).
* `errors` {boolean} Add errors.
* `errorsCount` {boolean} Add errors count.
* `errorsSpace` {number} Space to display errors (value is in number of lines).
* `errorStack` {boolean} Add internal stack trace to errors.
* `exclude` {string|boolean|RegExp|ModuleFilterItemTypes[]|object} Please use excludeModules instead.
* `excludeAssets` {string|RegExp|AssetFilterItemTypes[]|object} Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.
* `excludeModules` {string|boolean|RegExp|ModuleFilterItemTypes[]|object} Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.
* `groupAssetsByChunk` {boolean} Group assets by how their are related to chunks.
* `groupAssetsByEmitStatus` {boolean} Group assets by their status (emitted, compared for emit or cached).
* `groupAssetsByExtension` {boolean} Group assets by their extension.
* `groupAssetsByInfo` {boolean} Group assets by their asset info (immutable, development, hotModuleReplacement, etc).
* `groupAssetsByPath` {boolean} Group assets by their path.
* `groupModulesByAttributes` {boolean} Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).
* `groupModulesByCacheStatus` {boolean} Group modules by their status (cached or built and cacheable).
* `groupModulesByExtension` {boolean} Group modules by their extension.
* `groupModulesByLayer` {boolean} Group modules by their layer.
* `groupModulesByPath` {boolean} Group modules by their path.
* `groupModulesByType` {boolean} Group modules by their type.
* `groupReasonsByOrigin` {boolean} Group reasons by their origin module.
* `hash` {boolean} Add the hash of the compilation.
* `ids` {boolean} Add ids.
* `logging` {boolean|"error"|"warn"|"info"|"log"|"verbose"|"none"} Add logging output.
* `loggingDebug` {string|boolean|RegExp|FilterItemTypes[]|object} Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.
* `loggingTrace` {boolean} Add stack traces to logging output.
* `moduleAssets` {boolean} Add information about assets inside modules.
* `modules` {boolean} Add built modules information.
* `modulesSort` {string|false} Sort the modules by that field.
* `modulesSpace` {number} Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups).
* `moduleTrace` {boolean} Add dependencies and origin of warnings/errors.
* `nestedModules` {boolean} Add information about modules nested in other modules (like with module concatenation).
* `nestedModulesSpace` {number} Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group).
* `optimizationBailout` {boolean} Show reasons why optimization bailed out for modules.
* `orphanModules` {boolean} Add information about orphan modules.
* `outputPath` {boolean} Add output path information.
* `performance` {boolean} Add performance hint flags.
* `preset` {string|boolean} Preset for the default values.
* `providedExports` {boolean} Show exports provided by modules.
* `publicPath` {boolean} Add public path information.
* `reasons` {boolean} Add information about the reasons why modules are included.
* `reasonsSpace` {number} Space to display reasons (groups will be collapsed to fit this space).
* `relatedAssets` {boolean} Add information about assets that are related to other assets (like SourceMaps for assets).
* `runtime` {boolean} Add information about runtime modules (deprecated: use 'runtimeModules' instead).
* `runtimeModules` {boolean} Add information about runtime modules.
* `source` {boolean} Add the source code of modules.
* `timings` {boolean} Add timing information.
* `usedExports` {boolean} Show exports used by modules.
* `version` {boolean} Add webpack version information.
* `warnings` {boolean} Add warnings.
* `warningsCount` {boolean} Add warnings count.
* `warningsFilter` {string|RegExp|WarningFilterItemTypes[]|object} Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions.
* `warningsSpace` {number} Space to display warnings (value is in number of lines).

***

## Interface: `WebpackOptionsNormalized`

Normalized webpack options object.

### Properties

* `amd` {false|object} Set the value of `require.amd` and `define.amd`. Or disable AMD support.
* `bail` {boolean} Report the first error as a hard error instead of tolerating it.
* `cache` {CacheOptionsNormalized} Cache generated modules and chunks to improve performance for multiple incremental builds.
* `context` {string} The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
* `dependencies` {string[]} References to other configurations to depend on.
* `devServer` {false|object} Options for the webpack-dev-server.
* `devtool` {string|false|object[]} A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).
* `dotenv` {boolean|DotenvPluginOptions} Enable and configure the Dotenv plugin to load environment variables from .env files.
* `entry` {EntryNormalized} The entry point(s) of the compilation.
* `experiments` {ExperimentsNormalized} Enables/Disables experiments (experimental features with relax SemVer compatibility).
* `externals` {Externals} Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
* `externalsPresets` {ExternalsPresets} Enable presets of externals for specific targets.
* `externalsType` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"} Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).
* `ignoreWarnings` {object[]} Ignore specific warnings.
* `infrastructureLogging` {InfrastructureLogging} Options for infrastructure level logging.
* `loader` {Loader} Custom values available in the loader context.
* `mode` {"development"|"none"|"production"} Enable production optimizations or development hints.
* `module` {ModuleOptionsNormalized} Options affecting the normal modules (`NormalModuleFactory`).
* `name` {string} Name of the configuration. Used when loading multiple configurations.
* `node` {Node} Include polyfills or mocks for various node stuff.
* `optimization` {OptimizationNormalized} Enables/Disables integrated optimizations.
* `output` {OutputNormalized} Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.
* `parallelism` {number} The number of parallel processed modules in the compilation.
* `performance` {false|PerformanceOptions} Configuration for web performance recommendations.
* `plugins` {WebpackPluginInstance|object[]} Add additional plugins to the compiler.
* `profile` {boolean} Capture timing information for each module.
* `recordsInputPath` {string|false} Store compiler state to a json file.
* `recordsOutputPath` {string|false} Load compiler state from a json file.
* `resolve` {ResolveOptions} Options for the resolver.
* `resolveLoader` {ResolveOptions} Options for the resolver when resolving loaders.
* `snapshot` {SnapshotOptionsWebpackOptions} Options affecting how file system snapshots are created and validated.
* `stats` {StatsValue} Stats options object or preset name.
* `target` {string|false|string[]} Environment to build for. An array of environments to build for all of them when possible.
* `validate` {boolean} Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.
* `watch` {boolean} Enter watch mode, which rebuilds on file change.
* `watchOptions` {WatchOptions} Options for the watcher.

***

## Interface: `WebpackPluginInstance`

Plugin instance.

### Indexable

\[`index`: {string}\]: {any}

### Properties

* `apply` {object} The run point of the plugin, required method.

***

## Type: `AssetInfo`

> **AssetInfo** = {KnownAssetInfo|Record}

***

## Type: `Entry`

> **Entry** = {string|object|EntryObject|string[]}

***

## Type: `EntryNormalized`

> **EntryNormalized** = {object|EntryStaticNormalized}

***

## Type: `EntryOptions`

> **EntryOptions** = {object|Omit}

### Type Declaration

* `name` {string}

***

## Type: `ExternalItem`

> **ExternalItem** = {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object}

***

## Type: `ExternalItemFunction`

> **ExternalItemFunction** = {object|object}

***

## Type: `ExternalItemFunctionCallback`

> **ExternalItemFunctionCallback** = {object}

* `data` {ExternalItemFunctionData}
* `callback` {object}
* Returns: {void}

***

## Type: `ExternalItemFunctionDataGetResolve`

> **ExternalItemFunctionDataGetResolve** = {object}

* `options` {ResolveOptions}
* Returns: {object|object}

***

## Type: `ExternalItemFunctionDataGetResolveCallbackResult`

> **ExternalItemFunctionDataGetResolveCallbackResult** = {object}

* `context` {string}
* `request` {string}
* `callback` {object}
* Returns: {void}

***

## Type: `ExternalItemFunctionDataGetResolveResult`

> **ExternalItemFunctionDataGetResolveResult** = {object}

* `context` {string}
* `request` {string}
* Returns: {Promise}

***

## Type: `ExternalItemFunctionPromise`

> **ExternalItemFunctionPromise** = {object}

* `data` {ExternalItemFunctionData}
* Returns: {Promise}

***

## Type: `ExternalItemValue`

> **ExternalItemValue** = {string|boolean|string[]|object}

***

## Type: `Externals`

> **Externals** = {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object|ExternalItem[]}

***

## Type: `LoaderContext`

> **LoaderContext**\<`OptionsType`\> = {NormalModuleLoaderContext|LoaderRunnerLoaderContext|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext}

### Type Parameters

#### OptionsType

`OptionsType`

***

## Type: `LoaderDefinition`

> **LoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {LoaderDefinitionFunction|object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction}
* `raw` {false}

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

***

## Type: `MultiConfiguration`

> **MultiConfiguration** = {ReadonlyArray|MultiCompilerOptions}

***

## Type: `ParserState`

> **ParserState** = {ParserStateBase|Record}

***

## Type: `RawLoaderDefinition`

> **RawLoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {RawLoaderDefinitionFunction|object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction}
* `raw` {true}

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

***

## Type: `RenderManifestEntry`

> **RenderManifestEntry** = {RenderManifestEntryTemplated|RenderManifestEntryStatic}

***

## Type: `ResolvePluginInstance`

> **ResolvePluginInstance** = {object|object}

### Type Declaration

{object}

### Index Signature

\[`index`: {string}\]: {any}

* `apply` {object} The run point of the plugin, required method.

{object}

* `this` {Resolver}
* `arg1` {Resolver}
* Returns: {void}

***

## Type: `RuleSetCondition`

> **RuleSetCondition** = {string|RegExp|object|RuleSetLogicalConditions|RuleSetCondition[]}

***

## Type: `RuleSetConditionAbsolute`

> **RuleSetConditionAbsolute** = {string|RegExp|object|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]}

***

## Type: `RuleSetUse`

> **RuleSetUse** = {string|undefined|null|string|false|0|RuleSetUseFunction|object[]|RuleSetUseFunction|object}

### Type Declaration

{string}

{undefined|null|string|false|0|RuleSetUseFunction|object[]}

{RuleSetUseFunction}

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

## Type: `RuleSetUseFunction`

> **RuleSetUseFunction** = {object}

* `data` {EffectData}
* Returns: {string|RuleSetUseFunction|object|undefined|null|string|false|0|RuleSetUseFunction|object[]}

***

## Type: `RuleSetUseItem`

> **RuleSetUseItem** = {string|RuleSetUseFunction|object}

### Type Declaration

{string}

{RuleSetUseFunction}

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

## Type: `StatsAsset`

> **StatsAsset** = {KnownStatsAsset|Record}

***

## Type: `StatsChunk`

> **StatsChunk** = {KnownStatsChunk|Record}

***

## Type: `StatsChunkGroup`

> **StatsChunkGroup** = {KnownStatsChunkGroup|Record}

***

## Type: `StatsChunkOrigin`

> **StatsChunkOrigin** = {KnownStatsChunkOrigin|Record}

***

## Type: `StatsCompilation`

> **StatsCompilation** = {KnownStatsCompilation|Record}

***

## Type: `StatsError`

> **StatsError** = {KnownStatsError|Record}

***

## Type: `StatsLogging`

> **StatsLogging** = {KnownStatsLogging|Record}

***

## Type: `StatsLoggingEntry`

> **StatsLoggingEntry** = {KnownStatsLoggingEntry|Record}

***

## Type: `StatsModule`

> **StatsModule** = {KnownStatsModule|Record}

***

## Type: `StatsModuleIssuer`

> **StatsModuleIssuer** = {KnownStatsModuleIssuer|Record}

***

## Type: `StatsModuleReason`

> **StatsModuleReason** = {KnownStatsModuleReason|Record}

***

## Type: `StatsModuleTraceDependency`

> **StatsModuleTraceDependency** = {KnownStatsModuleTraceDependency|Record}

***

## Type: `StatsModuleTraceItem`

> **StatsModuleTraceItem** = {KnownStatsModuleTraceItem|Record}

***

## Type: `StatsProfile`

> **StatsProfile** = {KnownStatsProfile|Record}

***

## Type: `TemplatePath`

> **TemplatePath** = {string|object}

***

## Type: `WebpackPluginFunction`

> **WebpackPluginFunction** = {object}

* `this` {Compiler}
* `compiler` {Compiler}
* Returns: {void}

***

## `UsageState`

> `const` **UsageState**: {Readonly}

***

## `validate`

> `const` **validate**: {object}

* `configuration` {Configuration|MultiConfiguration}
* Returns: {void}

***

## `validateSchema`

> `const` **validateSchema**: {object}

* `schema` {Parameters}
* `options` {Parameters}
* `validationConfiguration` {ValidationErrorConfiguration}
* Returns: {void}

***

## `version`

> `const` **version**: {string}

***

## `webpack`

> `const` **webpack**: {_functionWebpack}

***

## `export=(options, callback)`

### Call Signature

* `options` {Configuration}
* `callback` {CallbackWebpackFunction_2}
* Returns: {Compiler}

### Call Signature

* `options` {Configuration}
* Returns: {Compiler}

### Call Signature

* `options` {MultiConfiguration}
* `callback` {CallbackWebpackFunction_2}
* Returns: {MultiCompiler}

### Call Signature

* `options` {MultiConfiguration}
* Returns: {MultiCompiler}
