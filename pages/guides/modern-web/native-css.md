---
authors: phoekerson,avivkeller
---

# Native CSS

This guide walks through webpack's built-in CSS handling, enabled with `experiments.css`.

> [!WARNING]
> `experiments.css` is still experimental. It is expected to become the default in webpack v6, but its behavior may continue to change while development is ongoing.

## Getting started

Turn on native CSS support in your webpack configuration:

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
};
```

With this option enabled, webpack can process CSS without `css-loader` or `mini-css-extract-plugin` for the basic flow.

## Importing CSS

Once the experiment is enabled, you can import `.css` files directly from JavaScript:

```js displayName="src/index.js"
import './styles.css';

const element = document.createElement('h1');
element.textContent = 'Hello native CSS';
document.body.appendChild(element);
```

```css displayName="src/styles.css"
h1 {
  color: #1f6feb;
}
```

webpack processes the CSS and includes it in the build output.

## CSS Modules

Native CSS support also covers CSS Modules. The recommended approach is to:

- keep `type: "css/auto"` for mixed CSS handling, and
- use the `.module.css` (or `.modules.css`) naming convention for CSS Modules files.

```css displayName="src/button.module.css"
.button {
  background: #0d6efd;
  color: white;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
}
```

```js displayName="src/index.js"
import * as styles from './button.module.css';

const button = document.createElement('button');
button.className = styles.button;
button.textContent = 'Click me';
document.body.appendChild(button);
```

> [!TIP]
> CSS Modules class names are exported, and named exports are enabled for CSS Modules by default.

You can tune CSS Modules behavior with parser and generator options:

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
  module: {
    parser: {
      'css/module': {
        namedExports: true,
      },
    },
    generator: {
      'css/module': {
        exportsConvention: 'camel-case-only',
        localIdentName: '[uniqueName]-[id]-[local]',
      },
    },
  },
};
```

## Production builds

With `experiments.css: true`, webpack performs native CSS extraction and applies content hashing to CSS assets in production builds.

Compared with the classic setup:

- Traditional approach: `css-loader` plus `mini-css-extract-plugin`.
- Native approach: `experiments.css` with built-in extraction behavior.

This reduces configuration and keeps the CSS pipeline closer to webpack's core features.

## Experimental status and known limitations

Because `experiments.css` is explicitly experimental, treat it as opt-in and test carefully before rolling it out widely.

Keep the following points in mind:

- APIs and behavior may still evolve before they become the default in webpack v6.
- Some loader-specific options are not part of native CSS behavior (for example, loader-specific filters).
- If your project relies on advanced loader chains, validate each part before migrating fully.

## Migration guide

If you currently rely on `css-loader`, `mini-css-extract-plugin`, and `style-loader`, migrate in small steps.

### 1. Start from a classic setup

```js displayName="webpack.config.js"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

### 2. Switch to native CSS

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
};
```

### 3. Migrate `css-loader` options first

Most CSS Modules-related options should move to the native parser and generator configuration.

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
  module: {
    parser: {
      css: {
        import: true,
        url: true,
      },
      'css/module': {
        namedExports: true,
      },
    },
    generator: {
      'css/module': {
        exportsConvention: 'camel-case-only',
        localIdentName: '[local]-[hash:base64:6]',
      },
    },
  },
};
```

Notes:

- `import` and `url` are native parser switches for CSS handling.
- `namedExports` controls CSS Modules export behavior.
- `exportsConvention` and `localIdentName` shape how class names are exported and named.
- `localIdentName` supports hash placeholders (for example, `[hash:base64:6]`); you can tune hashing globally with [`output.hashFunction`](#TODO[/configuration/output/#outputhashfunction]), [`output.hashDigest`](#TODO[/configuration/output/#outputhashdigest]), [`output.hashDigestLength`](#TODO[/configuration/output/#outputhashdigestlength]), and [`output.hashSalt`](#TODO[/configuration/output/#outputhashsalt]).
- `css-loader` filter-style options have no direct equivalent; use webpack mechanisms such as `IgnorePlugin` when you need them.

### 4. Replace `mini-css-extract-plugin`

When `experiments.css` is enabled, webpack handles native CSS extraction and content hashing for CSS output files, so you can drop both `mini-css-extract-plugin` and `css-loader` from this basic setup.

```diff displayName="webpack.config.js"
-import MiniCssExtractPlugin from "mini-css-extract-plugin";
-
 export default {
+  experiments: {
+    css: true,
+  },
-  plugins: [new MiniCssExtractPlugin()],
 };
```

You can remove:

- the CSS loader chain (including `css-loader`) from `module.rules`, and
- the `new MiniCssExtractPlugin()` plugin instance.

### 5. Replace `style-loader` with `exportType: "style"`

If you used `style-loader` for runtime style injection, keep `css/auto`, use the module naming convention (`.module.css` or `.modules.css`), and set `exportType: "style"`:

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: 'css/auto',
        parser: {
          exportType: 'style',
        },
      },
    ],
  },
};
```

This mode injects a `<style>` element from the webpack runtime and covers the typical `style-loader` use case.

If you cannot rename files to the CSS Modules naming convention, you can use `type: "css/module"` directly for the relevant rule.

### 6. Keep imports unchanged

Your JavaScript imports can stay the same:

```js
import './styles.css';
import * as styles from './button.module.css';
```

### 7. Validate output in development and production

Verify that:

- styles are applied correctly in development,
- CSS files are emitted for production, and
- CSS Modules exports match your existing usage.
