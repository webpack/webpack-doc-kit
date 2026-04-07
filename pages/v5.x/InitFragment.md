# InitFragment

<!-- type=misc -->

## Class: `InitFragment`

### Type Parameters

### Constructors

#### `new InitFragment(content, stage, position[, key][, endContent])`

##### Parameters

* `content` {string|Source}
* `stage` {number}
* `position` {number}
* `key` {string}
* `endContent` {string|Source}

* Returns: {InitFragment<GenerateContext>}

### Properties

#### `content`

* Type: {string|Source} Optional.

***

#### `endContent`

* Type: {string|Source} Optional.

***

#### `key`

* Type: {string} Optional.

***

#### `position`

* Type: {number}

***

#### `stage`

* Type: {number}

***

#### `STAGE_ASYNC_BOUNDARY`

* Type: {number}

***

#### `STAGE_ASYNC_DEPENDENCIES`

* Type: {number}

***

#### `STAGE_ASYNC_HARMONY_IMPORTS`

* Type: {number}

***

#### `STAGE_CONSTANTS`

* Type: {number}

***

#### `STAGE_HARMONY_EXPORTS`

* Type: {number}

***

#### `STAGE_HARMONY_IMPORTS`

* Type: {number}

***

#### `STAGE_PROVIDES`

* Type: {number}

### Methods

#### `deserialize(context)`

##### Parameters

* `context` {ObjectDeserializerContext}

* Returns: {void}

***

#### `getContent(context)`

##### Parameters

* `context` {GenerateContext}

* Returns: {string|Source}

***

#### `getEndContent(context)`

##### Parameters

* `context` {GenerateContext}

* Returns: {string|Source}

***

#### `serialize(context)`

##### Parameters

* `context` {ObjectSerializerContext}

* Returns: {void}

***

#### Static method: `addToSource(source, initFragments, context)`

##### Parameters

* `source` {Source}
* `initFragments` {MaybeMergeableInitFragment<Context>[]}
* `context` {Context}

* Returns: {Source}
