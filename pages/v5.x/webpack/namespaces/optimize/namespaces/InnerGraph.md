# InnerGraph

## 
### Class: `TopLevelSymbol`

### Constructors

#### `new TopLevelSymbol(name)`

---
### TopLevelSymbol

* `name` {string}

* ###Returns: {TopLevelSymbol}

### Properties

* `name` {string}

***

## 
### `addUsage`

> **addUsage**: {object}

---
### __type

* `state` {ParserState}
* `symbol` {null|TopLevelSymbol}
* `usage` {Usage}

* ###Returns: {void}

***

## 
### `addVariableUsage`

> **addVariableUsage**: {object}

---
### __type

* `parser` {JavascriptParser}
* `name` {string}
* `usage` {Usage}

* ###Returns: {void}

***

## 
### `bailout`

> **bailout**: {object}

---
### __type

* `parserState` {ParserState}

* ###Returns: {void}

***

## 
### `enable`

> **enable**: {object}

---
### __type

* `parserState` {ParserState}

* ###Returns: {void}

***

## 
### `getDependencyUsedByExportsCondition`

> **getDependencyUsedByExportsCondition**: {object}

---
### __type

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set<string>}
* `moduleGraph` {ModuleGraph}

* ###Returns: {null|false|object}

***

## 
### `getTopLevelSymbol`

> **getTopLevelSymbol**: {object}

---
### __type

* `state` {ParserState}

* ###Returns: {void|TopLevelSymbol}

***

## 
### `inferDependencyUsage`

> **inferDependencyUsage**: {object}

---
### __type

* `state` {ParserState}

* ###Returns: {void}

***

## 
### `isDependencyUsedByExports`

> **isDependencyUsedByExports**: {object}

---
### __type

* `dependency` {Dependency}
* `usedByExports` {undefined|boolean|Set<string>}
* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

***

## 
### `isEnabled`

> **isEnabled**: {object}

---
### __type

* `parserState` {ParserState}

* ###Returns: {boolean}

***

## 
### `onUsage`

> **onUsage**: {object}

---
### __type

* `state` {ParserState}
* `onUsageCallback` {object}

* ###Returns: {void}

***

## 
### `setTopLevelSymbol`

> **setTopLevelSymbol**: {object}

---
### __type

* `state` {ParserState}
* `symbol` {TopLevelSymbol}

* ###Returns: {void}

***

## 
### `tagTopLevelSymbol`

> **tagTopLevelSymbol**: {object}

---
### __type

* `parser` {JavascriptParser}
* `name` {string}

* ###Returns: {undefined|TopLevelSymbol}

***

## 
### `topLevelSymbolTag`

> `const` **topLevelSymbolTag**: {symbol}
