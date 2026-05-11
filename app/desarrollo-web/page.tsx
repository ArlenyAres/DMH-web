import type { Metadata } from 'next';
import { generateMeta, JSON_LD_SERVICE } from '@/lib/seo';
import {
  PageBanner,
  PricingGrid,
  WebGallery,
  ProcessSteps,
  CtaBanner,
  SeoHead,
} from '@/components';
import { WEB_PLANS } from '@/data/webdev';
import { PORTFOLIO } from '@/data/portfolio';
import { buildWALink } from '@/lib/whatsapp';
import styles from './page.module.css';

export const metadata: Metadata = generateMeta('desarrollo-web');

export default function DesarrolloWebPage() {
  return (
    <>
      <SeoHead jsonLd={JSON_LD_SERVICE} />

      {/* 1 — Banner de página */}
      <PageBanner
        title="Desarrollo Web Profesional"
        subtitle="Presencia digital que convierte visitas en clientes. Webs rápidas, modernas y con SEO optimizado para Venezuela."
        breadcrumb="Desarrollo Web"
      />

      {/* 2 — Intro + stats */}
      <section className={styles['devweb-intro']} aria-labelledby="devweb-intro-title">
        <div className={styles['devweb-intro__inner']}>
          <div className={styles['devweb-intro__copy']}>
            <span className={styles['devweb-intro__eyebrow']}>Nuestro enfoque</span>
            <h2 id="devweb-intro-title" className={styles['devweb-intro__title']}>
              Tu web, <em>hecha a la medida</em> de tu negocio
            </h2>
            <p className={styles['devweb-intro__text']}>
              Construimos webs con tecnología moderna (Next.js, TypeScript) pensadas para
              posicionar en Google, cargar rápido y convertir visitantes en clientes.
              Más de 4 tipos de proyecto, desde una landing de impacto hasta una tienda
              online completa.
            </p>
            <p className={styles['devweb-intro__text']}>
              Trabajamos para empresas, emprendedores y profesionales en Venezuela con
              precios en dólares, proceso claro y entregas en tiempo real.
            </p>
          </div>
          <aside className={styles['devweb-intro__stats']} aria-label="Cifras clave">
            <div className={styles['devweb-stat']}>
              <span className={styles['devweb-stat__num']}>4</span>
              <span className={styles['devweb-stat__label']}>Tipos de proyecto</span>
            </div>
            <div className={styles['devweb-stat']}>
              <span className={styles['devweb-stat__num']}>10+</span>
              <span className={styles['devweb-stat__label']}>Tecnologías</span>
            </div>
            <div className={styles['devweb-stat']}>
              <span className={styles['devweb-stat__num']}>SEO</span>
              <span className={styles['devweb-stat__label']}>En todos los proyectos</span>
            </div>
            <div className={styles['devweb-stat']}>
              <span className={styles['devweb-stat__num']}>100%</span>
              <span className={styles['devweb-stat__label']}>Responsive</span>
            </div>
          </aside>
        </div>
      </section>

      {/* 3 — Pricing Grid (4 cards) */}
      <section
        className={styles['devweb-pricing']}
        aria-labelledby="devweb-pricing-title"
      >
        <div className={styles['devweb-pricing__inner']}>
          <header className={styles['devweb-pricing__header']}>
            <span className={styles['devweb-pricing__eyebrow']}>Planes y precios</span>
            <h2 id="devweb-pricing-title" className={styles['devweb-pricing__title']}>
              Elige el plan <em>que necesita tu proyecto</em>
            </h2>
            <p className={styles['devweb-pricing__subtitle']}>
              Precios en dólares. Sin sorpresas. Sin letra pequeña.
            </p>
          </header>
          <PricingGrid plans={WEB_PLANS} />
        </div>
      </section>

      {/* 4 — Galería de ejemplos */}
      <section
        className={styles['devweb-gallery']}
        aria-labelledby="devweb-gallery-title"
      >
        <div className={styles['devweb-gallery__inner']}>
          <header className={styles['devweb-gallery__header']}>
            <span className={styles['devweb-gallery__eyebrow']}>Ejemplos de trabajo</span>
            <h2 id="devweb-gallery-title" className={styles['devweb-gallery__title']}>
              Proyectos que <em>hablan por sí solos</em>
            </h2>
          </header>
          <WebGallery
            items={PORTFOLIO}
            title="Proyectos realizados"
            subtitle="Ejemplos de distintos tipos de web para diferentes industrias."
          />
        </div>
      </section>

      {/* 5 — Proceso de trabajo */}
      <section
        className={styles['devweb-process']}
        aria-labelledby="devweb-process-title"
      >
        <div className={styles['devweb-process__inner']}>
          <header className={styles['devweb-process__header']}>
            <span className={styles['devweb-process__eyebrow']}>Cómo trabajamos</span>
            <h2 id="devweb-process-title" className={styles['devweb-process__title']}>
              Del primer mensaje <em>a tu web en vivo</em>
            </h2>
          </header>
          <ProcessSteps />
        </div>
      </section>

      {/* 6 — CTA final */}
      <CtaBanner
        title="¿Tienes un proyecto en mente?"
        subtitle="Cuéntanos tu idea por WhatsApp. Te respondemos con una propuesta concreta en menos de 24 horas."
        ctaLabel="Chatear por WhatsApp"
        ctaHref={buildWALink('¡Hola! Quiero hablar sobre el desarrollo de mi página web.')}
        secondaryLabel="Enviar Email"
        secondaryHref="mailto:ventas2.dmh@outlook.com"
      />
    </>
  );
}
