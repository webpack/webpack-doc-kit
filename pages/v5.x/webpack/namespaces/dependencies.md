# dependencies

## Class: `ConstDependency`

### Extends

- {NullDependency}

### Constructors

#### `new ConstDependency(expression, range[, runtimeRequirements])`

* `expression` {string}
* `range` {number|number|number}
* `runtimeRequirements` {string[]}
* Returns: {ConstDependency}

Creates an instance of ConstDependency.

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {any}
* `expression` {string}
* `loc` {DependencyLocation} Returns location.
* `module` {any}
* `optional` {boolean}
* `range` {number|Tuple<number, number>}
* `runtimeRequirements` {Set<string>}
* `type` {string} Returns a display name for the type of dependency.
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {ConstDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `HarmonyImportDependency`

### Extends

- {ModuleDependency}

### Constructors

#### `new HarmonyImportDependency(request, sourceOrder[, phase][, attributes])`

* `request` {string}
* `sourceOrder` {number}
* `phase` {0|1|2}
* `attributes` {ImportAttributes}
* Returns: {HarmonyImportDependency}

Creates an instance of HarmonyImportDependency.

### Properties

* `attributes` {ImportAttributes}
* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {any}
* `loc` {DependencyLocation} Returns location.
* `module` {any}
* `optional` {boolean}
* `phase` {ImportPhaseType}
* `range` {number|number}
* `request` {string}
* `sourceOrder` {number}
* `type` {string} Returns a display name for the type of dependency.
* `userRequest` {string}
* `weak` {boolean}
* `ExportPresenceModes` {object}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `getNonOptionalPart` {object}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {HarmonyImportDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getImportStatement(update, __namedParameters)`

* `update` {boolean}
* `__namedParameters` {DependencyTemplateContext}
* Returns: {string|string}

Gets import statement.

Gets import statement.

Gets import statement.

Gets import statement.

Gets import statement.

#### `getImportVar(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {string}

Returns name of the variable for the import.

#### `getLinkingErrors(moduleGraph, ids, additionalMessage)`

* `moduleGraph` {ModuleGraph}
* `ids` {string[]}
* `additionalMessage` {string}
* Returns: {WebpackError[]}

Gets linking errors.

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getModuleExports(__namedParameters)`

* `__namedParameters` {DependencyTemplateContext}
* Returns: {string}

Gets module exports.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `ModuleDependency`

### Extends

- {Dependency}

### Extended by

- {HarmonyImportDependency}

### Constructors

#### `new ModuleDependency(request[, sourceOrder])`

* `request` {string}
* `sourceOrder` {number}
* Returns: {ModuleDependency}

Creates an instance of ModuleDependency.

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {any}
* `loc` {DependencyLocation} Returns location.
* `module` {any}
* `optional` {boolean}
* `range` {number|number}
* `request` {string}
* `sourceOrder` {number}
* `type` {string} Returns a display name for the type of dependency.
* `userRequest` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {DependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.

***

## Class: `NullDependency`

### Extends

- {Dependency}

### Extended by

- {ConstDependency}

### Constructors

#### `new NullDependency()`

* Returns: {NullDependency}

### Properties

* `category` {string} Returns a dependency category, typical categories are "commonjs", "amd", "esm".
* `disconnect` {any}
* `loc` {DependencyLocation} Returns location.
* `module` {any}
* `optional` {boolean}
* `type` {string} Returns a display name for the type of dependency.
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {NullDependencyTemplate}
* `TRANSITIVE` {symbol}

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

Could affect referencing module.

#### `createIgnoredModule(context)`

* `context` {string}
* Returns: {Module}

Creates an ignored module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `getCondition(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {false|object}

Returns function to determine if the connection is active.

#### `getContext()`

* Returns: {string}

Returns a request context.

#### `getErrors(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns errors.

#### `getExports(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets module evaluation side effects state.

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}
* Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

* Returns: {string}

Returns an identifier to merge equal requests.

#### `getWarnings(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {WebpackError[]}

Returns warnings.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `setLoc(startLine, startColumn, endLine, endColumn)`

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}
* Returns: {void}

Updates loc using the provided start line.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `isLowPriorityDependency(dependency)`

* `dependency` {Dependency}
* Returns: {boolean}

Returns true if the dependency is a low priority dependency.
