import { BrandLogo } from '@/components/BrandLogo';
import styles from './BrandGrid.module.css';
import type { BrandGridProps } from './types';

export function BrandGrid({ brands }: BrandGridProps) {
  return (
    <div className={styles.grid}>
      {brands.map((brand) => (
        <div key={brand.id} className={styles.card}>
          <div className={styles['card__logo']}>
            <BrandLogo
              name={brand.name}
              iconSlug={brand.iconSlug}
              logoSrc={brand.logoSrc}
              imgClassName={styles['card__logo-img']}
              fallbackClassName={styles['card__logo-fallback']}
            />
          </div>
          <div className={styles['card__name']}>{brand.name}</div>
        </div>
      ))}
    </div>
  );
}
