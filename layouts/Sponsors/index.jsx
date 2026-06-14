import { useState } from 'react';

import BaseButton from '@node-core/ui-components/Common/BaseButton';

import PartialArticle from '../PartialArticle/index.jsx';
import SectionHeader from '../../components/SectionHeader/index.jsx';
import SponsorTier from '../../components/Sponsors/Tier/index.jsx';
import BackerWall from '../../components/Sponsors/BackerWall/index.jsx';
import SortToggle from '../../components/Sponsors/SortToggle/index.jsx';
import data from '#theme/sponsors' with { type: 'json' };

import styles from './index.module.css';

const OC_URL = 'https://opencollective.com/webpack';
const TIERS = [
  {
    tier: 'platinum',
    label: 'Platinum',
    price: { monthly: '$2,500+ / month', allTime: '$50,000+ all-time' },
    cardSize: 'lg',
  },
  {
    tier: 'gold',
    label: 'Gold',
    price: { monthly: '$500 / month', allTime: '$10,000+ all-time' },
    cardSize: 'md',
  },
  {
    tier: 'silver',
    label: 'Silver',
    price: { monthly: '$100 / month', allTime: '$2,000+ all-time' },
    cardSize: 'sm',
  },
  {
    tier: 'bronze',
    label: 'Bronze',
    price: { monthly: '$10 / month', allTime: '$200+ all-time' },
    cardSize: 'xs',
  },
];

const sortByMetric = (list, metric) =>
  [...list].sort((a, b) => b[metric].value - a[metric].value);

/**
 * Group sponsors into tier buckets using each metric's precomputed tier.
 * Sponsors with no tier for the active metric (e.g. one-time backers when
 * sorting by monthly) are omitted entirely.
 */
const bucketSponsors = (sponsors, metric) => {
  const buckets = { platinum: [], gold: [], silver: [], bronze: [] };
  for (const sponsor of sortByMetric(sponsors, metric)) {
    const tier = sponsor[metric].tier;
    if (!tier) continue;
    buckets[tier].push(sponsor);
  }
  return buckets;
};

/**
 * Sponsors page layout. Lists Open Collective sponsors by tier with a control to re-rank
 * them by recurring monthly amount or all-time contribution, plus a backer wall and CTA.
 *
 * @param {{ metadata: object }} props
 */
export default function SponsorsLayout({ metadata }) {
  const [metric, setMetric] = useState('monthly');

  const buckets = bucketSponsors(data.sponsors, metric);

  return (
    <PartialArticle metadata={metadata}>
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
    </PartialArticle>
  );
}
