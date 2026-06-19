---
authors: kryptokinght,SpaceK33z,sokra,GRardB,rouzbeh84,skipjack,avivkeller
---

# Hot Module Replacement

Hot Module Replacement (HMR) exchanges, adds, or removes [modules](/guides/getting-started/concepts/modules) while an application is running, without a full reload. It can significantly speed up development in several ways:

- It preserves application state that would otherwise be lost during a full reload.
- It saves valuable development time by updating only what changed.
- It updates the browser instantly when CSS or JavaScript source changes, which feels almost like editing styles directly in the browser's dev tools.

## How it works

Let's look at HMR from several different viewpoints to understand exactly how it works.

### In the application

The following steps allow modules to be swapped in and out of a running application:

1. The application asks the HMR runtime to check for updates.
2. The runtime asynchronously downloads the updates and notifies the application.
3. The application then asks the runtime to apply the updates.
4. The runtime applies the updates synchronously.

You can configure HMR so that this process happens automatically, or you can require user interaction before updates are applied.

### In the compiler

Beyond the usual assets, the compiler emits an "update" that allows moving from the previous version to the new one. An update has two parts:

1. The updated [manifest](/guides/getting-started/concepts/manifest) (JSON).
2. One or more updated chunks (JavaScript).

The manifest contains the new compilation hash and a list of all updated chunks. Each chunk contains the new code for its updated modules, or a flag indicating that a module was removed.

The compiler keeps module IDs and chunk IDs consistent between builds. It usually stores these IDs in memory (for example, with [webpack-dev-server](#TODO[/configuration/dev-server/])), but they can also be stored in a JSON file.

### In a module

HMR is an opt-in feature that only affects modules containing HMR code. One example is patching styles through [`style-loader`](https://github.com/webpack/style-loader). For patching to work, `style-loader` implements the HMR interface: when it receives an update through HMR, it replaces the old styles with the new ones.

Similarly, by implementing the HMR interface in a module, you can describe what should happen when that module is updated. In most cases, however, you do not need to write HMR code in every module. If a module has no HMR handlers, the update bubbles up. This means a single handler can update a whole module tree. When any module in the tree is updated, the entire set of dependencies is reloaded.

See the [HMR API page](#TODO[/api/hot-module-replacement]) for details on the `module.hot` interface.

### In the runtime

Here things get a bit more technical. If you're not interested in the internals, feel free to skip ahead to the [HMR API page](#TODO[/api/hot-module-replacement]) or the [HMR guide](/guides/core-workflows/development/hot-module-replacement).

For the module system runtime, additional code is emitted to track each module's `parents` and `children`. On the management side, the runtime supports two methods: `check` and `apply`.

A `check` makes an HTTP request to the update manifest. If the request fails, no update is available. If it succeeds, the list of updated chunks is compared with the list of currently loaded chunks. For each loaded chunk, the corresponding update chunk is downloaded, and all module updates are stored in the runtime. Once every update chunk has been downloaded and is ready to apply, the runtime switches into the `ready` state.

The `apply` method flags all updated modules as invalid. Each invalid module needs an update handler in itself or in one of its parents. Otherwise, the invalid flag bubbles up and invalidates the parents too. Each bubble continues until it reaches the application's entry point or a module with an update handler, whichever comes first. If it bubbles up from an entry point, the process fails.

Afterward, all invalid modules are disposed (via their dispose handlers) and unloaded. The current hash is then updated and all `accept` handlers are called. The runtime switches back to the `idle` state, and everything continues as normal.

## Get started

HMR can be used in development as a replacement for LiveReload. [webpack-dev-server](#TODO[/configuration/dev-server/]) supports a `hot` mode in which it tries to update with HMR before falling back to reloading the whole page. See the [Hot Module Replacement guide](/guides/core-workflows/development/hot-module-replacement) for details.

> [!TIP]
> As with many other features, webpack's power lies in its customizability. There are _many_ ways to configure HMR depending on a project's needs. For most purposes, though, `webpack-dev-server` is a good fit and will get you started with HMR quickly.
