import type { Metadata } from 'next';
import { PageBanner, ProductTabs, CtaBanner } from '@/components';
import { PRODUCTS } from '@/data/products';
import { generateMeta } from '@/lib/seo';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './productos.module.css';

export const metadata: Metadata = generateMeta('productos');

export default function ProductosPage() {
  return (
    <>
      <PageBanner
        title="Catálogo de Productos"
        subtitle="Más de 10 categorías con las mejores marcas del mercado. Tecnología, oficina, seguridad y más."
        breadcrumb="Productos"
      />

      <section className={styles.section} aria-labelledby="productos-heading">
        <div className="container">
          <h2 id="productos-heading" className="sr-only">Categorías de productos</h2>
          <ProductTabs categories={PRODUCTS} />
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className="container">
          <CtaBanner
            title="¿No encuentras lo que buscas?"
            subtitle="Si necesitas un producto específico, consúltanos. Si existe en el mercado, lo conseguimos."
            ctaLabel="Consultar por WhatsApp"
            ctaHref={buildWALink(WA_MESSAGES.cotizacion)}
          />
        </div>
      </section>
    </>
  );
}
