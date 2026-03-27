# util

## Namespaces

- [comparators](namespaces/comparators.md)
- [compileBooleanMatcher](namespaces/compileBooleanMatcher.md)
- [runtime](namespaces/runtime.md)
- [serialization](namespaces/serialization.md)

## 
### Class: `LazySet`

### Type Parameters

#### T

`T`

### Constructors

#### `new LazySet([iterable])`

---
### LazySet

###### T

`T`

* `iterable` {Iterable<T>}

* ###Returns: {LazySet<T>}

### Properties

* `size` {number}

### Methods

#### `[iterator]()`

---
### [iterator]

* ###Returns: {SetIterator<T>}

#### `add(item)`

---
### add

* `item` {T}

* ###Returns: {LazySet<T>}

#### `addAll(iterable)`

---
### addAll

* `iterable` {LazySet<T>|Iterable<T, any, any>}

* ###Returns: {LazySet<T>}

#### `clear()`

---
### clear

* ###Returns: {void}

#### `delete(value)`

---
### delete

* `value` {T}

* ###Returns: {boolean}

#### `entries()`

---
### entries

* ###Returns: {SetIterator<Tuple<T, T>>}

#### `forEach(callbackFn, thisArg)`

---
### forEach

###### K

`K`

* `callbackFn` {object}
* `thisArg` {K}

* ###Returns: {void}

#### `has(item)`

---
### has

* `item` {T}

* ###Returns: {boolean}

#### `keys()`

---
### keys

* ###Returns: {SetIterator<T>}

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `values()`

---
### values

* ###Returns: {SetIterator<T>}

#### Static method: `deserialize(__namedParameters)`

---
### deserialize

###### T

`T`

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {LazySet<T>}

***

## 
### `cleverMerge`

> `const` **cleverMerge**: {object}

---
### __type

#### T

`T`

#### O

`O`

* `first` {null|T}
* `second` {null|O}

* ###Returns: {T|O|T|O}

***

## 
### `createHash`

> `const` **createHash**: {object}

---
### __type

* `algorithm` {HashFunction}

* ###Returns: {Hash}

***

## `compileBooleanMatcher(map)`

---
### compileBooleanMatcher

* `map` {Record<string|number, boolean>}

* ###Returns: {boolean|object}
