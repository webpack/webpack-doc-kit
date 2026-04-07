# RawLoader

<!-- type=misc -->

## `RawLoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

### Parameters

* `this` {NormalModuleLoaderContext<OptionsType> & LoaderRunnerLoaderContext<OptionsType> & LoaderPluginLoaderContext & HotModuleReplacementPluginLoaderContext & ContextAdditions}
* `content` {Buffer}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}

* Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

## `RawLoaderDefinition`

* Type: {RawLoaderDefinitionFunction<OptionsType, ContextAdditions> & object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {true}

### Type Parameters
