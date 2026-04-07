# Externals

<!-- type=misc -->

## `Externals`

* Type: {string|RegExp|ExternalItemObjectKnown & ExternalItemObjectUnknown|Function|Function|ExternalItem[]}

## Class: `ExternalsPlugin`

### Constructors

#### `new ExternalsPlugin(type, externals)`

##### Parameters

* `type` {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|Function}
* `externals` {Externals}

* Returns: {ExternalsPlugin}

### Properties

#### `externals`

* Type: {Externals}

#### `type`

* Type: {"asset"|"module"|"css-import"|"css-url"|"global"|"import"|"commonjs"|"jsonp"|"promise"|"this"|"var"|"assign"|"window"|"self"|"commonjs2"|"commonjs-module"|"commonjs-static"|"amd"|"amd-require"|"umd"|"umd2"|"system"|"module-import"|"script"|"node-commonjs"|Function}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
