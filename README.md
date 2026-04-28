# DMH – Distribuidora Merly Herazo · Web Corporativa

Web SPA informativa para DMH, construida con Next.js 16 + TypeScript + CSS Modules (BEM).

## Stack
- Next.js 16 (App Router)
- TypeScript 5 strict
- CSS3 Modules — metodología BEM
- Framer Motion 12
- next-sitemap

## Inicio rápido
```bash
git clone <repo>
cd dmh_corporate_web
cp .env.example .env.local
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de producción
npm run sitemap    # Genera sitemap.xml y robots.txt (post-build)
```

## Variables de entorno
| Variable | Descripción |
|---|---|
| NEXT_PUBLIC_SITE_URL | URL de producción |
| NEXT_PUBLIC_WA_NUMBER | Número WhatsApp sin + |
| NEXT_PUBLIC_WA_MESSAGE | Mensaje pre-llenado |

## Deploy en Vercel
1. Push a GitHub
2. Conectar repo en vercel.com
3. Configurar variable `NEXT_PUBLIC_SITE_URL`
4. Deploy automático en cada push a main

## Estructura del proyecto
```
app/               # Rutas App Router
components/        # Componentes UI con CSS Modules BEM
data/              # Datos estáticos tipados
lib/               # Utilidades (seo, whatsapp, animations)
types/             # Interfaces TypeScript globales
```

## Checklist MVP
- [x] Header sticky con nav + CTA WhatsApp
- [x] Hero pantalla completa con badge animado + h1 + CTAs + stats
- [x] Strip de marcas animado (CSS marquee)
- [x] Feature cards (Confianza / Seguridad / Disponibilidad)
- [x] Página /productos con ProductTabs (10 categorías)
- [x] Página /servicios con ServicesList (8 servicios)
- [x] Página /marcas con BrandGrid (20+ marcas)
- [x] Página /soporte con FaqAccordion (8 preguntas)
- [x] Página /contacto con datos + banco + WhatsApp CTA
- [x] WhatsAppChat FAB en todas las páginas
- [x] SEO completo (title, description, OG, JSON-LD) en las 6 páginas
- [x] Accesibilidad WCAG AA (landmarks, focus-visible, aria, sr-only)
- [x] prefers-reduced-motion respetado
- [x] Build de producción limpio (0 errores, 0 warnings)
- [ ] sitemap.xml + robots.txt (ejecutar `npm run sitemap` post-build)
- [ ] Deploy en Vercel
