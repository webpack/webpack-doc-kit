# InputFileSystem

<!-- type=misc -->

## `InputFileSystem`

### Properties

#### `dirname`

* Type: {Function} Optional.

##### Parameters

* `dirname` {string}

* Returns: {string}

***

#### `join`

* Type: {Function} Optional.

##### Parameters

* `path1` {string}
* `path2` {string}

* Returns: {string}

***

#### `lstat`

* Type: {LStatFs} Optional.

***

#### `lstatSync`

* Type: {LStatSync} Optional.

***

#### `purge`

* Type: {Function} Optional.

##### Parameters

* `value` {string|string[]|Set<string>}

* Returns: {void}

***

#### `readdir`

* Type: {ReaddirFs}

***

#### `readdirSync`

* Type: {ReaddirSync} Optional.

***

#### `readFile`

* Type: {ReadFileFs}

***

#### `readFileSync`

* Type: {ReadFileSync} Optional.

***

#### `readJson`

* Type: {Function} Optional.

##### Parameters

* `pathOrFileDescriptor` {PathOrFileDescriptorFs}
* `callback` {Function}
  * `err` {Error|ErrnoException}
  * `result` {JsonObjectFs}
  * Returns: {void}

* Returns: {void}

***

#### `readJsonSync`

* Type: {Function} Optional.

##### Parameters

* `pathOrFileDescriptor` {PathOrFileDescriptorFs}

* Returns: {JsonObjectFs}

***

#### `readlink`

* Type: {ReadlinkFs}

***

#### `readlinkSync`

* Type: {ReadlinkSync} Optional.

***

#### `realpath`

* Type: {RealPathFs} Optional.

***

#### `realpathSync`

* Type: {RealPathSync} Optional.

***

#### `relative`

* Type: {Function} Optional.

##### Parameters

* `from` {string}
* `to` {string}

* Returns: {string}

***

#### `stat`

* Type: {StatFs}

***

#### `statSync`

* Type: {StatSync} Optional.
