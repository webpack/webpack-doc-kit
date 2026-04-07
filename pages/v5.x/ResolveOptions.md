# ResolveOptions

<!-- type=misc -->

## `ResolveOptions`

Options object for resolving requests.

### Properties

#### `alias`

* Type: {object[]|object} Optional.

Redirect module requests.

##### Union Members

{object[]}

***

###### Type Literal

{object}

***

#### `aliasFields`

* Type: {string|string[][]} Optional.

Fields in the description file (usually package.json) which are used to redirect requests inside the module.

***

#### `byDependency`

* Type: {object} Optional.

Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm".

##### Index Signature

\[`index`: {string}\]: {ResolveOptions}

***

#### `cache`

* Type: {boolean} Optional.

Enable caching of successfully resolved requests (cache entries are revalidated).

***

#### `cachePredicate`

* Type: {Function} Optional.

Predicate function to decide which requests should be cached.

##### Parameters

* `request` {ResolveRequest}

* Returns: {boolean}

***

#### `cacheWithContext`

* Type: {boolean} Optional.

Include the context information in the cache identifier when caching.

***

#### `conditionNames`

* Type: {string[]} Optional.

Condition names for exports field entry point.

***

#### `descriptionFiles`

* Type: {string[]} Optional.

Filenames used to find a description file (like a package.json).

***

#### `enforceExtension`

* Type: {boolean} Optional.

Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension).

***

#### `exportsFields`

* Type: {string[]} Optional.

Field names from the description file (usually package.json) which are used to provide entry points of a package.

***

#### `extensionAlias`

* Type: {object} Optional.

An object which maps extension to extension aliases.

##### Index Signature

\[`index`: {string}\]: {string|string[]}

***

#### `extensions`

* Type: {string[]} Optional.

Extensions added to the request when trying to find the file.

***

#### `fallback`

* Type: {object[]|object} Optional.

Redirect module requests when normal resolving fails.

##### Union Members

{object[]}

***

###### Type Literal

{object}

***

#### `fileSystem`

* Type: {InputFileSystem} Optional.

Filesystem for the resolver.

***

#### `fullySpecified`

* Type: {boolean} Optional.

Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases).

***

#### `importsFields`

* Type: {string[]} Optional.

Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal).

***

#### `mainFields`

* Type: {string|string[][]} Optional.

Field names from the description file (package.json) which are used to find the default entry point.

***

#### `mainFiles`

* Type: {string[]} Optional.

Filenames used to find the default entry point if there is no description file or main field.

***

#### `modules`

* Type: {string[]} Optional.

Folder names or directory paths where to find modules.

***

#### `plugins`

* Type: {false|""|0|"..."|object|Function[]} Optional.

Plugins for the resolver.

***

#### `preferAbsolute`

* Type: {boolean} Optional.

Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'.

***

#### `preferRelative`

* Type: {boolean} Optional.

Prefer to resolve module requests as relative request and fallback to resolving as module.

***

#### `resolver`

* Type: {Resolver} Optional.

Custom resolver.

***

#### `restrictions`

* Type: {string|RegExp[]} Optional.

A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met.

***

#### `roots`

* Type: {string[]} Optional.

A list of directories in which requests that are server-relative URLs (starting with '/') are resolved.

***

#### `symlinks`

* Type: {boolean} Optional.

Enable resolving symlinks to the original location.

***

#### `tsconfig`

* Type: {string|boolean|object} Optional.

TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options.

##### Union Members

{string}

***

{boolean}

***

###### Type Literal

{object}

* `configFile` {string} A path to the tsconfig file.
* `references` {string} References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths.

***

#### `unsafeCache`

* Type: {boolean|object} Optional.

Enable caching of successfully resolved requests (cache entries are not revalidated).

***

#### `useSyncFileSystemCalls`

* Type: {boolean} Optional.

Use synchronous filesystem calls for the resolver.
