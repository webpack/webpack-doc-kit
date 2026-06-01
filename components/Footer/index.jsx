import GitHubIcon from '@node-core/ui-components/Icons/Social/GitHub';
import LinkedInIcon from '@node-core/ui-components/Icons/Social/LinkedIn';
import DiscordIcon from '@node-core/ui-components/Icons/Social/Discord';
import XIcon from '@node-core/ui-components/Icons/Social/X';
import { footer } from '#theme/site' with { type: 'json' };

import Logo from '#theme/Logo';
import styles from './index.module.css';

const SOCIAL_ICONS = {
  GitHub: GitHubIcon,
  X: XIcon,
  Discord: DiscordIcon,
  LinkedIn: LinkedInIcon,
};

/**
 * Site-wide footer with brand description, navigation columns,
 * and social links.
 */
export default () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="webpack home">
            <Logo />
            <span className={styles.wordmark}>webpack</span>
          </a>
          <p className={styles.tagline}>
            A static module bundler for modern JavaScript applications.
            Maintained by the open-source community since 2012.
          </p>
        </div>

        {footer.groups.map(section => (
          <nav
            key={section.title}
            className={styles.section}
            aria-label={section.title}
          >
            <h2 className={styles.heading}>{section.title}</h2>
            <ul className={styles.list}>
              {section.links.map(({ text, link }) => (
                <li key={text}>
                  <a href={link} className={styles.link}>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={styles.bottom}>
        <p className={styles.legal}>
          &copy; <a href="https://openjsf.org">OpenJS Foundation</a> and webpack
          contributors. All rights reserved. The{' '}
          <a href="https://openjsf.org">OpenJS Foundation</a> has registered
          trademarks and uses trademarks. For a list of trademarks of the{' '}
          <a href="https://openjsf.org">OpenJS Foundation</a>, please see our{' '}
          <a href="https://trademark-policy.openjsf.org">Trademark Policy</a>{' '}
          and <a href="https://trademark-list.openjsf.org">Trademark List</a>.
          Trademarks and logos not indicated on the{' '}
          <a href="https://trademark-list.openjsf.org">
            list of OpenJS Foundation trademarks
          </a>{' '}
          are trademarks&trade; or registered&reg; trademarks of their
          respective holders. Use of them does not imply any affiliation with or
          endorsement by them.
        </p>
        <ul className={styles.social}>
          {footer.socialLinks.map(({ label, link }) => {
            const Icon = SOCIAL_ICONS[label];

            return (
              <li key={label}>
                <a
                  href={link}
                  className={styles.socialLink}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon width={20} height={20} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </footer>
);
