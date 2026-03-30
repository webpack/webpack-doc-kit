# Production Builds

Use production mode to optimize bundles for deployment.

## Recommended Base

```js
module.exports = {
  mode: 'production',
  devtool: 'source-map',
};
```

## Useful Production Checks

- Split code with `import()` and `optimization.splitChunks`
- Enable long-term caching with deterministic filenames
- Analyze bundles with `webpack-bundle-analyzer`
- Minimize unused code via tree shaking
