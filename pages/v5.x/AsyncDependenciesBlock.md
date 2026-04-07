# AsyncDependenciesBlock

<!-- type=misc -->

## Class: `AsyncDependenciesBlock`

* Extends: {DependenciesBlock}

### Constructors

#### `new AsyncDependenciesBlock(groupOptions[, loc][, request])`

##### Parameters

* `groupOptions` {string|GroupOptionsAsyncDependenciesBlock}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}

* Returns: {AsyncDependenciesBlock}

### Properties

#### `blocks`

* Type: {AsyncDependenciesBlock[]}

##### Inherited from

`DependenciesBlock.blocks`

***

#### `chunkName`

* Type: {string} Optional.

***

#### `circular`

* Type: {boolean}

***

#### `dependencies`

* Type: {Dependency[]}

##### Inherited from

`DependenciesBlock.dependencies`

***

#### `groupOptions`

* Type: {GroupOptionsAsyncDependenciesBlock}

***

#### `loc`

* Type: {SyntheticDependencyLocation|RealDependencyLocation} Optional.

***

#### `module`

* Type: {any}

***

#### `parent`

* Type: {DependenciesBlock} Optional.

##### Inherited from

`DependenciesBlock.parent`

***

#### `request`

* Type: {string} Optional.

### Methods

#### `addBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

***

#### `addDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

***

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

***

#### `deserialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectDeserializerContext}

* Returns: {void}

***

#### `getRootBlock()`

* Returns: {DependenciesBlock}

***

#### `removeDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

***

#### `serialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectSerializerContext}

* Returns: {void}

***

#### `updateHash(hash, context)`

##### Parameters

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* Returns: {void}
