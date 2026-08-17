import styles from './index.module.css';

export default function StackBlitzPreview(props = {}) {
  const {
    example = '',
    description = 'Check out this guide live on StackBlitz.',
  } = props;

  const url = `https://stackblitz.com/github/webpack/webpack-doc-kit/tree/main/examples/${example}`;

  return (
    <aside className={styles.preview}>
      <h6 className={styles.previewPrefix}>live preview</h6>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={'/assets/open-in-stackblitz-button.svg'}
          alt="Open in StackBlitz"
        />
      </a>
    </aside>
  );
}
