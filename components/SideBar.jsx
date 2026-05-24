import SideBar from '@node-core/ui-components/Containers/Sidebar';
import { sidebar } from '#theme/site' with { type: 'json' };

/** @param {string} url */
const redirect = url => (window.location.href = url);

const PrefetchLink = props => <a {...props} rel="prefetch" />;

const pathnameFor = path => path.replace(/\/index$/, '') || '/';

/**
 * Sidebar component for MDX documentation with page navigation.
 */
export default ({ metadata }) => (
  <SideBar
    pathname={pathnameFor(metadata.path)}
    groups={sidebar}
    onSelect={redirect}
    as={PrefetchLink}
    title="Navigation"
  />
);
