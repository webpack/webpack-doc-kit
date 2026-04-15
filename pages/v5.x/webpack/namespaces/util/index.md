# util

## Namespaces

- [comparators](namespaces/comparators.md)
- [compileBooleanMatcher](namespaces/compileBooleanMatcher.md)
- [runtime](namespaces/runtime.md)
- [serialization](namespaces/serialization.md)

## Class: `LazySet`

### Type Parameters

#### T

`T`

### Constructors

#### `new LazySet([iterable])`

###### T

`T`
* `iterable` {Iterable}
* Returns: {LazySet}

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

Seeds the set with an optional iterable while preparing internal queues for
deferred merges.

### Properties

* `size` {number} Returns the number of items after applying any deferred merges.

### Methods

#### `[iterator]()`

* Returns: {SetIterator}

Returns the default iterator over values after forcing pending merges.

Returns the default iterator over values after forcing pending merges.

Returns the default iterator over values after forcing pending merges.

Returns the default iterator over values after forcing pending merges.

Returns the default iterator over values after forcing pending merges.

Returns the default iterator over values after forcing pending merges.

#### `add(item)`

* `item` {T}
* Returns: {LazySet}

Adds a single item immediately to the concrete backing set.

Adds a single item immediately to the concrete backing set.

Adds a single item immediately to the concrete backing set.

Adds a single item immediately to the concrete backing set.

Adds a single item immediately to the concrete backing set.

Adds a single item immediately to the concrete backing set.

#### `addAll(iterable)`

* `iterable` {LazySet|Iterable}
* Returns: {LazySet}

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

Queues another iterable or lazy set for later merging so large bulk adds
can stay cheap until the set is read.

#### `clear()`

* Returns: {void}

Removes all items and clears every deferred merge queue.

#### `delete(value)`

* `value` {T}
* Returns: {boolean}

Deletes an item after first materializing any deferred additions that may
contain it.

#### `entries()`

* Returns: {SetIterator}

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

Returns the set's entry iterator and permanently switches future
operations to eager merge mode to preserve iterator correctness.

#### `forEach(callbackFn, thisArg)`

###### K

`K`
* `callbackFn` {object}
* `thisArg` {K}
* Returns: {void}

Iterates over every item after forcing pending merges and switching to
eager mode for correctness during iteration.

#### `has(item)`

* `item` {T}
* Returns: {boolean}

Checks whether an item is present after applying any deferred merges.

#### `keys()`

* Returns: {SetIterator}

Returns the key iterator, eagerly materializing pending merges first.

Returns the key iterator, eagerly materializing pending merges first.

Returns the key iterator, eagerly materializing pending merges first.

Returns the key iterator, eagerly materializing pending merges first.

Returns the key iterator, eagerly materializing pending merges first.

Returns the key iterator, eagerly materializing pending merges first.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes the fully materialized set contents into webpack's object
serialization stream.

#### `values()`

* Returns: {SetIterator}

Returns the value iterator, eagerly materializing pending merges first.

Returns the value iterator, eagerly materializing pending merges first.

Returns the value iterator, eagerly materializing pending merges first.

Returns the value iterator, eagerly materializing pending merges first.

Returns the value iterator, eagerly materializing pending merges first.

Returns the value iterator, eagerly materializing pending merges first.

#### Static method: `deserialize(__namedParameters)`

###### T

`T`
* `__namedParameters` {ObjectDeserializerContext}
* Returns: {LazySet}

Restores a `LazySet` from serialized item data.

Restores a `LazySet` from serialized item data.

Restores a `LazySet` from serialized item data.

Restores a `LazySet` from serialized item data.

Restores a `LazySet` from serialized item data.

Restores a `LazySet` from serialized item data.

***

## `cleverMerge`

> `const` **cleverMerge**: {object}

#### T

`T`

#### O

`O`
* `first` {null|T}
* `second` {null|O}
* Returns: {T|O|T|O}

***

## `createHash`

> `const` **createHash**: {object}

* `algorithm` {HashFunction}
* Returns: {Hash}

***

## `compileBooleanMatcher(map)`

* `map` {Record}
* Returns: {boolean|object}
