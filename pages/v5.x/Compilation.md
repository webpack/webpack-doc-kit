# Compilation

<!-- type=misc -->

## Class: `Compilation`

### Constructors

#### `new Compilation(compiler, params)`

##### Parameters

* `compiler` {Compiler}
* `params` {CompilationParams}

* Returns: {Compilation}

Creates an instance of Compilation.

### Properties

#### `additionalChunkAssets`

* Type: {string[]}

***

#### `addModuleQueue`

* Type: {AsyncQueue<Module, string, Module>}

***

#### `assets`

* Type: {CompilationAssets}

***

#### `assetsInfo`

* Type: {Map<string, AssetInfo>}

***

#### `asyncEntrypoints`

* Type: {Entrypoint[]}

***

#### `bail`

* Type: {boolean}

***

#### `buildDependencies`

* Type: {LazySet<string>}

***

#### `buildQueue`

* Type: {AsyncQueue<Module, Module, Module>}

***

#### `buildTimeExecutedModules`

* Type: {WeakSet<Module>}

***

#### `builtModules`

* Type: {WeakSet<Module>}

***

#### `children`

* Type: {Compilation[]}

***

#### `childrenCounters`

* Type: {Record<string, number>}

***

#### `chunkGraph`

* Type: {ChunkGraph}

***

#### `chunkGroups`

* Type: {ChunkGroup[]}

***

#### `chunks`

* Type: {Set<Chunk>}

***

#### `chunkTemplate`

* Type: {ChunkTemplate}

***

#### `codeGeneratedModules`

* Type: {WeakSet<Module>}

***

#### `codeGenerationResults`

* Type: {CodeGenerationResults} Optional.

***

#### `comparedForEmitAssets`

* Type: {Set<string>}

***

#### `compilationDependencies`

* Type: {object}

* `add` {Function}
  * `item` {string}
  * Returns: {LazySet<string>}

##### Deprecated

***

#### `compiler`

* Type: {Compiler}

***

#### `compilerPath`

* Type: {string}

***

#### `contextDependencies`

* Type: {LazySet<string>}

***

#### `creatingModuleDuringBuild`

* Type: {WeakMap<Module, Set<Module>>}

Modules in value are building during the build of Module in key.
Means value blocking key from finishing.
Needed to detect build cycles.

***

#### `dependencyFactories`

* Type: {Map<DependencyConstructor, ModuleFactory>}

***

#### `dependencyTemplates`

* Type: {DependencyTemplates}

***

#### `emittedAssets`

* Type: {Set<string>}

***

#### `endTime`

* Type: {number} Optional.

***

#### `entries`

* Type: {Map<string, EntryData>}

***

#### `entrypoints`

* Type: {Map<string, Entrypoint>}

***

#### `errors`

* Type: {Error[]}

***

#### `factorizeQueue`

* Type: {AsyncQueue<FactorizeModuleOptions, string, Module|ModuleFactoryResult>}

***

#### `fileDependencies`

* Type: {LazySet<string>}

***

#### `fileSystemInfo`

* Type: {FileSystemInfo}

***

#### `fullHash`

* Type: {string} Optional.

***

#### `globalEntry`

* Type: {EntryData}

***

#### `hash`

* Type: {string} Optional.

***

#### `hooks`

* Type: {Readonly<object>}

***

#### `inputFileSystem`

* Type: {InputFileSystem}

***

#### `logger`

* Type: {WebpackLogger}

***

#### `logging`

* Type: {Map<string, LogEntry[]>}

***

#### `mainTemplate`

* Type: {MainTemplate}

***

#### `missingDependencies`

* Type: {LazySet<string>}

***

#### `moduleGraph`

* Type: {ModuleGraph}

***

#### `moduleMemCaches`

* Type: {Map<Module, WeakTupleMap<any[], any>>} Optional.

***

#### `moduleMemCaches2`

* Type: {Map<Module, WeakTupleMap<any[], any>>} Optional.

***

#### `modules`

* Type: {Set<Module>}

***

#### `moduleTemplates`

* Type: {ModuleTemplates}

***

#### `name`

* Type: {string} Optional.

***

#### `namedChunkGroups`

* Type: {Map<string, ChunkGroup>}

***

#### `namedChunks`

* Type: {Map<string, Chunk>}

***

#### `needAdditionalPass`

* Type: {boolean}

***

#### `options`

* Type: {WebpackOptionsNormalizedWithDefaults}

***

#### `outputOptions`

* Type: {OutputNormalizedWithDefaults}

***

#### `params`

* Type: {CompilationParams}

***

#### `processDependenciesQueue`

* Type: {AsyncQueue<Module, Module, Module>}

***

#### `profile`

* Type: {boolean}

***

#### `rebuildQueue`

* Type: {AsyncQueue<Module, Module, Module>}

***

#### `records`

* Type: {Records}

***

#### `requestShortener`

* Type: {RequestShortener}

***

#### `resolverFactory`

* Type: {ResolverFactory}

***

#### `runtimeTemplate`

* Type: {RuntimeTemplate}

***

#### `startTime`

* Type: {number} Optional.

***

#### `usedChunkIds`

* Type: {Set<number>}

***

#### `usedModuleIds`

* Type: {Set<number>}

***

#### `valueCacheVersions`

* Type: {Map<string, ValueCacheVersion>}

***

#### `warnings`

* Type: {Error[]}

***

#### `PROCESS_ASSETS_STAGE_ADDITIONAL`

* Type: {number}

Add additional assets to the compilation.

***

#### `PROCESS_ASSETS_STAGE_ADDITIONS`

* Type: {number}

Add additional sections to existing assets, like a banner or initialization code.

***

#### `PROCESS_ASSETS_STAGE_ANALYSE`

* Type: {number}

Analyse existing assets.

***

#### `PROCESS_ASSETS_STAGE_DERIVED`

* Type: {number}

Derive new assets from existing assets.
Existing assets should not be treated as complete.

***

#### `PROCESS_ASSETS_STAGE_DEV_TOOLING`

* Type: {number}

Add development tooling to assets, e. g. by extracting a SourceMap.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE`

* Type: {number}

Optimize existing assets in a general way.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY`

* Type: {number}

Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT`

* Type: {number}

Optimize the count of existing assets, e. g. by merging them.
Only assets of the same type should be merged.
For assets of different types see PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE_HASH`

* Type: {number}

Optimize the hashes of the assets, e. g. by generating real hashes of the asset content.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE`

* Type: {number}

Optimize the count of existing assets, e. g. by inlining assets of into other assets.
Only assets of different types should be inlined.
For assets of the same type see PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE`

* Type: {number}

Optimize the size of existing assets, e. g. by minimizing or omitting whitespace.

***

#### `PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER`

* Type: {number}

Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset.

***

#### `PROCESS_ASSETS_STAGE_PRE_PROCESS`

* Type: {number}

Basic preprocessing of assets.

***

#### `PROCESS_ASSETS_STAGE_REPORT`

* Type: {number}

Creating assets for reporting purposes.

***

#### `PROCESS_ASSETS_STAGE_SUMMARIZE`

* Type: {number}

Summarize the list of existing assets
e. g. creating an assets manifest of Service Workers.

### Methods

#### `addAsyncEntrypoint(options, module, loc, request)`

##### Parameters

* `options` {EntryOptions}
* `module` {Module}
* `loc` {DependencyLocation}
* `request` {string}

* Returns: {Entrypoint}

***

#### `addChunk([name])`

##### Parameters

* `name` {string}

* Returns: {Chunk}

This method first looks to see if a name is provided for a new chunk,
and first looks to see if any named chunks already exist and reuse that chunk instead.

***

#### `addChunkInGroup(groupOptions[, module][, loc][, request])`

##### Parameters

* `groupOptions` {string|ChunkGroupOptions}
* `module` {Module}
* `loc` {SyntheticDependencyLocation|RealDependencyLocation}
* `request` {string}

* Returns: {ChunkGroup}

If `module` is passed, `loc` and `request` must also be passed.

***

#### `addEntry(context, entry, optionsOrName, callback)`

##### Parameters

* `context` {string}
* `entry` {Dependency}
* `optionsOrName` {string|EntryOptions}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `addInclude(context, dependency, options, callback)`

##### Parameters

* `context` {string}
* `dependency` {Dependency}
* `options` {EntryOptions}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `addModule(module, callback)`

##### Parameters

* `module` {Module}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `addModuleChain(context, dependency, callback)`

##### Parameters

* `context` {string}
* `dependency` {Dependency}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `addModuleTree(__namedParameters, callback)`

##### Parameters

* `__namedParameters` {object}
  * `context` {string} context string path
  * `contextInfo` {Partial<ModuleFactoryCreateDataContextInfo>} additional context info for the root module
  * `dependency` {Dependency} dependency used to create Module chain
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `addRuntimeModule(chunk, module[, chunkGraph])`

##### Parameters

* `chunk` {Chunk}
* `module` {RuntimeModule}
* `chunkGraph` {ChunkGraph}

* Returns: {void}

***

#### `assignDepth(module)`

> Stability: 0 - Deprecated

##### Parameters

* `module` {Module}

* Returns: {void}

***

#### `assignDepths(modules)`

##### Parameters

* `modules` {Set<Module>}

* Returns: {void}

***

#### `assignRuntimeIds()`

* Returns: {void}

***

#### `buildModule(module, callback)`

##### Parameters

* `module` {Module}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

Schedules a build of the module object

***

#### `checkConstraints()`

* Returns: {void}

***

#### `clearAssets()`

* Returns: {void}

***

#### `codeGeneration(callback)`

##### Parameters

* `callback` {Function}
  * `err` {WebpackError}
  * Returns: {void}

* Returns: {void}

***

#### `createChildCompiler(name[, outputOptions][, plugins])`

##### Parameters

* `name` {string}
* `outputOptions` {Partial<OutputNormalized>}
* `plugins` {false|""|0|Function|WebpackPluginInstance[]}

* Returns: {Compiler}

This function allows you to run another instance of webpack inside of webpack however as
a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
from parent (or top level compiler) and creates a child Compilation

***

#### `createChunkAssets(callback)`

##### Parameters

* `callback` {Function}
  * `err` {WebpackError}
  * Returns: {void}

* Returns: {void}

***

#### `createHash()`

* Returns: {CodeGenerationJob[]}

***

#### `createModuleAssets()`

* Returns: {void}

***

#### `createModuleHashes()`

* Returns: {void}

***

#### `createStatsFactory(options)`

##### Parameters

* `options` {NormalizedStatsOptions}

* Returns: {StatsFactory}

***

#### `createStatsOptions([optionsOrPreset][, context])`

##### Parameters

* `optionsOrPreset` {string|boolean|StatsOptions}
* `context` {CreateStatsOptionsContext}

* Returns: {NormalizedStatsOptions}

***

#### `createStatsPrinter(options)`

##### Parameters

* `options` {NormalizedStatsOptions}

* Returns: {StatsPrinter}

***

#### `deleteAsset(file)`

##### Parameters

* `file` {string}

* Returns: {void}

***

#### `emitAsset(file, source[, assetInfo])`

##### Parameters

* `file` {string}
* `source` {Source}
* `assetInfo` {AssetInfo}

* Returns: {void}

***

#### `executeModule(module, options, callback)`

##### Parameters

* `module` {Module}
* `options` {ExecuteModuleOptions}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {ExecuteModuleResult}
  * Returns: {void}

* Returns: {void}

***

#### `factorizeModule(options, callback)`

##### Call Signature

##### Parameters

* `options` {FactorizeModuleOptions & object}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

##### Call Signature

##### Parameters

* `options` {FactorizeModuleOptions & object}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {ModuleFactoryResult}
  * Returns: {void}

* Returns: {void}

***

#### `findModule(identifier)`

##### Parameters

* `identifier` {string}

* Returns: {Module}

Attempts to search for a module by its identifier

***

#### `finish(callback)`

##### Parameters

* `callback` {Function}
  * `err` {WebpackError}
  * Returns: {void}

* Returns: {void}

***

#### `getAsset(name)`

##### Parameters

* `name` {string}

* Returns: {Readonly<Asset>}

***

#### `getAssetPath(filename, data)`

##### Parameters

* `filename` {TemplatePath}
* `data` {PathData}

* Returns: {string}

***

#### `getAssetPathWithInfo(filename, data)`

##### Parameters

* `filename` {TemplatePath}
* `data` {PathData}

* Returns: {InterpolatedPathAndAssetInfo}

***

#### `getAssets()`

* Returns: {Readonly<Asset>[]}

***

#### `getCache(name)`

##### Parameters

* `name` {string}

* Returns: {CacheFacade}

***

#### `getDependencyReferencedExports(dependency, runtime)`

##### Parameters

* `dependency` {Dependency}
* `runtime` {RuntimeSpec}

* Returns: {string[]|ReferencedExport[]}

***

#### `getErrors()`

* Returns: {Error[]}

***

#### `getLogger(name)`

##### Parameters

* `name` {string|Function}

* Returns: {WebpackLogger}

***

#### `getModule(module)`

##### Parameters

* `module` {Module}

* Returns: {Module}

Fetches a module from a compilation by its identifier

***

#### `getPath(filename[, data])`

##### Parameters

* `filename` {TemplatePath}
* `data` {PathData}

* Returns: {string}

***

#### `getPathWithInfo(filename[, data])`

##### Parameters

* `filename` {TemplatePath}
* `data` {PathData}

* Returns: {InterpolatedPathAndAssetInfo}

***

#### `getRenderManifest(options)`

##### Parameters

* `options` {RenderManifestOptions}

* Returns: {RenderManifestEntry[]}

***

#### `getStats()`

* Returns: {Stats}

***

#### `getWarnings()`

* Returns: {Error[]}

***

#### `handleModuleCreation(__namedParameters, callback)`

##### Parameters

* `__namedParameters` {HandleModuleCreationOptions}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `patchChunksAfterReasonRemoval(module, chunk)`

##### Parameters

* `module` {Module}
* `chunk` {Chunk}

* Returns: {void}

***

#### `processModuleDependencies(module, callback)`

##### Parameters

* `module` {Module}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `processModuleDependenciesNonRecursive(module)`

##### Parameters

* `module` {Module}

* Returns: {void}

***

#### `processRuntimeRequirements([__namedParameters])`

##### Parameters

* `__namedParameters` {object}
  * `chunkGraph` {ChunkGraph} the chunk graph
  * `chunkGraphEntries` {Iterable<Chunk>} chunkGraphEntries
  * `chunks` {Iterable<Chunk>} chunks
  * `codeGenerationResults` {CodeGenerationResults} codeGenerationResults
  * `modules` {Iterable<Module>} modules

* Returns: {void}

***

#### `rebuildModule(module, callback)`

##### Parameters

* `module` {Module}
* `callback` {Function}
  * `err` {WebpackError}
  * `result` {Module}
  * Returns: {void}

* Returns: {void}

***

#### `removeChunkFromDependencies(block, chunk)`

##### Parameters

* `block` {DependenciesBlock}
* `chunk` {Chunk}

* Returns: {void}

***

#### `removeReasonsOfDependencyBlock(module, block)`

##### Parameters

* `module` {Module}
* `block` {DependenciesBlockLike}

* Returns: {void}

***

#### `renameAsset(file, newFile)`

##### Parameters

* `file` {string}
* `newFile` {string}

* Returns: {void}

***

#### `reportDependencyErrorsAndWarnings(module, blocks)`

##### Parameters

* `module` {Module}
* `blocks` {DependenciesBlock[]}

* Returns: {boolean}

***

#### `seal(callback)`

##### Parameters

* `callback` {Function}
  * `err` {WebpackError}
  * Returns: {void}

* Returns: {void}

***

#### `sortItemsWithChunkIds()`

* Returns: {void}

***

#### `summarizeDependencies()`

* Returns: {void}

***

#### `unseal()`

* Returns: {void}

***

#### `updateAsset(file, newSourceOrFunction[, assetInfoUpdateOrFunction])`

##### Parameters

* `file` {string}
* `newSourceOrFunction` {Source|Function}
* `assetInfoUpdateOrFunction` {AssetInfo|Function}

* Returns: {void}
