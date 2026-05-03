// Reemplazar los archivos webp con screenshots reales de cada proyecto.
// Dimensiones recomendadas: 1280×800px, formato WebP, máximo 150KB.
// Herramienta para capturar: GoFullPage (extensión Chrome)
// Herramienta para mockup en dispositivo: shots.so o mockup.pics
import type { PortfolioItem } from '@/types';

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'agencia',
    title: 'Agencia de servicios digitales',
    category: 'Landing Page',
    variant: 'Oscura · Tech',
    imageSrc: '/images/portfolio/agencia.webp',
    imageAlt: 'Landing page oscura para agencia de servicios digitales',
    tags: ['Next.js', 'Framer Motion', 'SEO'],
  },
  {
    id: 'distribuidora',
    title: 'Empresa de distribución B2B',
    category: 'Web Corporativa',
    variant: 'Clara · Corporativa',
    imageSrc: '/images/portfolio/distribuidora.webp',
    imageAlt: 'Web corporativa para empresa de distribución',
    tags: ['Next.js', 'TypeScript', 'CMS'],
  },
  {
    id: 'bodegon',
    title: 'Bodegón / Comercio minorista',
    category: 'Tienda Online',
    variant: 'E-commerce',
    imageSrc: '/images/portfolio/bodegon.webp',
    imageAlt: 'Tienda online para bodegón y comercio minorista',
    tags: ['Next.js', 'WooCommerce', 'Pagos'],
  },
  {
    id: 'restaurante',
    title: 'Restaurante premium',
    category: 'Web Corporativa',
    variant: 'Oscura · Dorada',
    imageSrc: '/images/portfolio/restaurante.webp',
    imageAlt: 'Web corporativa para restaurante premium',
    tags: ['Next.js', 'Reservas', 'SEO Local'],
  },
  {
    id: 'academia',
    title: 'Academia profesional',
    category: 'Web Corporativa',
    variant: 'Educación',
    imageSrc: '/images/portfolio/academia.webp',
    imageAlt: 'Web corporativa para academia y escuela profesional',
    tags: ['Next.js', 'LMS', 'Cursos Online'],
  },
  {
    id: 'saas',
    title: 'Producto SaaS / Tech',
    category: 'Landing Page',
    variant: 'Tech · Neón',
    imageSrc: '/images/portfolio/saas.webp',
    imageAlt: 'Landing page para producto SaaS tecnológico',
    tags: ['Next.js', 'Animaciones', 'Conversión'],
  },
  {
    id: 'consultor',
    title: 'Consultor / Freelancer',
    category: 'Web Personalizada',
    variant: 'Portfolio · Minimalista',
    imageSrc: '/images/portfolio/consultor.webp',
    imageAlt: 'Web portfolio para consultor y freelancer',
    tags: ['Next.js', 'Portfolio', 'Blog'],
  },
  {
    id: 'clinica',
    title: 'Clínica / Bienestar',
    category: 'Web Corporativa',
    variant: 'Salud · Verde',
    imageSrc: '/images/portfolio/clinica.webp',
    imageAlt: 'Web corporativa para clínica y servicios de salud',
    tags: ['Next.js', 'Citas Online', 'SEO Local'],
  },
];
