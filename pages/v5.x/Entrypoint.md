# Entrypoint

<!-- type=misc -->

## Class: `Entrypoint`

* Extends: {ChunkGroup}

### Constructors

#### `new Entrypoint()`

* Returns: {Entrypoint}

### Properties

#### `asyncEntrypointsIterable`

* Type: {SortableSet<ChunkGroup>}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`asyncEntrypointsIterable`](Chunk.md#asyncentrypointsiterable)

***

#### `blocksIterable`

* Type: {Iterable<AsyncDependenciesBlock>}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`blocksIterable`](Chunk.md#blocksiterable)

***

#### `childrenIterable`

* Type: {SortableSet<ChunkGroup>}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`childrenIterable`](Chunk.md#childreniterable)

***

#### `chunks`

* Type: {Chunk[]}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`chunks`](Chunk.md#chunks)

***

#### `debugId`

* Type: {string}

get a uniqueId for ChunkGroup, made up of its member Chunk debugId's

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`debugId`](Chunk.md#debugid-1)

***

#### `getModuleIndex`

* Type: {Function}

##### Parameters

* `module` {Module}

* Returns: {number}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`getModuleIndex`](Chunk.md#getmoduleindex)

***

#### `getModuleIndex2`

* Type: {Function}

##### Parameters

* `module` {Module}

* Returns: {number}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`getModuleIndex2`](Chunk.md#getmoduleindex2)

***

#### `groupDebugId`

* Type: {number}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`groupDebugId`](Chunk.md#groupdebugid)

***

#### `id`

* Type: {string}

get a unique id for ChunkGroup, made up of its member Chunk id's

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`id`](Chunk.md#id-1)

***

#### `index`

* Type: {number} Optional.

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`index`](Chunk.md#index)

***

#### `name`

* Type: {string} Optional.

returns the name of current ChunkGroup
sets a new name for current ChunkGroup

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`name`](Chunk.md#name-1)

***

#### `options`

* Type: {ChunkGroupOptions}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`options`](Chunk.md#options)

***

#### `origins`

* Type: {OriginRecord[]}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`origins`](Chunk.md#origins)

***

#### `parentsIterable`

* Type: {SortableSet<ChunkGroup>}

##### Inherited from

[`ChunkGroup`](Chunk.md#class-chunkgroup).[`parentsIterable`](Chunk.md#parentsiterable)

### Methods

#### `addAsyncEntrypoint(entrypoint)`

##### Parameters

* `entrypoint` {Entrypoint}

* Returns: {boolean}

***

#### `addBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {boolean}

***

#### `addChild(group)`

##### Parameters

* `group` {ChunkGroup}

* Returns: {boolean}

***

#### `addDependOn(entrypoint)`

##### Parameters

* `entrypoint` {Entrypoint}

* Returns: {void}

***

#### `addOptions(options)`

##### Parameters

* `options` {ChunkGroupOptions}

* Returns: {void}

when a new chunk is added to a chunkGroup, addingOptions will occur.

***

#### `addOrigin(module, loc, request)`

##### Parameters

* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}

* Returns: {void}

***

#### `addParent(parentChunk)`

##### Parameters

* `parentChunk` {ChunkGroup}

* Returns: {boolean}

***

#### `checkConstraints()`

* Returns: {void}

***

#### `compareTo(chunkGraph, otherGroup)`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `otherGroup` {ChunkGroup}

* Returns: {-1|0|1}

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

***

#### `dependOn(entrypoint)`

##### Parameters

* `entrypoint` {Entrypoint}

* Returns: {boolean}

***

#### `getBlocks()`

* Returns: {AsyncDependenciesBlock[]}

***

#### `getChildren()`

* Returns: {ChunkGroup[]}

***

#### `getChildrenByOrders(moduleGraph, chunkGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* Returns: {Record<string, ChunkGroup[]>}

***

#### `getEntrypointChunk()`

* Returns: {Chunk}

Returns the chunk which contains the entrypoint modules
(or at least the execution of them)

***

#### `getFiles()`

* Returns: {string[]}

***

#### `getModulePostOrderIndex(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

Gets the bottom-up index of a module in this ChunkGroup

***

#### `getModulePreOrderIndex(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

Gets the top-down index of a module in this ChunkGroup

***

#### `getNumberOfBlocks()`

* Returns: {number}

***

#### `getNumberOfChildren()`

* Returns: {number}

***

#### `getNumberOfParents()`

* Returns: {number}

***

#### `getParents()`

* Returns: {ChunkGroup[]}

***

#### `getRuntimeChunk()`

* Returns: {Chunk}

Fetches the chunk reference containing the webpack bootstrap code

***

#### `hasBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {boolean}

***

#### `hasParent(parent)`

##### Parameters

* `parent` {ChunkGroup}

* Returns: {boolean}

***

#### `insertChunk(chunk, before)`

##### Parameters

* `chunk` {Chunk}
* `before` {Chunk}

* Returns: {boolean}

inserts a chunk before another existing chunk in group

***

#### `isInitial()`

* Returns: {boolean}

***

#### `pushChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

add a chunk into ChunkGroup. Is pushed on or prepended

***

#### `remove()`

* Returns: {void}

***

#### `removeChild(group)`

##### Parameters

* `group` {ChunkGroup}

* Returns: {boolean}

***

#### `removeChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

***

#### `removeParent(chunkGroup)`

##### Parameters

* `chunkGroup` {ChunkGroup}

* Returns: {boolean}

***

#### `replaceChunk(oldChunk, newChunk)`

##### Parameters

* `oldChunk` {Chunk}
* `newChunk` {Chunk}

* Returns: {boolean}

***

#### `setEntrypointChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

Sets the chunk with the entrypoint modules for an entrypoint.

***

#### `setModulePostOrderIndex(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {void}

Sets the bottom-up index of a module in this ChunkGroup

***

#### `setModulePreOrderIndex(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {void}

Sets the top-down index of a module in this ChunkGroup

***

#### `setRuntimeChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

Sets the runtimeChunk for an entrypoint.

***

#### `sortItems()`

* Returns: {void}

***

#### `unshiftChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

Performs an unshift of a specific chunk
