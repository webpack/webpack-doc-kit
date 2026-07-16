import NavBar from '../../components/NavBar';
import BaseButton from '@node-core/ui-components/Common/BaseButton';
import styles from './index.module.css';

export default ({ metadata }) => {
  return (
    <>
      <NavBar metadata={metadata} />
      <main className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>Page Not Found</h2>

          <p className={styles.description}>
            Oops! The page you are looking for might have been moved, deleted,
            or was simply never included in the chunk.
          </p>

          <div className={styles.actions}>
            <BaseButton href="/" kind="primary">
              Go to Home
            </BaseButton>
            <BaseButton
              href="https://github.com/webpack/webpack.js.org/issues/new/choose"
              kind="neutral"
            >
              Report an issue
            </BaseButton>
          </div>
        </div>
      </main>
    </>
  );
};
