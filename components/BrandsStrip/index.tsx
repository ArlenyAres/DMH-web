import { BRANDS } from '@/data/brands';
import { BrandLogo } from '@/components/BrandLogo';
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
              <BrandLogo
                name={brand.name}
                iconSlug={brand.iconSlug}
                logoSrc={brand.logoSrc}
                imgClassName={styles['strip__logo']}
                fallbackClassName={styles['strip__logo-fallback']}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
