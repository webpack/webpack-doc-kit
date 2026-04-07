# IgnorePlugin

<!-- type=misc -->

## Class: `IgnorePlugin`

### Constructors

#### `new IgnorePlugin(options)`

##### Parameters

* `options` {IgnorePluginOptions}

* Returns: {IgnorePlugin}

### Properties

#### `options`

* Type: {IgnorePluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### `checkIgnore(resolveData)`

##### Parameters

* `resolveData` {BeforeContextResolveData|ResolveData}

* Returns: {false}

Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.

## `IgnorePluginOptions`

* Type: {object|object}

### Union Members

#### Type Literal

{object}

* `contextRegExp` {RegExp} A RegExp to test the context (directory) against.
* `resourceRegExp` {RegExp} A RegExp to test the request against.

***

#### Type Literal

{object}

* `checkResource` {CheckResourceFn} A filter function for resource and context.
