---
title: Scaffolding Projects
authors: anshumanv,rishabh3112,snitin315,evenstensberg,chenxsan,EugeneHlushko,burhanuday,avivkeller
---

# Scaffolding Projects

[`create-webpack-app`](https://github.com/webpack/webpack-cli/tree/main/packages/create-webpack-app) generates a working webpack setup so you don't have to assemble one by hand. It scaffolds three things: a project, a loader, or a plugin.

It is a separate package from `webpack-cli` and does not need to be installed — run it through `npx` and you get the current version.

## A new project

```bash
npx create-webpack-app webpack-demo
cd webpack-demo
```

You are asked a short series of questions (language, styling, whether to add a dev server) and the answers become a project with a configuration, an entry point, and npm scripts already wired up.

The positional argument is where to generate the project; it defaults to the current directory.

### Skipping the questions

`--force` accepts the default answer for every question, which is what you want in a script or when you just need a starting point:

```bash
npx create-webpack-app ./my-app --force
```

### Templates

`--template` picks the framework the project is set up for:

```bash
npx create-webpack-app ./my-app --template react
```

| Template  | What you get                                                             |
| --------- | ------------------------------------------------------------------------ |
| `default` | A plain JavaScript or TypeScript project with CSS and HTML, no framework |
| `react`   | A [React](https://react.dev/) project                                    |
| `vue`     | A [Vue](https://vuejs.org/) project                                      |
| `svelte`  | A [Svelte](https://svelte.dev/) project                                  |

Project generation is the `init` command, which runs by default. These two are equivalent:

```bash
npx create-webpack-app ./my-app --template react
npx create-webpack-app init ./my-app --template react
```

> [!TIP]
> Scaffolding is a fine way to start, but it is worth reading [Getting Started](/guides/getting-started) at least once to understand what the generated configuration actually does. Every project outgrows its template eventually.

## A new loader

```bash
npx create-webpack-app loader ./my-loader
```

This generates a loader package with the source, a test setup, and an example project you can run against it — the same layout described in [Writing a Loader](/guides/contributing/writing-a-loader).

## A new plugin

```bash
npx create-webpack-app plugin ./my-plugin
```

Likewise, this scaffolds a plugin package with its `apply` method already tapping a compiler hook. [Writing a Plugin](/guides/contributing/writing-a-plugin) explains what to do from there.

Both generators accept `--template` as well, though `default` is currently the only template for them.

## Next steps

- [Getting Started](/guides/getting-started) — building the same setup by hand, step by step.
- [Writing a Loader](/guides/contributing/writing-a-loader) and [Writing a Plugin](/guides/contributing/writing-a-plugin).
