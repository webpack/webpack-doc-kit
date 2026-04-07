# serialization

<!-- type=misc -->

## `serialization`

* Type: {object}

* `MEASURE_END_OPERATION` {MEASURE_END_OPERATION} 
* `MEASURE_START_OPERATION` {MEASURE_START_OPERATION} 
* `buffersSerializer` {Serializer<EXPECTED_ANY, EXPECTED_ANY, EXPECTED_ANY>}
* `createFileSerializer` {Function} 
  * `fs` {IntermediateFileSystem} filesystem
  * `hashFunction` {HashFunction} hash function to use
  * Returns: {Serializer<D, S, C>} file serializer
* `MEASURE_END_OPERATION` {MEASURE_END_OPERATION} 
* `MEASURE_START_OPERATION` {MEASURE_START_OPERATION} 
* `NOT_SERIALIZABLE` {object}
* `register` {Function}
  * `Constructor` {Constructor} the constructor
  * `request` {string} the request which will be required when deserializing
  * `name` {string} the name to make multiple serializer unique when sharing a request
  * `serializer` {ObjectSerializer} the serializer
  * Returns: {void} 
* `registerLoader` {Function}
  * `regExp` {RegExp} RegExp for which the request is tested
  * `loader` {Function} loader to load the request, returns true when successful
    * `request` {string}
    * Returns: {boolean}
  * Returns: {void} 
* `registerNotSerializable` {Function}
  * `Constructor` {Constructor} the constructor
  * Returns: {void}
