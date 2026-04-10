# prefetch

## Class: `ChunkPrefetchPreloadPlugin`

### Constructors

#### `new ChunkPrefetchPreloadPlugin()`

* Returns: {ChunkPrefetchPreloadPlugin}

### Methods

#### `apply(compiler)`

* `compiler` {Compiler}
* Returns: {void}

Registers compilation hooks that emit the runtime modules responsible for
scheduling chunk prefetch and preload requests.
