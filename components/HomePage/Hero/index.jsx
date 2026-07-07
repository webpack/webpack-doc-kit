import styles from './index.module.css';
import { version } from '#theme/config';
import Logo from '../../Icons/Webpack';
export default () => {
  return (
    <section className={styles.hero}>
      <div className={styles.webpackContainer}>
        <div className={styles.webpack}>
          <div className={styles.description}>
            <p className={styles.preTitle}>
              <span className={styles.dot}></span> STATIC MODULE BUNDLER
            </p>

            <h2 className={styles.title}>
              Bundle the <span className={styles.highlight}>web</span>.
            </h2>

            <p className={styles.subtext}>
              webpack packs many modules into a few bundled assets. Code
              splitting allows for loading parts of the application on demand —
              designed for modern JavaScript apps.
            </p>

            <div className={styles.actions}>
              <a href="/guides/getting-started" className={styles.primaryBtn}>
                <span> Get started</span>
                <span>
                  <svg
                    className={styles.arrowIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="https://github.com/webpack/webpack"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
              >
                View on GitHub
                <svg
                  className={styles.githubIcon}
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.logo}>
            <Logo width="100%" height="100%" />
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2>35M+</h2>
          <p>weekly downloads</p>
        </div>
        <div className={styles.statItem}>
          <h2>65K+</h2>
          <p>GitHub stars</p>
        </div>
        <div className={styles.statItem}>
          <h2>11K+</h2>
          <p>plugins published</p>
        </div>
        <div className={styles.statItem}>
          <h2>{`v${version.version}`}</h2>
          <p>current release</p>
        </div>
      </div>
    </section>
  );
};
