---
title: Native CSS
authors: phoekerson,avivkeller,alexander-akait
---

# Native CSS

This guide walks through webpack's built-in CSS handling, enabled with `experiments.css`, and how to migrate an existing setup off `css-loader`, `style-loader`, and `mini-css-extract-plugin`.

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

With this option enabled, webpack understands `.css` files as first-class modules — parsing `@import` and `url()`, extracting stylesheets, generating content hashes, and supporting CSS Modules — without `css-loader`, `style-loader`, or `mini-css-extract-plugin`.

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

## CSS module types

Native CSS introduces four [`Rule.type`](/docs/api/options#modulerules) values. Knowing which one applies is the key to migrating, because each maps to a different `css-loader` `modules.mode`:

| Type         | Scoping                                                                         | `css-loader` equivalent  |
| ------------ | ------------------------------------------------------------------------------- | ------------------------ |
| `css`        | Global, no CSS Modules parsing                                                  | `modules: false`         |
| `css/global` | Global selectors, but `:local()` is honored                                     | `modules.mode: 'global'` |
| `css/module` | Local by default, `:global()` escapes to global                                 | `modules.mode: 'local'`  |
| `css/auto`   | Picks `css/module` for `*.module.css` / `*.modules.css`, otherwise `css/global` | `modules.auto: true`     |

The default rule webpack adds for `/\.css$/i` is `css/auto`, so `*.module.css` files become CSS Modules and everything else stays global — matching the most common `css-loader` configuration out of the box.

## CSS Modules

With `css/auto`, name a file `*.module.css` (or `*.modules.css`) to opt it into CSS Modules:

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

> [!NOTE]
> By default [`namedExports`](/docs/api/options#moduleparsercss) is enabled, so import the locals as a namespace (`import * as styles`) or by name (`import { button } from "./button.module.css"`). Set it to `false` to keep the classic default-import object.

You can tune CSS Modules behavior with parser and generator options — see [All options with examples](#all-options-with-examples) below:

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
  module: {
    parser: {
      'css/auto': {
        namedExports: true,
      },
    },
    generator: {
      'css/auto': {
        exportsConvention: 'camel-case-only',
        localIdentName: '[uniqueName]-[id]-[local]',
      },
    },
  },
};
```

### Supported CSS Modules features

Native CSS Modules understand the same authoring features as `css-loader`, so most stylesheets migrate unchanged:

- **`composes`** — compose one local class from another (including `composes: foo from "./other.module.css"`); the export resolves to the space-separated list of class names.
- **`@value`** — declare and import reusable values (`@value primary: #1f6feb;`, `@value primary from "./vars.module.css"`).
- **`:export`** — expose arbitrary key/value pairs to JavaScript.
- **`:local()` / `:global()`** — switch scoping inline within any module type.

```css
/* button.module.css */
@value brand: #1f6feb;

.base {
  padding: 8px 12px;
}
.primary {
  composes: base;
  background: brand;
}
:export {
  brandColor: brand;
}
```

## Output modes (`exportType`)

A single CSS module can be emitted in four ways. The [`exportType`](/docs/api/options#moduleparsercss) parser option selects which one, and each replaces a different piece of the classic toolchain:

| `exportType`         | Behavior                                                                                                  | Replaces                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `"link"` _(default)_ | Extracts a `.css` file, loaded via `<link>`                                                               | `mini-css-extract-plugin`                    |
| `"style"`            | Injects a `<style>` element from the runtime                                                              | `style-loader`                               |
| `"text"`             | Exports the CSS as a string                                                                               | `css-loader` `exportType: 'string'`          |
| `"css-style-sheet"`  | Exports a constructable [`CSSStyleSheet`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) | `css-loader` `exportType: 'css-style-sheet'` |

Set it globally per module type:

```js
export default {
  experiments: { css: true },
  module: {
    parser: {
      'css/auto': {
        exportType: 'style',
      },
    },
  },
};
```

or per rule for a subset of files:

```js
export default {
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.css$/i,
        type: 'css/auto',
        parser: { exportType: 'style' },
      },
    ],
  },
};
```

## Migration guide

### At a glance

| Legacy setup                                              | Native equivalent                                                                                                                   |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `mini-css-extract-plugin` (`MiniCssExtractPlugin.loader`) | built-in extraction (default `exportType: "link"`)                                                                                  |
| `MiniCssExtractPlugin` `filename` / `chunkFilename`       | [`output.cssFilename`](/docs/api/options#outputcssfilename) / [`output.cssChunkFilename`](/docs/api/options#outputcsschunkfilename) |
| `style-loader`                                            | [`exportType: "style"`](#output-modes-exporttype)                                                                                   |
| `css-loader`                                              | built-in CSS parsing (no loader needed)                                                                                             |
| `css-loader` `url` / `import`                             | [`module.parser.css.url` / `import`](/docs/api/options#moduleparsercss) (both default `true`)                                       |
| `css-loader` `modules` (`.module.css` auto-detect)        | `css/auto` module type                                                                                                              |
| `css-loader` `modules.mode`                               | `css/module` / `css/global` type + [`pure`](/docs/api/options#moduleparsercssauto)                                                  |
| `css-loader` `modules.localIdentName`                     | [generator `localIdentName`](/docs/api/options#modulegenerator)                                                                     |
| `css-loader` `modules.exportLocalsConvention`             | [generator `exportsConvention`](/docs/api/options#modulegenerator)                                                                  |
| `css-loader` `modules.namedExport`                        | [`module.parser.css.namedExports`](/docs/api/options#moduleparsercss) (default `true`)                                              |
| `css-loader` `modules.exportOnlyLocals`                   | generator `exportsOnly`                                                                                                             |
| `css-loader` `esModule`                                   | generator `esModule` (default `true`)                                                                                               |
| `css-loader` `exportType: 'string'` / `'css-style-sheet'` | [`exportType: "text"` / `"css-style-sheet"`](#output-modes-exporttype)                                                              |

Migrate one loader at a time — the sections below go in the order that keeps the build green at each step.

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

### 2. Enable native CSS

```js displayName="webpack.config.js"
export default {
  experiments: {
    css: true,
  },
};
```

The built-in `/\.css$/i` → `css/auto` rule now handles `.css` imports. Remove your custom rule and plugin once the following sections confirm each option has an equivalent.

### 3. Replace `mini-css-extract-plugin`

Native CSS extracts stylesheets and adds content hashes to them by default (`exportType: "link"`), so the plugin and its loader are no longer needed:

```diff displayName="webpack.config.js"
-import MiniCssExtractPlugin from "mini-css-extract-plugin";
-
 export default {
+  experiments: {
+    css: true,
+  },
-  module: {
-    rules: [
-      {
-        test: /\.css$/i,
-        use: [MiniCssExtractPlugin.loader, "css-loader"],
-      },
-    ],
-  },
-  plugins: [new MiniCssExtractPlugin()],
 };
```

Map the remaining plugin options:

| `mini-css-extract-plugin` | Native equivalent                                                          |
| ------------------------- | -------------------------------------------------------------------------- |
| `filename`                | [`output.cssFilename`](/docs/api/options#outputcssfilename)                |
| `chunkFilename`           | [`output.cssChunkFilename`](/docs/api/options#outputcsschunkfilename)      |
| loader `publicPath`       | [`output.publicPath`](/docs/api/options#outputpublicpath)                  |
| loader `esModule`         | generator [`esModule`](/docs/api/options#modulegenerator) (default `true`) |
| `ignoreOrder`             | n/a — native CSS does not emit order-conflict warnings                     |

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  output: {
    cssFilename: '[name].[contenthash].css',
    cssChunkFilename: '[id].[contenthash].css',
  },
};
```

### 4. Replace `css-loader`

Most `css-loader` options have a native counterpart under [`module.parser.css`](/docs/api/options#moduleparsercss) and [`module.generator.css`](/docs/api/options#modulegenerator). The common defaults (`url`, `import`, `namedExports` all on) already match a typical `css-loader` config, so many projects need no parser config at all.

| `css-loader` option              | Native equivalent                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| `url`                            | `module.parser.css.url` — default `true`                                               |
| `import`                         | `module.parser.css.import` — default `true`                                            |
| `importLoaders`                  | n/a — loaders in the chain apply to `@import`ed files automatically                    |
| `sourceMap`                      | controlled by [`devtool`](/docs/api/options#devtool) (supports a per-type `css` entry) |
| `esModule`                       | `module.generator.css.esModule` — default `true`                                       |
| `exportType: 'string'`           | parser `exportType: "text"`                                                            |
| `exportType: 'css-style-sheet'`  | parser `exportType: "css-style-sheet"`                                                 |
| `modules` (auto-detect)          | `css/auto` module type (built-in)                                                      |
| `modules.mode: 'local'`          | `css/module` type                                                                      |
| `modules.mode: 'global'`         | `css/global` type                                                                      |
| `modules.mode: 'pure'`           | parser `pure: true`                                                                    |
| `modules.localIdentName`         | generator `localIdentName`                                                             |
| `modules.exportLocalsConvention` | generator `exportsConvention`                                                          |
| `modules.namedExport`            | parser `namedExports` — default `true`                                                 |
| `modules.exportOnlyLocals`       | generator `exportsOnly`                                                                |
| `modules.localIdentHashSalt`     | generator `localIdentHashSalt`                                                         |
| `modules.localIdentHashFunction` | generator `localIdentHashFunction`                                                     |

For example, this `css-loader` CSS Modules config:

```js
export default {
  module: {
    rules: [
      {
        test: /\.module\.css$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:base64:6]',
                exportLocalsConvention: 'camel-case-only',
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

becomes:

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  module: {
    parser: {
      'css/auto': {
        namedExports: true,
      },
    },
    generator: {
      'css/auto': {
        localIdentName: '[local]-[hash:base64:6]',
        exportsConvention: 'camel-case-only',
      },
    },
  },
};
```

> [!NOTE]
> `localIdentName` supports hash placeholders such as `[hash:base64:6]`. You can tune hashing globally with [`output.hashFunction`](/docs/api/options#outputhashfunction), [`output.hashDigest`](/docs/api/options#outputhashdigest), [`output.hashDigestLength`](/docs/api/options#outputhashdigestlength), and [`output.hashSalt`](/docs/api/options#outputhashsalt), or per-module-type with the `localIdentHash*` generator options.

A few `css-loader` options work differently:

- `getLocalIdent` — instead of a custom function, native CSS drives naming through the [`localIdentName`](/docs/api/options#modulegenerator) template, which also accepts a function.
- `getJSON` — the class-name mapping is exported by the CSS module itself and readable from the compilation's module graph, so a small plugin can serialize it to JSON when a framework needs the file on disk. For server-side rendering, you usually don't need it at all — see [Server-side rendering](#7-server-side-rendering-node--web).
- `localIdentRegExp` and filter-style `url`/`import` callbacks have no native equivalent; keep `css-loader` for the affected files, or exclude specific requests with [`IgnorePlugin`](/docs/api/plugins/IgnorePlugin).

### 5. Replace `style-loader`

If you used `style-loader` to inject styles at runtime instead of extracting a file, set [`exportType: "style"`](#output-modes-exporttype):

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  module: {
    parser: {
      'css/auto': {
        exportType: 'style',
      },
    },
  },
};
```

This injects a `<style>` element from the webpack runtime, covering the default `style-loader` (`injectType: "styleTag"`) use case. Scope it to a single rule if only some files should be injected while the rest are extracted:

```js
export default {
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.inline\.css$/i,
        type: 'css/auto',
        parser: { exportType: 'style' },
      },
    ],
  },
};
```

Notes on `style-loader` options: `injectType: "linkTag"` corresponds to the default `exportType: "link"` (extraction); `attributes`, `insert`, and `styleTagTransform` have no native equivalent — keep `style-loader` if you rely on them.

### 6. Keep using preprocessors (Sass, Less, PostCSS)

Native CSS replaces the CSS loaders, not preprocessor loaders. Keep the preprocessor loader in `use` and set the rule's `type` to `css/auto` so webpack treats the loader's output as CSS:

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['postcss-loader', 'sass-loader'],
        type: 'css/auto',
      },
    ],
  },
};
```

`sass-loader` compiles to CSS, `postcss-loader` post-processes it, and native CSS handles extraction, `url()`, and CSS Modules from there. The same pattern works for `less-loader`, `stylus-loader`, and friends.

### 7. Server-side rendering (node + web)

For SSR you typically build twice — a `web` bundle for the browser and a `node` bundle for the server — and the CSS Modules class names must match so the server-rendered markup hydrates cleanly on the client. This is what `css-loader`'s `getJSON` was often used to round-trip; with native CSS you avoid the round-trip entirely by making `localIdentName` deterministic across targets.

Use a **path-based** template (no compilation-wide hash) so the same class name is produced on every target:

```js displayName="webpack.config.js"
const common = {
  experiments: { css: true },
  module: {
    rules: [
      {
        test: /\.module\.css$/i,
        type: 'css/module',
        generator: {
          // `[file]__[local]` is stable across targets — no getJSON sync needed.
          localIdentName: '[file]__[local]',
        },
      },
    ],
  },
};

export default [
  { ...common, name: 'web', target: 'web' },
  { ...common, name: 'node', target: 'node' },
];
```

On a `node` target the CSS generator defaults to `exportsOnly: true`, so the server build exports only the class-name mapping and emits no stylesheet — exactly what an SSR renderer needs. The browser build still extracts the real CSS. If you prefer a single config, `target: ["web", "node"]` builds a universal bundle that runs in both environments.

> [!NOTE]
> Avoid the production default `localIdentName: "[fullhash]"` for SSR — the full compilation hash differs between the web and node builds, so class names won't line up. Pin a deterministic template (path- or `[local]`-based, optionally with a per-file `[hash]`) in both configs.

### 8. Keep imports unchanged and validate

Your JavaScript imports can stay the same:

```js
import './styles.css';
import * as styles from './button.module.css';
```

Then check that:

- styles apply correctly in development,
- extracted `.css` files are emitted in production, and
- CSS Modules exports match your existing usage.

## All options with examples

Configure options per module type under [`module.parser`](/docs/api/options#moduleparser) and [`module.generator`](/docs/api/options#modulegenerator). The keys are `css`, `css/auto`, `css/global`, and `css/module`; the examples below use `css/auto` since it backs the default rule.

### Parser options

All boolean parser options below default to `true`.

| Option                                              | Type                                               | Default        | Description                                                                                        |
| --------------------------------------------------- | -------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------- |
| [`import`](/docs/api/options#moduleparsercss)       | `boolean`                                          | `true`         | Handle `@import` at-rules.                                                                         |
| [`url`](/docs/api/options#moduleparsercss)          | `boolean`                                          | `true`         | Handle `url()` / `image-set()` / `src()` / `image()`.                                              |
| [`namedExports`](/docs/api/options#moduleparsercss) | `boolean`                                          | `true`         | Export CSS Modules locals as ES module named exports.                                              |
| [`exportType`](/docs/api/options#moduleparsercss)   | `"link" \| "style" \| "text" \| "css-style-sheet"` | `"link"`       | How the CSS is emitted (see [Output modes](#output-modes-exporttype)).                             |
| [`pure`](/docs/api/options#moduleparsercssauto)     | `boolean`                                          | `false`        | Strict pure mode — every selector must contain a local class/id. `css/module` and `css/auto` only. |
| `as`                                                | `"stylesheet" \| "block-contents"`                 | `"stylesheet"` | Parse the source as a full stylesheet or as a block's contents.                                    |
| `animation`                                         | `boolean`                                          | `true`         | Rename local `@keyframes` names.                                                                   |
| `container`                                         | `boolean`                                          | `true`         | Rename local `@container` names.                                                                   |
| `customIdents`                                      | `boolean`                                          | `true`         | Rename custom identifiers.                                                                         |
| `dashedIdents`                                      | `boolean`                                          | `true`         | Rename dashed identifiers (custom properties).                                                     |
| `function`                                          | `boolean`                                          | `true`         | Rename local `@function` names.                                                                    |
| `grid`                                              | `boolean`                                          | `true`         | Rename grid line/area identifiers.                                                                 |

```js
export default {
  experiments: { css: true },
  module: {
    parser: {
      'css/auto': {
        import: true,
        url: true,
        namedExports: true,
        exportType: 'link',
        pure: false,
        // Only rename @keyframes; leave @container / grid identifiers untouched.
        animation: true,
        container: false,
        grid: false,
      },
    },
  },
};
```

> [!NOTE]
> To leave a single `@import` or `url()` untouched (kept as-is in the output instead of resolved by webpack), add a `/* webpackIgnore: true */` comment before it — handy for CDN URLs or runtime-resolved assets while `import`/`url` stay enabled everywhere else.

### Generator options

| Option                                                   | Type                                                                                    | Default                                                          | Description                                           |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| [`localIdentName`](/docs/api/options#modulegenerator)    | `string \| function`                                                                    | `"[uniqueName]-[id]-[local]"` (dev) / `"[fullhash]"` (prod)      | Template for generated local class names.             |
| [`exportsConvention`](/docs/api/options#modulegenerator) | `"as-is" \| "camel-case" \| "camel-case-only" \| "dashes" \| "dashes-only" \| function` | `"as-is"`                                                        | Naming convention for exported locals.                |
| `exportsOnly`                                            | `boolean`                                                                               | `true` on targets without a document (e.g. `node`), else `false` | Only export locals; skip emitting a stylesheet (SSR). |
| `esModule`                                               | `boolean`                                                                               | `true`                                                           | Emit ES module syntax for the generated JS.           |
| `localIdentHashFunction`                                 | `string`                                                                                | [`output.hashFunction`](/docs/api/options#outputhashfunction)    | Hash function for `localIdentName` hashes.            |
| `localIdentHashDigest`                                   | `string`                                                                                | `"base64url"`                                                    | Hash digest encoding for local idents.                |
| `localIdentHashDigestLength`                             | `number`                                                                                | `6`                                                              | Hash digest length for local idents.                  |
| `localIdentHashSalt`                                     | `string`                                                                                | [`output.hashSalt`](/docs/api/options#outputhashsalt)            | Hash salt for local idents.                           |

```js
export default {
  experiments: { css: true },
  module: {
    generator: {
      'css/auto': {
        localIdentName: '[uniqueName]-[id]-[local]',
        exportsConvention: 'camel-case-only',
        esModule: true,
        exportsOnly: false,
        localIdentHashDigest: 'base64url',
        localIdentHashDigestLength: 6,
      },
    },
  },
};
```

`exportsConvention` also accepts a function returning a `string` or `string[]` — returning an array exports the local under several aliases, matching `css-loader`'s behavior.

## Popular examples

### CSS Modules with named exports

```css displayName="src/app.module.css"
.primary {
  color: #1f6feb;
}
.large-text {
  font-size: 2rem;
}
```

```js displayName="src/index.js"
import { largeText, primary } from './app.module.css';

document.body.classList.add(primary, largeText);
```

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  module: {
    generator: {
      'css/auto': {
        exportsConvention: 'camel-case-only',
      },
    },
  },
};
```

### Extract hashed CSS files for production

```js displayName="webpack.config.js"
export default {
  mode: 'production',
  experiments: { css: true },
  output: {
    cssFilename: 'css/[name].[contenthash].css',
    cssChunkFilename: 'css/[id].[contenthash].css',
  },
};
```

### Inject `<style>` tags at runtime (style-loader style)

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  module: {
    parser: {
      'css/auto': {
        exportType: 'style',
      },
    },
  },
};
```

### Import a constructable stylesheet

```js displayName="src/index.js"
import sheet from './theme.css' with { type: 'css' };

document.adoptedStyleSheets = [sheet];
```

webpack resolves the `with { type: "css" }` import assertion to `exportType: "css-style-sheet"` automatically, giving you a [`CSSStyleSheet`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) instance.

### Import CSS as a string

```js displayName="webpack.config.js"
export default {
  experiments: { css: true },
  module: {
    parser: {
      'css/auto': {
        exportType: 'text',
      },
    },
  },
};
```

```js displayName="src/index.js"
import css from './styles.css';

const style = new CSSStyleSheet();
style.replaceSync(css);
```

### Global styles + scoped modules side by side

With the default `css/auto` rule, `*.module.css` is scoped and everything else is global — no extra config:

```js
import './reset.css'; // global
import * as card from './card.module.css'; // scoped
```

## Experimental status and known limitations

Because `experiments.css` is explicitly experimental, treat it as opt-in and test carefully before rolling it out widely.

- APIs and behavior may still evolve before they become the default in webpack v6.
- A few loader options have no drop-in switch: `css-loader`'s `localIdentRegExp` and filter callbacks, and `style-loader`'s `attributes` / `insert` / `styleTagTransform`. Keep the loader for files that need them. (`getLocalIdent` maps to the `localIdentName` function form, and `getJSON`/SSR is covered by [matching class names across targets](#7-server-side-rendering-node--web).)
- `importLoaders` has no equivalent — loaders in the chain apply to `@import`ed files automatically.
- If your project relies on advanced loader chains, validate each part before migrating fully.
