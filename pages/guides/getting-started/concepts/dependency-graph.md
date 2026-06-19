---
authors: TheLarkInn,EugeneHlushko,avivkeller
---

# Dependency Graph

Whenever one file depends on another, webpack treats that relationship as a _dependency_. This lets webpack handle non-code assets, such as images and web fonts, by exposing them as dependencies of your application too.

When webpack processes your application, it begins with a list of modules defined on the command line or in its configuration file. Starting from these [_entry points_](/guides/getting-started/concepts/entry-points), webpack recursively builds a _dependency graph_ that contains every module your application needs. It then bundles all of those modules into a small number of _bundles_ — often just one — for the browser to load.

> [!TIP]
> Bundling is especially powerful for _HTTP/1.1_ clients, because it reduces how often the app has to wait for the browser to open a new request. For _HTTP/2_, you can additionally apply [Code Splitting](/guides/optimization/code-splitting) for the best results.

## Further reading

- [HTTP2 Aggressive Splitting Example](https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting)
- [webpack & HTTP/2](https://medium.com/webpack/webpack-http-2-7083ec3f3ce6)
