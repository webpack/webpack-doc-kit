# ConcatenationScope

<!-- type=misc -->

## Class: `ConcatenationScope`

### Constructors

#### `new ConcatenationScope(modulesMap, currentModule, usedNames)`

##### Parameters

* `modulesMap` {ModuleInfo[]|Map<Module, ModuleInfo>}
* `currentModule` {ConcatenatedModuleInfo}
* `usedNames` {Set<string>}

* Returns: {ConcatenationScope}

### Properties

#### `usedNames`

* Type: {Set<string>}

***

#### `DEFAULT_EXPORT`

* Type: {string}

***

#### `NAMESPACE_OBJECT_EXPORT`

* Type: {string}

### Methods

#### `createModuleReference(module, __namedParameters)`

##### Parameters

* `module` {Module}
* `__namedParameters` {Partial<ModuleReferenceOptions>}

* Returns: {string}

***

#### `getRawExport(exportName)`

##### Parameters

* `exportName` {string}

* Returns: {string}

***

#### `isModuleInScope(module)`

##### Parameters

* `module` {Module}

* Returns: {boolean}

***

#### `registerExport(exportName, symbol)`

##### Parameters

* `exportName` {string}
* `symbol` {string}

* Returns: {void}

***

#### `registerNamespaceExport(symbol)`

##### Parameters

* `symbol` {string}

* Returns: {void}

***

#### `registerRawExport(exportName, expression)`

##### Parameters

* `exportName` {string}
* `expression` {string}

* Returns: {void}

***

#### `setRawExportMap(exportName, expression)`

##### Parameters

* `exportName` {string}
* `expression` {string}

* Returns: {void}

***

#### Static method: `isModuleReference(name)`

##### Parameters

* `name` {string}

* Returns: {boolean}

***

#### Static method: `matchModuleReference(name)`

##### Parameters

* `name` {string}

* Returns: {ModuleReferenceOptions & object}
