# InnerGraph

## Class: `TopLevelSymbol`

### Constructors

#### `new TopLevelSymbol(name)`

* `name` {string}
* Returns: {TopLevelSymbol}

### Properties

* `name` {string}

***

## `addUsage`

> **addUsage**: {(state: ParserState, symbol: null|TopLevelSymbol, usage: Usage) => void}

* `state` {ParserState}
* `symbol` {null|TopLevelSymbol}
* `usage` {Usage}
* Returns: {void}

***

## `addVariableUsage`

> **addVariableUsage**: {(parser: JavascriptParser, name: string, usage: Usage) => void}

* `parser` {JavascriptParser}
* `name` {string}
* `usage` {Usage}
* Returns: {void}

***

## `bailout`

> **bailout**: {(parserState: ParserState) => void}

* `parserState` {ParserState}
* Returns: {void}

***

## `enable`

> **enable**: {(parserState: ParserState) => void}

* `parserState` {ParserState}
* Returns: {void}

***

## `getDependencyUsedByExportsCondition`

> **getDependencyUsedByExportsCondition**: {(dependency: Dependency, usedByExports: undefined|boolean|Set<string>, moduleGraph: ModuleGraph) => null|false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set<string>}
* `moduleGraph` {ModuleGraph}
* Returns: {null|false|(moduleGraphConnection: ModuleGraphConnection, runtime: RuntimeSpec) => ConnectionState}

***

## `getTopLevelSymbol`

> **getTopLevelSymbol**: {(state: ParserState) => void|TopLevelSymbol}

* `state` {ParserState}
* Returns: {void|TopLevelSymbol}

***

## `inferDependencyUsage`

> **inferDependencyUsage**: {(state: ParserState) => void}

* `state` {ParserState}
* Returns: {void}

***

## `isDependencyUsedByExports`

> **isDependencyUsedByExports**: {(dependency: Dependency, usedByExports: undefined|boolean|Set<string>, moduleGraph: ModuleGraph, runtime: RuntimeSpec) => boolean}

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set<string>}
* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

***

## `isEnabled`

> **isEnabled**: {(parserState: ParserState) => boolean}

* `parserState` {ParserState}
* Returns: {boolean}

***

## `onUsage`

> **onUsage**: {(state: ParserState, onUsageCallback: (value: boolean|Set<string>) => void) => void}

* `state` {ParserState}
* `onUsageCallback` {(value: boolean|Set<string>) => void}
* Returns: {void}

***

## `setTopLevelSymbol`

> **setTopLevelSymbol**: {(state: ParserState, symbol: TopLevelSymbol) => void}

* `state` {ParserState}
* `symbol` {TopLevelSymbol}
* Returns: {void}

***

## `tagTopLevelSymbol`

> **tagTopLevelSymbol**: {(parser: JavascriptParser, name: string) => undefined|TopLevelSymbol}

* `parser` {JavascriptParser}
* `name` {string}
* Returns: {undefined|TopLevelSymbol}

***

## `topLevelSymbolTag`

> `const` **topLevelSymbolTag**: {symbol}
