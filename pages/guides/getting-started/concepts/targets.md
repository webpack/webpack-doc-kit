---
authors: TheLarkInn,rouzbeh84,johnstew,srilman,byzyk,EugeneHlushko,avivkeller
---

# Targets

Because JavaScript can run on both the server and the browser, webpack offers several deployment _targets_ that you can set in your webpack [configuration](#TODO[/configuration]).

> [!WARNING]
> Do not confuse the webpack `target` property with the `output.libraryTarget` property. For more information, see our [guide](/guides/getting-started/concepts/output) on the `output` property.

## Usage

To set the `target` property, assign the target value in your webpack config:

```js displayName="webpack.config.js"
export default {
  target: 'node',
};
```

In the example above, `node` tells webpack to compile for a Node.js-like environment: chunks are loaded with Node.js's `require`, and built-in modules such as `fs` and `path` are left untouched.

Each target comes with deployment- and environment-specific additions tailored to its needs. See which [targets are available](#TODO[/configuration/target/]).

> [!NOTE]
> Further expansion for other popular target values.

## Multiple targets

webpack lets you pass an [array of strings](#TODO[/configuration/target/#string]) to the `target` property, in which case the common subset of those targets' features is used. This lets you build universal code that runs in multiple environments. For example, you can combine `web` and `node`:

```js displayName="webpack.config.js"
export default {
  target: ['web', 'node'],
};
```

Alternatively, you can build an isomorphic library by bundling two separate configurations:

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js',
  },
  // …
};

const clientConfig = {
  target: 'web', // <=== can be omitted as 'web' is the default
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
  },
  // …
};

export default [serverConfig, clientConfig];
```

This example creates a `lib.js` file and a `lib.node.js` file in your `dist` folder.

## Resources

As the options above show, you can choose from multiple deployment _targets_. Below is a list of examples and resources you can refer to.

- **[compare-webpack-target-bundles](https://github.com/TheLarkInn/compare-webpack-target-bundles)**: A great resource for testing and inspecting different webpack _targets_, and useful for bug reporting.
- **[Boilerplate of Electron-React Application](https://github.com/chentsulin/electron-react-boilerplate)**: A good example of a build process for Electron's main and renderer processes.

> [!NOTE]
> Need to find up-to-date examples of these webpack targets being used in live code or boilerplates.
