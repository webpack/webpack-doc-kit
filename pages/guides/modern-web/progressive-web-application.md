---
authors: johnnyreilly,chenxsan,EugeneHlushko,benschac,aholzner,avivkeller
---

# Progressive Web Application

> [!TIP]
> This guide builds on the code examples from the [Output Management](/guides/core-workflows/output-management) guide.

Progressive Web Applications (PWAs) are web apps that deliver an experience similar to native applications. Many things can contribute to this, but the most significant is an app's ability to function while **offline**. This is achieved with a web technology called [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers/).

This section focuses on adding an offline experience to our app. We'll do that with a Google project called [Workbox](https://github.com/GoogleChrome/workbox), which provides tools that make offline support easier to set up.

## We don't work offline now

So far, we've viewed our output by going directly to the local filesystem. In reality, though, a user accesses a web app over a network: their browser talks to a **server** that serves up the required assets (for example, `.html`, `.js`, and `.css` files).

Let's test the current experience using a server with more basic features. We'll use the [http-server](https://www.npmjs.com/package/http-server) package: run `npm install http-server --save-dev`. We'll also add a `start` script to the `scripts` section of our `package.json`:

```diff displayName="package.json"
{
  ...
  "scripts": {
-    "build": "webpack"
+    "build": "webpack",
+    "start": "http-server dist"
  },
  ...
}
```

Note: the [webpack DevServer](#TODO[/configuration/dev-server/]) writes to memory by default. We'll need to enable the [`devServer.devMiddleware.writeToDisk`](#TODO[/configuration/dev-server/#devserverdevmiddleware]) option so that http-server can serve files from the `./dist` directory.

If you haven't already, run `npm run build` to build your project. Then run `npm start`. This should produce output like the following:

```bash
> http-server dist

Starting up http-server, serving dist
Available on:
  http://xx.x.x.x:8080
  http://127.0.0.1:8080
  http://xxx.xxx.x.x:8080
Hit CTRL-C to stop the server
```

Open your browser to `http://localhost:8080` (that is, `http://127.0.0.1`) and you should see your webpack application served from the `dist` directory. If you stop the server and refresh, the application is no longer available.

This is what we want to change. By the end of this module, we should be able to stop the server, refresh, and still see our application.

## Adding Workbox

Let's add the Workbox webpack plugin and adjust `webpack.config.js`:

```bash
npm install workbox-webpack-plugin --save-dev
```

```diff displayName="webpack.config.js"
  import path from "node:path";
  import { fileURLToPath } from 'node:url';
  import HtmlWebpackPlugin from "html-webpack-plugin";
+ import WorkboxPlugin from "workbox-webpack-plugin";

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

  export default {
    entry: {
      app: './src/index.js',
      print: './src/print.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
-       title: 'Output Management',
+       title: 'Progressive Web Application',
      }),
+     new WorkboxPlugin.GenerateSW({
+       // these options encourage the ServiceWorkers to get in there fast
+       // and not allow any straggling "old" SWs to hang around
+       clientsClaim: true,
+       skipWaiting: true,
+     }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```

With that in place, let's see what happens when we run `npm run build`:

```bash
...
                  Asset       Size  Chunks                    Chunk Names
          app.bundle.js     545 kB    0, 1  [emitted]  [big]  app
        print.bundle.js    2.74 kB       1  [emitted]         print
             index.html  254 bytes          [emitted]
precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js  268 bytes          [emitted]
      service-worker.js       1 kB          [emitted]
...
```

As you can see, we now have two extra files: `service-worker.js` and the more verbose `precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js`. `service-worker.js` is the Service Worker file, and `precache-manifest.b5ca1c555e832d6fbf9462efd29d27eb.js` is a file that `service-worker.js` requires in order to run. Your own generated files will likely differ, but you should have a `service-worker.js` file.

We've now reached the happy point of having produced a Service Worker. What's next?

## Registering our Service Worker

Let's let our Service Worker come out and play by registering it. We'll do that by adding the registration code below:

```diff displayName="index.js"
  import _ from 'lodash';
  import printMe from './print.js';

+ if ('serviceWorker' in navigator) {
+   window.addEventListener('load', () => {
+     navigator.serviceWorker.register('/service-worker.js').then(registration => {
+       console.log('SW registered: ', registration);
+     }).catch(registrationError => {
+       console.log('SW registration failed: ', registrationError);
+     });
+   });
+ }
```

Run `npm run build` once more to build a version of the app that includes the registration code. Then serve it with `npm start`. Navigate to `http://localhost:8080` and look at the console. Somewhere in there you should see:

```bash
SW registered
```

Now to test it: stop your server and refresh your page. If your browser supports Service Workers, you should still be looking at your application. This time, however, it has been served by your Service Worker and **not** by the server.

## Conclusion

You've built an offline app using the Workbox project, beginning the journey of turning your web app into a PWA. You may now want to take things further. A good resource to help you do that can be found [here](https://web.dev/progressive-web-apps/).
