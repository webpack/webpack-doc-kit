# esm

## 
### Class: `ModuleChunkLoadingRuntimeModule`

### Extends

- {RuntimeModule}

### Constructors

#### `new ModuleChunkLoadingRuntimeModule(runtimeRequirements)`

---
### ModuleChunkLoadingRuntimeModule

* `runtimeRequirements` {ReadonlySet<string>}

* ###Returns: {ModuleChunkLoadingRuntimeModule}

### Properties

* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `chunksIterable` {Iterable<Chunk>}
* `codeGenerationDependencies` {Dependency[]}
* `compilation` {Compilation}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `dependentHash` {boolean}
* `depth` {number}
* `errors` {any}
* `exportsArgument` {string}
* `factoryMeta` {FactoryMeta}
* `fullHash` {boolean}
* `hasEqualsChunks` {any}
* `hash` {string}
* `hot` {boolean}
* `id` {string|number} 
* `index` {number}
* `index2` {number}
* `issuer` {Module}
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string}
* `name` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} 
* `optional` {boolean}
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile}
* `renderedHash` {string}
* `resolveOptions` {ResolveOptions}
* `stage` {number}
* `type` {string}
* `used` {any}
* `usedExports` {boolean|SortableSet<string>}
* `useSimpleSourceMap` {boolean}
* `useSourceMap` {boolean}
* `warnings` {any}
* `STAGE_ATTACH` {number} Runtime modules which attach to handlers of other runtime modules
* `STAGE_BASIC` {number} Runtime modules with simple dependencies on other runtime modules
* `STAGE_NORMAL` {number} Runtime modules without any dependencies to other runtime modules
* `STAGE_TRIGGER` {number} Runtime modules which trigger actions on bootstrap

### Methods

#### `addBlock(block)`

---
### addBlock

* `block` {AsyncDependenciesBlock}

* ###Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

---
### addCacheDependencies

* `fileDependencies` {LazySet<string>}
* `contextDependencies` {LazySet<string>}
* `missingDependencies` {LazySet<string>}
* `buildDependencies` {LazySet<string>}

* ###Returns: {void}

#### `addChunk(chunk)`

---
### addChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `addCodeGenerationDependency(codeGenerationDependency)`

---
### addCodeGenerationDependency

* `codeGenerationDependency` {Dependency}

* ###Returns: {void}

#### `addDependency(dependency)`

---
### addDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `addError(error)`

---
### addError

* `error` {WebpackError}

* ###Returns: {void}

#### `addPresentationalDependency(presentationalDependency)`

---
### addPresentationalDependency

* `presentationalDependency` {Dependency}

* ###Returns: {void}

#### `addWarning(warning)`

---
### addWarning

* `warning` {WebpackError}

* ###Returns: {void}

#### `attach(compilation, chunk[, chunkGraph])`

---
### attach

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}

* ###Returns: {void}

#### `build(options, compilation, resolver, fs, callback)`

---
### build

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}

* ###Returns: {void}

#### `chunkCondition(chunk, compilation)`

---
### chunkCondition

* `chunk` {Chunk}
* `compilation` {Compilation}

* ###Returns: {boolean}

#### `cleanupForCache()`

---
### cleanupForCache

* ###Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

---
### clearDependenciesAndBlocks

* ###Returns: {void}

Removes all dependencies and blocks

#### `clearWarningsAndErrors()`

---
### clearWarningsAndErrors

* ###Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

---
### codeGeneration

* `context` {CodeGenerationContext}

* ###Returns: {CodeGenerationResult}

#### `deserialize(__namedParameters)`

---
### deserialize

* `__namedParameters` {ObjectDeserializerContext}

* ###Returns: {void}

#### `generate()`

---
### generate

* ###Returns: {string}

#### `getChunks()`

---
### getChunks

* ###Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

---
### getConcatenationBailoutReason

* `context` {ConcatenationBailoutReasonContext}

* ###Returns: {string}

#### `getErrors()`

---
### getErrors

* ###Returns: {Iterable<WebpackError, any, any>}

#### `getExportsType(moduleGraph[, strict])`

---
### getExportsType

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}

* ###Returns: {ExportsType}

#### `getGeneratedCode()`

---
### getGeneratedCode

* ###Returns: {string}

#### `getNumberOfChunks()`

---
### getNumberOfChunks

* ###Returns: {number}

#### `getNumberOfErrors()`

---
### getNumberOfErrors

* ###Returns: {number}

#### `getNumberOfWarnings()`

---
### getNumberOfWarnings

* ###Returns: {number}

#### `getRootBlock()`

---
### getRootBlock

* ###Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

---
### getSideEffectsConnectionState

* `moduleGraph` {ModuleGraph}

* ###Returns: {ConnectionState}

#### `getSourceBasicTypes()`

---
### getSourceBasicTypes

* ###Returns: {ReadonlySet<string>}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

---
### getSourceTypes

* ###Returns: {ReadonlySet<string>}

#### `getUnsafeCacheData()`

---
### getUnsafeCacheData

* ###Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

---
### getWarnings

* ###Returns: {Iterable<WebpackError, any, any>}

#### `hasChunkCondition()`

---
### hasChunkCondition

* ###Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

---
### hasReasonForChunk

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}

* ###Returns: {boolean}

#### `hasReasons(moduleGraph, runtime)`

---
### hasReasons

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}

* ###Returns: {boolean}

#### `identifier()`

---
### identifier

* ###Returns: {string}

#### `invalidateBuild()`

---
### invalidateBuild

* ###Returns: {void}

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

---
### isAccessibleInChunk

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

---
### isAccessibleInChunkGroup

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}

* ###Returns: {boolean}

#### `isEntryModule()`

---
### isEntryModule

* ###Returns: {boolean}

#### `isInChunk(chunk)`

---
### isInChunk

* `chunk` {Chunk}

* ###Returns: {boolean}

#### `isOptional(moduleGraph)`

---
### isOptional

* `moduleGraph` {ModuleGraph}

* ###Returns: {boolean}

#### `isProvided(exportName)`

---
### isProvided

* `exportName` {string}

* ###Returns: {boolean}

#### `libIdent(options)`

---
### libIdent

* `options` {LibIdentOptions}

* ###Returns: {string}

#### `nameForCondition()`

---
### nameForCondition

* ###Returns: {string}

#### `needBuild(context, callback)`

---
### needBuild

* `context` {NeedBuildContext}
* `callback` {object}

* ###Returns: {void}

#### `needRebuild(fileTimestamps, contextTimestamps)`

---
### needRebuild

> Stability: 0 - Deprecated

* `fileTimestamps` {Map<string, number>}
* `contextTimestamps` {Map<string, number>}

* ###Returns: {boolean}

Use needBuild instead

#### `originalSource()`

---
### originalSource

* ###Returns: {Source}

#### `readableIdentifier(requestShortener)`

---
### readableIdentifier

* `requestShortener` {RequestShortener}

* ###Returns: {string}

#### `removeChunk(chunk)`

---
### removeChunk

* `chunk` {Chunk}

* ###Returns: {void}

#### `removeDependency(dependency)`

---
### removeDependency

* `dependency` {Dependency}

* ###Returns: {void}

#### `serialize(__namedParameters)`

---
### serialize

* `__namedParameters` {ObjectSerializerContext}

* ###Returns: {void}

#### `shouldIsolate()`

---
### shouldIsolate

* ###Returns: {boolean}

#### `size([type])`

---
### size

* `type` {string}

* ###Returns: {number}

#### `source(dependencyTemplates, runtimeTemplate[, type])`

---
### source

> Stability: 0 - Deprecated

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}

* ###Returns: {Source}

Use codeGeneration() instead

#### `updateCacheModule(module)`

---
### updateCacheModule

* `module` {Module}

* ###Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

---
### updateHash

* `hash` {Hash}
* `context` {UpdateHashContextDependency}

* ###Returns: {void}

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {JsonpCompilationPluginHooks}

#### Static method: `getSourceBasicTypes(module)`

---
### getSourceBasicTypes

> Stability: 0 - Deprecated

* `module` {Module}

* ###Returns: {ReadonlySet<string>}

In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.
