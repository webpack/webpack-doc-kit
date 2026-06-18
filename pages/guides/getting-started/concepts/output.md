---
authors: TheLarkInn,chyipin,rouzbeh84,byzyk,EugeneHlushko,avivkeller
---

# Output

The `output` configuration options tell webpack how to write the compiled files to disk. Note that while a configuration can have multiple `entry` points, it can specify only one `output`.

## Usage

The minimum requirement for the `output` property is to set it to an object and provide an [`output.filename`](#TODO[/configuration/output/#outputfilename]) for the output file(s):

```js displayName="webpack.config.js"
export default {
  output: {
    filename: 'bundle.js',
  },
};
```

This configuration writes a single `bundle.js` file into the `dist` directory.

## Multiple entry points

If your configuration produces more than one "chunk", as happens with multiple entry points or with plugins like `CommonsChunkPlugin`, use [substitutions](#TODO[/configuration/output/#outputfilename]) to give each file a unique name:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
};

// writes to disk: ./dist/app.js, ./dist/search.js
```

## Advanced

Here is a more involved example that uses a CDN together with hashes for assets:

```js displayName="config.js"
export default {
  // ...
  output: {
    path: '/home/proj/cdn/assets/[fullhash]',
    publicPath: 'https://cdn.example.com/assets/[fullhash]/',
  },
};
```

When the eventual `publicPath` of the output files is not known at compile time, you can leave it blank and set it dynamically at runtime through the `__webpack_public_path__` variable in your entry point file:

```js
__webpack_public_path__ = myRuntimePublicPath;

// rest of your application entry
```
