# BannerPlugin

<!-- type=misc -->

## Class: `BannerPlugin`

### Constructors

#### `new BannerPlugin(options)`

##### Parameters

* `options` {BannerPluginArgument}

* Returns: {BannerPlugin}

### Properties

#### `banner`

* Type: {Function}

##### Parameters

* `data` {object}
  * `chunk` {Chunk}
  * `filename` {string}
  * `hash` {string}

* Returns: {string}

***

#### `options`

* Type: {BannerPluginOptions}

### Methods

#### `apply(compiler)`

##### Parameters

* `compiler` {Compiler}

* Returns: {void}

Apply the plugin

## `BannerPluginOptions`

### Properties

#### `banner`

* Type: {string|BannerFunction}

Specifies the banner.

#### `entryOnly`

* Type: {boolean} Optional.

If true, the banner will only be added to the entry chunks.

#### `exclude`

* Type: {Rules} Optional.

Exclude all modules matching any of these conditions.

#### `footer`

* Type: {boolean} Optional.

If true, banner will be placed at the end of the output.

#### `include`

* Type: {Rules} Optional.

Include all modules matching any of these conditions.

#### `raw`

* Type: {boolean} Optional.

If true, banner will not be wrapped in a comment.

#### `stage`

* Type: {number} Optional.

Specifies the stage when add a banner.

#### `test`

* Type: {Rules} Optional.

Include all modules that pass test assertion.

## `BannerPluginArgument`

* Type: {string|BannerPluginOptions|BannerFunction}
