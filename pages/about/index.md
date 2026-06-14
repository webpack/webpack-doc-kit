# About webpack

webpack is a static module bundler for modern JavaScript applications. It treats
every file and asset in your project as a module, recursively building a
dependency graph from one or more entry points, then bundling those modules into
one or more optimized output files for the browser. In the following "hello
world" example, a single entry module pulls in its dependencies, and webpack
figures out the rest.

```js displayName="src/index.js"
import { greet } from './greeting.js';

const element = document.createElement('div');
element.textContent = greet('webpack');
document.body.appendChild(element);
```

```js displayName="webpack.config.js"
const path = require('node:path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

This is in contrast to the older approach of manually managing many `<script>`
tags and their load order by hand. Hand-ordered scripts are error-prone and
pollute the global scope. With webpack, modules declare exactly what they depend
on through `import` and `require` statements, and webpack uses that information
to bundle everything in the correct order with no global leakage. Because
dependencies are resolved statically, dead code can be pruned through tree
shaking and bundles can be split for efficient loading.

If some of this language is unfamiliar, the official documentation has a full
guide on [Getting Started](/guides/getting-started/) and a
section on the [core concepts](/guides/getting-started/concepts/).

webpack is built around five core concepts: **entry**, **output**, **loaders**,
**plugins**, and **mode**. Out of the box webpack only understands JavaScript and
JSON, but loaders let it process other file types (e.g., TypeScript, CSS, images,
fonts) by transforming them into modules that can be included in the dependency
graph. Plugins go further, hooking into the entire compilation lifecycle to
perform tasks loaders cannot, from bundle optimization to asset management to
injecting environment variables.

The mode setting (`development`, `production`, or `none`) tells webpack which
built-in optimizations to apply. Production mode enables minification and tree
shaking automatically, while development mode favors faster rebuilds and readable
output. webpack 5 introduced persistent caching, improved tree shaking, module
federation, and the removal of automatic Node.js core polyfills.

webpack being a bundler doesn't mean you give up a fast feedback loop during
development. The [`webpack-dev-server`](/docs/webpack-dev-server/)
provides live reloading and Hot Module Replacement, swapping updated modules into
a running application without a full page refresh. Built on the same foundation,
code splitting lets you break bundles into chunks that load on demand, keeping
initial payloads small.

## Official webpack Resources

To ensure authenticity and security when working with webpack, always use
official sources. Avoid trusting binaries or downloads from unofficial sources.

### Official webpack Domains

For documentation and guides, use only these domains:

- [webpack.js.org](https://webpack.js.org)

### Official npm Packages

The core [`webpack`](https://www.npmjs.com/package/webpack) and
[`webpack-cli`](https://www.npmjs.com/package/webpack-cli) packages are published
as unscoped packages by the webpack team, alongside officially maintained tooling
such as [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server).
Using packages from the webpack team guarantees that you are working with
officially supported webpack components. Any packages not published by the [`~webpack`](https://www.npmjs.com/org/webpack)
organization may not be affiliated with the webpack project.

### Official GitHub Organizations

webpack and related projects are maintained under this official GitHub
organization:

- [webpack](https://github.com/webpack)

### Official Communication Channels

webpack communicates through various official and community-supported channels.
You can find details on how to get involved on the
[Get Involved](/contribute/) page, and you can support the
project through its [Open Collective](https://opencollective.com/webpack).

### Reporting Issues

If you encounter issues with webpack itself, report them at the
[webpack repository](https://github.com/webpack/webpack/issues). For documentation
issues, use the [webpack.js.org repository](https://github.com/webpack/webpack.js.org/issues).
