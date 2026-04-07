# HarmonyImportDependency

<!-- type=misc -->

## Class: `HarmonyImportDependency`

* Extends: {ModuleDependency}

### Constructors

#### `new HarmonyImportDependency(request, sourceOrder[, phase][, attributes])`

##### Parameters

* `request` {string}
* `sourceOrder` {number}
* `phase` {0|1|2}
* `attributes` {ImportAttributes}

* Returns: {HarmonyImportDependency}

### Properties

#### `attributes`

* Type: {ImportAttributes} Optional.

***

#### `category`

* Type: {string}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`category`](ModuleDependency.md#category)

***

#### `disconnect`

* Type: {any}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`disconnect`](ModuleDependency.md#disconnect)

***

#### `loc`

* Type: {DependencyLocation}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`loc`](ModuleDependency.md#loc)

***

#### `module`

* Type: {any}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`module`](ModuleDependency.md#module)

***

#### `optional`

* Type: {boolean} Optional.

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`optional`](ModuleDependency.md#optional)

***

#### `phase`

* Type: {ImportPhaseType}

***

#### `range`

* Type: {[number, number]} Optional.

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`range`](ModuleDependency.md#range)

***

#### `request`

* Type: {string}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`request`](ModuleDependency.md#request)

***

#### `sourceOrder`

* Type: {number} Optional.

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`sourceOrder`](ModuleDependency.md#sourceorder)

***

#### `type`

* Type: {string}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`type`](ModuleDependency.md#type)

***

#### `userRequest`

* Type: {string}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`userRequest`](ModuleDependency.md#userrequest)

***

#### `weak`

* Type: {boolean}

##### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`weak`](ModuleDependency.md#weak)

***

#### `ExportPresenceModes`

* Type: {object}

* `AUTO` {ExportPresenceMode}
* `ERROR` {ExportPresenceMode}
* `NONE` {ExportPresenceMode}
* `WARN` {ExportPresenceMode}
* `fromUserOption`
* `resolveFromOptions`

***

#### `EXPORTS_OBJECT_REFERENCED`

* Type: {string[][]}

##### Overrides

[`ModuleDependency`](ModuleDependency.md).[`EXPORTS_OBJECT_REFERENCED`](ModuleDependency.md#exports-object-referenced)

***

#### `getNonOptionalPart`

* Type: {Function}

##### Parameters

* `members` {string[]}
* `membersOptionals` {boolean[]}

* Returns: {string[]}

***

#### `NO_EXPORTS_REFERENCED`

* Type: {string[][]}

##### Overrides

[`ModuleDependency`](ModuleDependency.md).[`NO_EXPORTS_REFERENCED`](ModuleDependency.md#no-exports-referenced)

***

#### `Template`

* Type: {HarmonyImportDependencyTemplate}

##### Overrides

[`ModuleDependency`](ModuleDependency.md).[`Template`](ModuleDependency.md#template)

***

#### `TRANSITIVE`

* Type: {TRANSITIVE}

##### Overrides

`ModuleDependency.TRANSITIVE`

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

#### `getImportStatement(update, __namedParameters)`

##### Parameters

* `update` {boolean}
* `__namedParameters` {DependencyTemplateContext}

* Returns: {[string, string]}

***

#### `getImportVar(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {string}

***

#### `getLinkingErrors(moduleGraph, ids, additionalMessage)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `ids` {string[]}
* `additionalMessage` {string}

* Returns: {WebpackError[]}

***

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ConnectionState}

***

#### `getModuleExports(__namedParameters)`

##### Parameters

* `__namedParameters` {DependencyTemplateContext}

* Returns: {string}

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
