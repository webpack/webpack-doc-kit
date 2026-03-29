/**
 * Webpack footer component for use as the #theme/Footer override.
 * Displays copyright, license, and community links.
 */
const WebpackFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-neutral-200, #e9edf0)',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        color: 'var(--color-neutral-600, #929fa5)',
      }}
    >
      <p>
        Copyright &copy; 2012&ndash;{year}{' '}
        <a
          href="https://github.com/webpack/webpack/graphs/contributors"
          style={{ color: 'var(--color-webpack-primary, #1C78C0)' }}
        >
          webpack contributors
        </a>
        . Licensed under{' '}
        <a
          href="https://github.com/webpack/webpack/blob/main/LICENSE"
          style={{ color: 'var(--color-webpack-primary, #1C78C0)' }}
        >
          MIT
        </a>
        .
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        <a
          href="https://github.com/webpack/webpack"
          style={{
            marginInline: '0.5rem',
            color: 'var(--color-webpack-primary, #1C78C0)',
          }}
        >
          GitHub
        </a>
        <a
          href="https://opencollective.com/webpack"
          style={{
            marginInline: '0.5rem',
            color: 'var(--color-webpack-primary, #1C78C0)',
          }}
        >
          OpenCollective
        </a>
        <a
          href="https://webpack.js.org"
          style={{
            marginInline: '0.5rem',
            color: 'var(--color-webpack-primary, #1C78C0)',
          }}
        >
          webpack.js.org
        </a>
      </p>
    </footer>
  );
};

export default WebpackFooter;
