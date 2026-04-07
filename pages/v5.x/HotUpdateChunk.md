# HotUpdateChunk

<!-- type=misc -->

## Class: `HotUpdateChunk`

* Extends: {Chunk}

### Constructors

#### `new HotUpdateChunk()`

* Returns: {HotUpdateChunk}

### Properties

#### `auxiliaryFiles`

* Type: {Set<string>}

##### Inherited from

[`Chunk`](Chunk.md).[`auxiliaryFiles`](Chunk.md#auxiliaryfiles)

***

#### `chunkReason`

* Type: {string} Optional.

##### Inherited from

[`Chunk`](Chunk.md).[`chunkReason`](Chunk.md#chunkreason)

***

#### `contentHash`

* Type: {Record<string, string>}

##### Inherited from

[`Chunk`](Chunk.md).[`contentHash`](Chunk.md#contenthash)

***

#### `cssFilenameTemplate`

* Type: {string|Function} Optional.

##### Inherited from

[`Chunk`](Chunk.md).[`cssFilenameTemplate`](Chunk.md#cssfilenametemplate)

***

#### `debugId`

* Type: {number}

##### Inherited from

[`Chunk`](Chunk.md).[`debugId`](Chunk.md#debugid)

***

#### `entryModule`

* Type: {Module}

##### Deprecated

##### Inherited from

[`Chunk`](Chunk.md).[`entryModule`](Chunk.md#entrymodule)

***

#### `extraAsync`

* Type: {boolean}

##### Inherited from

[`Chunk`](Chunk.md).[`extraAsync`](Chunk.md#extraasync)

***

#### `filenameTemplate`

* Type: {string|Function} Optional.

##### Inherited from

[`Chunk`](Chunk.md).[`filenameTemplate`](Chunk.md#filenametemplate)

***

#### `files`

* Type: {Set<string>}

##### Inherited from

[`Chunk`](Chunk.md).[`files`](Chunk.md#files)

***

#### `groupsIterable`

* Type: {SortableSet<ChunkGroup>}

##### Inherited from

[`Chunk`](Chunk.md).[`groupsIterable`](Chunk.md#groupsiterable)

***

#### `hash`

* Type: {string} Optional.

##### Inherited from

[`Chunk`](Chunk.md).[`hash`](Chunk.md#hash)

***

#### `id`

* Type: {string|number}

##### Inherited from

[`Chunk`](Chunk.md).[`id`](Chunk.md#id)

***

#### `idNameHints`

* Type: {SortableSet<string>}

##### Inherited from

[`Chunk`](Chunk.md).[`idNameHints`](Chunk.md#idnamehints)

***

#### `ids`

* Type: {ChunkId[]}

##### Inherited from

[`Chunk`](Chunk.md).[`ids`](Chunk.md#ids)

***

#### `modulesIterable`

* Type: {Iterable<Module>}

##### Inherited from

[`Chunk`](Chunk.md).[`modulesIterable`](Chunk.md#modulesiterable)

***

#### `name`

* Type: {string} Optional.

##### Inherited from

[`Chunk`](Chunk.md).[`name`](Chunk.md#name)

***

#### `preventIntegration`

* Type: {boolean}

##### Inherited from

[`Chunk`](Chunk.md).[`preventIntegration`](Chunk.md#preventintegration)

***

#### `rendered`

* Type: {boolean}

##### Inherited from

[`Chunk`](Chunk.md).[`rendered`](Chunk.md#rendered)

***

#### `renderedHash`

* Type: {string} Optional.

##### Inherited from

[`Chunk`](Chunk.md).[`renderedHash`](Chunk.md#renderedhash)

***

#### `runtime`

* Type: {RuntimeSpec}

##### Inherited from

[`Chunk`](Chunk.md).[`runtime`](Chunk.md#runtime)

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
