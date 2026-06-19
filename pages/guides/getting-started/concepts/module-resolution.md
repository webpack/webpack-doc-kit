---
authors: pksjce,pastelsky,byzyk,EugeneHlushko,wizardofhogwarts,avivkeller
---

# Module Resolution

A resolver is a library that locates a module by its absolute path. When one module depends on another, it requires it like this:

```js
import foo from 'path/to/module';

// or

require('path/to/module');
```

The dependency can come from your own application code or from a third-party library. For every such `require`/`import` statement, the resolver tells webpack where to find the module's code so it can be included in the bundle. webpack uses [enhanced-resolve](https://github.com/webpack/enhanced-resolve) to resolve file paths while bundling modules.

## Resolving rules in webpack

With `enhanced-resolve`, webpack can resolve three kinds of file paths.

### Absolute paths

```js
import '/home/me/file';

import 'C:\\Users\\me\\file';
```

Since the absolute path to the file is already known, no further resolution is needed.

### Relative paths

```js
import '../src/file1';
import './file2';
```

Here, the directory of the source file containing the `import` or `require` is used as the context directory. The relative path is joined to that context to produce the absolute path of the module.

### Module paths

```js
import 'my-module';
import 'my-module/lib/file';
```

Modules are searched for in every directory listed in [`resolve.modules`](#TODO[/configuration/resolve/#resolvemodules]). You can substitute a different path for the original module path by defining an alias through the [`resolve.alias`](#TODO[/configuration/resolve/#resolvealias]) configuration option.

- If the package contains a `package.json` file, the fields listed in the [`resolve.exportsFields`](#TODO[/configuration/resolve/#resolveexportsfields]) configuration option are checked in order. The first matching field in `package.json` determines the package's available exports, following the [package exports guideline](/guides/modules-and-dependencies/package-exports).

Once the path is resolved by the rules above, the resolver checks whether it points to a file or a directory. If it points to a file:

- If the path already has a file extension, the file is bundled directly.
- Otherwise, the extension is resolved using the [`resolve.extensions`](#TODO[/configuration/resolve/#resolveextensions]) option, which lists the extensions that are acceptable for resolution, such as `.js` or `.jsx`.

If the path points to a folder, the following steps are taken to find the correct file with the correct extension:

- If the folder contains a `package.json` file, the fields listed in the [`resolve.mainFields`](#TODO[/configuration/resolve/#resolvemainfields]) configuration option are checked in order, and the first matching field in `package.json` determines the file path.
- If there is no `package.json`, or if [`resolve.mainFields`](#TODO[/configuration/resolve/#resolvemainfields]) does not yield a valid path, the file names listed in the [`resolve.mainFiles`](#TODO[/configuration/resolve/#resolvemainfiles]) option are tried in order to see whether a matching file exists in the imported directory.
- The file extension is then resolved as before, using the [`resolve.extensions`](#TODO[/configuration/resolve/#resolveextensions]) option.

webpack provides sensible [defaults](#TODO[/configuration/resolve]) for these options based on your build target.

## Resolving loaders

Loader resolution follows the same rules as file resolution. However, the [`resolveLoader`](#TODO[/configuration/resolve/#resolveloader]) configuration option lets you define separate resolution rules specifically for loaders.

## Caching

Every filesystem access is cached, so repeated requests to the same file, whether parallel or serial, resolve faster. In [watch mode](#TODO[/configuration/watch/#watch]), only modified files are evicted from the cache. When watch mode is off, the cache is purged before every compilation.

See the [Resolve API](#TODO[/configuration/resolve]) to learn more about the configuration options mentioned above.
