import classNames from 'classnames';

import styles from './index.module.css';

/**
 * Centered section heading: an uppercase eyebrow, a title and an optional description.
 *
 * @param {import('react').ComponentProps<'header'> & {
 *   eyebrow?: import('react').ReactNode,
 *   title: import('react').ReactNode,
 *   description?: import('react').ReactNode,
 * }} props
 */
export default ({ eyebrow, title, description, className, ...props }) => (
  <header {...props} className={classNames(styles.header, className)}>
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h2 className={styles.title}>{title}</h2>
    {description && <p className={styles.description}>{description}</p>}
  </header>
);
