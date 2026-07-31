---
title: Glossary
authors: kryptokinght,rouzbeh84,bebraw,skipjack,byzyk,pranshuchittora,jamesgeorge007,avivkeller
---

# Glossary

This index lists common terms used throughout the webpack ecosystem.

## A

- [**Asset**](/guides/core-workflows/asset-management): A general term for images, fonts, media, and any other kind of file that a website or application ships alongside its code. Assets usually end up as individual files in the output directory, but they can also be inlined into a bundle as a data URI.
- [**Asset Module**](/guides/core-workflows/asset-modules): The built-in module types (`asset/resource`, `asset/inline`, `asset/source`, and `asset`) that handle assets without a loader. They replace `file-loader`, `url-loader`, and `raw-loader` from webpack 4.

## B

- [**Bundle**](/guides/getting-started#creating-a-bundle): Produced from a number of distinct modules, a bundle contains the final versions of source files that have already gone through the loading and compilation process.
- [**Bundle Splitting**](/guides/optimization/code-splitting): Splitting a build across several bundles so that a change to one part of the application does not invalidate all of the others. Each bundle can be cached by the browser independently, so fewer bytes need to be re-downloaded after a deploy.

## C

- **Chunk**: A webpack-specific term used internally to manage the bundling process. Bundles are composed of chunks, of which there are several kinds (such as entry and child chunks). Chunks usually correspond one-to-one with output bundles, but some configurations break that relationship.
- [**Code Splitting**](/guides/optimization/code-splitting): Dividing your code into several bundles or chunks that can be loaded on demand, instead of shipping a single bundle containing everything.
- [**Compilation**](/guides/getting-started/concepts/under-the-hood): The object that holds the state of a single build: every module, chunk, and asset, plus the hooks a plugin taps to influence them. A watch build creates a new compilation per rebuild.
- [**Compiler**](/guides/getting-started/concepts/under-the-hood): The long-lived object created from your configuration. It orchestrates compilations and exposes the top-level lifecycle hooks that plugins tap.
- [**Configuration**](/guides/getting-started/concepts/configuration): A webpack configuration file is a plain JavaScript file that exports an object. webpack processes that object according to the properties defined on it.

## D

- [**Dependency Graph**](/guides/getting-started/concepts/dependency-graph): Any time one file depends on another, webpack treats this as a _dependency_. Starting from one or more entry points, webpack recursively builds a dependency graph that includes every module and asset your application needs.

## E

- [**Entry Point**](/guides/getting-started/concepts/entry-points): The entry point tells webpack where to start following the graph of dependencies to know what to bundle. Think of your application's entry points as the **contextual roots** of what you want bundled.

## H

- [**Hot Module Replacement (HMR)**](/guides/getting-started/concepts/hot-module-replacement): A process that exchanges, adds, or removes modules while an application is running, without a full page reload.

## L

- [**Lazy Loading**](/guides/optimization/code-splitting/lazy-loading): Loading parts (chunks) of your application only at the point where they are actually needed, rather than up front.
- [**Loader**](/guides/getting-started/concepts/loaders): A transformation applied to the source of a module. Loaders let you pre-process files as you `import` or `require` them, similar to a task runner.

## M

- [**Manifest**](/guides/getting-started/concepts/manifest): The bookkeeping the webpack runtime uses to resolve and load modules once they have been bundled and shipped to the browser.
- [**Module**](/guides/getting-started/concepts/modules): A discrete chunk of functionality with a smaller surface area than a full program. Well-written modules provide solid abstractions and clear encapsulation boundaries.
- [**Module Federation**](/guides/getting-started/concepts/module-federation): A mechanism for one build to load code from another, separately deployed build at runtime, with shared dependencies resolved between them.
- [**Module Resolution**](/guides/getting-started/concepts/module-resolution): The process of locating a module by its absolute path when it is required as a dependency from another module.

## O

- [**Output**](/guides/getting-started/concepts/output): The options that specify where webpack writes the compiled files, and under which names. There can be several entry points, but only one `output` configuration.

## P

- [**Plugin**](/guides/getting-started/concepts/plugins): A JavaScript object with an `apply` method. webpack calls `apply` with the compiler, giving the plugin access to the entire compilation lifecycle. Plugins typically extend what a build does in ways loaders cannot.
- [**Public Path**](/guides/core-workflows/public-path): The base URL the browser uses when requesting the files a build emits.

## R

- [**Request**](/guides/modules-and-dependencies/dependency-management): The expression inside a `require` or `import` statement. In `require('./template/' + name + '.ejs')`, the request is `'./template/' + name + '.ejs'`.
- **Runtime**: The small amount of code webpack ships alongside your modules to connect them at run time: resolving module ids, loading chunks on demand, and wiring up hot updates.

## S

- **Scope Hoisting**: Concatenating modules into a single scope where it is safe to do so, instead of wrapping each one in its own function. It produces smaller, faster output and is enabled by default in production mode.
- [**Shimming**](/guides/modules-and-dependencies/shimming): Not every JavaScript file can be used directly with webpack. A file may be in an unsupported module format, or in no module format at all. Shimming bridges that gap.

## T

- [**Target**](/docs/api/options#target): The deployment environment a build is compiled for, such as a browser, Node.js, or Electron.
- [**Tree Shaking**](/guides/optimization/tree-shaking): Eliminating unused code, or more precisely, importing only live code. webpack accomplishes this by analyzing `import` statements and the usage of imported bindings to determine which parts of a dependency are actually reached, dropping the parts of the "tree" that are not.

## V

- [**Vendor Entry Point**](/guides/getting-started/concepts/entry-points#separate-app-and-vendor-entries): A second entry point, alongside your application entry, that builds a separate dependency graph for third-party code. Combined with [`optimization.splitChunks`](/docs/api/options#optimizationsplitchunks), it is one way to achieve the [long-term caching](/guides/optimization/caching) pattern.

## W

- [**webpack**](/): A highly configurable [module](/guides/getting-started/concepts/modules) bundler for modern JavaScript applications.
