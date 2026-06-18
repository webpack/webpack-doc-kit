import classNames from 'classnames';
import AvatarGroup from '@node-core/ui-components/Common/AvatarGroup';
import Avatar from '@node-core/ui-components/Common/AvatarGroup/Avatar';

import styles from './index.module.css';

const fullDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

const shortDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
});

/**
 * ui-components avatar descriptor for a GitHub username. `image` pulls the
 * profile picture straight from GitHub; `url` is omitted on purpose so the
 * Avatar renders as a `<div>` rather than an `<a>` (a post card already wraps
 * the byline in a link, and nested anchors are invalid).
 */
const toAvatar = username => ({
  nickname: username,
  name: username,
  image: `https://github.com/${username}.png`,
  fallback: username.slice(0, 2).toUpperCase(),
});

/** Readable author label: one name, "A & B", or "A & N others". */
const authorLabel = authors => {
  if (authors.length <= 1) return authors[0] ?? 'webpack';
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
  return `${authors[0]} & ${authors.length - 1} others`;
};

/**
 * GitHub avatar(s) of the post author(s) beside the author name(s) and the
 * publish date. A single author renders one {@link Avatar}; several render an
 * {@link AvatarGroup}. `size="md"` stacks the name above the date (featured
 * card); `size="sm"` is a compact inline row (grid card).
 *
 * @param {{
 *   authors: string[],
 *   date: string,
 *   size?: 'sm'|'md',
 *   className?: string,
 * }} props
 */
export default function Byline({ authors, date, size = 'sm', className }) {
  const format = size === 'md' ? fullDate : shortDate;
  const avatarSize = size === 'md' ? 'medium' : 'small';

  return (
    <div className={classNames(styles.byline, styles[size], className)}>
      {CLIENT && authors.length > 0 && (
        <span className={styles.avatars}>
          {authors.length === 1 ? (
            <Avatar {...toAvatar(authors[0])} size={avatarSize} />
          ) : (
            <AvatarGroup
              avatars={authors.map(toAvatar)}
              size={avatarSize}
              as="div"
            />
          )}
        </span>
      )}
      <span className={styles.meta}>
        <span className={styles.who}>{authorLabel(authors)}</span>
        <span className={styles.sep} aria-hidden="true">
          &middot;
        </span>
        <time className={styles.date} dateTime={date}>
          {format.format(new Date(date))}
        </time>
      </span>
    </div>
  );
}
