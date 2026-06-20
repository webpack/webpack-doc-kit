import Article from '@node-core/ui-components/Containers/Article';
import BaseCrossLink from '@node-core/ui-components/Common/BaseCrossLink';

import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer/index.jsx';
import Byline from '../../components/Blog/Byline/index.jsx';
import Cover from '../../components/Blog/Cover/index.jsx';
import MetaBar from '#theme/Metabar';
import posts from '#theme/blog' with { type: 'json' };

import styles from './index.module.css';

/**
 * Article layout for a single blog post, mirroring the nodejs.org `Post` layout:
 * navigation, a three-column shell (empty rail · article · meta bar), and the
 * footer. The shell reuses doc-kit's {@link Article} container so the rendered
 * markdown body gets the same grid, spacing, and typography as the API docs.
 *
 * A cover image opens the post; the header reuses {@link Byline} for the author
 * avatars and publish date; the body (including its `# ` title) arrives as
 * `children`. The right rail reuses doc-kit's MetaBar for the table of contents,
 * reading time, and edit link. Previous/next cross-links close the article,
 * walking the listing order (newest-first, so "previous" is the newer post).
 *
 * @param {{
 *   metadata: import('@node-core/doc-kit/src/generators/web/ui/types').SerializedMetadata
 *     & { authors?: string[], date?: string, category?: string },
 *   headings: Array<object>,
 *   readingTime: string,
 *   children: import('react').ReactNode,
 * }} props
 */
export default function PostLayout({
  metadata,
  headings,
  readingTime,
  children,
}) {
  // `basename` is the slug (filename without extension), matching the listing.
  const index = posts.findIndex(post => post.slug === metadata.basename);
  const current = posts[index];
  const { authors = [], date, category } = current;
  const next = index > 0 ? posts[index - 1] : undefined;
  const previous = index >= 0 ? posts[index + 1] : undefined;

  return (
    <>
      <NavBar metadata={metadata} />

      <Article>
        <div />

        <div>
          <main id="main" tabIndex={-1}>
            <Cover
              className={styles.cover}
              image={metadata.image}
              alt={current?.title}
            />

            <header className={styles.header}>
              {category && <p className={styles.category}>{category}</p>}
              {date && <Byline authors={authors} date={date} size="md" />}
            </header>

            {children}

            {(previous || next) && (
              <nav className={styles.crossLinks} aria-label="More posts">
                {previous ? (
                  <BaseCrossLink
                    type="previous"
                    label="Previous"
                    text={previous.title}
                    link={`/blog/posts/${previous.slug}`}
                  />
                ) : (
                  <div />
                )}

                {next && (
                  <BaseCrossLink
                    type="next"
                    label="Next"
                    text={next.title}
                    link={`/blog/posts/${next.slug}`}
                  />
                )}
              </nav>
            )}
          </main>

          <MetaBar
            metadata={metadata}
            headings={headings}
            readingTime={readingTime}
          />
        </div>
      </Article>

      <Footer />
    </>
  );
}
