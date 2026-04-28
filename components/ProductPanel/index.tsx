import Link from 'next/link';
import { buildWALink } from '@/lib/whatsapp';
import styles from './ProductPanel.module.css';
import type { ProductPanelProps } from './types';

export function ProductPanel({ category }: ProductPanelProps) {
  return (
    <div className={styles.panel} role="tabpanel" aria-labelledby={`tab-${category.id}`}>
      <div className={styles['panel__header']}>
        <h3 className={styles['panel__title']}>
          {category.emoji} {category.name}
        </h3>
        <div className={styles['panel__brands']} aria-label="Marcas disponibles">
          {category.brands.map((brand) => (
            <span key={brand} className={styles['panel__brand-badge']}>{brand}</span>
          ))}
        </div>
      </div>

      <ul className={styles['panel__grid']}>
        {category.items.map((item) => (
          <li key={item.id} className={styles['panel__item']}>{item.name}</li>
        ))}
      </ul>

      <Link
        href={buildWALink(category.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['panel__cta']}
      >
        Cotizar {category.name}
        <span className="sr-only">– abre WhatsApp en nueva pestaña</span>
      </Link>
    </div>
  );
}
