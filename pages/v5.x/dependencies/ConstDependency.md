# ConstDependency

<!-- type=misc -->

## Class: `ConstDependency`

* Extends: {NullDependency}

### Constructors

#### `new ConstDependency(expression, range[, runtimeRequirements])`

##### Parameters

* `expression` {string}
* `range` {number|[number, number]}
* `runtimeRequirements` {string[]}

* Returns: {ConstDependency}

### Properties

#### `category`

* Type: {string}

##### Inherited from

[`NullDependency`](NullDependency.md).[`category`](NullDependency.md#category)

***

#### `disconnect`

* Type: {any}

##### Inherited from

[`NullDependency`](NullDependency.md).[`disconnect`](NullDependency.md#disconnect)

***

#### `expression`

* Type: {string}

***

#### `loc`

* Type: {DependencyLocation}

##### Inherited from

[`NullDependency`](NullDependency.md).[`loc`](NullDependency.md#loc)

***

#### `module`

* Type: {any}

##### Inherited from

[`NullDependency`](NullDependency.md).[`module`](NullDependency.md#module)

***

#### `optional`

* Type: {boolean} Optional.

##### Inherited from

[`NullDependency`](NullDependency.md).[`optional`](NullDependency.md#optional)

***

#### `range`

* Type: {number|[number, number]}

***

#### `runtimeRequirements`

* Type: {Set<string>}

***

#### `type`

* Type: {string}

##### Inherited from

[`NullDependency`](NullDependency.md).[`type`](NullDependency.md#type)

***

#### `weak`

* Type: {boolean}

##### Inherited from

[`NullDependency`](NullDependency.md).[`weak`](NullDependency.md#weak)

***

#### `EXPORTS_OBJECT_REFERENCED`

* Type: {string[][]}

##### Overrides

[`NullDependency`](NullDependency.md).[`EXPORTS_OBJECT_REFERENCED`](NullDependency.md#exports-object-referenced)

***

#### `NO_EXPORTS_REFERENCED`

* Type: {string[][]}

##### Overrides

[`NullDependency`](NullDependency.md).[`NO_EXPORTS_REFERENCED`](NullDependency.md#no-exports-referenced)

***

#### `Template`

* Type: {ConstDependencyTemplate}

##### Overrides

[`NullDependency`](NullDependency.md).[`Template`](NullDependency.md#template)

***

#### `TRANSITIVE`

* Type: {TRANSITIVE}

##### Overrides

[`NullDependency`](NullDependency.md).[`TRANSITIVE`](NullDependency.md#transitive)

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|TRANSITIVE}

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
