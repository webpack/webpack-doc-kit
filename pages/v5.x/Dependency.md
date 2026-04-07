# Dependency

<!-- type=misc -->

## Class: `Dependency`

### Constructors

#### `new Dependency()`

* Returns: {Dependency}

### Properties

#### `category`

* Type: {string}

***

#### `disconnect`

* Type: {any}

***

#### `loc`

* Type: {DependencyLocation}

***

#### `module`

* Type: {any}

***

#### `optional`

* Type: {boolean} Optional.

***

#### `type`

* Type: {string}

***

#### `weak`

* Type: {boolean}

***

#### `EXPORTS_OBJECT_REFERENCED`

* Type: {string[][]}

***

#### `NO_EXPORTS_REFERENCED`

* Type: {string[][]}

***

#### `TRANSITIVE`

* Type: {symbol}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

***

#### `createIgnoredModule(context)`

##### Parameters

* `context` {string}

* Returns: {Module}

***

#### `deserialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectDeserializerContext}

* Returns: {void}

***

#### `getCondition(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {false|Function}

***

#### `getContext()`

* Returns: {string}

***

#### `getErrors(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {WebpackError[]}

Returns errors

***

#### `getExports(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ExportsSpec}

Returns the exported names

***

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ConnectionState}

***

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

***

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {never}

Returns the referenced module and export

***

#### `getReferencedExports(moduleGraph, runtime)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

***

#### `getResourceIdentifier()`

* Returns: {string}

***

#### `getWarnings(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {WebpackError[]}

Returns warnings

***

#### `serialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectSerializerContext}

* Returns: {void}

***

#### `setLoc(startLine, startColumn, endLine, endColumn)`

##### Parameters

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* Returns: {void}

***

#### `updateHash(hash, context)`

##### Parameters

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* Returns: {void}

Update the hash

***

#### Static method: `isLowPriorityDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {boolean}
