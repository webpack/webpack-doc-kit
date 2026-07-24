---
title: Webpack
layout: home
mdx: true
---

<Hero>

```bash displayName="npm"
npm install webpack webpack-cli --save-dev
```

```bash displayName="yarn"
yarn add webpack webpack-cli --dev
```

```bash displayName="pnpm"
pnpm add webpack webpack-cli -D
```

```bash displayName="bun"
bun add -d webpack webpack-cli
```

```bash displayName="deno"
deno add npm:webpack npm:webpack-cli
```

</Hero>

<ConfigSection>

```javascript displayName="webpack.config.js"
const path = require('node:path');


module.exports = {
  entry: './src/index.cjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
```

```javascript displayName="webpack.config.mjs"
import path from 'node:path';


export default {
  entry: './src/index.mjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  mode: 'production',
};
```

```typescript displayName="webpack.config.ts"
import path from 'node:path';
import { Configuration } from 'webpack';

export default {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(import.meta.dirname, 'dist'),
  },
  mode: 'production',
} satisfies Configuration;
```

</ConfigSection>
