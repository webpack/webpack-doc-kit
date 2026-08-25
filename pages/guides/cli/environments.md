---
title: Environments and Modes
authors: anshumanv,snitin315,evenstensberg,simon04,chenxsan,EugeneHlushko,byzyk,burhanuday,avivkeller
---

# Environments and Modes

A configuration file that exports a function receives an environment object, so one file can describe several builds. This guide covers the CLI side of that: how `--env` builds the object, which values webpack adds for free, and how `--config-node-env` interacts with `mode`.

For the configuration-side patterns, see the [environment variables guide](/guides/core-workflows/environment-variables).

## Passing an environment with `--env`

When your configuration exports a function, its first argument is whatever `--env` built:

```js displayName="webpack.config.js"
export default env => ({
  mode: env.production ? 'production' : 'development',
});
```

```bash
npx webpack --env production
```

A bare name becomes `true`; `name=value` becomes a string; a dotted name nests. The flag can be repeated, and every occurrence merges into the same object:

| Invocation                                                       | Resulting environment                            |
| ---------------------------------------------------------------- | ------------------------------------------------ |
| `npx webpack --env prod`                                         | `{ prod: true }`                                 |
| `npx webpack --env prod --env min`                               | `{ prod: true, min: true }`                      |
| `npx webpack --env platform=app --env production`                | `{ platform: 'app', production: true }`          |
| `npx webpack --env foo=bar=app`                                  | `{ foo: 'bar=app' }`                             |
| `npx webpack --env app.platform="staging" --env app.name="test"` | `{ app: { platform: 'staging', name: 'test' } }` |

Only the first `=` separates the key from the value, which is why `foo=bar=app` keeps the second one.

> [!TIP]
> To set a variable to an empty string, escape the quotes so the shell passes them through: `npx webpack --env foo=\"\"`.

## Built-in environment values

Whichever command you ran is reported back to you on the same object, so a single configuration can branch on how it was invoked:

| Variable                               | Set to `true` when you ran…                 |
| -------------------------------------- | ------------------------------------------- |
| `WEBPACK_BUILD` (and `WEBPACK_BUNDLE`) | `build`, `bundle`, or `b` without watching  |
| `WEBPACK_WATCH`                        | `watch`, `w`, or any command with `--watch` |
| `WEBPACK_SERVE`                        | `serve`, `server`, or `s`                   |

Exactly one of these is set per run: a watching build reports `WEBPACK_WATCH` rather than `WEBPACK_BUILD`.

```js displayName="webpack.config.js"
export default env => ({
  mode: env.WEBPACK_SERVE ? 'development' : 'production',
});
```

> [!NOTE]
> These describe the build, not the bundle. They are available while your configuration is evaluated and are not injected into your application code. To expose a value to the bundle, define it with [`DefinePlugin`](/docs/api/plugins/DefinePlugin).

## The second argument: `argv`

The configuration function's second argument holds the parsed command-line options, in camel case:

```js displayName="webpack.config.js"
export default (env, argv) => ({
  devtool: argv.mode === 'development' ? 'eval-source-map' : false,
});
```

```bash
npx webpack --mode development
```

This is the mechanism behind most "one config, two environments" setups: the flag you already pass to select a mode also drives the rest of the configuration.

## Setting `NODE_ENV` for the configuration

`--config-node-env` sets `process.env.NODE_ENV` before your configuration file is evaluated:

```bash
npx webpack --config-node-env production
```

Use it when your configuration, or something it imports, reads `process.env.NODE_ENV` while it is being built. Two details are worth knowing:

**It also sets `mode`.** If your configuration doesn't specify [`mode`](/docs/api/options#mode), webpack adopts `process.env.NODE_ENV` when it is `'development'`, `'production'`, or `'none'`. So `--config-node-env production` gives you a production build without a separate `--mode` flag.

**With a function export, `mode` is applied afterwards.** The mode is resolved once the function has returned, so it is not among the function's arguments. The raw value is still readable as `argv.configNodeEnv`:

```js displayName="webpack.config.js"
export default (env, argv) => {
  console.log(argv.configNodeEnv); // 'production'

  return {
    // …
  };
};
```

> [!WARNING]
> `process.env.NODE_ENV` inside your **application** code is a different thing: webpack's `mode` option sets it for the bundle through `DefinePlugin`. `--config-node-env` only affects the Node.js process that evaluates your configuration.

## Environment variables read by the CLI itself

A few variables change how `webpack-cli` behaves rather than what it builds:

| Variable                            | Effect                                                         |
| ----------------------------------- | -------------------------------------------------------------- |
| `WEBPACK_PACKAGE`                   | Load webpack from a different package name (see below).        |
| `WEBPACK_DEV_SERVER_PACKAGE`        | Load `webpack-dev-server` from a different package name.       |
| `WEBPACK_CLI_SKIP_IMPORT_LOCAL`     | When `true`, skip preferring the project-local `webpack-cli`.  |
| `WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG` | When `true`, force the configuration file to be loaded as ESM. |
| `WEBPACK_CLI_HELP_WIDTH`            | Wrap help output at a fixed column width.                      |

```bash
WEBPACK_CLI_FORCE_LOAD_ESM_CONFIG=true npx webpack --config ./webpack.config.esm
```

### Running a second webpack version

`WEBPACK_PACKAGE` is how you test an upgrade without changing which version the rest of the project uses. Install the second copy under an alias:

```json displayName="package.json"
{
  "devDependencies": {
    "webpack": "^5.101.0",
    "webpack-next": "npm:webpack@^5.109.0",
    "webpack-cli": "^7.0.0"
  }
}
```

Then pick which one runs:

```bash
npx webpack                            # uses webpack
WEBPACK_PACKAGE=webpack-next npx webpack # uses webpack-next
```

## Next steps

- [Environment variables](/guides/core-workflows/environment-variables) — the configuration-side patterns in full.
- [Production](/guides/core-workflows/production) — splitting development and production configurations.
