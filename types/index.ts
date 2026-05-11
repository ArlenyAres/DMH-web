export interface ProductItem {
  id: string;
  name: string;
}

export interface ProductCategory {
  id: string;
  emoji: string;
  name: string;
  brands: string[];
  items: ProductItem[];
  waMessage: string;
}

export interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
  items: string[];
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  iconSlug?: string;
  logoSrc?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SeoPageMeta {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

export interface WebPlanInclude {
  text: string;
  included: boolean;
}

export interface WebPlan {
  id: string;
  badge: string;
  badgeVariant: 'entry' | 'featured' | 'premium' | 'custom';
  type: string;
  name: string;
  priceFrom: number;
  priceTo: number | null;
  priceSuffix: string;
  useCase: string;
  includes: WebPlanInclude[];
  isFeatured: boolean;
  waMessage: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  variant: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}
