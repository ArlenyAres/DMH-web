import styles from './BrandGrid.module.css';
import type { BrandGridProps } from './types';

export function BrandGrid({ brands }: BrandGridProps) {
  return (
    <div className={styles.grid}>
      {brands.map((brand) => (
        <div key={brand.id} className={styles.card}>
          <div className={styles['card__name']}>{brand.name}</div>
          <div className={styles['card__category']}>{brand.category}</div>
        </div>
      ))}
    </div>
  );
}
