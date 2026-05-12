import { Hero, BrandsStrip, FeatureCard, CtaBanner } from '@/components';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      <BrandsStrip />

      <section className={styles['features']} aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading" className={styles['features__heading']}>
            ¿Por qué elegir <span className={styles['features__accent']}>DMH</span>?
          </h2>
          <p className={styles['features__sub']}>
            Somos tu socio estratégico en tecnología corporativa, con años de experiencia y un equipo comprometido.
          </p>
          <div className={styles['features__grid']}>
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              }
              title="Confianza Total"
              description="Años de trayectoria distribuyendo tecnología al sector corporativo venezolano con transparencia y compromiso."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
              title="Respaldo Garantizado"
              description="Técnicos e ingenieros certificados ofrecen soporte post-venta incondicional. Tu inversión siempre protegida."
            />
            <FeatureCard
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              }
              title="Disponibilidad Inmediata"
              description="Hacemos tu cotización de manera inmediata, despacho nacional y acceso a más de 10 categorías de productos y 20 marcas líderes."
            />
          </div>
        </div>
      </section>

      <section className={styles['cta-section']}>
        <div className="container">
          <CtaBanner
            title="¿Necesitas una cotización ahora?"
            subtitle="Respondemos en horas hábiles con el mejor precio del mercado. Todo lo que necesitas, nosotros te lo conseguimos."
            ctaLabel="Cotizar por WhatsApp"
            ctaHref={buildWALink(WA_MESSAGES.cotizacion)}
            secondaryLabel="Ver catálogo completo"
            secondaryHref="/productos"
          />
        </div>
      </section>
    </>
  );
}
