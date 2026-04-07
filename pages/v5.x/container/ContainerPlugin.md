# ContainerPlugin

<!-- type=misc -->

## Class: `ContainerPlugin`

### Constructors

#### `new ContainerPlugin(options)`

##### Parameters

* `options` {ContainerPluginOptions}

* Returns: {ContainerPlugin}

### Properties

#### `options`

* Type: {ContainerPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `ContainerPluginOptions`

### Properties

#### `exposes`

* Type: {Exposes}

Modules that should be exposed by this container. When provided, property name is used as public name, otherwise public name is automatically inferred from request.

#### `filename`

* Type: {string} Optional.

The filename for this container relative path inside the `output.path` directory.

#### `library`

* Type: {LibraryOptions} Optional.

Options for library.

#### `name`

* Type: {string}

The name for this container.

#### `runtime`

* Type: {EntryRuntime} Optional.

The name of the runtime chunk. If set a runtime chunk with this name is created or an existing entrypoint is used as runtime.

#### `shareScope`

* Type: {string} Optional.

The name of the share scope which is shared with the host (defaults to 'default').
