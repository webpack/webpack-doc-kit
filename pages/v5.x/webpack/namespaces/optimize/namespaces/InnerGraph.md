# InnerGraph

## Class: `TopLevelSymbol`

### Constructors

#### `new TopLevelSymbol(name)`

* `name` {string}
* Returns: {TopLevelSymbol}

Creates an instance of TopLevelSymbol.

### Properties

* `name` {string}

***

## `addUsage`

> **addUsage**: {object}

* `state` {ParserState}
* `symbol` {null|TopLevelSymbol}
* `usage` {Usage}
* Returns: {void}

***

## `addVariableUsage`

> **addVariableUsage**: {object}

* `parser` {JavascriptParser}
* `name` {string}
* `usage` {Usage}
* Returns: {void}

***

## `bailout`

> **bailout**: {object}

* `parserState` {ParserState}
* Returns: {void}

***

## `enable`

> **enable**: {object}

* `parserState` {ParserState}
* Returns: {void}

***

## `getDependencyUsedByExportsCondition`

> **getDependencyUsedByExportsCondition**: {object}

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set}
* `moduleGraph` {ModuleGraph}
* Returns: {null|false|object}

***

## `getTopLevelSymbol`

> **getTopLevelSymbol**: {object}

* `state` {ParserState}
* Returns: {void|TopLevelSymbol}

***

## `inferDependencyUsage`

> **inferDependencyUsage**: {object}

* `state` {ParserState}
* Returns: {void}

***

## `isDependencyUsedByExports`

> **isDependencyUsedByExports**: {object}

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set}
* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

***

## `isEnabled`

> **isEnabled**: {object}

* `parserState` {ParserState}
* Returns: {boolean}

***

## `onUsage`

> **onUsage**: {object}

* `state` {ParserState}
* `onUsageCallback` {object}
* Returns: {void}

***

## `setTopLevelSymbol`

> **setTopLevelSymbol**: {object}

* `state` {ParserState}
* `symbol` {TopLevelSymbol}
* Returns: {void}

***

## `tagTopLevelSymbol`

> **tagTopLevelSymbol**: {object}

* `parser` {JavascriptParser}
* `name` {string}
* Returns: {undefined|TopLevelSymbol}

***

## `topLevelSymbolTag`

> `const` **topLevelSymbolTag**: {symbol}
