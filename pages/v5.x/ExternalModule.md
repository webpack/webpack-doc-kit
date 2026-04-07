# ExternalModule

<!-- type=misc -->

## Class: `ExternalModule`

* Extends: {Module}

### Constructors

#### `new ExternalModule(request, type, userRequest[, dependencyMeta])`

##### Parameters

* `request` {ExternalModuleRequest}
* `type` {ExternalsType}
* `userRequest` {string}
* `dependencyMeta` {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta}

* Returns: {ExternalModule}

### Properties

#### `blocks`

* Type: {AsyncDependenciesBlock[]}

##### Inherited from

[`Module`](Module.md).[`blocks`](Module.md#blocks)

***

#### `buildInfo`

* Type: {BuildInfo} Optional.

##### Inherited from

[`Module`](Module.md).[`buildInfo`](Module.md#buildinfo)

***

#### `buildMeta`

* Type: {BuildMeta} Optional.

##### Inherited from

[`Module`](Module.md).[`buildMeta`](Module.md#buildmeta)

***

#### `chunksIterable`

* Type: {Iterable<Chunk>}

##### Inherited from

[`Module`](Module.md).[`chunksIterable`](Module.md#chunksiterable)

***

#### `codeGenerationDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

[`Module`](Module.md).[`codeGenerationDependencies`](Module.md#codegenerationdependencies)

***

#### `context`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`context`](Module.md#context)

***

#### `debugId`

* Type: {number}

##### Inherited from

[`Module`](Module.md).[`debugId`](Module.md#debugid)

***

#### `dependencies`

* Type: {Dependency[]}

##### Inherited from

[`Module`](Module.md).[`dependencies`](Module.md#dependencies)

***

#### `dependencyMeta`

* Type: {ImportDependencyMeta|CssImportDependencyMeta|AssetDependencyMeta} Optional.

***

#### `depth`

* Type: {number}

##### Inherited from

[`Module`](Module.md).[`depth`](Module.md#depth)

***

#### `errors`

* Type: {any}

##### Inherited from

[`Module`](Module.md).[`errors`](Module.md#errors)

***

#### `exportsArgument`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`exportsArgument`](Module.md#exportsargument)

***

#### `externalType`

* Type: {ExternalsType}

***

#### `factoryMeta`

* Type: {FactoryMeta} Optional.

##### Inherited from

[`Module`](Module.md).[`factoryMeta`](Module.md#factorymeta)

***

#### `hasEqualsChunks`

* Type: {any}

##### Inherited from

[`Module`](Module.md).[`hasEqualsChunks`](Module.md#hasequalschunks)

***

#### `hash`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`hash`](Module.md#hash)

***

#### `hot`

* Type: {boolean}

##### Inherited from

[`Module`](Module.md).[`hot`](Module.md#hot)

***

#### `id`

* Type: {string|number}

##### Deprecated

##### Inherited from

[`Module`](Module.md).[`id`](Module.md#id)

***

#### `index`

* Type: {number}

##### Inherited from

[`Module`](Module.md).[`index`](Module.md#index)

***

#### `index2`

* Type: {number}

##### Inherited from

[`Module`](Module.md).[`index2`](Module.md#index2)

***

#### `issuer`

* Type: {Module} Optional.

##### Inherited from

[`Module`](Module.md).[`issuer`](Module.md#issuer)

***

#### `isUsed`

* Type: {any}

##### Inherited from

[`Module`](Module.md).[`isUsed`](Module.md#isused)

***

#### `layer`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`layer`](Module.md#layer)

***

#### `moduleArgument`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`moduleArgument`](Module.md#moduleargument)

***

#### `needId`

* Type: {boolean}

##### Inherited from

[`Module`](Module.md).[`needId`](Module.md#needid)

***

#### `optimizationBailout`

* Type: {string|Function[]}

##### Deprecated

##### Inherited from

[`Module`](Module.md).[`optimizationBailout`](Module.md#optimizationbailout)

***

#### `optional`

* Type: {boolean}

##### Inherited from

[`Module`](Module.md).[`optional`](Module.md#optional)

***

#### `parent`

* Type: {DependenciesBlock} Optional.

##### Inherited from

[`Module`](Module.md).[`parent`](Module.md#parent)

***

#### `presentationalDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

[`Module`](Module.md).[`presentationalDependencies`](Module.md#presentationaldependencies)

***

#### `profile`

* Type: {ModuleProfile} Optional.

##### Inherited from

[`Module`](Module.md).[`profile`](Module.md#profile)

***

#### `renderedHash`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`renderedHash`](Module.md#renderedhash)

***

#### `request`

* Type: {ExternalModuleRequest}

***

#### `resolveOptions`

* Type: {ResolveOptions} Optional.

##### Inherited from

[`Module`](Module.md).[`resolveOptions`](Module.md#resolveoptions)

***

#### `type`

* Type: {string}

##### Inherited from

[`Module`](Module.md).[`type`](Module.md#type)

***

#### `used`

* Type: {any}

##### Inherited from

[`Module`](Module.md).[`used`](Module.md#used)

***

#### `usedExports`

* Type: {boolean|SortableSet<string>}

##### Inherited from

[`Module`](Module.md).[`usedExports`](Module.md#usedexports)

***

#### `userRequest`

* Type: {string}

***

#### `useSimpleSourceMap`

* Type: {boolean}

##### Inherited from

[`Module`](Module.md).[`useSimpleSourceMap`](Module.md#usesimplesourcemap)

***

#### `useSourceMap`

* Type: {boolean}

##### Inherited from

[`Module`](Module.md).[`useSourceMap`](Module.md#usesourcemap)

***

#### `warnings`

* Type: {any}

##### Inherited from

[`Module`](Module.md).[`warnings`](Module.md#warnings)

***

#### `getExternalModuleNodeCommonjsInitFragment`

* Type: {Function}

##### Parameters

* `runtimeTemplate` {RuntimeTemplate}

* Returns: {InitFragment<ChunkRenderContextJavascriptModulesPlugin>}

***

#### `ModuleExternalInitFragment`

* Type: {ModuleExternalInitFragment}

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

#### `restoreFromUnsafeCache(unsafeCacheData, normalModuleFactory)`

##### Parameters

* `unsafeCacheData` {UnsafeCacheData}
* `normalModuleFactory` {NormalModuleFactory}

* Returns: {void}

restore unsafe cache data

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

#### Static method: `getCompilationHooks(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {ExternalModuleHooks}

***

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
