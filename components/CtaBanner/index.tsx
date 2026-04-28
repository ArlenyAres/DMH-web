import Link from 'next/link';
import Image from 'next/image';
import styles from './CtaBanner.module.css';
import type { CtaBannerProps } from './types';

export function CtaBanner({ title, subtitle, ctaLabel, ctaHref, secondaryLabel, secondaryHref }: CtaBannerProps) {
  return (
    <section className={styles.banner} aria-label="Llamada a la acción">
      <div className={styles['banner__eye-decor']} aria-hidden="true">
        <Image src="/marcaAgua.png" alt="" width={340} height={340} className={styles['banner__eye-img']} />
      </div>
      <h2 className={styles['banner__title']}>{title}</h2>
      {subtitle && <p className={styles['banner__subtitle']}>{subtitle}</p>}
      <div className={styles['banner__actions']}>
        <Link
          href={ctaHref}
          target={ctaHref.startsWith('http') ? '_blank' : undefined}
          rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={styles['banner__cta']}
        >
          {ctaLabel}
          {ctaHref.startsWith('http') && <span className="sr-only">– abre en nueva pestaña</span>}
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className={styles['banner__secondary']}
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
