import Link from 'next/link';
import Image from 'next/image';
import styles from './PageBanner.module.css';
import type { PageBannerProps } from './types';

export function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles['banner__eye-decor']} aria-hidden="true">
        <Image src="/MarcaAgua.png" alt="" width={420} height={420} className={styles['banner__eye-img']} />
      </div>
      <div className="container">
        {breadcrumb && (
          <nav aria-label="Ruta de navegación" className={styles['banner__breadcrumb']}>
            <ol className={styles['banner__breadcrumb-list']}>
              <li><Link href="/" className={styles['banner__breadcrumb-link']}>Inicio</Link></li>
              <li aria-hidden="true" className={styles['banner__breadcrumb-sep']}>·</li>
              <li aria-current="page">{breadcrumb}</li>
            </ol>
          </nav>
        )}
        <h1 className={styles['banner__title']}>{title}</h1>
        {subtitle && <p className={styles['banner__subtitle']}>{subtitle}</p>}
      </div>
    </section>
  );
}
