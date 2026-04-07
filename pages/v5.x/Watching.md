# Watching

<!-- type=misc -->

## Class: `Watching`

### Constructors

#### `new Watching()`

* Returns: {Watching}

### Properties

#### `blocked`

* Type: {boolean}

***

#### `callbacks`

* Type: {Function[]}

##### Parameters

* `err` {Error}
* `result` {void}

* Returns: {void}

***

#### `closed`

* Type: {boolean}

***

#### `compiler`

* Type: {Compiler}

***

#### `handler`

* Type: {CallbackWebpackFunction_2<Stats, void>}

***

#### `invalid`

* Type: {boolean}

***

#### `lastWatcherStartTime`

* Type: {number} Optional.

***

#### `pausedWatcher`

* Type: {Watcher} Optional.

***

#### `running`

* Type: {boolean}

***

#### `startTime`

* Type: {number}

***

#### `suspended`

* Type: {boolean}

***

#### `watcher`

* Type: {Watcher} Optional.

***

#### `watchOptions`

* Type: {WatchOptions}

### Methods

#### `close(callback)`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `invalidate([callback])`

##### Parameters

* `callback` {Function}
  * `err` {Error}
  * `result` {void}
  * Returns: {void}

* Returns: {void}

***

#### `resume()`

* Returns: {void}

***

#### `suspend()`

* Returns: {void}

***

#### `watch(files, dirs, missing)`

##### Parameters

* `files` {Iterable<string>}
* `dirs` {Iterable<string>}
* `missing` {Iterable<string>}

* Returns: {void}
