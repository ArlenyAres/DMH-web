import styles from './FaqAccordion.module.css';
import type { FaqAccordionProps } from './types';

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details key={item.id} className={styles['accordion__item']}>
          <summary className={styles['accordion__summary']}>
            <span>{item.question}</span>
            <span className={styles['accordion__icon']} aria-hidden="true">+</span>
          </summary>
          <div className={styles['accordion__body']}>{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
