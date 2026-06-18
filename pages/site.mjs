import loaders from './docs/loaders/site.json' with { type: 'json' };
import plugins from './docs/plugins/site.json' with { type: 'json' };
import governance from './about/governance/site.json' with { type: 'json' };
import guides from './guides/site.json' with { type: 'json' };
import versions from '../versions.json' with { type: 'json' };
import { major } from 'semver';

export * from './site.json' with { type: 'json' };

export const sidebar = {
  about: [
    {
      groupName: 'Get Involved',
      items: [
        { link: '/about/branding', label: 'Branding' },
        { link: '/about/sponsors', label: 'Sponsors' },
        {
          link: 'https://github.com/webpack/webpack/blob/main/CONTRIBUTING.md',
          label: 'Contribute',
        },
      ],
    },
    ...governance.sidebar,
  ],
  docs: [
    {
      groupName: 'Main Packages',
      items: [
        {
          label: 'webpack',
          items: versions.map(v => ({
            label: `webpack ${v}`,
            link: `/docs/api/v${major(v)}.x`,
          })),
        },
      ],
    },
    ...loaders.sidebar,
    ...plugins.sidebar,
  ],
  guides: guides.sidebar,
};
