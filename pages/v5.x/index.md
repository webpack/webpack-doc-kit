# webpack

<!-- type=misc -->

## `webpack`

* Type: {Function & object}

### Type Declaration

* `AsyncDependenciesBlock` {AsyncDependenciesBlock}
* `AutomaticPrefetchPlugin` {AutomaticPrefetchPlugin}
* `BannerPlugin` {BannerPlugin}
* `cache` {object}
  * `MemoryCachePlugin` {MemoryCachePlugin}
* `Cache` {Cache}
* `Chunk` {Chunk}
* `ChunkGraph` {ChunkGraph}
* `CleanPlugin` {CleanPlugin}
* `cli` {cli}
* `Compilation` {Compilation}
* `Compiler` {Compiler}
* `ConcatenationScope` {ConcatenationScope}
* `config` {object}
  * `applyWebpackOptionsDefaults` {Function}
    * `options` {WebpackOptionsNormalized} options to be modified
    * `compilerIndex` {number} index of compiler
    * Returns: {ResolvedOptions} Resolved options after apply defaults
  * `getNormalizedWebpackOptions` {Function}
    * `config` {WebpackOptions} input config
    * Returns: {WebpackOptionsNormalized} normalized options
* `container` {object}
  * `ContainerPlugin` {ContainerPlugin}
  * `ContainerReferencePlugin` {ContainerReferencePlugin}
  * `ModuleFederationPlugin` {ModuleFederationPlugin}
  * `scope` {Function}
    * `scope` {string} scope name
    * `options` {ContainerOptionsFormat<T>} options passed by the user
    * Returns: {Record<string, string|string[]|T>} options to spread or pass
* `ContextExclusionPlugin` {ContextExclusionPlugin}
* `ContextReplacementPlugin` {ContextReplacementPlugin}
* `css` {object}
  * `CssModulesPlugin` {CssModulesPlugin}
* `debug` {object}
  * `ProfilingPlugin` {ProfilingPlugin}
* `DefinePlugin` {DefinePlugin}
* `DelegatedPlugin` {DelegatedPlugin}
* `dependencies` {object}
  * `ConstDependency` {ConstDependency}
  * `HarmonyImportDependency` {HarmonyImportDependency}
  * `ModuleDependency` {ModuleDependency}
  * `NullDependency` {NullDependency}
* `Dependency` {Dependency}
* `DllPlugin` {DllPlugin}
* `DllReferencePlugin` {DllReferencePlugin}
* `DotenvPlugin` {DotenvPlugin}
* `DynamicEntryPlugin` {DynamicEntryPlugin}
* `electron` {object}
  * `ElectronTargetPlugin` {ElectronTargetPlugin}
* `EntryOptionPlugin` {EntryOptionPlugin}
* `EntryPlugin` {EntryPlugin}
* `EnvironmentPlugin` {EnvironmentPlugin}
* `esm` {object}
  * `ModuleChunkLoadingRuntimeModule` {ModuleChunkLoadingRuntimeModule}
* `EvalDevToolModulePlugin` {EvalDevToolModulePlugin}
* `EvalSourceMapDevToolPlugin` {EvalSourceMapDevToolPlugin}
* `experiments` {object}
  * `ids` {object}
    * `SyncModuleIdsPlugin` {SyncModuleIdsPlugin}
  * `schemes` {object}
    * `HttpUriPlugin` {HttpUriPlugin}
    * `VirtualUrlPlugin` {VirtualUrlPlugin}
* `ExternalModule` {ExternalModule}
* `ExternalsPlugin` {ExternalsPlugin}
* `Generator` {Generator}
* `HotModuleReplacementPlugin` {HotModuleReplacementPlugin}
* `HotUpdateChunk` {HotUpdateChunk}
* `ids` {object}
  * `ChunkModuleIdRangePlugin` {ChunkModuleIdRangePlugin}
  * `DeterministicChunkIdsPlugin` {DeterministicChunkIdsPlugin}
  * `DeterministicModuleIdsPlugin` {DeterministicModuleIdsPlugin}
  * `HashedModuleIdsPlugin` {HashedModuleIdsPlugin}
  * `NamedChunkIdsPlugin` {NamedChunkIdsPlugin}
  * `NamedModuleIdsPlugin` {NamedModuleIdsPlugin}
  * `NaturalModuleIdsPlugin` {NaturalModuleIdsPlugin}
  * `OccurrenceChunkIdsPlugin` {OccurrenceChunkIdsPlugin}
  * `OccurrenceModuleIdsPlugin` {OccurrenceModuleIdsPlugin}
* `IgnorePlugin` {IgnorePlugin}
* `InitFragment` {InitFragment}
* `javascript` {object}
  * `EnableChunkLoadingPlugin` {EnableChunkLoadingPlugin}
  * `JavascriptModulesPlugin` {JavascriptModulesPlugin}
  * `JavascriptParser` {JavascriptParser}
* `JavascriptModulesPlugin` {JavascriptModulesPlugin}
* `LibManifestPlugin` {LibManifestPlugin}
* `library` {object}
  * `AbstractLibraryPlugin` {AbstractLibraryPlugin}
  * `EnableLibraryPlugin` {EnableLibraryPlugin}
* `LibraryTemplatePlugin` {LibraryTemplatePlugin}
* `LoaderOptionsPlugin` {LoaderOptionsPlugin}
* `LoaderTargetPlugin` {LoaderTargetPlugin}
* `ManifestPlugin` {ManifestPlugin}
* `Module` {Module}
* `ModuleFactory` {ModuleFactory}
* `ModuleFilenameHelpers` {ModuleFilenameHelpers}
* `ModuleGraph` {ModuleGraph}
* `ModuleGraphConnection` {ModuleGraphConnection}
* `MultiCompiler` {MultiCompiler}
* `node` {object}
  * `NodeEnvironmentPlugin` {NodeEnvironmentPlugin}
  * `NodeSourcePlugin` {NodeSourcePlugin}
  * `NodeTargetPlugin` {NodeTargetPlugin}
  * `NodeTemplatePlugin` {NodeTemplatePlugin}
  * `ReadFileCompileAsyncWasmPlugin` {ReadFileCompileAsyncWasmPlugin}
  * `ReadFileCompileWasmPlugin` {ReadFileCompileWasmPlugin}
* `NoEmitOnErrorsPlugin` {NoEmitOnErrorsPlugin}
* `NormalModule` {NormalModule}
* `NormalModuleReplacementPlugin` {NormalModuleReplacementPlugin}
* `OptimizationStages` {OptimizationStages}
* `optimize` {object}
  * `AggressiveMergingPlugin` {AggressiveMergingPlugin}
  * `AggressiveSplittingPlugin` {AggressiveSplittingPlugin}
  * `InnerGraph` {InnerGraph}
  * `LimitChunkCountPlugin` {LimitChunkCountPlugin}
  * `MergeDuplicateChunksPlugin` {MergeDuplicateChunksPlugin}
  * `MinChunkSizePlugin` {MinChunkSizePlugin}
  * `ModuleConcatenationPlugin` {ModuleConcatenationPlugin}
  * `RealContentHashPlugin` {RealContentHashPlugin}
  * `RuntimeChunkPlugin` {RuntimeChunkPlugin}
  * `SideEffectsFlagPlugin` {SideEffectsFlagPlugin}
  * `SplitChunksPlugin` {SplitChunksPlugin}
* `Parser` {Parser}
* `PlatformPlugin` {PlatformPlugin}
* `prefetch` {object}
  * `ChunkPrefetchPreloadPlugin` {ChunkPrefetchPreloadPlugin}
* `PrefetchPlugin` {PrefetchPlugin}
* `ProgressPlugin` {ProgressPlugin}
* `ProvidePlugin` {ProvidePlugin}
* `runtime` {object}
  * `GetChunkFilenameRuntimeModule` {GetChunkFilenameRuntimeModule}
  * `LoadScriptRuntimeModule` {LoadScriptRuntimeModule}
* `RuntimeGlobals` {RuntimeGlobals}
* `RuntimeModule` {RuntimeModule}
* `sharing` {object}
  * `ConsumeSharedPlugin` {ConsumeSharedPlugin}
  * `ProvideSharedPlugin` {ProvideSharedPlugin}
  * `scope` {Function}
    * `scope` {string} scope name
    * `options` {ContainerOptionsFormat<T>} options passed by the user
    * Returns: {Record<string, string|string[]|T>} options to spread or pass
  * `SharePlugin` {SharePlugin}
* `SingleEntryPlugin` {EntryPlugin}
* `SourceMapDevToolPlugin` {SourceMapDevToolPlugin}
* `sources` {webpack-sources}
* `Stats` {Stats}
* `Template` {Template}
* `UsageState` {Readonly<object>}
* `util` {object}
  * `cleverMerge` {Function}
    * `first` {T} first object
    * `second` {O} second object
    * Returns: {T|O|T & O} merged object of first and second object
  * `comparators` {comparators}
  * `compileBooleanMatcher` {Function}
    * `fromLists` {Function}
      * `positiveItems` {string[]} positive items
      * `negativeItems` {string[]} negative items
      * Returns: {Function} a template function to determine the value at runtime
        * `value` {string}
        * Returns: {string}
    * `itemsToRegexp` {Function}
      * `itemsArr` {string[]} array of items
      * Returns: {string} regexp
  * `createHash` {Function}
  * `LazySet` {LazySet}
  * `runtime` {runtime}
  * `serialization` {object}
    * `MEASURE_END_OPERATION` {MEASURE_END_OPERATION} 
    * `MEASURE_START_OPERATION` {MEASURE_START_OPERATION} 
    * `buffersSerializer` {Serializer<EXPECTED_ANY, EXPECTED_ANY, EXPECTED_ANY>}
    * `createFileSerializer` {Function} 
      * `fs` {IntermediateFileSystem} filesystem
      * `hashFunction` {HashFunction} hash function to use
      * Returns: {Serializer<D, S, C>} file serializer
    * `MEASURE_END_OPERATION` {MEASURE_END_OPERATION} 
    * `MEASURE_START_OPERATION` {MEASURE_START_OPERATION} 
    * `NOT_SERIALIZABLE` {object}
    * `register` {Function}
      * `Constructor` {Constructor} the constructor
      * `request` {string} the request which will be required when deserializing
      * `name` {string} the name to make multiple serializer unique when sharing a request
      * `serializer` {ObjectSerializer} the serializer
      * Returns: {void} 
    * `registerLoader` {Function}
      * `regExp` {RegExp} RegExp for which the request is tested
      * `loader` {Function} loader to load the request, returns true when successful
        * `request` {string}
        * Returns: {boolean}
      * Returns: {void} 
    * `registerNotSerializable` {Function}
      * `Constructor` {Constructor} the constructor
      * Returns: {void} 
* `validate` {Function} 
  * `configuration` {WebpackOptions|MultiWebpackOptions}
  * Returns: {void} validate fn
* `validateSchema` {Function}
  * `schema` {Schema} a json schema
  * `options` {object|object[]} the options that should be validated
  * `validationConfiguration` {ValidationErrorConfiguration} configuration for generating errors
  * Returns: {void} 
* `ValidationError` {ValidationError}
* `version` {string}
* `wasm` {object}
  * `AsyncWebAssemblyModulesPlugin` {AsyncWebAssemblyModulesPlugin}
  * `EnableWasmLoadingPlugin` {EnableWasmLoadingPlugin}
* `WatchIgnorePlugin` {WatchIgnorePlugin}
* `web` {object}
  * `CssLoadingRuntimeModule` {CssLoadingRuntimeModule}
  * `FetchCompileAsyncWasmPlugin` {FetchCompileAsyncWasmPlugin}
  * `FetchCompileWasmPlugin` {FetchCompileWasmPlugin}
  * `JsonpChunkLoadingRuntimeModule` {JsonpChunkLoadingRuntimeModule}
  * `JsonpTemplatePlugin` {JsonpTemplatePlugin}
* `WebpackError` {WebpackError}
* `WebpackOptionsApply` {WebpackOptionsApply}
* `WebpackOptionsDefaulter` {WebpackOptionsDefaulter}
* `WebpackOptionsValidationError` {ValidationError}
* `webworker` {object}
  * `WebWorkerTemplatePlugin` {WebWorkerTemplatePlugin}
