import styles from './index.module.css';
import {
  ModuleFederation,
  CodeSplitting,
  TreeShaking,
  HotModuleReplacement,
  PersistentCaching,
  Plugins,
} from '../../Icons/FeatureSectionIcons';

const Features = [
  {
    title: 'Module Federation',
    description:
      'Share code across separately-deployed applications at runtime. The micro-frontend pattern, done right.',
    icon: <ModuleFederation />,
  },
  {
    title: 'Code splitting',
    description:
      "Split bundles by route, by demand, or by vendor. Load what's needed, when it's needed.",
    icon: <CodeSplitting />,
  },
  {
    title: 'Tree shaking',
    description:
      'Static analysis of ES modules eliminates dead code in production builds — automatically.',
    icon: <TreeShaking />,
  },
  {
    title: 'Hot module replacement',
    description:
      'Edit and see the result without losing application state. The fastest feedback loop in JavaScript tooling.',
    icon: <HotModuleReplacement />,
  },
  {
    title: 'Persistent caching',
    description:
      "v5's filesystem cache makes warm builds near-instant. Cold builds are 38% faster than v4 on large monorepos.",
    icon: <PersistentCaching />,
  },
  {
    title: '11,000+ plugins',
    description:
      "The largest ecosystem in JavaScript tooling. If a build problem exists, there's a webpack plugin for it.",
    icon: <Plugins />,
  },
];

export default () => {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.whyHeader}>
          <p className={styles.preTitle}>WHY WEBPACK</p>
          <h2 className={styles.title}>Built for serious applications.</h2>
          <p className={styles.subtext}>
            The original module bundler. Used by Vercel, Shopify, GitHub,
            Microsoft, and most of the modern frontend stack.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {Features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
