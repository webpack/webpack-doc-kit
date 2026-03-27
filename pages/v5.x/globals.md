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

## 
### Class: `AsyncDependenciesBlock`

### Extends

- {DependenciesBlock}

### Constructors

#### `new AsyncDependenciesBlock(groupOptions[, loc][, request])`

---
### AsyncDependenciesBlock

* `groupOptions` {string|GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}

* ###Returns: {AsyncDependenciesBlock}

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

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addDependency(dependency)`

---
### addDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `clearDependenciesAndBlocks()`

---
### clearDependenciesAndBlocks

* ###Returns: {void}

Removes all dependencies and blocks

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getRootBlock()`

---
### getRootBlock

* ###Returns: {DependenciesBlock}

#### `removeDependency(dependency)`

---
### removeDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

***

## 
### Class: `AutomaticPrefetchPlugin`

### Constructors

#### `new AutomaticPrefetchPlugin()`

---
### AutomaticPrefetchPlugin

* ###Returns: {AutomaticPrefetchPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `BannerPlugin`

### Constructors

#### `new BannerPlugin(options)`

---
### BannerPlugin

* `options` {BannerPluginArgument}

* ###Returns: {BannerPlugin}

### Properties

* `banner` {object}
* `options` {BannerPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Cache`

### Constructors

#### `new Cache()`

---
### Cache

* ###Returns: {CacheClass}

### Properties

* `hooks` {object}
* `STAGE_DEFAULT` {number}
* `STAGE_DISK` {number}
* `STAGE_MEMORY` {number}
* `STAGE_NETWORK` {number}

### Methods

#### `beginIdle()`

---
### beginIdle

* ###Returns: {void}

#### `endIdle(callback)`

---
### endIdle

* `callback` {CallbackCacheCache<void>}

* ###Returns: {void}

#### `get(identifier, etag, callback)`

---
### get

###### T

`T`

* `identifier` {string}
* `etag` {Etag}
* `callback` {CallbackCacheCache<T>}

* ###Returns: {void}

#### `shutdown(callback)`

---
### shutdown

* `callback` {CallbackCacheCache<void>}

* ###Returns: {void}

#### `store(identifier, etag, data, callback)`

---
### store

###### T

`T`

* `identifier` {string}
* `etag` {Etag}
* `data` {T}
* `callback` {CallbackCacheCache<void>}

* ###Returns: {void}

#### `storeBuildDependencies(dependencies, callback)`

---
### storeBuildDependencies

* `dependencies` {Iterable<string>}
* `callback` {CallbackCacheCache<void>}

* ###Returns: {void}

After this method has succeeded the cache can only be restored when build dependencies are

***

## 
### Class: `Chunk`

### Extended by

- {HotUpdateChunk}

### Constructors

#### `new Chunk([name][, backCompat])`

---
### Chunk

* `name` {string}
* `backCompat` {boolean}

* ###Returns: {Chunk}

### Properties

* `auxiliaryFiles` {Set<string>}
* `chunkReason` {string}
* `contentHash` {Record<string, string>}
* `cssFilenameTemplate` {string|object}
* `debugId` {number}
* `entryModule` {Module} 
* `extraAsync` {boolean}
* `filenameTemplate` {string|object}
* `files` {Set<string>}
* `groupsIterable` {SortableSet<ChunkGroup>}
* `hash` {string}
* `id` {string|number}
* `idNameHints` {SortableSet<string>}
* `ids` {ChunkId[]}
* `modulesIterable` {Iterable<Module>}
* `name` {string}
* `preventIntegration` {boolean}
* `rendered` {boolean}
* `renderedHash` {string}
* `runtime` {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

---
### addGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {void}

#### `addModule(module)`

---
### addModule

* `module` {Module}

* ###Returns: {boolean}

#### `canBeInitial()`

---
### canBeInitial

* ###Returns: {boolean}

#### `canBeIntegrated(otherChunk)`

---
### canBeIntegrated

* `otherChunk` {Chunk}

* ###Returns: {boolean}

#### `compareTo(otherChunk)`

---
### compareTo

* `otherChunk` {Chunk}

* ###Returns: {-1|0|1}

#### `containsModule(module)`

---
### containsModule

* `module` {Module}

* ###Returns: {boolean}

#### `disconnectFromGroups()`

---
### disconnectFromGroups

* ###Returns: {void}

#### `getAllAsyncChunks()`

---
### getAllAsyncChunks

* ###Returns: {Set<Chunk>}

#### `getAllInitialChunks()`

---
### getAllInitialChunks

* ###Returns: {Set<Chunk>}

#### `getAllReferencedAsyncEntrypoints()`

---
### getAllReferencedAsyncEntrypoints

* ###Returns: {Set<Entrypoint>}

#### `getAllReferencedChunks()`

---
### getAllReferencedChunks

* ###Returns: {Set<Chunk>}

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

---
### getChildIdsByOrders

* `chunkGraph` {ChunkGraph}
* `filterFn` {object}

* ###Returns: {Record<string, ChunkId[]>}

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

---
### getChildIdsByOrdersMap

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {object}

* ###Returns: {ChunkChildIdsByOrdersMapByData}

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

---
### getChildrenOfTypeInOrder

* `chunkGraph` {ChunkGraph}
* `type` {string}

* ###Returns: {ChunkChildOfTypeInOrder[]}

#### `getChunkMaps(realHash)`

---
### getChunkMaps

> Stability: 0 - Deprecated

* `realHash` {boolean}

* ###Returns: {ChunkMaps}

#### `getChunkModuleMaps(filterFn)`

---
### getChunkModuleMaps

* `filterFn` {object}

* ###Returns: {ChunkModuleMaps}

#### `getEntryOptions()`

---
### getEntryOptions

* ###Returns: {EntryOptions}

#### `getModules()`

---
### getModules

* ###Returns: {Module[]}

#### `getNumberOfGroups()`

---
### getNumberOfGroups

* ###Returns: {number}

#### `getNumberOfModules()`

---
### getNumberOfModules

* ###Returns: {number}

#### `hasAsyncChunks()`

---
### hasAsyncChunks

* ###Returns: {boolean}

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

---
### hasChildByOrder

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {object}

* ###Returns: {boolean}

#### `hasEntryModule()`

---
### hasEntryModule

* ###Returns: {boolean}

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

---
### hasModuleInGraph

* `filterFn` {object}
* `filterChunkFn` {object}

* ###Returns: {boolean}

#### `hasRuntime()`

---
### hasRuntime

* ###Returns: {boolean}

#### `integrate(otherChunk)`

---
### integrate

* `otherChunk` {Chunk}

* ###Returns: {boolean}

#### `integratedSize(otherChunk, options)`

---
### integratedSize

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}

* ###Returns: {number}

#### `isEmpty()`

---
### isEmpty

* ###Returns: {boolean}

#### `isInGroup(chunkGroup)`

---
### isInGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {boolean}

#### `isOnlyInitial()`

---
### isOnlyInitial

* ###Returns: {boolean}

#### `modulesSize()`

---
### modulesSize

* ###Returns: {number}

#### `moveModule(module, otherChunk)`

---
### moveModule

* `module` {Module}
* `otherChunk` {Chunk}

* ###Returns: {void}

#### `remove()`

---
### remove

* ###Returns: {void}

#### `removeGroup(chunkGroup)`

---
### removeGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {void}

#### `removeModule(module)`

---
### removeModule

* `module` {Module}

* ###Returns: {void}

#### `size([options])`

---
### size

* `options` {ChunkSizeOptions}

* ###Returns: {number}

#### `split(newChunk)`

---
### split

* `newChunk` {Chunk}

* ###Returns: {void}

#### `updateHash(hash, chunkGraph)`

---
### updateHash

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

***

## 
### Class: `ChunkGraph`

### Constructors

#### `new ChunkGraph(moduleGraph[, hashFunction])`

---
### ChunkGraph

* `moduleGraph` {ModuleGraph}
* `hashFunction` {HashFunction}

* ###Returns: {ChunkGraph}

### Properties

* `moduleGraph` {ModuleGraph}

### Methods

#### `addChunkRuntimeRequirements(chunk, items)`

---
### addChunkRuntimeRequirements

* `chunk` {Chunk}
* `items` {Set<string>}

* ###Returns: {void}

#### `addDependentHashModuleToChunk(chunk, module)`

---
### addDependentHashModuleToChunk

* `chunk` {Chunk}
* `module` {RuntimeModule}

* ###Returns: {void}

#### `addFullHashModuleToChunk(chunk, module)`

---
### addFullHashModuleToChunk

* `chunk` {Chunk}
* `module` {RuntimeModule}

* ###Returns: {void}

#### `addModuleRuntimeRequirements(module, runtime, items[, transferOwnership])`

---
### addModuleRuntimeRequirements

* `module` {Module}
* `runtime` {RuntimeSpec}
* `items` {Set<string>}
* `transferOwnership` {boolean}

* ###Returns: {void}

#### `addTreeRuntimeRequirements(chunk, items)`

---
### addTreeRuntimeRequirements

* `chunk` {Chunk}
* `items` {Iterable<string>}

* ###Returns: {void}

#### `attachDependentHashModules(chunk, modules)`

---
### attachDependentHashModules

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}

* ###Returns: {void}

#### `attachFullHashModules(chunk, modules)`

---
### attachFullHashModules

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}

* ###Returns: {void}

#### `attachModules(chunk, modules)`

---
### attachModules

* `chunk` {Chunk}
* `modules` {Iterable<Module>}

* ###Returns: {void}

#### `attachRuntimeModules(chunk, modules)`

---
### attachRuntimeModules

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}

* ###Returns: {void}

#### `canChunksBeIntegrated(chunkA, chunkB)`

---
### canChunksBeIntegrated

* `chunkA` {Chunk}
* `chunkB` {Chunk}

* ###Returns: {boolean}

#### `compareChunks(chunkA, chunkB)`

---
### compareChunks

* `chunkA` {Chunk}
* `chunkB` {Chunk}

* ###Returns: {-1|0|1}

#### `connectBlockAndChunkGroup(depBlock, chunkGroup)`

---
### connectBlockAndChunkGroup

* `depBlock` {AsyncDependenciesBlock}
* `chunkGroup` {ChunkGroup}

* ###Returns: {void}

#### `connectChunkAndEntryModule(chunk, module, entrypoint)`

---
### connectChunkAndEntryModule

* `chunk` {Chunk}
* `module` {Module}
* `entrypoint` {Entrypoint}

* ###Returns: {void}

#### `connectChunkAndModule(chunk, module)`

---
### connectChunkAndModule

* `chunk` {Chunk}
* `module` {Module}

* ###Returns: {void}

#### `connectChunkAndRuntimeModule(chunk, module)`

---
### connectChunkAndRuntimeModule

* `chunk` {Chunk}
* `module` {RuntimeModule}

* ###Returns: {void}

#### `disconnectChunk(chunk)`

---
### disconnectChunk

* `chunk` {Chunk}

* ###Returns: {void}

#### `disconnectChunkAndEntryModule(chunk, module)`

---
### disconnectChunkAndEntryModule

* `chunk` {Chunk}
* `module` {Module}

* ###Returns: {void}

#### `disconnectChunkAndModule(chunk, module)`

---
### disconnectChunkAndModule

* `chunk` {Chunk}
* `module` {Module}

* ###Returns: {void}

#### `disconnectChunkAndRuntimeModule(chunk, module)`

---
### disconnectChunkAndRuntimeModule

* `chunk` {Chunk}
* `module` {RuntimeModule}

* ###Returns: {void}

#### `disconnectChunkGroup(chunkGroup)`

---
### disconnectChunkGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {void}

#### `disconnectEntries(chunk)`

---
### disconnectEntries

* `chunk` {Chunk}

* ###Returns: {void}

#### `disconnectEntryModule(module)`

---
### disconnectEntryModule

* `module` {Module}

* ###Returns: {void}

#### `getBlockChunkGroup(depBlock)`

---
### getBlockChunkGroup

* `depBlock` {AsyncDependenciesBlock}

* ###Returns: {ChunkGroup}

#### `getChunkConditionMap(chunk, filterFn)`

---
### getChunkConditionMap

* `chunk` {Chunk}
* `filterFn` {object}

* ###Returns: {ChunkConditionMap}

#### `getChunkDependentHashModulesIterable(chunk)`

---
### getChunkDependentHashModulesIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<RuntimeModule, any, any>}

#### `getChunkEntryDependentChunksIterable(chunk)`

---
### getChunkEntryDependentChunksIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<Chunk>}

#### `getChunkEntryModulesIterable(chunk)`

---
### getChunkEntryModulesIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<Module>}

#### `getChunkEntryModulesWithChunkGroupIterable(chunk)`

---
### getChunkEntryModulesWithChunkGroupIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<Tuple<Module, Entrypoint>>}

#### `getChunkFullHashModulesIterable(chunk)`

---
### getChunkFullHashModulesIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<RuntimeModule, any, any>}

#### `getChunkFullHashModulesSet(chunk)`

---
### getChunkFullHashModulesSet

* `chunk` {Chunk}

* ###Returns: {ReadonlySet<RuntimeModule>}

#### `getChunkModuleIdMap(chunk, filterFn[, includeAllChunks])`

---
### getChunkModuleIdMap

* `chunk` {Chunk}
* `filterFn` {object}
* `includeAllChunks` {boolean}

* ###Returns: {ChunkModuleIdMapEs5Alias_2}

#### `getChunkModuleRenderedHashMap(chunk, filterFn[, hashLength][, includeAllChunks])`

---
### getChunkModuleRenderedHashMap

* `chunk` {Chunk}
* `filterFn` {object}
* `hashLength` {number}
* `includeAllChunks` {boolean}

* ###Returns: {ChunkModuleHashMap}

#### `getChunkModules(chunk)`

---
### getChunkModules

* `chunk` {Chunk}

* ###Returns: {Module[]}

#### `getChunkModulesIterable(chunk)`

---
### getChunkModulesIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<Module>}

#### `getChunkModulesIterableBySourceType(chunk, sourceType)`

---
### getChunkModulesIterableBySourceType

* `chunk` {Chunk}
* `sourceType` {string}

* ###Returns: {Iterable<Module, any, any>}

#### `getChunkModuleSourceTypes(chunk, module)`

---
### getChunkModuleSourceTypes

* `chunk` {Chunk}
* `module` {Module}

* ###Returns: {ReadonlySet<string>}

#### `getChunkModulesSize(chunk)`

---
### getChunkModulesSize

* `chunk` {Chunk}

* ###Returns: {number}

#### `getChunkModulesSizes(chunk)`

---
### getChunkModulesSizes

* `chunk` {Chunk}

* ###Returns: {Record<string, number>}

#### `getChunkRootModules(chunk)`

---
### getChunkRootModules

* `chunk` {Chunk}

* ###Returns: {Module[]}

#### `getChunkRuntimeModulesInOrder(chunk)`

---
### getChunkRuntimeModulesInOrder

* `chunk` {Chunk}

* ###Returns: {RuntimeModule[]}

#### `getChunkRuntimeModulesIterable(chunk)`

---
### getChunkRuntimeModulesIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<RuntimeModule>}

#### `getChunkRuntimeRequirements(chunk)`

---
### getChunkRuntimeRequirements

* `chunk` {Chunk}

* ###Returns: {ReadonlySet<string>}

#### `getChunkSize(chunk[, options])`

---
### getChunkSize

* `chunk` {Chunk}
* `options` {ChunkSizeOptions}

* ###Returns: {number}

#### `getIntegratedChunksSize(chunkA, chunkB[, options])`

---
### getIntegratedChunksSize

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* `options` {ChunkSizeOptions}

* ###Returns: {number}

#### `getModuleChunks(module)`

---
### getModuleChunks

* `module` {Module}

* ###Returns: {Chunk[]}

#### `getModuleChunksIterable(module)`

---
### getModuleChunksIterable

* `module` {Module}

* ###Returns: {Iterable<Chunk>}

#### `getModuleGraphHash(module, runtime[, withConnections])`

---
### getModuleGraphHash

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}

* ###Returns: {string}

#### `getModuleGraphHashBigInt(module, runtime[, withConnections])`

---
### getModuleGraphHashBigInt

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}

* ###Returns: {bigint}

#### `getModuleHash(module, runtime)`

---
### getModuleHash

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {string}

#### `getModuleId(module)`

---
### getModuleId

* `module` {Module}

* ###Returns: {string|number}

#### `getModuleRuntimeRequirements(module, runtime)`

---
### getModuleRuntimeRequirements

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {ReadonlySet<string>}

#### `getModuleRuntimes(module)`

---
### getModuleRuntimes

* `module` {Module}

* ###Returns: {RuntimeSpecSet}

#### `getModuleSourceTypes(module)`

---
### getModuleSourceTypes

* `module` {Module}

* ###Returns: {ReadonlySet<string>}

#### `getNumberOfChunkFullHashModules(chunk)`

---
### getNumberOfChunkFullHashModules

* `chunk` {Chunk}

* ###Returns: {number}

#### `getNumberOfChunkModules(chunk)`

---
### getNumberOfChunkModules

* `chunk` {Chunk}

* ###Returns: {number}

#### `getNumberOfEntryModules(chunk)`

---
### getNumberOfEntryModules

* `chunk` {Chunk}

* ###Returns: {number}

#### `getNumberOfModuleChunks(module)`

---
### getNumberOfModuleChunks

* `module` {Module}

* ###Returns: {number}

#### `getNumberOfRuntimeModules(chunk)`

---
### getNumberOfRuntimeModules

* `chunk` {Chunk}

* ###Returns: {number}

#### `getOrderedChunkModules(chunk, comparator)`

---
### getOrderedChunkModules

* `chunk` {Chunk}
* `comparator` {object}

* ###Returns: {Module[]}

#### `getOrderedChunkModulesIterable(chunk, comparator)`

---
### getOrderedChunkModulesIterable

* `chunk` {Chunk}
* `comparator` {object}

* ###Returns: {Iterable<Module>}

#### `getOrderedChunkModulesIterableBySourceType(chunk, sourceType, comparator)`

---
### getOrderedChunkModulesIterableBySourceType

* `chunk` {Chunk}
* `sourceType` {string}
* `comparator` {object}

* ###Returns: {Iterable<Module, any, any>}

#### `getOrderedModuleChunksIterable(module, sortFn)`

---
### getOrderedModuleChunksIterable

* `module` {Module}
* `sortFn` {object}

* ###Returns: {Iterable<Chunk>}

#### `getRenderedModuleHash(module, runtime)`

---
### getRenderedModuleHash

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {string}

#### `getRuntimeChunkDependentChunksIterable(chunk)`

---
### getRuntimeChunkDependentChunksIterable

* `chunk` {Chunk}

* ###Returns: {Iterable<Chunk>}

#### `getRuntimeId(runtime)`

---
### getRuntimeId

* `runtime` {string}

* ###Returns: {RuntimeId}

#### `getTreeRuntimeRequirements(chunk)`

---
### getTreeRuntimeRequirements

* `chunk` {Chunk}

* ###Returns: {ReadonlySet<string>}

#### `hasChunkEntryDependentChunks(chunk)`

---
### hasChunkEntryDependentChunks

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `hasModuleHashes(module, runtime)`

---
### hasModuleHashes

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `hasModuleInGraph(chunk, filterFn[, filterChunkFn])`

---
### hasModuleInGraph

* `chunk` {Chunk}
* `filterFn` {object}
* `filterChunkFn` {object}

* ###Returns: {boolean}

#### `integrateChunks(chunkA, chunkB)`

---
### integrateChunks

* `chunkA` {Chunk}
* `chunkB` {Chunk}

* ###Returns: {void}

#### `isEntryModule(module)`

---
### isEntryModule

* `module` {Module}

* ###Returns: {boolean}

#### `isEntryModuleInChunk(module, chunk)`

---
### isEntryModuleInChunk

* `module` {Module}
* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isModuleInChunk(module, chunk)`

---
### isModuleInChunk

* `module` {Module}
* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isModuleInChunkGroup(module, chunkGroup)`

---
### isModuleInChunkGroup

* `module` {Module}
* `chunkGroup` {ChunkGroup}

* ###Returns: {boolean}

#### `replaceModule(oldModule, newModule)`

---
### replaceModule

* `oldModule` {Module}
* `newModule` {Module}

* ###Returns: {void}

#### `setChunkModuleSourceTypes(chunk, module, sourceTypes)`

---
### setChunkModuleSourceTypes

* `chunk` {Chunk}
* `module` {Module}
* `sourceTypes` {ReadonlySet<string>}

* ###Returns: {void}

#### `setModuleHashes(module, runtime, hash, renderedHash)`

---
### setModuleHashes

* `module` {Module}
* `runtime` {RuntimeSpec}
* `hash` {string}
* `renderedHash` {string}

* ###Returns: {void}

#### `setModuleId(module, id)`

---
### setModuleId

* `module` {Module}
* `id` {ModuleId}

* ###Returns: {void}

#### `setRuntimeId(runtime, id)`

---
### setRuntimeId

* `runtime` {string}
* `id` {RuntimeId}

* ###Returns: {void}

#### `upgradeDependentToFullHashModules(chunk)`

---
### upgradeDependentToFullHashModules

* `chunk` {Chunk}

* ###Returns: {void}

#### Static method: `clearChunkGraphForChunk(chunk)`

---
### clearChunkGraphForChunk

> Stability: 0 - Deprecated

* `chunk` {Chunk}

* ###Returns: {void}

#### Static method: `clearChunkGraphForModule(module)`

---
### clearChunkGraphForModule

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {void}

#### Static method: `getChunkGraphForChunk(chunk, deprecateMessage, deprecationCode)`

---
### getChunkGraphForChunk

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `deprecateMessage` {string}
* `deprecationCode` {string}

* ###Returns: {ChunkGraph}

#### Static method: `getChunkGraphForModule(module, deprecateMessage, deprecationCode)`

---
### getChunkGraphForModule

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}

* ###Returns: {ChunkGraph}

#### Static method: `setChunkGraphForChunk(chunk, chunkGraph)`

---
### setChunkGraphForChunk

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

#### Static method: `setChunkGraphForModule(module, chunkGraph)`

---
### setChunkGraphForModule

> Stability: 0 - Deprecated

* `module` {Module}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

***

## 
### Class: `ChunkGroup`

### Extended by

- {Entrypoint}

### Constructors

#### `new ChunkGroup()`

---
### ChunkGroup

* ###Returns: {ChunkGroup}

### Properties

* `asyncEntrypointsIterable` {SortableSet<ChunkGroup>}
* `blocksIterable` {Iterable<AsyncDependenciesBlock>}
* `childrenIterable` {SortableSet<ChunkGroup>}
* `chunks` {Chunk[]}
* `debugId` {string} get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
* `getModuleIndex` {object}
* `getModuleIndex2` {object}
* `groupDebugId` {number}
* `id` {string} get a unique id for ChunkGroup, made up of its member Chunk id's
* `index` {number}
* `name` {string} returns the name of current ChunkGroup
sets a new name for current ChunkGroup
* `options` {ChunkGroupOptions}
* `origins` {OriginRecord[]}
* `parentsIterable` {SortableSet<ChunkGroup>}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

---
### addAsyncEntrypoint

* `entrypoint` {Entrypoint}

* ###Returns: {boolean}

#### `addBlock(block)`

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {boolean}

#### `addChild(group)`

---
### addChild

* `group` {ChunkGroup}

* ###Returns: {boolean}

#### `addOptions(options)`

---
### addOptions

* `options` {ChunkGroupOptions}

* ###Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

---
### addOrigin

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}

* ###Returns: {void}

#### `addParent(parentChunk)`

---
### addParent

* `parentChunk` {ChunkGroup}

* ###Returns: {boolean}

#### `checkConstraints()`

---
### checkConstraints

* ###Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

---
### compareTo

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}

* ###Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `getBlocks()`

---
### getBlocks

* ###Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

---
### getChildren

* ###Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

---
### getChildrenByOrders

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {Record<string, ChunkGroup[]>}

#### `getFiles()`

---
### getFiles

* ###Returns: {string[]}

#### `getModulePostOrderIndex(module)`

---
### getModulePostOrderIndex

* `module` {Module}

* ###Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

---
### getModulePreOrderIndex

* `module` {Module}

* ###Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

---
### getNumberOfBlocks

* ###Returns: {number}

#### `getNumberOfChildren()`

---
### getNumberOfChildren

* ###Returns: {number}

#### `getNumberOfParents()`

---
### getNumberOfParents

* ###Returns: {number}

#### `getParents()`

---
### getParents

* ###Returns: {ChunkGroup[]}

#### `hasBlock(block)`

---
### hasBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {boolean}

#### `hasParent(parent)`

---
### hasParent

* `parent` {ChunkGroup}

* ###Returns: {boolean}

#### `insertChunk(chunk, before)`

---
### insertChunk

* `chunk` {Chunk}
* `before` {Chunk}

* ###Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

---
### isInitial

* ###Returns: {boolean}

#### `pushChunk(chunk)`

---
### pushChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

---
### remove

* ###Returns: {void}

#### `removeChild(group)`

---
### removeChild

* `group` {ChunkGroup}

* ###Returns: {boolean}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `removeParent(chunkGroup)`

---
### removeParent

* `chunkGroup` {ChunkGroup}

* ###Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

---
### replaceChunk

* `oldChunk` {Chunk}
* `newChunk` {Chunk}

* ###Returns: {boolean}

#### `setModulePostOrderIndex(module, index)`

---
### setModulePostOrderIndex

* `module` {Module}
* `index` {number}

* ###Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

---
### setModulePreOrderIndex

* `module` {Module}
* `index` {number}

* ###Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `sortItems()`

---
### sortItems

* ###Returns: {void}

#### `unshiftChunk(chunk)`

---
### unshiftChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

Performs an unshift of a specific chunk

***

## 
### Class: `CleanPlugin`

### Constructors

#### `new CleanPlugin([options])`

---
### CleanPlugin

* `options` {CleanOptions}

* ###Returns: {CleanPlugin}

### Properties

* `options` {CleanOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {CleanPluginCompilationHooks}

***

## 
### Class: `CodeGenerationResults`

### Constructors

#### `new CodeGenerationResults()`

---
### CodeGenerationResults

* ###Returns: {CodeGenerationResults}

### Properties

* `map` {Map<Module, RuntimeSpecMap<CodeGenerationResult, CodeGenerationResult>>}

### Methods

#### `add(module, runtime, result)`

---
### add

* `module` {Module}
* `runtime` {RuntimeSpec}
* `result` {CodeGenerationResult}

* ###Returns: {void}

#### `get(module, runtime)`

---
### get

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {CodeGenerationResult}

#### `getData(module, runtime, key)`

---
### getData

* `module` {Module}
* `runtime` {RuntimeSpec}
* `key` {string}

* ###Returns: {any}

#### `getHash(module, runtime)`

---
### getHash

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {string}

#### `getRuntimeRequirements(module, runtime)`

---
### getRuntimeRequirements

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {ReadonlySet<string>}

#### `getSource(module, runtime, sourceType)`

---
### getSource

* `module` {Module}
* `runtime` {RuntimeSpec}
* `sourceType` {string}

* ###Returns: {Source}

#### `has(module, runtime)`

---
### has

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

***

## 
### Class: `Compilation`

### Constructors

#### `new Compilation(compiler, params)`

---
### Compilation

* `compiler` {Compiler}
* `params` {CompilationParams}

* ###Returns: {Compilation}

Creates an instance of Compilation.

### Properties

* `additionalChunkAssets` {string[]}
* `addModuleQueue` {AsyncQueue<Module, string, Module>}
* `assets` {CompilationAssets}
* `assetsInfo` {Map<string, AssetInfo>}
* `asyncEntrypoints` {Entrypoint[]}
* `bail` {boolean}
* `buildDependencies` {LazySet<string>}
* `buildQueue` {AsyncQueue<Module, Module, Module>}
* `buildTimeExecutedModules` {WeakSet<Module>}
* `builtModules` {WeakSet<Module>}
* `children` {Compilation[]}
* `childrenCounters` {Record<string, number>}
* `chunkGraph` {ChunkGraph}
* `chunkGroups` {ChunkGroup[]}
* `chunks` {Set<Chunk>}
* `chunkTemplate` {ChunkTemplate}
* `codeGeneratedModules` {WeakSet<Module>}
* `codeGenerationResults` {CodeGenerationResults}
* `comparedForEmitAssets` {Set<string>}
* `compilationDependencies` {object} 
* `compiler` {Compiler}
* `compilerPath` {string}
* `contextDependencies` {LazySet<string>}
* `creatingModuleDuringBuild` {WeakMap<Module, Set<Module>>} Modules in value are building during the build of Module in key.
Means value blocking key from finishing.
Needed to detect build cycles.
* `dependencyFactories` {Map<DependencyConstructor, ModuleFactory>}
* `dependencyTemplates` {DependencyTemplates}
* `emittedAssets` {Set<string>}
* `endTime` {number}
* `entries` {Map<string, EntryData>}
* `entrypoints` {Map<string, Entrypoint>}
* `errors` {Error[]}
* `factorizeQueue` {AsyncQueue<FactorizeModuleOptions, string, Module|ModuleFactoryResult>}
* `fileDependencies` {LazySet<string>}
* `fileSystemInfo` {FileSystemInfo}
* `fullHash` {string}
* `globalEntry` {EntryData}
* `hash` {string}
* `hooks` {Readonly<object>}
* `inputFileSystem` {InputFileSystem}
* `logger` {WebpackLogger}
* `logging` {Map<string, LogEntry[]>}
* `mainTemplate` {MainTemplate}
* `missingDependencies` {LazySet<string>}
* `moduleGraph` {ModuleGraph}
* `moduleMemCaches` {Map<Module, WeakTupleMap<any[], any>>}
* `moduleMemCaches2` {Map<Module, WeakTupleMap<any[], any>>}
* `modules` {Set<Module>}
* `moduleTemplates` {ModuleTemplates}
* `name` {string}
* `namedChunkGroups` {Map<string, ChunkGroup>}
* `namedChunks` {Map<string, Chunk>}
* `needAdditionalPass` {boolean}
* `options` {WebpackOptionsNormalizedWithDefaults}
* `outputOptions` {OutputNormalizedWithDefaults}
* `params` {CompilationParams}
* `processDependenciesQueue` {AsyncQueue<Module, Module, Module>}
* `profile` {boolean}
* `rebuildQueue` {AsyncQueue<Module, Module, Module>}
* `records` {Records}
* `requestShortener` {RequestShortener}
* `resolverFactory` {ResolverFactory}
* `runtimeTemplate` {RuntimeTemplate}
* `startTime` {number}
* `usedChunkIds` {Set<number>}
* `usedModuleIds` {Set<number>}
* `valueCacheVersions` {Map<string, ValueCacheVersion>}
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

---
### addAsyncEntrypoint

* `options` {EntryOptions}
* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}

* ###Returns: {Entrypoint}

#### `addChunk([name])`

---
### addChunk

* `name` {string}

* ###Returns: {Chunk}

This method first looks to see if a name is provided for a new chunk,
and first looks to see if any named chunks already exist and reuse that chunk instead.

#### `addChunkInGroup(groupOptions[, module][, loc][, request])`

---
### addChunkInGroup

* `groupOptions` {string|ChunkGroupOptions}
* `module` {Module}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}

* ###Returns: {ChunkGroup}

If `module` is passed, `loc` and `request` must also be passed.

#### `addEntry(context, entry, optionsOrName, callback)`

---
### addEntry

* `context` {string}
* `entry` {Dependency}
* `optionsOrName` {string|EntryOptions}
* `callback` {object}

* ###Returns: {void}

#### `addInclude(context, dependency, options, callback)`

---
### addInclude

* `context` {string}
* `dependency` {Dependency}
* `options` {EntryOptions}
* `callback` {object}

* ###Returns: {void}

#### `addModule(module, callback)`

---
### addModule

* `module` {Module}
* `callback` {object}

* ###Returns: {void}

#### `addModuleChain(context, dependency, callback)`

---
### addModuleChain

* `context` {string}
* `dependency` {Dependency}
* `callback` {object}

* ###Returns: {void}

#### `addModuleTree(__namedParameters, callback)`

---
### addModuleTree

* `__namedParameters` {object}
* `callback` {object}

* ###Returns: {void}

#### `addRuntimeModule(chunk, module[, chunkGraph])`

---
### addRuntimeModule

* `chunk` {Chunk}
* `module` {RuntimeModule}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

#### `assignDepth(module)`

---
### assignDepth

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {void}

#### `assignDepths(modules)`

---
### assignDepths

* `modules` {Set<Module>}

* ###Returns: {void}

#### `assignRuntimeIds()`

---
### assignRuntimeIds

* ###Returns: {void}

#### `buildModule(module, callback)`

---
### buildModule

* `module` {Module}
* `callback` {object}

* ###Returns: {void}

Schedules a build of the module object

#### `checkConstraints()`

---
### checkConstraints

* ###Returns: {void}

#### `clearAssets()`

---
### clearAssets

* ###Returns: {void}

#### `codeGeneration(callback)`

---
### codeGeneration

* `callback` {object}

* ###Returns: {void}

#### `createChildCompiler(name[, outputOptions][, plugins])`

---
### createChildCompiler

* `name` {string}
* `outputOptions` {Partial<OutputNormalized>}
* `plugins` {false|""|0|object|WebpackPluginInstance[]}

* ###Returns: {Compiler}

This function allows you to run another instance of webpack inside of webpack however as
a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
from parent (or top level compiler) and creates a child Compilation

#### `createChunkAssets(callback)`

---
### createChunkAssets

* `callback` {object}

* ###Returns: {void}

#### `createHash()`

---
### createHash

* ###Returns: {CodeGenerationJob[]}

#### `createModuleAssets()`

---
### createModuleAssets

* ###Returns: {void}

#### `createModuleHashes()`

---
### createModuleHashes

* ###Returns: {void}

#### `createStatsFactory(options)`

---
### createStatsFactory

* `options` {NormalizedStatsOptions}

* ###Returns: {StatsFactory}

#### `createStatsOptions([optionsOrPreset][, context])`

---
### createStatsOptions

* `optionsOrPreset` {string|boolean|StatsOptions}
* `context` {CreateStatsOptionsContext}

* ###Returns: {NormalizedStatsOptions}

#### `createStatsPrinter(options)`

---
### createStatsPrinter

* `options` {NormalizedStatsOptions}

* ###Returns: {StatsPrinter}

#### `deleteAsset(file)`

---
### deleteAsset

* `file` {string}

* ###Returns: {void}

#### `emitAsset(file, source[, assetInfo])`

---
### emitAsset

* `file` {string}
* `source` {Source}
* `assetInfo` {AssetInfo}

* ###Returns: {void}

#### `executeModule(module, options, callback)`

---
### executeModule

* `module` {Module}
* `options` {ExecuteModuleOptions}
* `callback` {object}

* ###Returns: {void}

#### `factorizeModule(options, callback)`

##### Call Signature

---
### factorizeModule

* `options` {FactorizeModuleOptions|object}
* `callback` {object}

* ###Returns: {void}

##### Call Signature

---
### factorizeModule

* `options` {FactorizeModuleOptions|object}
* `callback` {object}

* ###Returns: {void}

#### `findModule(identifier)`

---
### findModule

* `identifier` {string}

* ###Returns: {Module}

Attempts to search for a module by its identifier

#### `finish(callback)`

---
### finish

* `callback` {object}

* ###Returns: {void}

#### `getAsset(name)`

---
### getAsset

* `name` {string}

* ###Returns: {Readonly<Asset>}

#### `getAssetPath(filename, data)`

---
### getAssetPath

* `filename` {TemplatePath}
* `data` {PathData}

* ###Returns: {string}

#### `getAssetPathWithInfo(filename, data)`

---
### getAssetPathWithInfo

* `filename` {TemplatePath}
* `data` {PathData}

* ###Returns: {InterpolatedPathAndAssetInfo}

#### `getAssets()`

---
### getAssets

* ###Returns: {Readonly<Asset>[]}

#### `getCache(name)`

---
### getCache

* `name` {string}

* ###Returns: {CacheFacade}

#### `getDependencyReferencedExports(dependency, runtime)`

---
### getDependencyReferencedExports

* `dependency` {Dependency}
* `runtime` {RuntimeSpec}

* ###Returns: {string[]|ReferencedExport[]}

#### `getErrors()`

---
### getErrors

* ###Returns: {Error[]}

#### `getLogger(name)`

---
### getLogger

* `name` {string|object}

* ###Returns: {WebpackLogger}

#### `getModule(module)`

---
### getModule

* `module` {Module}

* ###Returns: {Module}

Fetches a module from a compilation by its identifier

#### `getPath(filename[, data])`

---
### getPath

* `filename` {TemplatePath}
* `data` {PathData}

* ###Returns: {string}

#### `getPathWithInfo(filename[, data])`

---
### getPathWithInfo

* `filename` {TemplatePath}
* `data` {PathData}

* ###Returns: {InterpolatedPathAndAssetInfo}

#### `getRenderManifest(options)`

---
### getRenderManifest

* `options` {RenderManifestOptions}

* ###Returns: {RenderManifestEntry[]}

#### `getStats()`

---
### getStats

* ###Returns: {Stats}

#### `getWarnings()`

---
### getWarnings

* ###Returns: {Error[]}

#### `handleModuleCreation(__namedParameters, callback)`

---
### handleModuleCreation

* `__namedParameters` {HandleModuleCreationOptions}
* `callback` {object}

* ###Returns: {void}

#### `patchChunksAfterReasonRemoval(module, chunk)`

---
### patchChunksAfterReasonRemoval

* `module` {Module}
* `chunk` {Chunk}

* ###Returns: {void}

#### `processModuleDependencies(module, callback)`

---
### processModuleDependencies

* `module` {Module}
* `callback` {object}

* ###Returns: {void}

#### `processModuleDependenciesNonRecursive(module)`

---
### processModuleDependenciesNonRecursive

* `module` {Module}

* ###Returns: {void}

#### `processRuntimeRequirements([__namedParameters])`

---
### processRuntimeRequirements

* `__namedParameters` {object}

* ###Returns: {void}

#### `rebuildModule(module, callback)`

---
### rebuildModule

* `module` {Module}
* `callback` {object}

* ###Returns: {void}

#### `removeChunkFromDependencies(block, chunk)`

---
### removeChunkFromDependencies

* `block` {DependenciesBlock}
* `chunk` {Chunk}

* ###Returns: {void}

#### `removeReasonsOfDependencyBlock(module, block)`

---
### removeReasonsOfDependencyBlock

* `module` {Module}
* `block` {DependenciesBlockLike}

* ###Returns: {void}

#### `renameAsset(file, newFile)`

---
### renameAsset

* `file` {string}
* `newFile` {string}

* ###Returns: {void}

#### `reportDependencyErrorsAndWarnings(module, blocks)`

---
### reportDependencyErrorsAndWarnings

* `module` {Module}
* `blocks` {DependenciesBlock[]}

* ###Returns: {boolean}

#### `seal(callback)`

---
### seal

* `callback` {object}

* ###Returns: {void}

#### `sortItemsWithChunkIds()`

---
### sortItemsWithChunkIds

* ###Returns: {void}

#### `summarizeDependencies()`

---
### summarizeDependencies

* ###Returns: {void}

#### `unseal()`

---
### unseal

* ###Returns: {void}

#### `updateAsset(file, newSourceOrFunction[, assetInfoUpdateOrFunction])`

---
### updateAsset

* `file` {string}
* `newSourceOrFunction` {Source|object}
* `assetInfoUpdateOrFunction` {AssetInfo|object}

* ###Returns: {void}

***

## 
### Class: `Compiler`

### Constructors

#### `new Compiler(context[, options])`

---
### Compiler

* `context` {string}
* `options` {WebpackOptionsNormalized}

* ###Returns: {Compiler}

### Properties

* `cache` {CacheClass}
* `compilerPath` {string}
* `context` {string}
* `contextTimestamps` {Map<string, "ignore"|EntryTypesIndex|OnlySafeTimeEntry|ExistenceOnlyTimeEntryTypesIndex>}
* `fileTimestamps` {Map<string, "ignore"|EntryTypesIndex|OnlySafeTimeEntry|ExistenceOnlyTimeEntryTypesIndex>}
* `fsStartTime` {number}
* `hooks` {Readonly<object>}
* `idle` {boolean}
* `immutablePaths` {Set<string|RegExp>}
* `infrastructureLogger` {object}
* `inputFileSystem` {InputFileSystem}
* `intermediateFileSystem` {IntermediateFileSystem}
* `managedPaths` {Set<string|RegExp>}
* `modifiedFiles` {ReadonlySet<string>}
* `moduleMemCaches` {Map<Module, ModuleMemCachesItem>}
* `name` {string}
* `options` {WebpackOptionsNormalized}
* `outputFileSystem` {OutputFileSystem}
* `outputPath` {string}
* `parentCompilation` {Compilation}
* `platform` {Readonly<PlatformTargetProperties>}
* `records` {Records}
* `recordsInputPath` {string}
* `recordsOutputPath` {string}
* `removedFiles` {ReadonlySet<string>}
* `requestShortener` {RequestShortener}
* `resolverFactory` {ResolverFactory}
* `root` {Compiler}
* `running` {boolean}
* `unmanagedPaths` {Set<string|RegExp>}
* `watchFileSystem` {WatchFileSystem}
* `watching` {Watching}
* `watchMode` {boolean}
* `webpack` {exports}

### Methods

#### `close(callback)`

---
### close

* `callback` {object}

* ###Returns: {void}

#### `compile(callback)`

---
### compile

* `callback` {CallbackWebpackFunction_2<Compilation, void>}

* ###Returns: {void}

#### `createChildCompiler(compilation, compilerName, compilerIndex[, outputOptions][, plugins])`

---
### createChildCompiler

* `compilation` {Compilation}
* `compilerName` {string}
* `compilerIndex` {number}
* `outputOptions` {Partial<OutputNormalized>}
* `plugins` {false|""|0|WebpackPluginInstance|object[]}

* ###Returns: {Compiler}

#### `createCompilation(params)`

---
### createCompilation

* `params` {CompilationParams}

* ###Returns: {Compilation}

#### `createContextModuleFactory()`

---
### createContextModuleFactory

* ###Returns: {ContextModuleFactory}

#### `createNormalModuleFactory()`

---
### createNormalModuleFactory

* ###Returns: {NormalModuleFactory}

#### `emitAssets(compilation, callback)`

---
### emitAssets

* `compilation` {Compilation}
* `callback` {object}

* ###Returns: {void}

#### `emitRecords(callback)`

---
### emitRecords

* `callback` {object}

* ###Returns: {void}

#### `getCache(name)`

---
### getCache

* `name` {string}

* ###Returns: {CacheFacade}

#### `getInfrastructureLogger(name)`

---
### getInfrastructureLogger

* `name` {string|object}

* ###Returns: {WebpackLogger}

#### `isChild()`

---
### isChild

* ###Returns: {boolean}

#### `newCompilation(params)`

---
### newCompilation

* `params` {CompilationParams}

* ###Returns: {Compilation}

#### `newCompilationParams()`

---
### newCompilationParams

* ###Returns: {object}

#### `purgeInputFileSystem()`

---
### purgeInputFileSystem

* ###Returns: {void}

#### `readRecords(callback)`

---
### readRecords

* `callback` {object}

* ###Returns: {void}

#### `run(callback)`

---
### run

* `callback` {CallbackWebpackFunction_2<Stats, void>}

* ###Returns: {void}

#### `runAsChild(callback)`

---
### runAsChild

* `callback` {object}

* ###Returns: {void}

#### `validate(schema, value[, options][, check])`

---
### validate

###### T

`T` *extends* {object|object[]} = {object}

* `schema` {JSONSchema4|ExtendedSchema|JSONSchema6|ExtendedSchema|JSONSchema7|ExtendedSchema|object}
* `value` {T}
* `options` {ValidationErrorConfiguration}
* `check` {object}

* ###Returns: {void}

Schema validation function with optional pre-compiled check

#### `watch(watchOptions, handler)`

---
### watch

* `watchOptions` {WatchOptions}
* `handler` {CallbackWebpackFunction_2<Stats, void>}

* ###Returns: {Watching}

***

## 
### Class: `ConcatenationScope`

### Constructors

#### `new ConcatenationScope(modulesMap, currentModule, usedNames)`

---
### ConcatenationScope

* `modulesMap` {ModuleInfo[]|Map<Module, ModuleInfo>}
* `currentModule` {ConcatenatedModuleInfo}
* `usedNames` {Set<string>}

* ###Returns: {ConcatenationScope}

### Properties

* `usedNames` {Set<string>}
* `DEFAULT_EXPORT` {string}
* `NAMESPACE_OBJECT_EXPORT` {string}

### Methods

#### `createModuleReference(module, __namedParameters)`

---
### createModuleReference

* `module` {Module}
* `__namedParameters` {Partial<ModuleReferenceOptions>}

* ###Returns: {string}

#### `getRawExport(exportName)`

---
### getRawExport

* `exportName` {string}

* ###Returns: {string}

#### `isModuleInScope(module)`

---
### isModuleInScope

* `module` {Module}

* ###Returns: {boolean}

#### `registerExport(exportName, symbol)`

---
### registerExport

* `exportName` {string}
* `symbol` {string}

* ###Returns: {void}

#### `registerNamespaceExport(symbol)`

---
### registerNamespaceExport

* `symbol` {string}

* ###Returns: {void}

#### `registerRawExport(exportName, expression)`

---
### registerRawExport

* `exportName` {string}
* `expression` {string}

* ###Returns: {void}

#### `setRawExportMap(exportName, expression)`

---
### setRawExportMap

* `exportName` {string}
* `expression` {string}

* ###Returns: {void}

#### Static method: `isModuleReference(name)`

---
### isModuleReference

* `name` {string}

* ###Returns: {boolean}

#### Static method: `matchModuleReference(name)`

---
### matchModuleReference

* `name` {string}

* ###Returns: {ModuleReferenceOptions|object}

***

## 
### Class: `ContextExclusionPlugin`

### Constructors

#### `new ContextExclusionPlugin(negativeMatcher)`

---
### ContextExclusionPlugin

* `negativeMatcher` {RegExp}

* ###Returns: {ContextExclusionPlugin}

### Properties

* `negativeMatcher` {RegExp}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ContextReplacementPlugin`

### Constructors

#### `new ContextReplacementPlugin(resourceRegExp[, newContentResource][, newContentRecursive][, newContentRegExp])`

---
### ContextReplacementPlugin

* `resourceRegExp` {RegExp}
* `newContentResource` {string|boolean|RegExp|object}
* `newContentRecursive` {boolean|RegExp|NewContentCreateContextMap}
* `newContentRegExp` {RegExp}

* ###Returns: {ContextReplacementPlugin}

### Properties

* `newContentCallback` {object}
* `newContentCreateContextMap` {object}
* `newContentRecursive` {boolean}
* `newContentRegExp` {RegExp}
* `newContentResource` {string}
* `resourceRegExp` {RegExp}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `DefinePlugin`

### Constructors

#### `new DefinePlugin(definitions)`

---
### DefinePlugin

* `definitions` {Definitions}

* ###Returns: {DefinePlugin}

Create a new define plugin

### Properties

* `definitions` {Definitions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {DefinePluginHooks}

#### Static method: `runtimeValue(fn[, options])`

---
### runtimeValue

* `fn` {object}
* `options` {true|string[]|RuntimeValueOptions}

* ###Returns: {RuntimeValue}

***

## 
### Class: `DelegatedPlugin`

### Constructors

#### `new DelegatedPlugin(options)`

---
### DelegatedPlugin

* `options` {Options}

* ###Returns: {DelegatedPlugin}

### Properties

* `options` {Options}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Dependency`

### Extended by

- {ModuleDependency}
- {NullDependency}

### Constructors

#### `new Dependency()`

---
### Dependency

* ###Returns: {Dependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `type` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

---
### couldAffectReferencingModule

* ###Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

---
### createIgnoredModule

* `context` {string}

* ###Returns: {Module}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getCondition(moduleGraph)`

---
### getCondition

* `moduleGraph` {ModuleGraph}

* ###Returns: {false|object}

#### `getContext()`

---
### getContext

* ###Returns: {string}

#### `getErrors(moduleGraph)`

---
### getErrors

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

---
### getExports

* `moduleGraph` {ModuleGraph}

* ###Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

---
### getModuleEvaluationSideEffectsState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

---
### getNumberOfIdOccurrences

* ###Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

---
### getReference

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}

* ###Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

---
### getReferencedExports

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

---
### getResourceIdentifier

* ###Returns: {string}

#### `getWarnings(moduleGraph)`

---
### getWarnings

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

---
### setLoc

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* ###Returns: {void}

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

---
### isLowPriorityDependency

* `dependency` {Dependency}

* ###Returns: {boolean}

***

## 
### Class: `DllPlugin`

### Constructors

#### `new DllPlugin(options)`

---
### DllPlugin

* `options` {DllPluginOptions}

* ###Returns: {DllPlugin}

### Properties

* `options` {DllPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `DllReferencePlugin`

### Constructors

#### `new DllReferencePlugin(options)`

---
### DllReferencePlugin

* `options` {DllReferencePluginOptions}

* ###Returns: {DllReferencePlugin}

### Properties

* `options` {DllReferencePluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `DotenvPlugin`

### Constructors

#### `new DotenvPlugin([options])`

---
### DotenvPlugin

* `options` {DotenvPluginOptions}

* ###Returns: {DotenvPlugin}

### Properties

* `options` {DotenvPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

***

## 
### Class: `DynamicEntryPlugin`

### Constructors

#### `new DynamicEntryPlugin(context, entry)`

---
### DynamicEntryPlugin

* `context` {string}
* `entry` {object}

* ###Returns: {DynamicEntryPlugin}

### Properties

* `context` {string}
* `entry` {object}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `EntryOptionPlugin`

### Constructors

#### `new EntryOptionPlugin()`

---
### EntryOptionPlugin

* ###Returns: {EntryOptionPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

#### Static method: `applyEntryOption(compiler, context, entry)`

---
### applyEntryOption

* `compiler` {Compiler}
* `context` {string}
* `entry` {EntryNormalized}

* ###Returns: {void}

#### Static method: `entryDescriptionToOptions(compiler, name, desc)`

---
### entryDescriptionToOptions

* `compiler` {Compiler}
* `name` {string}
* `desc` {EntryDescriptionNormalized}

* ###Returns: {EntryOptions}

***

## 
### Class: `EntryPlugin`

### Constructors

#### `new EntryPlugin(context, entry[, options])`

---
### EntryPlugin

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}

* ###Returns: {EntryPlugin}

An entry plugin which will handle creation of the EntryDependency

### Properties

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `createDependency(entry, options)`

---
### createDependency

* `entry` {string}
* `options` {string|EntryOptions}

* ###Returns: {EntryDependency}

***

## 
### Class: `Entrypoint`

### Extends

- {ChunkGroup}

### Constructors

#### `new Entrypoint()`

---
### Entrypoint

* ###Returns: {Entrypoint}

### Properties

* `asyncEntrypointsIterable` {SortableSet<ChunkGroup>}
* `blocksIterable` {Iterable<AsyncDependenciesBlock>}
* `childrenIterable` {SortableSet<ChunkGroup>}
* `chunks` {Chunk[]}
* `debugId` {string} get a uniqueId for ChunkGroup, made up of its member Chunk debugId's
* `getModuleIndex` {object}
* `getModuleIndex2` {object}
* `groupDebugId` {number}
* `id` {string} get a unique id for ChunkGroup, made up of its member Chunk id's
* `index` {number}
* `name` {string} returns the name of current ChunkGroup
sets a new name for current ChunkGroup
* `options` {ChunkGroupOptions}
* `origins` {OriginRecord[]}
* `parentsIterable` {SortableSet<ChunkGroup>}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

---
### addAsyncEntrypoint

* `entrypoint` {Entrypoint}

* ###Returns: {boolean}

#### `addBlock(block)`

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {boolean}

#### `addChild(group)`

---
### addChild

* `group` {ChunkGroup}

* ###Returns: {boolean}

#### `addDependOn(entrypoint)`

---
### addDependOn

* `entrypoint` {Entrypoint}

* ###Returns: {void}

#### `addOptions(options)`

---
### addOptions

* `options` {ChunkGroupOptions}

* ###Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

---
### addOrigin

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}

* ###Returns: {void}

#### `addParent(parentChunk)`

---
### addParent

* `parentChunk` {ChunkGroup}

* ###Returns: {boolean}

#### `checkConstraints()`

---
### checkConstraints

* ###Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

---
### compareTo

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}

* ###Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `dependOn(entrypoint)`

---
### dependOn

* `entrypoint` {Entrypoint}

* ###Returns: {boolean}

#### `getBlocks()`

---
### getBlocks

* ###Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

---
### getChildren

* ###Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

---
### getChildrenByOrders

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {Record<string, ChunkGroup[]>}

#### `getEntrypointChunk()`

---
### getEntrypointChunk

* ###Returns: {Chunk}

Returns the chunk which contains the entrypoint modules
(or at least the execution of them)

#### `getFiles()`

---
### getFiles

* ###Returns: {string[]}

#### `getModulePostOrderIndex(module)`

---
### getModulePostOrderIndex

* `module` {Module}

* ###Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

---
### getModulePreOrderIndex

* `module` {Module}

* ###Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

---
### getNumberOfBlocks

* ###Returns: {number}

#### `getNumberOfChildren()`

---
### getNumberOfChildren

* ###Returns: {number}

#### `getNumberOfParents()`

---
### getNumberOfParents

* ###Returns: {number}

#### `getParents()`

---
### getParents

* ###Returns: {ChunkGroup[]}

#### `getRuntimeChunk()`

---
### getRuntimeChunk

* ###Returns: {Chunk}

Fetches the chunk reference containing the webpack bootstrap code

#### `hasBlock(block)`

---
### hasBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {boolean}

#### `hasParent(parent)`

---
### hasParent

* `parent` {ChunkGroup}

* ###Returns: {boolean}

#### `insertChunk(chunk, before)`

---
### insertChunk

* `chunk` {Chunk}
* `before` {Chunk}

* ###Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

---
### isInitial

* ###Returns: {boolean}

#### `pushChunk(chunk)`

---
### pushChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

---
### remove

* ###Returns: {void}

#### `removeChild(group)`

---
### removeChild

* `group` {ChunkGroup}

* ###Returns: {boolean}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `removeParent(chunkGroup)`

---
### removeParent

* `chunkGroup` {ChunkGroup}

* ###Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

---
### replaceChunk

* `oldChunk` {Chunk}
* `newChunk` {Chunk}

* ###Returns: {boolean}

#### `setEntrypointChunk(chunk)`

---
### setEntrypointChunk

* `chunk` {Chunk}

* ###Returns: {void}

Sets the chunk with the entrypoint modules for an entrypoint.

#### `setModulePostOrderIndex(module, index)`

---
### setModulePostOrderIndex

* `module` {Module}
* `index` {number}

* ###Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

---
### setModulePreOrderIndex

* `module` {Module}
* `index` {number}

* ###Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `setRuntimeChunk(chunk)`

---
### setRuntimeChunk

* `chunk` {Chunk}

* ###Returns: {void}

Sets the runtimeChunk for an entrypoint.

#### `sortItems()`

---
### sortItems

* ###Returns: {void}

#### `unshiftChunk(chunk)`

---
### unshiftChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

Performs an unshift of a specific chunk

***

## 
### Class: `EnvironmentPlugin`

### Constructors

#### `new EnvironmentPlugin(keys)`

---
### EnvironmentPlugin

* `keys` {string|string[]|Record<string, any>[]}

* ###Returns: {EnvironmentPlugin}

### Properties

* `defaultValues` {Record<string, any>}
* `keys` {string[]}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `EvalDevToolModulePlugin`

### Constructors

#### `new EvalDevToolModulePlugin([options])`

---
### EvalDevToolModulePlugin

* `options` {EvalDevToolModulePluginOptions}

* ###Returns: {EvalDevToolModulePlugin}

### Properties

* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `sourceUrlComment` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `EvalSourceMapDevToolPlugin`

### Constructors

#### `new EvalSourceMapDevToolPlugin([inputOptions])`

---
### EvalSourceMapDevToolPlugin

* `inputOptions` {string|SourceMapDevToolPluginOptions}

* ###Returns: {EvalSourceMapDevToolPlugin}

### Properties

* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `options` {SourceMapDevToolPluginOptions}
* `sourceMapComment` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ExternalModule`

### Extends

- {Module}

### Constructors

#### `new ExternalModule(request, type, userRequest[, dependencyMeta])`

---
### ExternalModule

* `request` {ExternalModuleRequest}
* `type` {ExternalsType}
* `userRequest` {string}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}

* ###Returns: {ExternalModule}

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
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `externalType` {ExternalsType}
* `factoryMeta` {FactoryMeta}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
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

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

---
### addCacheDependencies

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* ###Returns: {void}

#### `addChunk(chunk)`

---
### addChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

---
### addCodeGenerationDependency

* `codeGenerationDependency` {Dependency}

* ###Returns: {void}

#### `addDependency(dependency)`

---
### addDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `addError(error)`

---
### addError

* `error` {WebpackError}

* ###Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

---
### addPresentationalDependency

* `presentationalDependency` {Dependency}

* ###Returns: {void}

#### `addWarning(warning)`

---
### addWarning

* `warning` {WebpackError}

* ###Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

---
### build

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}

* ###Returns: {void}

#### `chunkCondition(chunk, compilation)`

---
### chunkCondition

* `chunk` {Chunk}
* `compilation` {Compilation}

* ###Returns: {boolean}

#### `cleanupForCache()`

---
### cleanupForCache

* ###Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

---
### clearDependenciesAndBlocks

* ###Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

---
### clearWarningsAndErrors

* ###Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

---
### codeGeneration

* `context` {CodeGenerationContext}

* ###Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getChunks()`

---
### getChunks

* ###Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

---
### getConcatenationBailoutReason

* `context` {ConcatenationBailoutReasonContext}

* ###Returns: {string}

#### `getErrors()`

---
### getErrors

* ###Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

---
### getExportsType

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* ###Returns: {ExportsType}

#### `getNumberOfChunks()`

---
### getNumberOfChunks

* ###Returns: {number}

#### `getNumberOfErrors()`

---
### getNumberOfErrors

* ###Returns: {number}

#### `getNumberOfWarnings()`

---
### getNumberOfWarnings

* ###Returns: {number}

#### `getRootBlock()`

---
### getRootBlock

* ###Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

---
### getSideEffectsConnectionState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getSourceBasicTypes()`

---
### getSourceBasicTypes

* ###Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

---
### getSourceTypes

* ###Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

---
### getUnsafeCacheData

* ###Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

---
### getWarnings

* ###Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

---
### hasChunkCondition

* ###Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

---
### hasReasonForChunk

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

---
### hasReasons

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `identifier()`

---
### identifier

* ###Returns: {string}

#### `invalidateBuild()`

---
### invalidateBuild

* ###Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

---
### isAccessibleInChunk

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

---
### isAccessibleInChunkGroup

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isEntryModule()`

---
### isEntryModule

* ###Returns: {boolean}

#### `isInChunk(chunk)`

---
### isInChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isOptional(moduleGraph)`

---
### isOptional

* `moduleGraph` {ModuleGraph}

* ###Returns: {boolean}

#### `isProvided(exportName)`

---
### isProvided

* `exportName` {string}

* ###Returns: {boolean}

#### `libIdent(options)`

---
### libIdent

* `options` {LibIdentOptions}

* ###Returns: {string}

#### `nameForCondition()`

---
### nameForCondition

* ###Returns: {string}

#### `needBuild(context, callback)`

---
### needBuild

* `context` {NeedBuildContext}
* `callback` {object}

* ###Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

---
### needRebuild

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* ###Returns: {boolean}

Use needBuild instead

#### `originalSource()`

---
### originalSource

* ###Returns: {Source}

#### `readableIdentifier(requestShortener)`

---
### readableIdentifier

* `requestShortener` {RequestShortener}

* ###Returns: {string}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {void}

#### `removeDependency(dependency)`

---
### removeDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

---
### restoreFromUnsafeCache

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}

* ###Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `size([type])`

---
### size

* `type` {string}

* ###Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

---
### source

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* ###Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

---
### updateCacheModule

* `module` {Module}

* ###Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {ExternalModuleHooks}

#### Static method: `getSourceBasicTypes(module)`

---
### getSourceBasicTypes

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## 
### Class: `ExternalsPlugin`

### Constructors

#### `new ExternalsPlugin(type, externals)`

---
### ExternalsPlugin

* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|object}
* `externals` {Externals}

* ###Returns: {ExternalsPlugin}

### Properties

* `externals` {Externals}
* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|object}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Generator`

### Constructors

#### `new Generator()`

---
### Generator

* ###Returns: {Generator}

### Methods

#### `generate(module, __namedParameters)`

---
### generate

* `module` {NormalModule}
* `__namedParameters` {GenerateContext}

* ###Returns: {Source}

#### `getConcatenationBailoutReason(module, context)`

---
### getConcatenationBailoutReason

* `module` {NormalModule}
* `context` {ConcatenationBailoutReasonContext}

* ###Returns: {string}

#### `getSize(module[, type])`

---
### getSize

* `module` {NormalModule}
* `type` {string}

* ###Returns: {number}

#### `getTypes(module)`

---
### getTypes

* `module` {NormalModule}

* ###Returns: {ReadonlySet<string>}

#### `updateHash(hash, __namedParameters)`

---
### updateHash

* `hash` {Hash}
* `__namedParameters` {UpdateHashContextGenerator}

* ###Returns: {void}

#### Static method: `byType(map)`

---
### byType

* `map` {object}

* ###Returns: {ByTypeGenerator}

***

## 
### Class: `HotModuleReplacementPlugin`

### Constructors

#### `new HotModuleReplacementPlugin()`

---
### HotModuleReplacementPlugin

* ###Returns: {HotModuleReplacementPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `getParserHooks(parser)`

---
### getParserHooks

* `parser` {JavascriptParser}

* ###Returns: {HMRJavascriptParserHooks}

***

## 
### Class: `HotUpdateChunk`

### Extends

- {Chunk}

### Constructors

#### `new HotUpdateChunk()`

---
### HotUpdateChunk

* ###Returns: {HotUpdateChunk}

### Properties

* `auxiliaryFiles` {Set<string>}
* `chunkReason` {string}
* `contentHash` {Record<string, string>}
* `cssFilenameTemplate` {string|object}
* `debugId` {number}
* `entryModule` {Module} 
* `extraAsync` {boolean}
* `filenameTemplate` {string|object}
* `files` {Set<string>}
* `groupsIterable` {SortableSet<ChunkGroup>}
* `hash` {string}
* `id` {string|number}
* `idNameHints` {SortableSet<string>}
* `ids` {ChunkId[]}
* `modulesIterable` {Iterable<Module>}
* `name` {string}
* `preventIntegration` {boolean}
* `rendered` {boolean}
* `renderedHash` {string}
* `runtime` {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

---
### addGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {void}

#### `addModule(module)`

---
### addModule

* `module` {Module}

* ###Returns: {boolean}

#### `canBeInitial()`

---
### canBeInitial

* ###Returns: {boolean}

#### `canBeIntegrated(otherChunk)`

---
### canBeIntegrated

* `otherChunk` {Chunk}

* ###Returns: {boolean}

#### `compareTo(otherChunk)`

---
### compareTo

* `otherChunk` {Chunk}

* ###Returns: {-1|0|1}

#### `containsModule(module)`

---
### containsModule

* `module` {Module}

* ###Returns: {boolean}

#### `disconnectFromGroups()`

---
### disconnectFromGroups

* ###Returns: {void}

#### `getAllAsyncChunks()`

---
### getAllAsyncChunks

* ###Returns: {Set<Chunk>}

#### `getAllInitialChunks()`

---
### getAllInitialChunks

* ###Returns: {Set<Chunk>}

#### `getAllReferencedAsyncEntrypoints()`

---
### getAllReferencedAsyncEntrypoints

* ###Returns: {Set<Entrypoint>}

#### `getAllReferencedChunks()`

---
### getAllReferencedChunks

* ###Returns: {Set<Chunk>}

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

---
### getChildIdsByOrders

* `chunkGraph` {ChunkGraph}
* `filterFn` {object}

* ###Returns: {Record<string, ChunkId[]>}

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

---
### getChildIdsByOrdersMap

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {object}

* ###Returns: {ChunkChildIdsByOrdersMapByData}

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

---
### getChildrenOfTypeInOrder

* `chunkGraph` {ChunkGraph}
* `type` {string}

* ###Returns: {ChunkChildOfTypeInOrder[]}

#### `getChunkMaps(realHash)`

---
### getChunkMaps

> Stability: 0 - Deprecated

* `realHash` {boolean}

* ###Returns: {ChunkMaps}

#### `getChunkModuleMaps(filterFn)`

---
### getChunkModuleMaps

* `filterFn` {object}

* ###Returns: {ChunkModuleMaps}

#### `getEntryOptions()`

---
### getEntryOptions

* ###Returns: {EntryOptions}

#### `getModules()`

---
### getModules

* ###Returns: {Module[]}

#### `getNumberOfGroups()`

---
### getNumberOfGroups

* ###Returns: {number}

#### `getNumberOfModules()`

---
### getNumberOfModules

* ###Returns: {number}

#### `hasAsyncChunks()`

---
### hasAsyncChunks

* ###Returns: {boolean}

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

---
### hasChildByOrder

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {object}

* ###Returns: {boolean}

#### `hasEntryModule()`

---
### hasEntryModule

* ###Returns: {boolean}

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

---
### hasModuleInGraph

* `filterFn` {object}
* `filterChunkFn` {object}

* ###Returns: {boolean}

#### `hasRuntime()`

---
### hasRuntime

* ###Returns: {boolean}

#### `integrate(otherChunk)`

---
### integrate

* `otherChunk` {Chunk}

* ###Returns: {boolean}

#### `integratedSize(otherChunk, options)`

---
### integratedSize

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}

* ###Returns: {number}

#### `isEmpty()`

---
### isEmpty

* ###Returns: {boolean}

#### `isInGroup(chunkGroup)`

---
### isInGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {boolean}

#### `isOnlyInitial()`

---
### isOnlyInitial

* ###Returns: {boolean}

#### `modulesSize()`

---
### modulesSize

* ###Returns: {number}

#### `moveModule(module, otherChunk)`

---
### moveModule

* `module` {Module}
* `otherChunk` {Chunk}

* ###Returns: {void}

#### `remove()`

---
### remove

* ###Returns: {void}

#### `removeGroup(chunkGroup)`

---
### removeGroup

* `chunkGroup` {ChunkGroup}

* ###Returns: {void}

#### `removeModule(module)`

---
### removeModule

* `module` {Module}

* ###Returns: {void}

#### `size([options])`

---
### size

* `options` {ChunkSizeOptions}

* ###Returns: {number}

#### `split(newChunk)`

---
### split

* `newChunk` {Chunk}

* ###Returns: {void}

#### `updateHash(hash, chunkGraph)`

---
### updateHash

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

***

## 
### Class: `IgnorePlugin`

### Constructors

#### `new IgnorePlugin(options)`

---
### IgnorePlugin

* `options` {IgnorePluginOptions}

* ###Returns: {IgnorePlugin}

### Properties

* `options` {IgnorePluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### `checkIgnore(resolveData)`

---
### checkIgnore

* `resolveData` {BeforeContextResolveData|ResolveData}

* ###Returns: {false}

Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.

***

## 
### Class: `InitFragment`

### Type Parameters

#### GenerateContext

`GenerateContext`

### Constructors

#### `new InitFragment(content, stage, position[, key][, endContent])`

---
### InitFragment

###### GenerateContext

`GenerateContext`

* `content` {string|Source}
* `stage` {number}
* `position` {number}
* `key` {string}
* `endContent` {string|Source}

* ###Returns: {InitFragment<GenerateContext>}

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

---
### deserialize

* `context` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getContent(context)`

---
### getContent

* `context` {GenerateContext}

* ###Returns: {string|Source}

#### `getEndContent(context)`

---
### getEndContent

* `context` {GenerateContext}

* ###Returns: {string|Source}

#### `serialize(context)`

---
### serialize

* `context` {ObjectSerializerContext}

* ###Returns: {void}

#### Static method: `addToSource(source, initFragments, context)`

---
### addToSource

###### Context

`Context`

* `source` {Source}
* `initFragments` {MaybeMergeableInitFragment<Context>[]}
* `context` {Context}

* ###Returns: {Source}

***

## 
### Class: `JavascriptModulesPlugin`

### Constructors

#### `new JavascriptModulesPlugin([options])`

---
### JavascriptModulesPlugin

* `options` {object}

* ###Returns: {JavascriptModulesPlugin}

### Properties

* `options` {object}
* `chunkHasJs` {object}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### `renderBootstrap(renderContext, hooks)`

---
### renderBootstrap

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* ###Returns: {Bootstrap}

#### `renderChunk(renderContext, hooks)`

---
### renderChunk

* `renderContext` {RenderContextJavascriptModulesPlugin}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* ###Returns: {Source}

#### `renderMain(renderContext, hooks, compilation)`

---
### renderMain

* `renderContext` {MainRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}
* `compilation` {Compilation}

* ###Returns: {Source}

#### `renderModule(module, renderContext, hooks)`

---
### renderModule

* `module` {Module}
* `renderContext` {ModuleRenderContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* ###Returns: {Source}

#### `renderRequire(renderContext, hooks)`

---
### renderRequire

* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* ###Returns: {string}

#### `updateHashWithBootstrap(hash, renderContext, hooks)`

---
### updateHashWithBootstrap

* `hash` {Hash}
* `renderContext` {RenderBootstrapContext}
* `hooks` {CompilationHooksJavascriptModulesPlugin}

* ###Returns: {void}

#### Static method: `getChunkFilenameTemplate(chunk, outputOptions)`

---
### getChunkFilenameTemplate

* `chunk` {Chunk}
* `outputOptions` {OutputNormalizedWithDefaults}

* ###Returns: {TemplatePath}

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {CompilationHooksJavascriptModulesPlugin}

***

## 
### Class: `LibManifestPlugin`

### Constructors

#### `new LibManifestPlugin(options)`

---
### LibManifestPlugin

* `options` {LibManifestPluginOptions}

* ###Returns: {LibManifestPlugin}

### Properties

* `options` {LibManifestPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `LibraryTemplatePlugin`

### Constructors

#### `new LibraryTemplatePlugin(name, target, umdNamedDefine, auxiliaryComment, exportProperty)`

---
### LibraryTemplatePlugin

* `name` {LibraryName}
* `target` {string}
* `umdNamedDefine` {boolean}
* `auxiliaryComment` {AuxiliaryComment}
* `exportProperty` {LibraryExport}

* ###Returns: {LibraryTemplatePlugin}

### Properties

* `library` {object}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `LoaderOptionsPlugin`

### Constructors

#### `new LoaderOptionsPlugin([options])`

---
### LoaderOptionsPlugin

* `options` {LoaderOptionsPluginOptions|MatchObject}

* ###Returns: {LoaderOptionsPlugin}

### Properties

* `options` {LoaderOptionsPluginOptions|MatchObject}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `LoaderTargetPlugin`

### Constructors

#### `new LoaderTargetPlugin(target)`

---
### LoaderTargetPlugin

* `target` {string}

* ###Returns: {LoaderTargetPlugin}

### Properties

* `target` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ManifestPlugin`

### Constructors

#### `new ManifestPlugin([options])`

---
### ManifestPlugin

* `options` {ManifestPluginOptions}

* ###Returns: {ManifestPlugin}

### Properties

* `options` {ManifestPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Module`

### Extends

- {DependenciesBlock}

### Extended by

- {ExternalModule}
- {NormalModule}
- {RuntimeModule}

### Constructors

#### `new Module(type[, context][, layer])`

---
### Module

* `type` {string}
* `context` {string}
* `layer` {string}

* ###Returns: {Module}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunksIterable` {Iterable<Chunk>}
* `codeGenerationDependencies` {Dependency[]}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `factoryMeta` {FactoryMeta}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
* `resolveOptions` {ResolveOptions}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}

### Methods

#### `addBlock(block)`

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

---
### addCacheDependencies

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* ###Returns: {void}

#### `addChunk(chunk)`

---
### addChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

---
### addCodeGenerationDependency

* `codeGenerationDependency` {Dependency}

* ###Returns: {void}

#### `addDependency(dependency)`

---
### addDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `addError(error)`

---
### addError

* `error` {WebpackError}

* ###Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

---
### addPresentationalDependency

* `presentationalDependency` {Dependency}

* ###Returns: {void}

#### `addWarning(warning)`

---
### addWarning

* `warning` {WebpackError}

* ###Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

---
### build

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}

* ###Returns: {void}

#### `chunkCondition(chunk, compilation)`

---
### chunkCondition

* `chunk` {Chunk}
* `compilation` {Compilation}

* ###Returns: {boolean}

#### `cleanupForCache()`

---
### cleanupForCache

* ###Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

---
### clearDependenciesAndBlocks

* ###Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

---
### clearWarningsAndErrors

* ###Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

---
### codeGeneration

* `context` {CodeGenerationContext}

* ###Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getChunks()`

---
### getChunks

* ###Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

---
### getConcatenationBailoutReason

* `context` {ConcatenationBailoutReasonContext}

* ###Returns: {string}

#### `getErrors()`

---
### getErrors

* ###Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

---
### getExportsType

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* ###Returns: {ExportsType}

#### `getNumberOfChunks()`

---
### getNumberOfChunks

* ###Returns: {number}

#### `getNumberOfErrors()`

---
### getNumberOfErrors

* ###Returns: {number}

#### `getNumberOfWarnings()`

---
### getNumberOfWarnings

* ###Returns: {number}

#### `getRootBlock()`

---
### getRootBlock

* ###Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

---
### getSideEffectsConnectionState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getSourceBasicTypes()`

---
### getSourceBasicTypes

* ###Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

---
### getSourceTypes

* ###Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

---
### getUnsafeCacheData

* ###Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

---
### getWarnings

* ###Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

---
### hasChunkCondition

* ###Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

---
### hasReasonForChunk

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

---
### hasReasons

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `identifier()`

---
### identifier

* ###Returns: {string}

#### `invalidateBuild()`

---
### invalidateBuild

* ###Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

---
### isAccessibleInChunk

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

---
### isAccessibleInChunkGroup

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isEntryModule()`

---
### isEntryModule

* ###Returns: {boolean}

#### `isInChunk(chunk)`

---
### isInChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isOptional(moduleGraph)`

---
### isOptional

* `moduleGraph` {ModuleGraph}

* ###Returns: {boolean}

#### `isProvided(exportName)`

---
### isProvided

* `exportName` {string}

* ###Returns: {boolean}

#### `libIdent(options)`

---
### libIdent

* `options` {LibIdentOptions}

* ###Returns: {string}

#### `nameForCondition()`

---
### nameForCondition

* ###Returns: {string}

#### `needBuild(context, callback)`

---
### needBuild

* `context` {NeedBuildContext}
* `callback` {object}

* ###Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

---
### needRebuild

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* ###Returns: {boolean}

Use needBuild instead

#### `originalSource()`

---
### originalSource

* ###Returns: {Source}

#### `readableIdentifier(requestShortener)`

---
### readableIdentifier

* `requestShortener` {RequestShortener}

* ###Returns: {string}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {void}

#### `removeDependency(dependency)`

---
### removeDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `size([type])`

---
### size

* `type` {string}

* ###Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

---
### source

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* ###Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

---
### updateCacheModule

* `module` {Module}

* ###Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

#### Static method: `getSourceBasicTypes(module)`

---
### getSourceBasicTypes

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## 
### Class: `ModuleFactory`

### Constructors

#### `new ModuleFactory()`

---
### ModuleFactory

* ###Returns: {ModuleFactory}

### Methods

#### `create(data, callback)`

---
### create

* `data` {ModuleFactoryCreateData}
* `callback` {object}

* ###Returns: {void}

***

## 
### Class: `ModuleGraph`

### Constructors

#### `new ModuleGraph()`

---
### ModuleGraph

* ###Returns: {ModuleGraph}

### Properties

* `ModuleGraphConnection` {ModuleGraphConnection}

### Methods

#### `addExplanation(dependency, explanation)`

---
### addExplanation

* `dependency` {Dependency}
* `explanation` {string}

* ###Returns: {void}

#### `addExtraReason(module, explanation)`

---
### addExtraReason

* `module` {Module}
* `explanation` {string}

* ###Returns: {void}

#### `cached(fn, args)`

---
### cached

###### T

`T` *extends* {any[]}

###### R

`R`

* `fn` {object}
* `args` {T}

* ###Returns: {R}

#### `cloneModuleAttributes(sourceModule, targetModule)`

---
### cloneModuleAttributes

* `sourceModule` {Module}
* `targetModule` {Module}

* ###Returns: {void}

#### `copyOutgoingModuleConnections(oldModule, newModule, filterConnection)`

---
### copyOutgoingModuleConnections

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {object}

* ###Returns: {void}

#### `dependencyCacheProvide(dependency, args)`

---
### dependencyCacheProvide

###### D

`D` *extends* {Dependency}

###### ARGS

`ARGS` *extends* {any[]}

###### R

`R`

* `dependency` {D}
* `args` {Tuple<ARGS, unknown>}

* ###Returns: {R}

#### `finishUpdateParent()`

---
### finishUpdateParent

* ###Returns: {void}

#### `freeze([cacheStage])`

---
### freeze

* `cacheStage` {string}

* ###Returns: {void}

#### `getConnection(dependency)`

---
### getConnection

* `dependency` {Dependency}

* ###Returns: {ModuleGraphConnection}

#### `getDepth(module)`

---
### getDepth

* `module` {Module}

* ###Returns: {number}

#### `getExportInfo(module, exportName)`

---
### getExportInfo

* `module` {Module}
* `exportName` {string}

* ###Returns: {ExportInfo}

#### `getExportsInfo(module)`

---
### getExportsInfo

* `module` {Module}

* ###Returns: {ExportsInfo}

#### `getIncomingConnections(module)`

---
### getIncomingConnections

* `module` {Module}

* ###Returns: {Iterable<ModuleGraphConnection>}

#### `getIncomingConnectionsByOriginModule(module)`

---
### getIncomingConnectionsByOriginModule

* `module` {Module}

* ###Returns: {ReadonlyMap<Module, ModuleGraphConnection[]>}

#### `getIssuer(module)`

---
### getIssuer

* `module` {Module}

* ###Returns: {Module}

#### `getMeta(thing)`

---
### getMeta

* `thing` {object}

* ###Returns: {Meta}

#### `getMetaIfExisting(thing)`

---
### getMetaIfExisting

* `thing` {object}

* ###Returns: {Meta}

#### `getModule(dependency)`

---
### getModule

* `dependency` {Dependency}

* ###Returns: {Module}

#### `getOptimizationBailout(module)`

---
### getOptimizationBailout

* `module` {Module}

* ###Returns: {string|object[]}

#### `getOrigin(dependency)`

---
### getOrigin

* `dependency` {Dependency}

* ###Returns: {Module}

#### `getOutgoingConnections(module)`

---
### getOutgoingConnections

* `module` {Module}

* ###Returns: {Iterable<ModuleGraphConnection>}

#### `getOutgoingConnectionsByModule(module)`

---
### getOutgoingConnectionsByModule

* `module` {Module}

* ###Returns: {ReadonlyMap<Module, ModuleGraphConnection[]>}

#### `getParentBlock(dependency)`

---
### getParentBlock

* `dependency` {Dependency}

* ###Returns: {DependenciesBlock}

#### `getParentBlockIndex(dependency)`

---
### getParentBlockIndex

* `dependency` {Dependency}

* ###Returns: {number}

#### `getParentModule(dependency)`

---
### getParentModule

* `dependency` {Dependency}

* ###Returns: {Module}

#### `getPostOrderIndex(module)`

---
### getPostOrderIndex

* `module` {Module}

* ###Returns: {number}

#### `getPreOrderIndex(module)`

---
### getPreOrderIndex

* `module` {Module}

* ###Returns: {number}

#### `getProfile(module)`

---
### getProfile

* `module` {Module}

* ###Returns: {ModuleProfile}

#### `getProvidedExports(module)`

---
### getProvidedExports

* `module` {Module}

* ###Returns: {true|string[]}

#### `getReadOnlyExportInfo(module, exportName)`

---
### getReadOnlyExportInfo

* `module` {Module}
* `exportName` {string}

* ###Returns: {ExportInfo}

#### `getResolvedModule(dependency)`

---
### getResolvedModule

* `dependency` {Dependency}

* ###Returns: {Module}

#### `getResolvedOrigin(dependency)`

---
### getResolvedOrigin

* `dependency` {Dependency}

* ###Returns: {Module}

#### `getUsedExports(module, runtime)`

---
### getUsedExports

* `module` {Module}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean|SortableSet<string>}

#### `isAsync(module)`

---
### isAsync

* `module` {Module}

* ###Returns: {boolean}

#### `isDeferred(module)`

---
### isDeferred

* `module` {Module}

* ###Returns: {boolean}

#### `isExportProvided(module, exportName)`

---
### isExportProvided

* `module` {Module}
* `exportName` {string|string[]}

* ###Returns: {boolean}

#### `moveModuleConnections(oldModule, newModule, filterConnection)`

---
### moveModuleConnections

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {object}

* ###Returns: {void}

#### `removeAllModuleAttributes()`

---
### removeAllModuleAttributes

* ###Returns: {void}

#### `removeConnection(dependency)`

---
### removeConnection

* `dependency` {Dependency}

* ###Returns: {void}

#### `removeModuleAttributes(module)`

---
### removeModuleAttributes

* `module` {Module}

* ###Returns: {void}

#### `setAsync(module)`

---
### setAsync

* `module` {Module}

* ###Returns: {void}

#### `setDepth(module, depth)`

---
### setDepth

* `module` {Module}
* `depth` {number}

* ###Returns: {void}

#### `setDepthIfLower(module, depth)`

---
### setDepthIfLower

* `module` {Module}
* `depth` {number}

* ###Returns: {boolean}

#### `setIssuer(module, issuer)`

---
### setIssuer

* `module` {Module}
* `issuer` {Module}

* ###Returns: {void}

#### `setIssuerIfUnset(module, issuer)`

---
### setIssuerIfUnset

* `module` {Module}
* `issuer` {Module}

* ###Returns: {void}

#### `setModuleMemCaches(moduleMemCaches)`

---
### setModuleMemCaches

* `moduleMemCaches` {Map<Module, WeakTupleMap<any[], any>>}

* ###Returns: {void}

#### `setParentDependenciesBlockIndex(dependency, index)`

---
### setParentDependenciesBlockIndex

* `dependency` {Dependency}
* `index` {number}

* ###Returns: {void}

#### `setParents(dependency, block, module[, indexInBlock])`

---
### setParents

* `dependency` {Dependency}
* `block` {DependenciesBlock}
* `module` {Module}
* `indexInBlock` {number}

* ###Returns: {void}

#### `setPostOrderIndex(module, index)`

---
### setPostOrderIndex

* `module` {Module}
* `index` {number}

* ###Returns: {void}

#### `setPostOrderIndexIfUnset(module, index)`

---
### setPostOrderIndexIfUnset

* `module` {Module}
* `index` {number}

* ###Returns: {boolean}

#### `setPreOrderIndex(module, index)`

---
### setPreOrderIndex

* `module` {Module}
* `index` {number}

* ###Returns: {void}

#### `setPreOrderIndexIfUnset(module, index)`

---
### setPreOrderIndexIfUnset

* `module` {Module}
* `index` {number}

* ###Returns: {boolean}

#### `setProfile(module[, profile])`

---
### setProfile

* `module` {Module}
* `profile` {ModuleProfile}

* ###Returns: {void}

#### `setResolvedModule(originModule, dependency, module)`

---
### setResolvedModule

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}

* ###Returns: {void}

#### `unfreeze()`

---
### unfreeze

* ###Returns: {void}

#### `updateModule(dependency, module)`

---
### updateModule

* `dependency` {Dependency}
* `module` {Module}

* ###Returns: {void}

#### `updateParent(dependency[, connection][, parentModule])`

---
### updateParent

* `dependency` {Dependency}
* `connection` {ModuleGraphConnection}
* `parentModule` {Module}

* ###Returns: {void}

#### Static method: `clearModuleGraphForModule(module)`

---
### clearModuleGraphForModule

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {void}

#### Static method: `getModuleGraphForModule(module, deprecateMessage, deprecationCode)`

---
### getModuleGraphForModule

> Stability: 0 - Deprecated

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}

* ###Returns: {ModuleGraph}

#### Static method: `setModuleGraphForModule(module, moduleGraph)`

---
### setModuleGraphForModule

> Stability: 0 - Deprecated

* `module` {Module}
* `moduleGraph` {ModuleGraph}

* ###Returns: {void}

***

## 
### Class: `ModuleGraphConnection`

### Constructors

#### `new ModuleGraphConnection(originModule, dependency, module[, explanation][, weak][, condition])`

---
### ModuleGraphConnection

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* `explanation` {string}
* `weak` {boolean}
* `condition` {false|object}

* ###Returns: {ModuleGraphConnection}

### Properties

* `condition` {false|object}
* `conditional` {boolean}
* `dependency` {Dependency}
* `explanation` {string}
* `explanations` {Set<string>}
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

---
### addCondition

* `condition` {object}

* ###Returns: {void}

#### `addExplanation(explanation)`

---
### addExplanation

* `explanation` {string}

* ###Returns: {void}

#### `clone()`

---
### clone

* ###Returns: {ModuleGraphConnection}

#### `getActiveState(runtime)`

---
### getActiveState

* `runtime` {RuntimeSpec}

* ###Returns: {ConnectionState}

#### `isActive(runtime)`

---
### isActive

* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `isTargetActive(runtime)`

---
### isTargetActive

* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `setActive(value)`

---
### setActive

* `value` {boolean}

* ###Returns: {void}

***

## 
### Class: `MultiCompiler`

### Constructors

#### `new MultiCompiler(compilers, options)`

---
### MultiCompiler

* `compilers` {Compiler[]|Record<string, Compiler>}
* `options` {MultiCompilerOptions}

* ###Returns: {MultiCompiler}

### Properties

* `compilers` {Compiler[]}
* `dependencies` {WeakMap<Compiler, string[]>}
* `hooks` {Readonly<object>}
* `inputFileSystem` {InputFileSystem}
* `intermediateFileSystem` {IntermediateFileSystem}
* `options` {WebpackOptionsNormalized[]|MultiCompilerOptions}
* `outputFileSystem` {OutputFileSystem}
* `outputPath` {string}
* `running` {boolean}
* `watchFileSystem` {WatchFileSystem}

### Methods

#### `close(callback)`

---
### close

* `callback` {object}

* ###Returns: {void}

#### `getInfrastructureLogger(name)`

---
### getInfrastructureLogger

* `name` {string|object}

* ###Returns: {WebpackLogger}

#### `purgeInputFileSystem()`

---
### purgeInputFileSystem

* ###Returns: {void}

#### `run(callback)`

---
### run

* `callback` {CallbackWebpackFunction_2<MultiStats, void>}

* ###Returns: {void}

#### `runWithDependencies(compilers, fn, callback)`

---
### runWithDependencies

> Stability: 0 - Deprecated

* `compilers` {Compiler[]}
* `fn` {object}
* `callback` {CallbackWebpackFunction_2<Stats[], void>}

* ###Returns: {void}

This method should have been private

#### `setDependencies(compiler, dependencies)`

---
### setDependencies

* `compiler` {Compiler}
* `dependencies` {string[]}

* ###Returns: {void}

#### `validateDependencies(callback)`

---
### validateDependencies

* `callback` {CallbackWebpackFunction_2<MultiStats, void>}

* ###Returns: {boolean}

#### `watch(watchOptions, handler)`

---
### watch

* `watchOptions` {WatchOptions|WatchOptions[]}
* `handler` {CallbackWebpackFunction_2<MultiStats, void>}

* ###Returns: {MultiWatching}

***

## 
### Class: `MultiStats`

### Constructors

#### `new MultiStats()`

---
### MultiStats

* ###Returns: {MultiStats}

### Properties

* `hash` {string}
* `stats` {Stats[]}

### Methods

#### `hasErrors()`

---
### hasErrors

* ###Returns: {boolean}

#### `hasWarnings()`

---
### hasWarnings

* ###Returns: {boolean}

#### `toJson([options])`

---
### toJson

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}

* ###Returns: {StatsCompilation}

#### `toString([options])`

---
### toString

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}

* ###Returns: {string}

***

## 
### Class: `NoEmitOnErrorsPlugin`

### Constructors

#### `new NoEmitOnErrorsPlugin()`

---
### NoEmitOnErrorsPlugin

* ###Returns: {NoEmitOnErrorsPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `NormalModule`

### Extends

- {Module}

### Constructors

#### `new NormalModule(__namedParameters)`

---
### NormalModule

* `__namedParameters` {NormalModuleCreateData}

* ###Returns: {NormalModule}

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
* `depth` {number}
* `error` {WebpackError}
* `errors` {any}
* `exportsArgument` {string}
* `extractSourceMap` {boolean}
* `factoryMeta` {FactoryMeta}
* `generator` {Generator}
* `generatorOptions` {GeneratorOptions}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `loaders` {LoaderItem[]}
* `matchResource` {string}
* `moduleArgument` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `parser` {ParserClass}
* `parserOptions` {ParserOptions}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `rawRequest` {string}
* `renderedHash` {string}
* `request` {string}
* `resolveOptions` {ResolveOptions}
* `resource` {string}
* `resourceResolveData` {ResourceSchemeData|Partial<ResolveRequest>}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>}
* `userRequest` {string}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}

### Methods

#### `addBlock(block)`

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

---
### addCacheDependencies

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* ###Returns: {void}

#### `addChunk(chunk)`

---
### addChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

---
### addCodeGenerationDependency

* `codeGenerationDependency` {Dependency}

* ###Returns: {void}

#### `addDependency(dependency)`

---
### addDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `addError(error)`

---
### addError

* `error` {WebpackError}

* ###Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

---
### addPresentationalDependency

* `presentationalDependency` {Dependency}

* ###Returns: {void}

#### `addWarning(warning)`

---
### addWarning

* `warning` {WebpackError}

* ###Returns: {void}

#### `applyNoParseRule(rule, content)`

---
### applyNoParseRule

* `rule` {string|RegExp|object}
* `content` {string}

* ###Returns: {boolean}

#### `build(options, compilation, resolver, fs, callback)`

---
### build

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}

* ###Returns: {void}

#### `chunkCondition(chunk, compilation)`

---
### chunkCondition

* `chunk` {Chunk}
* `compilation` {Compilation}

* ###Returns: {boolean}

#### `cleanupForCache()`

---
### cleanupForCache

* ###Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

---
### clearDependenciesAndBlocks

* ###Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

---
### clearWarningsAndErrors

* ###Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

---
### codeGeneration

* `context` {CodeGenerationContext}

* ###Returns: {CodeGenerationResult}

#### `createSource(context, content[, sourceMap][, associatedObjectForCache])`

---
### createSource

* `context` {string}
* `content` {string|Buffer<ArrayBufferLike>}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}

* ###Returns: {Source}

#### `createSourceForAsset(context, name, content[, sourceMap][, associatedObjectForCache])`

---
### createSourceForAsset

* `context` {string}
* `name` {string}
* `content` {string|Buffer<ArrayBufferLike>}
* `sourceMap` {string|RawSourceMap}
* `associatedObjectForCache` {object}

* ###Returns: {Source}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getChunks()`

---
### getChunks

* ###Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

---
### getConcatenationBailoutReason

* `context` {ConcatenationBailoutReasonContext}

* ###Returns: {string}

#### `getCurrentLoader(loaderContext[, index])`

---
### getCurrentLoader

* `loaderContext` {AnyLoaderContext}
* `index` {number}

* ###Returns: {LoaderItem}

#### `getErrors()`

---
### getErrors

* ###Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

---
### getExportsType

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* ###Returns: {ExportsType}

#### `getNumberOfChunks()`

---
### getNumberOfChunks

* ###Returns: {number}

#### `getNumberOfErrors()`

---
### getNumberOfErrors

* ###Returns: {number}

#### `getNumberOfWarnings()`

---
### getNumberOfWarnings

* ###Returns: {number}

#### `getResource()`

---
### getResource

* ###Returns: {string}

#### `getRootBlock()`

---
### getRootBlock

* ###Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

---
### getSideEffectsConnectionState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getSourceBasicTypes()`

---
### getSourceBasicTypes

* ###Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

---
### getSourceTypes

* ###Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

---
### getUnsafeCacheData

* ###Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

---
### getWarnings

* ###Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

---
### hasChunkCondition

* ###Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

---
### hasReasonForChunk

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

---
### hasReasons

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `identifier()`

---
### identifier

* ###Returns: {string}

#### `invalidateBuild()`

---
### invalidateBuild

* ###Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

---
### isAccessibleInChunk

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

---
### isAccessibleInChunkGroup

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isEntryModule()`

---
### isEntryModule

* ###Returns: {boolean}

#### `isInChunk(chunk)`

---
### isInChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isOptional(moduleGraph)`

---
### isOptional

* `moduleGraph` {ModuleGraph}

* ###Returns: {boolean}

#### `isProvided(exportName)`

---
### isProvided

* `exportName` {string}

* ###Returns: {boolean}

#### `libIdent(options)`

---
### libIdent

* `options` {LibIdentOptions}

* ###Returns: {string}

#### `markModuleAsErrored(error)`

---
### markModuleAsErrored

* `error` {WebpackError}

* ###Returns: {void}

#### `nameForCondition()`

---
### nameForCondition

* ###Returns: {string}

#### `needBuild(context, callback)`

---
### needBuild

* `context` {NeedBuildContext}
* `callback` {object}

* ###Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

---
### needRebuild

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* ###Returns: {boolean}

Use needBuild instead

#### `originalSource()`

---
### originalSource

* ###Returns: {Source}

#### `readableIdentifier(requestShortener)`

---
### readableIdentifier

* `requestShortener` {RequestShortener}

* ###Returns: {string}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {void}

#### `removeDependency(dependency)`

---
### removeDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

---
### restoreFromUnsafeCache

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}

* ###Returns: {void}

restore unsafe cache data

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `shouldPreventParsing(noParseRule, request)`

---
### shouldPreventParsing

* `noParseRule` {string|RegExp|object|string|RegExp|object[]}
* `request` {string}

* ###Returns: {boolean}

#### `size([type])`

---
### size

* `type` {string}

* ###Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

---
### source

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* ###Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

---
### updateCacheModule

* `module` {Module}

* ###Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

#### Static method: `deserialize(context)`

---
### deserialize

* `context` {ObjectDeserializerContext}

* ###Returns: {NormalModule}

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {NormalModuleCompilationHooks}

#### Static method: `getSourceBasicTypes(module)`

---
### getSourceBasicTypes

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## 
### Class: `NormalModuleReplacementPlugin`

### Constructors

#### `new NormalModuleReplacementPlugin(resourceRegExp, newResource)`

---
### NormalModuleReplacementPlugin

* `resourceRegExp` {RegExp}
* `newResource` {string|object}

* ###Returns: {NormalModuleReplacementPlugin}

Create an instance of the plugin

### Properties

* `newResource` {string|object}
* `resourceRegExp` {RegExp}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Parser`

### Extended by

- {JavascriptParser}

### Constructors

#### `new Parser()`

---
### Parser

* ###Returns: {ParserClass}

### Methods

#### `parse(source, state)`

---
### parse

* `source` {string|Buffer<ArrayBufferLike>|PreparsedAst}
* `state` {ParserState}

* ###Returns: {ParserState}

***

## 
### Class: `PlatformPlugin`

### Constructors

#### `new PlatformPlugin(platform)`

---
### PlatformPlugin

* `platform` {Partial<PlatformTargetProperties>}

* ###Returns: {PlatformPlugin}

### Properties

* `platform` {Partial<PlatformTargetProperties>}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `PrefetchPlugin`

### Constructors

#### `new PrefetchPlugin(context[, request])`

---
### PrefetchPlugin

* `context` {string}
* `request` {string}

* ###Returns: {PrefetchPlugin}

### Properties

* `context` {string}
* `request` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ProgressPlugin`

### Constructors

#### `new ProgressPlugin([options])`

---
### ProgressPlugin

* `options` {ProgressPluginArgument}

* ###Returns: {ProgressPlugin}

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
* `defaultOptions` {Required<Omit<ProgressPluginOptions, "handler">>}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler|MultiCompiler}

* ###Returns: {void}

#### Static method: `getReporter(compiler)`

---
### getReporter

* `compiler` {Compiler}

* ###Returns: {object}

***

## 
### Class: `ProvidePlugin`

### Constructors

#### `new ProvidePlugin(definitions)`

---
### ProvidePlugin

* `definitions` {Record<string, string|string[]>}

* ###Returns: {ProvidePlugin}

### Properties

* `definitions` {Record<string, string|string[]>}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Resolver`

### Constructors

#### `new Resolver()`

---
### Resolver

* ###Returns: {Resolver}

### Properties

* `fileSystem` {FileSystem}
* `hooks` {KnownHooks}
* `options` {ResolveOptionsResolverFactoryObject1}

### Methods

#### `doResolve(hook, request, message, resolveContext, callback)`

---
### doResolve

* `hook` {AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest>}
* `request` {ResolveRequest}
* `message` {string}
* `resolveContext` {ResolveContext}
* `callback` {object}

* ###Returns: {void}

#### `ensureHook(name)`

---
### ensureHook

* `name` {string|AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest, UnsetAdditionalOptions>}

* ###Returns: {AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest>}

#### `getHook(name)`

---
### getHook

* `name` {string|AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest, UnsetAdditionalOptions>}

* ###Returns: {AsyncSeriesBailHook<Tuple<ResolveRequest, ResolveContext>, ResolveRequest>}

#### `isDirectory(path)`

---
### isDirectory

* `path` {string}

* ###Returns: {boolean}

#### `isModule(path)`

---
### isModule

* `path` {string}

* ###Returns: {boolean}

#### `isPrivate(path)`

---
### isPrivate

* `path` {string}

* ###Returns: {boolean}

#### `join(path, request)`

---
### join

* `path` {string}
* `request` {string}

* ###Returns: {string}

#### `normalize(path)`

---
### normalize

* `path` {string}

* ###Returns: {string}

#### `parse(identifier)`

---
### parse

* `identifier` {string}

* ###Returns: {ParsedIdentifier}

#### `resolve(context, path, request, resolveContext, callback)`

---
### resolve

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* `resolveContext` {ResolveContext}
* `callback` {object}

* ###Returns: {void}

#### `resolveSync(context, path, request)`

---
### resolveSync

* `context` {ContextTypes}
* `path` {string}
* `request` {string}

* ###Returns: {string|false}

***

## 
### Class: `RuntimeModule`

### Extends

- {Module}

### Extended by

- {GetChunkFilenameRuntimeModule}
- {JsonpChunkLoadingRuntimeModule}
- {CssLoadingRuntimeModule}
- {ModuleChunkLoadingRuntimeModule}

### Constructors

#### `new RuntimeModule(name[, stage])`

---
### RuntimeModule

* `name` {string}
* `stage` {number}

* ###Returns: {RuntimeModule}

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
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `factoryMeta` {FactoryMeta}
* `fullHash` {boolean}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string}
* `name` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
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

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

---
### addCacheDependencies

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* ###Returns: {void}

#### `addChunk(chunk)`

---
### addChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

---
### addCodeGenerationDependency

* `codeGenerationDependency` {Dependency}

* ###Returns: {void}

#### `addDependency(dependency)`

---
### addDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `addError(error)`

---
### addError

* `error` {WebpackError}

* ###Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

---
### addPresentationalDependency

* `presentationalDependency` {Dependency}

* ###Returns: {void}

#### `addWarning(warning)`

---
### addWarning

* `warning` {WebpackError}

* ###Returns: {void}

#### `attach(compilation, chunk[, chunkGraph])`

---
### attach

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

---
### build

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}

* ###Returns: {void}

#### `chunkCondition(chunk, compilation)`

---
### chunkCondition

* `chunk` {Chunk}
* `compilation` {Compilation}

* ###Returns: {boolean}

#### `cleanupForCache()`

---
### cleanupForCache

* ###Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

---
### clearDependenciesAndBlocks

* ###Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

---
### clearWarningsAndErrors

* ###Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

---
### codeGeneration

* `context` {CodeGenerationContext}

* ###Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `generate()`

---
### generate

* ###Returns: {string}

#### `getChunks()`

---
### getChunks

* ###Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

---
### getConcatenationBailoutReason

* `context` {ConcatenationBailoutReasonContext}

* ###Returns: {string}

#### `getErrors()`

---
### getErrors

* ###Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

---
### getExportsType

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* ###Returns: {ExportsType}

#### `getGeneratedCode()`

---
### getGeneratedCode

* ###Returns: {string}

#### `getNumberOfChunks()`

---
### getNumberOfChunks

* ###Returns: {number}

#### `getNumberOfErrors()`

---
### getNumberOfErrors

* ###Returns: {number}

#### `getNumberOfWarnings()`

---
### getNumberOfWarnings

* ###Returns: {number}

#### `getRootBlock()`

---
### getRootBlock

* ###Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

---
### getSideEffectsConnectionState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getSourceBasicTypes()`

---
### getSourceBasicTypes

* ###Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

---
### getSourceTypes

* ###Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

---
### getUnsafeCacheData

* ###Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

---
### getWarnings

* ###Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

---
### hasChunkCondition

* ###Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

---
### hasReasonForChunk

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

---
### hasReasons

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `identifier()`

---
### identifier

* ###Returns: {string}

#### `invalidateBuild()`

---
### invalidateBuild

* ###Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

---
### isAccessibleInChunk

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

---
### isAccessibleInChunkGroup

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isEntryModule()`

---
### isEntryModule

* ###Returns: {boolean}

#### `isInChunk(chunk)`

---
### isInChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isOptional(moduleGraph)`

---
### isOptional

* `moduleGraph` {ModuleGraph}

* ###Returns: {boolean}

#### `isProvided(exportName)`

---
### isProvided

* `exportName` {string}

* ###Returns: {boolean}

#### `libIdent(options)`

---
### libIdent

* `options` {LibIdentOptions}

* ###Returns: {string}

#### `nameForCondition()`

---
### nameForCondition

* ###Returns: {string}

#### `needBuild(context, callback)`

---
### needBuild

* `context` {NeedBuildContext}
* `callback` {object}

* ###Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

---
### needRebuild

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* ###Returns: {boolean}

Use needBuild instead

#### `originalSource()`

---
### originalSource

* ###Returns: {Source}

#### `readableIdentifier(requestShortener)`

---
### readableIdentifier

* `requestShortener` {RequestShortener}

* ###Returns: {string}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {void}

#### `removeDependency(dependency)`

---
### removeDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `shouldIsolate()`

---
### shouldIsolate

* ###Returns: {boolean}

#### `size([type])`

---
### size

* `type` {string}

* ###Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

---
### source

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* ###Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

---
### updateCacheModule

* `module` {Module}

* ###Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

#### Static method: `getSourceBasicTypes(module)`

---
### getSourceBasicTypes

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

***

## 
### Class: `SourceMapDevToolPlugin`

### Constructors

#### `new SourceMapDevToolPlugin([options])`

---
### SourceMapDevToolPlugin

* `options` {SourceMapDevToolPluginOptions}

* ###Returns: {SourceMapDevToolPlugin}

### Properties

* `fallbackModuleFilenameTemplate` {DevtoolFallbackModuleFilenameTemplate}
* `moduleFilenameTemplate` {DevtoolModuleFilenameTemplate}
* `namespace` {string}
* `options` {SourceMapDevToolPluginOptions}
* `sourceMapFilename` {string|false}
* `sourceMappingURLComment` {string|false|object}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Stats`

### Constructors

#### `new Stats(compilation)`

---
### Stats

* `compilation` {Compilation}

* ###Returns: {Stats}

### Properties

* `compilation` {Compilation}
* `endTime` {number}
* `hash` {string}
* `startTime` {number}

### Methods

#### `hasErrors()`

---
### hasErrors

* ###Returns: {boolean}

#### `hasWarnings()`

---
### hasWarnings

* ###Returns: {boolean}

#### `toJson([options])`

---
### toJson

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}

* ###Returns: {StatsCompilation}

#### `toString([options])`

---
### toString

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}

* ###Returns: {string}

***

## 
### Class: `Template`

### Constructors

#### `new Template()`

---
### Template

* ###Returns: {Template}

### Properties

* `NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS` {number}
* `NUMBER_OF_IDENTIFIER_START_CHARS` {number}

### Methods

#### Static method: `asString(str)`

---
### asString

* `str` {string|string[]}

* ###Returns: {string}

#### Static method: `getFunctionContent(fn)`

---
### getFunctionContent

* `fn` {Stringable}

* ###Returns: {string}

#### Static method: `getModulesArrayBounds(modules)`

---
### getModulesArrayBounds

* `modules` {WithId[]}

* ###Returns: {false|Tuple<number, number>}

#### Static method: `indent(s)`

---
### indent

* `s` {string|string[]}

* ###Returns: {string}

#### Static method: `numberToIdentifier(n)`

---
### numberToIdentifier

* `n` {number}

* ###Returns: {string}

#### Static method: `numberToIdentifierContinuation(n)`

---
### numberToIdentifierContinuation

* `n` {number}

* ###Returns: {string}

#### Static method: `prefix(s, prefix)`

---
### prefix

* `s` {string|string[]}
* `prefix` {string}

* ###Returns: {string}

#### Static method: `renderChunkModules(renderContext, modules, renderModule[, prefix])`

---
### renderChunkModules

* `renderContext` {ChunkRenderContextJavascriptModulesPlugin}
* `modules` {Module[]}
* `renderModule` {object}
* `prefix` {string}

* ###Returns: {Source}

#### Static method: `renderChunkRuntimeModules(runtimeModules, renderContext)`

---
### renderChunkRuntimeModules

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin}

* ###Returns: {Source}

#### Static method: `renderRuntimeModules(runtimeModules, renderContext)`

---
### renderRuntimeModules

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin|object}

* ###Returns: {Source}

#### Static method: `toComment(str)`

---
### toComment

* `str` {string}

* ###Returns: {string}

#### Static method: `toIdentifier(str)`

---
### toIdentifier

* `str` {string}

* ###Returns: {string}

#### Static method: `toNormalComment(str)`

---
### toNormalComment

* `str` {string}

* ###Returns: {string}

#### Static method: `toPath(str)`

---
### toPath

* `str` {string}

* ###Returns: {string}

***

## 
### Class: `WatchIgnorePlugin`

### Constructors

#### `new WatchIgnorePlugin(options)`

---
### WatchIgnorePlugin

* `options` {WatchIgnorePluginOptions}

* ###Returns: {WatchIgnorePlugin}

### Properties

* `options` {WatchIgnorePluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `Watching`

### Constructors

#### `new Watching()`

---
### Watching

* ###Returns: {Watching}

### Properties

* `blocked` {boolean}
* `callbacks` {object[]}
* `closed` {boolean}
* `compiler` {Compiler}
* `handler` {CallbackWebpackFunction_2<Stats, void>}
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

---
### close

* `callback` {object}

* ###Returns: {void}

#### `invalidate([callback])`

---
### invalidate

* `callback` {object}

* ###Returns: {void}

#### `resume()`

---
### resume

* ###Returns: {void}

#### `suspend()`

---
### suspend

* ###Returns: {void}

#### `watch(files, dirs, missing)`

---
### watch

* `files` {Iterable<string>}
* `dirs` {Iterable<string>}
* `missing` {Iterable<string>}

* ###Returns: {void}

***

## 
### Class: `WebpackError`

### Extends

- {Error}

### Indexable

> \[`index`: {number}\]: {object}

### Constructors

#### `new WebpackError([message][, options])`

---
### WebpackError

* `message` {string}
* `options` {object}

* ###Returns: {WebpackError}

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

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

---
### captureStackTrace

* `targetObject` {object}
* `constructorOpt` {Function}

* ###Returns: {void}

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

---
### prepareStackTrace

* `err` {Error}
* `stackTraces` {CallSite[]}

* ###Returns: {any}

***

## 
### Class: `WebpackOptionsApply`

### Extends

- {OptionsApply}

### Constructors

#### `new WebpackOptionsApply()`

---
### WebpackOptionsApply

* ###Returns: {WebpackOptionsApply}

### Methods

#### `process(options, compiler[, interception])`

---
### process

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compiler` {Compiler}
* `interception` {WebpackOptionsInterception}

* ###Returns: {WebpackOptionsNormalizedWithDefaults}

***

## 
### Class: `WebpackOptionsDefaulter`

### Constructors

#### `new WebpackOptionsDefaulter()`

---
### WebpackOptionsDefaulter

* ###Returns: {WebpackOptionsDefaulter}

### Methods

#### `process(options)`

---
### process

* `options` {Configuration}

* ###Returns: {WebpackOptionsNormalized}

***

## 
### Class: `WebpackOptionsValidationError`

### Extends

- {Error}

### Constructors

#### `new WebpackOptionsValidationError(errors, schema[, configuration])`

---
### WebpackOptionsValidationError

* `errors` {SchemaUtilErrorObject[]} array of error objects
* `schema` {Schema} schema
* `configuration` {ValidationErrorConfiguration} configuration

* ###Returns: {ValidationError}

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

---
### formatSchema

* `schema` {Schema} schema
* `logic` {boolean} logic
* `prevSchemas` {object[]} prev schemas

* ###Returns: {string} formatted schema

#### `formatValidationError(error)`

---
### formatValidationError

* `error` {SchemaUtilErrorObject} error object

* ###Returns: {string} formatted error object

#### `formatValidationErrors(errors)`

---
### formatValidationErrors

* `errors` {SchemaUtilErrorObject[]} errors

* ###Returns: {string} formatted errors

#### `getSchemaPart(path)`

---
### getSchemaPart

* `path` {string} path

* ###Returns: {Schema} schema

#### `getSchemaPartDescription([schemaPart])`

---
### getSchemaPartDescription

* `schemaPart` {Schema} schema part

* ###Returns: {string} schema part description

#### `getSchemaPartText([schemaPart][, additionalPath][, needDot][, logic])`

---
### getSchemaPartText

* `schemaPart` {Schema} schema part
* `additionalPath` {boolean|string[]} additional path
* `needDot` {boolean} true when need dot
* `logic` {boolean} logic

* ###Returns: {string} schema part text

#### Static method: `captureStackTrace(targetObject[, constructorOpt])`

---
### captureStackTrace

* `targetObject` {object}
* `constructorOpt` {Function}

* ###Returns: {void}

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

---
### prepareStackTrace

* `err` {Error}
* `stackTraces` {CallSite[]}

* ###Returns: {any}

***

## 
### Interface: `Argument`

### Properties

* `configs` {ArgumentConfig[]}
* `description` {string}
* `multiple` {boolean}
* `simpleType` {SimpleType}

***

## 
### Interface: `Asset`

### Properties

* `info` {AssetInfo} info about the asset
* `name` {string} the filename of the asset
* `source` {Source} source of the asset

***

## 
### Interface: `AssetEmittedInfo`

### Properties

* `compilation` {Compilation}
* `content` {Buffer}
* `outputPath` {string}
* `source` {Source}
* `targetPath` {string}

***

## 
### Interface: `Colors`

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

## 
### Interface: `ColorsOptions`

### Properties

* `useColor` {boolean} force use colors

***

## 
### Interface: `Configuration`

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

## 
### Interface: `EntryObject`

Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.

### Indexable

> \[`index`: {string}\]: {string|string[]|EntryDescription}

***

## 
### Interface: `ExternalItemFunctionData`

### Properties

* `context` {string} the directory in which the request is placed
* `contextInfo` {ModuleFactoryCreateDataContextInfo} contextual information
* `dependencyType` {string} the category of the referencing dependency
* `getResolve` {object} get a resolve function with the current resolver options
* `request` {string} the request as written by the user in the require/import expression/statement

***

## 
### Interface: `ExternalItemObjectKnown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Properties

* `byLayer` {object|object} Specify externals depending on the layer.

***

## 
### Interface: `ExternalItemObjectUnknown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Indexable

> \[`index`: {string}\]: {ExternalItemValue}

***

## 
### Interface: `FileCacheOptions`

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

## 
### Interface: `GeneratorOptionsByModuleTypeKnown`

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

## 
### Interface: `InputFileSystem`

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

## 
### Interface: `LibraryOptions`

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

---
### LoaderDefinitionFunction

* `this` {NormalModuleLoaderContext<OptionsType>|LoaderRunnerLoaderContext<OptionsType>|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `content` {string}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}

* ###Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

***

## 
### Interface: `LoaderModule`

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

### Properties

* `default` {RawLoaderDefinitionFunction<OptionsType, ContextAdditions>|LoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {false}

***

## 
### Interface: `MemoryCacheOptions`

Options object for in-memory caching.

### Properties

* `cacheUnaffected` {boolean} Additionally cache computation of modules that are unchanged and reference only unchanged modules.
* `maxGenerations` {number} Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).
* `type` {"memory"} In memory caching.

***

## 
### Interface: `ModuleOptions`

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

## 
### Interface: `MultiCompilerOptions`

### Properties

* `parallelism` {number} how many Compilers are allows to run at the same time in parallel

***

## 
### Interface: `ObjectDeserializerContext`

### Properties

* `read` {object}
* `setCircularReference` {object}

***

## 
### Interface: `ObjectSerializerContext`

### Properties

* `rollback` {object}
* `setCircularReference` {object}
* `snapshot` {object}
* `write` {object}
* `writeLazy` {object}
* `writeSeparate` {object}

***

## 
### Interface: `OutputFileSystem`

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

## 
### Interface: `ParserOptionsByModuleTypeKnown`

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

## 
### Interface: `PathData`

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

---
### PitchLoaderDefinitionFunction

* `this` {NormalModuleLoaderContext<OptionsType>|LoaderRunnerLoaderContext<OptionsType>|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `remainingRequest` {string}
* `previousRequest` {string}
* `data` {object}

* ###Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

***

## 
### Interface: `Problem`

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

---
### RawLoaderDefinitionFunction

* `this` {NormalModuleLoaderContext<OptionsType>|LoaderRunnerLoaderContext<OptionsType>|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext|ContextAdditions}
* `content` {Buffer}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}

* ###Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

***

## 
### Interface: `RenderManifestOptions`

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

## 
### Interface: `ResolveData`

### Properties

* `attributes` {ImportAttributes}
* `cacheable` {boolean} allow to use the unsafe cache
* `context` {string}
* `contextDependencies` {LazySet<string>}
* `contextInfo` {ModuleFactoryCreateDataContextInfo}
* `createData` {Partial<NormalModuleCreateData|object>}
* `dependencies` {ModuleDependency[]}
* `dependencyType` {string}
* `fileDependencies` {LazySet<string>}
* `ignoredModule` {Module}
* `missingDependencies` {LazySet<string>}
* `request` {string}
* `resolveOptions` {ResolveOptions}

***

## 
### Interface: `ResolveOptions`

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

## 
### Interface: `RuleSetRule`

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

## 
### Interface: `StatsOptions`

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

## 
### Interface: `WebpackOptionsNormalized`

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

## 
### Interface: `WebpackPluginInstance`

Plugin instance.

### Indexable

> \[`index`: {string}\]: {any}

### Properties

* `apply` {object} The run point of the plugin, required method.

***

## 
### Type: `AssetInfo`

> **AssetInfo** = {KnownAssetInfo|Record<string, any>}

***

## 
### Type: `Entry`

> **Entry** = {string|object|EntryObject|string[]}

***

## 
### Type: `EntryNormalized`

> **EntryNormalized** = {object|EntryStaticNormalized}

***

## 
### Type: `EntryOptions`

> **EntryOptions** = {object|Omit<EntryDescriptionNormalized, "import">}

### Type Declaration

* `name` {string}

***

## 
### Type: `ExternalItem`

> **ExternalItem** = {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object}

***

## 
### Type: `ExternalItemFunction`

> **ExternalItemFunction** = {object|object}

***

## 
### Type: `ExternalItemFunctionCallback`

> **ExternalItemFunctionCallback** = {object}

---
### __type

* `data` {ExternalItemFunctionData}
* `callback` {object}

* ###Returns: {void}

***

## 
### Type: `ExternalItemFunctionDataGetResolve`

> **ExternalItemFunctionDataGetResolve** = {object}

---
### __type

* `options` {ResolveOptions}

* ###Returns: {object|object}

***

## 
### Type: `ExternalItemFunctionDataGetResolveCallbackResult`

> **ExternalItemFunctionDataGetResolveCallbackResult** = {object}

---
### __type

* `context` {string}
* `request` {string}
* `callback` {object}

* ###Returns: {void}

***

## 
### Type: `ExternalItemFunctionDataGetResolveResult`

> **ExternalItemFunctionDataGetResolveResult** = {object}

---
### __type

* `context` {string}
* `request` {string}

* ###Returns: {Promise<string>}

***

## 
### Type: `ExternalItemFunctionPromise`

> **ExternalItemFunctionPromise** = {object}

---
### __type

* `data` {ExternalItemFunctionData}

* ###Returns: {Promise<ExternalItemValue>}

***

## 
### Type: `ExternalItemValue`

> **ExternalItemValue** = {string|boolean|string[]|object}

***

## 
### Type: `Externals`

> **Externals** = {string|RegExp|ExternalItemObjectKnown|ExternalItemObjectUnknown|object|object|ExternalItem[]}

***

## 
### Type: `LoaderContext`

> **LoaderContext**\<`OptionsType`\> = {NormalModuleLoaderContext<OptionsType>|LoaderRunnerLoaderContext<OptionsType>|LoaderPluginLoaderContext|HotModuleReplacementPluginLoaderContext}

### Type Parameters

#### OptionsType

`OptionsType`

***

## 
### Type: `LoaderDefinition`

> **LoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {LoaderDefinitionFunction<OptionsType, ContextAdditions>|object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {false}

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

***

## 
### Type: `MultiConfiguration`

> **MultiConfiguration** = {ReadonlyArray<Configuration>|MultiCompilerOptions}

***

## 
### Type: `ParserState`

> **ParserState** = {ParserStateBase|Record<string, any>}

***

## 
### Type: `RawLoaderDefinition`

> **RawLoaderDefinition**\<`OptionsType`, `ContextAdditions`\> = {RawLoaderDefinitionFunction<OptionsType, ContextAdditions>|object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {true}

### Type Parameters

#### OptionsType

`OptionsType` = {object}

#### ContextAdditions

`ContextAdditions` = {object}

***

## 
### Type: `RenderManifestEntry`

> **RenderManifestEntry** = {RenderManifestEntryTemplated|RenderManifestEntryStatic}

***

## 
### Type: `ResolvePluginInstance`

> **ResolvePluginInstance** = {object|object}

### Union Members

#### Type Literal

{object}

#### Index Signature

\[`index`: {string}\]: {any}

* `apply` {object} The run point of the plugin, required method.

***

#### Function

{object}

***

## 
### Type: `RuleSetCondition`

> **RuleSetCondition** = {string|RegExp|object|RuleSetLogicalConditions|RuleSetCondition[]}

***

## 
### Type: `RuleSetConditionAbsolute`

> **RuleSetConditionAbsolute** = {string|RegExp|object|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]}

***

## 
### Type: `RuleSetUse`

> **RuleSetUse** = {string|undefined|null|string|false|0|RuleSetUseFunction|object[]|RuleSetUseFunction|object}

### Union Members

{string}

***

{undefined|null|string|false|0|RuleSetUseFunction|object[]}

***

{RuleSetUseFunction}

***

#### Type Literal

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

## 
### Type: `RuleSetUseFunction`

> **RuleSetUseFunction** = {object}

---
### __type

* `data` {EffectData}

* ###Returns: {string|RuleSetUseFunction|object|undefined|null|string|false|0|RuleSetUseFunction|object[]}

***

## 
### Type: `RuleSetUseItem`

> **RuleSetUseItem** = {string|RuleSetUseFunction|object}

### Union Members

{string}

***

{RuleSetUseFunction}

***

#### Type Literal

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

## 
### Type: `StatsAsset`

> **StatsAsset** = {KnownStatsAsset|Record<string, any>}

***

## 
### Type: `StatsChunk`

> **StatsChunk** = {KnownStatsChunk|Record<string, any>}

***

## 
### Type: `StatsChunkGroup`

> **StatsChunkGroup** = {KnownStatsChunkGroup|Record<string, any>}

***

## 
### Type: `StatsChunkOrigin`

> **StatsChunkOrigin** = {KnownStatsChunkOrigin|Record<string, any>}

***

## 
### Type: `StatsCompilation`

> **StatsCompilation** = {KnownStatsCompilation|Record<string, any>}

***

## 
### Type: `StatsError`

> **StatsError** = {KnownStatsError|Record<string, any>}

***

## 
### Type: `StatsLogging`

> **StatsLogging** = {KnownStatsLogging|Record<string, any>}

***

## 
### Type: `StatsLoggingEntry`

> **StatsLoggingEntry** = {KnownStatsLoggingEntry|Record<string, any>}

***

## 
### Type: `StatsModule`

> **StatsModule** = {KnownStatsModule|Record<string, any>}

***

## 
### Type: `StatsModuleIssuer`

> **StatsModuleIssuer** = {KnownStatsModuleIssuer|Record<string, any>}

***

## 
### Type: `StatsModuleReason`

> **StatsModuleReason** = {KnownStatsModuleReason|Record<string, any>}

***

## 
### Type: `StatsModuleTraceDependency`

> **StatsModuleTraceDependency** = {KnownStatsModuleTraceDependency|Record<string, any>}

***

## 
### Type: `StatsModuleTraceItem`

> **StatsModuleTraceItem** = {KnownStatsModuleTraceItem|Record<string, any>}

***

## 
### Type: `StatsProfile`

> **StatsProfile** = {KnownStatsProfile|Record<string, any>}

***

## 
### Type: `TemplatePath`

> **TemplatePath** = {string|object}

***

## 
### Type: `WebpackPluginFunction`

> **WebpackPluginFunction** = {object}

---
### __type

* `this` {Compiler}
* `compiler` {Compiler}

* ###Returns: {void}

***

## 
### `UsageState`

> `const` **UsageState**: {Readonly<object>}

***

## 
### `validate`

> `const` **validate**: {object}

---
### __type

* `configuration` {Configuration|MultiConfiguration}

* ###Returns: {void}

***

## 
### `validateSchema`

> `const` **validateSchema**: {object}

---
### __type

* `schema` {Parameters<validateFunction>}
* `options` {Parameters<validateFunction>}
* `validationConfiguration` {ValidationErrorConfiguration}

* ###Returns: {void}

***

## 
### `version`

> `const` **version**: {string}

***

## 
### `webpack`

> `const` **webpack**: {_functionWebpack}

***

## `export=(options, callback)`

### Call Signature

---
### export=

* `options` {Configuration}
* `callback` {CallbackWebpackFunction_2<Stats, void>}

* ###Returns: {Compiler}

### Call Signature

---
### export=

* `options` {Configuration}

* ###Returns: {Compiler}

### Call Signature

---
### export=

* `options` {MultiConfiguration}
* `callback` {CallbackWebpackFunction_2<MultiStats, void>}

* ###Returns: {MultiCompiler}

### Call Signature

---
### export=

* `options` {MultiConfiguration}

* ###Returns: {MultiCompiler}
