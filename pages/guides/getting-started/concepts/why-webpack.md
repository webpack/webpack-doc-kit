---
authors: debs-obrien,montogeek,jeremenichelli,EugeneHlushko,avivkeller
---

# Why webpack

To understand why you should use webpack, let's revisit how JavaScript was used on the web before bundlers existed.

There are two ways to run JavaScript in a browser. The first is to include a separate script for each piece of functionality, but this approach is hard to scale because loading too many scripts can create a network bottleneck. The second is to put all of your project's code in one large `.js` file, but that introduces problems with scope, file size, readability, and maintainability.

## IIFEs — immediately invoked function expressions

IIFEs solve scoping problems in large projects. When script files are wrapped in an IIFE, you can safely concatenate or combine them without worrying about scope collisions.

This pattern led to tools like Make, Gulp, Grunt, Broccoli, and Brunch. Known as task runners, they concatenate all of your project files together.

However, changing a single file means rebuilding the whole thing. Concatenation makes it easier to reuse scripts across files, but it also makes build optimizations harder. How do you find out whether a piece of code is actually being used? Even if you use only one function from Lodash, you have to ship the entire library and then minify it all together. How do you tree-shake your dependencies? Lazy-loading chunks of code at scale is difficult and requires a great deal of manual effort.

## The birth of JavaScript modules, thanks to Node.js

webpack runs on Node.js, a JavaScript runtime that runs on computers and servers outside the browser.

The release of Node.js started a new era, and it brought new challenges. Now that JavaScript was no longer confined to the browser, how were Node applications supposed to load new chunks of code? There were no HTML files or script tags to add them to.

CommonJS arrived and introduced `require`, which lets you load and use a module in the current file. This solved scope issues out of the box by importing each module as it was needed.

## npm + Node.js + modules — mass distribution

JavaScript was taking over the world as a language, as a platform, and as a way to rapidly build fast applications.

But browsers had no support for CommonJS. There were no [live bindings](https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358), there were problems with circular references, and synchronous module resolution and loading was slow. While CommonJS was a great solution for Node.js projects, browsers did not support modules, so bundlers and tools like Browserify, RequireJS, and SystemJS were created to let us write CommonJS modules that run in a browser.

## ESM — ECMAScript modules

The good news for web projects is that modules are becoming an official feature of the ECMAScript standard. However, browser support is still incomplete, and bundling remains faster and is currently recommended over these early module implementations.

## Automatic dependency collection

Old-school task runners, and even the Google Closure Compiler, require you to declare all dependencies manually and upfront. Bundlers like webpack, by contrast, automatically build and infer your [dependency graph](/guides/getting-started/concepts/dependency-graph) from what you import and export. Together with [plugins](/guides/getting-started/concepts/plugins) and [loaders](/guides/getting-started/concepts/loaders), this makes for a great developer experience.

## Wouldn't it be nice…

…to have something that not only lets us write modules but also supports any module format (at least until everyone is on ESM) and handles resources and assets at the same time?

That is why webpack exists. It is a tool that bundles your JavaScript applications, supporting both ESM and CommonJS, and it can be extended to handle many other assets such as images, fonts, and stylesheets.

webpack cares about performance and load times. It is always improving and adding new features, such as async chunk loading and prefetching, to deliver the best possible experience for your project and your users.
