# util

<!-- type=misc -->

## `util`

* Type: {object}

* `cleverMerge` {Function}
  * `first` {T} first object
  * `second` {O} second object
  * Returns: {T|O|T & O} merged object of first and second object
* `comparators` {comparators}
* `compileBooleanMatcher` {Function}
  * `fromLists` {Function}
    * `positiveItems` {string[]} positive items
    * `negativeItems` {string[]} negative items
    * Returns: {Function} a template function to determine the value at runtime
      * `value` {string}
      * Returns: {string}
  * `itemsToRegexp` {Function}
    * `itemsArr` {string[]} array of items
    * Returns: {string} regexp
* `createHash` {Function}
* `LazySet` {LazySet}
* `runtime` {runtime}
* `serialization` {object}
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
