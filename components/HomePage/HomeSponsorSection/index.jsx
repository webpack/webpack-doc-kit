import { useMemo } from 'react';
import classNames from 'classnames';
import BaseButton from '@node-core/ui-components/Common/BaseButton';

import SectionHeader from '../../SectionHeader/index.jsx';
import SponsorTier from '../../Sponsors/Tier/index.jsx';

import styles from './index.module.css';
import BackerWall from '../../Sponsors/BackerWall/index.jsx';
import useSponsors from '../../../hooks/useSponsors.mjs';

import {
  TIERS as BASE_TIERS,
  bucketSponsors,
  OC_URL,
} from '../../../layouts/Sponsors/index.jsx';

const SPONSORS_URL = '/about/sponsors';

// Home page always ranks by monthly contribution — no sort toggle needed.
const METRIC = 'monthly';

const TIER_LIMITS = { platinum: 4, gold: 6, silver: 8, bronze: 12 };

// Max cards shown per tier before the overflow "· · · +N more" row appears.
const TIERS = BASE_TIERS.map(tier => ({
  ...tier,
  price: tier.price.monthly,
  limit: TIER_LIMITS[tier.tier],
}));

// Max backer avatars shown before the overflow row appears.
const BACKER_LIMIT = 40;

// Shared overflow indicator
function SeeMore({ count, href, className }) {
  return (
    <div className={classNames(styles.seeMore, className)}>
      <a href={href} className={styles.seeMoreLink}>
        +{count} more (see all)
      </a>
    </div>
  );
}

export default () => {
  const data = useSponsors();
  const buckets = useMemo(
    () => bucketSponsors(data.sponsors, METRIC),
    [data.sponsors]
  );
  const hasAnySponsor = TIERS.some(({ tier }) => buckets[tier].length > 0);

  if (!hasAnySponsor) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Open source, sustained"
          title="The organizations powering webpack"
        />

        {/* ── Sponsor tiers ── */}
        <div className={styles.tiers}>
          {TIERS.map(({ tier, label, price, cardSize, limit }) => {
            const all = buckets[tier];
            if (!all.length) return null;

            const shown = all.slice(0, limit);
            const overflow = all.length - limit;

            return (
              <div key={tier} className={styles.tierWrapper}>
                <SponsorTier
                  tier={tier}
                  label={label}
                  price={price}
                  cardSize={cardSize}
                  sponsors={shown}
                  metric={METRIC}
                />
                {overflow > 0 && (
                  <SeeMore count={overflow} href={SPONSORS_URL} />
                )}
              </div>
            );
          })}
        </div>

        {/* ── Backer wall ── */}
        {data.backers?.length > 0 && (
          <div className={styles.backersSection}>
            <p className={styles.backersLabel}>And the people who chip in</p>
            <BackerWall
              backers={data.backers}
              limit={BACKER_LIMIT}
              showLink={false}
            />
            {data.backers.length > BACKER_LIMIT && (
              <SeeMore
                count={data.backers.length - BACKER_LIMIT}
                href={SPONSORS_URL}
                className={styles.backerSeeMore}
              />
            )}
          </div>
        )}

        <div className={styles.actions}>
          <BaseButton
            href={OC_URL}
            target="_blank"
            rel="noreferrer noopener"
            kind="primary"
          >
            Become a sponsor
          </BaseButton>
          <a href={SPONSORS_URL} className={styles.allSponsorsLink}>
            See all sponsors &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
