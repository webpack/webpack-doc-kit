# MultiCompiler

<!-- type=misc -->

## Class: `MultiCompiler`

### Constructors

#### `new MultiCompiler(compilers, options)`

##### Parameters

* `compilers` {Compiler[]|Record<string, Compiler>}
* `options` {MultiCompilerOptions}

* Returns: {MultiCompiler}

### Properties

#### `compilers`

* Type: {Compiler[]}

***

#### `dependencies`

* Type: {WeakMap<Compiler, string[]>}

***

#### `hooks`

* Type: {Readonly<object>}

***

#### `inputFileSystem`

* Type: {InputFileSystem}

***

#### `intermediateFileSystem`

* Type: {IntermediateFileSystem}

***

#### `options`

* Type: {WebpackOptionsNormalized[] & MultiCompilerOptions}

***

#### `outputFileSystem`

* Type: {OutputFileSystem}

***

#### `outputPath`

* Type: {string}

***

#### `running`

* Type: {boolean}

***

#### `watchFileSystem`

* Type: {WatchFileSystem}

### Methods

#### `close(callback)`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `getInfrastructureLogger(name)`

##### Parameters

* `name` {string|Function}

* Returns: {WebpackLogger}

***

#### `purgeInputFileSystem()`

* Returns: {void}

***

#### `run(callback)`

##### Parameters

* `callback` {CallbackWebpackFunction_2<MultiStats, void>}

* Returns: {void}

***

#### `runWithDependencies(compilers, fn, callback)`

> Stability: 0 - Deprecated

##### Parameters

* `compilers` {Compiler[]}
* `fn` {Function}
  * `compiler` {Compiler}
  * `callback` {CallbackWebpackFunction_2<MultiStats, void>}
  * Returns: {void}
* `callback` {CallbackWebpackFunction_2<Stats[], void>}

* Returns: {void}

This method should have been private

***

#### `setDependencies(compiler, dependencies)`

##### Parameters

* `compiler` {Compiler}
* `dependencies` {string[]}

* Returns: {void}

***

#### `validateDependencies(callback)`

##### Parameters

* `callback` {CallbackWebpackFunction_2<MultiStats, void>}

* Returns: {boolean}

***

#### `watch(watchOptions, handler)`

##### Parameters

* `watchOptions` {WatchOptions|WatchOptions[]}
* `handler` {CallbackWebpackFunction_2<MultiStats, void>}

* Returns: {MultiWatching}

## `MultiCompilerOptions`

### Properties

#### `parallelism`

* Type: {number} Optional.

how many Compilers are allows to run at the same time in parallel
