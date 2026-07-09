---
authors: skipjack,EugeneHlushko,avivkeller
---

# The Manifest

A typical application or site built with webpack contains three main kinds of code:

1. The source code that you, and perhaps your team, have written.
2. Any third-party library or "vendor" code that your source depends on.
3. A webpack runtime and **manifest** that orchestrate the interaction between all of the modules.

This article focuses on the last of these three parts: the runtime and, in particular, the manifest.

## Runtime

The runtime, together with the manifest data, is all the code webpack needs to wire up your modularized application while it runs in the browser. It contains the loading and resolving logic that connects your modules as they interact. This includes connecting modules already loaded into the browser, as well as the logic to lazy-load the ones that haven't loaded yet.

## Manifest

Once your application reaches the browser as an `index.html` file, some bundles and a variety of other assets must be loaded and linked together somehow. That `/src` directory you carefully laid out is now bundled, minified, and maybe even split into smaller chunks for lazy-loading by webpack's [`optimization`](#TODO[/configuration/optimization/]). So how does webpack manage the interaction between all of your required modules? This is where the manifest data comes in.

As the compiler enters, resolves, and maps out your application, it keeps detailed notes on all of your modules. This collection of data is called the "manifest," and it's what the runtime uses to resolve and load modules once they've been bundled and shipped to the browser. No matter which module syntax you chose, those `import` and `require` statements have now become `__webpack_require__` methods that point to module identifiers. Using the data in the manifest, the runtime can find out where to retrieve the modules behind those identifiers.

## The problem

So now you have a little insight into how webpack works behind the scenes. "But how does this affect me?" you might ask. Most of the time, it doesn't. The runtime does its thing using the manifest, and everything appears to work magically once your application hits the browser. However, once you decide to improve performance by taking advantage of browser caching, this process suddenly becomes important to understand.

By using content hashes in your bundle file names, you can signal to the browser when a file's content has changed, which invalidates the cache. Once you start doing this, though, you'll immediately notice some odd behavior: certain hashes change even when their content apparently does not. This is caused by the injection of the runtime and manifest, which changes with every build.

See [the manifest section](/guides/core-workflows/output-management/#the-manifest) of our _Output management_ guide to learn how to extract the manifest, and read the guides below to learn more about the intricacies of long-term caching.

## Further reading

- [Separating a Manifest](https://survivejs.com/webpack/optimizing/separating-manifest/)
- [Predictable Long Term Caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)
- [Caching](/guides/optimization/caching)
