---
authors: sokra,avivkeller
---

# Package exports

The `exports` field in a package's `package.json` declares which module should be used for module requests such as `import "package"` or `import "package/sub/path"`. It replaces the default behavior, which returns the `main` field (or `index.js`) for `"package"` and performs a filesystem lookup for `"package/sub/path"`.

Once the `exports` field is specified, only the requests it lists are available. Any other request results in a `ModuleNotFound` error.

## General syntax

In general, the `exports` field should be an object whose properties each describe a subpath of the module request. For the examples above, you could use `"."` for `import "package"` and `"./sub/path"` for `import "package/sub/path"`.

Properties ending with `/` forward requests with that prefix to the old filesystem lookup algorithm. For properties ending with `*`, the `*` can take any value, and any `*` in the property value is replaced with that captured value.

For example:

```json
{
  "exports": {
    ".": "./main.js",
    "./sub/path": "./secondary.js",
    "./prefix/": "./directory/",
    "./prefix/deep/": "./other-directory/",
    "./other-prefix/*": "./yet-another/*/*.js"
  }
}
```

| Module request                      | Result                                           |
| ----------------------------------- | ------------------------------------------------ |
| `package`                           | `.../package/main.js`                            |
| `package/sub/path`                  | `.../package/secondary.js`                       |
| `package/prefix/some/file.js`       | `.../package/directory/some/file.js`             |
| `package/prefix/deep/file.js`       | `.../package/other-directory/file.js`            |
| `package/other-prefix/deep/file.js` | `.../package/yet-another/deep/file/deep/file.js` |
| `package/main.js`                   | Error                                            |

## Alternatives

Instead of a single result, the package author may provide a list of results. The list is tried in order, and the first valid result is used.

Note: only the first valid result is used, not all valid results.

For example:

```json
{
  "exports": {
    "./things/": ["./good-things/", "./bad-things/"]
  }
}
```

Here, `package/things/apple` might be found in `.../package/good-things/apple` or in `.../package/bad-things/apple`.

> [!WARNING]
> As of version 5.94.0, webpack's behavior has been updated to align with Node.js. It now selects the first valid path without attempting further resolutions, and throws an error if the path cannot be resolved.

For example, given this configuration:

```json
{
  "exports": {
    ".": ["-bad-specifier-", "./non-existent.js", "./existent.js"]
  }
}
```

webpack 5.94.0 and later throws an error because `non-existent.js` is not found, whereas the previous behavior would have resolved to `existent.js`.

## Conditional syntax

Rather than providing results directly in the `exports` field, the package author may let the module system choose one based on conditions about the environment.

To do this, use an object that maps conditions to results. Conditions are evaluated in object order, conditions whose results are invalid are skipped, and conditions may be nested to express a logical AND. The last condition in the object may be the special `"default"` condition, which always matches.

For example:

```json
{
  "exports": {
    ".": {
      "red": "./stop.js",
      "yellow": "./stop.js",
      "green": {
        "free": "./drive.js",
        "default": "./wait.js"
      },
      "default": "./drive-carefully.js"
    }
  }
}
```

This translates to something like:

```ts
if (red && valid('./stop.js')) return './stop.js';
if (yellow && valid('./stop.js')) return './stop.js';
if (green) {
  if (free && valid('./drive.js')) return './drive.js';
  if (valid('./wait.js')) return './wait.js';
}
if (valid('./drive-carefully.js')) return './drive-carefully.js';
throw new ModuleNotFoundError();
```

The available conditions vary depending on the module system and tool used.

## Abbreviation

When only a single entry (`"."`) into the package is needed, you can omit the `{ ".": ... }` object nesting:

```json
{
  "exports": "./index.mjs"
}
```

```json
{
  "exports": {
    "red": "./stop.js",
    "green": "./drive.js"
  }
}
```

## Notes about ordering

In an object whose keys are conditions, the order of properties matters. Conditions are handled in the order they're specified.

For example, `{ "red": "./stop.js", "green": "./drive.js" }` is not equivalent to `{ "green": "./drive.js", "red": "./stop.js" }`. When both the `red` and `green` conditions are set, the first property wins.

In an object whose keys are subpaths, the order of properties is not significant. More specific paths are preferred over less specific ones.

For example, `{ "./a/": "./x/", "./a/b/": "./y/", "./a/b/c": "./z" }` is equivalent to `{ "./a/b/c": "./z", "./a/b/": "./y/", "./a/": "./x/" }`. The order is always `./a/b/c` > `./a/b/` > `./a/`.

The `exports` field takes precedence over other package entry fields such as `main`, `module`, `browser`, or custom ones.

## Support

| Feature                                | Supported by                                                                           |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| `"."` property                         | Node.js, webpack, rollup, esinstall, wmr                                               |
| normal property                        | Node.js, webpack, rollup, esinstall, wmr                                               |
| property ending with `/`               | ~~Node.js<sup>(1)</sup>~~, webpack, rollup, esinstall<sup>(2)</sup>, wmr<sup>(3)</sup> |
| property ending with `*`               | Node.js, webpack, rollup, esinstall                                                    |
| Alternatives                           | Node.js, webpack, rollup, <strike>esinstall</strike><sup>(4)</sup>                     |
| Abbreviation only path                 | Node.js, webpack, rollup, esinstall, wmr                                               |
| Abbreviation only conditions           | Node.js, webpack, rollup, esinstall, wmr                                               |
| Conditional syntax                     | Node.js, webpack, rollup, esinstall, wmr                                               |
| Nested conditional syntax              | Node.js, webpack, rollup, wmr<sup>(5)</sup>                                            |
| Conditions Order                       | Node.js, webpack, rollup, wmr<sup>(6)</sup>                                            |
| `"default"` condition                  | Node.js, webpack, rollup, esinstall, wmr                                               |
| Path Order                             | Node.js, webpack, rollup                                                               |
| Error when not mapped                  | Node.js, webpack, rollup, esinstall, wmr<sup>(7)</sup>                                 |
| Error when mixing conditions and paths | Node.js, webpack, rollup                                                               |

(1) Removed in Node.js 17. Use `*` instead.

(2) `"./"` is intentionally ignored as a key.

(3) The property value is ignored and the property key is used as the target. This effectively only allows mappings where the key and value are identical.

(4) The syntax is supported, but the first entry is always used, which makes it unusable for any practical case.

(5) Fallback to alternative sibling parent conditions is handled incorrectly.

(6) For the `require` condition, object order is handled incorrectly. This is intentional, as wmr does not distinguish between referencing syntaxes.

(7) When using the `"exports": "./file.js"` abbreviation, any request (for example, `package/not-existing`) resolves to that file. Without the abbreviation, direct file access (for example, `package/file.js`) will not lead to an error.

## Conditions

### Reference syntax

One of these conditions is set depending on the syntax used to reference the module:

| Condition | Description                                                         | Supported by                                                         |
| --------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `import`  | Request is issued from ESM syntax or similar.                       | Node.js, webpack, rollup, esinstall<sup>(1)</sup>, wmr<sup>(1)</sup> |
| `require` | Request is issued from CommonJS/AMD syntax or similar.              | Node.js, webpack, rollup, esinstall<sup>(1)</sup>, wmr<sup>(1)</sup> |
| `style`   | Request is issued from a stylesheet reference.                      |                                                                      |
| `sass`    | Request is issued from a Sass stylesheet reference.                 |                                                                      |
| `asset`   | Request is issued from an asset reference.                          |                                                                      |
| `script`  | Request is issued from a normal script tag without a module system. |                                                                      |

These conditions may also be set additionally:

| Condition   | Description                                                                                                   | Supported by         |
| ----------- | ------------------------------------------------------------------------------------------------------------- | -------------------- |
| `module`    | All module syntax that allows referencing JavaScript supports ESM (only combined with `import` or `require`). | webpack, rollup, wmr |
| `esmodules` | Always set by supported tools.                                                                                | wmr                  |
| `types`     | Request is issued from TypeScript that is interested in type declarations.                                    |                      |

(1) `import` and `require` are both set independently of the referencing syntax. `require` always has lower priority.

#### `import`

The following syntax sets the `import` condition:

- ESM `import` declarations in ESM
- JS `import()` expressions
- HTML `<script type="module">`
- HTML `<link rel="preload/prefetch">`
- JS `new Worker(..., { type: "module" })`
- WASM `import` section
- ESM HMR (webpack) `import.hot.accept/decline([...])`
- JS `Worklet.addModule`
- Using JavaScript as an entrypoint

#### `require`

The following syntax sets the `require` condition:

- CommonJS `require(...)`
- AMD `define()`
- AMD `require([...])`
- CommonJS `require.resolve()`
- CommonJS (webpack) `require.ensure([...])`
- CommonJS (webpack) `require.context`
- CommonJS HMR (webpack) `module.hot.accept/decline([...])`
- HTML `<script src="...">`

#### `style`

The following syntax sets the `style` condition:

- CSS `@import`
- HTML `<link rel="stylesheet">`

#### `asset`

The following syntax sets the `asset` condition:

- CSS `url()`
- ESM `new URL(..., import.meta.url)`
- HTML `<img src="...">`

#### `script`

The following syntax sets the `script` condition:

- HTML `<script src="...">`

The `script` condition should be set only when no module system is supported. When the script is preprocessed by a system that supports CommonJS, it should set `require` instead.

Use this condition when looking for a JavaScript file that can be injected as a script tag into an HTML page without additional preprocessing.

### Optimizations

The following conditions are set for various optimizations:

| Condition     | Description                                                    | Supported by |
| ------------- | -------------------------------------------------------------- | ------------ |
| `production`  | In a production environment. No devtooling should be included. | webpack      |
| `development` | In a development environment. Devtooling should be included.   | webpack      |

Note: since `production` and `development` are not supported everywhere, make no assumptions when neither is set.

### Target environment

The following conditions are set depending on the target environment:

| Condition      | Description                                   | Supported by                        |
| -------------- | --------------------------------------------- | ----------------------------------- |
| `browser`      | Code will run in a browser.                   | webpack, esinstall, wmr             |
| `electron`     | Code will run in Electron.<sup>(1)</sup>      | webpack                             |
| `worker`       | Code will run in a (Web)Worker.<sup>(1)</sup> | webpack                             |
| `worklet`      | Code will run in a Worklet.<sup>(1)</sup>     |                                     |
| `node`         | Code will run in Node.js.                     | Node.js, webpack, wmr<sup>(2)</sup> |
| `deno`         | Code will run in Deno.                        |                                     |
| `react-native` | Code will run in React Native.                |                                     |

(1) `electron`, `worker`, and `worklet` come combined with either `node` or `browser`, depending on the context.

(2) This is set for the browser target environment.

Since there are multiple versions of each environment, the following guidelines apply:

- `node`: See the `engines` field for compatibility.
- `browser`: Compatible with the current spec and stage 4 proposals at the time the package is published. Polyfilling or transpiling must be handled on the consumer side.
  - Features that cannot be polyfilled or transpiled should be used carefully, as they limit possible usage.
- `deno`: TBD
- `react-native`: TBD

### Conditions: preprocessor and runtimes

The following conditions are set depending on which tool preprocesses the source code:

| Condition | Description           | Supported by |
| --------- | --------------------- | ------------ |
| `webpack` | Processed by webpack. | webpack      |

Unfortunately, there is no `node-js` condition for Node.js as a runtime. Such a condition would simplify creating exceptions for Node.js.

### Conditions: custom

The following tools support custom conditions:

| Tool      | Supported | Notes                                                                                                          |
| --------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| Node.js   | yes       | Use the [`--conditions`](https://nodejs.org/api/cli.html#cli_c_condition_conditions_condition) CLI argument.   |
| webpack   | yes       | Use the [`resolve.conditionNames`](#TODO[/configuration/resolve/#resolveconditionnames]) configuration option. |
| rollup    | yes       | Use the `exportConditions` option for `@rollup/plugin-node-resolve`.                                           |
| esinstall | no        |                                                                                                                |
| wmr       | no        |                                                                                                                |

For custom conditions, the following naming scheme is recommended:

`<company-name>:<condition-name>`

Examples: `example-corp:beta`, `google:internal`.

## Common patterns

All patterns below are explained with a single `"."` entry into the package, but they can be extended to multiple entries by repeating the pattern for each one.

Treat these patterns as a guide, not a strict ruleset. Adapt them to each package as needed.

These patterns are based on the following goals and assumptions:

- Packages rot.
  - We assume that at some point packages are no longer maintained but continue to be used.
  - `exports` should be written with fallbacks for unknown future cases. The `default` condition is well suited for this.
  - Because the future is unknown, we assume an environment similar to browsers and a module system similar to ESM.
- Not all conditions are supported by every tool.
  - Fallbacks should handle these cases.
  - We assume the following fallbacks generally make sense:
    - ESM > CommonJS
    - Production > Development
    - Browser > Node.js

Depending on a package's intent, something else may make sense, in which case the patterns should be adapted. For example, for a command-line tool, a browser-like future and fallback doesn't make much sense; Node.js-like environments and fallbacks should be used instead.

For complex cases, multiple patterns must be combined by nesting these conditions.

### Target-environment-independent packages

These patterns make sense for packages that do not use environment-specific APIs.

#### Providing only an ESM version

```json
{
  "type": "module",
  "exports": "./index.js"
}
```

Note: providing only ESM comes with restrictions for Node.js. Such a package only works in Node.js >= 14 and only when using `import`. It won't work with `require()`.

#### Providing CommonJS and ESM versions (stateless)

```json
{
  "type": "module",
  "exports": {
    "node": {
      "module": "./index.js",
      "require": "./index.cjs"
    },
    "default": "./index.js"
  }
}
```

Most tools get the ESM version. Node.js is the exception: it gets a CommonJS version when using `require()`. This leads to two instances of the package when it is referenced with both `require()` and `import`, but that's harmless because the package has no state.

The `module` condition is used as an optimization when preprocessing Node-targeted code with a tool that supports ESM for `require()` (such as a bundler that bundles for Node.js). For such a tool, the exception is skipped. This is technically optional, but bundlers would otherwise include the package source code twice.

You can also use the stateless pattern if you isolate your package state in JSON files. JSON is consumable from both CommonJS and ESM without polluting the graph with the other module system.

Note that "stateless" here also means class instances are not tested with `instanceof`, since there can be two different classes because of the double module instantiation.

#### Providing CommonJS and ESM versions (stateful)

```json
{
  "type": "module",
  "exports": {
    "node": {
      "module": "./index.js",
      "import": "./wrapper.js",
      "require": "./index.cjs"
    },
    "default": "./index.js"
  }
}
```

```js
// wrapper.js
import cjs from './index.cjs';

export const A = cjs.A;
export const B = cjs.B;
```

In a stateful package, we must ensure the package is never instantiated twice. This isn't a problem for most tools, but Node.js is again the exception. For Node.js, we always use the CommonJS version and expose named exports in ESM through an ESM wrapper.

We use the `module` condition as an optimization here as well.

#### Providing only a CommonJS version

```json
{
  "type": "commonjs",
  "exports": "./index.js"
}
```

Specifying `"type": "commonjs"` helps tools statically detect CommonJS files.

#### Providing a bundled script version for direct browser consumption

```json
{
  "type": "module",
  "exports": {
    "script": "./dist-bundle.js",
    "default": "./index.js"
  }
}
```

Note that despite `"type": "module"` and the `.js` extension on `dist-bundle.js`, this file is not in ESM format. It should use globals so it can be consumed directly as a script tag.

### Providing devtools or production optimizations

These patterns make sense when a package ships two versions, one for development and one for production. For example, the development version might include extra code for better error messages or additional warnings.

#### Without Node.js runtime detection

```json
{
  "type": "module",
  "exports": {
    "development": "./index-with-devtools.js",
    "default": "./index-optimized.js"
  }
}
```

When the `development` condition is supported, we use the development-enhanced version. Otherwise, in production or when the mode is unknown, we use the optimized version.

#### With Node.js runtime detection

```json
{
  "type": "module",
  "exports": {
    "development": "./index-with-devtools.js",
    "production": "./index-optimized.js",
    "node": "./wrapper-process-env.cjs",
    "default": "./index-optimized.js"
  }
}
```

```js displayName="wrapper-process-env.cjs"
module.exports =
  process.env.NODE_ENV !== 'development'
    ? require('./index-optimized.cjs')
    : require('./index-with-devtools.cjs');
```

We prefer static detection of production/development mode via the `production` or `development` condition.

Node.js can detect production/development mode at runtime via `process.env.NODE_ENV`, so we use that as a fallback in Node.js. Synchronously importing ESM conditionally is not possible, and we don't want to load the package twice, so we use CommonJS for the runtime detection.

When the mode cannot be detected, we fall back to the production version.

### Providing different versions depending on target environment

Choose a fallback environment that makes sense for the package and supports future environments. In general, assume a browser-like environment.

#### Providing Node.js, Web Worker, and browser versions

```json
{
  "type": "module",
  "exports": {
    "node": "./index-node.js",
    "worker": "./index-worker.js",
    "default": "./index.js"
  }
}
```

#### Providing Node.js, browser, and Electron versions

```json
{
  "type": "module",
  "exports": {
    "electron": {
      "node": "./index-electron-node.js",
      "default": "./index-electron.js"
    },
    "node": "./index-node.js",
    "default": "./index.js"
  }
}
```

### Combining patterns

#### Example 1

This is an example of a package that has optimizations for production and development usage with runtime detection for `process.env`, and that also ships CommonJS and ESM versions:

```json
{
  "type": "module",
  "exports": {
    "node": {
      "development": {
        "module": "./index-with-devtools.js",
        "import": "./wrapper-with-devtools.js",
        "require": "./index-with-devtools.cjs"
      },
      "production": {
        "module": "./index-optimized.js",
        "import": "./wrapper-optimized.js",
        "require": "./index-optimized.cjs"
      },
      "default": "./wrapper-process-env.cjs"
    },
    "development": "./index-with-devtools.js",
    "production": "./index-optimized.js",
    "default": "./index-optimized.js"
  }
}
```

#### Example 2

This is an example of a package that supports Node.js, the browser, and Electron, has optimizations for production and development usage with runtime detection for `process.env`, and also ships CommonJS and ESM versions:

```json
{
  "type": "module",
  "exports": {
    "electron": {
      "node": {
        "development": {
          "module": "./index-electron-node-with-devtools.js",
          "import": "./wrapper-electron-node-with-devtools.js",
          "require": "./index-electron-node-with-devtools.cjs"
        },
        "production": {
          "module": "./index-electron-node-optimized.js",
          "import": "./wrapper-electron-node-optimized.js",
          "require": "./index-electron-node-optimized.cjs"
        },
        "default": "./wrapper-electron-node-process-env.cjs"
      },
      "development": "./index-electron-with-devtools.js",
      "production": "./index-electron-optimized.js",
      "default": "./index-electron-optimized.js"
    },
    "node": {
      "development": {
        "module": "./index-node-with-devtools.js",
        "import": "./wrapper-node-with-devtools.js",
        "require": "./index-node-with-devtools.cjs"
      },
      "production": {
        "module": "./index-node-optimized.js",
        "import": "./wrapper-node-optimized.js",
        "require": "./index-node-optimized.cjs"
      },
      "default": "./wrapper-node-process-env.cjs"
    },
    "development": "./index-with-devtools.js",
    "production": "./index-optimized.js",
    "default": "./index-optimized.js"
  }
}
```

It looks complex, yes. We were already able to reduce some complexity thanks to an assumption we can make: only `node` needs a CommonJS version and can detect production/development with `process.env`.

## Guidelines

- Avoid the `default` export. It's handled differently across tooling. Use only named exports.
- Never provide different APIs or semantics for different conditions.
- Write your source code as ESM and transpile to CJS with Babel, TypeScript, or a similar tool.
- Use either `.cjs` or `"type": "commonjs"` in `package.json` to clearly mark source code as CommonJS. This makes it statically detectable whether CommonJS or ESM is used, which matters for tools that support only ESM and not CommonJS.
- ESM used in packages supports the following request types:
  - Module requests, pointing to other packages with a `package.json`.
  - Relative requests, pointing to other files within the package.
    - They must not point to files outside the package.
  - `data:` URL requests.
  - Other absolute or server-relative requests are not supported by default, though some tools or environments may support them.

## Further reading

- [Package entry points in Node.js](https://nodejs.org/api/packages.html#packages_package_entry_points)
