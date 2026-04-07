# Resolver

<!-- type=misc -->

## Class: `Resolver`

### Constructors

#### `new Resolver()`

* Returns: {Resolver}

### Properties

#### `fileSystem`

* Type: {FileSystem}

***

#### `hooks`

* Type: {KnownHooks}

***

#### `options`

* Type: {ResolveOptionsResolverFactoryObject1}

### Methods

#### `doResolve(hook, request, message, resolveContext, callback)`

##### Parameters

* `hook` {AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest>}
* `request` {ResolveRequest}
* `message` {string}
* `resolveContext` {ResolveContext}
* `callback` {Function}
  * `err` {Error}
  * `result` {ResolveRequest}
  * Returns: {void}

* Returns: {void}

***

#### `ensureHook(name)`

##### Parameters

* `name` {string|AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest, UnsetAdditionalOptions>}

* Returns: {AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest>}

***

#### `getHook(name)`

##### Parameters

* `name` {string|AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest, UnsetAdditionalOptions>}

* Returns: {AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest>}

***

#### `isDirectory(path)`

##### Parameters

* `path` {string}

* Returns: {boolean}

***

#### `isModule(path)`

##### Parameters

* `path` {string}

* Returns: {boolean}

***

#### `isPrivate(path)`

##### Parameters

* `path` {string}

* Returns: {boolean}

***

#### `join(path, request)`

##### Parameters

* `path` {string}
* `request` {string}

* Returns: {string}

***

#### `normalize(path)`

##### Parameters

* `path` {string}

* Returns: {string}

***

#### `parse(identifier)`

##### Parameters

* `identifier` {string}

* Returns: {ParsedIdentifier}

***

#### `resolve(context, path, request, resolveContext, callback)`

##### Parameters

* `context` {ContextTypes}
* `path` {string}
* `request` {string}
* `resolveContext` {ResolveContext}
* `callback` {Function}
  * `err` {ErrorWithDetail}
  * `res` {string|false}
  * `req` {ResolveRequest}
  * Returns: {void}

* Returns: {void}

***

#### `resolveSync(context, path, request)`

##### Parameters

* `context` {ContextTypes}
* `path` {string}
* `request` {string}

* Returns: {string|false}
