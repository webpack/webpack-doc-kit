# OutputFileSystem

<!-- type=misc -->

## `OutputFileSystem`

### Properties

#### `createReadStream`

* Type: {Function} Optional.

##### Parameters

* `path` {PathLikeFs}
* `options` {"ascii"|"utf8"|"utf-8"|"utf16le"|"utf-16le"|"ucs2"|"ucs-2"|"base64"|"base64url"|"latin1"|"binary"|"hex"|ReadStreamOptions}

* Returns: {ReadableStream}

***

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

#### `mkdir`

* Type: {Mkdir}

***

#### `readdir`

* Type: {ReaddirFs} Optional.

***

#### `readFile`

* Type: {ReadFileFs}

***

#### `relative`

* Type: {Function} Optional.

##### Parameters

* `from` {string}
* `to` {string}

* Returns: {string}

***

#### `rmdir`

* Type: {Function} Optional.

##### Parameters

* `file` {PathLikeFs}
* `callback` {Function}
  * `err` {ErrnoException}
  * Returns: {void}

* Returns: {void}

***

#### `stat`

* Type: {StatFs}

***

#### `unlink`

* Type: {Function} Optional.

##### Parameters

* `pathLike` {PathLikeFs}
* `callback` {Function}
  * `err` {ErrnoException}
  * Returns: {void}

* Returns: {void}

***

#### `writeFile`

* Type: {WriteFile}
