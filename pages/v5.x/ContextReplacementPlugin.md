# ContextReplacementPlugin

<!-- type=misc -->

## Class: `ContextReplacementPlugin`

### Constructors

#### `new ContextReplacementPlugin(resourceRegExp[, newContentResource][, newContentRecursive][, newContentRegExp])`

##### Parameters

* `resourceRegExp` {RegExp}
* `newContentResource` {string|boolean|RegExp|Function}
* `newContentRecursive` {boolean|RegExp|NewContentCreateContextMap}
* `newContentRegExp` {RegExp}

* Returns: {ContextReplacementPlugin}

### Properties

#### `newContentCallback`

* Type: {Function} Optional.

##### Parameters

* `context` {BeforeContextResolveData|AfterContextResolveData}

* Returns: {void}

***

#### `newContentCreateContextMap`

* Type: {Function} Optional.

##### Parameters

* `fs` {InputFileSystem}
* `callback` {Function}
  * `err` {Error}
  * `newContentRecursive` {NewContentCreateContextMap}
  * Returns: {void}

* Returns: {void}

***

#### `newContentRecursive`

* Type: {boolean} Optional.

***

#### `newContentRegExp`

* Type: {RegExp} Optional.

***

#### `newContentResource`

* Type: {string} Optional.

***

#### `resourceRegExp`

* Type: {RegExp}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
