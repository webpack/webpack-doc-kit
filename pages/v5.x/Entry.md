# Entry

<!-- type=misc -->

## `Entry`

* Type: {string|Function|EntryObject|string[]}

## Class: `EntryOptionPlugin`

### Constructors

#### `new EntryOptionPlugin()`

* Returns: {EntryOptionPlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

#### Static method: `applyEntryOption(compiler, context, entry)`

##### Parameters

* `compiler` {Compiler}
* `context` {string}
* `entry` {EntryNormalized}

* Returns: {void}

#### Static method: `entryDescriptionToOptions(compiler, name, desc)`

##### Parameters

* `compiler` {Compiler}
* `name` {string}
* `desc` {EntryDescriptionNormalized}

* Returns: {EntryOptions}

## Class: `EntryPlugin`

### Constructors

#### `new EntryPlugin(context, entry[, options])`

##### Parameters

* `context` {string}
* `entry` {string}
* `options` {string|EntryOptions}

* Returns: {EntryPlugin}

An entry plugin which will handle creation of the EntryDependency

### Properties

#### `context`

* Type: {string}

#### `entry`

* Type: {string}

#### `options`

* Type: {string|EntryOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

#### Static method: `createDependency(entry, options)`

##### Parameters

* `entry` {string}
* `options` {string|EntryOptions}

* Returns: {EntryDependency}

## `EntryObject`

Multiple entry bundles are created. The key is the entry name. The value can be a string, an array or an entry description object.

### Indexable

> \[`index`: {string}\]: {string|string[]|EntryDescription}

## `EntryNormalized`

* Type: {Function|EntryStaticNormalized}

## `EntryOptions`

* Type: {object & Omit<EntryDescriptionNormalized, "import">}

### Type Declaration

* `name` {string}
