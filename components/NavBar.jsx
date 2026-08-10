import ThemeToggle from '@node-core/ui-components/Common/ThemeToggle';
import NavBar from '@node-core/ui-components/Containers/NavBar';
import styles from '@node-core/ui-components/Containers/NavBar/index.module.css';
import GitHubIcon from '@node-core/ui-components/Icons/Social/GitHub';

import { navbar } from '#theme/site';
import { baseURL } from '#theme/config';
import { toPublicLink } from '../utils/helpers/urls.mjs';
import Logo from '#theme/Logo';

// TODO(avivkeller): Give these components proper exports
import SearchBox from '../node_modules/@doc-kit/generator-react/src/html/ui/components/SearchBox';
import { useTheme } from '../node_modules/@doc-kit/generator-react/src/html/ui/hooks/useTheme.mjs';

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
        ariaLabel="Toggle color theme"
      />
      <a
        href="https://github.com/webpack/webpack"
        className={styles.ghIconWrapper}
        aria-label="webpack on GitHub"
      >
        <GitHubIcon />
      </a>
    </NavBar>
  );
};
