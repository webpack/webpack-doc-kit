import classNames from 'classnames';

import Cube from '../../Icons/Webpack.jsx';

import styles from './index.module.css';

/**
 * Geometric brand cover for a post. Draws the hairline pattern and the cube
 * placeholder, layering the hero `image` over it when present. `tag` renders
 * the category chip.
 *
 * @param {{
 *   image?: string|null,
 *   tag?: string|null,
 *   alt?: string,
 *   className?: string,
 * }} props
 */
export default function Cover({ image, tag, alt = '', className }) {
  return (
    <span className={classNames(styles.cover, className)}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <span className={styles.cube} aria-hidden="true">
        <Cube />
      </span>
      {image && (
        <img className={styles.image} src={image} alt={alt} loading="lazy" />
      )}
    </span>
  );
}
