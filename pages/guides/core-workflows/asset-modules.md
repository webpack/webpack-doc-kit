---
authors: smelukov,EugeneHlushko,chenxsan,anshumanv,spence-s,dkdk225,alexander-akait,GreenUpOu,avivkeller
---

# Asset Modules

Asset modules let you work with asset files such as fonts and icons without setting up extra loaders.

Before webpack 5, the common approach was to use:

- [`raw-loader`](https://v4.webpack.js.org/loaders/raw-loader/) to import a file as a string.
- [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/) to inline a file into the bundle as a data URI.
- [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/) to emit a file into the output directory.

Asset modules replace all of these loaders by introducing five new module types:

- `asset/resource` emits a separate file and exports its URL. Previously achievable with `file-loader`.
- `asset/inline` exports a data URI of the asset. Previously achievable with `url-loader`.
- `asset/source` exports the source code of the asset. Previously achievable with `raw-loader`.
- `asset/bytes` exports a [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) view of the asset.
- `asset` automatically chooses between exporting a data URI and emitting a separate file. Previously achievable with `url-loader` using an asset size limit.

If you combine the old asset loaders (`file-loader`, `url-loader`, or `raw-loader`) with asset modules in webpack 5, you may want to prevent asset modules from processing the same assets again, since that would duplicate them. To do this, set the asset's module type to `'javascript/auto'`.

```diff displayName="webpack.config.js"
export default {
  module: {
   rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
+       type: 'javascript/auto'
      },
   ]
  },
}
```

To exclude assets that originate from `new URL` calls from the asset loaders, add `dependency: { not: ['url'] }` to the loader configuration.

```diff displayName="webpack.config.js"
export default {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
+       dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  }
}
```

## Public path

Under the hood, the `asset` type resolves URLs as `__webpack_public_path__ + import.meta` by default. As a result, setting `output.publicPath` in your configuration lets you override the URL from which the `asset` loads.

### On-the-fly override

If you set `__webpack_public_path__` in code, you need to run it as the very first code in your app, and you must not wrap it in a function, otherwise the `asset` loading logic will break. For example, you might have a file named `publicPath.js` with the following contents:

```js
__webpack_public_path__ = 'https://cdn.url.com';
```

Then, in your `webpack.config.js`, update the `entry` field to include it:

```js
export default {
  entry: ['./publicPath.js', './App.js'],
};
```

Alternatively, you can import it at the top of `App.js` without touching your webpack configuration. The only downside is that you must enforce import ordering yourself, which can conflict with some linting tools.

```js
import './publicPath.js';
```

## Resource type

```diff displayName="webpack.config.js"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
+ module: {
+   rules: [
+     {
+       test: /\.png/,
+       type: 'asset/resource',
+     },
+   ],
+ },
};
```

```js displayName="src/index.js"
import mainImage from './images/main.png';

img.src = mainImage; // '/dist/151cfcfa1bd74779aadb.png'
```

All `.png` files will be emitted to the output directory and their paths will be injected into the bundles. You can also customize [`outputPath`](#TODO[/configuration/module/#rulegeneratoroutputpath]) and [`publicPath`](#TODO[/configuration/module/#rulegeneratorpublicpath]) for them.

### Custom output filename

By default, `asset/resource` modules are emitted into the output directory using the `[hash][ext][query]` filename template.

You can change this template by setting [`output.assetModuleFilename`](#TODO[/configuration/output/#outputassetmodulefilename]) in your webpack configuration:

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
+   assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
};
```

Another reason to customize the output filename is to emit a certain kind of asset into a specific directory:

```diff
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
+   assetModuleFilename: 'images/[hash][ext][query]',
  },
  module: {
    rules: [
+     {
+       test: /\.html/,
+       type: 'asset/resource',
+       generator: {
+         filename: 'static/[hash][ext][query]',
+       },
+     },
    ],
  },
};
```

With this configuration, all `.html` files will be emitted into a `static` directory inside the output directory.

`Rule.generator.filename` behaves the same as [`output.assetModuleFilename`](#TODO[/configuration/output/#outputassetmodulefilename]) and works only with the `asset` and `asset/resource` module types.

## Inlining assets

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
+     {
+       test: /\.svg/,
+       type: 'asset/inline',
+     },
    ],
  },
};
```

```js displayName="src/index.js"
import metroMap from './images/metro.svg';

block.style.background = `url(${metroMap})`; // url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDo...vc3ZnPgo=)
```

All `.svg` files will be injected into the bundles as data URIs.

### Custom data URI generator

By default, the data URI that webpack emits represents the file contents encoded with the Base64 algorithm.

If you want to use a custom encoding algorithm, you can provide a function to encode the file contents:

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';
+ import svgToMiniDataURI from "mini-svg-data-uri";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        type: 'asset/inline',
+       generator: {
+         dataUrl: content => {
+           content = content.toString();
+           return svgToMiniDataURI(content);
+         },
+       },
      },
    ],
  },
};
```

Now all `.svg` files will be encoded with the `mini-svg-data-uri` package.

## Source type

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
+     {
+       test: /\.txt/,
+       type: 'asset/source',
+     },
    ],
  },
};
```

> [!TIP]
> You don't need to add rules when using the `import text from './file.txt' with { type: "text" };` syntax.

```text displayName="src/example.txt"
Hello world
```

```js displayName="src/index.js"
import exampleText from './example.txt';

block.textContent = exampleText; // 'Hello world';
```

Alternative usage:

```js displayName="src/index.js"
import exampleText from './example.txt' with { type: 'text' };

block.textContent = exampleText; // 'Hello world';
```

All `.txt` files will be injected into the bundles as UTF-8 strings.

## URL assets

When you use `new URL('./path/to/asset', import.meta.url)`, webpack creates an asset module too.

> [!TIP]
> You don't need to add rules when using the `const file = new URL('./file.ext', import.meta.url);` syntax.

```js displayName="src/index.js"
const logo = new URL('./logo.svg', import.meta.url);
```

Depending on the [`target`](#TODO[/configuration/target/]) in your configuration, webpack compiles the code above into different output:

```js
// target: web
new URL(
  `${__webpack_public_path__}logo.svg`,
  document.baseURI || self.location.href
);

// target: webworker
new URL(`${__webpack_public_path__}logo.svg`, self.location);

// target: node, node-webkit, nwjs, electron-main, electron-renderer, electron-preload, async-node
new URL(
  `${__webpack_public_path__}logo.svg`,
  require('node:url').pathToFileUrl(__filename)
);
```

```js
// any targets when ECMAScript modules output is enabled
new URL(`${__webpack_public_path__}logo.svg`, import.meta.url);
```

As of webpack 5.38.0, [data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are supported in `new URL()` as well:

```js displayName="src/index.js"
const url = new URL('data:,', import.meta.url);
console.log(url.href === 'data:,');
console.log(url.protocol === 'data:');
console.log(url.pathname === ',');
```

## Asset type

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
+     {
+       test: /\.txt/,
+       type: 'asset',
+     },
    ],
  },
};
```

Now webpack automatically chooses between `resource` and `inline` based on a default condition: a file smaller than 8kb is treated as an `inline` module type, and larger files use the `resource` module type.

You can change this condition by setting the [`Rule.parser.dataUrlCondition.maxSize`](#TODO[/configuration/module/#ruleparserdataurlcondition]) option at the module rule level of your webpack configuration:

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.txt/,
        type: 'asset',
+       parser: {
+         dataUrlCondition: {
+           maxSize: 4 * 1024, // 4kb
+         },
+       },
      },
    ],
  },
};
```

You can also [specify a function](#TODO[/configuration/module/#ruleparserdataurlcondition]) to decide whether to inline a module.

## Bytes type

```diff displayName="webpack.config.js"
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
+     {
+       test: /\.txt/,
+       type: 'asset/bytes',
+     },
    ],
  },
};
```

> [!TIP]
> You don't need to add rules when using the `import data from './file.ext' with { type: "bytes" };` syntax.

```text displayName="src/example.txt"
Hello world
```

```js displayName="src/index.js"
import exampleText from './example.txt';

const decoder = new TextDecoder('utf-8');
const textString = decoder.decode(exampleText);

block.textContent = textString; // 'Hello world';
```

Alternative usage:

```js displayName="src/index.js"
import exampleText from './example.txt' with { type: 'bytes' };

const decoder = new TextDecoder('utf-8');
const textString = decoder.decode(exampleText);

block.textContent = textString; // 'Hello world';
```

All `.txt` files will be injected into the bundles as raw bytes (`Uint8Array`), without any text encoding or transformation.

## Replacing inline loader syntax

Before asset modules and webpack 5, it was possible to use [inline syntax](https://webpack.js.org/concepts/loaders/#inline) with the legacy loaders mentioned above.

It is now recommended to remove all inline loader syntax and use a `resourceQuery` condition to reproduce the behavior of the inline syntax.

For example, to replace `raw-loader` with the `asset/source` type:

```diff
- import myModule from 'raw-loader!my-module';
+ import myModule from 'my-module?raw';
```

And in the webpack configuration:

```diff
module: {
    rules: [
    // ...
+     {
+       resourceQuery: /raw/,
+       type: 'asset/source',
+     }
    ]
  },
```

If you want to exclude raw assets from being processed by other loaders, use a negative condition:

```diff
module: {
    rules: [
    // ...
+     {
+       test: /\.m?js$/,
+       resourceQuery: { not: [/raw/] },
+       use: [ ... ]
+     },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      }
    ]
  },
```

Alternatively, use a `oneOf` list of rules, where only the first matching rule is applied:

```diff
module: {
    rules: [
    // ...
+     { oneOf: [
        {
          resourceQuery: /raw/,
          type: 'asset/source',
        },
+       {
+         test: /\.m?js$/,
+         use: [ ... ]
+       },
+     ] }
    ]
  },
```

## Disable emitting assets

For use cases such as server-side rendering, you might want to disable emitting assets. This is possible with the [`emit`](#TODO[/configuration/module/#rulegeneratoremit]) option under `Rule.generator`:

```js
export default {
  // …
  module: {
    rules: [
      {
        test: /\.png$/i,
        type: 'asset/resource',
        generator: {
          emit: false,
        },
      },
    ],
  },
};
```

## Further reading

- [webpack 5 - Asset Modules](https://dev.to/smelukov/webpack-5-asset-modules-2o3h)
