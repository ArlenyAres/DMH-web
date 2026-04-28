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
              emoji="🤝"
              title="Confianza Total"
              description="Años de trayectoria distribuyendo tecnología al sector corporativo venezolano con transparencia y compromiso."
            />
            <FeatureCard
              emoji="🛡️"
              title="Respaldo Garantizado"
              description="Técnicos e ingenieros certificados ofrecen soporte post-venta incondicional. Tu inversión siempre protegida."
            />
            <FeatureCard
              emoji="⚡"
              title="Disponibilidad Inmediata"
              description="Cotizaciones en horas, despacho nacional y acceso a más de 10 categorías de productos y 20 marcas líderes."
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
