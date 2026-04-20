# javascript

## Class: `EnableChunkLoadingPlugin`

### Constructors

#### `new EnableChunkLoadingPlugin(type)`

* `type` {string}
* Returns: {EnableChunkLoadingPlugin}

Creates an instance of EnableChunkLoadingPlugin.

### Properties

* `type` {string}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `checkEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

Checks enabled.

#### Static method: `setEnabled(compiler, type)`

* `compiler` {Compiler}
* `type` {string}
* Returns: {void}

Updates enabled using the provided compiler.

***

## Class: `JavascriptParser`

### Extends

- {ParserClass}

### Constructors

#### `new JavascriptParser([sourceType][, options])`

* `sourceType` {"module"|"auto"|"script"}
* `options` {object}
* Returns: {JavascriptParser}

Creates an instance of JavascriptParser.

### Properties

* `comments` {CommentJavascriptParser[]}
* `currentTagData` {Record|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `destructuringAssignmentProperties` {WeakMap}
* `hooks` {Readonly}
* `magicCommentContext` {Context}
* `options` {object}
* `prevStatement` {Identifier|ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* `scope` {ScopeInfo}
* `semicolons` {Set}
* `sourceType` {"module"|"auto"|"script"}
* `state` {JavascriptParserState}
* `statementPath` {StatementPathItem[]}
* `ALLOWED_MEMBER_TYPES_ALL` {3}
* `ALLOWED_MEMBER_TYPES_CALL_EXPRESSION` {1}
* `ALLOWED_MEMBER_TYPES_EXPRESSION` {2}
* `getImportAttributes` {object}
* `VariableInfo` {VariableInfo}
* `VariableInfoFlags` {Readonly}

### Methods

#### `blockPreWalkClassDeclaration(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}
* Returns: {void}

Block pre walk class declaration.

#### `blockPreWalkExportDefaultDeclaration(statement)`

* `statement` {ExportDefaultDeclaration}
* Returns: {void}

Block pre walk export default declaration.

#### `blockPreWalkExportNamedDeclaration(statement)`

* `statement` {ExportNamedDeclaration}
* Returns: {void}

Block pre walk export named declaration.

#### `blockPreWalkExpressionStatement(statement)`

* `statement` {ExpressionStatement}
* Returns: {void}

Block pre walk expression statement.

#### `blockPreWalkStatement(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* Returns: {void}

Block pre walk statement.

#### `blockPreWalkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Block pre walking iterates the scope for block variable declarations

#### `blockPreWalkVariableDeclaration(statement)`

* `statement` {VariableDeclaration}
* Returns: {void}

Block pre walk variable declaration.

#### `callHooksForExpression(hookMap, expr, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `expr` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `args` {AsArray}
* Returns: {R}

Call hooks for expression.

#### `callHooksForExpressionWithFallback(hookMap, expr, fallback, defined, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `expr` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray}
* Returns: {R}

Call hooks for expression with fallback.

#### `callHooksForInfo(hookMap, info, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `info` {ExportedVariableInfo}
* `args` {AsArray}
* Returns: {R}

Call hooks for info.

#### `callHooksForInfoWithFallback(hookMap, info, fallback, defined, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `info` {ExportedVariableInfo}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray}
* Returns: {R}

Call hooks for info with fallback.

#### `callHooksForName(hookMap, name, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `name` {string}
* `args` {AsArray}
* Returns: {R}

Call hooks for name.

#### `callHooksForNameWithFallback(hookMap, name, fallback, defined, args)`

###### T

`T`

###### R

`R`
* `hookMap` {HookMap}
* `name` {string}
* `fallback` {object}
* `defined` {object}
* `args` {AsArray}
* Returns: {R}

Call hooks for name with fallback.

#### `defineVariable(name)`

* `name` {string}
* Returns: {void}

Processes the provided name.

#### `destructuringAssignmentPropertiesFor(node)`

* `node` {Expression}
* Returns: {Set}

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

Destructuring assignment properties for.

#### `detectMode(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration|Directive[]}
* Returns: {void}

Processes the provided statement.

#### `enterArrayPattern(pattern, onIdent)`

* `pattern` {ArrayPattern}
* `onIdent` {object}
* Returns: {void}

Enter array pattern.

#### `enterAssignmentPattern(pattern, onIdent)`

* `pattern` {AssignmentPattern}
* `onIdent` {object}
* Returns: {void}

Enter assignment pattern.

#### `enterDeclaration(declaration, onIdent)`

* `declaration` {Declaration}
* `onIdent` {object}
* Returns: {void}

Processes the provided declaration.

#### `enterDestructuringAssignment(pattern, expression)`

* `pattern` {Pattern}
* `expression` {Expression}
* Returns: {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression}

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

Enter destructuring assignment.

#### `enterIdentifier(pattern, onIdent)`

* `pattern` {Identifier}
* `onIdent` {object}
* Returns: {void}

Processes the provided pattern.

#### `enterObjectPattern(pattern, onIdent)`

* `pattern` {ObjectPattern}
* `onIdent` {object}
* Returns: {void}

Enter object pattern.

#### `enterPattern(pattern, onIdent)`

* `pattern` {Identifier|Property|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern}
* `onIdent` {object}
* Returns: {void}

Processes the provided pattern.

#### `enterPatterns(patterns, onIdent)`

* `patterns` {string|Identifier|Property|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `onIdent` {object}
* Returns: {void}

Processes the provided pattern.

#### `enterRestElement(pattern, onIdent)`

* `pattern` {RestElement}
* `onIdent` {object}
* Returns: {void}

Enter rest element.

#### `evaluate(source)`

* `source` {string}
* Returns: {BasicEvaluatedExpression}

Returns evaluation result.

#### `evaluatedVariable(tagInfo)`

* `tagInfo` {TagInfo}
* Returns: {VariableInfo}

Evaluated variable.

#### `evaluateExpression(expression)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}
* Returns: {BasicEvaluatedExpression}

Evaluate expression.

#### `extractMemberExpressionChain(expression)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* Returns: {object}

Extract member expression chain.

#### `getComments(range)`

* `range` {number|number}
* Returns: {CommentJavascriptParser[]}

Returns comments in the range.

#### `getFreeInfoFromVariable(varName)`

* `varName` {string}
* Returns: {object}

Gets free info from variable.

#### `getMemberExpressionInfo(expression, allowedTypes)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|Super}
* `allowedTypes` {number}
* Returns: {CallExpressionInfo|ExpressionExpressionInfo}

Gets member expression info.

#### `getNameForExpression(expression)`

* `expression` {Expression}
* Returns: {object}

Gets name for expression.

#### `getNameInfoFromVariable(varName)`

* `varName` {string}
* Returns: {object}

Gets name info from variable.

#### `getRenameIdentifier(expr)`

* `expr` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement}
* Returns: {string|VariableInfo}

Gets rename identifier.

#### `getTagData(name, tag)`

* `name` {string}
* `tag` {symbol}
* Returns: {Record|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

Returns tag data.

#### `getVariableInfo(name)`

* `name` {string}
* Returns: {ExportedVariableInfo}

Gets variable info.

#### `inBlockScope(fn[, inExecutedPath])`

* `fn` {object}
* `inExecutedPath` {boolean}
* Returns: {void}

Processes the provided fn.

#### `inClassScope(hasThis, params, fn)`

* `hasThis` {boolean}
* `params` {Identifier[]}
* `fn` {object}
* Returns: {void}

Processes the provided has thi.

#### `inFunctionScope(hasThis, params, fn)`

* `hasThis` {boolean}
* `params` {string|Identifier|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {object}
* Returns: {void}

Processes the provided has thi.

#### `inScope(params, fn)`

> Stability: 0 - Deprecated

* `params` {string|Identifier|Property|MemberExpression|ObjectPattern|ArrayPattern|RestElement|AssignmentPattern[]}
* `fn` {object}
* Returns: {void}

Processes the provided param.

#### `isAsiPosition(pos)`

* `pos` {number}
* Returns: {boolean}

Checks whether this javascript parser is asi position.

#### `isPure(expr, commentsStartPos)`

* `expr` {Identifier|ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|FunctionDeclaration|MaybeNamedFunctionDeclaration|PrivateIdentifier|VariableDeclaration}
* `commentsStartPos` {number}
* Returns: {boolean}

Checks whether this javascript parser is pure.

#### `isStatementLevelExpression(expr)`

* `expr` {Expression}
* Returns: {boolean}

Checks whether this javascript parser is statement level expression.

#### `isVariableDefined(name)`

* `name` {string}
* Returns: {boolean}

Checks whether this javascript parser is variable defined.

#### `modulePreWalkExportAllDeclaration(statement)`

* `statement` {ExportAllDeclaration}
* Returns: {void}

Module pre walk export all declaration.

#### `modulePreWalkExportNamedDeclaration(statement)`

* `statement` {ExportNamedDeclaration}
* Returns: {void}

Module pre walk export named declaration.

#### `modulePreWalkImportDeclaration(statement)`

* `statement` {ImportDeclaration}
* Returns: {void}

Module pre walk import declaration.

#### `modulePreWalkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Module pre walking iterates the scope for import entries

#### `parse(source, state)`

* `source` {string|Buffer|PreparsedAst}
* `state` {ParserState}
* Returns: {ParserState}

Parses the provided source and updates the parser state.

#### `parseCalculatedString(expression)`

* `expression` {Expression}
* Returns: {CalculatedStringResult}

Parses calculated string.

#### `parseCommentOptions(range)`

* `range` {number|number}
* Returns: {object}

Parses comment options.

#### `parseString(expression)`

* `expression` {Expression}
* Returns: {string}

Returns parsed string.

#### `preWalkAssignmentExpression(expression)`

* `expression` {AssignmentExpression}
* Returns: {void}

Pre walk assignment expression.

#### `preWalkBlockStatement(statement)`

* `statement` {BlockStatement}
* Returns: {void}

Pre walk block statement.

#### `preWalkCatchClause(catchClause)`

* `catchClause` {CatchClause}
* Returns: {void}

Pre walk catch clause.

#### `preWalkDoWhileStatement(statement)`

* `statement` {DoWhileStatement}
* Returns: {void}

Pre walk do while statement.

#### `preWalkForInStatement(statement)`

* `statement` {ForInStatement}
* Returns: {void}

Pre walk for in statement.

#### `preWalkForOfStatement(statement)`

* `statement` {ForOfStatement}
* Returns: {void}

Pre walk for of statement.

#### `preWalkForStatement(statement)`

* `statement` {ForStatement}
* Returns: {void}

Pre walk for statement.

#### `preWalkFunctionDeclaration(statement)`

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}
* Returns: {void}

Pre walk function declaration.

#### `preWalkIfStatement(statement)`

* `statement` {IfStatement}
* Returns: {void}

Pre walk if statement.

#### `preWalkLabeledStatement(statement)`

* `statement` {LabeledStatement}
* Returns: {void}

Pre walk labeled statement.

#### `preWalkStatement(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* Returns: {void}

Walking iterates the statements and expressions and processes them

#### `preWalkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Pre walking iterates the scope for variable declarations

#### `preWalkSwitchCases(switchCases)`

* `switchCases` {SwitchCase[]}
* Returns: {void}

Pre walk switch cases.

#### `preWalkSwitchStatement(statement)`

* `statement` {SwitchStatement}
* Returns: {void}

Pre walk switch statement.

#### `preWalkTryStatement(statement)`

* `statement` {TryStatement}
* Returns: {void}

Pre walk try statement.

#### `preWalkVariableDeclaration(statement)`

* `statement` {VariableDeclaration}
* Returns: {void}

Pre walk variable declaration.

#### `preWalkVariableDeclarator(declarator)`

* `declarator` {VariableDeclarator}
* Returns: {void}

Pre walk variable declarator.

#### `preWalkWhileStatement(statement)`

* `statement` {WhileStatement}
* Returns: {void}

Pre walk while statement.

#### `preWalkWithStatement(statement)`

* `statement` {WithStatement}
* Returns: {void}

Pre walk with statement.

#### `setAsiPosition(pos)`

* `pos` {number}
* Returns: {void}

Updates asi position using the provided po.

#### `setVariable(name, variableInfo)`

* `name` {string}
* `variableInfo` {ExportedVariableInfo}
* Returns: {void}

Updates variable using the provided name.

#### `tagVariable(name, tag[, data][, flags])`

* `name` {string}
* `tag` {symbol}
* `data` {Record|TopLevelSymbol|HarmonySettings|ImportSettings|CommonJsImportSettings|CompatibilitySettings|HarmonySpecifierGuards}
* `flags` {0|1|2|4}
* Returns: {void}

Processes the provided name.

#### `undefineVariable(name)`

* `name` {string}
* Returns: {void}

Processes the provided name.

#### `unsetAsiPosition(pos)`

* `pos` {number}
* Returns: {void}

Unset asi position.

#### `walkArrayExpression(expression)`

* `expression` {ArrayExpression}
* Returns: {void}

Walk array expression.

#### `walkArrayPattern(pattern)`

* `pattern` {ArrayPattern}
* Returns: {void}

Walk array pattern.

#### `walkArrowFunctionExpression(expression)`

* `expression` {ArrowFunctionExpression}
* Returns: {void}

Walk arrow function expression.

#### `walkAssignmentExpression(expression)`

* `expression` {AssignmentExpression}
* Returns: {void}

Walk assignment expression.

#### `walkAssignmentPattern(pattern)`

* `pattern` {AssignmentPattern}
* Returns: {void}

Walk assignment pattern.

#### `walkAwaitExpression(expression)`

* `expression` {AwaitExpression}
* Returns: {void}

Walk await expression.

#### `walkBinaryExpression(expression)`

* `expression` {BinaryExpression}
* Returns: {void}

Walk binary expression.

#### `walkBlockStatement(statement)`

* `statement` {BlockStatement|StaticBlock}
* Returns: {void}

Walk block statement.

#### `walkCallExpression(expression)`

* `expression` {CallExpression}
* Returns: {void}

Walk call expression.

#### `walkCatchClause(catchClause)`

* `catchClause` {CatchClause}
* Returns: {void}

Processes the provided catch clause.

#### `walkChainExpression(expression)`

* `expression` {ChainExpression}
* Returns: {void}

Walk chain expression.

#### `walkClass(classy)`

* `classy` {ClassDeclaration|MaybeNamedClassDeclaration|ClassExpression}
* Returns: {void}

Processes the provided classy.

#### `walkClassDeclaration(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration}
* Returns: {void}

Walk class declaration.

#### `walkClassExpression(expression)`

* `expression` {ClassExpression}
* Returns: {void}

Walk class expression.

#### `walkConditionalExpression(expression)`

* `expression` {ConditionalExpression}
* Returns: {void}

Walk conditional expression.

#### `walkDoWhileStatement(statement)`

* `statement` {DoWhileStatement}
* Returns: {void}

Walk do while statement.

#### `walkExportDefaultDeclaration(statement)`

* `statement` {ExportDefaultDeclaration}
* Returns: {void}

Walk export default declaration.

#### `walkExportNamedDeclaration(statement)`

* `statement` {ExportNamedDeclaration}
* Returns: {void}

Walk export named declaration.

#### `walkExpression(expression)`

* `expression` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|PrivateIdentifier|SpreadElement|Super}
* Returns: {void}

Processes the provided expression.

#### `walkExpressions(expressions)`

* `expressions` {Identifier|ClassExpression|SimpleLiteral|RegExpLiteral|BigIntLiteral|ArrayExpression|ArrowFunctionExpression|AssignmentExpression|AwaitExpression|BinaryExpression|SimpleCallExpression|NewExpression|ChainExpression|ConditionalExpression|FunctionExpression|ImportExpression|LogicalExpression|MemberExpression|MetaProperty|ObjectExpression|SequenceExpression|TaggedTemplateExpression|TemplateLiteral|ThisExpression|UnaryExpression|UpdateExpression|YieldExpression|SpreadElement[]}
* Returns: {void}

Processes the provided expression.

#### `walkExpressionStatement(statement)`

* `statement` {ExpressionStatement}
* Returns: {void}

Walk expression statement.

#### `walkForInStatement(statement)`

* `statement` {ForInStatement}
* Returns: {void}

Walk for in statement.

#### `walkForOfStatement(statement)`

* `statement` {ForOfStatement}
* Returns: {void}

Walk for of statement.

#### `walkForStatement(statement)`

* `statement` {ForStatement}
* Returns: {void}

Walk for statement.

#### `walkFunctionDeclaration(statement)`

* `statement` {FunctionDeclaration|MaybeNamedFunctionDeclaration}
* Returns: {void}

Walk function declaration.

#### `walkFunctionExpression(expression)`

* `expression` {FunctionExpression}
* Returns: {void}

Walk function expression.

#### `walkIdentifier(expression)`

* `expression` {Identifier}
* Returns: {void}

Processes the provided expression.

#### `walkIfStatement(statement)`

* `statement` {IfStatement}
* Returns: {void}

Processes the provided statement.

#### `walkImportExpression(expression)`

* `expression` {ImportExpressionJavascriptParser}
* Returns: {void}

Walk import expression.

#### `walkLabeledStatement(statement)`

* `statement` {LabeledStatement}
* Returns: {void}

Walk labeled statement.

#### `walkLeftRightExpression(expression)`

* `expression` {BinaryExpression|LogicalExpression}
* Returns: {void}

Walk left right expression.

#### `walkLogicalExpression(expression)`

* `expression` {LogicalExpression}
* Returns: {void}

Walk logical expression.

#### `walkMemberExpression(expression)`

* `expression` {MemberExpression}
* Returns: {void}

Walk member expression.

#### `walkMemberExpressionWithExpressionName(expression, name, rootInfo, members, onUnhandled)`

###### R

`R`
* `expression` {MemberExpression}
* `name` {string}
* `rootInfo` {string|VariableInfo}
* `members` {string[]}
* `onUnhandled` {object}
* Returns: {void}

Walk member expression with expression name.

#### `walkMetaProperty(metaProperty)`

* `metaProperty` {MetaProperty}
* Returns: {void}

Walk meta property.

#### `walkNestedStatement(statement)`

* `statement` {Statement}
* Returns: {void}

Walks a statements that is nested within a parent statement
and can potentially be a non-block statement.
This enforces the nested statement to never be in ASI position.

#### `walkNewExpression(expression)`

* `expression` {NewExpression}
* Returns: {void}

Walk new expression.

#### `walkObjectExpression(expression)`

* `expression` {ObjectExpression}
* Returns: {void}

Walk object expression.

#### `walkObjectPattern(pattern)`

* `pattern` {ObjectPattern}
* Returns: {void}

Walk object pattern.

#### `walkPattern(pattern)`

* `pattern` {Pattern}
* Returns: {void}

Processes the provided pattern.

#### `walkProperty(prop)`

* `prop` {Property|SpreadElement}
* Returns: {void}

Processes the provided prop.

#### `walkRestElement(pattern)`

* `pattern` {RestElement}
* Returns: {void}

Processes the provided pattern.

#### `walkReturnStatement(statement)`

* `statement` {ReturnStatement}
* Returns: {void}

Walk return statement.

#### `walkSequenceExpression(expression)`

* `expression` {SequenceExpression}
* Returns: {void}

Walk sequence expression.

#### `walkSpreadElement(expression)`

* `expression` {SpreadElement}
* Returns: {void}

Walk spread element.

#### `walkStatement(statement)`

* `statement` {ClassDeclaration|MaybeNamedClassDeclaration|FunctionDeclaration|MaybeNamedFunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration}
* Returns: {void}

Processes the provided statement.

#### `walkStatements(statements)`

* `statements` {ClassDeclaration|FunctionDeclaration|ImportDeclaration|ExportNamedDeclaration|ExportDefaultDeclaration|ExportAllDeclaration|ExpressionStatement|BlockStatement|StaticBlock|EmptyStatement|DebuggerStatement|WithStatement|ReturnStatement|LabeledStatement|BreakStatement|ContinueStatement|IfStatement|SwitchStatement|ThrowStatement|TryStatement|WhileStatement|DoWhileStatement|ForStatement|ForInStatement|ForOfStatement|VariableDeclaration[]}
* Returns: {void}

Walking iterates the statements and expressions and processes them

#### `walkSwitchCases(switchCases)`

* `switchCases` {SwitchCase[]}
* Returns: {void}

Processes the provided switch case.

#### `walkSwitchStatement(statement)`

* `statement` {SwitchStatement}
* Returns: {void}

Walk switch statement.

#### `walkTaggedTemplateExpression(expression)`

* `expression` {TaggedTemplateExpression}
* Returns: {void}

Walk tagged template expression.

#### `walkTemplateLiteral(expression)`

* `expression` {TemplateLiteral}
* Returns: {void}

Walk template literal.

#### `walkTerminatingStatement(statement)`

* `statement` {ReturnStatement|ThrowStatement}
* Returns: {void}

Walk terminating statement.

#### `walkThisExpression(expression)`

* `expression` {ThisExpression}
* Returns: {void}

Walk this expression.

#### `walkThrowStatement(statement)`

* `statement` {ThrowStatement}
* Returns: {void}

Walk throw statement.

#### `walkTryStatement(statement)`

* `statement` {TryStatement}
* Returns: {void}

Walk try statement.

#### `walkUnaryExpression(expression)`

* `expression` {UnaryExpression}
* Returns: {void}

Walk unary expression.

#### `walkUpdateExpression(expression)`

* `expression` {UpdateExpression}
* Returns: {void}

Walk update expression.

#### `walkVariableDeclaration(statement)`

* `statement` {VariableDeclaration}
* Returns: {void}

Walk variable declaration.

#### `walkWhileStatement(statement)`

* `statement` {WhileStatement}
* Returns: {void}

Walk while statement.

#### `walkWithStatement(statement)`

* `statement` {WithStatement}
* Returns: {void}

Walk with statement.

#### `walkYieldExpression(expression)`

* `expression` {YieldExpression}
* Returns: {void}

Walk yield expression.

#### Static method: `extend(plugins)`

* `plugins` {object[]}
* Returns: {JavascriptParser}

Returns parser.
