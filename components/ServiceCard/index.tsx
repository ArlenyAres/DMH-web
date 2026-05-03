'use client';
import { useState } from 'react';
import { CtaPopup } from '@/components/CtaPopup';
import styles from './ServiceCard.module.css';
import type { ServiceCardProps } from './types';

export function ServiceCard({ service }: ServiceCardProps) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <article
        className={styles.card}
        onClick={() => setPopupOpen(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPopupOpen(true); }}
        tabIndex={0}
        role="button"
        aria-label={`Ver más sobre ${service.title}`}
      >
        <span className={styles['card__emoji']} aria-hidden="true">{service.emoji}</span>
        <h3 className={styles['card__title']}>{service.title}</h3>
        <p className={styles['card__description']}>{service.description}</p>
        <ul className={styles['card__items']} aria-label={`Incluye: ${service.title}`}>
          {service.items.map((item) => (
            <li key={item} className={styles['card__item']}>{item}</li>
          ))}
        </ul>
        <span className={styles['card__hint']} aria-hidden="true">Consultar →</span>
      </article>

      <CtaPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        context="servicio"
      />
    </>
  );
}
