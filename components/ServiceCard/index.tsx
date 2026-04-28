import styles from './ServiceCard.module.css';
import type { ServiceCardProps } from './types';

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles['card__emoji']} aria-hidden="true">{service.emoji}</span>
      <h3 className={styles['card__title']}>{service.title}</h3>
      <p className={styles['card__description']}>{service.description}</p>
      <ul className={styles['card__items']} aria-label={`Incluye: ${service.title}`}>
        {service.items.map((item) => (
          <li key={item} className={styles['card__item']}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
