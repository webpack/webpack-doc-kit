# DefinePlugin

<!-- type=misc -->

## Class: `DefinePlugin`

### Constructors

#### `new DefinePlugin(definitions)`

##### Parameters

* `definitions` {Definitions}

* Returns: {DefinePlugin}

Create a new define plugin

### Properties

#### `definitions`

* Type: {Definitions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### Static method: `getCompilationHooks(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {DefinePluginHooks}

***

#### Static method: `runtimeValue(fn[, options])`

##### Parameters

* `fn` {Function}
  * `value` {object}
    * `key` {string}
    * `module` {NormalModule}
    * `version` {ValueCacheVersion}
  * Returns: {CodeValuePrimitive}
* `options` {true|string[]|RuntimeValueOptions}

* Returns: {RuntimeValue}
