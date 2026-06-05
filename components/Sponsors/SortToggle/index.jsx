import Tabs from '@node-core/ui-components/Common/Tabs';
import classNames from 'classnames';

import styles from './index.module.css';

const TABS = [
  { key: 'monthly', label: 'Sort by Monthly' },
  { key: 'allTime', label: 'Sort by All-Time' },
];

/**
 * Controlled segmented control that picks the metric used to rank sponsors. Built on the
 * shared {@link Tabs} primitive.
 *
 * @param {import('react').ComponentProps<typeof Tabs> & {
 *   value: 'monthly'|'allTime',
 *   onChange: (value: 'monthly'|'allTime') => void,
 * }} props
 */
export default ({ value, onChange, className, ...props }) => (
  <Tabs
    aria-label="Sort sponsors by"
    {...props}
    tabs={TABS}
    value={value}
    onValueChange={onChange}
    className={classNames(styles.toggle, className)}
  />
);
