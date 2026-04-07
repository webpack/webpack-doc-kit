# JsonModules

<!-- type=misc -->

## `JsonModulesPluginParserOptions`

### Properties

#### `exportsDepth`

* Type: {number} Optional.

The depth of json dependency flagged as `exportInfo`.

***

#### `namedExports`

* Type: {boolean} Optional.

Allow named exports for json of object type

***

#### `parse`

* Type: {Function} Optional.

Function that executes for a module source string and should return json-compatible data.

##### Parameters

* `input` {string}

* Returns: {any}

## `JsonModulesPluginGeneratorOptions`

### Properties

#### `JSONParse`

* Type: {boolean} Optional.

Use `JSON.parse` when the JSON string is longer than 20 characters.
