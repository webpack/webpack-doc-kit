---
authors: EugeneHlushko,avivkeller
---

# Advanced entry

## Multiple file types per entry

When you use an array of values for [entry](#TODO[/configuration/entry-context/#entry]), you can supply different types of files to produce separate bundles for CSS, JavaScript, and other assets. This is useful in applications that don't `import` styles from JavaScript, such as pre-Single-Page applications or projects structured for other reasons.

Consider an example. We have a PHP application with two page types: home and account. The home page has a different layout and JavaScript that isn't shared with the rest of the application (the account page). From our application files, we want to produce `home.js` and `home.css` for the home page, and `account.js` and `account.css` for the account page.

```js displayName="home.js"
console.log('home page type');
```

```scss displayName="home.scss"
// home page individual styles
```

```js displayName="account.js"
console.log('account page type');
```

```scss displayName="account.scss"
// account page individual styles
```

As a best practice, we'll use [`MiniCssExtractPlugin`](/docs/plugins/mini-css-extract-plugin) in `production` mode for the CSS.

```js displayName="webpack.config.js"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: process.env.NODE_ENV,
  entry: {
    home: ['./home.js', './home.scss'],
    account: ['./account.js', './account.scss'],
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
```

Running webpack with the configuration above outputs into `./dist`, since we did not specify a different output path. The `./dist` directory will then contain four files:

- `home.js`
- `home.css`
- `account.js`
- `account.css`
