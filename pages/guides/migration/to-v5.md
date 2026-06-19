---
authors: sokra,salemhilal,keichinger,EugeneHlushko,MattGoldwater,rramaa,chenxsan,jamesgeorge007,getsnoopy,yevhen-logosha,akash-kumar-dev,EvanSanderson,avivkeller
---

# To v5 from v4

This guide helps you migrate to webpack 5 when you use webpack directly. If you rely on a higher-level tool to run webpack, follow that tool's own migration instructions instead.

## Preparations

webpack 5 requires at least Node.js 10.13.0 (LTS), so upgrade your Node.js installation if you are still running an older version.

## Upgrade webpack 4 and its plugins and loaders

1. Upgrade `webpack` 4 to the latest available version.
   - If you are already on webpack >= 4, upgrading to the latest webpack 4 release should not require additional guidance.
   - If you are on a version earlier than 4, follow the [webpack 4 migration guide](/guides/migration/to-v4) first.

2. Upgrade `webpack-cli` to the latest available version (if you use it).

3. Upgrade all of your plugins and loaders to their latest available versions.

   Some plugins and loaders may have a beta version that is required for webpack 5 compatibility. Read each plugin's and loader's release notes when upgrading, since the latest version might only support webpack 5 and fail on v4. In that case, upgrade to the latest version that still supports webpack 4.

## Codemods

To assist with upgrading from webpack v4 to v5, [Codemod](https://github.com/codemod-com/codemod) provides open-source community codemods that automate much of the migration.

Note that these are not official webpack codemods, and while they aim to streamline the process, they may not cover every case. You may still need to perform additional manual steps to complete the upgrade.

Run the [webpack v5 migration codemods](https://go.codemod.com/webpack-v5-recipe):

```bash
npx codemod@latest webpack/v5/migration-recipe
```

This runs the following codemods from the [Codemod registry](https://codemod.com/registry):

- [`webpack/v5/set-target-to-false-and-update-plugins`](https://go.codemod.com/webpack-set-target-false)
- [`webpack/v5/migrate-library-target-to-library-object`](https://go.codemod.com/webpack-migrate-library-target)
- [`webpack/v5/json-imports-to-default-imports`](https://go.codemod.com/webpack-json-imports)

Each of these automates a change described in this migration guide. For the complete list of available webpack v5 codemods, see the [Codemod Registry](https://go.codemod.com/webpack-v5).

### Make sure your build has no errors or warnings

The upgraded versions of `webpack`, `webpack-cli`, your plugins, and your loaders may introduce new errors or warnings. Watch for deprecation warnings during the build.

You can run `webpack` like this to get stack traces for deprecation warnings, which helps identify the responsible plugins and loaders:

```bash
node --trace-deprecation node_modules/webpack/bin/webpack.js
```

Because webpack 5 removes all deprecated features, make sure there are no webpack deprecation warnings during the build before you proceed.

### Make sure to use `mode`

Set `mode` to either [`production`](#TODO[/configuration/mode/#mode-production]) or [`development`](#TODO[/configuration/mode/#mode-development]) so that the corresponding defaults are applied.

### Update outdated options

Update the following options to their new form (if you use them):

- `optimization.hashedModuleIds: true` → `optimization.moduleIds: 'hashed'`
- `optimization.namedChunks: true` → `optimization.chunkIds: 'named'`
- `optimization.namedModules: true` → `optimization.moduleIds: 'named'`
- `NamedModulesPlugin` → `optimization.moduleIds: 'named'`
- `NamedChunksPlugin` → `optimization.chunkIds: 'named'`
- `HashedModuleIdsPlugin` → `optimization.moduleIds: 'hashed'`
- `optimization.noEmitOnErrors: false` → `optimization.emitOnErrors: true`
- `optimization.occurrenceOrder: true` → `optimization: { chunkIds: 'total-size', moduleIds: 'size' }`
- `optimization.splitChunks.cacheGroups.vendors` → `optimization.splitChunks.cacheGroups.defaultVendors`
- `optimization.splitChunks.cacheGroups.test(module, chunks)` → `optimization.splitChunks.cacheGroups.test(module, { chunkGraph, moduleGraph })`
- `Compilation.entries` → `Compilation.entryDependencies`
- `serve` → removed in favor of [`DevServer`](#TODO[/configuration/dev-server/])
- [`Rule.query`](#TODO[/configuration/module/#ruleoptions--rulequery]) (deprecated since v3) → `Rule.options` / `UseEntry.options`
- `Rule.loaders` → [`Rule.use`](#TODO[/configuration/module/#ruleuse])

> [!TIP]
> Review the detailed configuration changes [here](/blog/posts/2020-10-10-webpack-5-release/#changes-to-the-configuration).

### Test webpack 5 compatibility

Set the following options in your webpack 4 configuration and confirm that the build still works correctly.

```js
export default {
  // ...
  node: {
    Buffer: false,
    process: false,
  },
};
```

Remove these options again when you upgrade your configuration for webpack 5.

> [!TIP]
> webpack 5 removes these options from the configuration schema and always treats them as `false`.

## Upgrade webpack to 5

Now upgrade webpack to version 5:

- npm: `npm install webpack@latest`
- Yarn: `yarn add webpack@latest`
- pnpm: `pnpm add webpack@latest`

If you were unable to upgrade some plugins or loaders to their latest versions in the earlier step, upgrade them now.

### Clean up configuration

- Consider removing `optimization.moduleIds` and `optimization.chunkIds` from your configuration. The defaults may be better, because they support long-term caching in [`production` mode](#TODO[/configuration/mode/#mode-production]) and easier debugging in [`development` mode](#TODO[/configuration/mode/#mode-development]).
- If you use the `[hash]` placeholder in your configuration, consider switching to `[contenthash]`. It is not identical, but has proven more effective.
- If you use Yarn's PnP with the `pnp-webpack-plugin`, good news: it is now supported by default, so remove the plugin from your configuration.
- If you use `IgnorePlugin` with a regular expression argument, it now takes an `options` object: `new IgnorePlugin({ resourceRegExp: /regExp/ })`.
- If you use something like `node.fs: 'empty'`, replace it with `resolve.fallback.fs: false`.
- If you use `watch: true` in the webpack Node.js API, remove it. It is unnecessary, since the compiler method you call already indicates watch mode: `watch()` for watching and `run()` for a single build.
- If you have `rules` that load assets with `raw-loader`, `url-loader`, or `file-loader`, use [Asset Modules](/guides/core-workflows/asset-modules) instead, as those loaders will be deprecated soon.
- If you have `target` set to a function, set it to `false` and apply that function in the `plugins` option instead. For example:

  ```json
  // for webpack 4
  {
      target: WebExtensionTarget(nodeConfig)
  }

  // for webpack 5
  {
      target: false,
      plugins: [
          WebExtensionTarget(nodeConfig)
      ]
  }
  ```

  > **Note**: Codemod for this change:
  >
  > ```bash
  > npx codemod webpack/v5/set-target-to-false-and-update-plugins
  > ```
  >
  > (See the [registry here](https://codemod.com/registry/webpack-v5-set-target-to-false-and-update-plugins).)

- If you have `output.library` or `output.libraryTarget` defined, rename the properties (`output.libraryTarget` → `output.library.type`, `output.library` → `output.library.name`). For example:

  ```json
  // for webpack 4
  {
      output: {
        library: 'MyLibrary',
        libraryTarget: 'commonjs2'
      }
  }

  // for webpack 5
  {
      output: {
        library: {
          name: 'MyLibrary',
          type: 'commonjs2'
        }
      }
  }
  ```

  > **Note**: Codemod for this change:
  >
  > ```bash
  > npx codemod webpack/v5/migrate-library-target-to-library-object
  > ```
  >
  > (See the [registry here](https://codemod.com/registry/webpack-v5-migrate-library-target-to-library-object).)

If you were importing WebAssembly, follow this two-step process:

- Enable the deprecated spec by setting `experiments.syncWebAssembly: true`, which reproduces the webpack 4 behavior.
- After successfully migrating to webpack 5, switch to `experiments: { asyncWebAssembly: true }` to use the up-to-date WASM integration spec.

Reconsider `optimization.splitChunks`:

- It is recommended to use either the defaults or `optimization.splitChunks: { chunks: 'all' }`.
- If you use a custom configuration, drop `name: false` and replace `name: string | function` with `idHint: string | function`.
- It used to be possible to turn off the defaults with `optimization.splitChunks.cacheGroups: { default: false, vendors: false }`. We do not recommend this, but if you really want the same effect in webpack 5, use `optimization.splitChunks.cacheGroups: { default: false, defaultVendors: false }`.

Consider removing values that are now defaults:

- `entry: './src/index.js'` — you can omit it; it is the default.
- `output.path: path.resolve(__dirname, 'dist')` — you can omit it; it is the default.
- `output.filename: '[name].js'` — you can omit it; it is the default.

### Need to support an older browser like IE 11?

- If you have [browserslist](https://github.com/browserslist/browserslist) enabled for your project, webpack 5 will reuse your `browserslist` config to decide which code style to emit for the runtime code.

  Make sure to:
  1. Set [`target`](#TODO[/configuration/target/#root]) to `browserslist`, or remove `target` and let webpack set `browserslist` automatically.
  2. Add `IE 11` to your browserslist configuration.

- Without a `browserslist`, webpack's runtime code uses ES2015 syntax (for example, arrow functions) to produce smaller bundles. In that case, set `target: ['web', 'es5']` to emit ES5 syntax for browsers (such as IE 11) that do not support ES2015.
- For Node.js builds, include the supported Node.js version in the `target` option, and webpack will work out which syntax is supported. For example, `target: 'node8.6'`.

### Clean up the code

#### Using `/* webpackChunkName: '...' */`

Be clear about the intent:

- The chunk's name here is meant to be public.
- It is not a development-only name.
- webpack uses it to name files in both production and development modes.
- webpack 5 automatically assigns useful file names in `development` mode even without `webpackChunkName`.

#### Using named exports from JSON modules

This is not supported by the new specification, and you will get a warning. Instead of:

```js
import { version } from './package.json';

console.log(version);
```

use:

```js
import pkg from './package.json';

console.log(pkg.version);
```

> **Note**: Codemod for this change:
>
> ```bash
> npx codemod webpack/v5/json-imports-to-default-imports
> ```
>
> (See the [registry here](https://codemod.com/registry/webpack-v5-json-imports-to-default-imports).)

#### Clean up the build code

- When using `const compiler = webpack(...);`, close the compiler after you are done with it: `compiler.close(callback);`.
  - This does not apply to the `webpack(..., callback)` form, which closes automatically.
  - This is optional if you use webpack in watch mode until the user ends the process. The idle phases in watch mode are used for this kind of work.

### Run a single build and follow the advice

Read the build errors and warnings carefully. If there is no corresponding advice, please open an issue and we will try to resolve it.

Repeat the following steps until you have at least reached level 3 or 4:

- Level 1: **Schema validation fails.**

  Configuration options have changed. There should be a validation error with a `BREAKING CHANGE:` note, or a hint about which option to use instead.

- Level 2: **webpack exits with an error.**

  The error message should tell you what to change.

- Level 3: **Build errors.**

  The error message should include a `BREAKING CHANGE:` note.

- Level 4: **Build warnings.**

  The warning message should tell you what can be improved.

- Level 5: **Runtime errors.**

  These are tricky; you will probably need to debug to find the problem. General advice is difficult here, but a few common cases are listed below:
  - `process` is not defined.
    - webpack 5 no longer includes a polyfill for this Node.js variable. Avoid using it in frontend code.
    - Want to support browser usage? Use the `exports` or `imports` field in `package.json` to serve different code depending on the environment.
      - Also use the `browser` field to support older bundlers.
      - Alternatively, wrap code blocks with `typeof process` checks. Note that this increases bundle size.
    - Want to use environment variables via `process.env.VARIABLE`? Use `DefinePlugin` or `EnvironmentPlugin` to define those variables in your configuration.
      - Consider using `VARIABLE` directly instead, and check `typeof VARIABLE !== 'undefined'` as well. `process.env` is Node.js-specific and should be avoided in frontend code.
  - 404 errors pointing to URLs containing `auto`.
    - Not all ecosystem tooling is ready for the new default automatic `publicPath` (`output.publicPath: "auto"`).
      - Use a static `output.publicPath: ""` instead.
  - `Cannot read properties of undefined (reading 'call')`.
    - If you see this at runtime, it may be related to the [ModuleConcatenationPlugin](https://webpack.js.org/plugins/module-concatenation-plugin/). Check whether you are using the plugin: if you have added it to the `plugins` section of a config that is also set to `production` mode, remove it (for example, `new webpack.optimize.ModuleConcatenationPlugin()`). In webpack 5 the plugin is enabled by default in production mode, so it may get included twice.
    - In general, disabling each plugin and testing the build is a good way to narrow down where the issue comes from.
    - See [this issue](https://github.com/webpack/webpack/discussions/15369#discussioncomment-13420496) for more details.

- Level 6: **Deprecation warnings.**

  You will probably see many deprecation warnings. This is not directly a problem; plugins need time to catch up with core changes. Please report these deprecations to the affected plugins. They are only warnings, and the build will still work with minor drawbacks (such as reduced performance).
  - You can hide deprecation warnings by running Node with the `--no-deprecation` flag, for example: `node --no-deprecation node_modules/webpack/bin/webpack.js`. This should only be a temporary workaround.
  - Plugin and loader authors can follow the advice in the deprecation messages to improve their code.

- Level 7: **Performance issues.**

  Performance usually improves with webpack 5, but there are a few cases where it gets worse.

  Here are some things you can do to improve the situation:
  - Profile where the time is spent.
    - `--profile --progress` now displays a simple performance profile.
    - `node --inspect-brk node_modules/webpack/bin/webpack.js` together with [`chrome://inspect`](chrome://inspect) or [`edge://inspect`](edge://inspect) (see the profiler tab).
      - You can save these profiles to files and attach them to issues.
      - Try the `--no-turbo-inlining` flag for better stack traces in some cases.
  - Module build time for incremental builds can be improved by reverting to unsafe caching like in webpack 4:
    - `module.unsafeCache: true`
    - However, this may affect the ability to handle some changes to the code base.
  - Full builds:
    - The backward-compatibility layer for deprecated features generally performs worse than the new features.
    - Generating many warnings can hurt build performance, even when those warnings are ignored.
    - Source maps are expensive. Check the [`devtool`](#TODO[/configuration/devtool/]) option in the documentation for a comparison of the available choices.
    - Anti-virus protection can affect the performance of file system access.
    - Persistent caching can improve repeated full builds.
    - Module Federation lets you split the application into several smaller builds.

## Everything works?

Please tweet that you have successfully migrated to webpack 5. [Tweet it](https://twitter.com/intent/tweet?source=https://webpack.js.org/migrate/5/&text=I%20just%20migrated%20to%20webpack%205%20using%20its%20migration%20guide!%20&via=webpack&hashtags=webpack,webpack5)

## It is not working?

Create an [issue](https://github.com/webpack/webpack/issues/new?template=Bug_report.md) and tell us about the problems you encountered during the migration.

## Something missing in this guide?

Please open a [Pull Request](https://github.com/webpack/webpack.js.org/edit/main/src/content/migrate/5.mdx) to help the next person who uses this guide.

## Changes to internals

The following changes to webpack internals (added types, refactored code, renamed methods) are listed here for anyone interested, but they are not part of the common migration path.

- `Module.nameForCondition`, `Module.updateCacheModule`, and `Module.chunkCondition` are no longer optional.

### `getOptions` method for loaders

webpack 5 ships with a built-in [`this.getOptions`](#TODO[/api/loaders/#thisgetoptionsschema]) method available in the loader context. This is a breaking change for loaders that previously used the `getOptions` method from [schema-utils](https://github.com/webpack/schema-utils):

- `this.getOptions` is available since webpack 5.
- It supports JSON rather than JSON5 as a query string: `?{arg:true}` → `?{"arg":true}`. Using JSON5 should be considered deprecated and documented as such in each loader's documentation, in favor of JSON.
- [`loader-utils`](https://github.com/webpack/loader-utils) had specific behavior for parsing query strings (`true`, `false`, and `null` were parsed as primitives rather than strings). This is no longer the case for the new built-in `this.getOptions` method, which uses Node.js's native [`querystring`](https://nodejs.org/api/querystring.html) parsing. You can still add custom handling for these cases in your loader's code after calling `this.getOptions`.
- The schema argument is optional for the new `this.getOptions` method, but we strongly recommend adding schema validation for your loader's options. The `title` field in the schema can customize the validation error message; for example, `"title": "My Loader ooooptions"` produces errors like `Invalid ooooptions object. My Loader has been initialised using an ooooptions object that does not match the API schema. - ooooptions.foo.bar.baz should be a string.`
