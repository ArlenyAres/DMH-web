import Image from 'next/image';
import styles from './PageBanner.module.css';
import type { PageBannerProps } from './types';

export function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles['banner__eye-decor']} aria-hidden="true">
        <Image src="/marcaAgua.png" alt="" width={420} height={420} className={styles['banner__eye-img']} />
      </div>
      <div className="container">
        {breadcrumb && (
          <p className={styles['banner__breadcrumb']} aria-label="Ubicación actual">
            Inicio · {breadcrumb}
          </p>
        )}
        <h1 className={styles['banner__title']}>{title}</h1>
        {subtitle && <p className={styles['banner__subtitle']}>{subtitle}</p>}
      </div>
    </section>
  );
}
