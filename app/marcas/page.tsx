import type { Metadata } from 'next';
import { PageBanner, BrandGrid, CtaBanner } from '@/components';
import { BRANDS } from '@/data/brands';
import { generateMeta } from '@/lib/seo';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './marcas.module.css';

export const metadata: Metadata = generateMeta('marcas');

export default function MarcasPage() {
  return (
    <>
      <PageBanner
        title="Marcas que Distribuimos"
        subtitle={`Más de ${BRANDS.length} marcas líderes del mercado tecnológico. Calidad garantizada en cada producto.`}
        breadcrumb="Marcas"
      />

      <section className={styles.section} aria-labelledby="marcas-heading">
        <div className="container">
          <h2 id="marcas-heading" className={styles['section__title']}>
            Nuestro portafolio de marcas
          </h2>
          <p className={styles['section__sub']}>
            Distribuimos equipos y consumibles de las marcas más reconocidas a nivel mundial.
            Si la marca que necesitas no aparece aquí, igual podemos conseguirla — consúltanos.
          </p>
          <BrandGrid brands={BRANDS} />
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className="container">
          <CtaBanner
            title="¿Buscas una marca específica?"
            subtitle="Nuestro catálogo va más allá de las marcas listadas. Trabajamos con todo el mercado."
            ctaLabel="Consultar disponibilidad"
            ctaHref={buildWALink(WA_MESSAGES.cotizacion)}
          />
        </div>
      </section>
    </>
  );
}
