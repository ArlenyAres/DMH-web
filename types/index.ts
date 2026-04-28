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
