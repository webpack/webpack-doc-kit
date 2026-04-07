# Runtime

<!-- type=misc -->

## Class: `RuntimeModule`

* Extends: {Module}

### Constructors

#### `new RuntimeModule(name[, stage])`

##### Parameters

* `name` {string}
* `stage` {number}

* Returns: {RuntimeModule}

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

#### `chunk`

* Type: {Chunk} Optional.

***

#### `chunkGraph`

* Type: {ChunkGraph} Optional.

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

#### `compilation`

* Type: {Compilation} Optional.

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

#### `dependentHash`

* Type: {boolean}

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

#### `factoryMeta`

* Type: {FactoryMeta} Optional.

##### Inherited from

[`Module`](Module.md).[`factoryMeta`](Module.md#factorymeta)

***

#### `fullHash`

* Type: {boolean}

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

#### `name`

* Type: {string}

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

#### `resolveOptions`

* Type: {ResolveOptions} Optional.

##### Inherited from

[`Module`](Module.md).[`resolveOptions`](Module.md#resolveoptions)

***

#### `stage`

* Type: {number}

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

#### `STAGE_ATTACH`

* Type: {number}

Runtime modules which attach to handlers of other runtime modules

***

#### `STAGE_BASIC`

* Type: {number}

Runtime modules with simple dependencies on other runtime modules

***

#### `STAGE_NORMAL`

* Type: {number}

Runtime modules without any dependencies to other runtime modules

***

#### `STAGE_TRIGGER`

* Type: {number}

Runtime modules which trigger actions on bootstrap

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

## `RuntimeGlobals`

## `amdDefine`

* Type: {"__webpack_require__.amdD"}

## `amdOptions`

* Type: {"__webpack_require__.amdO"}

## `asyncModule`

* Type: {"__webpack_require__.a"}

## `asyncModuleDoneSymbol`

* Type: {"__webpack_require__.aD"}

## `asyncModuleExportSymbol`

* Type: {"__webpack_require__.aE"}

## `baseURI`

* Type: {"__webpack_require__.b"}

## `chunkCallback`

* Type: {"webpackChunk"}

## `chunkName`

* Type: {"__webpack_require__.cn"}

## `compatGetDefaultExport`

* Type: {"__webpack_require__.n"}

## `createFakeNamespaceObject`

* Type: {"__webpack_require__.t"}

## `createScript`

* Type: {"__webpack_require__.ts"}

## `createScriptUrl`

* Type: {"__webpack_require__.tu"}

## `cssInjectStyle`

* Type: {"__webpack_require__.is"}

## `cssMergeStyleSheets`

* Type: {"__webpack_require__.mcs"}

## `currentRemoteGetScope`

* Type: {"__webpack_require__.R"}

## `deferredModuleAsyncTransitiveDependencies`

* Type: {"__webpack_require__.zT"}

## `deferredModuleAsyncTransitiveDependenciesSymbol`

* Type: {"__webpack_require__.zS"}

## `definePropertyGetters`

* Type: {"__webpack_require__.d"}

## `ensureChunk`

* Type: {"__webpack_require__.e"}

## `ensureChunkHandlers`

* Type: {"__webpack_require__.f"}

## `ensureChunkIncludeEntries`

* Type: {"__webpack_require__.f (include entries)"}

## `entryModuleId`

* Type: {"__webpack_require__.s"}

## `esmId`

* Type: {"__webpack_esm_id__"}

## `esmIds`

* Type: {"__webpack_esm_ids__"}

## `esmModules`

* Type: {"__webpack_esm_modules__"}

## `esmRuntime`

* Type: {"__webpack_esm_runtime__"}

## `exports`

* Type: {"__webpack_exports__"}

## `externalInstallChunk`

* Type: {"__webpack_require__.C"}

## `getChunkCssFilename`

* Type: {"__webpack_require__.k"}

## `getChunkScriptFilename`

* Type: {"__webpack_require__.u"}

## `getChunkUpdateCssFilename`

* Type: {"__webpack_require__.hk"}

## `getChunkUpdateScriptFilename`

* Type: {"__webpack_require__.hu"}

## `getFullHash`

* Type: {"__webpack_require__.h"}

## `getTrustedTypesPolicy`

* Type: {"__webpack_require__.tt"}

## `getUpdateManifestFilename`

* Type: {"__webpack_require__.hmrF"}

## `global`

* Type: {"__webpack_require__.g"}

## `harmonyModuleDecorator`

* Type: {"__webpack_require__.hmd"}

## `hasCssModules`

* Type: {"has css modules"}

## `hasFetchPriority`

* Type: {"has fetch priority"}

## `hasOwnProperty`

* Type: {"__webpack_require__.o"}

## `hmrDownloadManifest`

* Type: {"__webpack_require__.hmrM"}

## `hmrDownloadUpdateHandlers`

* Type: {"__webpack_require__.hmrC"}

## `hmrInvalidateModuleHandlers`

* Type: {"__webpack_require__.hmrI"}

## `hmrModuleData`

* Type: {"__webpack_require__.hmrD"}

## `hmrRuntimeStatePrefix`

* Type: {"__webpack_require__.hmrS"}

## `initializeSharing`

* Type: {"__webpack_require__.I"}

## `instantiateWasm`

* Type: {"__webpack_require__.v"}

## `interceptModuleExecution`

* Type: {"__webpack_require__.i"}

## `loadScript`

* Type: {"__webpack_require__.l"}

## `makeDeferredNamespaceObject`

* Type: {"__webpack_require__.z"}

## `makeNamespaceObject`

* Type: {"__webpack_require__.r"}

## `makeOptimizedDeferredNamespaceObject`

* Type: {"__webpack_require__.zO"}

## `module`

* Type: {"module"}

## `moduleCache`

* Type: {"__webpack_require__.c"}

## `moduleFactories`

* Type: {"__webpack_require__.m"}

## `moduleFactoriesAddOnly`

* Type: {"__webpack_require__.m (add only)"}

## `moduleId`

* Type: {"module.id"}

## `moduleLoaded`

* Type: {"module.loaded"}

## `nodeModuleDecorator`

* Type: {"__webpack_require__.nmd"}

## `onChunksLoaded`

* Type: {"__webpack_require__.O"}

## `prefetchChunk`

* Type: {"__webpack_require__.E"}

## `prefetchChunkHandlers`

* Type: {"__webpack_require__.F"}

## `preloadChunk`

* Type: {"__webpack_require__.G"}

## `preloadChunkHandlers`

* Type: {"__webpack_require__.H"}

## `publicPath`

* Type: {"__webpack_require__.p"}

## `relativeUrl`

* Type: {"__webpack_require__.U"}

## `require`

* Type: {"__webpack_require__"}

## `requireScope`

* Type: {"__webpack_require__.*"}

## `returnExportsFromRuntime`

* Type: {"return-exports-from-runtime"}

## `runtimeId`

* Type: {"__webpack_require__.j"}

## `scriptNonce`

* Type: {"__webpack_require__.nc"}

## `shareScopeMap`

* Type: {"__webpack_require__.S"}

## `startup`

* Type: {"__webpack_require__.x"}

## `startupEntrypoint`

* Type: {"__webpack_require__.X"}

## `startupNoDefault`

* Type: {"__webpack_require__.x (no default handler)"}

## `startupOnlyAfter`

* Type: {"__webpack_require__.x (only after)"}

## `startupOnlyBefore`

* Type: {"__webpack_require__.x (only before)"}

## `system`

* Type: {"__webpack_require__.System"}

## `systemContext`

* Type: {"__webpack_require__.y"}

## `thisAsExports`

* Type: {"top-level-this-exports"}

## `toBinary`

* Type: {"__webpack_require__.tb"}

## `uncaughtErrorHandler`

* Type: {"__webpack_require__.oe"}

## `wasmInstances`

* Type: {"__webpack_require__.w"}

## Class: `RuntimeChunkPlugin`

### Constructors

#### `new RuntimeChunkPlugin([options])`

##### Parameters

* `options` {object}
  * `name` {Function} The name factory for the runtime chunks.
    * `entrypoint` {object}
      * `name` {string}
    * Returns: {string}

* Returns: {RuntimeChunkPlugin}

### Properties

#### `options`

* Type: {object}

* `name` {string|Function}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## Class: `RuntimeSpecMap`

### Type Parameters

### Constructors

#### `new RuntimeSpecMap([clone])`

##### Parameters

* `clone` {RuntimeSpecMap<T, R>}

* Returns: {RuntimeSpecMap<T, R>}

### Properties

#### `size`

* Type: {number}

### Methods

#### `delete(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {void}

***

#### `get(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {R}

***

#### `has(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {boolean}

***

#### `keys()`

* Returns: {RuntimeSpec[]}

***

#### `provide(runtime, computer)`

##### Parameters

* `runtime` {RuntimeSpec}
* `computer` {Function}
  * Returns: {R}

* Returns: {R}

***

#### `set(runtime, value)`

##### Parameters

* `runtime` {RuntimeSpec}
* `value` {R}

* Returns: {void}

***

#### `update(runtime, fn)`

##### Parameters

* `runtime` {RuntimeSpec}
* `fn` {Function}
  * `value` {R}
  * Returns: {R}

* Returns: {void}

***

#### `values()`

* Returns: {IterableIterator<R>}

## Class: `RuntimeSpecSet`

### Constructors

#### `new RuntimeSpecSet([iterable])`

##### Parameters

* `iterable` {Iterable<RuntimeSpec>}

* Returns: {RuntimeSpecSet}

### Properties

#### `size`

* Type: {number}

### Methods

#### `[iterator]()`

* Returns: {IterableIterator<RuntimeSpec>}

***

#### `add(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {void}

***

#### `has(runtime)`

##### Parameters

* `runtime` {RuntimeSpec}

* Returns: {boolean}
