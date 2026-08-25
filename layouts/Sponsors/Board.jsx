import { useState } from 'react';

import BaseButton from '@node-core/ui-components/Common/BaseButton';

import SectionHeader from '../../components/SectionHeader/index.jsx';
import SponsorTier from '../../components/Sponsors/Tier/index.jsx';
import BackerWall from '../../components/Sponsors/BackerWall/index.jsx';
import SortToggle from '../../components/Sponsors/SortToggle/index.jsx';
import {
  OC_URL,
  TIERS,
  bucketSponsors,
} from '../../components/Sponsors/tiers.mjs';
import useSponsors from '../../hooks/useSponsors.mjs';

import styles from './index.module.css';

// TODO(avivkeller): Give these components proper exports
import withIsland from '../../node_modules/@doc-kit/generator-react/src/html/ui/islands/withIsland.jsx';

/**
 * Everything on the Sponsors page
 */
function SponsorBoard() {
  const [metric, setMetric] = useState('monthly');
  const data = useSponsors();

  const buckets = bucketSponsors(data.sponsors, metric);

  return (
    <>
      <section className={styles.sponsorsSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Our sponsors"
            title="The organizations supporting webpack"
          />
          <div className={styles.actions}>
            <BaseButton
              href={OC_URL}
              target="_blank"
              rel="noreferrer noopener"
              kind="primary"
            >
              View on Open Collective
            </BaseButton>
          </div>
          <div className={styles.toolbar}>
            <SortToggle value={metric} onChange={setMetric} />
          </div>
          <div className={styles.tiers}>
            {TIERS.map(tier => (
              <SponsorTier
                key={tier.tier}
                tier={tier.tier}
                label={tier.label}
                price={tier.price[metric]}
                cardSize={tier.cardSize}
                sponsors={buckets[tier.tier]}
                metric={metric}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.backersSection}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Our backers"
            title="And the people who chip in"
          />
          <div className={styles.backersBody}>
            <BackerWall backers={data.backers} />
          </div>
        </div>
      </section>
    </>
  );
}

export default withIsland(SponsorBoard, {
  name: 'SponsorBoard',
  on: { idle: true },
});
