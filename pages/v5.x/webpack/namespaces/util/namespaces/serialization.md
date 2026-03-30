# serialization

## `buffersSerializer`

> `const` **buffersSerializer**: {Serializer<any, any, any>}

***

## `createFileSerializer`

> **createFileSerializer**: {(fs: IntermediateFileSystem, hashFunction: HashFunction) => Serializer<D, S, C>}

* `D`
* `S`
* `C`
* `fs` {IntermediateFileSystem}
* `hashFunction` {HashFunction}
* Returns: {Serializer<D, S, C>}

***

## `MEASURE_END_OPERATION`

> `const` **MEASURE\_END\_OPERATION**: {symbol}

***

## `MEASURE_START_OPERATION`

> `const` **MEASURE\_START\_OPERATION**: {symbol}

***

## `NOT_SERIALIZABLE`

> `const` **NOT\_SERIALIZABLE**: {object}

***

## `register`

> `const` **register**: {(Constructor: Constructor, request: string, name: null|string, serializer: ObjectSerializer) => void}

* `Constructor` {Constructor}
* `request` {string}
* `name` {null|string}
* `serializer` {ObjectSerializer}
* Returns: {void}

***

## `registerLoader`

> `const` **registerLoader**: {(regExp: RegExp, loader: (request: string) => boolean) => void}

* `regExp` {RegExp}
* `loader` {(request: string) => boolean}
* Returns: {void}

***

## `registerNotSerializable`

> `const` **registerNotSerializable**: {(Constructor: Constructor) => void}

* `Constructor` {Constructor}
* Returns: {void}
