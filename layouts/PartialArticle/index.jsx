import NavBar from '../../components/NavBar.jsx';
import Footer from '../../components/Footer/index.jsx';
import SideBar from '../../components/SideBar.jsx';

import styles from './index.module.css';

/**
 * Article shell with a sidebar but no metabar. Mirrors the default Layout's
 * navigation/sidebar/footer chrome while leaving the main column free for
 * custom page content (e.g. the Sponsors page).
 *
 * @param {{ metadata: object, children: import('preact').ComponentChildren }} props
 */
export default function PartialArticle({ metadata, children }) {
  return (
    <>
      <NavBar metadata={metadata} />

      <div className={styles.shell}>
        <aside className={styles.sidebar}>
          <SideBar metadata={metadata} />
        </aside>

        <main className={styles.page}>{children}</main>
      </div>

      <Footer />
    </>
  );
}
