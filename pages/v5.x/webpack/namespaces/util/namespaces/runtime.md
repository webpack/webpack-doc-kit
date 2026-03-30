# runtime

## Class: `RuntimeSpecMap`

### Type Parameters

* `T`
* `R` = {T}

### Constructors

#### `new RuntimeSpecMap([clone])`

* `T`
* `R` = {T}
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
* `computer` {() => R}
* Returns: {R}

#### `set(runtime, value)`

* `runtime` {RuntimeSpec}
* `value` {R}
* Returns: {void}

#### `update(runtime, fn)`

* `runtime` {RuntimeSpec}
* `fn` {(value: R) => R}
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

> **compareRuntime**: {(a: RuntimeSpec, b: RuntimeSpec) => 0|1|-1}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {0|1|-1}

***

## `filterRuntime`

> **filterRuntime**: {(runtime: RuntimeSpec, filter: (runtime: RuntimeSpec) => boolean) => undefined|string|boolean|SortableSet<string>}

* `runtime` {RuntimeSpec}
* `filter` {(runtime: RuntimeSpec) => boolean}
* Returns: {undefined|string|boolean|SortableSet<string>}

***

## `forEachRuntime`

> **forEachRuntime**: {(runtime: RuntimeSpec, fn: (runtime: string) => void, deterministicOrder: boolean) => void}

* `runtime` {RuntimeSpec}
* `fn` {(runtime: string) => void}
* `deterministicOrder` {boolean}
* Returns: {void}

***

## `getEntryRuntime`

> **getEntryRuntime**: {(compilation: Compilation, name: string, options: EntryOptions) => RuntimeSpec}

* `compilation` {Compilation}
* `name` {string}
* `options` {EntryOptions}
* Returns: {RuntimeSpec}

***

## `getRuntimeKey`

> **getRuntimeKey**: {(runtime: RuntimeSpec) => string}

* `runtime` {RuntimeSpec}
* Returns: {string}

***

## `intersectRuntime`

> **intersectRuntime**: {(a: RuntimeSpec, b: RuntimeSpec) => RuntimeSpec}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `keyToRuntime`

> **keyToRuntime**: {(key: string) => RuntimeSpec}

* `key` {string}
* Returns: {RuntimeSpec}

***

## `mergeRuntime`

> **mergeRuntime**: {(a: RuntimeSpec, b: RuntimeSpec) => RuntimeSpec}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `mergeRuntimeCondition`

> **mergeRuntimeCondition**: {(a: RuntimeCondition, b: RuntimeCondition, runtime: RuntimeSpec) => RuntimeCondition}

* `a` {RuntimeCondition}
* `b` {RuntimeCondition}
* `runtime` {RuntimeSpec}
* Returns: {RuntimeCondition}

***

## `mergeRuntimeConditionNonFalse`

> **mergeRuntimeConditionNonFalse**: {(a: undefined|string|true|SortableSet<string>, b: undefined|string|true|SortableSet<string>, runtime: RuntimeSpec) => undefined|string|true|SortableSet<string>}

* `a` {undefined|string|true|SortableSet<string>}
* `b` {undefined|string|true|SortableSet<string>}
* `runtime` {RuntimeSpec}
* Returns: {undefined|string|true|SortableSet<string>}

***

## `mergeRuntimeOwned`

> **mergeRuntimeOwned**: {(a: RuntimeSpec, b: RuntimeSpec) => RuntimeSpec}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `runtimeConditionToString`

> **runtimeConditionToString**: {(runtimeCondition: RuntimeCondition) => string}

* `runtimeCondition` {RuntimeCondition}
* Returns: {string}

***

## `runtimeEqual`

> **runtimeEqual**: {(a: RuntimeSpec, b: RuntimeSpec) => boolean}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {boolean}

***

## `runtimeToString`

> **runtimeToString**: {(runtime: RuntimeSpec) => string}

* `runtime` {RuntimeSpec}
* Returns: {string}

***

## `subtractRuntime`

> **subtractRuntime**: {(a: RuntimeSpec, b: RuntimeSpec) => RuntimeSpec}

* `a` {RuntimeSpec}
* `b` {RuntimeSpec}
* Returns: {RuntimeSpec}

***

## `subtractRuntimeCondition`

> **subtractRuntimeCondition**: {(a: RuntimeCondition, b: RuntimeCondition, runtime: RuntimeSpec) => RuntimeCondition}

* `a` {RuntimeCondition}
* `b` {RuntimeCondition}
* `runtime` {RuntimeSpec}
* Returns: {RuntimeCondition}
