# Compiler

<!-- type=misc -->

## Class: `Compiler`

### Constructors

#### `new Compiler(context[, options])`

##### Parameters

* `context` {string}
* `options` {WebpackOptionsNormalized}

* Returns: {Compiler}

### Properties

#### `cache`

* Type: {CacheClass}

***

#### `compilerPath`

* Type: {string}

***

#### `context`

* Type: {string}

***

#### `contextTimestamps`

* Type: {Map<string, "ignore"|EntryTypesIndex|OnlySafeTimeEntry|ExistenceOnlyTimeEntryTypesIndex>} Optional.

***

#### `fileTimestamps`

* Type: {Map<string, "ignore"|EntryTypesIndex|OnlySafeTimeEntry|ExistenceOnlyTimeEntryTypesIndex>} Optional.

***

#### `fsStartTime`

* Type: {number} Optional.

***

#### `hooks`

* Type: {Readonly<object>}

***

#### `idle`

* Type: {boolean}

***

#### `immutablePaths`

* Type: {Set<string|RegExp>}

***

#### `infrastructureLogger`

* Type: {Function} Optional.

##### Parameters

* `value` {string}
* `type` {LogTypeEnum}
* `args` {any[]}

* Returns: {void}

***

#### `inputFileSystem`

* Type: {InputFileSystem}

***

#### `intermediateFileSystem`

* Type: {IntermediateFileSystem}

***

#### `managedPaths`

* Type: {Set<string|RegExp>}

***

#### `modifiedFiles`

* Type: {ReadonlySet<string>} Optional.

***

#### `moduleMemCaches`

* Type: {Map<Module, ModuleMemCachesItem>} Optional.

***

#### `name`

* Type: {string} Optional.

***

#### `options`

* Type: {WebpackOptionsNormalized}

***

#### `outputFileSystem`

* Type: {OutputFileSystem}

***

#### `outputPath`

* Type: {string}

***

#### `parentCompilation`

* Type: {Compilation} Optional.

***

#### `platform`

* Type: {Readonly<PlatformTargetProperties>}

***

#### `records`

* Type: {Records}

***

#### `recordsInputPath`

* Type: {string}

***

#### `recordsOutputPath`

* Type: {string}

***

#### `removedFiles`

* Type: {ReadonlySet<string>} Optional.

***

#### `requestShortener`

* Type: {RequestShortener}

***

#### `resolverFactory`

* Type: {ResolverFactory}

***

#### `root`

* Type: {Compiler}

***

#### `running`

* Type: {boolean}

***

#### `unmanagedPaths`

* Type: {Set<string|RegExp>}

***

#### `watchFileSystem`

* Type: {WatchFileSystem}

***

#### `watching`

* Type: {Watching} Optional.

***

#### `watchMode`

* Type: {boolean}

***

#### `webpack`

* Type: {webpack}

### Methods

#### `close(callback)`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `compile(callback)`

##### Parameters

* `callback` {CallbackWebpackFunction_2<Compilation, void>}

* Returns: {void}

***

#### `createChildCompiler(compilation, compilerName, compilerIndex[, outputOptions][, plugins])`

##### Parameters

* `compilation` {Compilation}
* `compilerName` {string}
* `compilerIndex` {number}
* `outputOptions` {Partial<OutputNormalized>}
* `plugins` {false|""|0|WebpackPluginInstance|Function[]}

* Returns: {Compiler}

***

#### `createCompilation(params)`

##### Parameters

* `params` {CompilationParams}

* Returns: {Compilation}

***

#### `createContextModuleFactory()`

* Returns: {ContextModuleFactory}

***

#### `createNormalModuleFactory()`

* Returns: {NormalModuleFactory}

***

#### `emitAssets(compilation, callback)`

##### Parameters

* `compilation` {Compilation}
* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `emitRecords(callback)`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `getCache(name)`

##### Parameters

* `name` {string}

* Returns: {CacheFacade}

***

#### `getInfrastructureLogger(name)`

##### Parameters

* `name` {string|Function}

* Returns: {WebpackLogger}

***

#### `isChild()`

* Returns: {boolean}

***

#### `newCompilation(params)`

##### Parameters

* `params` {CompilationParams}

* Returns: {Compilation}

***

#### `newCompilationParams()`

* Returns: {object}
  * `contextModuleFactory` {ContextModuleFactory}
  * `normalModuleFactory` {NormalModuleFactory}

***

#### `purgeInputFileSystem()`

* Returns: {void}

***

#### `readRecords(callback)`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `run(callback)`

##### Parameters

* `callback` {CallbackWebpackFunction_2<Stats, void>}

* Returns: {void}

***

#### `runAsChild(callback)`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `entries` {Chunk[]}
  * `compilation` {Compilation}
  * Returns: {void}

* Returns: {void}

***

#### `validate(schema, value[, options][, check])`

##### Parameters

* `schema` {JSONSchema4 & ExtendedSchema|JSONSchema6 & ExtendedSchema|JSONSchema7 & ExtendedSchema|Function}
* `value` {T}
* `options` {ValidationErrorConfiguration}
* `check` {Function}
  * `value` {T}
  * Returns: {boolean}

* Returns: {void}

Schema validation function with optional pre-compiled check

***

#### `watch(watchOptions, handler)`

##### Parameters

* `watchOptions` {WatchOptions}
* `handler` {CallbackWebpackFunction_2<Stats, void>}

* Returns: {Watching}
