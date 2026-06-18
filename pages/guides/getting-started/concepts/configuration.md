---
authors: TheLarkInn,simon04,EugeneHlushko,byzyk,mr-baraiya,avivkeller
---

# Configuration

You may have noticed that very few webpack configurations look exactly alike. That's because a webpack configuration file is simply a JavaScript file that exports a webpack [configuration](#TODO[/configuration/]). webpack then processes that configuration according to the properties you define on it.

Since the configuration is a standard Node.js module, you can do all of the following:

- Import other files with `require(...)` or `import`.
- Pull in utilities from npm with `require(...)` or `import`.
- Use JavaScript control flow expressions such as `?:`, `if`, and `for`.
- Store frequently used values in constants or variables.
- Write and call functions that generate part of the configuration.

Use these capabilities whenever they make sense.

The following practices, while technically possible, are best avoided:

- Reading CLI arguments directly when using the webpack CLI. Doing so makes your configuration less portable and harder to maintain. Instead, write your own CLI or [use `--env`](#TODO[/api/cli/#env]) to pass environment variables.
- Exporting non-deterministic values. Running webpack twice should always produce the same output files.
- Writing long configurations. Split a large configuration into multiple files instead.

> [!TIP]
> The most important takeaway from this document is that there are many ways to format and style a webpack configuration. The key is to settle on something consistent that you and your team can understand and maintain.

The examples below show how a webpack configuration can be both expressive and configurable, precisely because it is code.

## Introductory configuration

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
};
```

See the [Configuration section](#TODO[/configuration/]) for every supported configuration option.

## Using multiple configurations

webpack supports exporting multiple configuration objects, which is useful when building different targets or outputs, for example separate client and server bundles.

A single configuration is enough for many projects, but multiple configurations can help organize more complex setups.

```js
module.exports = [
  {
    entry: './src/client.js',
    output: {
      filename: 'client.bundle.js',
    },
  },
  {
    entry: './src/server.js',
    output: {
      filename: 'server.bundle.js',
    },
  },
];
```

## Multiple targets

In addition to exporting a single configuration as an object, a [function](#TODO[/configuration/configuration-types/#exporting-a-function]), or a [Promise](#TODO[/configuration/configuration-types/#exporting-a-promise]), you can export multiple configurations.

See [Exporting multiple configurations](#TODO[/configuration/configuration-types/#exporting-multiple-configurations]).

## Using other configuration languages

webpack accepts configuration files written in several programming and data languages.

See [Configuration Languages](#TODO[/configuration/configuration-languages/]).
