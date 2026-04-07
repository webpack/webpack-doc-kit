# NullDependency

<!-- type=misc -->

## Class: `NullDependency`

* Extends: {Dependency}

### Constructors

#### `new NullDependency()`

* Returns: {NullDependency}

### Properties

#### `category`

* Type: {string}

##### Inherited from

[`Dependency`](../Dependency.md).[`category`](../Dependency.md#category)

***

#### `disconnect`

* Type: {any}

##### Inherited from

[`Dependency`](../Dependency.md).[`disconnect`](../Dependency.md#disconnect)

***

#### `loc`

* Type: {DependencyLocation}

##### Inherited from

[`Dependency`](../Dependency.md).[`loc`](../Dependency.md#loc)

***

#### `module`

* Type: {any}

##### Inherited from

[`Dependency`](../Dependency.md).[`module`](../Dependency.md#module)

***

#### `optional`

* Type: {boolean} Optional.

##### Inherited from

[`Dependency`](../Dependency.md).[`optional`](../Dependency.md#optional)

***

#### `type`

* Type: {string}

##### Inherited from

[`Dependency`](../Dependency.md).[`type`](../Dependency.md#type)

***

#### `weak`

* Type: {boolean}

##### Inherited from

[`Dependency`](../Dependency.md).[`weak`](../Dependency.md#weak)

***

#### `EXPORTS_OBJECT_REFERENCED`

* Type: {string[][]}

##### Overrides

[`Dependency`](../Dependency.md).[`EXPORTS_OBJECT_REFERENCED`](../Dependency.md#exports-object-referenced)

***

#### `NO_EXPORTS_REFERENCED`

* Type: {string[][]}

##### Overrides

[`Dependency`](../Dependency.md).[`NO_EXPORTS_REFERENCED`](../Dependency.md#no-exports-referenced)

***

#### `Template`

* Type: {NullDependencyTemplate}

***

#### `TRANSITIVE`

* Type: {TRANSITIVE}

##### Overrides

[`Dependency`](../Dependency.md).[`TRANSITIVE`](../Dependency.md#transitive)

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
