# HashedModule

<!-- type=misc -->

## `HashedModuleIdsPluginOptions`

### Properties

#### `context`

* Type: {string} Optional.

The context directory for creating names.

***

#### `hashDigest`

* Type: {"ascii"|"utf8"|"utf-8"|"utf16le"|"utf-16le"|"ucs2"|"ucs-2"|"base64"|"base64url"|"latin1"|"binary"|"hex"} Optional.

The encoding to use when generating the hash, defaults to 'base64'. All encodings from Node.JS' hash.digest are supported.

***

#### `hashDigestLength`

* Type: {number} Optional.

The prefix length of the hash digest to use, defaults to 4.

***

#### `hashFunction`

* Type: {HashFunction} Optional.

The hashing algorithm to use, defaults to 'md4'. All functions from Node.JS' crypto.createHash are supported.

## Class: `HashedModuleIdsPlugin`

### Constructors

#### `new HashedModuleIdsPlugin([options])`

##### Parameters

* `options` {HashedModuleIdsPluginOptions}

* Returns: {HashedModuleIdsPlugin}

### Properties

#### `options`

* Type: {HashedModuleIdsPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
