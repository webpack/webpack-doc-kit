import SideBar from '@node-core/ui-components/Containers/Sidebar';
import { sidebar } from '#theme/local/site';

/** @param {string} url */
const redirect = url => (window.location.href = url);

const PrefetchLink = props => <a {...props} rel="prefetch" />;

const pathnameFor = path => path.replace(/\/index$/, '') || '/';

const groupsFor = path => {
  const segment = path.split('/').filter(Boolean)[0];
  const matched = sidebar.filter(g => g.groupName.toLowerCase() === segment);
  return matched.length > 0 ? matched : sidebar;
};

/**
 * Sidebar component for MDX documentation with page navigation.
 */
export default ({ metadata }) => {
  const path = pathnameFor(metadata.path);
  return (
    <SideBar
      pathname={path}
      groups={groupsFor(path)}
      onSelect={redirect}
      as={PrefetchLink}
      title="Navigation"
    />
  );
};
