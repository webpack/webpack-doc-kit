# comparators

## `compareChunkGroupsByIndex`

> **compareChunkGroupsByIndex**: {(a: ChunkGroup, b: ChunkGroup) => 0|1|-1}

* `a` {ChunkGroup}
* `b` {ChunkGroup}
* Returns: {0|1|-1}

***

## `compareChunks`

> **compareChunks**: {ParameterizedComparator<ChunkGraph, Chunk>}

***

## `compareChunksById`

> **compareChunksById**: {(a: Chunk, b: Chunk) => 0|1|-1}

* `a` {Chunk}
* `b` {Chunk}
* Returns: {0|1|-1}

***

## `compareChunksNatural`

> **compareChunksNatural**: {(chunkGraph: ChunkGraph) => Comparator<Chunk>}

* `chunkGraph` {ChunkGraph}
* Returns: {Comparator<Chunk>}

***

## `compareIds`

> **compareIds**: {(a: string|number, b: string|number) => 0|1|-1}

* `a` {string|number}
* `b` {string|number}
* Returns: {0|1|-1}

***

## `compareIterables`

> **compareIterables**: {(elementComparator: Comparator<T>) => Comparator<Iterable<T>>}

* `T`
* `elementComparator` {Comparator<T>}
* Returns: {Comparator<Iterable<T>>}

***

## `compareLocations`

> **compareLocations**: {(a: DependencyLocation, b: DependencyLocation) => 0|1|-1}

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

> **compareModulesByIdentifier**: {(a: Module, b: Module) => 0|1|-1}

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

> **compareNumbers**: {(a: number, b: number) => 0|1|-1}

* `a` {number}
* `b` {number}
* Returns: {0|1|-1}

***

## `compareSelect`

> **compareSelect**: {(getter: Selector<T, R>, comparator: Comparator<R>) => Comparator<T>}

* `T`
* `R`
* `getter` {Selector<T, R>}
* `comparator` {Comparator<R>}
* Returns: {Comparator<T>}

***

## `compareStrings`

> **compareStrings**: {(a: string, b: string) => 0|1|-1}

* `a` {string}
* `b` {string}
* Returns: {0|1|-1}

***

## `compareStringsNumeric`

> **compareStringsNumeric**: {(a: string, b: string) => 0|1|-1}

* `a` {string}
* `b` {string}
* Returns: {0|1|-1}

***

## `concatComparators`

> **concatComparators**: {(c1: Comparator<T>, c2: Comparator<T>, cRest: Comparator<T>[]) => Comparator<T>}

* `T`
* `c1` {Comparator<T>}
* `c2` {Comparator<T>}
* `cRest` {Comparator<T>[]}
* Returns: {Comparator<T>}

***

## `keepOriginalOrder`

> **keepOriginalOrder**: {(iterable: Iterable<T>) => Comparator<T>}

* `T`
* `iterable` {Iterable<T>}
* Returns: {Comparator<T>}

***

## `sortWithSourceOrder`

> **sortWithSourceOrder**: {(dependencies: Dependency[], dependencySourceOrderMap: WeakMap<Dependency, DependencySourceOrder>, onDependencyReSort: (dep: Dependency, index: number) => void) => void}

* `dependencies` {Dependency[]}
* `dependencySourceOrderMap` {WeakMap<Dependency, DependencySourceOrder>}
* `onDependencyReSort` {(dep: Dependency, index: number) => void}
* Returns: {void}
