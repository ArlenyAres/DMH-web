import styles from './FeatureCard.module.css';
import type { FeatureCardProps } from './types';

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles['card__icon']} aria-hidden="true">{icon}</span>
      <h3 className={styles['card__title']}>{title}</h3>
      <p className={styles['card__description']}>{description}</p>
    </article>
  );
}
