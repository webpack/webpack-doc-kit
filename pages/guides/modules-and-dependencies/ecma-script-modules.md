---
authors: sokra,ryzrr,avivkeller
---

# ECMAScript Modules

ECMAScript Modules (ESM) is a [specification](https://tc39.github.io/ecma262/#sec-modules) for using modules on the Web. It is supported by all modern browsers and is the recommended way to write modular code for the Web.

webpack supports processing ECMAScript Modules in order to optimize them.

## Exporting

The `export` keyword lets you expose values from an ESM to other modules:

```js
export const CONSTANT = 42;

export let variable = 42;
// only reading is exposed
// it's not possible to modify the variable from outside

export function fun() {
  console.log('fun');
}

export class C extends Super {
  method() {
    console.log('method');
  }
}

let a, b, other;
export { a, b, other as c };

export default 1 + 2 + 3 + more();
```

## Importing

The `import` keyword lets you obtain references to values from other modules within an ESM:

```js
// import "bindings" to exports from another module.
// These bindings are live: the values are not copied,
// so accessing "variable" reads the current value
// in the imported module.
import { CONSTANT, variable } from './module.js';

// shortcut to import the "default" export
import theDefaultValue from './module.js';

// import the "namespace object" which contains all exports
import * as module from './module.js';

module.fun();
```

When importing a namespace object from an ECMAScript Module, webpack follows the ESM convention of setting `Symbol.toStringTag` to `"Module"` on the namespace object.

## Flagging modules as ESM

By default, webpack automatically detects whether a file is an ESM or uses a different module system.

Node.js established a way to explicitly set the module type of files through a property in `package.json`. Setting `"type": "module"` forces all files below that `package.json` to be treated as ECMAScript Modules, while `"type": "commonjs"` forces them to be CommonJS Modules.

```json
{
  "type": "module"
}
```

In addition, files can declare their module type through the `.mjs` or `.cjs` extension. `.mjs` forces ESM, and `.cjs` forces CommonJS.

In Data URIs, using the `text/javascript` or `application/javascript` MIME type also forces the module type to ESM.

Beyond the module format itself, flagging modules as ESM also affects the resolving logic, the interop logic, and the symbols available in modules.

## `import.meta` in ESM

webpack exposes several `import.meta` properties for use in ESM:

| Property                     | Description                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `import.meta.url`            | The URL of the current module file — use it for `new Worker()` or `new URL()`.                                           |
| `import.meta.webpack`        | The webpack major version number (e.g. `5`).                                                                             |
| `import.meta.webpackHot`     | Equivalent of `module.hot` — use it for HMR in ESM.                                                                      |
| `import.meta.webpackContext` | [ESM equivalent of `require.context`](/guides/modules-and-dependencies/dependency-management/#importmetawebpackcontext). |

**Example — using `import.meta.url` for assets:**

```js
// Resolve a sibling file relative to the current module
const iconUrl = new URL('./icon.png', import.meta.url);
const img = document.createElement('img');
img.src = iconUrl.href;
```

**Example — HMR in ESM:**

```js
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept('./module.js', () => {
    // handle update
  });
}
```

## Top-level await

In ESM, you can use `await` at the top level of a module, and webpack automatically treats the module as an async module. This has been enabled by default since 5.83.0; the `experiments.topLevelAwait` option itself was removed in 5.102.0, so it now simply works.

> [!WARNING]
> Avoid top-level await in your entry point when targeting the **browser**. It delays evaluation of the entire module graph. Prefer `import()` for deferred loading. For Node.js, Electron, or Web Worker targets, this restriction does not apply.

```js
// user.js (async ESM module)
const response = await fetch('/api/user');

export const user = await response.json();
```

```js
// index.js — importing an async module works as expected
import { user } from './user.js';

console.log(user.name);
```

## Fully specified imports

Imports in ESM are resolved more strictly. Following the Node.js convention, relative requests must include a file extension (such as `*.js` or `*.mjs`) when the file is flagged as ESM:

```js
// will fail — missing extension
import { helper as missingExt } from './utils';

// correct in ESM
import { helper } from './utils.js';
```

> [!TIP]
> Requests to packages, such as `import "lodash"`, are still supported.

To disable this check (which is useful when migrating a large CommonJS codebase), you can use [`fullySpecified=false`](#TODO[/configuration/module/#resolvefullyspecified]):

```js displayName="webpack.config.js"
export default {
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
```

## CommonJS interop

CommonJS syntax is not available in ESM: `require`, `module`, `exports`, `__filename`, and `__dirname`.

When importing from a CommonJS module inside ESM, only the `default` export is available — that is, the entire `module.exports` object:

```js
// esm-consumer.js (ESM)
import cjs from './cjs-module.js';
// named imports from CJS don't work
import { foo } from './cjs-module.js'; // undefined

// cjs-module.js (CommonJS)
module.exports = { foo: 1, bar: 2 };

console.log(cjs.foo); // works — cjs is the whole exports object
```

This strict behavior applies when webpack treats the **imported** module as CommonJS. If that module itself uses ESM `export` syntax, webpack auto-detects it as ESM and named imports work normally. This commonly affects projects that mix `.js` files in a project that has `"type": "module"` set: webpack may treat some files as ESM while third-party packages in `node_modules` remain CommonJS.

> [!TIP]
> To get named exports from CommonJS modules, consider migrating to ESM or using [`@babel/plugin-transform-modules-commonjs`](https://babeljs.io/docs/babel-plugin-transform-modules-commonjs).

## Common migration errors

**`ReferenceError: require is not defined`**

When a file is treated as ESM, the CommonJS globals (`require`, `module`, `exports`, `__filename`, and `__dirname`) are unavailable.

_Fix_: Replace `require()` with `import` statements. For conditional or dynamic loading, use `import()`.

---

**`Must use import to load ES Module`** (Node.js) / **`SyntaxError: Cannot use import statement in a module`** (browser)

This happens when a file using ESM `import`/`export` syntax is not flagged as ESM — either `"type": "module"` is missing from `package.json`, or the file uses a `.js` extension instead of `.mjs`.

_Fix_: Add `"type": "module"` to your `package.json`, or rename the file to `.mjs`.

---

**`Module not found: Error: Can't resolve './utils'` (missing extension)**

In ESM, relative imports must include the file extension. webpack follows the Node.js ESM convention here.

_Fix_: Change `import { helper } from './utils'` to `import { helper } from './utils.js'`, or set [`fullySpecified: false`](#TODO[/configuration/module/#resolvefullyspecified]) in your webpack config to disable the check while migrating.

## Further reading

- [ECMAScript Modules in Node.js](https://nodejs.org/api/esm.html)
