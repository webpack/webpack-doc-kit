# Dll

<!-- type=misc -->

## `DllPluginOptions`

### Properties

#### `context`

* Type: {string} Optional.

Context of requests in the manifest file (defaults to the webpack context).

***

#### `entryOnly`

* Type: {boolean} Optional.

If true, only entry points will be exposed (default: true).

***

#### `format`

* Type: {boolean} Optional.

If true, manifest json file (output) will be formatted.

***

#### `name`

* Type: {string} Optional.

Name of the exposed dll function (external name, use value of 'output.library').

***

#### `path`

* Type: {string}

Absolute path to the manifest json file (output).

***

#### `type`

* Type: {string} Optional.

Type of the dll bundle (external type, use value of 'output.libraryTarget').

## Class: `DllPlugin`

### Constructors

#### `new DllPlugin(options)`

##### Parameters

* `options` {DllPluginOptions}

* Returns: {DllPlugin}

### Properties

#### `options`

* Type: {DllPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## Class: `DllReferencePlugin`

### Constructors

#### `new DllReferencePlugin(options)`

##### Parameters

* `options` {DllReferencePluginOptions}

* Returns: {DllReferencePlugin}

### Properties

#### `options`

* Type: {DllReferencePluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `DllReferencePluginOptionsContent`

The mappings from request to module info.

### Indexable

> \[`k`: {string}\]: {object}

Module info.

## `DllReferencePluginOptionsManifest`

An object containing content, name and type.

### Properties

#### `content`

* Type: {DllReferencePluginOptionsContent}

The mappings from request to module info.

#### `name`

* Type: {string} Optional.

The name where the dll is exposed (external name).

#### `type`

* Type: {DllReferencePluginOptionsSourceType} Optional.

The type how the dll is exposed (external type).

## `DllReferencePluginOptions`

* Type: {object|object}

### Union Members

#### Type Literal

{object}

* `context` {string} Context of requests in the manifest (or content property) as absolute path.
* `extensions` {string[]} Extensions used to resolve modules in the dll bundle (only used when using 'scope').
* `manifest` {string|DllReferencePluginOptionsManifest} An object containing content and name or a string to the absolute path of the JSON manifest to be loaded upon compilation.
* `name` {string} The name where the dll is exposed (external name, defaults to manifest.name).
* `scope` {string} Prefix which is used for accessing the content of the dll.
* `sourceType` {DllReferencePluginOptionsSourceType} How the dll is exposed (libraryTarget, defaults to manifest.type).
* `type` {"require"|"object"} The way how the export of the dll bundle is used.

***

#### Type Literal

{object}

* `content` {DllReferencePluginOptionsContent} The mappings from request to module info.
* `context` {string} Context of requests in the manifest (or content property) as absolute path.
* `extensions` {string[]} Extensions used to resolve modules in the dll bundle (only used when using 'scope').
* `name` {string} The name where the dll is exposed (external name).
* `scope` {string} Prefix which is used for accessing the content of the dll.
* `sourceType` {DllReferencePluginOptionsSourceType} How the dll is exposed (libraryTarget).
* `type` {"require"|"object"} The way how the export of the dll bundle is used.

## `DllReferencePluginOptionsSourceType`

* Type: {"var"|"assign"|"this"|"window"|"global"|"commonjs"|"commonjs2"|"commonjs-module"|"amd"|"amd-require"|"umd"|"umd2"|"jsonp"|"system"}

The type how the dll is exposed (external type).
