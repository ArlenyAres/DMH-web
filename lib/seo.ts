import type { Metadata } from 'next';
import type { SeoPageMeta } from '@/types';
import { COMPANY } from '@/data/company';

const BASE_TITLE = `DMH – ${COMPANY.name}`;

export const PAGE_META: Record<string, SeoPageMeta> = {
  home: {
    title: `${BASE_TITLE} | Tecnología & Soluciones Corporativas`,
    description: 'DMH: líder en distribución de computadoras, impresoras, telefonía, CCTV, UPS y más. Cotizaciones inmediatas al mejor precio. Contáctanos por WhatsApp.',
    keywords: 'distribuidora tecnologia, computadoras empresas, impresoras corporativas, CCTV seguridad, UPS baterias, DMH Venezuela',
    path: '/',
  },
  productos: {
    title: `Catálogo de Productos | ${BASE_TITLE}`,
    description: 'Más de 10 categorías: computadoras, impresoras, telefonía, CCTV, UPS, línea blanca, papelería y más. HP, Dell, Cisco, Canon, Epson y otras marcas.',
    keywords: 'catalogo productos tecnologia, impresoras HP, computadoras Dell, telefonia Cisco, CCTV camaras, UPS baterias',
    path: '/productos',
  },
  servicios: {
    title: `Nuestros Servicios | ${BASE_TITLE}`,
    description: 'Distribución corporativa, soporte técnico, instalación CCTV, cableado estructurado, mantenimiento de aires, remodelación y capacitación.',
    keywords: 'servicios tecnologia, soporte tecnico empresas, instalacion CCTV, cableado estructurado, mantenimiento aires acondicionados',
    path: '/servicios',
  },
  marcas: {
    title: `Marcas que Distribuimos | ${BASE_TITLE}`,
    description: 'Distribuimos HP, Dell, Lenovo, Apple, Cisco, Avaya, Epson, Canon, Xerox, Kyocera y más de 20 marcas líderes del mercado tecnológico.',
    keywords: 'marcas tecnologia, distribuidor HP Dell Lenovo, Cisco Avaya telefonía, Epson Canon impresoras',
    path: '/marcas',
  },
  soporte: {
    title: `Soporte & Ayuda | ${BASE_TITLE}`,
    description: 'Preguntas frecuentes, métodos de pago, garantías, envíos y contacto directo con nuestro equipo técnico.',
    keywords: 'soporte tecnico, garantia productos, metodos de pago, envios Venezuela, ayuda DMH',
    path: '/soporte',
  },
  contacto: {
    title: `Contacto | ${BASE_TITLE}`,
    description: 'Contáctanos por WhatsApp (0412) 753-4636 o email ventas2.dmh@outlook.com. Ligia Herazo, Ejecutiva de Ventas Corporativas.',
    keywords: 'contacto DMH, Ligia Herazo ventas, WhatsApp cotizacion, email distribuidora tecnologia',
    path: '/contacto',
  },
  'desarrollo-web': {
    title: 'Desarrollo Web Profesional en Venezuela | DMH',
    description: 'Landing pages desde $250, webs corporativas desde $299, tiendas online desde $690. Desarrollo web profesional en Venezuela con Next.js, SEO y WhatsApp integrado.',
    keywords: 'desarrollo web Venezuela, diseño web profesional, landing page Venezuela, tienda online Venezuela, web corporativa Venezuela, precios página web',
    path: '/desarrollo-web',
  },
};

export function generateMeta(page: keyof typeof PAGE_META): Metadata {
  const meta = PAGE_META[page];
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `${COMPANY.siteUrl}${meta.path}`,
      siteName: BASE_TITLE,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    alternates: {
      canonical: `${COMPANY.siteUrl}${meta.path}`,
    },
  };
}

export const JSON_LD_SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Desarrollo Web Profesional',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Distribuidora Merly Herazo',
    telephone: '+584127534636',
    email: 'ventas2.dmh@outlook.com',
  },
  areaServed: 'Venezuela',
  description: 'Servicio de desarrollo web profesional en Venezuela. Landing pages, webs corporativas, tiendas online y proyectos a medida.',
  offers: [
    { '@type': 'Offer', name: 'Landing Page',      price: '250',  priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Web Corporativa',   price: '299',  priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Tienda Online',     price: '690',  priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Web Personalizada', price: '1500', priceCurrency: 'USD' },
  ],
};

export const JSON_LD_LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY.name,
  alternateName: COMPANY.shortName,
  description: COMPANY.description,
  telephone: COMPANY.whatsapp,
  email: COMPANY.email,
  url: COMPANY.siteUrl,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY.whatsapp,
    contactType: 'Sales',
    availableLanguage: 'Spanish',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo DMH',
    itemListElement: [
      { '@type': 'Offer', name: 'Computadoras y Laptops' },
      { '@type': 'Offer', name: 'Impresoras y Consumibles' },
      { '@type': 'Offer', name: 'Telefonía Corporativa' },
      { '@type': 'Offer', name: 'CCTV y Seguridad' },
      { '@type': 'Offer', name: 'UPS y Baterías' },
      { '@type': 'Offer', name: 'Línea Blanca' },
      { '@type': 'Offer', name: 'Cableado Estructurado' },
    ],
  },
};
