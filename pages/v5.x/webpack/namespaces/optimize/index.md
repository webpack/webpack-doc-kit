# optimize

## Namespaces

- [InnerGraph](namespaces/InnerGraph.md)

## Class: `AggressiveMergingPlugin`

### Constructors

#### `new AggressiveMergingPlugin([options])`

* `options` {AggressiveMergingPluginOptions}
* Returns: {AggressiveMergingPlugin}

Creates an instance of AggressiveMergingPlugin.

### Properties

* `options` {AggressiveMergingPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `AggressiveSplittingPlugin`

### Constructors

#### `new AggressiveSplittingPlugin([options])`

* `options` {AggressiveSplittingPluginOptions}
* Returns: {AggressiveSplittingPlugin}

Creates an instance of AggressiveSplittingPlugin.

### Properties

* `options` {AggressiveSplittingPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `wasChunkRecorded(chunk)`

* `chunk` {Chunk}
* Returns: {boolean}

Was chunk recorded.

***

## Class: `LimitChunkCountPlugin`

### Constructors

#### `new LimitChunkCountPlugin([options])`

* `options` {LimitChunkCountPluginOptions}
* Returns: {LimitChunkCountPlugin}

Creates an instance of LimitChunkCountPlugin.

### Properties

* `options` {LimitChunkCountPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `MergeDuplicateChunksPlugin`

### Constructors

#### `new MergeDuplicateChunksPlugin([options])`

* `options` {MergeDuplicateChunksPluginOptions}
* Returns: {MergeDuplicateChunksPlugin}

Creates an instance of MergeDuplicateChunksPlugin.

### Properties

* `options` {MergeDuplicateChunksPluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `MinChunkSizePlugin`

### Constructors

#### `new MinChunkSizePlugin(options)`

* `options` {MinChunkSizePluginOptions}
* Returns: {MinChunkSizePlugin}

Creates an instance of MinChunkSizePlugin.

### Properties

* `options` {MinChunkSizePluginOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `ModuleConcatenationPlugin`

### Constructors

#### `new ModuleConcatenationPlugin()`

* Returns: {ModuleConcatenationPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `RealContentHashPlugin`

### Constructors

#### `new RealContentHashPlugin(__namedParameters)`

* `__namedParameters` {RealContentHashPluginOptions}
* Returns: {RealContentHashPlugin}

Creates an instance of RealContentHashPlugin.

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `getCompilationHooks(compilation)`

* `compilation` {Compilation}
* Returns: {CompilationHooksRealContentHashPlugin}

Returns the attached hooks.

***

## Class: `RuntimeChunkPlugin`

### Constructors

#### `new RuntimeChunkPlugin([options])`

* `options` {object}
* Returns: {RuntimeChunkPlugin}

Creates an instance of RuntimeChunkPlugin.

### Properties

* `options` {object}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

***

## Class: `SideEffectsFlagPlugin`

### Constructors

#### `new SideEffectsFlagPlugin([analyseSource])`

* `analyseSource` {boolean}
* Returns: {SideEffectsFlagPlugin}

Creates an instance of SideEffectsFlagPlugin.

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.

#### Static method: `moduleHasSideEffects(moduleName, flagValue, cache)`

* `moduleName` {string}
* `flagValue` {SideEffectsFlagValue}
* `cache` {Map}
* Returns: {boolean}

Module has side effects.

***

## Class: `SplitChunksPlugin`

### Constructors

#### `new SplitChunksPlugin([options])`

* `options` {OptimizationSplitChunksOptions}
* Returns: {SplitChunksPlugin}

Creates an instance of SplitChunksPlugin.

### Properties

* `options` {SplitChunksOptions}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Applies the plugin by registering its hooks on the compiler.
