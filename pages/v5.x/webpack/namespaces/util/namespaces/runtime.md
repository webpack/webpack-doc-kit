# runtime

## Class: `RuntimeSpecMap`

### Type Parameters

### Constructors

#### `new RuntimeSpecMap([clone])`

* `clone` {RuntimeSpecMap<T, R>}
* Returns: {RuntimeSpecMap<T, R>}

### Properties

* `size` {number}

### Methods

#### `delete(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {void}

#### `get(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {R}

#### `has(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

#### `keys()`

* Returns: {RuntimeSpec[]}

#### `provide(runtime, computer)`

* `runtime` {RuntimeSpec}
* `computer` {object}
* Returns: {R}

#### `set(runtime, value)`

* `runtime` {RuntimeSpec}
* `value` {R}
* Returns: {void}

#### `update(runtime, fn)`

* `runtime` {RuntimeSpec}
* `fn` {object}
* Returns: {void}

#### `values()`

* Returns: {IterableIterator<R>}

***

## Class: `RuntimeSpecSet`

### Constructors

#### `new RuntimeSpecSet([iterable])`

* `iterable` {Iterable<RuntimeSpec>}
* Returns: {RuntimeSpecSet}

### Properties

* `size` {number}

### Methods

#### `[iterator]()`

* Returns: {IterableIterator<RuntimeSpec>}

#### `add(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {void}

#### `has(runtime)`

* `runtime` {RuntimeSpec}
* Returns: {boolean}

***

## `compareRuntime`

> **compareRuntime**: {object}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {0|1|-1}

***

## `filterRuntime`

> **filterRuntime**: {object}

* `runtime` {RuntimeSpec}
* `filter` {object}
* Returns: {undefined|string|boolean|SortableSet<string>}

***

## `forEachRuntime`

> **forEachRuntime**: {object}

* `runtime` {RuntimeSpec}
* `fn` {object}
* `deterministicOrder` {boolean}
* Returns: {void}

***

## `getEntryRuntime`

> **getEntryRuntime**: {object}

* `compilation` {Compilation}
* `name` {string}
* `options` {EntryOptions}
* Returns: {RuntimeSpec}

***

## `getRuntimeKey`

> **getRuntimeKey**: {object}

* `runtime` {RuntimeSpec}
* Returns: {string}

***

## `intersectRuntime`

> **intersectRuntime**: {object}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `keyToRuntime`

> **keyToRuntime**: {object}

* `key` {string}
* Returns: {RuntimeSpec}

***

## `mergeRuntime`

> **mergeRuntime**: {object}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `mergeRuntimeCondition`

> **mergeRuntimeCondition**: {object}

* `a` {RuntimeCondition}
* `b` {RuntimeCondition}
* `runtime` {RuntimeSpec}
* Returns: {RuntimeCondition}

***

## `mergeRuntimeConditionNonFalse`

> **mergeRuntimeConditionNonFalse**: {object}

* `a` {undefined|string|true|SortableSet<string>}
* `b` {undefined|string|true|SortableSet<string>}
* `runtime` {RuntimeSpec}
* Returns: {undefined|string|true|SortableSet<string>}

***

## `mergeRuntimeOwned`

> **mergeRuntimeOwned**: {object}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `runtimeConditionToString`

> **runtimeConditionToString**: {object}

* `runtimeCondition` {RuntimeCondition}
* Returns: {string}

***

## `runtimeEqual`

> **runtimeEqual**: {object}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {boolean}

***

## `runtimeToString`

> **runtimeToString**: {object}

* `runtime` {RuntimeSpec}
* Returns: {string}

***

## `subtractRuntime`

> **subtractRuntime**: {object}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `subtractRuntimeCondition`

> **subtractRuntimeCondition**: {object}

* `a` {RuntimeCondition}
* `b` {RuntimeCondition}
* `runtime` {RuntimeSpec}
* Returns: {RuntimeCondition}
