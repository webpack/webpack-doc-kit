# Template

<!-- type=misc -->

## Class: `Template`

### Constructors

#### `new Template()`

* Returns: {Template}

### Properties

#### `NUMBER_OF_IDENTIFIER_CONTINUATION_CHARS`

* Type: {number}

***

#### `NUMBER_OF_IDENTIFIER_START_CHARS`

* Type: {number}

### Methods

#### Static method: `asString(str)`

##### Parameters

* `str` {string|string[]}

* Returns: {string}

***

#### Static method: `getFunctionContent(fn)`

##### Parameters

* `fn` {Stringable}

* Returns: {string}

***

#### Static method: `getModulesArrayBounds(modules)`

##### Parameters

* `modules` {WithId[]}

* Returns: {false|[number, number]}

***

#### Static method: `indent(s)`

##### Parameters

* `s` {string|string[]}

* Returns: {string}

***

#### Static method: `numberToIdentifier(n)`

##### Parameters

* `n` {number}

* Returns: {string}

***

#### Static method: `numberToIdentifierContinuation(n)`

##### Parameters

* `n` {number}

* Returns: {string}

***

#### Static method: `prefix(s, prefix)`

##### Parameters

* `s` {string|string[]}
* `prefix` {string}

* Returns: {string}

***

#### Static method: `renderChunkModules(renderContext, modules, renderModule[, prefix])`

##### Parameters

* `renderContext` {ChunkRenderContextJavascriptModulesPlugin}
* `modules` {Module[]}
* `renderModule` {Function}
  * `module` {Module}
  * `renderInArray` {boolean}
  * Returns: {Source}
* `prefix` {string}

* Returns: {Source}

***

#### Static method: `renderChunkRuntimeModules(runtimeModules, renderContext)`

##### Parameters

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin}

* Returns: {Source}

***

#### Static method: `renderRuntimeModules(runtimeModules, renderContext)`

##### Parameters

* `runtimeModules` {RuntimeModule[]}
* `renderContext` {RenderContextJavascriptModulesPlugin & object}

* Returns: {Source}

***

#### Static method: `toComment(str)`

##### Parameters

* `str` {string}

* Returns: {string}

***

#### Static method: `toIdentifier(str)`

##### Parameters

* `str` {string}

* Returns: {string}

***

#### Static method: `toNormalComment(str)`

##### Parameters

* `str` {string}

* Returns: {string}

***

#### Static method: `toPath(str)`

##### Parameters

* `str` {string}

* Returns: {string}

## `TemplatePath`

* Type: {string|Function}
