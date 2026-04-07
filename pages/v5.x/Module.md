# Module

<!-- type=misc -->

## Class: `Module`

* Extends: {DependenciesBlock}

### Constructors

#### `new Module(type[, context][, layer])`

##### Parameters

* `type` {string}
* `context` {string}
* `layer` {string}

* Returns: {Module}

### Properties

#### `blocks`

* Type: {AsyncDependenciesBlock[]}

##### Inherited from

`DependenciesBlock.blocks`

***

#### `buildInfo`

* Type: {BuildInfo} Optional.

***

#### `buildMeta`

* Type: {BuildMeta} Optional.

***

#### `chunksIterable`

* Type: {Iterable<Chunk>}

***

#### `codeGenerationDependencies`

* Type: {Dependency[]} Optional.

***

#### `context`

* Type: {string}

***

#### `debugId`

* Type: {number}

***

#### `dependencies`

* Type: {Dependency[]}

##### Inherited from

`DependenciesBlock.dependencies`

***

#### `depth`

* Type: {number}

***

#### `errors`

* Type: {any}

***

#### `exportsArgument`

* Type: {string}

***

#### `factoryMeta`

* Type: {FactoryMeta} Optional.

***

#### `hasEqualsChunks`

* Type: {any}

***

#### `hash`

* Type: {string}

***

#### `hot`

* Type: {boolean}

***

#### `id`

* Type: {string|number}

##### Deprecated

***

#### `index`

* Type: {number}

***

#### `index2`

* Type: {number}

***

#### `issuer`

* Type: {Module} Optional.

***

#### `isUsed`

* Type: {any}

***

#### `layer`

* Type: {string}

***

#### `moduleArgument`

* Type: {string}

***

#### `needId`

* Type: {boolean}

***

#### `optimizationBailout`

* Type: {string|Function[]}

##### Deprecated

***

#### `optional`

* Type: {boolean}

***

#### `parent`

* Type: {DependenciesBlock} Optional.

##### Inherited from

`DependenciesBlock.parent`

***

#### `presentationalDependencies`

* Type: {Dependency[]} Optional.

***

#### `profile`

* Type: {ModuleProfile} Optional.

***

#### `renderedHash`

* Type: {string}

***

#### `resolveOptions`

* Type: {ResolveOptions} Optional.

***

#### `type`

* Type: {string}

***

#### `used`

* Type: {any}

***

#### `usedExports`

* Type: {boolean|SortableSet<string>}

***

#### `useSimpleSourceMap`

* Type: {boolean}

***

#### `useSourceMap`

* Type: {boolean}

***

#### `warnings`

* Type: {any}

### Methods

#### `addBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

***

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

##### Parameters

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* Returns: {void}

***

#### `addChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

***

#### `addCodeGenerationDependency(codeGenerationDependency)`

##### Parameters

* `codeGenerationDependency` {Dependency}

* Returns: {void}

***

#### `addDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

***

#### `addError(error)`

##### Parameters

* `error` {WebpackError}

* Returns: {void}

***

#### `addPresentationalDependency(presentationalDependency)`

##### Parameters

* `presentationalDependency` {Dependency}

* Returns: {void}

***

#### `addWarning(warning)`

##### Parameters

* `warning` {WebpackError}

* Returns: {void}

***

#### `build(options, compilation, resolver, fs, callback)`

##### Parameters

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {Function}
  * `err` {WebpackError}
  * Returns: {void}

* Returns: {void}

***

#### `chunkCondition(chunk, compilation)`

##### Parameters

* `chunk` {Chunk}
* `compilation` {Compilation}

* Returns: {boolean}

***

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

***

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

***

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

***

#### `codeGeneration(context)`

##### Parameters

* `context` {CodeGenerationContext}

* Returns: {CodeGenerationResult}

***

#### `deserialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectDeserializerContext}

* Returns: {void}

***

#### `getChunks()`

* Returns: {Chunk[]}

***

#### `getConcatenationBailoutReason(context)`

##### Parameters

* `context` {ConcatenationBailoutReasonContext}

* Returns: {string}

***

#### `getErrors()`

* Returns: {Iterable<WebpackError, any, any>}

***

#### `getExportsType(moduleGraph[, strict])`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* Returns: {ExportsType}

***

#### `getNumberOfChunks()`

* Returns: {number}

***

#### `getNumberOfErrors()`

* Returns: {number}

***

#### `getNumberOfWarnings()`

* Returns: {number}

***

#### `getRootBlock()`

* Returns: {DependenciesBlock}

***

#### `getSideEffectsConnectionState(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ConnectionState}

***

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

***

#### `getSourceTypes()`

* Returns: {ReadonlySet<string>}

***

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

***

#### `getWarnings()`

* Returns: {Iterable<WebpackError, any, any>}

***

#### `hasChunkCondition()`

* Returns: {boolean}

***

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

##### Parameters

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* Returns: {boolean}

***

#### `hasReasons(moduleGraph, runtime)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* Returns: {boolean}

***

#### `identifier()`

* Returns: {string}

***

#### `invalidateBuild()`

* Returns: {void}

***

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* Returns: {boolean}

***

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* Returns: {boolean}

***

#### `isEntryModule()`

* Returns: {boolean}

***

#### `isInChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

***

#### `isOptional(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {boolean}

***

#### `isProvided(exportName)`

##### Parameters

* `exportName` {string}

* Returns: {boolean}

***

#### `libIdent(options)`

##### Parameters

* `options` {LibIdentOptions}

* Returns: {string}

***

#### `nameForCondition()`

* Returns: {string}

***

#### `needBuild(context, callback)`

##### Parameters

* `context` {NeedBuildContext}
* `callback` {Function}
  * `err` {WebpackError}
  * `needBuild` {boolean}
  * Returns: {void}

* Returns: {void}

***

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated

##### Parameters

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* Returns: {boolean}

Use needBuild instead

***

#### `originalSource()`

* Returns: {Source}

***

#### `readableIdentifier(requestShortener)`

##### Parameters

* `requestShortener` {RequestShortener}

* Returns: {string}

***

#### `removeChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

***

#### `removeDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

***

#### `serialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectSerializerContext}

* Returns: {void}

***

#### `size([type])`

##### Parameters

* `type` {string}

* Returns: {number}

***

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated

##### Parameters

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* Returns: {Source}

Use codeGeneration() instead

***

#### `updateCacheModule(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

***

#### `updateHash(hash, context)`

##### Parameters

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* Returns: {void}

***

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

## `ModuleFilenameHelpers`

## `ABSOLUTE_RESOURCE_PATH`

* Type: {string}

## `ALL_LOADERS`

* Type: {string}

## `ALL_LOADERS_RESOURCE`

* Type: {string}

## `createFilename`

* Type: {Function}

### Parameters

* `module` {string|Module}
* `options` {object}
  * `moduleFilenameTemplate` {string|Function}
  * `namespace` {string}
* `__namedParameters` {object}
  * `chunkGraph` {ChunkGraph}
  * `hashFunction` {string|Hash}
  * `requestShortener` {RequestShortener}

* Returns: {string}

## `HASH`

* Type: {string}

## `ID`

* Type: {string}

## `LOADERS`

* Type: {string}

## `LOADERS_RESOURCE`

* Type: {string}

## `matchObject`

* Type: {Function}

### Parameters

* `obj` {MatchObject}
* `str` {string}

* Returns: {boolean}

## `matchPart`

* Type: {Function}

### Parameters

* `str` {string}
* `test` {Matcher}

* Returns: {boolean}

## `NAMESPACE`

* Type: {string}

## `QUERY`

* Type: {string}

## `REGEXP_ABSOLUTE_RESOURCE_PATH`

* Type: {RegExp}

## `REGEXP_ALL_LOADERS`

* Type: {RegExp}

## `REGEXP_ALL_LOADERS_RESOURCE`

* Type: {RegExp}

## `REGEXP_HASH`

* Type: {RegExp}

## `REGEXP_ID`

* Type: {RegExp}

## `REGEXP_LOADERS`

* Type: {RegExp}

## `REGEXP_LOADERS_RESOURCE`

* Type: {RegExp}

## `REGEXP_NAMESPACE`

* Type: {RegExp}

## `REGEXP_QUERY`

* Type: {RegExp}

## `REGEXP_RESOURCE`

* Type: {RegExp}

## `REGEXP_RESOURCE_PATH`

* Type: {RegExp}

## `replaceDuplicates`

* Type: {Function}

### Parameters

* `array` {T[]}
* `fn` {Function}
  * `duplicateItem` {T}
  * `duplicateItemIndex` {number}
  * `numberOfTimesReplaced` {number}
  * Returns: {T}
* `comparator` {Function}
  * `firstElement` {T}
  * `nextElement` {T}
  * Returns: {0|1|-1}

* Returns: {T[]}

## `RESOURCE`

* Type: {string}

## `RESOURCE_PATH`

* Type: {string}

## `ModuleFederationPluginOptions`

### Properties

#### `exposes`

* Type: {Exposes} Optional.

Modules that should be exposed by this container. When provided, property name is used as public name, otherwise public name is automatically inferred from request.

#### `filename`

* Type: {string} Optional.

The filename of the container as relative path inside the `output.path` directory.

#### `library`

* Type: {LibraryOptions} Optional.

Options for library.

#### `name`

* Type: {string} Optional.

The name of the container.

#### `remotes`

* Type: {Remotes} Optional.

Container locations and request scopes from which modules should be resolved and loaded at runtime. When provided, property name is used as request scope, otherwise request scope is automatically inferred from container location.

#### `remoteType`

* Type: {ExternalsType} Optional.

The external type of the remote containers.

#### `runtime`

* Type: {EntryRuntime} Optional.

The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.

#### `shared`

* Type: {Shared} Optional.

Modules that should be shared in the share scope. When provided, property names are used to match requested modules in this compilation.

#### `shareScope`

* Type: {string} Optional.

Share scope name used for all shared modules (defaults to 'default').

## `ModuleOptions`

Options affecting the normal modules (`NormalModuleFactory`).

### Properties

#### `defaultRules`

* Type: {false|""|0|"..."|RuleSetRule[]} Optional.

An array of rules applied by default for modules.

#### `exprContextCritical`

* Type: {boolean} Optional.

Enable warnings for full dynamic dependencies.

#### `exprContextRecursive`

* Type: {boolean} Optional.

Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'.

##### Deprecated

#### `exprContextRegExp`

* Type: {boolean|RegExp} Optional.

Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'.

##### Deprecated

#### `exprContextRequest`

* Type: {string} Optional.

Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'.

##### Deprecated

#### `generator`

* Type: {GeneratorOptionsByModuleType} Optional.

Specify options for each generator.

#### `noParse`

* Type: {string|RegExp|Function|string|RegExp|Function[]} Optional.

Don't parse files matching. It's matched against the full resolved request.

#### `parser`

* Type: {ParserOptionsByModuleType} Optional.

Specify options for each parser.

#### `rules`

* Type: {false|""|0|"..."|RuleSetRule[]} Optional.

An array of rules applied for modules.

#### `strictExportPresence`

* Type: {boolean} Optional.

Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'.

##### Deprecated

#### `strictThisContextOnImports`

* Type: {boolean} Optional.

Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'.

##### Deprecated

#### `unknownContextCritical`

* Type: {boolean} Optional.

Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'.

##### Deprecated

#### `unknownContextRecursive`

* Type: {boolean} Optional.

Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'.

##### Deprecated

#### `unknownContextRegExp`

* Type: {boolean|RegExp} Optional.

Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'.

##### Deprecated

#### `unknownContextRequest`

* Type: {string} Optional.

Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'.

##### Deprecated

#### `unsafeCache`

* Type: {boolean|Function} Optional.

Cache the resolving of module requests.

#### `wrappedContextCritical`

* Type: {boolean} Optional.

Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'.

##### Deprecated

#### `wrappedContextRecursive`

* Type: {boolean} Optional.

Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'.

##### Deprecated

#### `wrappedContextRegExp`

* Type: {RegExp} Optional.

Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'.

##### Deprecated

## Class: `ModuleChunkLoadingRuntimeModule`

* Extends: {RuntimeModule}

### Constructors

#### `new ModuleChunkLoadingRuntimeModule(runtimeRequirements)`

##### Parameters

* `runtimeRequirements` {ReadonlySet<string>}

* Returns: {ModuleChunkLoadingRuntimeModule}

### Properties

#### `blocks`

* Type: {AsyncDependenciesBlock[]}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`blocks`](Runtime.md#blocks)

***

#### `buildInfo`

* Type: {BuildInfo} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`buildInfo`](Runtime.md#buildinfo)

***

#### `buildMeta`

* Type: {BuildMeta} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`buildMeta`](Runtime.md#buildmeta)

***

#### `chunk`

* Type: {Chunk} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`chunk`](Runtime.md#chunk)

***

#### `chunkGraph`

* Type: {ChunkGraph} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`chunkGraph`](Runtime.md#chunkgraph)

***

#### `chunksIterable`

* Type: {Iterable<Chunk>}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`chunksIterable`](Runtime.md#chunksiterable)

***

#### `codeGenerationDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`codeGenerationDependencies`](Runtime.md#codegenerationdependencies)

***

#### `compilation`

* Type: {Compilation} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`compilation`](Runtime.md#compilation)

***

#### `context`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`context`](Runtime.md#context)

***

#### `debugId`

* Type: {number}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`debugId`](Runtime.md#debugid)

***

#### `dependencies`

* Type: {Dependency[]}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`dependencies`](Runtime.md#dependencies)

***

#### `dependentHash`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`dependentHash`](Runtime.md#dependenthash)

***

#### `depth`

* Type: {number}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`depth`](Runtime.md#depth)

***

#### `errors`

* Type: {any}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`errors`](Runtime.md#errors)

***

#### `exportsArgument`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`exportsArgument`](Runtime.md#exportsargument)

***

#### `factoryMeta`

* Type: {FactoryMeta} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`factoryMeta`](Runtime.md#factorymeta)

***

#### `fullHash`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`fullHash`](Runtime.md#fullhash)

***

#### `hasEqualsChunks`

* Type: {any}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`hasEqualsChunks`](Runtime.md#hasequalschunks)

***

#### `hash`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`hash`](Runtime.md#hash)

***

#### `hot`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`hot`](Runtime.md#hot)

***

#### `id`

* Type: {string|number}

##### Deprecated

##### Inherited from

[`RuntimeModule`](Runtime.md).[`id`](Runtime.md#id)

***

#### `index`

* Type: {number}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`index`](Runtime.md#index)

***

#### `index2`

* Type: {number}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`index2`](Runtime.md#index2)

***

#### `issuer`

* Type: {Module} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`issuer`](Runtime.md#issuer)

***

#### `isUsed`

* Type: {any}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`isUsed`](Runtime.md#isused)

***

#### `layer`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`layer`](Runtime.md#layer)

***

#### `moduleArgument`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`moduleArgument`](Runtime.md#moduleargument)

***

#### `name`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`name`](Runtime.md#name)

***

#### `needId`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`needId`](Runtime.md#needid)

***

#### `optimizationBailout`

* Type: {string|Function[]}

##### Deprecated

##### Inherited from

[`RuntimeModule`](Runtime.md).[`optimizationBailout`](Runtime.md#optimizationbailout)

***

#### `optional`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`optional`](Runtime.md#optional)

***

#### `parent`

* Type: {DependenciesBlock} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`parent`](Runtime.md#parent)

***

#### `presentationalDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`presentationalDependencies`](Runtime.md#presentationaldependencies)

***

#### `profile`

* Type: {ModuleProfile} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`profile`](Runtime.md#profile)

***

#### `renderedHash`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`renderedHash`](Runtime.md#renderedhash)

***

#### `resolveOptions`

* Type: {ResolveOptions} Optional.

##### Inherited from

[`RuntimeModule`](Runtime.md).[`resolveOptions`](Runtime.md#resolveoptions)

***

#### `stage`

* Type: {number}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`stage`](Runtime.md#stage)

***

#### `type`

* Type: {string}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`type`](Runtime.md#type)

***

#### `used`

* Type: {any}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`used`](Runtime.md#used)

***

#### `usedExports`

* Type: {boolean|SortableSet<string>}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`usedExports`](Runtime.md#usedexports)

***

#### `useSimpleSourceMap`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`useSimpleSourceMap`](Runtime.md#usesimplesourcemap)

***

#### `useSourceMap`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`useSourceMap`](Runtime.md#usesourcemap)

***

#### `warnings`

* Type: {any}

##### Inherited from

[`RuntimeModule`](Runtime.md).[`warnings`](Runtime.md#warnings)

***

#### `STAGE_ATTACH`

* Type: {number}

Runtime modules which attach to handlers of other runtime modules

##### Overrides

[`RuntimeModule`](Runtime.md).[`STAGE_ATTACH`](Runtime.md#stage-attach)

***

#### `STAGE_BASIC`

* Type: {number}

Runtime modules with simple dependencies on other runtime modules

##### Overrides

[`RuntimeModule`](Runtime.md).[`STAGE_BASIC`](Runtime.md#stage-basic)

***

#### `STAGE_NORMAL`

* Type: {number}

Runtime modules without any dependencies to other runtime modules

##### Overrides

[`RuntimeModule`](Runtime.md).[`STAGE_NORMAL`](Runtime.md#stage-normal)

***

#### `STAGE_TRIGGER`

* Type: {number}

Runtime modules which trigger actions on bootstrap

##### Overrides

[`RuntimeModule`](Runtime.md).[`STAGE_TRIGGER`](Runtime.md#stage-trigger)

### Methods

#### `addBlock(block)`

##### Parameters

* `block` {AsyncDependenciesBlock}

* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

***

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

##### Parameters

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* Returns: {void}

***

#### `addChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

***

#### `addCodeGenerationDependency(codeGenerationDependency)`

##### Parameters

* `codeGenerationDependency` {Dependency}

* Returns: {void}

***

#### `addDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

***

#### `addError(error)`

##### Parameters

* `error` {WebpackError}

* Returns: {void}

***

#### `addPresentationalDependency(presentationalDependency)`

##### Parameters

* `presentationalDependency` {Dependency}

* Returns: {void}

***

#### `addWarning(warning)`

##### Parameters

* `warning` {WebpackError}

* Returns: {void}

***

#### `attach(compilation, chunk[, chunkGraph])`

##### Parameters

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* Returns: {void}

***

#### `build(options, compilation, resolver, fs, callback)`

##### Parameters

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {Function}
  * `err` {WebpackError}
  * Returns: {void}

* Returns: {void}

***

#### `chunkCondition(chunk, compilation)`

##### Parameters

* `chunk` {Chunk}
* `compilation` {Compilation}

* Returns: {boolean}

***

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

***

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Removes all dependencies and blocks

***

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

***

#### `codeGeneration(context)`

##### Parameters

* `context` {CodeGenerationContext}

* Returns: {CodeGenerationResult}

***

#### `deserialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectDeserializerContext}

* Returns: {void}

***

#### `generate()`

* Returns: {string}

***

#### `getChunks()`

* Returns: {Chunk[]}

***

#### `getConcatenationBailoutReason(context)`

##### Parameters

* `context` {ConcatenationBailoutReasonContext}

* Returns: {string}

***

#### `getErrors()`

* Returns: {Iterable<WebpackError, any, any>}

***

#### `getExportsType(moduleGraph[, strict])`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* Returns: {ExportsType}

***

#### `getGeneratedCode()`

* Returns: {string}

***

#### `getNumberOfChunks()`

* Returns: {number}

***

#### `getNumberOfErrors()`

* Returns: {number}

***

#### `getNumberOfWarnings()`

* Returns: {number}

***

#### `getRootBlock()`

* Returns: {DependenciesBlock}

***

#### `getSideEffectsConnectionState(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ConnectionState}

***

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

***

#### `getSourceTypes()`

* Returns: {ReadonlySet<string>}

***

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

***

#### `getWarnings()`

* Returns: {Iterable<WebpackError, any, any>}

***

#### `hasChunkCondition()`

* Returns: {boolean}

***

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

##### Parameters

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* Returns: {boolean}

***

#### `hasReasons(moduleGraph, runtime)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* Returns: {boolean}

***

#### `identifier()`

* Returns: {string}

***

#### `invalidateBuild()`

* Returns: {void}

***

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* Returns: {boolean}

***

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

##### Parameters

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* Returns: {boolean}

***

#### `isEntryModule()`

* Returns: {boolean}

***

#### `isInChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {boolean}

***

#### `isOptional(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {boolean}

***

#### `isProvided(exportName)`

##### Parameters

* `exportName` {string}

* Returns: {boolean}

***

#### `libIdent(options)`

##### Parameters

* `options` {LibIdentOptions}

* Returns: {string}

***

#### `nameForCondition()`

* Returns: {string}

***

#### `needBuild(context, callback)`

##### Parameters

* `context` {NeedBuildContext}
* `callback` {Function}
  * `err` {WebpackError}
  * `needBuild` {boolean}
  * Returns: {void}

* Returns: {void}

***

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated

##### Parameters

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* Returns: {boolean}

Use needBuild instead

***

#### `originalSource()`

* Returns: {Source}

***

#### `readableIdentifier(requestShortener)`

##### Parameters

* `requestShortener` {RequestShortener}

* Returns: {string}

***

#### `removeChunk(chunk)`

##### Parameters

* `chunk` {Chunk}

* Returns: {void}

***

#### `removeDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

***

#### `serialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectSerializerContext}

* Returns: {void}

***

#### `shouldIsolate()`

* Returns: {boolean}

***

#### `size([type])`

##### Parameters

* `type` {string}

* Returns: {number}

***

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated

##### Parameters

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* Returns: {Source}

Use codeGeneration() instead

***

#### `updateCacheModule(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

***

#### `updateHash(hash, context)`

##### Parameters

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* Returns: {void}

***

#### Static method: `getCompilationHooks(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {JsonpCompilationPluginHooks}

***

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

## Class: `ModuleConcatenationPlugin`

### Constructors

#### `new ModuleConcatenationPlugin()`

* Returns: {ModuleConcatenationPlugin}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## Class: `ModuleDependency`

* Extends: {Dependency}

### Constructors

#### `new ModuleDependency(request[, sourceOrder])`

##### Parameters

* `request` {string}
* `sourceOrder` {number}

* Returns: {ModuleDependency}

### Properties

#### `category`

* Type: {string}

##### Inherited from

[`Dependency`](Dependency.md).[`category`](Dependency.md#category)

***

#### `disconnect`

* Type: {any}

##### Inherited from

[`Dependency`](Dependency.md).[`disconnect`](Dependency.md#disconnect)

***

#### `loc`

* Type: {DependencyLocation}

##### Inherited from

[`Dependency`](Dependency.md).[`loc`](Dependency.md#loc)

***

#### `module`

* Type: {any}

##### Inherited from

[`Dependency`](Dependency.md).[`module`](Dependency.md#module)

***

#### `optional`

* Type: {boolean} Optional.

##### Inherited from

[`Dependency`](Dependency.md).[`optional`](Dependency.md#optional)

***

#### `range`

* Type: {[number, number]} Optional.

***

#### `request`

* Type: {string}

***

#### `sourceOrder`

* Type: {number} Optional.

***

#### `type`

* Type: {string}

##### Inherited from

[`Dependency`](Dependency.md).[`type`](Dependency.md#type)

***

#### `userRequest`

* Type: {string}

***

#### `weak`

* Type: {boolean}

##### Inherited from

[`Dependency`](Dependency.md).[`weak`](Dependency.md#weak)

***

#### `EXPORTS_OBJECT_REFERENCED`

* Type: {string[][]}

##### Overrides

[`Dependency`](Dependency.md).[`EXPORTS_OBJECT_REFERENCED`](Dependency.md#exports-object-referenced)

***

#### `NO_EXPORTS_REFERENCED`

* Type: {string[][]}

##### Overrides

[`Dependency`](Dependency.md).[`NO_EXPORTS_REFERENCED`](Dependency.md#no-exports-referenced)

***

#### `Template`

* Type: {DependencyTemplate}

***

#### `TRANSITIVE`

* Type: {symbol}

##### Overrides

[`Dependency`](Dependency.md).[`TRANSITIVE`](Dependency.md#transitive)

### Methods

#### `couldAffectReferencingModule()`

* Returns: {boolean|symbol}

***

#### `createIgnoredModule(context)`

##### Parameters

* `context` {string}

* Returns: {Module}

***

#### `deserialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectDeserializerContext}

* Returns: {void}

***

#### `getCondition(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {false|Function}

***

#### `getContext()`

* Returns: {string}

***

#### `getErrors(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {WebpackError[]}

Returns errors

***

#### `getExports(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ExportsSpec}

Returns the exported names

***

#### `getModuleEvaluationSideEffectsState(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {ConnectionState}

***

#### `getNumberOfIdOccurrences()`

* Returns: {number}

implement this method to allow the occurrence order plugin to count correctly

***

#### `getReference(moduleGraph)`

> Stability: 0 - Deprecated

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {never}

Returns the referenced module and export

***

#### `getReferencedExports(moduleGraph, runtime)`

##### Parameters

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* Returns: {string[]|ReferencedExport[]}

Returns list of exports referenced by this dependency

***

#### `getResourceIdentifier()`

* Returns: {string}

***

#### `getWarnings(moduleGraph)`

##### Parameters

* `moduleGraph` {ModuleGraph}

* Returns: {WebpackError[]}

Returns warnings

***

#### `serialize(__namedParameters)`

##### Parameters

* `__namedParameters` {ObjectSerializerContext}

* Returns: {void}

***

#### `setLoc(startLine, startColumn, endLine, endColumn)`

##### Parameters

* `startLine` {number}
* `startColumn` {number}
* `endLine` {number}
* `endColumn` {number}

* Returns: {void}

***

#### `updateHash(hash, context)`

##### Parameters

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* Returns: {void}

Update the hash

***

#### Static method: `isLowPriorityDependency(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {boolean}

## Class: `ModuleFactory`

### Constructors

#### `new ModuleFactory()`

* Returns: {ModuleFactory}

### Methods

#### `create(data, callback)`

##### Parameters

* `data` {ModuleFactoryCreateData}
* `callback` {Function}
  * `err` {Error}
  * `result` {ModuleFactoryResult}
  * Returns: {void}

* Returns: {void}

## Class: `ModuleFederationPlugin`

### Constructors

#### `new ModuleFederationPlugin(options)`

##### Parameters

* `options` {ModuleFederationPluginOptions}

* Returns: {ModuleFederationPlugin}

### Properties

#### `options`

* Type: {ModuleFederationPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

***

#### Static method: `getCompilationHooks(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {CompilationHooksModuleFederationPlugin}

Get the compilation hooks associated with this plugin.

## Class: `ModuleGraph`

### Constructors

#### `new ModuleGraph()`

* Returns: {ModuleGraph}

### Properties

#### `ModuleGraphConnection`

* Type: {ModuleGraphConnection}

### Methods

#### `addExplanation(dependency, explanation)`

##### Parameters

* `dependency` {Dependency}
* `explanation` {string}

* Returns: {void}

#### `addExtraReason(module, explanation)`

##### Parameters

* `module` {Module}
* `explanation` {string}

* Returns: {void}

#### `cached(fn, args)`

##### Parameters

* `fn` {Function}
  * `moduleGraph` {ModuleGraph}
  * `...args` {T}
  * Returns: {R}
* `...args` {T}

* Returns: {R}

#### `cloneModuleAttributes(sourceModule, targetModule)`

##### Parameters

* `sourceModule` {Module}
* `targetModule` {Module}

* Returns: {void}

#### `copyOutgoingModuleConnections(oldModule, newModule, filterConnection)`

##### Parameters

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {Function}
  * `moduleGraphConnection` {ModuleGraphConnection}
  * Returns: {boolean}

* Returns: {void}

#### `dependencyCacheProvide(dependency, args)`

##### Parameters

* `dependency` {D}
* `...args` {[ARGS, unknown]}

* Returns: {R}

#### `finishUpdateParent()`

* Returns: {void}

#### `freeze([cacheStage])`

##### Parameters

* `cacheStage` {string}

* Returns: {void}

#### `getConnection(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {ModuleGraphConnection}

#### `getDepth(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

#### `getExportInfo(module, exportName)`

##### Parameters

* `module` {Module}
* `exportName` {string}

* Returns: {ExportInfo}

#### `getExportsInfo(module)`

##### Parameters

* `module` {Module}

* Returns: {ExportsInfo}

#### `getIncomingConnections(module)`

##### Parameters

* `module` {Module}

* Returns: {Iterable<ModuleGraphConnection>}

#### `getIncomingConnectionsByOriginModule(module)`

##### Parameters

* `module` {Module}

* Returns: {ReadonlyMap<Module, readonly ModuleGraphConnection[]>}

#### `getIssuer(module)`

##### Parameters

* `module` {Module}

* Returns: {Module}

#### `getMeta(thing)`

##### Parameters

* `thing` {object}

* Returns: {Meta}

#### `getMetaIfExisting(thing)`

##### Parameters

* `thing` {object}

* Returns: {Meta}

#### `getModule(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {Module}

#### `getOptimizationBailout(module)`

##### Parameters

* `module` {Module}

* Returns: {string|Function[]}

#### `getOrigin(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {Module}

#### `getOutgoingConnections(module)`

##### Parameters

* `module` {Module}

* Returns: {Iterable<ModuleGraphConnection>}

#### `getOutgoingConnectionsByModule(module)`

##### Parameters

* `module` {Module}

* Returns: {ReadonlyMap<Module, readonly ModuleGraphConnection[]>}

#### `getParentBlock(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {DependenciesBlock}

#### `getParentBlockIndex(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {number}

#### `getParentModule(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {Module}

#### `getPostOrderIndex(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

#### `getPreOrderIndex(module)`

##### Parameters

* `module` {Module}

* Returns: {number}

#### `getProfile(module)`

##### Parameters

* `module` {Module}

* Returns: {ModuleProfile}

#### `getProvidedExports(module)`

##### Parameters

* `module` {Module}

* Returns: {true|string[]}

#### `getReadOnlyExportInfo(module, exportName)`

##### Parameters

* `module` {Module}
* `exportName` {string}

* Returns: {ExportInfo}

#### `getResolvedModule(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {Module}

#### `getResolvedOrigin(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {Module}

#### `getUsedExports(module, runtime)`

##### Parameters

* `module` {Module}
* `runtime` {RuntimeSpec}

* Returns: {boolean|SortableSet<string>}

#### `isAsync(module)`

##### Parameters

* `module` {Module}

* Returns: {boolean}

#### `isDeferred(module)`

##### Parameters

* `module` {Module}

* Returns: {boolean}

#### `isExportProvided(module, exportName)`

##### Parameters

* `module` {Module}
* `exportName` {string|string[]}

* Returns: {boolean}

#### `moveModuleConnections(oldModule, newModule, filterConnection)`

##### Parameters

* `oldModule` {Module}
* `newModule` {Module}
* `filterConnection` {Function}
  * `moduleGraphConnection` {ModuleGraphConnection}
  * Returns: {boolean}

* Returns: {void}

#### `removeAllModuleAttributes()`

* Returns: {void}

#### `removeConnection(dependency)`

##### Parameters

* `dependency` {Dependency}

* Returns: {void}

#### `removeModuleAttributes(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

#### `setAsync(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

#### `setDepth(module, depth)`

##### Parameters

* `module` {Module}
* `depth` {number}

* Returns: {void}

#### `setDepthIfLower(module, depth)`

##### Parameters

* `module` {Module}
* `depth` {number}

* Returns: {boolean}

#### `setIssuer(module, issuer)`

##### Parameters

* `module` {Module}
* `issuer` {Module}

* Returns: {void}

#### `setIssuerIfUnset(module, issuer)`

##### Parameters

* `module` {Module}
* `issuer` {Module}

* Returns: {void}

#### `setModuleMemCaches(moduleMemCaches)`

##### Parameters

* `moduleMemCaches` {Map<Module, WeakTupleMap<any[], any>>}

* Returns: {void}

#### `setParentDependenciesBlockIndex(dependency, index)`

##### Parameters

* `dependency` {Dependency}
* `index` {number}

* Returns: {void}

#### `setParents(dependency, block, module[, indexInBlock])`

##### Parameters

* `dependency` {Dependency}
* `block` {DependenciesBlock}
* `module` {Module}
* `indexInBlock` {number}

* Returns: {void}

#### `setPostOrderIndex(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {void}

#### `setPostOrderIndexIfUnset(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {boolean}

#### `setPreOrderIndex(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {void}

#### `setPreOrderIndexIfUnset(module, index)`

##### Parameters

* `module` {Module}
* `index` {number}

* Returns: {boolean}

#### `setProfile(module[, profile])`

##### Parameters

* `module` {Module}
* `profile` {ModuleProfile}

* Returns: {void}

#### `setResolvedModule(originModule, dependency, module)`

##### Parameters

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}

* Returns: {void}

#### `unfreeze()`

* Returns: {void}

#### `updateModule(dependency, module)`

##### Parameters

* `dependency` {Dependency}
* `module` {Module}

* Returns: {void}

#### `updateParent(dependency[, connection][, parentModule])`

##### Parameters

* `dependency` {Dependency}
* `connection` {ModuleGraphConnection}
* `parentModule` {Module}

* Returns: {void}

#### Static method: `clearModuleGraphForModule(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {void}

#### Static method: `getModuleGraphForModule(module, deprecateMessage, deprecationCode)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}
* `deprecateMessage` {string}
* `deprecationCode` {string}

* Returns: {ModuleGraph}

#### Static method: `setModuleGraphForModule(module, moduleGraph)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}
* `moduleGraph` {ModuleGraph}

* Returns: {void}

## Class: `ModuleGraphConnection`

### Constructors

#### `new ModuleGraphConnection(originModule, dependency, module[, explanation][, weak][, condition])`

##### Parameters

* `originModule` {Module}
* `dependency` {Dependency}
* `module` {Module}
* `explanation` {string}
* `weak` {boolean}
* `condition` {false|Function}

* Returns: {ModuleGraphConnection}

### Properties

#### `condition`

* Type: {false|Function} Optional.

#### `conditional`

* Type: {boolean}

#### `dependency`

* Type: {Dependency}

#### `explanation`

* Type: {string}

#### `explanations`

* Type: {Set<string>} Optional.

#### `module`

* Type: {Module}

#### `originModule`

* Type: {Module}

#### `resolvedModule`

* Type: {Module}

#### `resolvedOriginModule`

* Type: {Module}

#### `weak`

* Type: {boolean} Optional.

#### `addConnectionStates`

* Type: {Function}

##### Parameters

* `a` {ConnectionState}
* `b` {ConnectionState}

* Returns: {ConnectionState}

#### `CIRCULAR_CONNECTION`

* Type: {CIRCULAR_CONNECTION}

#### `TRANSITIVE_ONLY`

* Type: {TRANSITIVE_ONLY}

### Methods

#### `addCondition(condition)`

##### Parameters

* `condition` {Function}
  * `moduleGraphConnection` {ModuleGraphConnection}
  * `runtime` {RuntimeSpec}
  * Returns: {ConnectionState}

* Returns: {void}

#### `addExplanation(explanation)`

##### Parameters

* `explanation` {string}

* Returns: {void}

#### `clone()`

* Returns: {ModuleGraphConnection}

#### `getActiveState(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {ConnectionState}

#### `isActive(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {boolean}

#### `isTargetActive(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {boolean}

#### `setActive(value)`

##### Parameters

* `value` {boolean}

* Returns: {void}
