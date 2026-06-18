---
authors: chenxsan,avivkeller
---

# Web Workers

As of webpack 5, you can use [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) without [`worker-loader`](https://github.com/webpack-contrib/worker-loader).

## Syntax

```js
new Worker(new URL('./worker.js', import.meta.url));
```

```js
// or customize the chunk name with magic comments
// see https://webpack.js.org/api/module-methods/#magic-comments
new Worker(
  /* webpackChunkName: "foo-worker" */ new URL('./worker.js', import.meta.url)
);
```

This syntax was chosen so that the code can run without a bundler; it's also available in native ECMAScript modules in the browser.

Note that while the [`Worker` API](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker) suggests the `Worker` constructor accepts a string representing the URL of the script, in webpack 5 you can only use a `URL` instead.

Available in webpack 5.105.0+.

When you use `new Worker()`, webpack can resolve worker modules by the export condition names defined in the package's `exports` field. This allows packages to provide worker-specific versions of modules automatically.

```json displayName="package.json (in a dependency package)"
{
  "name": "my-package",
  "exports": {
    ".": {
      "worker": "./index.worker.js",
      "default": "./index.js"
    }
  }
}
```

When you import this package inside a worker context:

```js
// Inside a worker file
import { someFunction } from 'my-package';
```

webpack automatically resolves to `index.worker.js` when the module is used in a worker context, without requiring any additional configuration.

> [!WARNING]
> Using a variable in the `Worker` constructor is not supported by webpack. For example, the following code will not work: `const url = new URL('./path/to/worker.ts', import.meta.url); const worker = new Worker(url);`. This is because webpack cannot analyze the syntax statically. Keep this limitation in mind when using `Worker` syntax with webpack.

## Example

```js displayName="src/index.js"
const worker = new Worker(new URL('./deep-thought.js', import.meta.url));
worker.postMessage({
  question:
    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});
worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};
```

```js displayName="src/deep-thought.js"
globalThis.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: 42,
  });
};
```

## Set a public path from a variable

When you set `__webpack_public_path__` from a variable and use `publicPath` equal to `auto`, worker chunks get a separate runtime, and the webpack runtime sets `publicPath` to an automatically calculated public path — which is probably not what you expect.

To work around this, set `__webpack_public_path__` from within the worker code. Here is an example:

```js displayName="worker.js"
globalThis.onmessage = ({ data: { publicPath, ...otherData } }) => {
  if (publicPath) {
    __webpack_public_path__ = publicPath;
  }

  // rest of the worker code
};
```

```js displayName="app.js"
const worker = new Worker(new URL('./worker.js', import.meta.url));

worker.postMessage({ publicPath: globalThis.__MY_GLOBAL_PUBLIC_PATH_VAR__ });
```

**When to use this:**

This pattern is only required when a worker needs to load additional chunks and the asset base URL is determined at runtime (for example, when using a CDN or a multi-domain deployment).

Since workers run in an isolated global scope, the automatically detected public path may differ from the one used by the main thread. In such cases, the public path (`__webpack_public_path__`) must be passed explicitly to the worker and set inside the worker runtime.

> [!NOTE]
> This is an advanced use case. If your worker does not load additional chunks, or your assets are served from a static, same-origin path, you typically don't need to set `__webpack_public_path__` manually.

## Node.js

This section describes using Web Workers in a Node.js environment via the `worker_threads` module.

Similar syntax is supported in Node.js (>= 12.17.0):

```js
import { Worker } from 'node:worker_threads';

new Worker(new URL('./worker.js', import.meta.url));
```

Note that this is only available in ESM. `Worker` in CommonJS syntax is not supported by either webpack or Node.js.
