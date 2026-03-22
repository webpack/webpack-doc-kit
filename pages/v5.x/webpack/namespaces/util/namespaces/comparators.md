# comparators

## `compareChunkGroupsByIndex`

> **compareChunkGroupsByIndex**: {object}

* `a` {ChunkGroup}
* `b` {ChunkGroup}
* Returns: {0|1|-1}

***

## `compareChunks`

> **compareChunks**: {ParameterizedComparator<ChunkGraph, Chunk>}

***

## `compareChunksById`

> **compareChunksById**: {object}

* `a` {Chunk}
* `b` {Chunk}
* Returns: {0|1|-1}

***

## `compareChunksNatural`

> **compareChunksNatural**: {object}

* `chunkGraph` {ChunkGraph}
* Returns: {Comparator<Chunk>}

***

## `compareIds`

> **compareIds**: {object}

* `a` {string|number}
* `b` {string|number}
* Returns: {0|1|-1}

***

## `compareIterables`

> **compareIterables**: {object}

#### T

`T`
* `elementComparator` {Comparator<T>}
* Returns: {Comparator<Iterable<T>>}

***

## `compareLocations`

> **compareLocations**: {object}

* `a` {DependencyLocation}
* `b` {DependencyLocation}
* Returns: {0|1|-1}

***

## `compareModulesByFullName`

> **compareModulesByFullName**: {ParameterizedComparator<Compiler, Module>}

***

## `compareModulesById`

> **compareModulesById**: {ParameterizedComparator<ChunkGraph, Module>}

***

## `compareModulesByIdentifier`

> **compareModulesByIdentifier**: {object}

* `a` {Module}
* `b` {Module}
* Returns: {0|1|-1}

***

## `compareModulesByIdOrIdentifier`

> **compareModulesByIdOrIdentifier**: {ParameterizedComparator<ChunkGraph, Module>}

***

## `compareModulesByPostOrderIndexOrIdentifier`

> **compareModulesByPostOrderIndexOrIdentifier**: {ParameterizedComparator<ModuleGraph, Module>}

***

## `compareModulesByPreOrderIndexOrIdentifier`

> **compareModulesByPreOrderIndexOrIdentifier**: {ParameterizedComparator<ModuleGraph, Module>}

***

## `compareNumbers`

> **compareNumbers**: {object}

* `a` {number}
* `b` {number}
* Returns: {0|1|-1}

***

## `compareSelect`

> **compareSelect**: {object}

#### T

`T`

#### R

`R`
* `getter` {Selector<T, R>}
* `comparator` {Comparator<R>}
* Returns: {Comparator<T>}

***

## `compareStrings`

> **compareStrings**: {object}

* `a` {string}
* `b` {string}
* Returns: {0|1|-1}

***

## `compareStringsNumeric`

> **compareStringsNumeric**: {object}

* `a` {string}
* `b` {string}
* Returns: {0|1|-1}

***

## `concatComparators`

> **concatComparators**: {object}

#### T

`T`
* `c1` {Comparator<T>}
* `c2` {Comparator<T>}
* `cRest` {Comparator<T>[]}
* Returns: {Comparator<T>}

***

## `keepOriginalOrder`

> **keepOriginalOrder**: {object}

#### T

`T`
* `iterable` {Iterable<T>}
* Returns: {Comparator<T>}

***

## `sortWithSourceOrder`

> **sortWithSourceOrder**: {object}

* `dependencies` {Dependency[]}
* `dependencySourceOrderMap` {WeakMap<Dependency, DependencySourceOrder>}
* `onDependencyReSort` {object}
* Returns: {void}
