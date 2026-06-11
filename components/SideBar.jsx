import SideBar from '@node-core/ui-components/Containers/Sidebar';
import { sidebar } from '#theme/local/site';

/** @param {string} url */
const redirect = url => (window.location.href = url);

const PrefetchLink = props => <a {...props} rel="prefetch" />;

const pathnameFor = path => {
  const clean = path.replace(/\/index$/, '');
  if (!clean) return '/';
  return clean.startsWith('/') ? clean : `/${clean}`;
};

const groupsFor = path => {
  if (Array.isArray(sidebar)) return sidebar;

  const segment = path.split('/').filter(Boolean)[0];
  return sidebar[segment] ?? [];
};

/**
 * Sidebar component for MDX documentation with page navigation.
 */
export default ({ metadata }) => (
  <SideBar
    pathname={pathnameFor(metadata.path)}
    groups={groupsFor(metadata.path)}
    onSelect={redirect}
    as={PrefetchLink}
    title="Navigation"
  />
);
