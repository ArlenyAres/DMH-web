'use client';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import { PricingCard } from '@/components/PricingCard';
import type { WebPlan } from '@/types';
import styles from './PricingGrid.module.css';

interface PricingGridProps {
  plans: WebPlan[];
}

export function PricingGrid({ plans }: PricingGridProps) {
  return (
    <motion.div
      className={styles['pricing-grid']}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {plans.map((plan) => (
        <PricingCard
          key={plan.id}
          badge={plan.badge}
          badgeVariant={plan.badgeVariant}
          type={plan.type}
          name={plan.name}
          priceFrom={plan.priceFrom}
          priceTo={plan.priceTo}
          priceSuffix={plan.priceSuffix}
          useCase={plan.useCase}
          includes={plan.includes}
          isFeatured={plan.isFeatured}
          waMessage={plan.waMessage}
        />
      ))}
    </motion.div>
  );
}
