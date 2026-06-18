import { useEffect, useState } from 'react';

import BasePagination from '@node-core/ui-components/Common/BasePagination';

import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer/index.jsx';
import CategoryFilter from '../../components/Blog/CategoryFilter/index.jsx';
import PostCard from '../../components/Blog/PostCard/index.jsx';
import data from '#theme/blog' with { type: 'json' };

import styles from './index.module.css';

const ALL = 'all';
const PAGE_SIZE = 6;

// Unique categories in first-appearance order (data is sorted newest-first).
const CATEGORIES = [
  ...new Set(data.map(post => post.category).filter(Boolean)),
];

const PAGINATION_LABELS = {
  aria: 'Blog pages',
  next: 'Next',
  nextAriaLabel: 'Next page',
  previous: 'Previous',
  previousAriaLabel: 'Previous page',
};

/** Build a `/blog` URL carrying the active category and page (defaults omitted). */
const hrefFor = ({ category, page }) => {
  const params = new URLSearchParams();
  if (category && category !== ALL) params.set('category', category);
  if (page && page > 1) params.set('page', String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : '/blog';
};

/**
 * @param {{ metadata: object }} props
 */
export default function BlogLayout({ metadata }) {
  const [{ category, page }, setView] = useState({ category: ALL, page: 1 });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = Number.parseInt(params.get('page'), 10);
    setView({
      category: params.get('category') ?? ALL,
      page: Number.isInteger(requested) && requested > 1 ? requested : 1,
    });
  }, []);

  const pool =
    category === ALL ? data : data.filter(post => post.category === category);

  const pageCount = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const current = Math.min(Math.max(page, 1), pageCount);
  const start = (current - 1) * PAGE_SIZE;
  const visible = pool.slice(start, start + PAGE_SIZE);

  const pages = Array.from({ length: pageCount }, (_, index) => ({
    url: hrefFor({ category, page: index + 1 }),
  }));

  return (
    <>
      <NavBar metadata={metadata} />

      <main className={styles.page}>
        <div className={styles.wrap}>
          <header className={styles.head}>
            <p className={styles.eyebrow}>
              <span className={styles.dot} />
              The webpack blog
            </p>
            <h1 className={styles.title}>Notes from the bundler.</h1>
            <p className={styles.deck}>
              Release notes, deep dives into the chunk graph, and engineering
              write-ups from the webpack core team and the wider community.
            </p>
            <CategoryFilter
              categories={CATEGORIES}
              active={category}
              hrefFor={key => hrefFor({ category: key, page: 1 })}
            />
          </header>

          <section className={styles.recent}>
            <h2 className={styles.recentHead}>Recent posts</h2>

            {visible.length > 0 ? (
              <div className={styles.grid}>
                {visible.map(post => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className={styles.empty}>No posts in this category yet.</p>
            )}

            {pageCount > 1 && (
              <div className={styles.pagination}>
                <BasePagination
                  currentPage={current}
                  pages={pages}
                  getPageLabel={number => `Page ${number}`}
                  labels={PAGINATION_LABELS}
                />
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
