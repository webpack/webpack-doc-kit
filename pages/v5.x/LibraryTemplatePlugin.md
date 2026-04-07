# LibraryTemplatePlugin

<!-- type=misc -->

## Class: `LibraryTemplatePlugin`

### Constructors

#### `new LibraryTemplatePlugin(name, target, umdNamedDefine, auxiliaryComment, exportProperty)`

##### Parameters

* `name` {LibraryName}
* `target` {string}
* `umdNamedDefine` {boolean}
* `auxiliaryComment` {AuxiliaryComment}
* `exportProperty` {LibraryExport}

* Returns: {LibraryTemplatePlugin}

### Properties

#### `library`

* Type: {object}

* `auxiliaryComment` {AuxiliaryComment}
* `export` {LibraryExport}
* `name` {LibraryName}
* `type` {string}
* `umdNamedDefine` {boolean}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin
