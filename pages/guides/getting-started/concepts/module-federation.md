---
authors: sokra,chenxsan,EugeneHlushko,jamesgeorge007,ScriptedAlchemy,snitin315,XiaofengXie16,KyleBastien,Alevale,burhanuday,RexSkz,avivkeller
---

# Module Federation

## Motivation

Multiple separate builds should be able to form a single application. These separate builds act like containers that can expose and consume code among themselves, producing one unified application.

This is often called Micro-Frontends, but it is not limited to that pattern.

<!-- TODO: StackBlitzPreview example="module-federation?terminal=start&terminal=" -->

## Low-level concepts

We distinguish between local and remote modules. Local modules are regular modules that are part of the current build. Remote modules are not part of the current build; they are loaded at runtime from a remote container.

Loading a remote module is an asynchronous operation. When you use a remote module, that asynchronous operation is placed in the next chunk-loading operation(s) that sit between the remote module and the entry point. You cannot use a remote module without a chunk-loading operation.

A chunk-loading operation is usually an `import()` call, but older constructs such as `require.ensure` or `require([...])` are supported as well.

A container is created through a container entry, which exposes asynchronous access to specific modules. That access is split into two steps:

1. Loading the module (asynchronous).
2. Evaluating the module (synchronous).

Step 1 happens during chunk loading. Step 2 happens during module evaluation, interleaved with other local and remote modules. This way, evaluation order is unaffected by converting a module from local to remote or vice versa.

Containers can be nested, and a container can use modules from other containers. Circular dependencies between containers are also possible.

## High-level concepts

Each build acts as a container and also consumes other builds as containers. This way, each build can access any other exposed module by loading it from its container.

Shared modules are modules that are both overridable and provided as overrides to nested containers. They usually point to the same module in each build, for example the same library.

The `packageName` option lets you set a package name to look up a `requiredVersion`. It is inferred automatically from the module requests by default; set `requiredVersion` to `false` to disable automatic inference.

## Building blocks

### `ContainerPlugin` (low level)

This plugin creates an additional container entry with the specified exposed modules.

### `ContainerReferencePlugin` (low level)

This plugin adds specific references to containers as externals and allows importing remote modules from those containers. It also calls the `override` API of these containers to provide overrides to them. Local overrides (via `__webpack_override__` or the `override` API, when the build is also a container) and specified overrides are provided to all referenced containers.

### `ModuleFederationPlugin` (high level)

[`ModuleFederationPlugin`](/docs/api/container/ModuleFederationPlugin) combines `ContainerPlugin` and `ContainerReferencePlugin`.

## Concept goals

- It should be possible to expose and consume any module type that webpack supports.
- Chunk loading should load everything needed in parallel (on the web, in a single round trip to the server).
- Control flows from the consumer to the container:
  - Overriding modules is a one-directional operation.
  - Sibling containers cannot override each other's modules.
- The concept should be environment-independent and usable on the web, in Node.js, and elsewhere.
- Relative and absolute requests in `shared`:
  - Are always provided, even if not used.
  - Resolve relative to `config.context`.
  - Do not use a `requiredVersion` by default.
- Module requests in `shared`:
  - Are only provided when they are used.
  - Match all used equal module requests in your build.
  - Provide all matching modules.
  - Extract `requiredVersion` from the `package.json` at that position in the graph.
  - Can provide and consume multiple different versions when you have nested `node_modules`.
- Module requests with a trailing `/` in `shared` match all module requests with that prefix.

## Use cases

### Separate builds per page

Each page of a Single Page Application is exposed from a container build in a separate build. The application shell is also a separate build that references all pages as remote modules. This way, each page can be deployed separately. The application shell is deployed when routes are updated or new routes are added. The application shell defines commonly used libraries as shared modules to avoid duplicating them across the page builds.

### Component library as a container

Many applications share a common component library, which can be built as a container with each component exposed. Each application consumes components from that container. Changes to the component library can be deployed separately, without redeploying every application. The applications automatically use the up-to-date version of the component library.

## Dynamic remote containers

The container interface supports `get` and `init` methods. `init` is an `async`-compatible method called with a single argument: the shared scope object. This object is used as the shared scope in the remote container and is filled with the modules provided by a host. You can use it to connect remote containers to a host container dynamically at runtime.

```js displayName="init.js"
(async () => {
  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes.
  await __webpack_init_sharing__('default');
  const container = globalThis.someContainer; // or get the container somewhere else
  // Initialize the container; it may provide shared modules.
  await container.init(__webpack_share_scopes__.default);
  const module = await container.get('./module');
})();
```

> [!TIP]
> A **container** is the remote container entry object exposed by a federated build, usually through that remote's `remoteEntry.js`. It provides the `get` and `init` methods shown here. In examples like `window[scope]` or `globalThis.someContainer`, the container is expected to exist only after the remote container script has already loaded.

The container tries to provide shared modules, but if a shared module has already been used, a warning is issued and the newly provided shared module is ignored. The container may still use it as a fallback.

This way, you could dynamically load an A/B test that provides a different version of a shared module.

> [!TIP]
> Ensure you have loaded the container before attempting to dynamically connect a remote container.

Example:

```js displayName="init.js"
function loadComponent(scope, module) {
  return async () => {
    // Initializes the shared scope. Fills it with known provided modules from this build and all remotes.
    await __webpack_init_sharing__('default');
    const container = window[scope]; // the remote container exposed by the loaded remoteEntry.js script
    // Initialize the container; it may provide shared modules.
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

loadComponent('abtests', 'test123');
```

[See the full implementation](https://github.com/module-federation/module-federation-examples/tree/master/advanced-api/dynamic-remotes).

## Promise-based dynamic remotes

Remotes are generally configured using URLs, as in this example:

```js
export default {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
      },
    }),
  ],
};
```

But you can also pass a promise as the remote, which is resolved at runtime. You should resolve the promise with anything that fits the `get`/`init` interface described above. For example, if you wanted to choose which version of a federated module to use via a query parameter, you could do something like the following:

```js
export default {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: `promise new Promise(resolve => {
      const urlParams = new URLSearchParams(window.location.search)
      const version = urlParams.get('app1VersionParam')
      // This part depends on how you plan on hosting and versioning your federated modules
      const remoteUrlWithVersion = 'http://localhost:3001/' + version + '/remoteEntry.js'
      const script = document.createElement('script')
      script.src = remoteUrlWithVersion
      script.onload = () => {
        // the injected script has loaded and is available on window
        // we can now resolve this Promise
        const proxy = {
          get: (request) => window.app1.get(request),
          init: (...arg) => {
            try {
              return window.app1.init(...arg)
            } catch(e) {
              console.log('remote container already initialized')
            }
          }
        }
        resolve(proxy)
      }
      // inject this script with the src set to the versioned remoteEntry.js
      document.head.appendChild(script);
    })
    `,
      },
      // ...
    }),
  ],
};
```

Note that when you use this API, you _have_ to resolve an object containing the `get`/`init` API.

## Dynamic public path

### Offer a host API to set the public path

You can allow the host to set a remote module's public path at runtime by exposing a method from that remote module.

This approach is especially helpful when you mount independently deployed child applications on a sub-path of the host domain.

Scenario:

You have a host app served at `https://my-host.com/app/*` and a child app served at `https://foo-app.com`. The child app is also mounted on the host domain, so `https://foo-app.com` is expected to be reachable at `https://my-host.com/app/foo-app`, and `https://my-host.com/app/foo-app/*` requests are redirected to `https://foo-app.com/*` via a proxy.

Example:

```js displayName="webpack.config.js (remote)"
export default {
  entry: {
    remote: './public-path',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote', // this name needs to match the entry name
      exposes: ['./public-path'],
      // ...
    }),
  ],
};
```

```js displayName="public-path.js (remote)"
export function set(value) {
  __webpack_public_path__ = value;
}
```

```ts displayName="src/index.js (host)"
const publicPath = await import('remote/public-path');
publicPath.set('/your-public-path');

// bootstrap app, e.g. import('./bootstrap.js')
```

### Infer the public path from the script

You can infer the public path from the script tag via `document.currentScript.src` and set it with the [`__webpack_public_path__`](#TODO[/api/module-variables/#__webpack_public_path__-webpack-specific]) module variable at runtime.

Example:

```js displayName="webpack.config.js (remote)"
export default {
  entry: {
    remote: './setup-public-path',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote', // this name needs to match the entry name
      // ...
    }),
  ],
};
```

```js displayName="setup-public-path.js (remote)"
// derive the publicPath with your own logic and set it with the __webpack_public_path__ API
__webpack_public_path__ = `${document.currentScript.src}/../`;
```

> [!TIP]
> There is also an `'auto'` value available for [`output.publicPath`](#TODO[/configuration/output/#outputpublicpath]) that determines the public path for you automatically.

## Troubleshooting

### `Uncaught Error: Shared module is not available for eager consumption`

The application is eagerly executing an application that operates as an omnidirectional host. You have a few options:

You can mark the dependency as eager inside the advanced API of Module Federation. This does not place the modules in an async chunk but provides them synchronously, which lets you use these shared modules in the initial chunk. Be careful, though: all provided and fallback modules are always downloaded. It's recommended to do this at only one point in your application, for example the shell.

We strongly recommend using an asynchronous boundary instead. It splits out the initialization code of a larger chunk to avoid additional round trips and improve overall performance.

For example, suppose your entry looked like this:

```jsx displayName="index.js"
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

Create a `bootstrap.js` file, move the contents of the entry into it, and import that bootstrap from the entry:

```diff displayName="index.js"
+ import('./bootstrap');
- import { createRoot } from 'react-dom/client';
- import App from './App';

- const root = createRoot(document.getElementById('root'));
- root.render(<App />);
```

```diff displayName="bootstrap.js"
+ import { createRoot } from 'react-dom/client';
+ import App from './App';
+ const root = createRoot(document.getElementById('root'));
+ root.render(<App />);
```

This method works, but it can have limitations or drawbacks.

Alternatively, set `eager: true` for the dependency via `ModuleFederationPlugin`:

```js displayName="webpack.config.js"
// ...
new ModuleFederationPlugin({
  shared: {
    ...deps,
    react: {
      eager: true,
    },
  },
});
```

### `Uncaught Error: Module "./Button" does not exist in container.`

The error probably won't say `"./Button"` exactly, but it will look similar. This issue typically appears when you upgrade from webpack beta.16 to webpack beta.17.

Within `ModuleFederationPlugin`, change the `exposes` from:

```diff
new ModuleFederationPlugin({
  exposes: {
-   'Button': './src/Button'
+   './Button':'./src/Button'
  }
});
```

### `Uncaught TypeError: fn is not a function`

You are likely missing the remote container; make sure it's added. If you already have the container loaded for the remote you're trying to consume but still see this error, add the host container's remote container file to the HTML as well.

### Setting `output.uniqueName`

In a Module Federation setup, both the host and every remote must have a globally unique `output.uniqueName`. webpack derives this value from the `name` field in `package.json` by default. This means two builds that share the same `package.json` `name` (a common pattern when splitting a remote out of an existing project) can silently collide at runtime.

One solution is to use a separate `package.json` with a distinct name for each configuration.

Alternatively, set `output.uniqueName` explicitly in each webpack config:

```js displayName="webpack.config.js (host)"
export default {
  output: {
    uniqueName: 'my-host-app',
  },
  plugins: [
    new ModuleFederationPlugin({
      // ...
    }),
  ],
};
```

```js displayName="webpack.config.js (remote)"
export default {
  output: {
    uniqueName: 'my-remote-app', // must differ from the host and all other remotes
  },
  plugins: [
    new ModuleFederationPlugin({
      // ...
    }),
  ],
};
```

The value can be any string, as long as it is unique across every federated build loaded on a given page.

## Further reading

- [Webpack 5 Module Federation: A game-changer in JavaScript architecture](https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669)
- [Explanations and Examples](https://github.com/module-federation/module-federation-examples)
- [Module Federation YouTube Playlist](https://www.youtube.com/playlist?list=PLWSiF9YHHK-DqsFHGYbeAMwbd9xcZbEWJ)
