---
authors: skipjack,michael-ciniawsky,TheDutchCoder,sudarsangp,chenxsan,EugeneHlushko,AnayaDesign,wizardofhogwarts,astonizer,snitin315,Brennvo,mr-baraiya,avivkeller
---

# Asset Management

If you've followed the guides from the beginning, you now have a small project that prints "Hello webpack". The next step is to bring in other kinds of assets, such as images, and see how webpack handles them.

Before webpack, front-end developers relied on tools like [grunt](https://gruntjs.com/) and [gulp](https://gulpjs.com/) to process assets and copy them from a `/src` folder into a `/dist` or `/build` directory. JavaScript modules followed the same approach, but webpack takes it further: it **dynamically bundles** every dependency, building what's known as a [dependency graph](/guides/getting-started/concepts/dependency-graph). This is powerful because each module now _explicitly declares its dependencies_, which lets webpack skip anything that isn't actually used.

One of webpack's nicest features is that you can _import almost any type of file_, not just JavaScript, as long as there's a loader or built-in [Asset Modules](/guides/core-workflows/asset-modules) support for it. That means the benefits you get with JavaScript, like explicit dependencies, apply to everything you use to build a site or web app. We'll begin with CSS, since that setup is probably already familiar to you.

## Setup

First, make a small change to the project before we begin.

```diff displayName="dist/index.html"
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
-    <title>Getting Started</title>
+    <title>Asset Management</title>
   </head>
   <body>
-    <script src="main.js"></script>
+    <script src="bundle.js"></script>
   </body>
 </html>
```

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
-    filename: 'main.js',
+    filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```

## Loading CSS

To `import` a CSS file from within a JavaScript module, install the [style-loader](/docs/loaders/style-loader) and [css-loader](/docs/loaders/css-loader), then add them to your [`module` configuration](#TODO[/configuration/module]):

```bash
npm install --save-dev style-loader css-loader
```

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
+  module: {
+    rules: [
+      {
+        test: /\.css$/i,
+        use: ['style-loader', 'css-loader'],
+      },
+    ],
+  },
 };
```

Loaders can be chained together, with each loader in the chain transforming the resource it receives. The chain runs in reverse order, from right to left.

For example, consider the following rule:

```js
export default {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ['postcss-loader', 'sass-loader'],
      },
    ],
  },
};
```

Although `postcss-loader` is listed before `sass-loader` in the `use` array, webpack executes `sass-loader` first to compile Sass into CSS, then runs `postcss-loader` on the result. If this order isn't respected, webpack may throw errors.

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
   ├── webpack.config.js
   ├── /dist
   │   ├── bundle.js
   │   └── index.html
   ├── /src
+  │   ├── style.css
   │   └── index.js
   └── /node_modules
```

```css displayName="src/style.css"
.hello {
  color: red;
}
```

```diff displayName="src/index.js"
 import _ from 'lodash';
+import './style.css';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());
```

Now run the build command:

```bash
$ npm run build

...
[webpack-cli] Compilation finished
asset bundle.js 72.6 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 539 KiB
  modules by path ./node_modules/ 538 KiB
    ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
  modules by path ./src/ 965 bytes
    ./src/index.js + 1 modules 639 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 326 bytes [built] [code generated]
webpack 5.x.x compiled successfully in 2231 ms
```

Open `dist/index.html` in your browser again and you should see `Hello webpack` styled in red. To check what webpack did, inspect the page rather than viewing the page source; the source won't reflect the result because the `<style>` tag is created dynamically by JavaScript. Look at the page's head tags, and you should find the style block we imported in `index.js`.

Note that you can, and usually should, [minimize CSS](/docs/plugins/mini-css-extract-plugin/#minimizing-for-production) for faster load times in production. On top of that, loaders exist for just about every flavor of CSS you can think of, including [postcss](/docs/loaders/postcss-loader), [sass](/docs/loaders/sass-loader), and [less](/docs/loaders/less-loader).

## Loading Images

Now that CSS is in place, what about images such as backgrounds and icons? Since webpack 5, the built-in [Asset Modules](/guides/core-workflows/asset-modules) make it easy to handle these as well:

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
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
+      {
+        test: /\.(png|svg|jpg|jpeg|gif)$/i,
+        type: 'asset/resource',
+      },
     ],
   },
 };
```

Now, when you write `import MyImage from './my-image.png'`, the image is processed and added to your `output` directory, and the `MyImage` variable holds its final URL after processing. When you use the [css-loader](/docs/loaders/css-loader) as shown above, the same thing happens for `url('./my-image.png')` inside your CSS: the loader recognizes the local file and replaces the `'./my-image.png'` path with the final path to the image in your `output` directory. The [html-loader](/docs/loaders/html-loader) handles `<img src="./my-image.png" />` the same way.

Let's add an image to the project to see this in action. You can use any image you like.

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
   ├── webpack.config.js
   ├── /dist
   │   ├── bundle.js
   │   └── index.html
   ├── /src
+  │   ├── icon.png
   │   ├── style.css
   │   └── index.js
   └── /node_modules
```

```diff displayName="src/index.js"
 import _ from 'lodash';
 import './style.css';
+import Icon from './icon.png';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

+  // Add the image to our existing div.
+  const myIcon = new Image();
+  myIcon.src = Icon;
+
+  element.appendChild(myIcon);
+
   return element;
 }

 document.body.appendChild(component());
```

```diff displayName="src/style.css"
 .hello {
   color: red;
+  background: url('./icon.png');
 }
```

Create a new build and open `index.html` again:

```bash
$ npm run build

...
[webpack-cli] Compilation finished
assets by status 9.88 KiB [cached] 1 asset
asset bundle.js 73.4 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1.82 KiB 6 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 540 KiB (javascript) 9.88 KiB (asset)
  modules by path ./node_modules/ 539 KiB
    modules by path ./node_modules/css-loader/dist/runtime/*.js 2.38 KiB
      ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
      ./node_modules/css-loader/dist/runtime/getUrl.js 830 bytes [built] [code generated]
    ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
  modules by path ./src/ 1.45 KiB (javascript) 9.88 KiB (asset)
    ./src/index.js + 1 modules 794 bytes [built] [code generated]
    ./src/icon.png 42 bytes (javascript) 9.88 KiB (asset) [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/style.css 648 bytes [built] [code generated]
webpack 5.x.x compiled successfully in 1972 ms
```

If everything worked, you should see your icon as a repeating background and an `img` element next to the `Hello webpack` text. Inspect that element and you'll notice the filename has changed to something like `29822eaa871e8eadeaa4.png`, which means webpack found the file in the `src` folder and processed it.

## Loading Fonts

What about other assets like fonts? Asset Modules output any file you load through them to your build directory, so they work for any kind of file, fonts included. Let's update `webpack.config.js` to handle font files:

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
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
+      {
+        test: /\.(woff|woff2|eot|ttf|otf)$/i,
+        type: 'asset/resource',
+      },
     ],
   },
 };
```

Add some font files to your project:

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
   ├── webpack.config.js
   ├── /dist
   │   ├── bundle.js
   │   └── index.html
   ├── /src
+  │   ├── my-font.woff
+  │   ├── my-font.woff2
   │   ├── icon.png
   │   ├── style.css
   │   └── index.js
   └── /node_modules
```

With the loader configured and the fonts in place, you can reference them through an `@font-face` declaration. webpack picks up the local `url(...)` directive just as it did with the image:

```diff displayName="src/style.css"
+@font-face {
+  font-family: 'MyFont';
+  src: url('./my-font.woff2') format('woff2'),
+    url('./my-font.woff') format('woff');
+  font-weight: 600;
+  font-style: normal;
+}
+
 .hello {
   color: red;
+  font-family: 'MyFont';
   background: url('./icon.png');
 }
```

Run a new build and see whether webpack handled the fonts:

```bash
$ npm run build

...
[webpack-cli] Compilation finished
assets by status 9.88 KiB [cached] 1 asset
assets by info 33.2 KiB [immutable]
  asset 55055dbfc7c6a83f60ba.woff 18.8 KiB [emitted] [immutable] [from: src/my-font.woff] (auxiliary name: main)
  asset 8f717b802eaab4d7fb94.woff2 14.5 KiB [emitted] [immutable] [from: src/my-font.woff2] (auxiliary name: main)
asset bundle.js 73.7 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1.82 KiB 6 modules
orphan modules 326 bytes [orphan] 1 module
cacheable modules 541 KiB (javascript) 43.1 KiB (asset)
  javascript modules 541 KiB
    modules by path ./node_modules/ 539 KiB
      modules by path ./node_modules/css-loader/dist/runtime/*.js 2.38 KiB 2 modules
      ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
      ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    modules by path ./src/ 1.98 KiB
      ./src/index.js + 1 modules 794 bytes [built] [code generated]
      ./node_modules/css-loader/dist/cjs.js!./src/style.css 1.21 KiB [built] [code generated]
  asset modules 126 bytes (javascript) 43.1 KiB (asset)
    ./src/icon.png 42 bytes (javascript) 9.88 KiB (asset) [built] [code generated]
    ./src/my-font.woff2 42 bytes (javascript) 14.5 KiB (asset) [built] [code generated]
    ./src/my-font.woff 42 bytes (javascript) 18.8 KiB (asset) [built] [code generated]
webpack 5.x.x compiled successfully in 2142 ms
```

Open `dist/index.html` again and check whether the `Hello webpack` text now uses the new font. If everything went well, you should see the change.

## Loading Data

Another useful kind of asset is data, such as JSON, CSV, TSV, and XML files. JSON support is built in, much like in Node.js, so `import Data from './data.json'` works out of the box. For CSV, TSV, and XML, you can use the [csv-loader](https://github.com/theplatapi/csv-loader) and [xml-loader](https://github.com/gisikw/xml-loader). Let's set up all three:

```bash
npm install --save-dev csv-loader xml-loader
```

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
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
+      {
+        test: /\.(csv|tsv)$/i,
+        use: ['csv-loader'],
+      },
+      {
+        test: /\.xml$/i,
+        use: ['xml-loader'],
+      },
     ],
   },
 };
```

Add some data files to your project:

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
   ├── webpack.config.js
   ├── /dist
   │   ├── bundle.js
   │   └── index.html
   ├── /src
+  │   ├── data.xml
+  │   ├── data.csv
   │   ├── my-font.woff
   │   ├── my-font.woff2
   │   ├── icon.png
   │   ├── style.css
   │   └── index.js
   └── /node_modules
```

```xml displayName="src/data.xml"
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mary</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Call Cindy on Tuesday</body>
</note>
```

```csv displayName="src/data.csv"
to,from,heading,body
Mary,John,Reminder,Call Cindy on Tuesday
Zoe,Bill,Reminder,Buy orange juice
Autumn,Lindsey,Letter,I miss you
```

You can now `import` any of these four data types (JSON, CSV, TSV, XML), and the `Data` variable you import will hold parsed JSON ready for use:

```diff displayName="src/index.js"
 import _ from 'lodash';
 import './style.css';
 import Icon from './icon.png';
+import Data from './data.xml';
+import Notes from './data.csv';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

+  console.log(Data);
+  console.log(Notes);
+
   return element;
 }

 document.body.appendChild(component());
```

Re-run `npm run build` and open `dist/index.html`. Check the console in your developer tools, and you should see your imported data logged there.

> [!TIP]
> This is especially handy when building a data visualization with a tool like [d3](https://github.com/d3). Instead of making an Ajax request and parsing the data at runtime, you can load it into your module during the build so the parsed data is ready the moment the module reaches the browser.

> [!WARNING]
> Only the default export of JSON modules can be used without a warning.

```js
// No warning
import data from './data.json';
```

```js
// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';
```

### Customize parser of JSON modules

You can import `toml`, `yaml`, or `json5` files as JSON modules by supplying a [custom parser](#TODO[/configuration/module/#ruleparserparse]) instead of a dedicated webpack loader.

Suppose you have `data.toml`, `data.yaml`, and `data.json5` files in the `src` folder:

```toml displayName="src/data.toml"
title = "TOML Example"

[owner]
name = "Tom Preston-Werner"
organization = "GitHub"
bio = "GitHub Cofounder & CEO\nLikes tater tots and beer."
dob = 1979-05-27T07:32:00Z
```

```yaml displayName="src/data.yaml"
title: YAML Example
owner:
  name: Tom Preston-Werner
  organization: GitHub
  bio: |-
    GitHub Cofounder & CEO
    Likes tater tots and beer.
  dob: 1979-05-27T07:32:00.000Z
```

```json5 displayName="src/data.json5"
{
  // comment
  title: 'JSON5 Example',
  owner: {
    name: 'Tom Preston-Werner',
    organization: 'GitHub',
    bio: 'GitHub Cofounder & CEO\n\
Likes tater tots and beer.',
    dob: '1979-05-27T07:32:00.000Z',
  },
}
```

First install the `toml`, `yamljs`, and `json5` packages:

```bash
npm install toml yamljs json5 --save-dev
```

Then configure them in your webpack configuration:

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
+import toml from 'toml';
+import yaml from 'yamljs';
+import json5 from 'json5';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/i,
         type: 'asset/resource',
       },
       {
         test: /\.(csv|tsv)$/i,
         use: ['csv-loader'],
       },
       {
         test: /\.xml$/i,
         use: ['xml-loader'],
       },
+      {
+        test: /\.toml$/i,
+        type: 'json',
+        parser: {
+          parse: toml.parse,
+        },
+      },
+      {
+        test: /\.yaml$/i,
+        type: 'json',
+        parser: {
+          parse: yaml.parse,
+        },
+      },
+      {
+        test: /\.json5$/i,
+        type: 'json',
+        parser: {
+          parse: json5.parse,
+        },
+      },
     ],
   },
 };
```

```diff displayName="src/index.js"
 import _ from 'lodash';
 import './style.css';
 import Icon from './icon.png';
 import Data from './data.xml';
 import Notes from './data.csv';
+import toml from './data.toml';
+import yaml from './data.yaml';
+import json from './data.json5';
+
+console.log(toml.title); // output `TOML Example`
+console.log(toml.owner.name); // output `Tom Preston-Werner`
+
+console.log(yaml.title); // output `YAML Example`
+console.log(yaml.owner.name); // output `Tom Preston-Werner`
+
+console.log(json.title); // output `JSON5 Example`
+console.log(json.owner.name); // output `Tom Preston-Werner`

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

   console.log(Data);
   console.log(Notes);

   return element;
 }

 document.body.appendChild(component());
```

Re-run `npm run build` and open `dist/index.html`. You should see your imported data logged to the console.

## Global Assets

The best part of everything described above is that loading assets this way lets you group modules and assets in a more intuitive manner. Instead of keeping a single global `/assets` directory that holds everything, you can colocate assets with the code that uses them. For example, a structure like this can be helpful:

```diff
- ├── /assets
+ └── /components
+     └── /my-component
+         ├── index.jsx
+         ├── index.css
+         ├── icon.svg
+         └── img.png
```

This makes your code far more portable, since everything tightly coupled now lives together. If you want to use `/my-component` in another project, just copy or move it into that project's `/components` directory. As long as you've installed any _external dependencies_ and your _configuration defines the same loaders_, it should work.

That said, if you prefer your old habits or you have assets shared across multiple components (views, templates, modules, and so on), you can still keep them in a base directory and use [aliasing](#TODO[/configuration/resolve/#resolvealias]) to make them easier to `import`.

## Wrapping up

The next guides won't use all the assets we've added here, so let's clean up to get ready for the next part, [Output Management](https://webpack.js.org/guides/output-management/):

```diff displayName="project"
  webpack-demo
   ├── package.json
   ├── package-lock.json
   ├── webpack.config.js
   ├── /dist
   │   ├── bundle.js
   │   └── index.html
   ├── /src
-  │   ├── data.csv
-  │   ├── data.json5
-  │   ├── data.toml
-  │   ├── data.xml
-  │   ├── data.yaml
-  │   ├── icon.png
-  │   ├── my-font.woff
-  │   ├── my-font.woff2
-  │   ├── style.css
   │   └── index.js
   └── /node_modules
```

```diff displayName="webpack.config.js"
 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
-import toml from 'toml';
-import yaml from 'yamljs';
-import json5 from 'json5';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
-  module: {
-    rules: [
-      {
-        test: /\.css$/i,
-        use: ['style-loader', 'css-loader'],
-      },
-      {
-        test: /\.(png|svg|jpg|jpeg|gif)$/i,
-        type: 'asset/resource',
-      },
-      {
-        test: /\.(woff|woff2|eot|ttf|otf)$/i,
-        type: 'asset/resource',
-      },
-      {
-        test: /\.(csv|tsv)$/i,
-        use: ['csv-loader'],
-      },
-      {
-        test: /\.xml$/i,
-        use: ['xml-loader'],
-      },
-      {
-        test: /\.toml$/i,
-        type: 'json',
-        parser: {
-          parse: toml.parse,
-        },
-      },
-      {
-        test: /\.yaml$/i,
-        type: 'json',
-        parser: {
-          parse: yaml.parse,
-        },
-      },
-      {
-        test: /\.json5$/i,
-        type: 'json',
-        parser: {
-          parse: json5.parse,
-        },
-      },
-    ],
-  },
 };
```

```diff displayName="src/index.js"
 import _ from 'lodash';
-import './style.css';
-import Icon from './icon.png';
-import Data from './data.xml';
-import Notes from './data.csv';
-import toml from './data.toml';
-import yaml from './data.yaml';
-import json from './data.json5';
-
-console.log(toml.title); // output `TOML Example`
-console.log(toml.owner.name); // output `Tom Preston-Werner`
-
-console.log(yaml.title); // output `YAML Example`
-console.log(yaml.owner.name); // output `Tom Preston-Werner`
-
-console.log(json.title); // output `JSON5 Example`
-console.log(json.owner.name); // output `Tom Preston-Werner`

 function component() {
   const element = document.createElement('div');

-  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
-  element.classList.add('hello');
-
-  // Add the image to our existing div.
-  const myIcon = new Image();
-  myIcon.src = Icon;
-
-  element.appendChild(myIcon);
-
-  console.log(Data);
-  console.log(Notes);

   return element;
 }

 document.body.appendChild(component());
```

Finally, remove the dependencies we added earlier:

```bash
npm uninstall css-loader csv-loader json5 style-loader toml xml-loader yamljs
```

## Next guide

Let's move on to [Output Management](https://webpack.js.org/guides/output-management/).

## Further Reading

- [Loading Fonts](https://survivejs.com/webpack/loading/fonts/) on SurviveJS
