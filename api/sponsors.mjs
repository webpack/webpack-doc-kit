import { getCache } from '@vercel/functions';
import { fetchWithRetry } from '../scripts/utils/fetch.mjs';

const COLLECTIVE = 'webpack';
const API = 'https://api.opencollective.com/graphql/v2';
const PAGE_SIZE = 1000; // Open Collective's maximum page size

// Accounts to merge into another account, keyed by the slug a contribution comes
// from. Used when a company pays through an employee's personal account.
const ALIASES = {
  'ag-grid-226': 'ag-grid', // John Masterson → AG Grid
};

// ACTIVE covers live recurring subscriptions; PAID covers one-time contributions;
// CANCELLED keeps lapsed sponsors' all-time totals in the dataset.
const ORDERS_QUERY = `
  query Orders($slug: String!, $limit: Int!, $offset: Int!) {
    account(slug: $slug) {
      orders(
        status: [ACTIVE, PAID, CANCELLED]
        filter: INCOMING
        limit: $limit
        offset: $offset
      ) {
        totalCount
        nodes {
          status
          frequency
          amount { value }
          totalDonations { value }
          fromAccount { name slug imageUrl website }
        }
      }
    }
  }
`;

/**
 * Recurring monthly amount (USD)
 *
 * @param {number} monthly
 * @returns {'platinum'|'gold'|'silver'|'bronze'|null}
 */
const tierForMonthly = monthly => {
  if (monthly >= 2500) return 'platinum';
  if (monthly >= 500) return 'gold';
  if (monthly >= 100) return 'silver';
  if (monthly >= 10) return 'bronze';
  return null;
};

/**
 * All-time total (USD)
 *
 * @param {number} allTime
 * @returns {'platinum'|'gold'|'silver'|'bronze'|null}
 */
const tierForAllTime = allTime => {
  if (allTime >= 50000) return 'platinum';
  if (allTime >= 10000) return 'gold';
  if (allTime >= 2000) return 'silver';
  if (allTime >= 200) return 'bronze';
  return null;
};

/** Normalize an order's recurring amount to a monthly figure. */
const monthlyAmount = node => {
  const value = node.amount?.value ?? 0;
  if (node.frequency === 'YEARLY') return value / 12;
  if (node.frequency === 'MONTHLY') return value;
  return 0;
};

/** Fetch every incoming order, following Open Collective's offset pagination. */
const fetchAllOrders = async () => {
  let offset = 0;
  let totalCount = Infinity;
  const all = [];

  while (offset < totalCount) {
    const res = await fetchWithRetry(API, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        query: ORDERS_QUERY,
        variables: { slug: COLLECTIVE, limit: PAGE_SIZE, offset },
      }),
    });

    if (!res.ok) throw new Error(`Open Collective responded ${res.status}`);

    const { data, errors } = await res.json();
    if (errors?.length) throw new Error(errors.map(e => e.message).join('; '));

    const orders = data?.account?.orders;
    totalCount = orders?.totalCount ?? 0;
    all.push(...(orders?.nodes ?? []));
    offset += PAGE_SIZE;
  }

  return all;
};

export const getOpenCollectiveSponsors = async () => {
  const nodes = await fetchAllOrders();
  if (!nodes.length) throw new Error('No orders returned');

  // Collapse multiple orders from the same account into one entry. Monthly only
  // accrues from live subscriptions; all-time accrues from every order.
  const bySlug = new Map();
  for (const node of nodes) {
    const account = node.fromAccount;
    if (!account?.slug) continue; // guest/incognito contributions

    const slug = ALIASES[account.slug] ?? account.slug;
    const profile = {
      name: account.name ?? account.slug,
      imageUrl: account.imageUrl ?? null,
      url: account.website ?? `https://opencollective.com/${slug}`,
    };

    const existing = bySlug.get(slug) ?? {
      ...profile,
      slug,
      monthly: 0,
      allTime: 0,
    };
    // The canonical account's own profile wins over an alias's.
    if (slug === account.slug) Object.assign(existing, profile);

    if (node.status === 'ACTIVE') {
      existing.monthly += monthlyAmount(node);
    }
    existing.allTime += node.totalDonations?.value ?? 0;
    bySlug.set(slug, existing);
  }

  const sponsors = [];
  const backers = [];
  for (const entry of bySlug.values()) {
    const monthly = {
      value: Math.round(entry.monthly),
      tier: tierForMonthly(entry.monthly),
    };
    const allTime = {
      value: Math.round(entry.allTime),
      tier: tierForAllTime(entry.allTime),
    };

    if (monthly.tier || allTime.tier) {
      sponsors.push({
        name: entry.name,
        slug: entry.slug,
        imageUrl: entry.imageUrl,
        url: entry.url,
        monthly,
        allTime,
      });
    } else {
      backers.push({
        name: entry.name,
        slug: entry.slug,
        imageUrl: entry.imageUrl,
        allTime,
      });
    }
  }

  sponsors.sort(
    (a, b) =>
      b.monthly.value - a.monthly.value || b.allTime.value - a.allTime.value
  );
  backers.sort((a, b) => b.allTime.value - a.allTime.value);

  return { sponsors, backers };
};

export async function GET() {
  const cache = getCache();

  // https://vercel.com/docs/caching/runtime-cache?framework=other#using-runtime-cache
  let value = await cache.get('sponsors');

  if (!value) {
    value = await getOpenCollectiveSponsors();
    await cache.set('sponsors', value, {
      ttl: 3600, // 1 hour in seconds
    });
  }

  return Response.json(value);
}
