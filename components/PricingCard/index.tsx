'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp } from '@/lib/animations';
import { buildWALink } from '@/lib/whatsapp';
import styles from './PricingCard.module.css';
import type { PricingCardProps } from './types';

export function PricingCard({
  badge,
  badgeVariant,
  type,
  name,
  priceFrom,
  priceTo,
  priceSuffix,
  useCase,
  includes,
  isFeatured = false,
  waMessage,
  className,
}: PricingCardProps) {
  const cardClass = [
    styles['pricing-card'],
    isFeatured ? styles['pricing-card--featured'] : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  const badgeClass = [
    styles['pricing-card__badge'],
    styles[`pricing-card__badge--${badgeVariant}`],
  ].join(' ');

  return (
    <motion.article className={cardClass} variants={fadeUp}>
      <span className={badgeClass}>{badge}</span>
      <p className={styles['pricing-card__type']}>{type}</p>
      <h3 className={styles['pricing-card__name']}>{name}</h3>

      <p
        className={styles['pricing-card__price']}
        aria-label={priceTo ? `Precio: desde $${priceFrom} hasta $${priceTo} ${priceSuffix}` : `Precio: desde $${priceFrom} ${priceSuffix}`}
      >
        {priceTo
          ? `$${priceFrom} – $${priceTo}`
          : `Desde $${priceFrom}`}
      </p>
      <p className={styles['pricing-card__price-suffix']}>{priceSuffix}</p>

      <p className={styles['pricing-card__use-case']}>{useCase}</p>

      <hr className={styles['pricing-card__divider']} />
      <p className={styles['pricing-card__includes-label']}>Incluye</p>

      <ul className={styles['pricing-card__list']}>
        {includes.map((item, i) => {
          const itemClass = [
            styles['pricing-card__list-item'],
            item.included
              ? styles['pricing-card__list-item--included']
              : styles['pricing-card__list-item--excluded'],
          ].join(' ');
          return (
            <li key={i} className={itemClass}>
              <span className={styles['pricing-card__list-icon']} aria-hidden="true">
                {item.included ? '✓' : '✗'}
              </span>
              {item.text}
            </li>
          );
        })}
      </ul>

      <Link
        href={buildWALink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles['pricing-card__cta']}
      >
        Cotizar por WhatsApp
      </Link>
    </motion.article>
  );
}
