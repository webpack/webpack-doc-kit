import './webpack-theme.css';

/**
 * Webpack brand logo component used by doc-kit's navbar.
 */
export default function WebpackLogo() {
  return (
    <a href="/" className="webpack-docs-logo" aria-label="webpack documentation home">
      <svg
        className="webpack-docs-logo__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M2.5 7.1 12 1.7l9.5 5.4v9.8L12 22.3l-9.5-5.4V7.1zm1.6 1v7.9l7.2 4.1v-7.2L4.1 8.1zm8.8 11.9 7.2-4.1V8.1l-7.2 4.8V20zM5 6.8l7 4.7 7-4.7L12 2.8 5 6.8z" />
      </svg>
      <span className="webpack-docs-logo__wordmark">webpack</span>
    </a>
  );
}
