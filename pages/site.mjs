import { sidebar as _sidebar } from './site.json' with { type: 'json' };
import loaders from './loaders/site.json' with { type: 'json' };
import plugins from './plugins/site.json' with { type: 'json' };
import contribute from './about/governance/site.json' with { type: 'json' };

export * from './site.json' with { type: 'json' };

export const sidebar = [
  ..._sidebar,
  {
    groupName: 'Loaders & Plugins',
    items: [...loaders.sidebar, ...plugins.sidebar],
  },
  {
    groupName: 'About',
    items: contribute.sidebar,
  },
];
