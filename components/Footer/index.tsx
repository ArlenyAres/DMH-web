import Link from 'next/link';
import Image from 'next/image';
import { COMPANY } from '@/data/company';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { label: 'Inicio',    href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Marcas',    href: '/marcas' },
  { label: 'Soporte',   href: '/soporte' },
  { label: 'Contacto',  href: '/contacto' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles['footer__grid']}>

          {/* Columna marca */}
          <div className={styles['footer__brand']}>
            <Link href="/" className={styles['footer__brand-logo']} aria-label="DMH – Inicio">
              <Image
                src="/LOGO_DMH.png"
                alt="DMH – Distribuidora Merly Herazo"
                width={106}
                height={154}
                className={styles['footer__brand-img']}
              />
            </Link>
            <p className={styles['footer__brand-tagline']}>{COMPANY.tagline}</p>
            <p className={styles['footer__brand-desc']}>{COMPANY.description}</p>
          </div>

          {/* Columna navegación */}
          <div>
            <p className={styles['footer__col-title']}>Menú</p>
            <ul className={styles['footer__nav-list']}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={styles['footer__nav-link']}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna contacto */}
          <div>
            <p className={styles['footer__col-title']}>Contacto</p>
            <ul className={styles['footer__contact-list']}>
              <li>
                <Link href={`mailto:${COMPANY.email}`} className={styles['footer__contact-item']}>
                  <span className={styles['footer__contact-icon']} aria-hidden="true">✉</span>
                  {COMPANY.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${COMPANY.whatsapp}`} className={styles['footer__contact-item']}>
                  <span className={styles['footer__contact-icon']} aria-hidden="true">📞</span>
                  {COMPANY.whatsappDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={buildWALink(WA_MESSAGES.cotizacion)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles['footer__contact-item']}
                >
                  <span className={styles['footer__contact-icon']} aria-hidden="true">💬</span>
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles['footer__bottom']}>
          <span className={styles['footer__copy']}>
            © {year} {COMPANY.name}. Todos los derechos reservados.
          </span>
          <span className={styles['footer__rif']}>RIF: {COMPANY.rif}</span>
        </div>
      </div>
    </footer>
  );
}
