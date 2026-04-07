# config

<!-- type=misc -->

## `config`

* Type: {object}

* `applyWebpackOptionsDefaults` {Function}
  * `options` {WebpackOptionsNormalized} options to be modified
  * `compilerIndex` {number} index of compiler
  * Returns: {ResolvedOptions} Resolved options after apply defaults
* `getNormalizedWebpackOptions` {Function}
  * `config` {WebpackOptions} input config
  * Returns: {WebpackOptionsNormalized} normalized options
