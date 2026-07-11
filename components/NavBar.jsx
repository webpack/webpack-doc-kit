import ThemeToggle from '@node-core/ui-components/Common/ThemeToggle';
import NavBar from '@node-core/ui-components/Containers/NavBar';
import styles from '@node-core/ui-components/Containers/NavBar/index.module.css';
import GitHubIcon from '@node-core/ui-components/Icons/Social/GitHub';

import SearchBox from '@node-core/doc-kit/src/generators/web/ui/components/SearchBox';
import { useTheme } from '@node-core/doc-kit/src/generators/web/ui/hooks/useTheme.mjs';
import { navbar } from '#theme/site';
import { baseURL } from '#theme/config';
import { toPublicLink } from '../utils/helpers/urls.mjs';
import Logo from '#theme/Logo';

const versionBase = new URL(baseURL).pathname;

/**
 * NavBar component that displays the headings, search, etc.
 */
export default ({ metadata }) => {
  const [themePreference, setThemePreference] = useTheme();

  return (
    <NavBar
      Logo={Logo}
      sidebarItemTogglerAriaLabel="Toggle navigation menu"
      navItems={navbar}
      pathname={toPublicLink(metadata.path, versionBase)}
    >
      <SearchBox pathname={metadata.path} />
      <ThemeToggle
        onChange={setThemePreference}
        currentTheme={themePreference}
      />
      <a
        href="https://github.com/webpack/webpack"
        className={styles.ghIconWrapper}
      >
        <GitHubIcon />
      </a>
    </NavBar>
  );
};
