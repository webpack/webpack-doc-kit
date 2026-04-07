# ExternalItem

<!-- type=misc -->

## `ExternalItem`

* Type: {string|RegExp|ExternalItemObjectKnown & ExternalItemObjectUnknown|Function|Function}

## `ExternalItemFunctionData`

### Properties

#### `context`

* Type: {string}

the directory in which the request is placed

#### `contextInfo`

* Type: {ModuleFactoryCreateDataContextInfo}

contextual information

#### `dependencyType`

* Type: {string}

the category of the referencing dependency

#### `getResolve`

* Type: {Function}

get a resolve function with the current resolver options

##### Parameters

* `options` {ResolveOptions}

* Returns: {Function|Function}

#### `request`

* Type: {string}

the request as written by the user in the require/import expression/statement

## `ExternalItemObjectKnown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Properties

#### `byLayer`

* Type: {object|Function} Optional.

Specify externals depending on the layer.

## `ExternalItemObjectUnknown`

If an dependency matches exactly a property of the object, the property value is used as dependency.

### Indexable

> \[`index`: {string}\]: {ExternalItemValue}

## `ExternalItemFunction`

* Type: {Function|Function}

## `ExternalItemFunctionCallback`

* Type: {Function}

### Parameters

* `data` {ExternalItemFunctionData}
* `callback` {Function}
  * `err` {null|Error}
  * `result` {string|boolean|string[]|object}
  * Returns: {void}

* Returns: {void}

## `ExternalItemFunctionDataGetResolve`

* Type: {Function}

### Parameters

* `options` {ResolveOptions}

* Returns: {Function|Function}

## `ExternalItemFunctionDataGetResolveCallbackResult`

* Type: {Function}

### Parameters

* `context` {string}
* `request` {string}
* `callback` {Function}
  * `err` {null|Error}
  * `result` {string|false}
  * `resolveRequest` {ResolveRequest}
  * Returns: {void}

* Returns: {void}

## `ExternalItemFunctionDataGetResolveResult`

* Type: {Function}

### Parameters

* `context` {string}
* `request` {string}

* Returns: {Promise<string>}

## `ExternalItemFunctionPromise`

* Type: {Function}

### Parameters

* `data` {ExternalItemFunctionData}

* Returns: {Promise<ExternalItemValue>}

## `ExternalItemValue`

* Type: {string|boolean|string[]|object}
