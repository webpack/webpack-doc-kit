# util

## Namespaces

- [comparators](namespaces/comparators.md)
- [compileBooleanMatcher](namespaces/compileBooleanMatcher.md)
- [runtime](namespaces/runtime.md)
- [serialization](namespaces/serialization.md)

## Class: `LazySet`

### Type Parameters

* `T`

### Constructors

#### `new LazySet([iterable])`

* `T`
* `iterable` {Iterable<T>}
* Returns: {LazySet<T>}

### Properties

* `size` {number}

### Methods

#### `[iterator]()`

* Returns: {SetIterator<T>}

#### `add(item)`

* `item` {T}
* Returns: {LazySet<T>}

#### `addAll(iterable)`

* `iterable` {LazySet<T>|Iterable<T, any, any>}
* Returns: {LazySet<T>}

#### `clear()`

* Returns: {void}

#### `delete(value)`

* `value` {T}
* Returns: {boolean}

#### `entries()`

* Returns: {SetIterator<Tuple<T, T>>}

#### `forEach(callbackFn, thisArg)`

* `K`
* `callbackFn` {(value: T, value2: T, set: Set<T>) => void}
* `thisArg` {K}
* Returns: {void}

#### `has(item)`

* `item` {T}
* Returns: {boolean}

#### `keys()`

* Returns: {SetIterator<T>}

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

#### `values()`

* Returns: {SetIterator<T>}

#### Static method: `deserialize(__namedParameters)`

* `T`
* `__namedParameters` {ObjectDeserializerContext}
* Returns: {LazySet<T>}

***

## `cleverMerge`

> `const` **cleverMerge**: {(first: null|T, second: null|O) => T|O|T|O}

* `T`
* `O`
* `first` {null|T}
* `second` {null|O}
* Returns: {T|O|T|O}

***

## `createHash`

> `const` **createHash**: {(algorithm: HashFunction) => Hash}

* `algorithm` {HashFunction}
* Returns: {Hash}

***

## `compileBooleanMatcher(map)`

* `map` {Record<string|number, boolean>}
* Returns: {boolean|(value: string) => string}
