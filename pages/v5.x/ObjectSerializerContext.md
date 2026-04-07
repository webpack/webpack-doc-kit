# ObjectSerializerContext

<!-- type=misc -->

## `ObjectSerializerContext`

### Properties

#### `rollback`

* Type: {Function}

##### Parameters

* `snapshot` {ObjectSerializerSnapshot}

* Returns: {void}

***

#### `setCircularReference`

* Type: {Function}

##### Parameters

* `value` {ReferenceableItem}

* Returns: {void}

***

#### `snapshot`

* Type: {Function}

* Returns: {ObjectSerializerSnapshot}

***

#### `write`

* Type: {Function}

##### Parameters

* `value` {any}

* Returns: {void}

***

#### `writeLazy`

* Type: {Function} Optional.

##### Parameters

* `item` {any}

* Returns: {void}

***

#### `writeSeparate`

* Type: {Function} Optional.

##### Parameters

* `item` {any}
* `obj` {LazyOptions}

* Returns: {LazyFunction<any, any, any, LazyOptions>}
