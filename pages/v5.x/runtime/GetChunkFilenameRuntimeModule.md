# GetChunkFilenameRuntimeModule

<!-- type=misc -->

## Class: `GetChunkFilenameRuntimeModule`

* Extends: {RuntimeModule}

### Constructors

#### `new GetChunkFilenameRuntimeModule(contentType, name, global, getFilenameForChunk, allChunks)`

##### Parameters

* `contentType` {string}
* `name` {string}
* `global` {string}
* `getFilenameForChunk` {Function}
  * `chunk` {Chunk}
  * Returns: {string|false|Function}
* `allChunks` {boolean}

* Returns: {GetChunkFilenameRuntimeModule}

### Properties

#### `allChunks`

* Type: {boolean}

***

#### `blocks`

* Type: {AsyncDependenciesBlock[]}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`blocks`](../Runtime.md#blocks)

***

#### `buildInfo`

* Type: {BuildInfo} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`buildInfo`](../Runtime.md#buildinfo)

***

#### `buildMeta`

* Type: {BuildMeta} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`buildMeta`](../Runtime.md#buildmeta)

***

#### `chunk`

* Type: {Chunk} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`chunk`](../Runtime.md#chunk)

***

#### `chunkGraph`

* Type: {ChunkGraph} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`chunkGraph`](../Runtime.md#chunkgraph)

***

#### `chunksIterable`

* Type: {Iterable<Chunk>}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`chunksIterable`](../Runtime.md#chunksiterable)

***

#### `codeGenerationDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`codeGenerationDependencies`](../Runtime.md#codegenerationdependencies)

***

#### `compilation`

* Type: {Compilation} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`compilation`](../Runtime.md#compilation)

***

#### `contentType`

* Type: {string}

***

#### `context`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`context`](../Runtime.md#context)

***

#### `debugId`

* Type: {number}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`debugId`](../Runtime.md#debugid)

***

#### `dependencies`

* Type: {Dependency[]}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`dependencies`](../Runtime.md#dependencies)

***

#### `dependentHash`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`dependentHash`](../Runtime.md#dependenthash)

***

#### `depth`

* Type: {number}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`depth`](../Runtime.md#depth)

***

#### `errors`

* Type: {any}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`errors`](../Runtime.md#errors)

***

#### `exportsArgument`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`exportsArgument`](../Runtime.md#exportsargument)

***

#### `factoryMeta`

* Type: {FactoryMeta} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`factoryMeta`](../Runtime.md#factorymeta)

***

#### `fullHash`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`fullHash`](../Runtime.md#fullhash)

***

#### `getFilenameForChunk`

* Type: {Function}

##### Parameters

* `chunk` {Chunk}

* Returns: {string|false|Function}

***

#### `global`

* Type: {string}

***

#### `hasEqualsChunks`

* Type: {any}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`hasEqualsChunks`](../Runtime.md#hasequalschunks)

***

#### `hash`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`hash`](../Runtime.md#hash)

***

#### `hot`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`hot`](../Runtime.md#hot)

***

#### `id`

* Type: {string|number}

##### Deprecated

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`id`](../Runtime.md#id)

***

#### `index`

* Type: {number}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`index`](../Runtime.md#index)

***

#### `index2`

* Type: {number}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`index2`](../Runtime.md#index2)

***

#### `issuer`

* Type: {Module} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`issuer`](../Runtime.md#issuer)

***

#### `isUsed`

* Type: {any}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`isUsed`](../Runtime.md#isused)

***

#### `layer`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`layer`](../Runtime.md#layer)

***

#### `moduleArgument`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`moduleArgument`](../Runtime.md#moduleargument)

***

#### `name`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`name`](../Runtime.md#name)

***

#### `needId`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`needId`](../Runtime.md#needid)

***

#### `optimizationBailout`

* Type: {string|Function[]}

##### Deprecated

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`optimizationBailout`](../Runtime.md#optimizationbailout)

***

#### `optional`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`optional`](../Runtime.md#optional)

***

#### `parent`

* Type: {DependenciesBlock} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`parent`](../Runtime.md#parent)

***

#### `presentationalDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`presentationalDependencies`](../Runtime.md#presentationaldependencies)

***

#### `profile`

* Type: {ModuleProfile} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`profile`](../Runtime.md#profile)

***

#### `renderedHash`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`renderedHash`](../Runtime.md#renderedhash)

***

#### `resolveOptions`

* Type: {ResolveOptions} Optional.

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`resolveOptions`](../Runtime.md#resolveoptions)

***

#### `stage`

* Type: {number}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`stage`](../Runtime.md#stage)

***

#### `type`

* Type: {string}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`type`](../Runtime.md#type)

***

#### `used`

* Type: {any}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`used`](../Runtime.md#used)

***

#### `usedExports`

* Type: {boolean|SortableSet<string>}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`usedExports`](../Runtime.md#usedexports)

***

#### `useSimpleSourceMap`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`useSimpleSourceMap`](../Runtime.md#usesimplesourcemap)

***

#### `useSourceMap`

* Type: {boolean}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`useSourceMap`](../Runtime.md#usesourcemap)

***

#### `warnings`

* Type: {any}

##### Inherited from

[`RuntimeModule`](../Runtime.md).[`warnings`](../Runtime.md#warnings)

***

#### `STAGE_ATTACH`

* Type: {number}

Runtime modules which attach to handlers of other runtime modules

##### Overrides

[`RuntimeModule`](../Runtime.md).[`STAGE_ATTACH`](../Runtime.md#stage-attach)

***

#### `STAGE_BASIC`

* Type: {number}

Runtime modules with simple dependencies on other runtime modules

##### Overrides

[`RuntimeModule`](../Runtime.md).[`STAGE_BASIC`](../Runtime.md#stage-basic)

***

#### `STAGE_NORMAL`

* Type: {number}

Runtime modules without any dependencies to other runtime modules

##### Overrides

[`RuntimeModule`](../Runtime.md).[`STAGE_NORMAL`](../Runtime.md#stage-normal)

***

#### `STAGE_TRIGGER`

* Type: {number}

Runtime modules which trigger actions on bootstrap

##### Overrides

[`RuntimeModule`](../Runtime.md).[`STAGE_TRIGGER`](../Runtime.md#stage-trigger)

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

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
