import type { Metadata } from 'next';
import { PageBanner, ServicesList, CtaBanner } from '@/components';
import { SERVICES } from '@/data/services';
import { generateMeta } from '@/lib/seo';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './servicios.module.css';

export const metadata: Metadata = generateMeta('servicios');

export default function ServiciosPage() {
  return (
    <>
      <PageBanner
        title="Nuestros Servicios"
        subtitle="Más que distribución — somos tu socio tecnológico integral con soporte completo."
        breadcrumb="Servicios"
      />

      <section className={styles.section} aria-labelledby="servicios-heading">
        <div className="container">
          <h2 id="servicios-heading" className="sr-only">Lista de servicios</h2>
          <ServicesList services={SERVICES} />
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className="container">
          <CtaBanner
            title="¿Listo para empezar?"
            subtitle="Contáctanos hoy y recibe una cotización personalizada para tu empresa o proyecto."
            ctaLabel="Solicitar servicio"
            ctaHref={buildWALink(WA_MESSAGES.general)}
            secondaryLabel="Ver catálogo"
            secondaryHref="/productos"
          />
        </div>
      </section>
    </>
  );
}
