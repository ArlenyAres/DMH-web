import type { Metadata } from 'next';
import { PageBanner, FaqAccordion, CtaBanner } from '@/components';
import { FAQ } from '@/data/faq';
import { generateMeta } from '@/lib/seo';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './soporte.module.css';

export const metadata: Metadata = generateMeta('soporte');

export default function SoportePage() {
  return (
    <>
      <PageBanner
        title="Soporte & Ayuda"
        subtitle="Encuentra respuesta a tus preguntas más frecuentes y datos para pagos y contacto."
        breadcrumb="Soporte"
      />

      <section className={styles.section}>
        <div className="container">
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className="container">
          <CtaBanner
            title="¿No encontraste tu respuesta?"
            subtitle="Nuestro equipo está listo para ayudarte. Contáctanos directamente por WhatsApp."
            ctaLabel="Hablar con soporte"
            ctaHref={buildWALink(WA_MESSAGES.soporte)}
          />
        </div>
      </section>
    </>
  );
}
