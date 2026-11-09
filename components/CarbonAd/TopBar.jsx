import { useState } from 'react';
import { X } from 'lucide-preact';

import useCarbonAd, { adColors } from '../../hooks/useCarbonAd.mjs';
import withIsland from '../../node_modules/@doc-kit/generator-react/src/html/ui/islands/withIsland.jsx';

import styles from './index.module.css';

const DISMISSED_KEY = 'top-bar-ad-dismissed';

/** @param {{ onClose: () => void }} props */
const Ad = ({ onClose }) => {
  const { ad, ref } = useCarbonAd('CWBI623E');

  if (!ad) return null;

  return (
    <aside
      ref={ref}
      className={styles.topBar}
      style={adColors(ad)}
      aria-label="Advertisement"
    >
      <a
        href={ad.statlink}
        target="_blank"
        rel="sponsored noopener"
        className={styles.topBarLink}
      >
        <img src={ad.image} alt={ad.company} className={styles.logo} />
        <span>{ad.description}</span>
        <span className={styles.cta}>{ad.callToAction}</span>
      </a>
      <a href={ad.ad_via_link} className={styles.badge}>
        Ad
      </a>
      <button
        type="button"
        onClick={onClose}
        className={styles.close}
        aria-label="Close advertisement"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </aside>
  );
};

/**
 * Full-width Carbon ad shown under the navigation bar. Closing it hides it for
 * the rest of the visit, without requesting (and so counting) another ad.
 */
const TopBarAd = () => {
  // There is no storage while rendering on the server
  const [dismissed, setDismissed] = useState(
    () => globalThis.sessionStorage?.getItem(DISMISSED_KEY) === 'true'
  );

  if (dismissed) return null;

  return (
    <Ad
      onClose={() => {
        sessionStorage.setItem(DISMISSED_KEY, 'true');
        setDismissed(true);
      }}
    />
  );
};

export default withIsland(TopBarAd, { name: 'TopBarAd', on: { idle: true } });
