import styles from './StatBox.module.css';
import type { StatBoxProps } from './types';

export function StatBox({ value, label, description }: StatBoxProps) {
  return (
    <div className={styles.stat}>
      <div className={styles['stat__value']}>{value}</div>
      <div className={styles['stat__label']}>{label}</div>
      {description && <div className={styles['stat__description']}>{description}</div>}
    </div>
  );
}
