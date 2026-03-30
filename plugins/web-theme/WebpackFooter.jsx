import './webpack-theme.css';

/**
 * Footer for webpack API documentation pages.
 */
export default function WebpackFooter() {
  return (
    <footer className="webpack-docs-footer">
      <p>webpack API documentation generated with TypeDoc and doc-kit.</p>
      <p>
        <a href="https://github.com/webpack/webpack" target="_blank" rel="noreferrer">
          webpack/webpack
        </a>
      </p>
    </footer>
  );
}
