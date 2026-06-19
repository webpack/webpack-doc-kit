---
authors: pksjce,bebraw,tashian,skipjack,AnayaDesign,avivkeller
---

# Integrations

Let's start by clearing up a common misconception. webpack is a module bundler like [Browserify](http://browserify.org/) or [Brunch](https://brunch.io/). It is _not_ a task runner like [Make](https://www.gnu.org/software/make/), [Grunt](https://gruntjs.com/), or [Gulp](https://gulpjs.com/). Task runners automate common development tasks such as linting, building, or testing your project. Compared with bundlers, task runners operate at a higher level. You can still benefit from their higher-level tooling while leaving the problem of bundling to webpack.

Bundlers help you prepare your JavaScript and stylesheets for deployment, transforming them into a format suitable for the browser. For example, JavaScript can be [minified](/docs/plugins/minimizer-webpack-plugin) or [split into chunks](/guides/optimization/code-splitting) and [lazy-loaded](/guides/optimization/code-splitting/lazy-loading) to improve performance. Bundling is one of the most important challenges in web development, and solving it well removes a great deal of pain from the process.

The good news is that, although there is some overlap, task runners and bundlers can work well together when approached the right way. This guide provides a high-level overview of how webpack can be integrated into some of the more popular task runners.

## npm scripts

webpack users often use npm [`scripts`](https://docs.npmjs.com/misc/scripts) as their task runner. This is a good starting point. Cross-platform support can become a problem, but there are several workarounds. Many — perhaps most — users get by with npm `scripts` and various levels of webpack configuration and tooling.

So while webpack's core focus is bundling, a variety of extensions can enable you to use it for jobs typical of a task runner. Integrating a separate tool adds complexity, so weigh the pros and cons before proceeding.

## Grunt

For those using Grunt, we recommend the [`grunt-webpack`](https://www.npmjs.com/package/grunt-webpack) package. With `grunt-webpack`, you can run webpack or [webpack-dev-server](https://github.com/webpack/webpack-dev-server) as a task, access stats within [template tags](https://gruntjs.com/api/grunt.template), split development and production configurations, and more. Start by installing `grunt-webpack` as well as `webpack` itself if you haven't already:

```bash
npm install --save-dev grunt-webpack webpack
```

Then register a configuration and load the task:

```js displayName="Gruntfile.js"
const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
      },
      prod: webpackConfig,
      dev: { watch: true, ...webpackConfig },
    },
  });

  grunt.loadNpmTasks('grunt-webpack');
};
```

For more information, see the [repository](https://github.com/danez/grunt-webpack).

## Gulp

Gulp is also a fairly straightforward integration with the help of the [`webpack-stream`](https://github.com/shama/webpack-stream) package (a.k.a. `gulp-webpack`). In this case, there is no need to install `webpack` separately, since it is a direct dependency of `webpack-stream`:

```bash
npm install --save-dev webpack-stream
```

You can `require('webpack-stream')` instead of `webpack` and optionally pass it a configuration:

```js displayName="gulpfile.js"
import gulp from 'gulp';
import webpack from 'webpack-stream';

gulp.task('default', () =>
  gulp
    .src('src/entry.js')
    .pipe(
      webpack({
        // Any configuration options...
      })
    )
    .pipe(gulp.dest('dist/'))
);
```

For more information, see the [repository](https://github.com/shama/webpack-stream).

## Mocha

The [`mocha-webpack`](https://github.com/zinserjan/mocha-webpack) utility provides a clean integration with Mocha. The repository covers the pros and cons in more detail, but essentially `mocha-webpack` is a simple wrapper that offers almost the same CLI as Mocha itself, along with various webpack features such as an improved watch mode and better path resolution. Here's a small example of how to install it and use it to run a test suite found within `./test`:

```bash
npm install --save-dev webpack mocha mocha-webpack
mocha-webpack 'test/**/*.js'
```

For more information, see the [repository](https://github.com/zinserjan/mocha-webpack).

## Karma

The [`karma-webpack`](https://github.com/webpack-contrib/karma-webpack) package lets you use webpack to pre-process files in [Karma](https://karma-runner.github.io/1.0/index.html).

```bash
npm install --save-dev webpack karma karma-webpack
```

```js displayName="karma.conf.js"
export default function (config) {
  config.set({
    frameworks: ['webpack'],
    files: [
      { pattern: 'test/*_test.js', watched: false },
      { pattern: 'test/**/*_test.js', watched: false },
    ],
    preprocessors: {
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack'],
    },
    webpack: {
      // Any custom webpack configuration...
    },
    plugins: ['karma-webpack'],
  });
}
```

For more information, see the [repository](https://github.com/webpack-contrib/karma-webpack).
