'use client';
import { useState } from 'react';
import { ProductPanel } from '@/components/ProductPanel';
import styles from './ProductTabs.module.css';
import type { ProductTabsProps } from './types';

export function ProductTabs({ categories }: ProductTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <div className={styles.tabs}>
      <div
        role="tablist"
        aria-label="Categorías de productos"
        className={styles['tabs__list']}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            id={`tab-${cat.id}`}
            aria-selected={activeId === cat.id}
            aria-controls={`panel-${cat.id}`}
            className={`${styles['tabs__tab']} ${activeId === cat.id ? styles['tabs__tab--active'] : ''}`}
            onClick={() => setActiveId(cat.id)}
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
