# Getting Started

This guide gets you from zero to your first webpack build.

## 1. Install

```bash
npm install --save-dev webpack webpack-cli
```

## 2. Create an entry file

Create `src/index.js`:

```js
console.log('Hello from webpack');
```

## 3. Add a minimal config

Create `webpack.config.js`:

```js
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
};
```

## 4. Build

```bash
npx webpack
```

Your bundle is now available in the output directory.
