# serialization

## 
### `buffersSerializer`

> `const` **buffersSerializer**: {Serializer<any, any, any>}

***

## 
### `createFileSerializer`

> **createFileSerializer**: {object}

---
### __type

#### D

`D`

#### S

`S`

#### C

`C`

* `fs` {IntermediateFileSystem}
* `hashFunction` {HashFunction}

* ###Returns: {Serializer<D, S, C>}

***

## 
### `MEASURE_END_OPERATION`

> `const` **MEASURE\_END\_OPERATION**: {symbol}

***

## 
### `MEASURE_START_OPERATION`

> `const` **MEASURE\_START\_OPERATION**: {symbol}

***

## 
### `NOT_SERIALIZABLE`

> `const` **NOT\_SERIALIZABLE**: {object}

***

## 
### `register`

> `const` **register**: {object}

---
### __type

* `Constructor` {Constructor}
* `request` {string}
* `name` {null|string}
* `serializer` {ObjectSerializer}

* ###Returns: {void}

***

## 
### `registerLoader`

> `const` **registerLoader**: {object}

---
### __type

* `regExp` {RegExp}
* `loader` {object}

* ###Returns: {void}

***

## 
### `registerNotSerializable`

> `const` **registerNotSerializable**: {object}

---
### __type

* `Constructor` {Constructor}

* ###Returns: {void}
