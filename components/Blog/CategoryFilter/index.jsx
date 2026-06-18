import classNames from 'classnames';

import styles from './index.module.css';

const ALL = 'all';

/**
 * Category chips rendered as links. Selecting one navigates to `?category=…`
 * (and back to `/blog` for "All posts"), which the layout reads from the URL.
 *
 * @param {{
 *   categories: string[],
 *   active: string,
 *   hrefFor: (category: string) => string,
 * }} props
 */
export default function CategoryFilter({ categories, active, hrefFor }) {
  const chips = [
    { key: ALL, label: 'All posts' },
    ...categories.map(category => ({ key: category, label: category })),
  ];

  return (
    <div className={styles.filters}>
      {chips.map(({ key, label }) => (
        <a
          key={key}
          href={hrefFor(key)}
          className={classNames(styles.chip, key === active && styles.active)}
          {...(key === active && { 'aria-current': 'true' })}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
