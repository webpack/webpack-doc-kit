# Generator

<!-- type=misc -->

## Class: `Generator`

### Constructors

#### `new Generator()`

* Returns: {Generator}

### Methods

#### `generate(module, __namedParameters)`

##### Parameters

* `module` {NormalModule}
* `__namedParameters` {GenerateContext}

* Returns: {Source}

***

#### `getConcatenationBailoutReason(module, context)`

##### Parameters

* `module` {NormalModule}
* `context` {ConcatenationBailoutReasonContext}

* Returns: {string}

***

#### `getSize(module[, type])`

##### Parameters

* `module` {NormalModule}
* `type` {string}

* Returns: {number}

***

#### `getTypes(module)`

##### Parameters

* `module` {NormalModule}

* Returns: {ReadonlySet<string>}

***

#### `updateHash(hash, __namedParameters)`

##### Parameters

* `hash` {Hash}
* `__namedParameters` {UpdateHashContextGenerator}

* Returns: {void}

***

#### Static method: `byType(map)`

##### Parameters

* `map` {object}

* Returns: {ByTypeGenerator}

## `GeneratorOptionsByModuleTypeKnown`

Specify options for each generator.

### Properties

#### `asset`

* Type: {AssetGeneratorOptions} Optional.

Generator options for asset modules.

#### `asset/bytes`

* Type: {EmptyGeneratorOptions} Optional.

No generator options are supported for this module type.

#### `asset/inline`

* Type: {AssetInlineGeneratorOptions} Optional.

Generator options for asset/inline modules.

#### `asset/resource`

* Type: {AssetResourceGeneratorOptions} Optional.

Generator options for asset/resource modules.

#### `asset/source`

* Type: {EmptyGeneratorOptions} Optional.

No generator options are supported for this module type.

#### `css`

* Type: {CssGeneratorOptions} Optional.

Generator options for css modules.

#### `css/auto`

* Type: {CssModuleGeneratorOptions} Optional.

Generator options for css/module modules.

#### `css/global`

* Type: {CssModuleGeneratorOptions} Optional.

Generator options for css/module modules.

#### `css/module`

* Type: {CssModuleGeneratorOptions} Optional.

Generator options for css/module modules.

#### `javascript`

* Type: {EmptyGeneratorOptions} Optional.

No generator options are supported for this module type.

#### `javascript/auto`

* Type: {EmptyGeneratorOptions} Optional.

No generator options are supported for this module type.

#### `javascript/dynamic`

* Type: {EmptyGeneratorOptions} Optional.

No generator options are supported for this module type.

#### `javascript/esm`

* Type: {EmptyGeneratorOptions} Optional.

No generator options are supported for this module type.

#### `json`

* Type: {JsonGeneratorOptions} Optional.

Generator options for json modules.
