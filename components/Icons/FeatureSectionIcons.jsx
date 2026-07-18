const Svg = ({ children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const ModuleFederation = props => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="2.3" />
    <rect x="10.2" y="2" width="3.6" height="3.6" rx="1.1" />
    <rect x="2.4" y="16.4" width="3.6" height="3.6" rx="1.1" />
    <rect x="18" y="16.4" width="3.6" height="3.6" rx="1.1" />
    <path d="M12 9.7V5.6" />
    <path d="M10.2 13.3 6.4 16.6" />
    <path d="M13.8 13.3 17.6 16.6" />
  </Svg>
);

const CodeSplitting = props => (
  <Svg {...props}>
    <rect x="2.5" y="10" width="4" height="4" rx="1.1" />
    <rect x="17.5" y="2.6" width="4" height="3.4" rx="1.1" />
    <rect x="17.5" y="10.3" width="4" height="3.4" rx="1.1" />
    <rect x="17.5" y="18" width="4" height="3.4" rx="1.1" />
    <path d="M6.5 12H11.5" />
    <path d="M11.5 12V4.3H17.5" />
    <path d="M11.5 12H17.5" />
    <path d="M11.5 12V19.7H17.5" />
  </Svg>
);

const TreeShaking = props => (
  <Svg {...props}>
    <circle cx="11" cy="8" r="5" />
    <path d="M11 13V21" />
    <path d="M7.5 21H14.5" />
    <circle
      cx="18"
      cy="15.5"
      r="1"
      fill="currentColor"
      stroke="none"
      opacity="0.6"
    />
    <circle
      cx="20"
      cy="19"
      r="0.8"
      fill="currentColor"
      stroke="none"
      opacity="0.45"
    />
  </Svg>
);

const HotModuleReplacement = props => (
  <Svg {...props}>
    <path d="M4 11A8 8 0 0 1 17.6 5.6" />
    <path d="M17.6 2V5.6H14" />
    <path d="M20 13A8 8 0 0 1 6.4 18.4" />
    <path d="M6.4 22V18.4H10" />
    <path
      d="M12 8.8 12.9 11.1 15.2 12 12.9 12.9 12 15.2 11.1 12.9 8.8 12 11.1 11.1Z"
      fill="currentColor"
      stroke="none"
    />
  </Svg>
);

const PersistentCaching = props => (
  <Svg {...props}>
    <ellipse cx="11" cy="5.5" rx="6.5" ry="2.4" />
    <path d="M4.5 5.5V11c0 1.3 2.9 2.4 6.5 2.4 .5 0 1 0 1.5-.05" />
    <path d="M4.5 11v5.5c0 1.3 2.9 2.4 6.5 2.4 .3 0 .6 0 .9-.03" />
    <path
      d="M17.5 11.5 14.5 16.5H17L15.5 21 20 15H17.5L18.5 11.5Z"
      fill="currentColor"
      strokeWidth="0.9"
    />
  </Svg>
);

const Plugins = props => (
  <Svg {...props}>
    <path d="M8.5 3.5a1.5 1.5 0 0 1 3 0V5h2.5a1 1 0 0 1 1 1v2.5h1.5a1.5 1.5 0 0 1 0 3H15V14a1 1 0 0 1-1 1h-2.5v1.5a1.5 1.5 0 0 1-3 0V15H6a1 1 0 0 1-1-1v-2.5H3.5a1.5 1.5 0 0 1 0-3H5V6a1 1 0 0 1 1-1h2.5Z" />
  </Svg>
);

export {
  ModuleFederation,
  CodeSplitting,
  TreeShaking,
  HotModuleReplacement,
  PersistentCaching,
  Plugins,
};
