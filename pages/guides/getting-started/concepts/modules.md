---
authors: TheLarkInn,simon04,rouzbeh84,EugeneHlushko,byzyk,avivkeller
---

# Modules

In [modular programming](https://en.wikipedia.org/wiki/Modular_programming), developers split programs into discrete, self-contained chunks of functionality called _modules_.

Each module covers a smaller surface area than the program as a whole, which makes verification, debugging, and testing far simpler. Well-written modules offer solid abstractions and clear encapsulation boundaries, so every module has a coherent design and a clear purpose within the larger application.

Node.js has supported modular programming almost since its inception. On the web, however, support for modules was slow to arrive. A number of tools sprang up to bring modular JavaScript to the browser, each with its own benefits and limitations. webpack builds on the lessons learned from those systems and applies the concept of modules to any file in your project.

## What is a webpack module

Unlike [Node.js modules](https://nodejs.org/api/modules.html), webpack modules can express their dependencies in several different ways. A few examples:

- An [ES2015 `import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement
- A [CommonJS](https://wiki.commonjs.org/wiki/Modules/1.1) `require()` statement
- An [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) `define` and `require` statement
- An [`@import` statement](https://developer.mozilla.org/en-US/docs/Web/CSS/@import) inside a CSS, Sass, or Less file
- An image URL in a stylesheet (`url(...)`) or in an HTML `<img src=...>` element

## Supported module types

webpack supports the following module types natively:

- [ECMAScript modules](/guides/modules-and-dependencies/ecma-script-modules)
- CommonJS modules
- AMD modules
- [Assets](/guides/core-workflows/asset-modules)
- WebAssembly modules

Beyond these, webpack supports modules written in many other languages and preprocessors through _loaders_. Loaders tell webpack **how** to process non-native modules and how to include their dependencies in your bundles. The webpack community has built loaders for a wide range of popular languages and language processors, including:

- [CoffeeScript](http://coffeescript.org)
- [TypeScript](https://www.typescriptlang.org)
- [ESNext (Babel)](https://babeljs.io)
- [Sass](http://sass-lang.com)
- [Less](http://lesscss.org)
- [Stylus](http://stylus-lang.com)
- [Elm](https://elm-lang.org/)

And many more. In short, webpack offers a powerful, rich API for customization that lets you use it with **any stack** while remaining **non-opinionated** about your development, testing, and production workflows.

For a complete list, see [the list of loaders](/docs/loaders) or learn how to [write your own](#TODO[/api/loaders]).

## Further reading

- [JavaScript Module Systems Showdown](https://auth0.com/blog/javascript-module-systems-showdown/)
