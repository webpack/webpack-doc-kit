import classNames from 'classnames';

import useCarbonAd, { adColors } from '../../hooks/useCarbonAd.mjs';

import styles from './index.module.css';

/**
 * Carbon ad card for the docs sidebar. It is rendered inside the sidebar
 * island, so it needs no island of its own. The sidebar collapses to a select
 * on small screens, where no ad is requested.
 */
export default function SideBarAd() {
  const { ad, ref } = useCarbonAd('CWBI6K77', '(min-width: 56rem)');

  if (!ad) return null;

  return (
    <aside
      ref={ref}
      className={styles.sideBar}
      style={adColors(ad)}
      aria-label="Advertisement"
    >
      <a
        href={ad.statlink}
        target="_blank"
        rel="sponsored noopener"
        className={styles.sideBarLink}
      >
        <img src={ad.largeImage} alt={ad.company} className={styles.image} />
        <span className={styles.sideBarBody}>
          <strong className={styles.title}>{ad.title}</strong>
          <span>{ad.description}</span>
          <span className={styles.sideBarCta}>{ad.callToAction}</span>
        </span>
      </a>
      <a
        href={ad.ad_via_link}
        className={classNames(styles.badge, styles.overlay)}
      >
        Ad
      </a>
    </aside>
  );
}
