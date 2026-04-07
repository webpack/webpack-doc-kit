# compileBooleanMatcher

<!-- type=misc -->

## `compileBooleanMatcher`

* Type: {Function}

### Parameters

* `map` {Record<string|number, boolean>} value map

* Returns: {boolean|Function} true/false, when unconditionally true/false, or a template function to determine the value at runtime

* `fromLists` {Function}
  * `positiveItems` {string[]} positive items
  * `negativeItems` {string[]} negative items
  * Returns: {Function} a template function to determine the value at runtime
    * `value` {string}
    * Returns: {string}
* `itemsToRegexp` {Function}
  * `itemsArr` {string[]} array of items
  * Returns: {string} regexp
