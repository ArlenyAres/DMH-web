'use client';
import { useRef, useState } from 'react';
import { ProductPanel } from '@/components/ProductPanel';
import styles from './ProductTabs.module.css';
import type { ProductTabsProps } from './types';

export function ProductTabs({ categories }: ProductTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const active = categories.find((c) => c.id === activeId) ?? categories[0];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const total = categories.length;
    let next = -1;
    if (e.key === 'ArrowRight') next = (index + 1) % total;
    else if (e.key === 'ArrowLeft') next = (index - 1 + total) % total;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = total - 1;
    if (next !== -1) {
      e.preventDefault();
      setActiveId(categories[next].id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className={styles.tabs}>
      <div
        role="tablist"
        aria-label="Categorías de productos"
        className={styles['tabs__list']}
      >
        {categories.map((cat, index) => (
          <button
            key={cat.id}
            ref={(el) => { tabRefs.current[index] = el; }}
            role="tab"
            id={`tab-${cat.id}`}
            aria-selected={activeId === cat.id}
            aria-controls={`panel-${cat.id}`}
            tabIndex={activeId === cat.id ? 0 : -1}
            className={`${styles['tabs__tab']} ${activeId === cat.id ? styles['tabs__tab--active'] : ''}`}
            onClick={() => setActiveId(cat.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span aria-hidden="true">{cat.emoji}</span>
            {cat.name}
          </button>
        ))}
      </div>
      <div
        id={`panel-${active.id}`}
        className={styles['tabs__panel']}
      >
        <ProductPanel category={active} />
      </div>
    </div>
  );
}
