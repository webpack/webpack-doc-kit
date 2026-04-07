# RuntimeChunkPlugin

<!-- type=misc -->

## Class: `RuntimeChunkPlugin`

### Constructors

#### `new RuntimeChunkPlugin([options])`

##### Parameters

* `options` {object}
  * `name` {Function} The name factory for the runtime chunks.
    * `entrypoint` {object}
      * `name` {string}
    * Returns: {string}

* Returns: {RuntimeChunkPlugin}

### Properties

#### `options`

* Type: {object}

* `name` {string|Function}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
