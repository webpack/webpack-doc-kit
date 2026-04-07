# Chunk

<!-- type=misc -->

## Class: `Chunk`

### Constructors

#### `new Chunk([name][, backCompat])`

##### Parameters

* `name` {string}
* `backCompat` {boolean}

* Returns: {Chunk}

### Properties

#### `auxiliaryFiles`

* Type: {Set<string>}

***

#### `chunkReason`

* Type: {string} Optional.

***

#### `contentHash`

* Type: {Record<string, string>}

***

#### `cssFilenameTemplate`

* Type: {string|Function} Optional.

***

#### `debugId`

* Type: {number}

***

#### `entryModule`

* Type: {Module}

##### Deprecated

***

#### `extraAsync`

* Type: {boolean}

***

#### `filenameTemplate`

* Type: {string|Function} Optional.

***

#### `files`

* Type: {Set<string>}

***

#### `groupsIterable`

* Type: {SortableSet<ChunkGroup>}

***

#### `hash`

* Type: {string} Optional.

***

#### `id`

* Type: {string|number}

***

#### `idNameHints`

* Type: {SortableSet<string>}

***

#### `ids`

* Type: {ChunkId[]}

***

#### `modulesIterable`

* Type: {Iterable<Module>}

***

#### `name`

* Type: {string} Optional.

***

#### `preventIntegration`

* Type: {boolean}

***

#### `rendered`

* Type: {boolean}

***

#### `renderedHash`

* Type: {string} Optional.

***

#### `runtime`

* Type: {RuntimeSpec}

### Methods

#### `addGroup(chunkGroup)`

##### Parameters

* `chunkGroup` {ChunkGroup}

* Returns: {void}

***

#### `addModule(module)`

##### Parameters

* `module` {Module}

* Returns: {boolean}

***

#### `canBeInitial()`

* Returns: {boolean}

***

#### `canBeIntegrated(otherChunk)`

##### Parameters

* `otherChunk` {Chunk}

* Returns: {boolean}

***

#### `compareTo(otherChunk)`

##### Parameters

* `otherChunk` {Chunk}

* Returns: {-1|0|1}

***

#### `containsModule(module)`

##### Parameters

* `module` {Module}

* Returns: {boolean}

***

#### `disconnectFromGroups()`

* Returns: {void}

***

#### `getAllAsyncChunks()`

* Returns: {Set<Chunk>}

***

#### `getAllInitialChunks()`

* Returns: {Set<Chunk>}

***

#### `getAllReferencedAsyncEntrypoints()`

* Returns: {Set<Entrypoint>}

***

#### `getAllReferencedChunks()`

* Returns: {Set<Chunk>}

***

#### `getChildIdsByOrders(chunkGraph[, filterFn])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `filterFn` {Function}
  * `c` {Chunk}
  * `chunkGraph` {ChunkGraph}
  * Returns: {boolean}

* Returns: {Record<string, ChunkId[]>}

***

#### `getChildIdsByOrdersMap(chunkGraph[, includeDirectChildren][, filterFn])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `includeDirectChildren` {boolean}
* `filterFn` {Function}
  * `c` {Chunk}
  * `chunkGraph` {ChunkGraph}
  * Returns: {boolean}

* Returns: {ChunkChildIdsByOrdersMapByData}

***

#### `getChildrenOfTypeInOrder(chunkGraph, type)`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `type` {string}

* Returns: {ChunkChildOfTypeInOrder[]}

***

#### `getChunkMaps(realHash)`

> Stability: 0 - Deprecated

##### Parameters

* `realHash` {boolean}

* Returns: {ChunkMaps}

***

#### `getChunkModuleMaps(filterFn)`

##### Parameters

* `filterFn` {Function}
  * `m` {Module}
  * Returns: {boolean}

* Returns: {ChunkModuleMaps}

***

#### `getEntryOptions()`

* Returns: {EntryOptions}

***

#### `getModules()`

* Returns: {Module[]}

***

#### `getNumberOfGroups()`

* Returns: {number}

***

#### `getNumberOfModules()`

* Returns: {number}

***

#### `hasAsyncChunks()`

* Returns: {boolean}

***

#### `hasChildByOrder(chunkGraph, type[, includeDirectChildren][, filterFn])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `type` {string}
* `includeDirectChildren` {boolean}
* `filterFn` {Function}
  * `c` {Chunk}
  * `chunkGraph` {ChunkGraph}
  * Returns: {boolean}

* Returns: {boolean}

***

#### `hasEntryModule()`

* Returns: {boolean}

***

#### `hasModuleInGraph(filterFn[, filterChunkFn])`

##### Parameters

* `filterFn` {Function}
  * `m` {Module}
  * Returns: {boolean}
* `filterChunkFn` {Function}
  * `c` {Chunk}
  * `chunkGraph` {ChunkGraph}
  * Returns: {boolean}

* Returns: {boolean}

***

#### `hasRuntime()`

* Returns: {boolean}

***

#### `integrate(otherChunk)`

##### Parameters

* `otherChunk` {Chunk}

* Returns: {boolean}

***

#### `integratedSize(otherChunk, options)`

##### Parameters

* `otherChunk` {Chunk}
* `options` {ChunkSizeOptions}

* Returns: {number}

***

#### `isEmpty()`

* Returns: {boolean}

***

#### `isInGroup(chunkGroup)`

##### Parameters

* `chunkGroup` {ChunkGroup}

* Returns: {boolean}

***

#### `isOnlyInitial()`

* Returns: {boolean}

***

#### `modulesSize()`

* Returns: {number}

***

#### `moveModule(module, otherChunk)`

##### Parameters

* `module` {Module}
* `otherChunk` {Chunk}

* Returns: {void}

***

#### `remove()`

* Returns: {void}

***

#### `removeGroup(chunkGroup)`

##### Parameters

* `chunkGroup` {ChunkGroup}

* Returns: {void}

***

#### `removeModule(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

***

#### `size([options])`

##### Parameters

* `options` {ChunkSizeOptions}

* Returns: {number}

***

#### `split(newChunk)`

##### Parameters

* `newChunk` {Chunk}

* Returns: {void}

***

#### `updateHash(hash, chunkGraph)`

##### Parameters

* `hash` {Hash}
* `chunkGraph` {ChunkGraph}

* Returns: {void}

## Class: `ChunkGraph`

### Constructors

#### `new ChunkGraph(moduleGraph[, hashFunction])`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `hashFunction` {HashFunction}

* Returns: {ChunkGraph}

### Properties

#### `moduleGraph`

* Type: {ModuleGraph}

### Methods

#### `addChunkRuntimeRequirements(chunk, items)`

##### Parameters

* `chunk` {Chunk}
* `items` {Set<string>}

* Returns: {void}

#### `addDependentHashModuleToChunk(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {RuntimeModule}

* Returns: {void}

#### `addFullHashModuleToChunk(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {RuntimeModule}

* Returns: {void}

#### `addModuleRuntimeRequirements(module, runtime, items[, transferOwnership])`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `items` {Set<string>}
* `transferOwnership` {boolean}

* Returns: {void}

#### `addTreeRuntimeRequirements(chunk, items)`

##### Parameters

* `chunk` {Chunk}
* `items` {Iterable<string>}

* Returns: {void}

#### `attachDependentHashModules(chunk, modules)`

##### Parameters

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}

* Returns: {void}

#### `attachFullHashModules(chunk, modules)`

##### Parameters

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}

* Returns: {void}

#### `attachModules(chunk, modules)`

##### Parameters

* `chunk` {Chunk}
* `modules` {Iterable<Module>}

* Returns: {void}

#### `attachRuntimeModules(chunk, modules)`

##### Parameters

* `chunk` {Chunk}
* `modules` {Iterable<RuntimeModule>}

* Returns: {void}

#### `canChunksBeIntegrated(chunkA, chunkB)`

##### Parameters

* `chunkA` {Chunk}
* `chunkB` {Chunk}

* Returns: {boolean}

#### `compareChunks(chunkA, chunkB)`

##### Parameters

* `chunkA` {Chunk}
* `chunkB` {Chunk}

* Returns: {-1|0|1}

#### `connectBlockAndChunkGroup(depBlock, chunkGroup)`

##### Parameters

* `depBlock` {AsyncDependenciesBlock}
* `chunkGroup` {ChunkGroup}

* Returns: {void}

#### `connectChunkAndEntryModule(chunk, module, entrypoint)`

##### Parameters

* `chunk` {Chunk}
* `module` {Module}
* `entrypoint` {Entrypoint}

* Returns: {void}

#### `connectChunkAndModule(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {Module}

* Returns: {void}

#### `connectChunkAndRuntimeModule(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {RuntimeModule}

* Returns: {void}

#### `disconnectChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

#### `disconnectChunkAndEntryModule(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {Module}

* Returns: {void}

#### `disconnectChunkAndModule(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {Module}

* Returns: {void}

#### `disconnectChunkAndRuntimeModule(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {RuntimeModule}

* Returns: {void}

#### `disconnectChunkGroup(chunkGroup)`

##### Parameters

* `chunkGroup` {ChunkGroup}

* Returns: {void}

#### `disconnectEntries(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

#### `disconnectEntryModule(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

#### `getBlockChunkGroup(depBlock)`

##### Parameters

* `depBlock` {AsyncDependenciesBlock}

* Returns: {ChunkGroup}

#### `getChunkConditionMap(chunk, filterFn)`

##### Parameters

* `chunk` {Chunk}
* `filterFn` {Function}
  * `c` {Chunk}
  * `chunkGraph` {ChunkGraph}
  * Returns: {boolean}

* Returns: {ChunkConditionMap}

#### `getChunkDependentHashModulesIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<RuntimeModule, any, any>}

#### `getChunkEntryDependentChunksIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<Chunk>}

#### `getChunkEntryModulesIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<Module>}

#### `getChunkEntryModulesWithChunkGroupIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<[Module, Entrypoint]>}

#### `getChunkFullHashModulesIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<RuntimeModule, any, any>}

#### `getChunkFullHashModulesSet(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {ReadonlySet<RuntimeModule>}

#### `getChunkModuleIdMap(chunk, filterFn[, includeAllChunks])`

##### Parameters

* `chunk` {Chunk}
* `filterFn` {Function}
  * `m` {Module}
  * Returns: {boolean}
* `includeAllChunks` {boolean}

* Returns: {ChunkModuleIdMapEs5Alias_2}

#### `getChunkModuleRenderedHashMap(chunk, filterFn[, hashLength][, includeAllChunks])`

##### Parameters

* `chunk` {Chunk}
* `filterFn` {Function}
  * `m` {Module}
  * Returns: {boolean}
* `hashLength` {number}
* `includeAllChunks` {boolean}

* Returns: {ChunkModuleHashMap}

#### `getChunkModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Module[]}

#### `getChunkModulesIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<Module>}

#### `getChunkModulesIterableBySourceType(chunk, sourceType)`

##### Parameters

* `chunk` {Chunk}
* `sourceType` {string}

* Returns: {Iterable<Module, any, any>}

#### `getChunkModuleSourceTypes(chunk, module)`

##### Parameters

* `chunk` {Chunk}
* `module` {Module}

* Returns: {ReadonlySet<string>}

#### `getChunkModulesSize(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {number}

#### `getChunkModulesSizes(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Record<string, number>}

#### `getChunkRootModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Module[]}

#### `getChunkRuntimeModulesInOrder(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {RuntimeModule[]}

#### `getChunkRuntimeModulesIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<RuntimeModule>}

#### `getChunkRuntimeRequirements(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {ReadonlySet<string>}

#### `getChunkSize(chunk[, options])`

##### Parameters

* `chunk` {Chunk}
* `options` {ChunkSizeOptions}

* Returns: {number}

#### `getIntegratedChunksSize(chunkA, chunkB[, options])`

##### Parameters

* `chunkA` {Chunk}
* `chunkB` {Chunk}
* `options` {ChunkSizeOptions}

* Returns: {number}

#### `getModuleChunks(module)`

##### Parameters

* `module` {Module}

* Returns: {Chunk[]}

#### `getModuleChunksIterable(module)`

##### Parameters

* `module` {Module}

* Returns: {Iterable<Chunk>}

#### `getModuleGraphHash(module, runtime[, withConnections])`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}

* Returns: {string}

#### `getModuleGraphHashBigInt(module, runtime[, withConnections])`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `withConnections` {boolean}

* Returns: {bigint}

#### `getModuleHash(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {string}

#### `getModuleId(module)`

##### Parameters

* `module` {Module}

* Returns: {string|number}

#### `getModuleRuntimeRequirements(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {ReadonlySet<string>}

#### `getModuleRuntimes(module)`

##### Parameters

* `module` {Module}

* Returns: {RuntimeSpecSet}

#### `getModuleSourceTypes(module)`

##### Parameters

* `module` {Module}

* Returns: {ReadonlySet<string>}

#### `getNumberOfChunkFullHashModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {number}

#### `getNumberOfChunkModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {number}

#### `getNumberOfEntryModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {number}

#### `getNumberOfModuleChunks(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

#### `getNumberOfRuntimeModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {number}

#### `getOrderedChunkModules(chunk, comparator)`

##### Parameters

* `chunk` {Chunk}
* `comparator` {Function}
  * `a` {Module}
  * `b` {Module}
  * Returns: {-1|0|1}

* Returns: {Module[]}

#### `getOrderedChunkModulesIterable(chunk, comparator)`

##### Parameters

* `chunk` {Chunk}
* `comparator` {Function}
  * `a` {Module}
  * `b` {Module}
  * Returns: {-1|0|1}

* Returns: {Iterable<Module>}

#### `getOrderedChunkModulesIterableBySourceType(chunk, sourceType, comparator)`

##### Parameters

* `chunk` {Chunk}
* `sourceType` {string}
* `comparator` {Function}
  * `a` {Module}
  * `b` {Module}
  * Returns: {-1|0|1}

* Returns: {Iterable<Module, any, any>}

#### `getOrderedModuleChunksIterable(module, sortFn)`

##### Parameters

* `module` {Module}
* `sortFn` {Function}
  * `a` {Chunk}
  * `b` {Chunk}
  * Returns: {-1|0|1}

* Returns: {Iterable<Chunk>}

#### `getRenderedModuleHash(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {string}

#### `getRuntimeChunkDependentChunksIterable(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {Iterable<Chunk>}

#### `getRuntimeId(runtime)`

##### Parameters

* `runtime` {string}

* Returns: {RuntimeId}

#### `getTreeRuntimeRequirements(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {ReadonlySet<string>}

#### `hasChunkEntryDependentChunks(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

#### `hasModuleHashes(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {boolean}

#### `hasModuleInGraph(chunk, filterFn[, filterChunkFn])`

##### Parameters

* `chunk` {Chunk}
* `filterFn` {Function}
  * `m` {Module}
  * Returns: {boolean}
* `filterChunkFn` {Function}
  * `c` {Chunk}
  * `chunkGraph` {ChunkGraph}
  * Returns: {boolean}

* Returns: {boolean}

#### `integrateChunks(chunkA, chunkB)`

##### Parameters

* `chunkA` {Chunk}
* `chunkB` {Chunk}

* Returns: {void}

#### `isEntryModule(module)`

##### Parameters

* `module` {Module}

* Returns: {boolean}

#### `isEntryModuleInChunk(module, chunk)`

##### Parameters

* `module` {Module}
* `chunk` {Chunk}

* Returns: {boolean}

#### `isModuleInChunk(module, chunk)`

##### Parameters

* `module` {Module}
* `chunk` {Chunk}

* Returns: {boolean}

#### `isModuleInChunkGroup(module, chunkGroup)`

##### Parameters

* `module` {Module}
* `chunkGroup` {ChunkGroup}

* Returns: {boolean}

#### `replaceModule(oldModule, newModule)`

##### Parameters

* `oldModule` {Module}
* `newModule` {Module}

* Returns: {void}

#### `setChunkModuleSourceTypes(chunk, module, sourceTypes)`

##### Parameters

* `chunk` {Chunk}
* `module` {Module}
* `sourceTypes` {ReadonlySet<string>}

* Returns: {void}

#### `setModuleHashes(module, runtime, hash, renderedHash)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `hash` {string}
* `renderedHash` {string}

* Returns: {void}

#### `setModuleId(module, id)`

##### Parameters

* `module` {Module}
* `id` {ModuleId}

* Returns: {void}

#### `setRuntimeId(runtime, id)`

##### Parameters

* `runtime` {string}
* `id` {RuntimeId}

* Returns: {void}

#### `upgradeDependentToFullHashModules(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

#### Static method: `clearChunkGraphForChunk(chunk)`

> Stability: 0 - Deprecated

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

#### Static method: `clearChunkGraphForModule(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {void}

#### Static method: `getChunkGraphForChunk(chunk, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

##### Parameters

* `chunk` {Chunk}
* `deprecateMessage` {string}
* `deprecationCode` {string}

* Returns: {ChunkGraph}

#### Static method: `getChunkGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}

* Returns: {ChunkGraph}

#### Static method: `setChunkGraphForChunk(chunk, chunkGraph)`

> Stability: 0 - Deprecated

##### Parameters

* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* Returns: {void}

#### Static method: `setChunkGraphForModule(module, chunkGraph)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}
* `chunkGraph` {ChunkGraph}

* Returns: {void}

## Class: `ChunkGroup`

### Constructors

#### `new ChunkGroup()`

* Returns: {ChunkGroup}

### Properties

#### `asyncEntrypointsIterable`

* Type: {SortableSet<ChunkGroup>}

#### `blocksIterable`

* Type: {Iterable<AsyncDependenciesBlock>}

#### `childrenIterable`

* Type: {SortableSet<ChunkGroup>}

#### `chunks`

* Type: {Chunk[]}

#### `debugId`

* Type: {string}

get a uniqueId for ChunkGroup, made up of its member Chunk debugId's

#### `getModuleIndex`

* Type: {Function}

##### Parameters

* `module` {Module}

* Returns: {number}

#### `getModuleIndex2`

* Type: {Function}

##### Parameters

* `module` {Module}

* Returns: {number}

#### `groupDebugId`

* Type: {number}

#### `id`

* Type: {string}

get a unique id for ChunkGroup, made up of its member Chunk id's

#### `index`

* Type: {number} Optional.

#### `name`

* Type: {string} Optional.

returns the name of current ChunkGroup
sets a new name for current ChunkGroup

#### `options`

* Type: {ChunkGroupOptions}

#### `origins`

* Type: {OriginRecord[]}

#### `parentsIterable`

* Type: {SortableSet<ChunkGroup>}

### Methods

#### `addAsyncEntrypoint(entrypoint)`

##### Parameters

* `entrypoint` {Entrypoint}

* Returns: {boolean}

#### `addBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {boolean}

#### `addChild(group)`

##### Parameters

* `group` {ChunkGroup}

* Returns: {boolean}

#### `addOptions(options)`

##### Parameters

* `options` {ChunkGroupOptions}

* Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### `addOrigin(module, loc, request)`

##### Parameters

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}

* Returns: {void}

#### `addParent(parentChunk)`

##### Parameters

* `parentChunk` {ChunkGroup}

* Returns: {boolean}

#### `checkConstraints()`

* Returns: {void}

#### `compareTo(chunkGraph, otherGroup)`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}

* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

#### `getChildren()`

* Returns: {ChunkGroup[]}

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* Returns: {Record<string, ChunkGroup[]>}

#### `getFiles()`

* Returns: {string[]}

#### `getModulePostOrderIndex(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

#### `getModulePreOrderIndex(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

Gets the top-down index of a module in this ChunkGroup

#### `getNumberOfBlocks()`

* Returns: {number}

#### `getNumberOfChildren()`

* Returns: {number}

#### `getNumberOfParents()`

* Returns: {number}

#### `getParents()`

* Returns: {ChunkGroup[]}

#### `hasBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {boolean}

#### `hasParent(parent)`

##### Parameters

* `parent` {ChunkGroup}

* Returns: {boolean}

#### `insertChunk(chunk, before)`

##### Parameters

* `chunk` {Chunk}
* `before` {Chunk}

* Returns: {boolean}

inserts a chunk before another existing chunk in group

#### `isInitial()`

* Returns: {boolean}

#### `pushChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

#### `remove()`

* Returns: {void}

#### `removeChild(group)`

##### Parameters

* `group` {ChunkGroup}

* Returns: {boolean}

#### `removeChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

#### `removeParent(chunkGroup)`

##### Parameters

* `chunkGroup` {ChunkGroup}

* Returns: {boolean}

#### `replaceChunk(oldChunk, newChunk)`

##### Parameters

* `oldChunk` {Chunk}
* `newChunk` {Chunk}

* Returns: {boolean}

#### `setModulePostOrderIndex(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

#### `setModulePreOrderIndex(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {void}

Sets the top-down index of a module in this ChunkGroup

#### `sortItems()`

* Returns: {void}

#### `unshiftChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

Performs an unshift of a specific chunk

## Class: `ChunkModuleIdRangePlugin`

### Constructors

#### `new ChunkModuleIdRangePlugin(options)`

##### Parameters

* `options` {ChunkModuleIdRangePluginOptions}

* Returns: {ChunkModuleIdRangePlugin}

### Properties

#### `options`

* Type: {ChunkModuleIdRangePluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## Class: `ChunkPrefetchPreloadPlugin`

### Constructors

#### `new ChunkPrefetchPreloadPlugin()`

* Returns: {ChunkPrefetchPreloadPlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}
