'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './WebGallery.module.css';
import type { WebGalleryProps } from './types';

const SLIDES_BREAKPOINT = 900;
const DEFAULT_SLIDES_VISIBLE = 2;

function getSlidesVisible(): number {
  if (typeof window === 'undefined') return DEFAULT_SLIDES_VISIBLE;
  return window.innerWidth <= SLIDES_BREAKPOINT ? 1 : DEFAULT_SLIDES_VISIBLE;
}

export function WebGallery({ items, title, subtitle }: WebGalleryProps) {
  const [slidesVisible, setSlidesVisible] = useState(DEFAULT_SLIDES_VISIBLE);
  const [index, setIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const update = () => {
      setSlidesVisible(getSlidesVisible());
      setIndex(0);
    };
    const handleResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(update, 150);
    };
    update();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, []);

  const maxIndex = Math.max(0, items.length - slidesVisible);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(i, maxIndex)));
  }, [maxIndex]);

  const startAutoplay = useCallback(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
  }, [maxIndex]);

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= 50) goTo(delta > 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  };

  const dotCount = maxIndex + 1;

  return (
    <section
      className={styles['web-gallery']}
      role="region"
      aria-label="Ejemplos de proyectos"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {(title || subtitle) && (
        <header className={styles['web-gallery__header']}>
          {title && <h3 className={styles['web-gallery__title']}>{title}</h3>}
          {subtitle && <p className={styles['web-gallery__subtitle']}>{subtitle}</p>}
        </header>
      )}

      <div
        className={styles['web-gallery__track-outer']}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles['web-gallery__track']}
          style={{ transform: `translateX(-${index * (100 / slidesVisible)}%)` }}
          aria-live="polite"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={styles['web-gallery__slide']}
              style={{ width: `${100 / slidesVisible}%` }}
            >
              {/* Browser frame */}
              <div className={styles['browser-frame']}>

                {/* Chrome bar */}
                <div className={styles['browser-chrome']} aria-hidden="true">
                  <div className={styles['browser-dots']}>
                    <span className={styles['browser-dot']} />
                    <span className={styles['browser-dot']} />
                    <span className={styles['browser-dot']} />
                  </div>
                  <div className={styles['browser-address']}>
                    <span className={styles['browser-url']}>{item.url ?? item.title.toLowerCase().replace(/\s+/g, '') + '.com'}</span>
                  </div>
                </div>

                {/* Viewport */}
                <div className={styles['browser-viewport']}>
                  {imgErrors[item.id] ? (
                    <div className={styles['web-gallery__placeholder']} role="img" aria-label={item.imageAlt} />
                  ) : (
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      className={item.isFullPage ? styles['img--scrollable'] : styles['img--static']}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      onError={() => setImgErrors((prev) => ({ ...prev, [item.id]: true }))}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  )}
                  <div className={styles['web-gallery__overlay']} aria-hidden="true" />
                  <span className={styles['web-gallery__badge']}>{item.category}</span>
                  <div className={styles['web-gallery__caption']}>
                    <p className={styles['web-gallery__caption-category']}>{item.variant}</p>
                    <p className={styles['web-gallery__caption-title']}>{item.title}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['web-gallery__controls']}>
        <p className={styles['web-gallery__counter']} aria-live="polite">
          {index + 1} / {dotCount}
        </p>

        <div className={styles['web-gallery__dots']} role="tablist" aria-label="Slides del carrusel">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir al slide ${i + 1}`}
              className={`${styles['web-gallery__dot']} ${i === index ? styles['web-gallery__dot--active'] : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className={styles['web-gallery__arrows']}>
          <button
            className={`${styles['web-gallery__arrow']} ${styles['web-gallery__arrow--prev']}`}
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Slide anterior"
          >←</button>
          <button
            className={`${styles['web-gallery__arrow']} ${styles['web-gallery__arrow--next']}`}
            onClick={() => goTo(index + 1)}
            disabled={index >= maxIndex}
            aria-label="Siguiente slide"
          >→</button>
        </div>
      </div>
    </section>
  );
}
