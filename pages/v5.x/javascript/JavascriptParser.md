# JavascriptParser

<!-- type=misc -->

## Class: `JavascriptParser`

* Extends: {ParserClass}

### Constructors

#### `new JavascriptParser([sourceType][, options])`

##### Parameters

* `sourceType` {"module"|"auto"|"script"}
* `options` {object}
  * `parse` {Function}
    * `code` {string}
    * `options` {ParseOptions}
    * Returns: {ParseResult}

* Returns: {JavascriptParser}

### Properties

#### `comments`

* Type: {CommentJavascriptParser[]} Optional.

***

#### `currentTagData`

* Type: {Record<string, any>|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards} Optional.

***

#### `destructuringAssignmentProperties`

* Type: {WeakMap<Expression, Set<DestructuringAssignmentProperty>>} Optional.

***

#### `hooks`

* Type: {Readonly<object>}

***

#### `magicCommentContext`

* Type: {Context}

***

#### `options`

* Type: {object}

* `parse` {Function}
  * `code` {string}
  * `options` {ParseOptions}
  * Returns: {ParseResult}

***

#### `prevStatement`

* Type: {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration} Optional.

***

#### `scope`

* Type: {ScopeInfo}

***

#### `semicolons`

* Type: {Set<number>} Optional.

***

#### `sourceType`

* Type: {"module"|"auto"|"script"}

***

#### `state`

* Type: {JavascriptParserState}

***

#### `statementPath`

* Type: {StatementPathItem[]} Optional.

***

#### `ALLOWED_MEMBER_TYPES_ALL`

* Type: {3}

***

#### `ALLOWED_MEMBER_TYPES_CALL_EXPRESSION`

* Type: {1}

***

#### `ALLOWED_MEMBER_TYPES_EXPRESSION`

* Type: {2}

***

#### `getImportAttributes`

* Type: {Function}

##### Parameters

* `node` {ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration|ImportExpressionJavascriptParser}

* Returns: {Record<string, string>}

***

#### `VariableInfo`

* Type: {VariableInfo}

***

#### `VariableInfoFlags`

* Type: {Readonly<object>}

### Methods

#### `blockPreWalkClassDeclaration(statement)`

##### Parameters

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}

* Returns: {void}

***

#### `blockPreWalkExportDefaultDeclaration(statement)`

##### Parameters

* `statement` {ExportDefaultDeclaration}

* Returns: {void}

***

#### `blockPreWalkExportNamedDeclaration(statement)`

##### Parameters

* `statement` {ExportNamedDeclaration}

* Returns: {void}

***

#### `blockPreWalkExpressionStatement(statement)`

##### Parameters

* `statement` {ExpressionStatement}

* Returns: {void}

***

#### `blockPreWalkStatement(statement)`

##### Parameters

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}

* Returns: {void}

***

#### `blockPreWalkStatements(statements)`

##### Parameters

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* Returns: {void}

Block pre walking iterates the scope for block variable declarations

***

#### `blockPreWalkVariableDeclaration(statement)`

##### Parameters

* `statement` {VariableDeclaration}

* Returns: {void}

***

#### `callHooksForExpression(hookMap, expr, args)`

##### Parameters

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `expr` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `...args` {AsArray<T>}

* Returns: {R}

***

#### `callHooksForExpressionWithFallback(hookMap, expr, fallback, defined, args)`

##### Parameters

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `expr` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `fallback` {Function}
  * `name` {string}
  * `rootInfo` {string|VariableInfo|ScopeInfo}
  * `getMembers` {Function}
    * Returns: {string[]}
  * Returns: {R}
* `defined` {Function}
  * `result` {string}
  * Returns: {R}
* `...args` {AsArray<T>}

* Returns: {R}

***

#### `callHooksForInfo(hookMap, info, args)`

##### Parameters

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `info` {ExportedVariableInfo}
* `...args` {AsArray<T>}

* Returns: {R}

***

#### `callHooksForInfoWithFallback(hookMap, info, fallback, defined, args)`

##### Parameters

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `info` {ExportedVariableInfo}
* `fallback` {Function}
  * `name` {string}
  * Returns: {R}
* `defined` {Function}
  * `result` {string}
  * Returns: {R}
* `...args` {AsArray<T>}

* Returns: {R}

***

#### `callHooksForName(hookMap, name, args)`

##### Parameters

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `name` {string}
* `...args` {AsArray<T>}

* Returns: {R}

***

#### `callHooksForNameWithFallback(hookMap, name, fallback, defined, args)`

##### Parameters

* `hookMap` {HookMap<SyncBailHook<T, R, UnsetAdditionalOptions>>}
* `name` {string}
* `fallback` {Function}
  * `value` {string}
  * Returns: {R}
* `defined` {Function}
  * Returns: {R}
* `...args` {AsArray<T>}

* Returns: {R}

***

#### `defineVariable(name)`

##### Parameters

* `name` {string}

* Returns: {void}

***

#### `destructuringAssignmentPropertiesFor(node)`

##### Parameters

* `node` {Expression}

* Returns: {Set<DestructuringAssignmentProperty>}

***

#### `detectMode(statements)`

##### Parameters

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration|Directive[]}

* Returns: {void}

***

#### `enterArrayPattern(pattern, onIdent)`

##### Parameters

* `pattern` {ArrayPattern}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `enterAssignmentPattern(pattern, onIdent)`

##### Parameters

* `pattern` {AssignmentPattern}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `enterDeclaration(declaration, onIdent)`

##### Parameters

* `declaration` {Declaration}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `enterDestructuringAssignment(pattern, expression)`

##### Parameters

* `pattern` {Pattern}
* `expression` {Expression}

* Returns: {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression}

***

#### `enterIdentifier(pattern, onIdent)`

##### Parameters

* `pattern` {Identifier}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `enterObjectPattern(pattern, onIdent)`

##### Parameters

* `pattern` {ObjectPattern}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `enterPattern(pattern, onIdent)`

##### Parameters

* `pattern` {Property|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `enterPatterns(patterns, onIdent)`

##### Parameters

* `patterns` {string|Property|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `onIdent` {Function}
  * `ident` {string}
  * Returns: {void}

* Returns: {void}

***

#### `enterRestElement(pattern, onIdent)`

##### Parameters

* `pattern` {RestElement}
* `onIdent` {Function}
  * `ident` {string}
  * `identifier` {Identifier}
  * Returns: {void}

* Returns: {void}

***

#### `evaluate(source)`

##### Parameters

* `source` {string}

* Returns: {BasicEvaluatedExpression}

***

#### `evaluatedVariable(tagInfo)`

##### Parameters

* `tagInfo` {TagInfo}

* Returns: {VariableInfo}

***

#### `evaluateExpression(expression)`

##### Parameters

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}

* Returns: {BasicEvaluatedExpression}

***

#### `extractMemberExpressionChain(expression)`

##### Parameters

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}

* Returns: {object}
  * `memberRanges` {[number, number][]}
  * `members` {string[]}
  * `membersOptionals` {boolean[]}
  * `object` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}

***

#### `getComments(range)`

##### Parameters

* `range` {[number, number]}

* Returns: {CommentJavascriptParser[]}

***

#### `getFreeInfoFromVariable(varName)`

##### Parameters

* `varName` {string}

* Returns: {object}
  * `info` {string|VariableInfo}
  * `name` {string}

***

#### `getMemberExpressionInfo(expression, allowedTypes)`

##### Parameters

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `allowedTypes` {number}

* Returns: {CallExpressionInfo|ExpressionExpressionInfo}

***

#### `getNameForExpression(expression)`

##### Parameters

* `expression` {Expression}

* Returns: {object}
  * `getMembers` {Function}
    * Returns: {string[]}
  * `name` {string}
  * `rootInfo` {ExportedVariableInfo}

***

#### `getNameInfoFromVariable(varName)`

##### Parameters

* `varName` {string}

* Returns: {object}
  * `info` {string|VariableInfo}
  * `name` {string}

***

#### `getRenameIdentifier(expr)`

##### Parameters

* `expr` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement}

* Returns: {string|VariableInfo}

***

#### `getTagData(name, tag)`

##### Parameters

* `name` {string}
* `tag` {symbol}

* Returns: {Record<string, any>|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}

***

#### `getVariableInfo(name)`

##### Parameters

* `name` {string}

* Returns: {ExportedVariableInfo}

***

#### `inBlockScope(fn[, inExecutedPath])`

##### Parameters

* `fn` {Function}
  * Returns: {void}
* `inExecutedPath` {boolean}

* Returns: {void}

***

#### `inClassScope(hasThis, params, fn)`

##### Parameters

* `hasThis` {boolean}
* `params` {Identifier[]}
* `fn` {Function}
  * Returns: {void}

* Returns: {void}

***

#### `inFunctionScope(hasThis, params, fn)`

##### Parameters

* `hasThis` {boolean}
* `params` {string|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {Function}
  * Returns: {void}

* Returns: {void}

***

#### `inScope(params, fn)`

> Stability: 0 - Deprecated

##### Parameters

* `params` {string|Property|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {Function}
  * Returns: {void}

* Returns: {void}

***

#### `isAsiPosition(pos)`

##### Parameters

* `pos` {number}

* Returns: {boolean}

***

#### `isPure(expr, commentsStartPos)`

##### Parameters

* `expr` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|PrivateIdentifier|VariableDeclaration}
* `commentsStartPos` {number}

* Returns: {boolean}

***

#### `isStatementLevelExpression(expr)`

##### Parameters

* `expr` {Expression}

* Returns: {boolean}

***

#### `isVariableDefined(name)`

##### Parameters

* `name` {string}

* Returns: {boolean}

***

#### `modulePreWalkExportAllDeclaration(statement)`

##### Parameters

* `statement` {ExportAllDeclaration}

* Returns: {void}

***

#### `modulePreWalkExportNamedDeclaration(statement)`

##### Parameters

* `statement` {ExportNamedDeclaration}

* Returns: {void}

***

#### `modulePreWalkImportDeclaration(statement)`

##### Parameters

* `statement` {ImportDeclaration}

* Returns: {void}

***

#### `modulePreWalkStatements(statements)`

##### Parameters

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* Returns: {void}

Module pre walking iterates the scope for import entries

***

#### `parse(source, state)`

##### Parameters

* `source` {string|Buffer<ArrayBufferLike>|PreparsedAst}
* `state` {ParserState}

* Returns: {ParserState}

***

#### `parseCalculatedString(expression)`

##### Parameters

* `expression` {Expression}

* Returns: {CalculatedStringResult}

***

#### `parseCommentOptions(range)`

##### Parameters

* `range` {[number, number]}

* Returns: {object}
  * `errors` {Error & object[]}
  * `options` {Record<string, any>}

***

#### `parseString(expression)`

##### Parameters

* `expression` {Expression}

* Returns: {string}

***

#### `preWalkAssignmentExpression(expression)`

##### Parameters

* `expression` {AssignmentExpression}

* Returns: {void}

***

#### `preWalkBlockStatement(statement)`

##### Parameters

* `statement` {BlockStatement}

* Returns: {void}

***

#### `preWalkCatchClause(catchClause)`

##### Parameters

* `catchClause` {CatchClause}

* Returns: {void}

***

#### `preWalkDoWhileStatement(statement)`

##### Parameters

* `statement` {DoWhileStatement}

* Returns: {void}

***

#### `preWalkForInStatement(statement)`

##### Parameters

* `statement` {ForInStatement}

* Returns: {void}

***

#### `preWalkForOfStatement(statement)`

##### Parameters

* `statement` {ForOfStatement}

* Returns: {void}

***

#### `preWalkForStatement(statement)`

##### Parameters

* `statement` {ForStatement}

* Returns: {void}

***

#### `preWalkFunctionDeclaration(statement)`

##### Parameters

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}

* Returns: {void}

***

#### `preWalkIfStatement(statement)`

##### Parameters

* `statement` {IfStatement}

* Returns: {void}

***

#### `preWalkLabeledStatement(statement)`

##### Parameters

* `statement` {LabeledStatement}

* Returns: {void}

***

#### `preWalkStatement(statement)`

##### Parameters

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}

* Returns: {void}

Walking iterates the statements and expressions and processes them

***

#### `preWalkStatements(statements)`

##### Parameters

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* Returns: {void}

Pre walking iterates the scope for variable declarations

***

#### `preWalkSwitchCases(switchCases)`

##### Parameters

* `switchCases` {SwitchCase[]}

* Returns: {void}

***

#### `preWalkSwitchStatement(statement)`

##### Parameters

* `statement` {SwitchStatement}

* Returns: {void}

***

#### `preWalkTryStatement(statement)`

##### Parameters

* `statement` {TryStatement}

* Returns: {void}

***

#### `preWalkVariableDeclaration(statement)`

##### Parameters

* `statement` {VariableDeclaration}

* Returns: {void}

***

#### `preWalkVariableDeclarator(declarator)`

##### Parameters

* `declarator` {VariableDeclarator}

* Returns: {void}

***

#### `preWalkWhileStatement(statement)`

##### Parameters

* `statement` {WhileStatement}

* Returns: {void}

***

#### `preWalkWithStatement(statement)`

##### Parameters

* `statement` {WithStatement}

* Returns: {void}

***

#### `setAsiPosition(pos)`

##### Parameters

* `pos` {number}

* Returns: {void}

***

#### `setVariable(name, variableInfo)`

##### Parameters

* `name` {string}
* `variableInfo` {ExportedVariableInfo}

* Returns: {void}

***

#### `tagVariable(name, tag[, data][, flags])`

##### Parameters

* `name` {string}
* `tag` {symbol}
* `data` {Record<string, any>|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `flags` {0|1|2|4}

* Returns: {void}

***

#### `undefineVariable(name)`

##### Parameters

* `name` {string}

* Returns: {void}

***

#### `unsetAsiPosition(pos)`

##### Parameters

* `pos` {number}

* Returns: {void}

***

#### `walkArrayExpression(expression)`

##### Parameters

* `expression` {ArrayExpression}

* Returns: {void}

***

#### `walkArrayPattern(pattern)`

##### Parameters

* `pattern` {ArrayPattern}

* Returns: {void}

***

#### `walkArrowFunctionExpression(expression)`

##### Parameters

* `expression` {ArrowFunctionExpression}

* Returns: {void}

***

#### `walkAssignmentExpression(expression)`

##### Parameters

* `expression` {AssignmentExpression}

* Returns: {void}

***

#### `walkAssignmentPattern(pattern)`

##### Parameters

* `pattern` {AssignmentPattern}

* Returns: {void}

***

#### `walkAwaitExpression(expression)`

##### Parameters

* `expression` {AwaitExpression}

* Returns: {void}

***

#### `walkBinaryExpression(expression)`

##### Parameters

* `expression` {BinaryExpression}

* Returns: {void}

***

#### `walkBlockStatement(statement)`

##### Parameters

* `statement` {BlockStatement|StaticBlock}

* Returns: {void}

***

#### `walkCallExpression(expression)`

##### Parameters

* `expression` {CallExpression}

* Returns: {void}

***

#### `walkCatchClause(catchClause)`

##### Parameters

* `catchClause` {CatchClause}

* Returns: {void}

***

#### `walkChainExpression(expression)`

##### Parameters

* `expression` {ChainExpression}

* Returns: {void}

***

#### `walkClass(classy)`

##### Parameters

* `classy` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression}

* Returns: {void}

***

#### `walkClassDeclaration(statement)`

##### Parameters

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}

* Returns: {void}

***

#### `walkClassExpression(expression)`

##### Parameters

* `expression` {ClassExpression}

* Returns: {void}

***

#### `walkConditionalExpression(expression)`

##### Parameters

* `expression` {ConditionalExpression}

* Returns: {void}

***

#### `walkDoWhileStatement(statement)`

##### Parameters

* `statement` {DoWhileStatement}

* Returns: {void}

***

#### `walkExportDefaultDeclaration(statement)`

##### Parameters

* `statement` {ExportDefaultDeclaration}

* Returns: {void}

***

#### `walkExportNamedDeclaration(statement)`

##### Parameters

* `statement` {ExportNamedDeclaration}

* Returns: {void}

***

#### `walkExpression(expression)`

##### Parameters

* `expression` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}

* Returns: {void}

***

#### `walkExpressions(expressions)`

##### Parameters

* `expressions` {ClassExpression|Identifier|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement[]}

* Returns: {void}

***

#### `walkExpressionStatement(statement)`

##### Parameters

* `statement` {ExpressionStatement}

* Returns: {void}

***

#### `walkForInStatement(statement)`

##### Parameters

* `statement` {ForInStatement}

* Returns: {void}

***

#### `walkForOfStatement(statement)`

##### Parameters

* `statement` {ForOfStatement}

* Returns: {void}

***

#### `walkForStatement(statement)`

##### Parameters

* `statement` {ForStatement}

* Returns: {void}

***

#### `walkFunctionDeclaration(statement)`

##### Parameters

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}

* Returns: {void}

***

#### `walkFunctionExpression(expression)`

##### Parameters

* `expression` {FunctionExpression}

* Returns: {void}

***

#### `walkIdentifier(expression)`

##### Parameters

* `expression` {Identifier}

* Returns: {void}

***

#### `walkIfStatement(statement)`

##### Parameters

* `statement` {IfStatement}

* Returns: {void}

***

#### `walkImportExpression(expression)`

##### Parameters

* `expression` {ImportExpressionJavascriptParser}

* Returns: {void}

***

#### `walkLabeledStatement(statement)`

##### Parameters

* `statement` {LabeledStatement}

* Returns: {void}

***

#### `walkLeftRightExpression(expression)`

##### Parameters

* `expression` {BinaryExpression|LogicalExpression}

* Returns: {void}

***

#### `walkLogicalExpression(expression)`

##### Parameters

* `expression` {LogicalExpression}

* Returns: {void}

***

#### `walkMemberExpression(expression)`

##### Parameters

* `expression` {MemberExpression}

* Returns: {void}

***

#### `walkMemberExpressionWithExpressionName(expression, name, rootInfo, members, onUnhandled)`

##### Parameters

* `expression` {MemberExpression}
* `name` {string}
* `rootInfo` {string|VariableInfo}
* `members` {string[]}
* `onUnhandled` {Function}
  * Returns: {R}

* Returns: {void}

***

#### `walkMetaProperty(metaProperty)`

##### Parameters

* `metaProperty` {MetaProperty}

* Returns: {void}

***

#### `walkNestedStatement(statement)`

##### Parameters

* `statement` {Statement}

* Returns: {void}

Walks a statements that is nested within a parent statement
and can potentially be a non-block statement.
This enforces the nested statement to never be in ASI position.

***

#### `walkNewExpression(expression)`

##### Parameters

* `expression` {NewExpression}

* Returns: {void}

***

#### `walkObjectExpression(expression)`

##### Parameters

* `expression` {ObjectExpression}

* Returns: {void}

***

#### `walkObjectPattern(pattern)`

##### Parameters

* `pattern` {ObjectPattern}

* Returns: {void}

***

#### `walkPattern(pattern)`

##### Parameters

* `pattern` {Pattern}

* Returns: {void}

***

#### `walkProperty(prop)`

##### Parameters

* `prop` {Property|SpreadElement}

* Returns: {void}

***

#### `walkRestElement(pattern)`

##### Parameters

* `pattern` {RestElement}

* Returns: {void}

***

#### `walkReturnStatement(statement)`

##### Parameters

* `statement` {ReturnStatement}

* Returns: {void}

***

#### `walkSequenceExpression(expression)`

##### Parameters

* `expression` {SequenceExpression}

* Returns: {void}

***

#### `walkSpreadElement(expression)`

##### Parameters

* `expression` {SpreadElement}

* Returns: {void}

***

#### `walkStatement(statement)`

##### Parameters

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}

* Returns: {void}

***

#### `walkStatements(statements)`

##### Parameters

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}

* Returns: {void}

Walking iterates the statements and expressions and processes them

***

#### `walkSwitchCases(switchCases)`

##### Parameters

* `switchCases` {SwitchCase[]}

* Returns: {void}

***

#### `walkSwitchStatement(statement)`

##### Parameters

* `statement` {SwitchStatement}

* Returns: {void}

***

#### `walkTaggedTemplateExpression(expression)`

##### Parameters

* `expression` {TaggedTemplateExpression}

* Returns: {void}

***

#### `walkTemplateLiteral(expression)`

##### Parameters

* `expression` {TemplateLiteral}

* Returns: {void}

***

#### `walkTerminatingStatement(statement)`

##### Parameters

* `statement` {ReturnStatement|ThrowStatement}

* Returns: {void}

***

#### `walkThisExpression(expression)`

##### Parameters

* `expression` {ThisExpression}

* Returns: {void}

***

#### `walkThrowStatement(statement)`

##### Parameters

* `statement` {ThrowStatement}

* Returns: {void}

***

#### `walkTryStatement(statement)`

##### Parameters

* `statement` {TryStatement}

* Returns: {void}

***

#### `walkUnaryExpression(expression)`

##### Parameters

* `expression` {UnaryExpression}

* Returns: {void}

***

#### `walkUpdateExpression(expression)`

##### Parameters

* `expression` {UpdateExpression}

* Returns: {void}

***

#### `walkVariableDeclaration(statement)`

##### Parameters

* `statement` {VariableDeclaration}

* Returns: {void}

***

#### `walkWhileStatement(statement)`

##### Parameters

* `statement` {WhileStatement}

* Returns: {void}

***

#### `walkWithStatement(statement)`

##### Parameters

* `statement` {WithStatement}

* Returns: {void}

***

#### `walkYieldExpression(expression)`

##### Parameters

* `expression` {YieldExpression}

* Returns: {void}

***

#### Static method: `extend(plugins)`

##### Parameters

* `...plugins` {Function[]}

* Returns: {JavascriptParser}
