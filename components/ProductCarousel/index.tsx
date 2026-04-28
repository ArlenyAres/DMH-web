'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { buildWALink } from '@/lib/whatsapp';
import styles from './ProductCarousel.module.css';
import type { ProductCarouselProps } from './types';

const DEFAULT_AUTOPLAY_INTERVAL = 5500;

export function ProductCarousel({
  categories,
  autoPlayInterval = DEFAULT_AUTOPLAY_INTERVAL,
}: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselId = useId();

  useEffect(() => {
    if (categories.length < 2 || autoPlayInterval <= 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % categories.length);
    }, autoPlayInterval);

    return () => window.clearInterval(intervalId);
  }, [autoPlayInterval, categories.length]);

  if (categories.length === 0) {
    return null;
  }

  const activeCategory = categories[activeIndex];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? categories.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % categories.length);
  };

  return (
    <div
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Carrusel del catalogo de productos y servicios"
    >
      <div className={styles.carousel__intro}>
        <div>
          <p className={styles.carousel__eyebrow}></p>
          <h2 id="productos-heading" className={styles.carousel__title}>
            Puedes encontrar todos los productos para tu empresa con nosotros
          </h2>
        </div>
        <p className={styles.carousel__description}>
          Recorre el catálogo por categorías, consulta marcas disponibles y abre una cotización directa por WhatsApp.
        </p>
      </div>

      <div className={styles.carousel__viewport}>
        <button
          type="button"
          className={styles.carousel__nav}
          onClick={showPrevious}
          aria-controls={`${carouselId}-slide-${activeCategory.id}`}
          aria-label="Mostrar categoria anterior"
        >
          <span aria-hidden="true">&larr;</span>
        </button>

        <article
          id={`${carouselId}-slide-${activeCategory.id}`}
          className={styles.carousel__slide}
          aria-live="polite"
        >
          <div className={styles.carousel__meta}>
            <div>
              <h3 className={styles.carousel__name}>{activeCategory.name}</h3>
            </div>
          </div>

          <div className={styles.carousel__brands} aria-label="Marcas disponibles">
            {activeCategory.brands.map((brand) => (
              <span key={brand} className={styles.carousel__badge}>{brand}</span>
            ))}
          </div>

          <ul className={styles.carousel__items}>
            {activeCategory.items.map((item) => (
              <li key={item.id} className={styles.carousel__item}>
                <span className={styles.carousel__itemIcon} aria-hidden="true" />
                <div className={styles.carousel__itemBody}>
                  <span className={styles.carousel__itemName}>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href={buildWALink(activeCategory.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.carousel__cta}
          >
            Cotizar {activeCategory.name}
            <span className="sr-only"> abre WhatsApp en una nueva pestana</span>
          </Link>
        </article>

        <button
          type="button"
          className={styles.carousel__nav}
          onClick={showNext}
          aria-controls={`${carouselId}-slide-${activeCategory.id}`}
          aria-label="Mostrar categoria siguiente"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      <div className={styles.carousel__dots} aria-label="Seleccionar categoria del catalogo">
        {categories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            aria-label={`Mostrar ${category.name}`}
            aria-pressed={index === activeIndex}
            className={`${styles.carousel__dot} ${index === activeIndex ? styles['carousel__dot--active'] : ''}`}
            onClick={() => goToSlide(index)}
          >
            <span className="sr-only">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}