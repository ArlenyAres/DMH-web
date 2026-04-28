import { BRANDS } from '@/data/brands';
import styles from './BrandsStrip.module.css';

export function BrandsStrip() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className={styles.strip} aria-label="Marcas que distribuimos">
      <p className={styles['strip__label']}>Marcas que distribuimos</p>
      <div className={styles['strip__track-wrapper']}>
        <div className={styles['strip__track']} aria-hidden="true">
          {doubled.map((brand, i) => (
            <span key={`${brand.id}-${i}`} className={styles['strip__item']}>
              {brand.name}
              <span className={styles['strip__separator']}> ●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
