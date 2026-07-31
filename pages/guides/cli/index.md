---
title: Using the Command Line
authors: anshumanv,rishabh3112,snitin315,evenstensberg,simon04,tbroadley,chenxsan,rencire,madhavarshney,EugeneHlushko,byzyk,wizardofhogwarts,EslamHiko,smelukov,anikethsaha,jamesgeorge007,burhanuday,avivkeller
---

# Using the Command Line

Almost everything you do with webpack goes through [`webpack-cli`](https://github.com/webpack/webpack-cli). It finds your configuration, loads webpack, runs the build, and prints the result. This guide covers what it does by default and how to steer it; the pages that follow go deeper on running builds, passing environments, scaffolding projects, and inspecting output.

> [!NOTE]
> `webpack-cli` and webpack are separate packages. Installing `webpack` alone gives you the bundler's [Node.js API](/docs/api) but no `webpack` command.

## Install

```bash
npm install --save-dev webpack webpack-cli
```

Install it locally, per project, so that the version of the CLI is pinned alongside the version of webpack it drives. Run it through `npx`, or from an npm script where it is already on the path:

```json displayName="package.json"
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve"
  }
}
```

> [!WARNING]
> `webpack-cli` 7 requires Node.js 20.9.0 or later, `webpack` 5.101.0 or later, and — if you use `webpack serve` — `webpack-dev-server` 5 or later.

## Your first build

The CLI works with no configuration at all. Given a `src/index.js`, this bundles it to `dist/main.js`:

```bash
npx webpack
```

That is the `build` command running implicitly. Everything else the CLI offers is a matter of pointing it at a different configuration, a different entry, or a different kind of run.

## The commands

| Command                                                  | Aliases       | What it does                                                       |
| -------------------------------------------------------- | ------------- | ------------------------------------------------------------------ |
| [`build`](/guides/cli/running-builds#build)              | `bundle`, `b` | Run webpack once. This is the default when no command is given.    |
| [`watch`](/guides/cli/running-builds#watch)              | `w`           | Run webpack and rebuild when files change.                         |
| [`serve`](/guides/cli/running-builds#serve)              | `server`, `s` | Run `webpack-dev-server`.                                          |
| [`configtest`](/guides/cli/inspecting-builds#configtest) | `t`           | Validate a configuration file without building.                    |
| [`info`](/guides/cli/inspecting-builds#info)             | `i`           | Print information about the current system and installed packages. |
| [`help`](#getting-help)                                  | `h`           | Show help for a command or an option.                              |
| [`version`](#checking-versions)                          | `v`           | Print the versions of webpack, the CLI, and related packages.      |

Every command takes entries positionally and options as flags:

```bash
npx webpack build --config ./webpack.config.js --stats verbose
```

Scaffolding a new project, loader, or plugin is handled by a separate package, [`create-webpack-app`](/guides/cli/scaffolding).

## How the configuration file is found

If you don't pass [`--config`](/guides/cli/running-builds#pointing-at-a-configuration-file), the CLI looks for a configuration file in this order and uses the first one it finds:

```text
webpack.config
.webpack/webpack.config
.webpack/webpackfile
```

Each base name is tried with a set of extensions, and the common JavaScript and TypeScript ones win over the rest:

1. `.js`, `.mjs`, `.cjs`, `.ts`, `.cts`, `.mts`
2. Everything [`interpret`](https://github.com/gulpjs/interpret) knows about, such as `.coffee`
3. The data formats `.json5`, `.yaml`, `.yml`, and `.toml` (webpack-cli 7.1.0 and later)

So a project with both `webpack.config.js` and `.webpack/webpack.config.ts` uses the first one. If no configuration file exists at all, webpack falls back to its defaults.

> [!TIP]
> A TypeScript configuration is loaded through Node.js's built-in type stripping where available, and otherwise through `tsx`, `ts-node`, or another loader picked up by `interpret`. See the [TypeScript guide](/guides/tooling-and-integration/typescript) for the details, and [Troubleshooting](/guides/cli/inspecting-builds#unknown-file-extension-ts) if it fails.

## Flags beat the configuration file

Anything you pass on the command line takes precedence over the same setting in your configuration file. Running the following against a configuration whose `mode` is `'development'` produces a production build:

```bash
npx webpack --mode production
```

This is what makes a single configuration file usable across environments: keep the shared setup in the file, and override the parts that differ per invocation.

### Core flags

Beyond the CLI's own flags, `webpack-cli` derives a flag for nearly every option in webpack's configuration schema. So an option you would normally write as [`performance.hints`](/docs/api/options#performancehints):

```js displayName="webpack.config.js"
export default {
  performance: {
    hints: 'warning',
  },
};
```

can equally be passed as:

```bash
npx webpack --performance-hints warning
```

Because these are generated from the schema, they track whatever version of webpack you have installed. Run `npx webpack --help=verbose` to see the full list for your version.

### Negated flags

Boolean options have a `--no-` counterpart that turns off something your configuration enables:

| Flag                       | Effect                                           |
| -------------------------- | ------------------------------------------------ |
| `--no-color`               | Disable colored console output.                  |
| `--no-hot`                 | Disable hot reloading.                           |
| `--no-stats`               | Suppress the compilation stats.                  |
| `--no-watch`               | Do not watch for file changes.                   |
| `--no-devtool`             | Do not generate source maps.                     |
| `--no-watch-options-stdin` | Do not stop watching when the stdin stream ends. |

## Getting help

Both forms work, and either one accepts a command or an option to narrow the output:

```bash
npx webpack --help
npx webpack help
```

The default help lists the commands and the most commonly used flags. To see every flag the installed version of webpack supports, including the schema-derived core flags:

```bash
npx webpack --help=verbose
```

To read about one option in particular:

```bash
npx webpack help --mode
```

## Checking versions

```bash
npx webpack --version
```

This prints the versions of webpack and `webpack-cli`, plus `webpack-dev-server` when it is installed:

```bash
webpack 5.109.2
webpack-cli 7.2.2
webpack-dev-server 6.0.0
```

Version mismatches are a common source of confusing errors, so this is usually the first thing worth checking when something behaves unexpectedly. For a fuller picture — operating system, Node.js version, browsers, and the versions of related packages — use [`webpack info`](/guides/cli/inspecting-builds#info).

## Next steps

- [Running builds](/guides/cli/running-builds) — building, watching, serving, and choosing which configuration to run.
- [Environments and modes](/guides/cli/environments) — passing values into a configuration that exports a function.
- [Scaffolding projects](/guides/cli/scaffolding) — generating a project, loader, or plugin with `create-webpack-app`.
- [Inspecting builds](/guides/cli/inspecting-builds) — progress, stats, bundle analysis, exit codes, and troubleshooting.
