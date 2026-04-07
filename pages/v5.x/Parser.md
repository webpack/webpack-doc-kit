# Parser

<!-- type=misc -->

## Class: `Parser`

### Constructors

#### `new Parser()`

* Returns: {ParserClass}

### Methods

#### `parse(source, state)`

##### Parameters

* `source` {string|Buffer<ArrayBufferLike>|PreparsedAst}
* `state` {ParserState}

* Returns: {ParserState}

## `ParserOptionsByModuleTypeKnown`

Specify options for each parser.

### Properties

#### `asset`

* Type: {AssetParserOptions} Optional.

Parser options for asset modules.

#### `asset/bytes`

* Type: {EmptyParserOptions} Optional.

No parser options are supported for this module type.

#### `asset/inline`

* Type: {EmptyParserOptions} Optional.

No parser options are supported for this module type.

#### `asset/resource`

* Type: {EmptyParserOptions} Optional.

No parser options are supported for this module type.

#### `asset/source`

* Type: {EmptyParserOptions} Optional.

No parser options are supported for this module type.

#### `css`

* Type: {CssParserOptions} Optional.

Parser options for css modules.

#### `css/auto`

* Type: {CssModuleParserOptions} Optional.

Parser options for css/module modules.

#### `css/global`

* Type: {CssModuleParserOptions} Optional.

Parser options for css/module modules.

#### `css/module`

* Type: {CssModuleParserOptions} Optional.

Parser options for css/module modules.

#### `javascript`

* Type: {JavascriptParserOptions} Optional.

Parser options for javascript modules.

#### `javascript/auto`

* Type: {JavascriptParserOptions} Optional.

Parser options for javascript modules.

#### `javascript/dynamic`

* Type: {JavascriptParserOptions} Optional.

Parser options for javascript modules.

#### `javascript/esm`

* Type: {JavascriptParserOptions} Optional.

Parser options for javascript modules.

#### `json`

* Type: {JsonParserOptions} Optional.

Parser options for JSON modules.

## `ParserState`

* Type: {ParserStateBase & Record<string, any>}
