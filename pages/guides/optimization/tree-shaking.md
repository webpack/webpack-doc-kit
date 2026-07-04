---
authors: simon04,zacanger,alexjoverm,avant1,MijaelWatts,dmitriid,probablyup,gish,lumo10,byzyk,pnevares,EugeneHlushko,AnayaDesign,torifat,rahul3v,snitin315,vansh5632,Brennvo,ThierryRakotomanana,avivkeller
---

# Tree Shaking

_Tree shaking_ is a term commonly used in JavaScript for dead-code elimination. It relies on the [static structure](http://exploringjs.com/es6/ch_modules.html#static-module-structure) of ES2015 module syntax — that is, [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export). The name and concept were popularized by the ES2015 module bundler [rollup](https://github.com/rollup/rollup).

webpack 2 introduced built-in support for ES2015 modules (also known as _harmony modules_) along with detection of unused module exports. webpack 4 expanded on this by letting you hint to the compiler, via the `"sideEffects"` property in `package.json`, which files in your project are "pure" and therefore safe to prune if unused.

> [!TIP]
> The rest of this guide builds on [Getting Started](/guides/getting-started). If you haven't read through that guide yet, please do so now.

## Add a utility

Let's add a new utility file to our project, `src/math.js`, that exports two functions:

```diff displayName="project"
 webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  │   ├── bundle.js
  │   └── index.html
  ├── /src
  │   ├── index.js
+ │   └── math.js
  └── /node_modules
```

```js displayName="src/math.js"
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```

Set the `mode` configuration option to [development](#TODO[/configuration/mode/#mode-development]) to make sure the bundle is not minified:

```diff displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
+ mode: 'development',
+ optimization: {
+   usedExports: true,
+ },
};
```

With that in place, let's update our entry script to use one of these new methods and remove `lodash` for simplicity:

```diff displayName="src/index.js"
- import _ from 'lodash';
+ import { cube } from './math.js';

  function component() {
-   const element = document.createElement('div');
+   const element = document.createElement('pre');

-   // Lodash, now imported by this script
-   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.innerHTML = [
+     'Hello webpack!',
+     '5 cubed is equal to ' + cube(5)
+   ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());
```

Note that we **did not `import` the `square` method** from the `src/math.js` module. That function is what's known as "dead code": an unused `export` that should be dropped. Now let's run our npm script, `npm run build`, and inspect the output bundle:

```js displayName="dist/bundle.js (around lines 90 - 100)"
/* 1 */
/***/ (function (module, __webpack_exports__, __webpack_require__) {
  'use strict';

  /* unused harmony export square */
  /* harmony export (immutable) */ __webpack_exports__.a = cube;
  function square(x) {
    return x * x;
  }

  function cube(x) {
    return x * x * x;
  }
});
```

Note the `unused harmony export square` comment above. If you look at the code below it, you'll notice that `square` is not imported, yet it is still included in the bundle. We'll fix that in the next section.

## Mark the file as side-effect-free

In a 100% ESM world, identifying side effects would be straightforward. We aren't there quite yet, however, so in the meantime we need to hint to webpack's compiler about the "purity" of your code.

This is done through the `"sideEffects"` property in `package.json`:

```json
{
  "name": "your-project",
  "sideEffects": false
}
```

None of the code above contains side effects, so we can set the property to `false` to tell webpack it can safely prune unused exports.

> [!TIP]
> A "side effect" is code that performs special behavior when imported, beyond exposing one or more exports. Polyfills are an example: they affect the global scope and usually don't provide an export.

If your code does have side effects, you can provide an array instead:

```json
{
  "name": "your-project",
  "sideEffects": ["./src/some-side-effectful-file.js"]
}
```

The array accepts simple glob patterns to the relevant files. It uses [glob-to-regexp](https://github.com/fitzgen/glob-to-regexp) under the hood (it supports `*`, `**`, `{a,b}`, and `[a-z]`). Patterns like `*.css`, which don't include a `/`, are treated like `**/*.css`.

> [!TIP]
> Any imported file is subject to tree shaking. This means that if you use something like `css-loader` and import a CSS file, it must be added to the side-effects list so it isn't unintentionally dropped in production mode:

```json
{
  "name": "your-project",
  "sideEffects": ["./src/some-side-effectful-file.js", "*.css"]
}
```

Finally, `"sideEffects"` can also be set from the [`module.rules` configuration option](#TODO[/configuration/module/#modulerules]).

## Clarifying tree shaking and `sideEffects`

The [`sideEffects`](#TODO[/configuration/optimization/#optimizationsideeffects]) and [`usedExports`](#TODO[/configuration/optimization/#optimizationusedexports]) (better known as tree shaking) optimizations are two different things.

**`sideEffects` is much more effective**, because it allows webpack to skip whole modules/files and their complete subtree.

`usedExports` relies on [terser](https://github.com/terser-js/terser) to detect side effects in statements. That's a difficult task in JavaScript and not as effective as the straightforward `sideEffects` flag. It also can't skip subtrees or dependencies, because the spec requires side effects to be evaluated. While exporting a function works fine, React's Higher-Order Components (HOCs) are problematic in this regard.

If you're using dynamic `import()`, you can also use the `webpackExports` magic comment to specify which exports should be exposed, allowing webpack to tree shake the rest. See [Magic Comments](#TODO[/api/module-methods/#magic-comments]).

Let's look at an example:

```js
import { Button } from '@shopify/polaris';
```

The pre-bundled version looks like this:

```js
import hoistStatics from 'hoist-non-react-statics';

function Button(_ref) {
  // ...
}

function merge() {
  const _final = {};

  for (
    let _len = arguments.length, objs = Array.from({ length: _len }), _key = 0;
    _key < _len;
    _key++
  ) {
    objs[_key] = arguments[_key];
  }

  for (let _i = 0, _objs = objs; _i < _objs.length; _i++) {
    const obj = _objs[_i];
    mergeRecursively(_final, obj);
  }

  return _final;
}

function withAppProvider() {
  return function addProvider(WrappedComponent) {
    const WithProvider =
      /*#__PURE__*/
      (function (_React$Component) {
        // ...
        return WithProvider;
      })(Component);

    WithProvider.contextTypes = WrappedComponent.contextTypes
      ? merge(WrappedComponent.contextTypes, polarisAppProviderContextTypes)
      : polarisAppProviderContextTypes;
    const FinalComponent = hoistStatics(WithProvider, WrappedComponent);
    return FinalComponent;
  };
}

const Button$1 = withAppProvider()(Button);

export {
  // ...,
  Button$1,
};
```

When `Button` is unused, you can effectively remove `export { Button$1 };`, which leaves all the remaining code intact. So the question becomes: "Does this code have any side effects, or can it be safely removed?" That's difficult to answer, especially because of this line: `withAppProvider()(Button)`. `withAppProvider` is called and its return value is also called. Are there side effects when calling `merge` or `hoistStatics`? Are there side effects when assigning `WithProvider.contextTypes` (a setter?) or reading `WrappedComponent.contextTypes` (a getter?).

terser does try to figure this out, but in many cases it can't be sure. This doesn't mean terser isn't doing its job well; it's simply too difficult to determine reliably in a dynamic language like JavaScript.

But we can help terser with the `/*#__PURE__*/` annotation. It flags a statement as side-effect-free. So a small change makes it possible to tree shake the code:

```js
const Button$1 = /* #__PURE__ */ withAppProvider()(Button);
```

This allows the piece of code to be removed. But there are still questions about the imports, which need to be included and evaluated because they could contain side effects.

To tackle this, we use the [`"sideEffects"`](/guides/optimization/tree-shaking/#mark-the-file-as-side-effect-free) property in `package.json`.

It's similar to `/*#__PURE__*/`, but at the module level rather than the statement level. The `"sideEffects"` property says: "If no direct export from a module flagged as side-effect-free is used, the bundler can skip evaluating the module for side effects."

In Shopify's Polaris example, the original modules look like this:

```js displayName="index.js"
import './configure';

export * from './types';
export * from './components';
```

```js displayName="components/index.js"
// ...
export { default as Breadcrumbs } from './Breadcrumbs';
export { buttonFrom, buttonsFrom, default as Button } from './Button';
export { default as ButtonGroup } from './ButtonGroup';
// ...
```

```json displayName="package.json"
// ...
"sideEffects": [
  "**/*.css",
  "**/*.scss",
  "./esnext/index.js",
  "./esnext/configure.js"
],
// ...
```

For `import { Button } from "@shopify/polaris";`, this has the following implications:

- include it: include the module, evaluate it, and continue analyzing dependencies
- skip over: don't include it, don't evaluate it, but continue analyzing dependencies
- exclude it: don't include it, don't evaluate it, and don't analyze dependencies

Specifically, per matching resource:

- `index.js`: No direct export is used, but it's flagged with `sideEffects` -> include it.
- `configure.js`: No export is used, but it's flagged with `sideEffects` -> include it.
- `types/index.js`: No export is used, not flagged with `sideEffects` -> exclude it.
- `components/index.js`: No direct export is used and it's not flagged with `sideEffects`, but re-exported exports are used -> skip over.
- `components/Breadcrumbs.js`: No export is used, not flagged with `sideEffects` -> exclude it. This also excludes all of its dependencies, like `components/Breadcrumbs.css`, even if they are flagged with `sideEffects`.
- `components/Button.js`: A direct export is used, not flagged with `sideEffects` -> include it.
- `components/Button.css`: No export is used, but it's flagged with `sideEffects` -> include it.

In this case, only four modules end up in the bundle:

- `index.js`: pretty much empty
- `configure.js`
- `components/Button.js`
- `components/Button.css`

After this optimization, other optimizations can still apply. For example, the `buttonFrom` and `buttonsFrom` exports from `Button.js` are unused too. The `usedExports` optimization will pick that up, and terser may be able to drop some statements from the module.

Module concatenation also applies, so these four modules plus the entry module (and probably more dependencies) can be concatenated. **`index.js` ends up generating no code.**

## Full example: understanding side effects with CSS files

To better understand the impact of the `sideEffects` flag, let's look at a complete example of an npm package with CSS assets and how it might be affected during tree shaking. We'll create a fictional UI component library called "awesome-ui".

### Package structure

Our example package looks like this:

```bash
awesome-ui/
├── package.json
└── dist/
    ├── index.js
    ├── components/
    │   ├── index.js
    │   ├── Button/
    │   │   ├── index.js
    │   │   └── Button.css
    │   ├── Card/
    │   │   ├── index.js
    │   │   └── Card.css
    │   └── Modal/
    │       ├── index.js
    │       └── Modal.css
    └── theme/
        ├── index.js
        └── defaultTheme.css
```

### Package file contents

```json displayName="package.json"
{
  "name": "awesome-ui",
  "version": "1.0.0",
  "main": "dist/index.js",
  "sideEffects": false
}
```

```js displayName="dist/index.js"
export * from './components';
export * from './theme';
```

```js displayName="dist/components/index.js"
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Modal } from './Modal';
```

```js displayName="dist/components/Button/index.js"
import './Button.css'; // This has a side effect - it applies styles when imported!

export default function Button(props) {
  // Button component implementation
  return {
    type: 'button',
    ...props,
  };
}
```

```css displayName="dist/components/Button/Button.css"
.awesome-ui-button {
  background-color: #0078d7;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
```

`dist/components/Card/index.js` and `dist/components/Modal/index.js` would have a similar structure.

```js displayName="dist/theme/index.js"
import './defaultTheme.css'; // This has a side effect!

export const themeColors = {
  primary: '#0078d7',
  secondary: '#f3f2f1',
  danger: '#d13438',
};
```

### What happens when consuming this package?

Now, imagine a consumer application that only wants to use the Button component:

```js
import { Button } from 'awesome-ui';

// Use the Button component
```

#### With `sideEffects: false` in `package.json`

When webpack processes this import with tree shaking enabled:

1. It sees the import for only `Button`.
2. It looks at `package.json` and sees `sideEffects: false`.
3. It determines it only needs to include the Button component code.
4. Since all files are marked as having no side effects, it includes **only** the JavaScript code for the Button.
5. **The CSS file import gets dropped!** Even though `Button.css` is imported in `Button/index.js`, webpack assumes this import has no side effects.

The result: the Button component renders, but without any styling, because `Button.css` was eliminated during tree shaking.

#### The correct configuration for this package

To fix this, we need to update `package.json` to properly mark CSS files as having side effects:

```json
{
  "name": "awesome-ui",
  "version": "1.0.0",
  "main": "dist/index.js",
  "sideEffects": ["**/*.css"]
}
```

With this configuration:

1. webpack still identifies that only the Button component is needed.
2. But now it recognizes that CSS files have side effects.
3. So it includes `Button.css` when processing `Button/index.js`.

### The decision tree for side effects

Here's how webpack evaluates modules during tree shaking:

1. Is the export from this module used, directly or indirectly?
   - If yes: include the module.
   - If no: continue to step 2.

2. Is the module marked with side effects?
   - If yes (`sideEffects` includes this file or is `true`): include the module.
   - If no (`sideEffects` is `false` or doesn't include this file): exclude the module and its dependencies.

For our library's files with the proper `sideEffects` configuration:

- `dist/index.js`: No direct export used, no side effects -> skip over.
- `dist/components/index.js`: No direct export used, no side effects -> skip over.
- `dist/components/Button/index.js`: Direct export used -> include.
- `dist/components/Button/Button.css`: No exports, has side effects -> include.
- `dist/components/Card/*`: No exports used, no side effects -> exclude.
- `dist/components/Modal/*`: No exports used, no side effects -> exclude.
- `dist/theme/*`: No exports used, no side effects -> exclude.

### Real-world impact

The impact of an incorrect side-effects configuration can be significant:

1. **CSS not being included**: components render without styles.
2. **Global JavaScript not running**: polyfills or global configuration don't execute.
3. **Initialization code skipped**: functions that register components or set up event listeners never run.

These issues can be particularly hard to debug because they often appear only in production builds, when tree shaking is enabled.

### Testing side-effects configuration

A good way to test whether your side-effects configuration is correct:

1. Create a minimal application that imports just one component.
2. Build it with production settings (with tree shaking enabled).
3. Check that all necessary styles and behaviors work correctly.
4. Look at the generated bundle to confirm the right files are included.

## Mark a function call as side-effect-free

You can tell webpack that a function call is side-effect-free (pure) by using the `/*#__PURE__*/` annotation. Place it in front of a function call to mark it as side-effect-free. Arguments passed to the function are not marked by the annotation and may need to be marked individually. When the initial value in a variable declaration of an unused variable is considered side-effect-free (pure), it's marked as dead code, not executed, and dropped by the minimizer. This behavior is enabled when [`optimization.innerGraph`](#TODO[/configuration/optimization/#optimizationinnergraph]) is set to `true`.

```js displayName="file.js"
/* #__PURE__ */ double(55);
```

## Mark a function declaration as side-effect-free

Available in webpack 5.107.0+.

webpack also supports the [`#__NO_SIDE_EFFECTS__`](https://github.com/javascript-compiler-hints/compiler-notations-spec/blob/main/no-side-effects-notation-spec.md) annotation to mark a function declaration as pure. Calls to a function annotated this way can be eliminated from the bundle when their return value is unused, even if the function body isn't statically analyzable as pure. This is useful for factory or builder functions whose call sites would otherwise need a `/*#__PURE__*/` annotation each time.

```js displayName="utils.js"
/*#__NO_SIDE_EFFECTS__*/
export function createLogger(prefix) {
  return msg => console.log(`[${prefix}] ${msg}`);
}
```

```js displayName="app.js"
import { createLogger } from './utils';

// dropped, because `createLogger` is annotated and its result is unused
const unused = createLogger('debug');
```

> [!WARNING]
> The annotation currently only takes effect within the module where it is declared. Cross-module propagation is planned for a future release.

## Minify the output

We've cued up our "dead code" to be dropped by using the `import` and `export` syntax, but we still need to actually remove it from the bundle. To do that, set the `mode` configuration option to [`production`](#TODO[/configuration/mode/#mode-production]).

```diff displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
- mode: 'development',
- optimization: {
-   usedExports: true,
- }
+ mode: 'production',
};
```

> [!TIP]
> Note that the `--optimize-minimize` flag can also be used to enable `TerserPlugin`.

With that squared away, run `npm run build` again and see what's changed.

Notice anything different about `dist/bundle.js`? The whole bundle is now minified and mangled, but if you look carefully, you won't see the `square` function — only a mangled version of the `cube` function (`function r(e){return e*e*e}n.a=r`). With minification and tree shaking, our bundle is now a few bytes smaller. That may not seem like much in this contrived example, but tree shaking can yield a significant decrease in bundle size when working on larger applications with complex dependency trees.

> [!TIP]
> [`ModuleConcatenationPlugin`](/docs/api/optimize/ModuleConcatenationPlugin) is required for tree shaking to work. It's added by `mode: 'production'`. If you're not using that mode, remember to add [`ModuleConcatenationPlugin`](/docs/api/optimize/ModuleConcatenationPlugin) manually.

## Common pitfalls with side effects

When working with tree shaking and the `sideEffects` flag, there are several common pitfalls to avoid.

### 1. Over-optimistic `sideEffects: false`

Setting `sideEffects: false` in your `package.json` is tempting for optimal tree shaking, but it can cause problems if your code actually does have side effects. Examples of hidden side effects:

- CSS imports (as demonstrated above)
- Polyfills that modify global objects
- Libraries that register global event listeners
- Code that modifies prototype chains

### 2. Re-exports with side effects

Consider this pattern:

```js
// This file has side effects that might be skipped
import './polyfill';

// Re-export components
export * from './components';
```

If a consumer only imports specific components, the polyfill import might be skipped entirely if it isn't properly marked with side effects.

### 3. Forgetting about nested dependencies

Your package might correctly mark its side effects, but if it depends on third-party packages that mark their side effects incorrectly, you may still run into issues.

### 4. Testing only in development mode

Tree shaking typically only fully activates in production mode. Testing only in development can hide tree shaking issues until deployment.

## Conclusion

What we've learned is that, to take advantage of _tree shaking_, you must:

- Use ES2015 module syntax (`import` and `export`).
- Ensure no compiler transforms your ES2015 module syntax into CommonJS modules. (This is the default behavior of the popular Babel preset `@babel/preset-env` — see the [documentation](https://babeljs.io/docs/en/babel-preset-env#modules) for details.)
- Add a `"sideEffects"` property to your project's `package.json` file.
- Be careful to correctly mark files with side effects, especially CSS imports.
- Use the [`production`](#TODO[/configuration/mode/#mode-production]) `mode` configuration option to enable [various optimizations](#TODO[/configuration/mode/#usage]), including minification and tree shaking. (Side-effects optimization is enabled in development mode using the flag value.)
- Set a correct value for [`devtool`](#TODO[/configuration/devtool/#devtool]), as some of them can't be used in `production` mode.

You can imagine your application as a tree. The source code and libraries you actually use represent the green, living leaves of the tree. Dead code represents the brown, dead leaves consumed by autumn. To get rid of the dead leaves, you have to shake the tree, causing them to fall.

If you're interested in more ways to optimize your output, head to the next guide for details on building for [production](/guides/core-workflows/production).

## Further reading

- [Debugging Optimization Bailouts](https://webpack.js.org/plugins/module-concatenation-plugin/#debugging-optimization-bailouts)
- [Issue 6074 - Add support for more complex selectors for sideEffects](https://github.com/webpack/webpack/issues/6074)
