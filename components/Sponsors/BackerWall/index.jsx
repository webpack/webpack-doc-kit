import Avatar from '@node-core/ui-components/Common/AvatarGroup/Avatar';
import classNames from 'classnames';

import styles from './index.module.css';

const OC_BASE = 'https://opencollective.com';

const initialsOf = name =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

/**
 * Wall of individual backer avatars with an overflow chip, plus a link to the full list
 * on Open Collective. Built on the shared {@link Avatar}.
 *
 * @param {import('react').ComponentProps<'div'> & {
 *   backers: Array<{ name: string, slug: string, imageUrl: string|null, allTime: { value: number, tier: string|null } }>,
 *   limit?: number,
 * }} props
 */
export default ({ backers, limit = 100, ...props }) => (
  <div {...props}>
    <div className={classNames(styles.wall)}>
      {CLIENT &&
        shuffle(backers)
          .slice(0, limit)
          .map(backer => (
            <Avatar
              image={backer.imageUrl}
              name={backer.name}
              nickname={backer.slug}
              fallback={initialsOf(backer.name)}
              url={`${OC_BASE}/${backer.slug}`}
            />
          ))}
    </div>
    <a
      href={`${OC_BASE}/webpack/contributors`}
      target="_blank"
      rel="noreferrer noopener"
      className={styles.link}
    >
      See all backers on Open Collective &rarr;
    </a>
  </div>
);
