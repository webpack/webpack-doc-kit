import Select from '@node-core/ui-components/Common/Select';
import SideBar from '@node-core/ui-components/Containers/Sidebar';
import { major } from 'semver';
import { sidebar } from '#theme/local/site';
import { version } from '#theme/config';
import versions from '../versions.json' with { type: 'json' };

/** @param {string} url */
const redirect = url => (window.location.href = url);

const PrefetchLink = props => <a {...props} rel="prefetch" />;

// The versioned API docs pass `sidebar` as an array of groups; the main site keys it by section.
const isVersioned = Array.isArray(sidebar);

// Versioned pages expose a version relative path, we prefix it so it matches the absolute sidebar links.
const versionBase = isVersioned ? `/docs/api/v${version.major}.x` : '';

const pathnameFor = path => {
  const clean = path.replace(/\/index$/, '').replace(/^\//, '');
  return (clean ? `${versionBase}/${clean}` : versionBase) || '/';
};

const groupsFor = path => {
  if (isVersioned) return sidebar;

  const segment = path.split('/').filter(Boolean)[0];
  return sidebar[segment] ?? [];
};

const versionItems = versions.map(version => ({
  value: `/docs/api/v${major(version)}.x`,
  label: `v${major(version)}.x`,
}));

// Preselect the picker with the version this API build was generated for.
const currentVersion = isVersioned ? versionBase : undefined;

/** Docs sidebar, plus a webpack version picker on the versioned API docs. */
export default ({ metadata }) => (
  <SideBar
    pathname={pathnameFor(metadata.path)}
    groups={groupsFor(metadata.path)}
    onSelect={redirect}
    as={PrefetchLink}
    title="Navigation"
  >
    {isVersioned && (
      <div>
        <Select
          label="webpack version"
          values={versionItems}
          value={currentVersion}
          inline
          onChange={redirect}
        />
      </div>
    )}
  </SideBar>
);
