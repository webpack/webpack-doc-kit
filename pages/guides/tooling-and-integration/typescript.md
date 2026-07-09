---
authors: morsdyce,kkamali,mtrivera,byzyk,EugeneHlushko,chenxsan,snitin315,tusharthakur04,ThierryRakotomanana,valentina-buoro,avivkeller
---

# TypeScript

> [!TIP]
> This guide builds on the [Getting Started](/guides/getting-started) guide.

[TypeScript](https://www.typescriptlang.org) is a typed superset of JavaScript that compiles to plain JavaScript. In this guide, we'll learn how to integrate TypeScript with webpack.

## Basic setup

First, install the TypeScript compiler and loader:

```bash
npm install --save-dev typescript ts-loader
```

Now we'll modify the directory structure and configuration files:

```diff displayName="project"
 webpack-demo
  ├── package.json
  ├── package-lock.json
+ ├── tsconfig.json
- ├── webpack.config.js
+ ├── webpack.config.ts
  ├── /dist
  │   ├── bundle.js
  │   └── index.html
  ├── /src
- │   ├── index.js
+ │   └── index.ts
  └── /node_modules
```

Let's set up a configuration that supports JSX and compiles TypeScript down to ES5:

```json displayName="tsconfig.json"
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "esnext",
    "jsx": "react-jsx",
    "allowJs": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

See [TypeScript's documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) to learn more about `tsconfig.json` configuration options. To learn more about webpack configuration, see the [configuration concepts](/guides/getting-started/concepts/configuration).

Now let's configure webpack to handle TypeScript. First, install the required dependencies:

```bash
npm install --save-dev ts-node @types/node
```

```ts displayName="webpack.config.ts"
import path from 'node:path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

// in case you run into any TypeScript error when configuring `devServer`
import 'webpack-dev-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export default config;
```

> [!NOTE]
> For more on how to write configuration in a [TypeScript file](#TODO[https://webpack.js.org/configuration/configuration-languages/#typescript]).

This directs webpack to _enter_ through `./index.ts`, _load_ all `.ts` and `.tsx` files through `ts-loader`, and _output_ a `bundle.js` file in our current directory.

Next, we need to adjust how we import `lodash` in `./index.ts`. Since the lodash definitions don't include a default export, we'll need to update our import statement. First, make sure to install the [TypeScript definitions](#using-third-party-libraries):

```bash
npm install --save-dev @types/lodash
```

Then update the import at the top of the file:

```diff displayName="./index.ts"
- import _ from 'lodash';
+ import * as _ from 'lodash';

  function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
```

> [!TIP]
> To make imports work this way by default and keep the `import _ from 'lodash';` syntax in TypeScript, set `"allowSyntheticDefaultImports": true` and `"esModuleInterop": true` in your **tsconfig.json** file. This relates to TypeScript configuration and is mentioned here only for your information.

## Ways to use TypeScript in `webpack.config.ts`

There are three ways to use TypeScript in `webpack.config.ts`:

1. **Using webpack with Node.js's built-in type-stripping feature (recommended):**

   ```bash
   webpack -c ./webpack.config.ts
   ```

   webpack attempts to load the configuration using Node.js's built-in [type stripping](https://nodejs.org/api/typescript.html#type-stripping), then falls back to loading the configuration file using `interpret` and `rechoir` (in which case you need to install `tsx`, `ts-node`, or another tool).

2. **Using a custom `--import`/`--require` for Node.js:**

   ```bash
   NODE_OPTIONS='--import=tsx --no-experimental-strip-types'  webpack -c ./webpack.config.ts
   ```

   ```bash
   NODE_OPTIONS='--require=ts-node/register --no-experimental-strip-types'  webpack -c ./webpack.config.ts
   ```

   > [!NOTE]
   > The `--no-experimental-strip-types` flag is required starting with Node.js version 22.7.0.

3. **Using Node.js's built-in transform-types feature for Node.js >= v22.7.0:**

   Use this to enable transformation of non-erasable TypeScript syntax, which requires JavaScript code generation, such as enum declarations and parameter properties.

   ```bash
   NODE_OPTIONS='--experimental-transform-types' webpack --disable-interpret -c ./webpack.config.ts
   ```

## TypeScript path aliases

Available in webpack 5.105.0+.

If you use [`compilerOptions.paths`](https://www.typescriptlang.org/tsconfig#paths) or `compilerOptions.baseUrl` in your `tsconfig.json` to create import aliases, then starting with webpack 5.105, webpack can read these aliases directly via [`resolve.tsconfig`](#TODO[/configuration/resolve/#resolvetsconfig]). This replaces [`tsconfig-paths-webpack-plugin`](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin), which should no longer be used.

`resolve.tsconfig` accepts `boolean | string | object`:

```js displayName="webpack.config.ts"
export default {
  resolve: {
    tsconfig: true, // automatically find tsconfig.json
  },
};
```

Pass a string to point at a specific file (useful in monorepos):

```js
export default {
  resolve: {
    tsconfig: './tsconfig.app.json',
  },
};
```

Pass an object to also resolve [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html):

```js
export default {
  resolve: {
    tsconfig: {
      configFile: './tsconfig.json',
      references: 'auto', // inherit references from tsconfig, or pass an array of paths
    },
  },
};
```

```json displayName="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

With the above, `@/components/Button` resolves to `src/components/Button` without any additional plugins or duplicating aliases in `resolve.alias`.

### Migrating from `tsconfig-paths-webpack-plugin`

If you're currently using `tsconfig-paths-webpack-plugin`, you can drop it in favor of the built-in `resolve.tsconfig` option:

```diff
- import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

  export default {
    resolve: {
-     plugins: [new TsconfigPathsPlugin()],
+     // Auto-find tsconfig.json in the project root
+     tsconfig: true,
+
+     // Or explicitly point to one
+     // tsconfig: './tsconfig.app.json'
    },
  };
```

You can then remove the package from your project:

```bash
npm uninstall tsconfig-paths-webpack-plugin
```

> [!WARNING]
> `resolve.tsconfig` only handles module resolution — it does not transpile TypeScript. You still need `ts-loader`, `babel-loader` with `@babel/preset-typescript`, or another transpilation step.

## Loader

[`ts-loader`](https://github.com/TypeStrong/ts-loader)

We use `ts-loader` in this guide because it makes enabling additional webpack features, such as importing other web assets, a bit easier.

> [!WARNING]
> `ts-loader` uses `tsc`, the TypeScript compiler, and relies on your `tsconfig.json` configuration. Be sure to avoid setting [`module`](https://www.typescriptlang.org/tsconfig#module) to "CommonJS", or webpack won't be able to [tree-shake your code](/guides/optimization/tree-shaking).

Note that if you're already using [`babel-loader`](https://github.com/babel/babel-loader) to transpile your code, you can use [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) and let Babel handle both your JavaScript and TypeScript files instead of using an additional loader. Keep in mind that, unlike `ts-loader`, the underlying [`@babel/plugin-transform-typescript`](https://babeljs.io/docs/en/babel-plugin-transform-typescript) plugin does not perform any type checking.

## Source maps

To learn more about source maps, see the [development guide](/guides/core-workflows/development).

To enable source maps, we must configure TypeScript to output inline source maps to our compiled JavaScript files. The following line must be added to our TypeScript configuration:

```diff displayName="tsconfig.json"
  {
    "compilerOptions": {
      "outDir": "./dist/",
+     "sourceMap": true,
      "noImplicitAny": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "target": "esnext",
      "jsx": "react-jsx",
      "allowJs": true,
  },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
  }
```

Now we need to tell webpack to extract these source maps and include them in our final bundle:

```diff displayName="webpack.config.ts"
 import path from "node:path";
 import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  export default {
    entry: './src/index.ts',
+   devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
```

See the [devtool documentation](#TODO[/configuration/devtool/]) for more information.

## Client types

You can use webpack-specific features in your TypeScript code, such as [`import.meta.webpack`](/guides/modules-and-dependencies/ecma-script-modules/#importmeta-in-esm). webpack also provides types for them. Add a TypeScript [`reference`](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-) directive to declare it:

```ts
/// <reference types="webpack/module" />
console.log(import.meta.webpack); // without the reference declared above, TypeScript will throw an error
```

To enable the types for the whole project, add `webpack/module` to `compilerOptions.types` in `tsconfig.json`:

```diff
  {
    "compilerOptions": {
      "types": [
+       "webpack/module"
      ]
    }
  }
```

## Using third-party libraries

When installing third-party libraries from npm, remember to also install the typing definitions for that library.

For example, to use lodash, run the following command to install its type definitions:

```bash
npm install --save-dev @types/lodash
```

If the npm package already includes its declaration typings in the package bundle, downloading the corresponding `@types` package is not needed. For more information, see the [TypeScript changelog blog post](https://github.blog/changelog/2020-12-16-npm-displays-packages-with-bundled-typescript-declarations/).

## Importing other assets

To use non-code assets with TypeScript, we need to defer the type for these imports. This requires a `custom.d.ts` file, which holds custom definitions for TypeScript in our project. Let's set up a declaration for `.svg` files:

```ts displayName="custom.d.ts"
declare module '*.svg' {
  const content: any;
  export default content;
}
```

Here we declare a new module for SVGs by matching any import that ends in `.svg` and defining the module's `content` as `any`. We could be more explicit about it being a URL by defining the type as `string`. The same concept applies to other assets, including CSS, SCSS, JSON, and more.

## Build performance

> [!WARNING]
> This may degrade build performance.

See the [Build Performance](/guides/optimization/build-performance) guide on build tooling.
