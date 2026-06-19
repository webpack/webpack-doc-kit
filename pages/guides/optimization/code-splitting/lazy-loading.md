---
authors: iammerrick,chrisVillanueva,skipjack,byzyk,EugeneHlushko,AnayaDesign,tapanprakasht,snitin315,ThierryRakotomanana,avivkeller
---

# Lazy Loading

> [!TIP]
> This guide is a short follow-up to [Code Splitting](/guides/optimization/code-splitting). If you haven't read through that guide yet, please do so now.

Lazy, or "on demand", loading is a great way to optimize your site or application. The practice essentially involves splitting your code at logical breakpoints and then loading a block of code once the user does something that requires it (or will soon require it). This speeds up the initial load of the application and lightens its overall weight, since some blocks may never be loaded at all.

## Dynamic import example

Let's take the example from [Code Splitting](/guides/optimization/code-splitting/#dynamic-imports) and tweak it to demonstrate this concept more clearly. The code there does cause a separate chunk, `lodash.bundle.js`, to be generated and technically "lazy-loads" it as soon as the script runs. The trouble is that no user interaction is required to load the bundle, which means the request fires every time the page loads. That doesn't help us much and negatively impacts performance.

Let's try something different. We'll add an interaction that logs some text to the console when the user clicks a button. However, we'll wait to load that code (`print.js`) until the interaction occurs for the first time. To do this, we'll go back and rework the [final _Dynamic Imports_ example](/guides/optimization/code-splitting/#dynamic-imports) from _Code Splitting_, leaving `lodash` in the main chunk.

```diff displayName="project"
webpack-demo
 ├── package.json
 ├── package-lock.json
 ├── webpack.config.js
 ├── /dist
 ├── /src
 │   ├── index.js
+│   └── print.js
 └── /node_modules
```

```js displayName="src/print.js"
console.log(
  'The print.js module has loaded! See the network tab in dev tools...'
);

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
};
```

```diff displayName="src/index.js"
+ import _ from 'lodash';
+
- async function getComponent() {
+ function component() {
    const element = document.createElement('div');
-   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
+   const button = document.createElement('button');
+   const br = document.createElement('br');

+   button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.appendChild(br);
+   element.appendChild(button);
+
+   // Note that because a network request is involved, some indication
+   // of loading would need to be shown in a production-level site/app.
+   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
+     const print = module.default;
+
+     print();
+   });

    return element;
  }

- getComponent().then(component => {
-   document.body.appendChild(component);
- });
+ document.body.appendChild(component());
```

> [!WARNING]
> Note that when using `import()` on ES6 modules, you must reference the `.default` property, as it is the actual `module` object returned when the promise resolves.

Now let's run webpack and check out our new lazy-loading functionality:

```bash
...
          Asset       Size  Chunks                    Chunk Names
print.bundle.js  417 bytes       0  [emitted]         print
index.bundle.js     548 kB       1  [emitted]  [big]  index
     index.html  189 bytes          [emitted]
...
```

## Defer import example

> [!WARNING]
> This feature does not lazily "load" a module; it lazily "evaluates" one. The module is still downloaded and parsed, but its evaluation is deferred.

In some cases, it can be annoying or difficult to convert all uses of a module to asynchronous code, since doing so forces the unnecessary asyncification of all functions without providing a way to defer only the synchronous evaluation work.

The TC39 proposal [Deferring Module Evaluation](https://github.com/tc39/proposal-defer-import-eval) aims to solve this problem.

> The proposal is to have a new syntactical import form which will only ever return a namespace exotic object. When used, the module and its dependencies would not be executed, but would be fully loaded to the point of being execution-ready before the module graph is considered loaded.
>
> _Only when accessing a property of this module, would the execution operations be performed (if needed)._

This feature is available by enabling [experiments.deferImport](#TODO[/configuration/experiments/#experimentsdeferimport]).

> [!WARNING]
> This feature is still in the experimental stage and may change in future versions of webpack.

```diff displayName="project"
 webpack-demo
  ├── package.json
  ├── package-lock.json
  ├── webpack.config.js
  ├── /dist
  ├── /src
  │   ├── index.js
+ │   └── print.js
  └── /node_modules
```

```js displayName="src/print.js"
console.log(
  'The print.js module has loaded! See the network tab in dev tools...'
);

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
};
```

```diff displayName="src/index.js"
  import _ from 'lodash';
+ import defer * as print from './print';

  function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

-   // Note that because a network request is involved, some indication
-   // of loading would need to be shown in a production-level site/app.
+   // In this example, the print module is downloaded but not evaluated,
+   // so there is no network request involved after the button is clicked.
-   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
+   button.onclick = e => {
      const print = module.default;
+     //                  ^ The module is evaluated here.

      print();
-   });
+   };

    return element;
  }

  getComponent().then(component => {
    document.body.appendChild(component);
  });
  document.body.appendChild(component());
```

This is similar to the CommonJS style of lazy loading:

```diff displayName="src/index.js"
  import _ from 'lodash';
- import defer * as print from './print';

  function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // In this example, the print module is downloaded but not evaluated,
    // so there is no network request involved after the button is clicked.
    button.onclick = e => {
+     const print = require('./print');
+     //            ^ The module is evaluated here.
      const print = module.default;
-     //                  ^ The module is evaluated here.

      print();
    };

    return element;
  }

  getComponent().then(component => {
    document.body.appendChild(component);
  });
  document.body.appendChild(component());
```

### Using `import.defer()` with context modules

<!-- TODO: Badge text="5.105.0+" -->

`import.defer()` also works with context modules: the import path can be a dynamic expression. webpack includes all matching modules in the module graph, but evaluation of the selected module is deferred until a property on the namespace object is first accessed.

The following example demonstrates deferred evaluation of locale modules using a dynamic context path:

```js displayName="src/locales/en.js"
export const greeting = 'Hello';
```

```js displayName="src/locales/fr.js"
export const greeting = 'Bonjour';
```

```text displayName="src/index.js"
const language = navigator.language.split("-")[0]; // "en", "fr", etc.
const locale = import.defer("./locales/" + language + ".js");

document.getElementById("btn").addEventListener("click", () => {
  // The locale module is evaluated here, on first property access.
  document.getElementById("output").textContent = locale.greeting;
});
```

webpack prepares all matching locale modules so they are ready for execution, but the selected module is only evaluated when `locale.greeting` is first accessed. This lets you load multiple locale files without executing them immediately.

## Frameworks

Many frameworks and libraries have their own recommendations for accomplishing this within their methodologies. Here are a few examples:

- React: [Code Splitting and Lazy Loading](https://react.dev/learn/build-a-react-app-from-scratch#code-splitting)
- Vue: [Dynamic Imports in Vue.js for better performance](https://vuedose.tips/tips/dynamic-imports-in-vue-js-for-better-performance/)
- Angular: [Lazy Loading route configuration](https://angular.io/guide/router#milestone-6-asynchronous-routing) and [AngularJS + webpack = lazyLoad](https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd)

## Further reading

- [Lazy Loading ES2015 Modules in the Browser](https://dzone.com/articles/lazy-loading-es2015-modules-in-the-browser)
- [Asynchronous vs Deferred JavaScript](https://bitsofco.de/async-vs-defer/)
