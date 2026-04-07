# CodeGenerationResults

<!-- type=misc -->

## Class: `CodeGenerationResults`

### Constructors

#### `new CodeGenerationResults()`

* Returns: {CodeGenerationResults}

### Properties

#### `map`

* Type: {Map<Module, RuntimeSpecMap<CodeGenerationResult, CodeGenerationResult>>}

### Methods

#### `add(module, runtime, result)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `result` {CodeGenerationResult}

* Returns: {void}

***

#### `get(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {CodeGenerationResult}

***

#### `getData(module, runtime, key)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `key` {string}

* Returns: {any}

***

#### `getHash(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {string}

***

#### `getRuntimeRequirements(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {ReadonlySet<string>}

***

#### `getSource(module, runtime, sourceType)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}
* `sourceType` {string}

* Returns: {Source}

***

#### `has(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {boolean}
