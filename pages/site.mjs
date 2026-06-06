import base from './site.json' with { type: 'json' };
import loadersSite from './loaders/site.json' with { type: 'json' };
import pluginsSite from './plugins/site.json' with { type: 'json' };

export const { navbar, footer } = base;

export const sidebar = [...loadersSite.sidebar, ...pluginsSite.sidebar];
