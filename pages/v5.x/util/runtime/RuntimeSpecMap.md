# RuntimeSpecMap

<!-- type=misc -->

## Class: `RuntimeSpecMap`

### Type Parameters

### Constructors

#### `new RuntimeSpecMap([clone])`

##### Parameters

* `clone` {RuntimeSpecMap<T, R>}

* Returns: {RuntimeSpecMap<T, R>}

### Properties

#### `size`

* Type: {number}

### Methods

#### `delete(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {void}

***

#### `get(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {R}

***

#### `has(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {boolean}

***

#### `keys()`

* Returns: {RuntimeSpec[]}

***

#### `provide(runtime, computer)`

##### Parameters

* `runtime` {RuntimeSpec}
* `computer` {Function}
  * Returns: {R}

* Returns: {R}

***

#### `set(runtime, value)`

##### Parameters

* `runtime` {RuntimeSpec}
* `value` {R}

* Returns: {void}

***

#### `update(runtime, fn)`

##### Parameters

* `runtime` {RuntimeSpec}
* `fn` {Function}
  * `value` {R}
  * Returns: {R}

* Returns: {void}

***

#### `values()`

* Returns: {IterableIterator<R>}
