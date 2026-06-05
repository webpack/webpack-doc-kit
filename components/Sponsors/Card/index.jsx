import classNames from 'classnames';
import Avatar from '@node-core/ui-components/Common/AvatarGroup/Avatar';

import styles from './index.module.css';

const formatUSD = value => `$${Math.round(value).toLocaleString('en-US')}`;

const amountLabel = (sponsor, metric) =>
  metric === 'monthly'
    ? `${formatUSD(sponsor.monthly.value)} / mo`
    : `${formatUSD(sponsor.allTime.value)} total`;

/**
 * A single sponsor tile. The visual weight scales with `size` so higher tiers read larger,
 * matching the sponsor wall in the design. `lg` renders an expanded card (used by the top
 * tier); the smaller sizes render compact rows.
 *
 * @param {import('react').ComponentProps<'a'> & {
 *   sponsor: { name: string, slug: string, imageUrl: string|null, url: string, monthly: { value: number, tier: string|null }, allTime: { value: number, tier: string|null }, description?: string },
 *   size?: 'lg'|'md'|'sm'|'xs',
 *   metric?: 'monthly'|'allTime',
 * }} props
 */
export default function SponsorCard({
  sponsor,
  size = 'md',
  metric = 'monthly',
  className,
  ...props
}) {
  const linkProps = {
    href: sponsor.url,
    target: '_blank',
    rel: 'noreferrer noopener',
    ...props,
  };

  if (size === 'lg') {
    return (
      <a
        {...linkProps}
        className={classNames(styles.card, styles.lg, className)}
      >
        {CLIENT && (
          <Avatar
            name={sponsor.name}
            image={sponsor.imageUrl}
            size={'medium'}
          />
        )}
        <span className={styles.name}>{sponsor.name}</span>
        {sponsor.description && (
          <p className={styles.description}>{sponsor.description}</p>
        )}
        <div className={styles.footer}>
          <span className={styles.amount}>{amountLabel(sponsor, metric)}</span>
          <span className={styles.visit}>Visit &rarr;</span>
        </div>
      </a>
    );
  }

  return (
    <a
      {...linkProps}
      className={classNames(styles.card, styles[size], className)}
    >
      <div>
        {CLIENT && (
          <Avatar name={sponsor.name} image={sponsor.imageUrl} size={'small'} />
        )}
      </div>
      <span className={styles.body}>
        <span className={styles.name}>{sponsor.name}</span>
        {size !== 'xs' && (
          <span className={styles.amount}>{amountLabel(sponsor, metric)}</span>
        )}
      </span>
      {size !== 'xs' && (
        <span className={styles.chevron} aria-hidden="true">
          &rsaquo;
        </span>
      )}
    </a>
  );
}
