# LoadScriptRuntimeModule

<!-- type=misc -->

## Class: `LoadScriptRuntimeModule`

* Extends: {HelperRuntimeModule}

### Constructors

#### `new LoadScriptRuntimeModule([withCreateScriptUrl][, withFetchPriority])`

##### Parameters

* `withCreateScriptUrl` {boolean}
* `withFetchPriority` {boolean}

* Returns: {LoadScriptRuntimeModule}

### Properties

#### `blocks`

* Type: {AsyncDependenciesBlock[]}

##### Inherited from

`HelperRuntimeModule.blocks`

***

#### `buildInfo`

* Type: {BuildInfo} Optional.

##### Inherited from

`HelperRuntimeModule.buildInfo`

***

#### `buildMeta`

* Type: {BuildMeta} Optional.

##### Inherited from

`HelperRuntimeModule.buildMeta`

***

#### `chunk`

* Type: {Chunk} Optional.

##### Inherited from

`HelperRuntimeModule.chunk`

***

#### `chunkGraph`

* Type: {ChunkGraph} Optional.

##### Inherited from

`HelperRuntimeModule.chunkGraph`

***

#### `chunksIterable`

* Type: {Iterable<Chunk>}

##### Inherited from

`HelperRuntimeModule.chunksIterable`

***

#### `codeGenerationDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

`HelperRuntimeModule.codeGenerationDependencies`

***

#### `compilation`

* Type: {Compilation} Optional.

##### Inherited from

`HelperRuntimeModule.compilation`

***

#### `context`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.context`

***

#### `debugId`

* Type: {number}

##### Inherited from

`HelperRuntimeModule.debugId`

***

#### `dependencies`

* Type: {Dependency[]}

##### Inherited from

`HelperRuntimeModule.dependencies`

***

#### `dependentHash`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.dependentHash`

***

#### `depth`

* Type: {number}

##### Inherited from

`HelperRuntimeModule.depth`

***

#### `errors`

* Type: {any}

##### Inherited from

`HelperRuntimeModule.errors`

***

#### `exportsArgument`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.exportsArgument`

***

#### `factoryMeta`

* Type: {FactoryMeta} Optional.

##### Inherited from

`HelperRuntimeModule.factoryMeta`

***

#### `fullHash`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.fullHash`

***

#### `hasEqualsChunks`

* Type: {any}

##### Inherited from

`HelperRuntimeModule.hasEqualsChunks`

***

#### `hash`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.hash`

***

#### `hot`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.hot`

***

#### `id`

* Type: {string|number}

##### Deprecated

##### Inherited from

`HelperRuntimeModule.id`

***

#### `index`

* Type: {number}

##### Inherited from

`HelperRuntimeModule.index`

***

#### `index2`

* Type: {number}

##### Inherited from

`HelperRuntimeModule.index2`

***

#### `issuer`

* Type: {Module} Optional.

##### Inherited from

`HelperRuntimeModule.issuer`

***

#### `isUsed`

* Type: {any}

##### Inherited from

`HelperRuntimeModule.isUsed`

***

#### `layer`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.layer`

***

#### `moduleArgument`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.moduleArgument`

***

#### `name`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.name`

***

#### `needId`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.needId`

***

#### `optimizationBailout`

* Type: {string|Function[]}

##### Deprecated

##### Inherited from

`HelperRuntimeModule.optimizationBailout`

***

#### `optional`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.optional`

***

#### `parent`

* Type: {DependenciesBlock} Optional.

##### Inherited from

`HelperRuntimeModule.parent`

***

#### `presentationalDependencies`

* Type: {Dependency[]} Optional.

##### Inherited from

`HelperRuntimeModule.presentationalDependencies`

***

#### `profile`

* Type: {ModuleProfile} Optional.

##### Inherited from

`HelperRuntimeModule.profile`

***

#### `renderedHash`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.renderedHash`

***

#### `resolveOptions`

* Type: {ResolveOptions} Optional.

##### Inherited from

`HelperRuntimeModule.resolveOptions`

***

#### `stage`

* Type: {number}

##### Inherited from

`HelperRuntimeModule.stage`

***

#### `type`

* Type: {string}

##### Inherited from

`HelperRuntimeModule.type`

***

#### `used`

* Type: {any}

##### Inherited from

`HelperRuntimeModule.used`

***

#### `usedExports`

* Type: {boolean|SortableSet<string>}

##### Inherited from

`HelperRuntimeModule.usedExports`

***

#### `useSimpleSourceMap`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.useSimpleSourceMap`

***

#### `useSourceMap`

* Type: {boolean}

##### Inherited from

`HelperRuntimeModule.useSourceMap`

***

#### `warnings`

* Type: {any}

##### Inherited from

`HelperRuntimeModule.warnings`

***

#### `STAGE_ATTACH`

* Type: {number}

Runtime modules which attach to handlers of other runtime modules

##### Overrides

`HelperRuntimeModule.STAGE_ATTACH`

***

#### `STAGE_BASIC`

* Type: {number}

Runtime modules with simple dependencies on other runtime modules

##### Overrides

`HelperRuntimeModule.STAGE_BASIC`

***

#### `STAGE_NORMAL`

* Type: {number}

Runtime modules without any dependencies to other runtime modules

##### Overrides

`HelperRuntimeModule.STAGE_NORMAL`

***

#### `STAGE_TRIGGER`

* Type: {number}

Runtime modules which trigger actions on bootstrap

##### Overrides

`HelperRuntimeModule.STAGE_TRIGGER`

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

* Returns: {LoadScriptCompilationHooks}

***

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
