# dependencies

## 
### Class: `ConstDependency`

### Extends

- {NullDependency}

### Constructors

#### `new ConstDependency(expression, range[, runtimeRequirements])`

---
### ConstDependency

* `expression` {string}
* `range` {number|Tuple<number, number>}
* `runtimeRequirements` {string[]}

* ###Returns: {ConstDependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `expression` {string}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `range` {number|Tuple<number, number>}
* `runtimeRequirements` {Set<string>}
* `type` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {ConstDependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

---
### couldAffectReferencingModule

* ###Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

---
### createIgnoredModule

* `context` {string}

* ###Returns: {Module}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getCondition(moduleGraph)`

---
### getCondition

* `moduleGraph` {ModuleGraph}

* ###Returns: {false|object}

#### `getContext()`

---
### getContext

* ###Returns: {string}

#### `getErrors(moduleGraph)`

---
### getErrors

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

---
### getExports

* `moduleGraph` {ModuleGraph}

* ###Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

---
### getModuleEvaluationSideEffectsState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

---
### getNumberOfIdOccurrences

* ###Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

---
### getReference

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}

* ###Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

---
### getReferencedExports

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

---
### getResourceIdentifier

* ###Returns: {string}

#### `getWarnings(moduleGraph)`

---
### getWarnings

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

---
### setLoc

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* ###Returns: {void}

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

---
### isLowPriorityDependency

* `dependency` {Dependency}

* ###Returns: {boolean}

***

## 
### Class: `HarmonyImportDependency`

### Extends

- {ModuleDependency}

### Constructors

#### `new HarmonyImportDependency(request, sourceOrder[, phase][, attributes])`

---
### HarmonyImportDependency

* `request` {string}
* `sourceOrder` {number}
* `phase` {0|1|2}
* `attributes` {ImportAttributes}

* ###Returns: {HarmonyImportDependency}

### Properties

* `attributes` {ImportAttributes}
* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `phase` {ImportPhaseType}
* `range` {Tuple<number, number>}
* `request` {string}
* `sourceOrder` {number}
* `type` {string}
* `userRequest` {string}
* `weak` {boolean}
* `ExportPresenceModes` {object}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `getNonOptionalPart` {object}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {HarmonyImportDependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

---
### couldAffectReferencingModule

* ###Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

---
### createIgnoredModule

* `context` {string}

* ###Returns: {Module}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getCondition(moduleGraph)`

---
### getCondition

* `moduleGraph` {ModuleGraph}

* ###Returns: {false|object}

#### `getContext()`

---
### getContext

* ###Returns: {string}

#### `getErrors(moduleGraph)`

---
### getErrors

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

---
### getExports

* `moduleGraph` {ModuleGraph}

* ###Returns: {ExportsSpec}

Returns the exported names

#### `getImportStatement(update, __namedParameters)`

---
### getImportStatement

* `update` {boolean}
* `__namedParameters` {DependencyTemplateContext}

* ###Returns: {Tuple<string, string>}

#### `getImportVar(moduleGraph)`

---
### getImportVar

* `moduleGraph` {ModuleGraph}

* ###Returns: {string}

#### `getLinkingErrors(moduleGraph, ids, additionalMessage)`

---
### getLinkingErrors

* `moduleGraph` {ModuleGraph}
* `ids` {string[]}
* `additionalMessage` {string}

* ###Returns: {WebpackError[]}

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

---
### getModuleEvaluationSideEffectsState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getModuleExports(__namedParameters)`

---
### getModuleExports

* `__namedParameters` {DependencyTemplateContext}

* ###Returns: {string}

#### `getNumberOfIdOccurrences()`

---
### getNumberOfIdOccurrences

* ###Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

---
### getReference

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}

* ###Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

---
### getReferencedExports

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

---
### getResourceIdentifier

* ###Returns: {string}

#### `getWarnings(moduleGraph)`

---
### getWarnings

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

---
### setLoc

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* ###Returns: {void}

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

---
### isLowPriorityDependency

* `dependency` {Dependency}

* ###Returns: {boolean}

***

## 
### Class: `ModuleDependency`

### Extends

- {Dependency}

### Extended by

- {HarmonyImportDependency}

### Constructors

#### `new ModuleDependency(request[, sourceOrder])`

---
### ModuleDependency

* `request` {string}
* `sourceOrder` {number}

* ###Returns: {ModuleDependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `range` {Tuple<number, number>}
* `request` {string}
* `sourceOrder` {number}
* `type` {string}
* `userRequest` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {DependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

---
### couldAffectReferencingModule

* ###Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

---
### createIgnoredModule

* `context` {string}

* ###Returns: {Module}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getCondition(moduleGraph)`

---
### getCondition

* `moduleGraph` {ModuleGraph}

* ###Returns: {false|object}

#### `getContext()`

---
### getContext

* ###Returns: {string}

#### `getErrors(moduleGraph)`

---
### getErrors

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

---
### getExports

* `moduleGraph` {ModuleGraph}

* ###Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

---
### getModuleEvaluationSideEffectsState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

---
### getNumberOfIdOccurrences

* ###Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

---
### getReference

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}

* ###Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

---
### getReferencedExports

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

---
### getResourceIdentifier

* ###Returns: {string}

#### `getWarnings(moduleGraph)`

---
### getWarnings

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

---
### setLoc

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* ###Returns: {void}

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

---
### isLowPriorityDependency

* `dependency` {Dependency}

* ###Returns: {boolean}

***

## 
### Class: `NullDependency`

### Extends

- {Dependency}

### Extended by

- {ConstDependency}

### Constructors

#### `new NullDependency()`

---
### NullDependency

* ###Returns: {NullDependency}

### Properties

* `category` {string}
* `disconnect` {any}
* `loc` {DependencyLocation}
* `module` {any}
* `optional` {boolean}
* `type` {string}
* `weak` {boolean}
* `EXPORTS_OBJECT_REFERENCED` {string[][]}
* `NO_EXPORTS_REFERENCED` {string[][]}
* `Template` {NullDependencyTemplate}
* `TRANSITIVE` {TRANSITIVE}

### Methods

#### `couldAffectReferencingModule()`

---
### couldAffectReferencingModule

* ###Returns: {boolean|TRANSITIVE}

#### `createIgnoredModule(context)`

---
### createIgnoredModule

* `context` {string}

* ###Returns: {Module}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `getCondition(moduleGraph)`

---
### getCondition

* `moduleGraph` {ModuleGraph}

* ###Returns: {false|object}

#### `getContext()`

---
### getContext

* ###Returns: {string}

#### `getErrors(moduleGraph)`

---
### getErrors

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns errors

#### `getExports(moduleGraph)`

---
### getExports

* `moduleGraph` {ModuleGraph}

* ###Returns: {ExportsSpec}

Returns the exported names

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

---
### getModuleEvaluationSideEffectsState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getNumberOfIdOccurrences()`

---
### getNumberOfIdOccurrences

* ###Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

#### `getReference(moduleGraph)`

---
### getReference

> Stability: 0 - Deprecated

* `moduleGraph` {ModuleGraph}

* ###Returns: {never}

Returns the referenced module and export

#### `getReferencedExports(moduleGraph, runtime)`

---
### getReferencedExports

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

#### `getResourceIdentifier()`

---
### getResourceIdentifier

* ###Returns: {string}

#### `getWarnings(moduleGraph)`

---
### getWarnings

* `moduleGraph` {ModuleGraph}

* ###Returns: {WebpackError[]}

Returns warnings

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `setLoc(startLine, startColumn, endLine, endColumn)`

---
### setLoc

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* ###Returns: {void}

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

Update the hash

#### Static method: `isLowPriorityDependency(dependency)`

---
### isLowPriorityDependency

* `dependency` {Dependency}

* ###Returns: {boolean}
