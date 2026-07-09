---
authors: pksjce,bebraw,simon04,EugeneHlushko,sibiraj-s,chenxsan,avivkeller
---

# Installation

This guide covers the various methods used to install webpack.

## Prerequisites

Before you begin, make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed. The current Long Term Support (LTS) release is an ideal starting point. Older versions may cause a variety of issues, since they can lack functionality that webpack and its related packages depend on.

## Local installation

The latest webpack release is:

[![GitHub release](https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600)](https://github.com/webpack/webpack/releases)

To install the latest release or a specific version, run one of the following commands:

```bash
npm install --save-dev webpack
# or a specific version
npm install --save-dev webpack@<version>
```

> [!TIP]
> Whether to use `--save-dev` depends on your use case. If you use webpack only for bundling, installing it with `--save-dev` is recommended, since you won't include webpack in your production build. Otherwise, you can omit `--save-dev`.

If you're using webpack v4 or later and want to call `webpack` from the command line, you'll also need to install the [CLI](https://github.com/webpack/webpack-cli#how-to-install):

```bash
npm install --save-dev webpack-cli
```

Installing locally is what we recommend for most projects. It makes it easier to upgrade projects individually when breaking changes are introduced. Typically, webpack is run through one or more [npm scripts](https://docs.npmjs.com/misc/scripts) that look for a webpack installation in your local `node_modules` directory:

```json
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```

> [!TIP]
> To run a local installation of webpack, you can access its binary at `node_modules/.bin/webpack`. Alternatively, if you are using npm v5.2.0 or greater, you can run `npx webpack`.

## Global installation

The following npm installation makes `webpack` available globally:

```bash
npm install --global webpack
```

> [!WARNING]
> This is **not a recommended practice**. Installing globally locks you into a specific version of webpack and may fail in projects that use a different version.

## Bleeding edge

If you're eager to use the latest features webpack has to offer, you can install beta versions or even install directly from the webpack repository with the following commands:

```bash
npm install --save-dev webpack@next
# or a specific tag/branch
npm install --save-dev webpack/webpack#<tagname/branchname>
```

> [!WARNING]
> Take caution when installing these bleeding edge releases. They may still contain bugs and therefore should not be used in production.
