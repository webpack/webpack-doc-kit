# Stats

<!-- type=misc -->

## Class: `Stats`

### Constructors

#### `new Stats(compilation)`

##### Parameters

* `compilation` {Compilation}

* Returns: {Stats}

### Properties

#### `compilation`

* Type: {Compilation}

***

#### `endTime`

* Type: {number}

***

#### `hash`

* Type: {string}

***

#### `startTime`

* Type: {number}

### Methods

#### `hasErrors()`

* Returns: {boolean}

***

#### `hasWarnings()`

* Returns: {boolean}

***

#### `toJson([options])`

##### Parameters

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}

* Returns: {StatsCompilation}

***

#### `toString([options])`

##### Parameters

* `options` {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions}

* Returns: {string}

## `StatsOptions`

Stats options object.

### Properties

#### `all`

* Type: {boolean} Optional.

Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).

#### `assets`

* Type: {boolean} Optional.

Add assets information.

#### `assetsSort`

* Type: {string|false} Optional.

Sort the assets by that field.

#### `assetsSpace`

* Type: {number} Optional.

Space to display assets (groups will be collapsed to fit this space).

#### `builtAt`

* Type: {boolean} Optional.

Add built at time information.

#### `cached`

* Type: {boolean} Optional.

Add information about cached (not built) modules (deprecated: use 'cachedModules' instead).

##### Deprecated

#### `cachedAssets`

* Type: {boolean} Optional.

Show cached assets (setting this to `false` only shows emitted files).

#### `cachedModules`

* Type: {boolean} Optional.

Add information about cached (not built) modules.

#### `children`

* Type: {boolean|"verbose"|"none"|"summary"|"errors-only"|"errors-warnings"|"minimal"|"normal"|"detailed"|StatsOptions|StatsValue[]} Optional.

Add children information.

#### `chunkGroupAuxiliary`

* Type: {boolean} Optional.

Display auxiliary assets in chunk groups.

#### `chunkGroupChildren`

* Type: {boolean} Optional.

Display children of chunk groups.

#### `chunkGroupMaxAssets`

* Type: {number} Optional.

Limit of assets displayed in chunk groups.

#### `chunkGroups`

* Type: {boolean} Optional.

Display all chunk groups with the corresponding bundles.

#### `chunkModules`

* Type: {boolean} Optional.

Add built modules information to chunk information.

#### `chunkModulesSpace`

* Type: {number} Optional.

Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group).

#### `chunkOrigins`

* Type: {boolean} Optional.

Add the origins of chunks and chunk merging info.

#### `chunkRelations`

* Type: {boolean} Optional.

Add information about parent, children and sibling chunks to chunk information.

#### `chunks`

* Type: {boolean} Optional.

Add chunk information.

#### `chunksSort`

* Type: {string|false} Optional.

Sort the chunks by that field.

#### `colors`

* Type: {boolean|object} Optional.

Enables/Disables colorful output.

##### Union Members

{boolean}

***

###### Type Literal

{object}

* `bold` {string} Custom color for bold text.
* `cyan` {string} Custom color for cyan text.
* `green` {string} Custom color for green text.
* `magenta` {string} Custom color for magenta text.
* `red` {string} Custom color for red text.
* `yellow` {string} Custom color for yellow text.

#### `context`

* Type: {string} Optional.

Context directory for request shortening.

#### `dependentModules`

* Type: {boolean} Optional.

Show chunk modules that are dependencies of other modules of the chunk.

#### `depth`

* Type: {boolean} Optional.

Add module depth in module graph.

#### `entrypoints`

* Type: {boolean|"auto"} Optional.

Display the entry points with the corresponding bundles.

#### `env`

* Type: {boolean} Optional.

Add --env information.

#### `errorCause`

* Type: {boolean|"auto"} Optional.

Add cause to errors.

#### `errorDetails`

* Type: {boolean|"auto"} Optional.

Add details to errors (like resolving log).

#### `errorErrors`

* Type: {boolean|"auto"} Optional.

Add nested errors to errors (like in AggregateError).

#### `errors`

* Type: {boolean} Optional.

Add errors.

#### `errorsCount`

* Type: {boolean} Optional.

Add errors count.

#### `errorsSpace`

* Type: {number} Optional.

Space to display errors (value is in number of lines).

#### `errorStack`

* Type: {boolean} Optional.

Add internal stack trace to errors.

#### `exclude`

* Type: {string|boolean|RegExp|ModuleFilterItemTypes[]|Function} Optional.

Please use excludeModules instead.

#### `excludeAssets`

* Type: {string|RegExp|AssetFilterItemTypes[]|Function} Optional.

Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.

#### `excludeModules`

* Type: {string|boolean|RegExp|ModuleFilterItemTypes[]|Function} Optional.

Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.

#### `groupAssetsByChunk`

* Type: {boolean} Optional.

Group assets by how their are related to chunks.

#### `groupAssetsByEmitStatus`

* Type: {boolean} Optional.

Group assets by their status (emitted, compared for emit or cached).

#### `groupAssetsByExtension`

* Type: {boolean} Optional.

Group assets by their extension.

#### `groupAssetsByInfo`

* Type: {boolean} Optional.

Group assets by their asset info (immutable, development, hotModuleReplacement, etc).

#### `groupAssetsByPath`

* Type: {boolean} Optional.

Group assets by their path.

#### `groupModulesByAttributes`

* Type: {boolean} Optional.

Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).

#### `groupModulesByCacheStatus`

* Type: {boolean} Optional.

Group modules by their status (cached or built and cacheable).

#### `groupModulesByExtension`

* Type: {boolean} Optional.

Group modules by their extension.

#### `groupModulesByLayer`

* Type: {boolean} Optional.

Group modules by their layer.

#### `groupModulesByPath`

* Type: {boolean} Optional.

Group modules by their path.

#### `groupModulesByType`

* Type: {boolean} Optional.

Group modules by their type.

#### `groupReasonsByOrigin`

* Type: {boolean} Optional.

Group reasons by their origin module.

#### `hash`

* Type: {boolean} Optional.

Add the hash of the compilation.

#### `ids`

* Type: {boolean} Optional.

Add ids.

#### `logging`

* Type: {boolean|"error"|"warn"|"info"|"log"|"verbose"|"none"} Optional.

Add logging output.

#### `loggingDebug`

* Type: {string|boolean|RegExp|FilterItemTypes[]|Function} Optional.

Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.

#### `loggingTrace`

* Type: {boolean} Optional.

Add stack traces to logging output.

#### `moduleAssets`

* Type: {boolean} Optional.

Add information about assets inside modules.

#### `modules`

* Type: {boolean} Optional.

Add built modules information.

#### `modulesSort`

* Type: {string|false} Optional.

Sort the modules by that field.

#### `modulesSpace`

* Type: {number} Optional.

Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups).

#### `moduleTrace`

* Type: {boolean} Optional.

Add dependencies and origin of warnings/errors.

#### `nestedModules`

* Type: {boolean} Optional.

Add information about modules nested in other modules (like with module concatenation).

#### `nestedModulesSpace`

* Type: {number} Optional.

Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group).

#### `optimizationBailout`

* Type: {boolean} Optional.

Show reasons why optimization bailed out for modules.

#### `orphanModules`

* Type: {boolean} Optional.

Add information about orphan modules.

#### `outputPath`

* Type: {boolean} Optional.

Add output path information.

#### `performance`

* Type: {boolean} Optional.

Add performance hint flags.

#### `preset`

* Type: {string|boolean} Optional.

Preset for the default values.

#### `providedExports`

* Type: {boolean} Optional.

Show exports provided by modules.

#### `publicPath`

* Type: {boolean} Optional.

Add public path information.

#### `reasons`

* Type: {boolean} Optional.

Add information about the reasons why modules are included.

#### `reasonsSpace`

* Type: {number} Optional.

Space to display reasons (groups will be collapsed to fit this space).

#### `relatedAssets`

* Type: {boolean} Optional.

Add information about assets that are related to other assets (like SourceMaps for assets).

#### `runtime`

* Type: {boolean} Optional.

Add information about runtime modules (deprecated: use 'runtimeModules' instead).

##### Deprecated

#### `runtimeModules`

* Type: {boolean} Optional.

Add information about runtime modules.

#### `source`

* Type: {boolean} Optional.

Add the source code of modules.

#### `timings`

* Type: {boolean} Optional.

Add timing information.

#### `usedExports`

* Type: {boolean} Optional.

Show exports used by modules.

#### `version`

* Type: {boolean} Optional.

Add webpack version information.

#### `warnings`

* Type: {boolean} Optional.

Add warnings.

#### `warningsCount`

* Type: {boolean} Optional.

Add warnings count.

#### `warningsFilter`

* Type: {string|RegExp|WarningFilterItemTypes[]|Function} Optional.

Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions.

#### `warningsSpace`

* Type: {number} Optional.

Space to display warnings (value is in number of lines).

## `StatsAsset`

* Type: {KnownStatsAsset & Record<string, any>}

## `StatsChunk`

* Type: {KnownStatsChunk & Record<string, any>}

## `StatsChunkGroup`

* Type: {KnownStatsChunkGroup & Record<string, any>}

## `StatsChunkOrigin`

* Type: {KnownStatsChunkOrigin & Record<string, any>}

## `StatsCompilation`

* Type: {KnownStatsCompilation & Record<string, any>}

## `StatsError`

* Type: {KnownStatsError & Record<string, any>}

## `StatsLogging`

* Type: {KnownStatsLogging & Record<string, any>}

## `StatsLoggingEntry`

* Type: {KnownStatsLoggingEntry & Record<string, any>}

## `StatsModule`

* Type: {KnownStatsModule & Record<string, any>}

## `StatsModuleIssuer`

* Type: {KnownStatsModuleIssuer & Record<string, any>}

## `StatsModuleReason`

* Type: {KnownStatsModuleReason & Record<string, any>}

## `StatsModuleTraceDependency`

* Type: {KnownStatsModuleTraceDependency & Record<string, any>}

## `StatsModuleTraceItem`

* Type: {KnownStatsModuleTraceItem & Record<string, any>}

## `StatsProfile`

* Type: {KnownStatsProfile & Record<string, any>}
