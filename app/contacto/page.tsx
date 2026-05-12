import type { Metadata } from 'next';
import { PageBanner, ContactInfo, ContactForm, CtaBanner } from '@/components';
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
          <div className={styles.grid}>

            <div className={styles.col}>
              <h2 className={styles.colTitle}>Información de contacto</h2>
              <p className={styles.colSub}>
                Puedes comunicarte con nosotros por cualquiera de estos canales. Respondemos en horas hábiles.
              </p>
              <ContactInfo />
            </div>

            <div className={styles.col}>
              <h2 className={styles.colTitle}>Escríbenos</h2>
              <p className={styles.colSub}>
                Completa el formulario y te redirigiremos a WhatsApp con tu mensaje listo para enviar.
              </p>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <CtaBanner
            title="¿Prefieres llamar directamente?"
            subtitle="Ligia Herazo y nuestro equipo te responden con la mejor cotización del mercado."
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
