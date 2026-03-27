# runtime

## 
### Class: `RuntimeSpecMap`

### Type Parameters

#### T

`T`

#### R

`R` = {T}

### Constructors

#### `new RuntimeSpecMap([clone])`

---
### RuntimeSpecMap

###### T

`T`

###### R

`R` = {T}

* `clone` {RuntimeSpecMap<T, R>}

* ###Returns: {RuntimeSpecMap<T, R>}

### Properties

* `size` {number}

### Methods

#### `delete(runtime)`

---
### delete

* `runtime` {RuntimeSpec}

* ###Returns: {void}

#### `get(runtime)`

---
### get

* `runtime` {RuntimeSpec}

* ###Returns: {R}

#### `has(runtime)`

---
### has

* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `keys()`

---
### keys

* ###Returns: {RuntimeSpec[]}

#### `provide(runtime, computer)`

---
### provide

* `runtime` {RuntimeSpec}
* `computer` {object}

* ###Returns: {R}

#### `set(runtime, value)`

---
### set

* `runtime` {RuntimeSpec}
* `value` {R}

* ###Returns: {void}

#### `update(runtime, fn)`

---
### update

* `runtime` {RuntimeSpec}
* `fn` {object}

* ###Returns: {void}

#### `values()`

---
### values

* ###Returns: {IterableIterator<R>}

***

## 
### Class: `RuntimeSpecSet`

### Constructors

#### `new RuntimeSpecSet([iterable])`

---
### RuntimeSpecSet

* `iterable` {Iterable<RuntimeSpec>}

* ###Returns: {RuntimeSpecSet}

### Properties

* `size` {number}

### Methods

#### `[iterator]()`

---
### [iterator]

* ###Returns: {IterableIterator<RuntimeSpec>}

#### `add(runtime)`

---
### add

* `runtime` {RuntimeSpec}

* ###Returns: {void}

#### `has(runtime)`

---
### has

* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

***

## 
### `compareRuntime`

> **compareRuntime**: {object}

---
### __type

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}

* ###Returns: {0|1|-1}

***

## 
### `filterRuntime`

> **filterRuntime**: {object}

---
### __type

* `runtime` {RuntimeSpec}
* `filter` {object}

* ###Returns: {undefined|string|boolean|SortableSet<string>}

***

## 
### `forEachRuntime`

> **forEachRuntime**: {object}

---
### __type

* `runtime` {RuntimeSpec}
* `fn` {object}
* `deterministicOrder` {boolean}

* ###Returns: {void}

***

## 
### `getEntryRuntime`

> **getEntryRuntime**: {object}

---
### __type

* `compilation` {Compilation}
* `name` {string}
* `options` {EntryOptions}

* ###Returns: {RuntimeSpec}

***

## 
### `getRuntimeKey`

> **getRuntimeKey**: {object}

---
### __type

* `runtime` {RuntimeSpec}

* ###Returns: {string}

***

## 
### `intersectRuntime`

> **intersectRuntime**: {object}

---
### __type

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}

* ###Returns: {RuntimeSpec}

***

## 
### `keyToRuntime`

> **keyToRuntime**: {object}

---
### __type

* `key` {string}

* ###Returns: {RuntimeSpec}

***

## 
### `mergeRuntime`

> **mergeRuntime**: {object}

---
### __type

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}

* ###Returns: {RuntimeSpec}

***

## 
### `mergeRuntimeCondition`

> **mergeRuntimeCondition**: {object}

---
### __type

* `a` {RuntimeCondition}
* `b` {RuntimeCondition}
* `runtime` {RuntimeSpec}

* ###Returns: {RuntimeCondition}

***

## 
### `mergeRuntimeConditionNonFalse`

> **mergeRuntimeConditionNonFalse**: {object}

---
### __type

* `a` {undefined|string|true|SortableSet<string>}
* `b` {undefined|string|true|SortableSet<string>}
* `runtime` {RuntimeSpec}

* ###Returns: {undefined|string|true|SortableSet<string>}

***

## 
### `mergeRuntimeOwned`

> **mergeRuntimeOwned**: {object}

---
### __type

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}

* ###Returns: {RuntimeSpec}

***

## 
### `runtimeConditionToString`

> **runtimeConditionToString**: {object}

---
### __type

* `runtimeCondition` {RuntimeCondition}

* ###Returns: {string}

***

## 
### `runtimeEqual`

> **runtimeEqual**: {object}

---
### __type

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}

* ###Returns: {boolean}

***

## 
### `runtimeToString`

> **runtimeToString**: {object}

---
### __type

* `runtime` {RuntimeSpec}

* ###Returns: {string}

***

## 
### `subtractRuntime`

> **subtractRuntime**: {object}

---
### __type

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}

* ###Returns: {RuntimeSpec}

***

## 
### `subtractRuntimeCondition`

> **subtractRuntimeCondition**: {object}

---
### __type

* `a` {RuntimeCondition}
* `b` {RuntimeCondition}
* `runtime` {RuntimeSpec}

* ###Returns: {RuntimeCondition}
