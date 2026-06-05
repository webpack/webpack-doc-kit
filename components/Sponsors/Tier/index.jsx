import classNames from 'classnames';

import Badge from '@node-core/ui-components/Common/Badge';

import DiamondIcon from '../../Icons/Diamond.jsx';
import SponsorCard from '../Card/index.jsx';

import styles from './index.module.css';

/**
 * One sponsorship tier: a labelled header (icon, name, count, price) above a responsive
 * grid of {@link SponsorCard}s. Renders nothing when the tier has no sponsors.
 *
 * @param {import('react').ComponentProps<'section'> & {
 *   tier: string,
 *   label: string,
 *   price: string,
 *   cardSize: 'lg'|'md'|'sm'|'xs',
 *   sponsors: Array<object>,
 *   metric: 'monthly'|'allTime',
 * }} props
 */
export default function SponsorTier({
  tier,
  label,
  price,
  cardSize,
  sponsors,
  metric,
  className,
  ...props
}) {
  if (!sponsors.length) return null;

  return (
    <section {...props} className={classNames(styles.tier, className)}>
      <header className={styles.header}>
        <span className={classNames(styles.label, styles[tier])}>
          <DiamondIcon className={styles.icon} />
          {label}
        </span>
        <Badge size="small" kind="neutral">
          {String(sponsors.length)}
        </Badge>
        <span className={styles.price}>{price}</span>
      </header>

      <div className={classNames(styles.grid, styles[tier])}>
        {sponsors.map(sponsor => (
          <SponsorCard
            key={sponsor.slug}
            sponsor={sponsor}
            size={cardSize}
            metric={metric}
          />
        ))}
      </div>
    </section>
  );
}
