# Loader

<!-- type=misc -->

## `LoaderModule`

### Type Parameters

### Properties

#### `default`

* Type: {RawLoaderDefinitionFunction<OptionsType, ContextAdditions>|LoaderDefinitionFunction<OptionsType, ContextAdditions>} Optional.

***

#### `pitch`

* Type: {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>} Optional.

***

#### `raw`

* Type: {false} Optional.

## Class: `LoaderOptionsPlugin`

### Constructors

#### `new LoaderOptionsPlugin([options])`

##### Parameters

* `options` {LoaderOptionsPluginOptions & MatchObject}

* Returns: {LoaderOptionsPlugin}

### Properties

#### `options`

* Type: {LoaderOptionsPluginOptions & MatchObject}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## Class: `LoaderTargetPlugin`

### Constructors

#### `new LoaderTargetPlugin(target)`

##### Parameters

* `target` {string}

* Returns: {LoaderTargetPlugin}

### Properties

#### `target`

* Type: {string}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `LoaderDefinitionFunction(this, content[, sourceMap][, additionalData])`

### Type Parameters

### Parameters

* `this` {NormalModuleLoaderContext<OptionsType> & LoaderRunnerLoaderContext<OptionsType> & LoaderPluginLoaderContext & HotModuleReplacementPluginLoaderContext & ContextAdditions}
* `content` {string}
* `sourceMap` {string|RawSourceMap}
* `additionalData` {AdditionalData}

* Returns: {string|void|Buffer<ArrayBufferLike>|Promise<string|Buffer<ArrayBufferLike>>}

## `LoaderOptionsPluginOptions`

### Indexable

> \[`k`: {string}\]: {any}

### Properties

#### `debug`

* Type: {boolean} Optional.

Whether loaders should be in debug mode or not. debug will be removed as of webpack 3.

#### `minimize`

* Type: {boolean} Optional.

Where loaders can be switched to minimize mode.

#### `options`

* Type: {object} Optional.

A configuration object that can be used to configure older loaders.

##### Index Signature

\[`k`: {string}\]: {any}

* `context` {string} The context that can be used to configure older loaders.

## `LoaderContext`

* Type: {NormalModuleLoaderContext<OptionsType> & LoaderRunnerLoaderContext<OptionsType> & LoaderPluginLoaderContext & HotModuleReplacementPluginLoaderContext}

### Type Parameters

## `LoaderDefinition`

* Type: {LoaderDefinitionFunction<OptionsType, ContextAdditions> & object}

### Type Declaration

* `pitch` {PitchLoaderDefinitionFunction<OptionsType, ContextAdditions>}
* `raw` {false}

### Type Parameters
