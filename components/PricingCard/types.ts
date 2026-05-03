import type { WebPlanInclude } from '@/types';

export interface PricingCardProps {
  badge: string;
  badgeVariant: 'entry' | 'featured' | 'premium' | 'custom';
  type: string;
  name: string;
  priceFrom: number;
  priceTo: number | null;
  priceSuffix: string;
  useCase: string;
  includes: WebPlanInclude[];
  isFeatured?: boolean;
  waMessage: string;
  className?: string;
}
