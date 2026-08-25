---
title: Debugging
authors: skipjack,tbroadley,madhavarshney,bhavya9107,akaustav
---

# Debugging

When contributing to the core repo, writing a loader/plugin, or even working on a complex project, debugging tools can be central to your workflow. Whether the problem is slow performance on a large project or an unhelpful traceback, the following utilities can make figuring it out less painful.

- The [`Stats` API](/docs/api/stats/Stats) available through webpack's Node.js API and the [CLI](/docs/api/cli).
- Chrome **DevTools** and the latest Node.js version.

## Stats

Whether you inspect it manually or pass it to another tool, webpack's [`Stats` object](/docs/api/stats/Stats) can be extremely useful when debugging build issues. It can provide the following information:

- The contents of every module.
- The modules contained within every chunk.
- Per module compilation and resolving stats.
- Build errors and warnings.
- The relationships between modules.
- And much more...

On top of that, the official [analyze tool](https://github.com/webpack/analyse) and [various others](/guides/optimization/code-splitting/#bundle-analysis) will accept this data and visualize it in various ways.

## DevTools

While [`console`](https://nodejs.org/api/console.html) statements may work well in straightforward scenarios, sometimes a more robust solution is needed. As most front-end developers already know, Chrome DevTools are a life saver when debugging web applications, _but they don’t have to stop there_. As of Node v6.3.0+, developers can use the built-in `--inspect` flag to debug a node program in DevTools.

Let's start by invoking webpack with the `node --inspect`.

Note that we cannot run npm `scripts`, e.g. `npm run build`, so we'll have to specify the full `node_modules` path:

```bash
node --inspect ./node_modules/webpack/bin/webpack.js
```

Which should output something like:

```bash
Debugger listening on ws://127.0.0.1:9229/c624201a-250f-416e-a018-300bbec7be2c
For help see https://nodejs.org/en/docs/inspector
```

Now jump to `chrome://inspect` in the browser and you should see any active scripts you've inspected under the _Remote Target_ header. Click the "inspect" link under each script to open a dedicated debugger or the _Open dedicated DevTools for Node_ link for a session that will connect automatically. You can also check out the [NiM extension](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj), a handy Chrome plugin that will automatically open a DevTools tab every time you `--inspect` a script.

We recommend using the `--inspect-brk` flag which will break on the first statement of the script allowing you to go through the source to set breakpoints and start/stop the build as you please. Also, don't forget that you can still pass arguments to the script. For example, if you have multiple configuration files you could pass `--config webpack.prod.js` to specify the configuration you'd like to debug.
