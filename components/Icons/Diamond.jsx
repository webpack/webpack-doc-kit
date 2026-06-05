/**
 * Small diamond/gem glyph used to mark a sponsorship tier.
 *
 * @param {import('react').SVGProps<SVGSVGElement>} props
 */
export default props => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M5.5 3h13l3 5.2L12 21 2.5 8.2 5.5 3Z"
      fill="currentColor"
      opacity="0.18"
    />
    <path
      d="M5.5 3h13l3 5.2L12 21 2.5 8.2 5.5 3Zm0 0 6.5 5.2L18.5 3M2.5 8.2h19M12 21V8.2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);
