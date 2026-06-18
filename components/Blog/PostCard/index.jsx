import Byline from '../Byline/index.jsx';
import Cover from '../Cover/index.jsx';

import styles from './index.module.css';

/**
 * A post tile for the recent-posts grid: cover, category, title, optional
 * excerpt, and a compact byline.
 *
 * @param {{ post: object }} props
 */
export default function PostCard({ post }) {
  return (
    <a className={styles.card} href={`/blog/posts/${post.slug}`}>
      <Cover
        className={styles.cover}
        image={post.image}
        tag={post.category}
        alt={post.title}
      />
      {post.category && (
        <span className={styles.category}>{post.category}</span>
      )}
      <h3 className={styles.title}>{post.title}</h3>
      {post.description && <p className={styles.excerpt}>{post.description}</p>}
      <Byline
        authors={post.authors}
        date={post.date}
        size="sm"
        className={styles.foot}
      />
    </a>
  );
}
