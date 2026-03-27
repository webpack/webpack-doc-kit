# comparators

## 
### `compareChunkGroupsByIndex`

> **compareChunkGroupsByIndex**: {object}

---
### __type

* `a` {ChunkGroup}
* `b` {ChunkGroup}

* ###Returns: {0|1|-1}

***

## 
### `compareChunks`

> **compareChunks**: {ParameterizedComparator<ChunkGraph, Chunk>}

***

## 
### `compareChunksById`

> **compareChunksById**: {object}

---
### __type

* `a` {Chunk}
* `b` {Chunk}

* ###Returns: {0|1|-1}

***

## 
### `compareChunksNatural`

> **compareChunksNatural**: {object}

---
### __type

* `chunkGraph` {ChunkGraph}

* ###Returns: {Comparator<Chunk>}

***

## 
### `compareIds`

> **compareIds**: {object}

---
### __type

* `a` {string|number}
* `b` {string|number}

* ###Returns: {0|1|-1}

***

## 
### `compareIterables`

> **compareIterables**: {object}

---
### __type

#### T

`T`

* `elementComparator` {Comparator<T>}

* ###Returns: {Comparator<Iterable<T>>}

***

## 
### `compareLocations`

> **compareLocations**: {object}

---
### __type

* `a` {DependencyLocation}
* `b` {DependencyLocation}

* ###Returns: {0|1|-1}

***

## 
### `compareModulesByFullName`

> **compareModulesByFullName**: {ParameterizedComparator<Compiler, Module>}

***

## 
### `compareModulesById`

> **compareModulesById**: {ParameterizedComparator<ChunkGraph, Module>}

***

## 
### `compareModulesByIdentifier`

> **compareModulesByIdentifier**: {object}

---
### __type

* `a` {Module}
* `b` {Module}

* ###Returns: {0|1|-1}

***

## 
### `compareModulesByIdOrIdentifier`

> **compareModulesByIdOrIdentifier**: {ParameterizedComparator<ChunkGraph, Module>}

***

## 
### `compareModulesByPostOrderIndexOrIdentifier`

> **compareModulesByPostOrderIndexOrIdentifier**: {ParameterizedComparator<ModuleGraph, Module>}

***

## 
### `compareModulesByPreOrderIndexOrIdentifier`

> **compareModulesByPreOrderIndexOrIdentifier**: {ParameterizedComparator<ModuleGraph, Module>}

***

## 
### `compareNumbers`

> **compareNumbers**: {object}

---
### __type

* `a` {number}
* `b` {number}

* ###Returns: {0|1|-1}

***

## 
### `compareSelect`

> **compareSelect**: {object}

---
### __type

#### T

`T`

#### R

`R`

* `getter` {Selector<T, R>}
* `comparator` {Comparator<R>}

* ###Returns: {Comparator<T>}

***

## 
### `compareStrings`

> **compareStrings**: {object}

---
### __type

* `a` {string}
* `b` {string}

* ###Returns: {0|1|-1}

***

## 
### `compareStringsNumeric`

> **compareStringsNumeric**: {object}

---
### __type

* `a` {string}
* `b` {string}

* ###Returns: {0|1|-1}

***

## 
### `concatComparators`

> **concatComparators**: {object}

---
### __type

#### T

`T`

* `c1` {Comparator<T>}
* `c2` {Comparator<T>}
* `cRest` {Comparator<T>[]}

* ###Returns: {Comparator<T>}

***

## 
### `keepOriginalOrder`

> **keepOriginalOrder**: {object}

---
### __type

#### T

`T`

* `iterable` {Iterable<T>}

* ###Returns: {Comparator<T>}

***

## 
### `sortWithSourceOrder`

> **sortWithSourceOrder**: {object}

---
### __type

* `dependencies` {Dependency[]}
* `dependencySourceOrderMap` {WeakMap<Dependency, DependencySourceOrder>}
* `onDependencyReSort` {object}

* ###Returns: {void}
