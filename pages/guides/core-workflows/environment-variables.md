---
authors: simon04,grisanu,tbroadley,legalcodes,byzyk,jceipek,snitin315,Brennvo,avivkeller
---

# Environment Variables

To distinguish between [development](/guides/core-workflows/development) and [production builds](/guides/core-workflows/production) in your `webpack.config.js`, you can use environment variables.

> [!TIP]
> webpack's environment variables are different from the [environment variables](https://en.wikipedia.org/wiki/Environment_variable) of operating system shells such as `bash` and `CMD.exe`.

The webpack command line [environment option](https://github.com/webpack/webpack-cli/blob/main/packages/webpack-cli/README.md#available-options) `--env` lets you pass in as many environment variables as you like, and they're then made available in your `webpack.config.js`. For example, `--env production` or `--env goal=local`.

```bash
npx webpack --env goal=local --env production --progress
```

> [!TIP]
> Setting an `env` variable without an assignment, such as `--env production`, sets `env.production` to `true` by default. Other syntaxes are also available. See the [webpack CLI](https://github.com/webpack/webpack-cli/blob/main/packages/webpack-cli/README.md#available-options) documentation for more information.

You'll need to make one change to your webpack config. Typically, `export default` points directly to the configuration object. To use the `env` variable, you must make `export default` a function instead:

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default env => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Goal:', env.goal); // 'local'
  console.log('Production:', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
```

> [!TIP]
> The webpack CLI provides some [built-in environment variables](https://github.com/webpack/webpack-cli/blob/main/packages/webpack-cli/README.md#cli-environment-variables) that you can access inside a webpack configuration.
