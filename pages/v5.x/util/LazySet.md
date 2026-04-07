# LazySet

<!-- type=misc -->

## Class: `LazySet`

### Type Parameters

### Constructors

#### `new LazySet([iterable])`

##### Parameters

* `iterable` {Iterable<T>}

* Returns: {LazySet<T>}

### Properties

#### `size`

* Type: {number}

### Methods

#### `[iterator]()`

* Returns: {SetIterator<T>}

***

#### `add(item)`

##### Parameters

* `item` {T}

* Returns: {LazySet<T>}

***

#### `addAll(iterable)`

##### Parameters

* `iterable` {LazySet<T>|Iterable<T, any, any>}

* Returns: {LazySet<T>}

***

#### `clear()`

* Returns: {void}

***

#### `delete(value)`

##### Parameters

* `value` {T}

* Returns: {boolean}

***

#### `entries()`

* Returns: {SetIterator<[T, T]>}

***

#### `forEach(callbackFn, thisArg)`

##### Parameters

* `callbackFn` {Function}
  * `value` {T}
  * `value2` {T}
  * `set` {Set<T>}
  * Returns: {void}
* `thisArg` {K}

* Returns: {void}

***

#### `has(item)`

##### Parameters

* `item` {T}

* Returns: {boolean}

***

#### `keys()`

* Returns: {SetIterator<T>}

***

#### `serialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectSerializerContext}

* Returns: {void}

***

#### `values()`

* Returns: {SetIterator<T>}

***

#### Static method: `deserialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectDeserializerContext}

* Returns: {LazySet<T>}
