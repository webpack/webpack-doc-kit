# InnerGraph

<!-- type=misc -->

## `InnerGraph`

### Members

* [`TopLevelSymbol`](TopLevelSymbol.md)

## `addUsage`

* Type: {Function}

### Parameters

* `state` {ParserState}
* `symbol` {null|TopLevelSymbol}
* `usage` {Usage}

* Returns: {void}

## `addVariableUsage`

* Type: {Function}

### Parameters

* `parser` {JavascriptParser}
* `name` {string}
* `usage` {Usage}

* Returns: {void}

## `bailout`

* Type: {Function}

### Parameters

* `parserState` {ParserState}

* Returns: {void}

## `enable`

* Type: {Function}

### Parameters

* `parserState` {ParserState}

* Returns: {void}

## `getDependencyUsedByExportsCondition`

* Type: {Function}

### Parameters

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set<string>}
* `moduleGraph` {ModuleGraph}

* Returns: {null|false|Function}

## `getTopLevelSymbol`

* Type: {Function}

### Parameters

* `state` {ParserState}

* Returns: {void|TopLevelSymbol}

## `inferDependencyUsage`

* Type: {Function}

### Parameters

* `state` {ParserState}

* Returns: {void}

## `isDependencyUsedByExports`

* Type: {Function}

### Parameters

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set<string>}
* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* Returns: {boolean}

## `isEnabled`

* Type: {Function}

### Parameters

* `parserState` {ParserState}

* Returns: {boolean}

## `onUsage`

* Type: {Function}

### Parameters

* `state` {ParserState}
* `onUsageCallback` {Function}
  * `value` {boolean|Set<string>}
  * Returns: {void}

* Returns: {void}

## `setTopLevelSymbol`

* Type: {Function}

### Parameters

* `state` {ParserState}
* `symbol` {TopLevelSymbol}

* Returns: {void}

## `tagTopLevelSymbol`

* Type: {Function}

### Parameters

* `parser` {JavascriptParser}
* `name` {string}

* Returns: {undefined|TopLevelSymbol}

## `topLevelSymbolTag`

* Type: {unique symbol}
