# LibraryOptions

<!-- type=misc -->

## `LibraryOptions`

Options for library.

### Properties

#### `amdContainer`

* Type: {string} Optional.

Add a container for define/require functions in the AMD module.

***

#### `auxiliaryComment`

* Type: {string|LibraryCustomUmdCommentObject} Optional.

Add a comment in the UMD wrapper.

***

#### `export`

* Type: {string|string[]} Optional.

Specify which export should be exposed as library.

***

#### `name`

* Type: {string|string[]|LibraryCustomUmdObject} Optional.

The name of the library (some types allow unnamed libraries too).

***

#### `type`

* Type: {string}

Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).

***

#### `umdNamedDefine`

* Type: {boolean} Optional.

If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
