export const OC_URL = 'https://opencollective.com/webpack';

export const TIERS = [
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

export const sortByMetric = (list, metric) =>
  [...list].sort((a, b) => b[metric].value - a[metric].value);

/**
 * Group sponsors into tier buckets
 */
export const bucketSponsors = (sponsors, metric) => {
  const buckets = { platinum: [], gold: [], silver: [], bronze: [] };
  for (const sponsor of sortByMetric(sponsors, metric)) {
    const tier = sponsor[metric].tier;
    if (!tier) continue;
    buckets[tier].push(sponsor);
  }
  return buckets;
};
