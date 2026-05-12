import type { Metadata } from 'next';
import { PageBanner, ContactInfo, CtaBanner } from '@/components';
import { generateMeta } from '@/lib/seo';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './contacto.module.css';

export const metadata: Metadata = generateMeta('contacto');

export default function ContactoPage() {
  return (
    <>
      <PageBanner
        title="Contacto"
        subtitle="Estamos listos para atenderte. Escríbenos por WhatsApp o correo electrónico."
        breadcrumb="Contacto"
      />

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles['col__title']}>Información de contacto</h2>
          <ContactInfo />
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className="container">
          <CtaBanner
            title="Escríbenos ahora"
            subtitle="Ligia Herazo y nuestro equipo te responden en horas hábiles con la mejor cotización del mercado."
            ctaLabel="Abrir WhatsApp"
            ctaHref={buildWALink(WA_MESSAGES.contacto)}
            secondaryLabel="Ver catálogo"
            secondaryHref="/productos"
          />
        </div>
      </section>
    </>
  );
}
