# runtime

## Class: `GetChunkFilenameRuntimeModule`

### Extends

- {RuntimeModule}

### Constructors

#### `new GetChunkFilenameRuntimeModule(contentType, name, global, getFilenameForChunk, allChunks)`

* `contentType` {string}
* `name` {string}
* `global` {string}
* `getFilenameForChunk` {object}
* `allChunks` {boolean}
* Returns: {GetChunkFilenameRuntimeModule}

### Properties

* `allChunks` {boolean}
* `blocks` {AsyncDependenciesBlock[]}
* `buildInfo` {BuildInfo}
* `buildMeta` {BuildMeta}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* `chunksIterable` {Iterable<Chunk>} 
* `codeGenerationDependencies` {Dependency[]}
* `compilation` {Compilation}
* `contentType` {string}
* `context` {string}
* `debugId` {number}
* `dependencies` {Dependency[]}
* `dependentHash` {boolean}
* `depth` {number} Returns the depth.
Updates the depth using the provided value.
* `errors` {any}
* `exportsArgument` {string} Gets exports argument.
* `factoryMeta` {FactoryMeta}
* `fullHash` {boolean}
* `getFilenameForChunk` {object}
* `global` {string}
* `hasEqualsChunks` {any}
* `hash` {string} Returns the hash of the module.
* `hot` {boolean}
* `id` {string|number} Returns the module id assigned by the chunk graph.
Updates the module id using the provided value.
* `index` {number} Returns the pre-order index.
Updates the pre-order index using the provided value.
* `index2` {number} Returns the post-order index.
Updates the post-order index using the provided value.
* `issuer` {Module} Returns the issuer.
Updates the issuer using the provided value.
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string} Gets module argument.
* `name` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} Gets optimization bailout.
* `optional` {boolean} 
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile} 
* `renderedHash` {string} Returns the rendered hash of the module.
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

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

Adds the provided file dependencies to the module.

#### `addChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Adds the provided chunk to the module.

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

Adds code generation dependency.

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

Adds the provided error to the module.

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

Adds presentational dependency.

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

Adds the provided warning to the module.

#### `attach(compilation, chunk[, chunkGraph])`

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Processes the provided compilation.

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

Builds the module using the provided compilation context.

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

Returns true if the module can be placed in the chunk.

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

Generates code and runtime requirements for this module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `generate()`

* Returns: {string}

Generates runtime code for this runtime module.

#### `getChunks()`

> Stability: 0 - Deprecated

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getErrors()`

* Returns: {Iterable}

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

Returns export type.

#### `getGeneratedCode()`

* Returns: {string}

Gets generated code.

#### `getNumberOfChunks()`

> Stability: 0 - Deprecated

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

Gets number of errors.

#### `getNumberOfWarnings()`

* Returns: {number}

Gets number of warnings.

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets side effects connection state.

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Checks whether this module contains the chunk.

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module contains the module graph.

#### `identifier()`

* Returns: {string}

Returns the unique identifier used to reference this module.

#### `invalidateBuild()`

* Returns: {void}

Invalidates the cached state associated with this value.

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk.

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk group.

#### `isEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

#### `isInChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this module is in the provided chunk.

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

Checks whether this module is optional.

#### `isProvided(exportName)`

> Stability: 0 - Deprecated

* `exportName` {string}
* Returns: {boolean}

Checks whether this module provides the specified export.

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

Gets the library identifier.

#### `nameForCondition()`

* Returns: {string}

Returns the path used when matching this module against rule conditions.

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

Checks whether the module needs to be rebuilt for the current build state.

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated: Use needBuild instead

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Checks whether it needs rebuild.

#### `originalSource()`

* Returns: {Source}

Gets the original source.

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

Returns a human-readable identifier for this module.

#### `removeChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Removes the provided chunk from the module.

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `shouldIsolate()`

* Returns: {boolean}

Returns true, if the runtime module should get it's own scope.

#### `size([type])`

* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated: Use codeGeneration() instead

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Returns generated source.

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated: In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

* `module` {Module}
* Returns: {ReadonlySet}

Gets source basic types.

***

## Class: `LoadScriptRuntimeModule`

### Extends

- {HelperRuntimeModule}

### Constructors

#### `new LoadScriptRuntimeModule([withCreateScriptUrl][, withFetchPriority])`

* `withCreateScriptUrl` {boolean}
* `withFetchPriority` {boolean}
* Returns: {LoadScriptRuntimeModule}

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
* `depth` {number} Returns the depth.
Updates the depth using the provided value.
* `errors` {any}
* `exportsArgument` {string} Gets exports argument.
* `factoryMeta` {FactoryMeta}
* `fullHash` {boolean}
* `hasEqualsChunks` {any}
* `hash` {string} Returns the hash of the module.
* `hot` {boolean}
* `id` {string|number} Returns the module id assigned by the chunk graph.
Updates the module id using the provided value.
* `index` {number} Returns the pre-order index.
Updates the pre-order index using the provided value.
* `index2` {number} Returns the post-order index.
Updates the post-order index using the provided value.
* `issuer` {Module} Returns the issuer.
Updates the issuer using the provided value.
* `isUsed` {any}
* `layer` {string}
* `moduleArgument` {string} Gets module argument.
* `name` {string}
* `needId` {boolean}
* `optimizationBailout` {string|object[]} Gets optimization bailout.
* `optional` {boolean} 
* `parent` {DependenciesBlock}
* `presentationalDependencies` {Dependency[]}
* `profile` {ModuleProfile} 
* `renderedHash` {string} Returns the rendered hash of the module.
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

* `block` {AsyncDependenciesBlock}
* Returns: {void}

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### `addCacheDependencies(fileDependencies, contextDependencies, missingDependencies, buildDependencies)`

* `fileDependencies` {LazySet}
* `contextDependencies` {LazySet}
* `missingDependencies` {LazySet}
* `buildDependencies` {LazySet}
* Returns: {void}

Adds the provided file dependencies to the module.

#### `addChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Adds the provided chunk to the module.

#### `addCodeGenerationDependency(codeGenerationDependency)`

* `codeGenerationDependency` {Dependency}
* Returns: {void}

Adds code generation dependency.

#### `addDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Adds the provided dependency to the dependencies block.

#### `addError(error)`

* `error` {WebpackError}
* Returns: {void}

Adds the provided error to the module.

#### `addPresentationalDependency(presentationalDependency)`

* `presentationalDependency` {Dependency}
* Returns: {void}

Adds presentational dependency.

#### `addWarning(warning)`

* `warning` {WebpackError}
* Returns: {void}

Adds the provided warning to the module.

#### `attach(compilation, chunk[, chunkGraph])`

* `compilation` {Compilation}
* `chunk` {Chunk}
* `chunkGraph` {ChunkGraph}
* Returns: {void}

Processes the provided compilation.

#### `build(options, compilation, resolver, fs, callback)`

* `options` {WebpackOptionsNormalizedWithDefaults}
* `compilation` {Compilation}
* `resolver` {ResolverWithOptions}
* `fs` {InputFileSystem}
* `callback` {object}
* Returns: {void}

Builds the module using the provided compilation context.

#### `chunkCondition(chunk, compilation)`

* `chunk` {Chunk}
* `compilation` {Compilation}
* Returns: {boolean}

Returns true if the module can be placed in the chunk.

#### `cleanupForCache()`

* Returns: {void}

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### `clearDependenciesAndBlocks()`

* Returns: {void}

Clear dependencies and blocks.

#### `clearWarningsAndErrors()`

* Returns: {void}

removes all warnings and errors

#### `codeGeneration(context)`

* `context` {CodeGenerationContext}
* Returns: {CodeGenerationResult}

Generates code and runtime requirements for this module.

#### `deserialize(__namedParameters)`

* `__namedParameters` {ObjectDeserializerContext}
* Returns: {void}

Restores this instance from the provided deserializer context.

#### `generate()`

* Returns: {string}

Generates runtime code for this runtime module.

#### `getChunks()`

> Stability: 0 - Deprecated

* Returns: {Chunk[]}

#### `getConcatenationBailoutReason(context)`

* `context` {ConcatenationBailoutReasonContext}
* Returns: {string}

Returns the reason this module cannot be concatenated, when one exists.

#### `getErrors()`

* Returns: {Iterable}

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

Returns list of errors if any.

#### `getExportsType(moduleGraph[, strict])`

* `moduleGraph` {ModuleGraph}
* `strict` {boolean}
* Returns: {ExportsType}

Returns export type.

#### `getGeneratedCode()`

* Returns: {string}

Gets generated code.

#### `getNumberOfChunks()`

> Stability: 0 - Deprecated

* Returns: {number}

#### `getNumberOfErrors()`

* Returns: {number}

Gets number of errors.

#### `getNumberOfWarnings()`

* Returns: {number}

Gets number of warnings.

#### `getRootBlock()`

* Returns: {DependenciesBlock}

#### `getSideEffectsConnectionState(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {ConnectionState}

Gets side effects connection state.

#### `getSourceBasicTypes()`

* Returns: {ReadonlySet}

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### `getSourceTypes()`

* Returns: {ReadonlySet}

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

Returns the source types this module can generate.

#### `getUnsafeCacheData()`

* Returns: {UnsafeCacheData}

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### `getWarnings()`

* Returns: {Iterable}

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

Returns list of warnings if any.

#### `hasChunkCondition()`

* Returns: {boolean}

#### `hasReasonForChunk(chunk, moduleGraph, chunkGraph)`

* `chunk` {Chunk}
* `moduleGraph` {ModuleGraph}
* `chunkGraph` {ChunkGraph}
* Returns: {boolean}

Checks whether this module contains the chunk.

#### `hasReasons(moduleGraph, runtime)`

* `moduleGraph` {ModuleGraph}
* `runtime` {RuntimeSpec}
* Returns: {boolean}

Checks whether this module contains the module graph.

#### `identifier()`

* Returns: {string}

Returns the unique identifier used to reference this module.

#### `invalidateBuild()`

* Returns: {void}

Invalidates the cached state associated with this value.

#### `isAccessibleInChunk(chunkGraph, chunk[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunk` {Chunk}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk.

#### `isAccessibleInChunkGroup(chunkGraph, chunkGroup[, ignoreChunk])`

* `chunkGraph` {ChunkGraph}
* `chunkGroup` {ChunkGroup}
* `ignoreChunk` {Chunk}
* Returns: {boolean}

Checks whether this module is accessible in chunk group.

#### `isEntryModule()`

> Stability: 0 - Deprecated

* Returns: {boolean}

#### `isInChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {boolean}

Checks whether this module is in the provided chunk.

#### `isOptional(moduleGraph)`

* `moduleGraph` {ModuleGraph}
* Returns: {boolean}

Checks whether this module is optional.

#### `isProvided(exportName)`

> Stability: 0 - Deprecated

* `exportName` {string}
* Returns: {boolean}

Checks whether this module provides the specified export.

#### `libIdent(options)`

* `options` {LibIdentOptions}
* Returns: {string}

Gets the library identifier.

#### `nameForCondition()`

* Returns: {string}

Returns the path used when matching this module against rule conditions.

#### `needBuild(context, callback)`

* `context` {NeedBuildContext}
* `callback` {object}
* Returns: {void}

Checks whether the module needs to be rebuilt for the current build state.

#### `needRebuild(fileTimestamps, contextTimestamps)`

> Stability: 0 - Deprecated: Use needBuild instead

* `fileTimestamps` {Map}
* `contextTimestamps` {Map}
* Returns: {boolean}

Checks whether it needs rebuild.

#### `originalSource()`

* Returns: {Source}

Gets the original source.

#### `readableIdentifier(requestShortener)`

* `requestShortener` {RequestShortener}
* Returns: {string}

Returns a human-readable identifier for this module.

#### `removeChunk(chunk)`

> Stability: 0 - Deprecated

* `chunk` {Chunk}
* Returns: {void}

Removes the provided chunk from the module.

#### `removeDependency(dependency)`

* `dependency` {Dependency}
* Returns: {void}

Removes dependency.

#### `serialize(__namedParameters)`

* `__namedParameters` {ObjectSerializerContext}
* Returns: {void}

Serializes this instance into the provided serializer context.

#### `shouldIsolate()`

* Returns: {boolean}

Returns true, if the runtime module should get it's own scope.

#### `size([type])`

* `type` {string}
* Returns: {number}

Returns the estimated size for the requested source type.

#### `source(dependencyTemplates, runtimeTemplate[, type])`

> Stability: 0 - Deprecated: Use codeGeneration() instead

* `dependencyTemplates` {DependencyTemplates}
* `runtimeTemplate` {RuntimeTemplate}
* `type` {string}
* Returns: {Source}

Returns generated source.

#### `updateCacheModule(module)`

* `module` {Module}
* Returns: {void}

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### `updateHash(hash, context)`

* `hash` {Hash}
* `context` {UpdateHashContextDependency}
* Returns: {void}

Updates the hash with the data contributed by this instance.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {LoadScriptCompilationHooks}

#### Static method: `getSourceBasicTypes(module)`

> Stability: 0 - Deprecated: In webpack 6, call getSourceBasicTypes() directly on the module instance instead of using this static method.

* `module` {Module}
* Returns: {ReadonlySet}

Gets source basic types.
