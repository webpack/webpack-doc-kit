# optimize

## Namespaces

- [InnerGraph](namespaces/InnerGraph.md)

## 
### Class: `AggressiveMergingPlugin`

### Constructors

#### `new AggressiveMergingPlugin([options])`

---
### AggressiveMergingPlugin

* `options` {AggressiveMergingPluginOptions}

* ###Returns: {AggressiveMergingPlugin}

### Properties

* `options` {AggressiveMergingPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `AggressiveSplittingPlugin`

### Constructors

#### `new AggressiveSplittingPlugin([options])`

---
### AggressiveSplittingPlugin

* `options` {AggressiveSplittingPluginOptions}

* ###Returns: {AggressiveSplittingPlugin}

### Properties

* `options` {AggressiveSplittingPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `wasChunkRecorded(chunk)`

---
### wasChunkRecorded

* `chunk` {Chunk}

* ###Returns: {boolean}

***

## 
### Class: `LimitChunkCountPlugin`

### Constructors

#### `new LimitChunkCountPlugin([options])`

---
### LimitChunkCountPlugin

* `options` {LimitChunkCountPluginOptions}

* ###Returns: {LimitChunkCountPlugin}

### Properties

* `options` {LimitChunkCountPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

***

## 
### Class: `MergeDuplicateChunksPlugin`

### Constructors

#### `new MergeDuplicateChunksPlugin([options])`

---
### MergeDuplicateChunksPlugin

* `options` {MergeDuplicateChunksPluginOptions}

* ###Returns: {MergeDuplicateChunksPlugin}

### Properties

* `options` {MergeDuplicateChunksPluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

***

## 
### Class: `MinChunkSizePlugin`

### Constructors

#### `new MinChunkSizePlugin(options)`

---
### MinChunkSizePlugin

* `options` {MinChunkSizePluginOptions}

* ###Returns: {MinChunkSizePlugin}

### Properties

* `options` {MinChunkSizePluginOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `ModuleConcatenationPlugin`

### Constructors

#### `new ModuleConcatenationPlugin()`

---
### ModuleConcatenationPlugin

* ###Returns: {ModuleConcatenationPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `RealContentHashPlugin`

### Constructors

#### `new RealContentHashPlugin(__namedParameters)`

---
### RealContentHashPlugin

* `__namedParameters` {RealContentHashPluginOptions}

* ###Returns: {RealContentHashPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `getCompilationHooks(compilation)`

---
### getCompilationHooks

* `compilation` {Compilation}

* ###Returns: {CompilationHooksRealContentHashPlugin}

***

## 
### Class: `RuntimeChunkPlugin`

### Constructors

#### `new RuntimeChunkPlugin([options])`

---
### RuntimeChunkPlugin

* `options` {object}

* ###Returns: {RuntimeChunkPlugin}

### Properties

* `options` {object}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

***

## 
### Class: `SideEffectsFlagPlugin`

### Constructors

#### `new SideEffectsFlagPlugin([analyseSource])`

---
### SideEffectsFlagPlugin

* `analyseSource` {boolean}

* ###Returns: {SideEffectsFlagPlugin}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin

#### Static method: `moduleHasSideEffects(moduleName, flagValue, cache)`

---
### moduleHasSideEffects

* `moduleName` {string}
* `flagValue` {SideEffectsFlagValue}
* `cache` {Map<string, RegExp>}

* ###Returns: {boolean}

***

## 
### Class: `SplitChunksPlugin`

### Constructors

#### `new SplitChunksPlugin([options])`

---
### SplitChunksPlugin

* `options` {OptimizationSplitChunksOptions}

* ###Returns: {SplitChunksPlugin}

### Properties

* `options` {SplitChunksOptions}

### Methods

#### `apply(compiler)`

---
### apply

* `compiler` {Compiler}

* ###Returns: {void}

Apply the plugin
