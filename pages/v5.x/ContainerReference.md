# ContainerReference

<!-- type=misc -->

## `ContainerReferencePluginOptions`

### Properties

#### `remotes`

* Type: {Remotes}

Container locations and request scopes from which modules should be resolved and loaded at runtime. When provided, property name is used as request scope, otherwise request scope is automatically inferred from container location.

***

#### `remoteType`

* Type: {ExternalsType}

The external type of the remote containers.

***

#### `shareScope`

* Type: {string} Optional.

The name of the share scope shared with all remotes (defaults to 'default').

## Class: `ContainerReferencePlugin`

### Constructors

#### `new ContainerReferencePlugin(options)`

##### Parameters

* `options` {ContainerReferencePluginOptions}

* Returns: {ContainerReferencePlugin}

### Properties

#### `options`

* Type: {ContainerReferencePluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
