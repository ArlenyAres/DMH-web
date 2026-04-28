'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Inicio',    href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Marcas',    href: '/marcas' },
  { label: 'Soporte',   href: '/soporte' },
  { label: 'Contacto',  href: '/contacto' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles['header__inner']}`}>
        <Link href="/" className={styles['header__logo']} aria-label="DMH – Inicio">
          <Image
            src="/logoDMH.png"
            alt="DMH – Distribuidora Merly Herazo"
            width={110}
            height={165}
            className={styles['header__logo-img']}
            priority
          />
        </Link>

        <nav aria-label="Navegación principal">
          <ul className={styles['header__nav']}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles['header__nav-link']} ${isActive(href) ? styles['header__nav-link--active'] : ''}`}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={buildWALink(WA_MESSAGES.cotizacion)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['header__cta']}
        >
          Cotizar ahora
          <span className="sr-only">– abre WhatsApp en nueva pestaña</span>
        </Link>

        <button
          className={`${styles['header__hamburger']} ${open ? styles['header__hamburger--open'] : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={styles['header__hamburger-bar']} />
          <span className={styles['header__hamburger-bar']} />
          <span className={styles['header__hamburger-bar']} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Navegación móvil"
        className={`${styles['header__drawer']} ${open ? styles['header__drawer--open'] : ''}`}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`${styles['header__drawer-link']} ${isActive(href) ? styles['header__drawer-link--active'] : ''}`}
            aria-current={isActive(href) ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href={buildWALink(WA_MESSAGES.cotizacion)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['header__drawer-cta']}
          onClick={() => setOpen(false)}
        >
          Cotizar ahora
        </Link>
      </nav>
    </header>
  );
}
