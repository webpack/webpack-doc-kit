---
authors: SpaceK33z,chrisVillanueva,byzyk,wizardofhogwarts,Brennvo,avivkeller
---

# Development with Vagrant

If you have a more advanced project that uses [Vagrant](https://www.vagrantup.com/) to run your development environment inside a virtual machine, you'll usually want to run webpack inside that VM as well. This guide walks through configuring the project, serving it, and optionally proxying it through nginx.

## Configuring the project

First, make sure your `Vagrantfile` assigns a static IP:

```ruby
Vagrant.configure("2") do |config|
  config.vm.network :private_network, ip: "10.10.10.61"
end
```

Next, install `webpack`, `webpack-cli`, `@webpack-cli/serve`, and `webpack-dev-server` in your project:

```bash
npm install --save-dev webpack webpack-cli @webpack-cli/serve webpack-dev-server
```

You'll also need a `webpack.config.js` file. If you don't have one yet, this minimal example is enough to get started:

```js displayName="webpack.config.js"
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  context: __dirname,
  entry: './app.js',
};
```

Then create an `index.html` file whose script tag points to your bundle. When `output.filename` isn't set in the config, the bundle defaults to `bundle.js`:

```html displayName="index.html"
<!DOCTYPE html>
<html>
  <head>
    <script src="/bundle.js" charset="utf-8"></script>
  </head>
  <body>
    <h2>Hey!</h2>
  </body>
</html>
```

Remember to create an `app.js` file too, since that's the entry point referenced in the config.

## Running the server

Now start the server:

```bash
webpack serve --host 0.0.0.0 --client-web-socket-url ws://10.10.10.61:8080/ws --watch-options-poll
```

By default the server is only reachable from localhost. Since we want to reach it from the host machine, we set `--host` to `0.0.0.0` to allow that.

`webpack-dev-server` injects a script into your bundle that opens a WebSocket connection and triggers a reload whenever one of your files changes. The `--client-web-socket-url` flag tells that script where to find the WebSocket. Because the server listens on port `8080` by default, we specify that here as well.

`--watch-options-poll` ensures that webpack can detect file changes. By default, webpack relies on events emitted by the filesystem, but VirtualBox has many problems delivering those events.

The server should now be available at `http://10.10.10.61:8080`. Making a change in `app.js` should trigger a live reload.

## Advanced usage with nginx

To more closely mirror a production environment, you can proxy `webpack-dev-server` through nginx.

Add the following to your nginx configuration file:

```nginx
server {
  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    error_page 502 @start-webpack-dev-server;
  }

  location @start-webpack-dev-server {
    default_type text/plain;
    return 502 "Please start the webpack-dev-server first.";
  }
}
```

The `proxy_set_header` lines are important, as they allow the WebSocket connection to work correctly.

You can then change the command that starts `webpack-dev-server` to:

```bash
webpack serve --client-web-socket-url ws://10.10.10.61:8080/ws --watch-options-poll
```

This keeps the server accessible only on `127.0.0.1`, which is fine because nginx is responsible for exposing it to your host machine.

## Conclusion

We gave the Vagrant box a static IP, then made `webpack-dev-server` publicly accessible so it can be reached from a browser. Along the way we worked around a common issue where VirtualBox doesn't emit filesystem events, which would otherwise prevent the server from reloading on file changes.
