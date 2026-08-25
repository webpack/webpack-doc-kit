---
title: Inspecting Builds
authors: anshumanv,rishabh3112,snitin315,evenstensberg,simon04,tbroadley,chenxsan,madhavarshney,EugeneHlushko,byzyk,jamesgeorge007,avivkeller
---

# Inspecting Builds

When a build is slow, too large, or simply wrong, the CLI can tell you a lot before you reach for a plugin. This guide covers the flags that report on a build, the commands that inspect a setup without running it, and what the process exits with when things go wrong.

## Watching progress

`--progress` prints the compilation's phases as they happen, which is useful when a build is slow enough that you want to know whether it is stuck:

```bash
npx webpack --progress
```

Passing `profile` adds timing data for each step, so you can see which phase is actually costing you:

```bash
npx webpack --progress=profile
```

> [!TIP]
> Since webpack 5.109 a progress bar is built into webpack itself through [`infrastructureLogging.progress`](/docs/api/options#infrastructureloggingprogress). Setting it to `'auto'` shows the interactive bar in a real terminal and stays quiet in CI logs, which is usually what you want in a committed configuration.

## Reading the stats

By default webpack prints a summary of the assets, chunks, and modules it produced. `--stats` changes how much of it you see:

```bash
npx webpack --stats detailed
npx webpack --stats minimal
```

The presets and the individual toggles are documented under the [`stats`](/docs/api/options#stats) option. `--no-stats` suppresses the output entirely.

### As JSON

`--json` prints the same information as a machine-readable object instead of a formatted report:

```bash
npx webpack --json
```

Give it a path to write to a file rather than stdout — which you almost always want, since the object is large:

```bash
npx webpack --json stats.json
```

That file is the input format for most of the bundle-inspection tooling out there, including the official [analyse tool](https://webpack.github.io/analyse/) and [webpack-bundle-analyzer](https://github.com/webpack/webpack-bundle-analyzer).

## Analyzing bundle size

`--analyze` runs [`webpack-bundle-analyzer`](https://github.com/webpack/webpack-bundle-analyzer) over the build and opens a treemap of what ended up in each bundle:

```bash
npx webpack --analyze
```

```bash
npm install --save-dev webpack-bundle-analyzer
```

The plugin is not bundled with the CLI, so install it first; otherwise the CLI prompts you to. This is the fastest way to answer "why is this bundle so big" — the treemap usually makes an accidentally-included dependency obvious at a glance. Once you have found it, the [tree shaking](/guides/optimization/tree-shaking) and [code splitting](/guides/optimization/code-splitting) guides cover what to do about it.

## Configtest

`configtest` loads and validates a configuration without building anything:

```bash
npx webpack configtest
npx webpack configtest ./webpack.prod.js
```

The path defaults to the [usual discovery order](/guides/cli#how-the-configuration-file-is-found). This is worth running as a pre-commit or CI step on projects with several configuration files, since it catches a typo'd option in a second rather than after a full build.

## Info

`info` prints the environment a build runs in: operating system, Node.js and npm versions, browsers, and the versions of webpack-related packages that are installed.

```bash
npx webpack info
```

Include this in bug reports. `--output` picks a format, and `markdown` is the one to use when pasting into an issue:

```bash
npx webpack info --output markdown
```

`--additional-package` adds packages that aren't in the default list, which is handy when the problem involves one of your loaders:

```bash
npx webpack info --additional-package postcss
```

## Failing on warnings

Warnings do not fail a build by default. In CI, where a warning nobody reads is a warning nobody fixes, you can promote them:

```bash
npx webpack --fail-on-warnings
```

## Exit codes

| Exit code | Meaning                                                   |
| --------- | --------------------------------------------------------- |
| `0`       | Success.                                                  |
| `1`       | webpack reported errors in the build.                     |
| `2`       | A configuration or options problem, or an internal error. |

The distinction is worth knowing in a pipeline: `1` means your code failed to compile, while `2` means webpack never got far enough to try — usually a bad configuration, a missing dependency, or a configuration file it could not load.

## Troubleshooting

### `Unknown file extension ".ts"`

```text
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for ./webpack.config.ts
```

This shows up when the configuration is TypeScript and the project is native ESM (`"type": "module"` in `package.json`).

`webpack-cli` tries `import()` first and falls back to `require()`. Modern Node.js strips TypeScript types natively, so on Node.js 22.6 or later this usually just works. On older versions, `import()` needs a loader hook registered, which `ts-node` does not install by itself:

```bash
NODE_OPTIONS="--import=data:text/javascript,import { register } from 'node:module'; import { pathToFileURL } from 'node:url'; register('ts-node/esm', pathToFileURL('./'));" npx webpack
```

Installing [`tsx`](https://www.npmjs.com/package/tsx) instead avoids the incantation — `webpack-cli` picks it up automatically. See the [TypeScript guide](/guides/tooling-and-integration/typescript) for configuring the build itself.

### The wrong webpack-cli runs

By default the CLI prefers a project-local installation over a global one, which is almost always right. If you need the global copy for a moment, opt out:

```bash
WEBPACK_CLI_SKIP_IMPORT_LOCAL=true webpack
```

### The configuration file is not picked up

Check that its name and location match the [discovery order](/guides/cli#how-the-configuration-file-is-found), and remember that `--config` disables discovery entirely. `npx webpack configtest` confirms which file is loaded and whether it validates.

## Next steps

- [Build performance](/guides/optimization/build-performance) — making a slow build faster once you know where the time goes.
- [Debugging](/guides/contributing/debugging) — attaching a debugger to webpack itself.
