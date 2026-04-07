# SideEffectsFlagPlugin

<!-- type=misc -->

## Class: `SideEffectsFlagPlugin`

### Constructors

#### `new SideEffectsFlagPlugin([analyseSource])`

##### Parameters

* `analyseSource` {boolean}

* Returns: {SideEffectsFlagPlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### Static method: `moduleHasSideEffects(moduleName, flagValue, cache)`

##### Parameters

* `moduleName` {string}
* `flagValue` {SideEffectsFlagValue}
* `cache` {Map<string, RegExp>}

* Returns: {boolean}
