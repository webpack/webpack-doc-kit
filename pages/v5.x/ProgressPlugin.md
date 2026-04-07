# ProgressPlugin

<!-- type=misc -->

## Class: `ProgressPlugin`

### Constructors

#### `new ProgressPlugin([options])`

##### Parameters

* `options` {ProgressPluginArgument}

* Returns: {ProgressPlugin}

### Properties

#### `dependenciesCount`

* Type: {number}

***

#### `handler`

* Type: {Function} Optional.

##### Parameters

* `percentage` {number}
* `msg` {string}
* `...args` {string[]}

* Returns: {void}

***

#### `modulesCount`

* Type: {number}

***

#### `options`

* Type: {ProgressPluginOptions}

***

#### `percentBy`

* Type: {"entries"|"modules"|"dependencies"}

***

#### `profile`

* Type: {boolean}

***

#### `showActiveModules`

* Type: {boolean}

***

#### `showDependencies`

* Type: {boolean}

***

#### `showEntries`

* Type: {boolean}

***

#### `showModules`

* Type: {boolean}

***

#### `createDefaultHandler`

* Type: {Function}

##### Parameters

* `profile` {boolean}
* `logger` {WebpackLogger}

* Returns: {Function}
  * `percentage` {number}
  * `msg` {string}
  * `...args` {string[]}
  * Returns: {void}

***

#### `defaultOptions`

* Type: {Required<Omit<ProgressPluginOptions, "handler">>}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler|MultiCompiler}

* Returns: {void}

***

#### Static method: `getReporter(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {Function}
  * `p` {number}
  * `...args` {string[]}
  * Returns: {void}

## `ProgressPluginOptions`

Options object for the ProgressPlugin.

### Properties

#### `activeModules`

* Type: {boolean} Optional.

Show active modules count and one active module in progress message.

#### `dependencies`

* Type: {boolean} Optional.

Show dependencies count in progress message.

#### `dependenciesCount`

* Type: {number} Optional.

Minimum dependencies count to start with. For better progress calculation. Default: 10000.

#### `entries`

* Type: {boolean} Optional.

Show entries count in progress message.

#### `handler`

* Type: {HandlerFn} Optional.

Function that executes for every progress step.

#### `modules`

* Type: {boolean} Optional.

Show modules count in progress message.

#### `modulesCount`

* Type: {number} Optional.

Minimum modules count to start with. For better progress calculation. Default: 5000.

#### `percentBy`

* Type: {"entries"|"modules"|"dependencies"} Optional.

Collect percent algorithm. By default it calculates by a median from modules, entries and dependencies percent.

#### `profile`

* Type: {boolean} Optional.

Collect profile data for progress steps. Default: false.

## `ProgressPluginArgument`

* Type: {ProgressPluginOptions|HandlerFunction}
