import styles from './FeatureCard.module.css';
import type { FeatureCardProps } from './types';

export function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles['card__emoji']} aria-hidden="true">{emoji}</span>
      <h3 className={styles['card__title']}>{title}</h3>
      <p className={styles['card__description']}>{description}</p>
    </article>
  );
}
