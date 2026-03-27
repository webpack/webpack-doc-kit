# javascript

## 
### Class: `EnableChunkLoadingPlugin`

### Constructors

#### `new EnableChunkLoadingPlugin(type)`

---
### EnableChunkLoadingPlugin

* `type` {string}

* ###Returns: {EnableChunkLoadingPlugin}

### Properties

* `type` {string}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `checkEnabled(compiler, type)`

---
### checkEnabled

* `compiler` {Compiler}
* `type` {string}

* ###Returns: {void}

#### Static method: `setEnabled(compiler, type)`

---
### setEnabled

* `compiler` {Compiler}
* `type` {string}

* ###Returns: {void}

***

## 
### Class: `JavascriptParser`

### Extends

- {ParserClass}

### Constructors

#### `new JavascriptParser([sourceType][, options])`

---
### JavascriptParser

* `sourceType` {"module"|"auto"|"script"}
* `options` {object}

* ###Returns: {JavascriptParser}

### Properties

* `comments` {CommentJavascriptParser[]}
* `currentTagData` {Record<string, any>|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `destructuringAssignmentProperties` {WeakMap<Expression, Set<DestructuringAssignmentProperty>>}
* `hooks` {Readonly<object>}
* `magicCommentContext` {Context}
* `options` {object}
* `prevStatement` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* `scope` {ScopeInfo}
* `semicolons` {Set<number>}
* `sourceType` {"module"|"auto"|"script"}
* `state` {JavascriptParserState}
* `statementPath` {StatementPathItem[]}
* `ALLOWED_MEMBER_TYPES_ALL` {3}
* `ALLOWED_MEMBER_TYPES_CALL_EXPRESSION` {1}
* `ALLOWED_MEMBER_TYPES_EXPRESSION` {2}
* `getImportAttributes` {object}
* `VariableInfo` {VariableInfo}
* `VariableInfoFlags` {Readonly<object>}

### Methods

#### `blockPreWalkClassDeclaration(statement)`

---
### blockPreWalkClassDeclaration

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}

* ###Returns: {void}

#### `blockPreWalkExportDefaultDeclaration(statement)`

---
### blockPreWalkExportDefaultDeclaration

* `statement` {ExportDefaultDeclaration}

* ###Returns: {void}

#### `blockPreWalkExportNamedDeclaration(statement)`

---
### blockPreWalkExportNamedDeclaration

* `statement` {ExportNamedDeclaration}

* ###Returns: {void}

#### `blockPreWalkExpressionStatement(statement)`

---
### blockPreWalkExpressionStatement

* `statement` {ExpressionStatement}

* ###Returns: {void}

#### `blockPreWalkStatement(statement)`

---
### blockPreWalkStatement

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}

* ###Returns: {void}

#### `blockPreWalkStatements(statements)`

---
### blockPreWalkStatements

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* ###Returns: {void}

Block pre walking iterates the scope for block variable declarations

#### `blockPreWalkVariableDeclaration(statement)`

---
### blockPreWalkVariableDeclaration

* `statement` {VariableDeclaration}

* ###Returns: {void}

#### `callHooksForExpression(hookMap, expr, args)`

---
### callHooksForExpression

###### T

`T`

###### R

`R`

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `expr` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `args` {AsArray<T>}

* ###Returns: {R}

#### `callHooksForExpressionWithFallback(hookMap, expr, fallback, defined, args)`

---
### callHooksForExpressionWithFallback

###### T

`T`

###### R

`R`

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `expr` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray<T>}

* ###Returns: {R}

#### `callHooksForInfo(hookMap, info, args)`

---
### callHooksForInfo

###### T

`T`

###### R

`R`

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `info` {ExportedVariableInfo}
* `args` {AsArray<T>}

* ###Returns: {R}

#### `callHooksForInfoWithFallback(hookMap, info, fallback, defined, args)`

---
### callHooksForInfoWithFallback

###### T

`T`

###### R

`R`

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `info` {ExportedVariableInfo}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray<T>}

* ###Returns: {R}

#### `callHooksForName(hookMap, name, args)`

---
### callHooksForName

###### T

`T`

###### R

`R`

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `name` {string}
* `args` {AsArray<T>}

* ###Returns: {R}

#### `callHooksForNameWithFallback(hookMap, name, fallback, defined, args)`

---
### callHooksForNameWithFallback

###### T

`T`

###### R

`R`

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `name` {string}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray<T>}

* ###Returns: {R}

#### `defineVariable(name)`

---
### defineVariable

* `name` {string}

* ###Returns: {void}

#### `destructuringAssignmentPropertiesFor(node)`

---
### destructuringAssignmentPropertiesFor

* `node` {Expression}

* ###Returns: {Set<DestructuringAssignmentProperty>}

#### `detectMode(statements)`

---
### detectMode

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration|Directive[]}

* ###Returns: {void}

#### `enterArrayPattern(pattern, onIdent)`

---
### enterArrayPattern

* `pattern` {ArrayPattern}
* `onIdent` {object}

* ###Returns: {void}

#### `enterAssignmentPattern(pattern, onIdent)`

---
### enterAssignmentPattern

* `pattern` {AssignmentPattern}
* `onIdent` {object}

* ###Returns: {void}

#### `enterDeclaration(declaration, onIdent)`

---
### enterDeclaration

* `declaration` {Declaration}
* `onIdent` {object}

* ###Returns: {void}

#### `enterDestructuringAssignment(pattern, expression)`

---
### enterDestructuringAssignment

* `pattern` {Pattern}
* `expression` {Expression}

* ###Returns: {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression}

#### `enterIdentifier(pattern, onIdent)`

---
### enterIdentifier

* `pattern` {Identifier}
* `onIdent` {object}

* ###Returns: {void}

#### `enterObjectPattern(pattern, onIdent)`

---
### enterObjectPattern

* `pattern` {ObjectPattern}
* `onIdent` {object}

* ###Returns: {void}

#### `enterPattern(pattern, onIdent)`

---
### enterPattern

* `pattern` {Property|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern}
* `onIdent` {object}

* ###Returns: {void}

#### `enterPatterns(patterns, onIdent)`

---
### enterPatterns

* `patterns` {string|Property|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `onIdent` {object}

* ###Returns: {void}

#### `enterRestElement(pattern, onIdent)`

---
### enterRestElement

* `pattern` {RestElement}
* `onIdent` {object}

* ###Returns: {void}

#### `evaluate(source)`

---
### evaluate

* `source` {string}

* ###Returns: {BasicEvaluatedExpression}

#### `evaluatedVariable(tagInfo)`

---
### evaluatedVariable

* `tagInfo` {TagInfo}

* ###Returns: {VariableInfo}

#### `evaluateExpression(expression)`

---
### evaluateExpression

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}

* ###Returns: {BasicEvaluatedExpression}

#### `extractMemberExpressionChain(expression)`

---
### extractMemberExpressionChain

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}

* ###Returns: {object}

#### `getComments(range)`

---
### getComments

* `range` {Tuple<number, number>}

* ###Returns: {CommentJavascriptParser[]}

#### `getFreeInfoFromVariable(varName)`

---
### getFreeInfoFromVariable

* `varName` {string}

* ###Returns: {object}

#### `getMemberExpressionInfo(expression, allowedTypes)`

---
### getMemberExpressionInfo

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `allowedTypes` {number}

* ###Returns: {CallExpressionInfo|ExpressionExpressionInfo}

#### `getNameForExpression(expression)`

---
### getNameForExpression

* `expression` {Expression}

* ###Returns: {object}

#### `getNameInfoFromVariable(varName)`

---
### getNameInfoFromVariable

* `varName` {string}

* ###Returns: {object}

#### `getRenameIdentifier(expr)`

---
### getRenameIdentifier

* `expr` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement}

* ###Returns: {string|VariableInfo}

#### `getTagData(name, tag)`

---
### getTagData

* `name` {string}
* `tag` {symbol}

* ###Returns: {Record<string, any>|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}

#### `getVariableInfo(name)`

---
### getVariableInfo

* `name` {string}

* ###Returns: {ExportedVariableInfo}

#### `inBlockScope(fn[, inExecutedPath])`

---
### inBlockScope

* `fn` {object}
* `inExecutedPath` {boolean}

* ###Returns: {void}

#### `inClassScope(hasThis, params, fn)`

---
### inClassScope

* `hasThis` {boolean}
* `params` {Identifier[]}
* `fn` {object}

* ###Returns: {void}

#### `inFunctionScope(hasThis, params, fn)`

---
### inFunctionScope

* `hasThis` {boolean}
* `params` {string|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {object}

* ###Returns: {void}

#### `inScope(params, fn)`

---
### inScope

> Stability: 0 - Deprecated

* `params` {string|Property|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {object}

* ###Returns: {void}

#### `isAsiPosition(pos)`

---
### isAsiPosition

* `pos` {number}

* ###Returns: {boolean}

#### `isPure(expr, commentsStartPos)`

---
### isPure

* `expr` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|PrivateIdentifier|VariableDeclaration}
* `commentsStartPos` {number}

* ###Returns: {boolean}

#### `isStatementLevelExpression(expr)`

---
### isStatementLevelExpression

* `expr` {Expression}

* ###Returns: {boolean}

#### `isVariableDefined(name)`

---
### isVariableDefined

* `name` {string}

* ###Returns: {boolean}

#### `modulePreWalkExportAllDeclaration(statement)`

---
### modulePreWalkExportAllDeclaration

* `statement` {ExportAllDeclaration}

* ###Returns: {void}

#### `modulePreWalkExportNamedDeclaration(statement)`

---
### modulePreWalkExportNamedDeclaration

* `statement` {ExportNamedDeclaration}

* ###Returns: {void}

#### `modulePreWalkImportDeclaration(statement)`

---
### modulePreWalkImportDeclaration

* `statement` {ImportDeclaration}

* ###Returns: {void}

#### `modulePreWalkStatements(statements)`

---
### modulePreWalkStatements

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* ###Returns: {void}

Module pre walking iterates the scope for import entries

#### `parse(source, state)`

---
### parse

* `source` {string|Buffer<ArrayBufferLike>|PreparsedAst}
* `state` {ParserState}

* ###Returns: {ParserState}

#### `parseCalculatedString(expression)`

---
### parseCalculatedString

* `expression` {Expression}

* ###Returns: {CalculatedStringResult}

#### `parseCommentOptions(range)`

---
### parseCommentOptions

* `range` {Tuple<number, number>}

* ###Returns: {object}

#### `parseString(expression)`

---
### parseString

* `expression` {Expression}

* ###Returns: {string}

#### `preWalkAssignmentExpression(expression)`

---
### preWalkAssignmentExpression

* `expression` {AssignmentExpression}

* ###Returns: {void}

#### `preWalkBlockStatement(statement)`

---
### preWalkBlockStatement

* `statement` {BlockStatement}

* ###Returns: {void}

#### `preWalkCatchClause(catchClause)`

---
### preWalkCatchClause

* `catchClause` {CatchClause}

* ###Returns: {void}

#### `preWalkDoWhileStatement(statement)`

---
### preWalkDoWhileStatement

* `statement` {DoWhileStatement}

* ###Returns: {void}

#### `preWalkForInStatement(statement)`

---
### preWalkForInStatement

* `statement` {ForInStatement}

* ###Returns: {void}

#### `preWalkForOfStatement(statement)`

---
### preWalkForOfStatement

* `statement` {ForOfStatement}

* ###Returns: {void}

#### `preWalkForStatement(statement)`

---
### preWalkForStatement

* `statement` {ForStatement}

* ###Returns: {void}

#### `preWalkFunctionDeclaration(statement)`

---
### preWalkFunctionDeclaration

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}

* ###Returns: {void}

#### `preWalkIfStatement(statement)`

---
### preWalkIfStatement

* `statement` {IfStatement}

* ###Returns: {void}

#### `preWalkLabeledStatement(statement)`

---
### preWalkLabeledStatement

* `statement` {LabeledStatement}

* ###Returns: {void}

#### `preWalkStatement(statement)`

---
### preWalkStatement

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}

* ###Returns: {void}

Walking iterates the statements and expressions and processes them

#### `preWalkStatements(statements)`

---
### preWalkStatements

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* ###Returns: {void}

Pre walking iterates the scope for variable declarations

#### `preWalkSwitchCases(switchCases)`

---
### preWalkSwitchCases

* `switchCases` {SwitchCase[]}

* ###Returns: {void}

#### `preWalkSwitchStatement(statement)`

---
### preWalkSwitchStatement

* `statement` {SwitchStatement}

* ###Returns: {void}

#### `preWalkTryStatement(statement)`

---
### preWalkTryStatement

* `statement` {TryStatement}

* ###Returns: {void}

#### `preWalkVariableDeclaration(statement)`

---
### preWalkVariableDeclaration

* `statement` {VariableDeclaration}

* ###Returns: {void}

#### `preWalkVariableDeclarator(declarator)`

---
### preWalkVariableDeclarator

* `declarator` {VariableDeclarator}

* ###Returns: {void}

#### `preWalkWhileStatement(statement)`

---
### preWalkWhileStatement

* `statement` {WhileStatement}

* ###Returns: {void}

#### `preWalkWithStatement(statement)`

---
### preWalkWithStatement

* `statement` {WithStatement}

* ###Returns: {void}

#### `setAsiPosition(pos)`

---
### setAsiPosition

* `pos` {number}

* ###Returns: {void}

#### `setVariable(name, variableInfo)`

---
### setVariable

* `name` {string}
* `variableInfo` {ExportedVariableInfo}

* ###Returns: {void}

#### `tagVariable(name, tag[, data][, flags])`

---
### tagVariable

* `name` {string}
* `tag` {symbol}
* `data` {Record<string, any>|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `flags` {0|1|2|4}

* ###Returns: {void}

#### `undefineVariable(name)`

---
### undefineVariable

* `name` {string}

* ###Returns: {void}

#### `unsetAsiPosition(pos)`

---
### unsetAsiPosition

* `pos` {number}

* ###Returns: {void}

#### `walkArrayExpression(expression)`

---
### walkArrayExpression

* `expression` {ArrayExpression}

* ###Returns: {void}

#### `walkArrayPattern(pattern)`

---
### walkArrayPattern

* `pattern` {ArrayPattern}

* ###Returns: {void}

#### `walkArrowFunctionExpression(expression)`

---
### walkArrowFunctionExpression

* `expression` {ArrowFunctionExpression}

* ###Returns: {void}

#### `walkAssignmentExpression(expression)`

---
### walkAssignmentExpression

* `expression` {AssignmentExpression}

* ###Returns: {void}

#### `walkAssignmentPattern(pattern)`

---
### walkAssignmentPattern

* `pattern` {AssignmentPattern}

* ###Returns: {void}

#### `walkAwaitExpression(expression)`

---
### walkAwaitExpression

* `expression` {AwaitExpression}

* ###Returns: {void}

#### `walkBinaryExpression(expression)`

---
### walkBinaryExpression

* `expression` {BinaryExpression}

* ###Returns: {void}

#### `walkBlockStatement(statement)`

---
### walkBlockStatement

* `statement` {BlockStatement|StaticBlock}

* ###Returns: {void}

#### `walkCallExpression(expression)`

---
### walkCallExpression

* `expression` {CallExpression}

* ###Returns: {void}

#### `walkCatchClause(catchClause)`

---
### walkCatchClause

* `catchClause` {CatchClause}

* ###Returns: {void}

#### `walkChainExpression(expression)`

---
### walkChainExpression

* `expression` {ChainExpression}

* ###Returns: {void}

#### `walkClass(classy)`

---
### walkClass

* `classy` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression}

* ###Returns: {void}

#### `walkClassDeclaration(statement)`

---
### walkClassDeclaration

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}

* ###Returns: {void}

#### `walkClassExpression(expression)`

---
### walkClassExpression

* `expression` {ClassExpression}

* ###Returns: {void}

#### `walkConditionalExpression(expression)`

---
### walkConditionalExpression

* `expression` {ConditionalExpression}

* ###Returns: {void}

#### `walkDoWhileStatement(statement)`

---
### walkDoWhileStatement

* `statement` {DoWhileStatement}

* ###Returns: {void}

#### `walkExportDefaultDeclaration(statement)`

---
### walkExportDefaultDeclaration

* `statement` {ExportDefaultDeclaration}

* ###Returns: {void}

#### `walkExportNamedDeclaration(statement)`

---
### walkExportNamedDeclaration

* `statement` {ExportNamedDeclaration}

* ###Returns: {void}

#### `walkExpression(expression)`

---
### walkExpression

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}

* ###Returns: {void}

#### `walkExpressions(expressions)`

---
### walkExpressions

* `expressions` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement[]}

* ###Returns: {void}

#### `walkExpressionStatement(statement)`

---
### walkExpressionStatement

* `statement` {ExpressionStatement}

* ###Returns: {void}

#### `walkForInStatement(statement)`

---
### walkForInStatement

* `statement` {ForInStatement}

* ###Returns: {void}

#### `walkForOfStatement(statement)`

---
### walkForOfStatement

* `statement` {ForOfStatement}

* ###Returns: {void}

#### `walkForStatement(statement)`

---
### walkForStatement

* `statement` {ForStatement}

* ###Returns: {void}

#### `walkFunctionDeclaration(statement)`

---
### walkFunctionDeclaration

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}

* ###Returns: {void}

#### `walkFunctionExpression(expression)`

---
### walkFunctionExpression

* `expression` {FunctionExpression}

* ###Returns: {void}

#### `walkIdentifier(expression)`

---
### walkIdentifier

* `expression` {Identifier}

* ###Returns: {void}

#### `walkIfStatement(statement)`

---
### walkIfStatement

* `statement` {IfStatement}

* ###Returns: {void}

#### `walkImportExpression(expression)`

---
### walkImportExpression

* `expression` {ImportExpressionJavascriptParser}

* ###Returns: {void}

#### `walkLabeledStatement(statement)`

---
### walkLabeledStatement

* `statement` {LabeledStatement}

* ###Returns: {void}

#### `walkLeftRightExpression(expression)`

---
### walkLeftRightExpression

* `expression` {BinaryExpression|LogicalExpression}

* ###Returns: {void}

#### `walkLogicalExpression(expression)`

---
### walkLogicalExpression

* `expression` {LogicalExpression}

* ###Returns: {void}

#### `walkMemberExpression(expression)`

---
### walkMemberExpression

* `expression` {MemberExpression}

* ###Returns: {void}

#### `walkMemberExpressionWithExpressionName(expression, name, rootInfo, members, onUnhandled)`

---
### walkMemberExpressionWithExpressionName

###### R

`R`

* `expression` {MemberExpression}
* `name` {string}
* `rootInfo` {string|VariableInfo}
* `members` {string[]}
* `onUnhandled` {object}

* ###Returns: {void}

#### `walkMetaProperty(metaProperty)`

---
### walkMetaProperty

* `metaProperty` {MetaProperty}

* ###Returns: {void}

#### `walkNestedStatement(statement)`

---
### walkNestedStatement

* `statement` {Statement}

* ###Returns: {void}

Walks a statements that is nested within a parent statement
and can potentially be a non-block statement.
This enforces the nested statement to never be in ASI position.

#### `walkNewExpression(expression)`

---
### walkNewExpression

* `expression` {NewExpression}

* ###Returns: {void}

#### `walkObjectExpression(expression)`

---
### walkObjectExpression

* `expression` {ObjectExpression}

* ###Returns: {void}

#### `walkObjectPattern(pattern)`

---
### walkObjectPattern

* `pattern` {ObjectPattern}

* ###Returns: {void}

#### `walkPattern(pattern)`

---
### walkPattern

* `pattern` {Pattern}

* ###Returns: {void}

#### `walkProperty(prop)`

---
### walkProperty

* `prop` {Property|SpreadElement}

* ###Returns: {void}

#### `walkRestElement(pattern)`

---
### walkRestElement

* `pattern` {RestElement}

* ###Returns: {void}

#### `walkReturnStatement(statement)`

---
### walkReturnStatement

* `statement` {ReturnStatement}

* ###Returns: {void}

#### `walkSequenceExpression(expression)`

---
### walkSequenceExpression

* `expression` {SequenceExpression}

* ###Returns: {void}

#### `walkSpreadElement(expression)`

---
### walkSpreadElement

* `expression` {SpreadElement}

* ###Returns: {void}

#### `walkStatement(statement)`

---
### walkStatement

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}

* ###Returns: {void}

#### `walkStatements(statements)`

---
### walkStatements

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* ###Returns: {void}

Walking iterates the statements and expressions and processes them

#### `walkSwitchCases(switchCases)`

---
### walkSwitchCases

* `switchCases` {SwitchCase[]}

* ###Returns: {void}

#### `walkSwitchStatement(statement)`

---
### walkSwitchStatement

* `statement` {SwitchStatement}

* ###Returns: {void}

#### `walkTaggedTemplateExpression(expression)`

---
### walkTaggedTemplateExpression

* `expression` {TaggedTemplateExpression}

* ###Returns: {void}

#### `walkTemplateLiteral(expression)`

---
### walkTemplateLiteral

* `expression` {TemplateLiteral}

* ###Returns: {void}

#### `walkTerminatingStatement(statement)`

---
### walkTerminatingStatement

* `statement` {ReturnStatement|ThrowStatement}

* ###Returns: {void}

#### `walkThisExpression(expression)`

---
### walkThisExpression

* `expression` {ThisExpression}

* ###Returns: {void}

#### `walkThrowStatement(statement)`

---
### walkThrowStatement

* `statement` {ThrowStatement}

* ###Returns: {void}

#### `walkTryStatement(statement)`

---
### walkTryStatement

* `statement` {TryStatement}

* ###Returns: {void}

#### `walkUnaryExpression(expression)`

---
### walkUnaryExpression

* `expression` {UnaryExpression}

* ###Returns: {void}

#### `walkUpdateExpression(expression)`

---
### walkUpdateExpression

* `expression` {UpdateExpression}

* ###Returns: {void}

#### `walkVariableDeclaration(statement)`

---
### walkVariableDeclaration

* `statement` {VariableDeclaration}

* ###Returns: {void}

#### `walkWhileStatement(statement)`

---
### walkWhileStatement

* `statement` {WhileStatement}

* ###Returns: {void}

#### `walkWithStatement(statement)`

---
### walkWithStatement

* `statement` {WithStatement}

* ###Returns: {void}

#### `walkYieldExpression(expression)`

---
### walkYieldExpression

* `expression` {YieldExpression}

* ###Returns: {void}

#### Static method: `extend(plugins)`

---
### extend

* `plugins` {object[]}

* ###Returns: {JavascriptParser}
