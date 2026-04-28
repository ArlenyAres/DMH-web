import type { ProductCategory } from '@/types';

export interface ProductCarouselProps {
  categories: ProductCategory[];
  autoPlayInterval?: number;
}