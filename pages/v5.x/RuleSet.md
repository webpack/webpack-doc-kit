# RuleSet

<!-- type=misc -->

## `RuleSetRule`

A rule description with conditions and effects for modules.

### Properties

#### `assert`

* Type: {object} Optional.

Match on import assertions of the dependency.

##### Index Signature

\[`index`: {string}\]: {RuleSetConditionOrConditions}

***

#### `compiler`

* Type: {string|RegExp|RuleSetLogicalConditions|Function|RuleSetCondition[]} Optional.

Match the child compiler name.

***

#### `dependency`

* Type: {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|Function} Optional.

Match dependency type.

***

#### `descriptionData`

* Type: {object} Optional.

Match values of properties in the description file (usually package.json).

##### Index Signature

\[`index`: {string}\]: {RuleSetConditionOrConditions}

***

#### `enforce`

* Type: {"pre"|"post"} Optional.

Enforce this rule as pre or post step.

***

#### `exclude`

* Type: {string|RegExp|RuleSetLogicalConditionsAbsolute|Function|RuleSetConditionAbsolute[]} Optional.

Shortcut for resource.exclude.

***

#### `extractSourceMap`

* Type: {boolean} Optional.

Enable/Disable extracting source map.

***

#### `generator`

* Type: {object} Optional.

The options for the module generator.

##### Index Signature

\[`index`: {string}\]: {any}

***

#### `include`

* Type: {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|Function} Optional.

Shortcut for resource.include.

***

#### `issuer`

* Type: {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|Function} Optional.

Match the issuer of the module (The module pointing to this module).

***

#### `issuerLayer`

* Type: {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|Function} Optional.

Match layer of the issuer of this module (The module pointing to this module).

***

#### `layer`

* Type: {string} Optional.

Specifies the layer in which the module should be placed in.

***

#### `loader`

* Type: {string} Optional.

Shortcut for use.loader.

***

#### `mimetype`

* Type: {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|Function} Optional.

Match module mimetype when load from Data URI.

***

#### `oneOf`

* Type: {false|""|0|RuleSetRule[]} Optional.

Only execute the first matching rule in this array.

***

#### `options`

* Type: {string|object} Optional.

Shortcut for use.options.

***

#### `parser`

* Type: {object} Optional.

Options for parsing.

##### Index Signature

\[`index`: {string}\]: {any}

***

#### `realResource`

* Type: {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|Function} Optional.

Match the real resource path of the module.

***

#### `resolve`

* Type: {ResolveOptions} Optional.

Options for the resolver.

***

#### `resource`

* Type: {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|Function} Optional.

Match the resource path of the module.

***

#### `resourceFragment`

* Type: {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|Function} Optional.

Match the resource fragment of the module.

***

#### `resourceQuery`

* Type: {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|Function} Optional.

Match the resource query of the module.

***

#### `rules`

* Type: {false|""|0|RuleSetRule[]} Optional.

Match and execute these rules when this rule is matched.

***

#### `scheme`

* Type: {string|RegExp|RuleSetLogicalConditions|RuleSetCondition[]|Function} Optional.

Match module scheme.

***

#### `sideEffects`

* Type: {boolean} Optional.

Flags a module as with or without side effects.

***

#### `test`

* Type: {string|RegExp|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]|Function} Optional.

Shortcut for resource.test.

***

#### `type`

* Type: {string} Optional.

Module type to use for the module.

***

#### `use`

* Type: {string|RuleSetUseFunction|string|false|0|RuleSetUseFunction|object[]|object} Optional.

Modifiers applied to the module when rule is matched.

##### Union Members

{string}

***

{RuleSetUseFunction}

***

{string|false|0|RuleSetUseFunction|object[]}

***

###### Type Literal

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

***

#### `with`

* Type: {object} Optional.

Match on import attributes of the dependency.

##### Index Signature

\[`index`: {string}\]: {RuleSetConditionOrConditions}

## `RuleSetCondition`

* Type: {string|RegExp|Function|RuleSetLogicalConditions|RuleSetCondition[]}

## `RuleSetConditionAbsolute`

* Type: {string|RegExp|Function|RuleSetLogicalConditionsAbsolute|RuleSetConditionAbsolute[]}

## `RuleSetUse`

* Type: {string|undefined|null|string|false|0|RuleSetUseFunction|object[]|RuleSetUseFunction|object}

### Union Members

{string}

***

{undefined|null|string|false|0|RuleSetUseFunction|object[]}

***

{RuleSetUseFunction}

***

#### Type Literal

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.

## `RuleSetUseFunction`

* Type: {Function}

### Parameters

* `data` {EffectData}

* Returns: {string|RuleSetUseFunction|object|undefined|null|string|false|0|RuleSetUseFunction|object[]}

## `RuleSetUseItem`

* Type: {string|RuleSetUseFunction|object}

### Union Members

{string}

***

{RuleSetUseFunction}

***

#### Type Literal

{object}

* `ident` {string} Unique loader options identifier.
* `loader` {string} Loader name.
* `options` {string|object} Loader options.
