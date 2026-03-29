/**
 * Webpack logo component for use as the #theme/Logo override.
 * Based on the official webpack brand assets.
 * @see https://webpack.js.org
 */
const WebpackLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1200"
    width="32"
    height="32"
    aria-label="webpack"
    role="img"
    {...props}
  >
    <path
      fill="#fff"
      d="M600 60 L1110 340 L1110 860 L600 1140 L90 860 L90 340 Z"
    />
    <path
      fill="#8ED6FB"
      d="M600 143 L1051 400 L1051 800 L600 1057 L149 800 L149 400 Z"
    />
    <path
      fill="#1C78C0"
      d="M600 233 L992 460 L992 740 L600 967 L208 740 L208 460 Z"
    />
    <path
      fill="#fff"
      d="M382 480 L470 480 L530 680 L600 480 L670 480 L740 680 L800 480 L888 480 L780 760 L710 760 L640 560 L560 760 L490 760 Z"
    />
  </svg>
);

export default WebpackLogo;
