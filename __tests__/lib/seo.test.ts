import { generateMeta, PAGE_META, JSON_LD_LOCAL_BUSINESS } from '@/lib/seo';
import { COMPANY } from '@/data/company';

describe('PAGE_META', () => {
  const pages = ['home', 'productos', 'servicios', 'marcas', 'soporte', 'contacto'] as const;

  it('contains all required page keys', () => {
    pages.forEach((page) => {
      expect(PAGE_META).toHaveProperty(page);
    });
  });

  it('each page entry has title, description, keywords and path', () => {
    pages.forEach((page) => {
      const meta = PAGE_META[page];
      expect(typeof meta.title).toBe('string');
      expect(typeof meta.description).toBe('string');
      expect(typeof meta.keywords).toBe('string');
      expect(typeof meta.path).toBe('string');
    });
  });

  it('home path is "/"', () => {
    expect(PAGE_META.home.path).toBe('/');
  });
});

describe('generateMeta', () => {
  it('returns an object with title and description', () => {
    const meta = generateMeta('home');
    expect(meta.title).toBe(PAGE_META.home.title);
    expect(meta.description).toBe(PAGE_META.home.description);
  });

  it('includes openGraph with site url', () => {
    const meta = generateMeta('productos');
    expect(meta.openGraph?.url).toContain(COMPANY.siteUrl);
  });

  it('includes twitter card metadata', () => {
    const meta = generateMeta('servicios');
    expect(meta.twitter?.card).toBe('summary_large_image');
  });

  it('includes canonical alternate link', () => {
    const meta = generateMeta('contacto');
    expect(meta.alternates?.canonical).toContain(PAGE_META.contacto.path);
  });
});

describe('JSON_LD_LOCAL_BUSINESS', () => {
  it('has correct schema type', () => {
    expect(JSON_LD_LOCAL_BUSINESS['@type']).toBe('LocalBusiness');
  });

  it('matches company data', () => {
    expect(JSON_LD_LOCAL_BUSINESS.name).toBe(COMPANY.name);
    expect(JSON_LD_LOCAL_BUSINESS.email).toBe(COMPANY.email);
  });

  it('has an offer catalog with items', () => {
    expect(JSON_LD_LOCAL_BUSINESS.hasOfferCatalog.itemListElement.length).toBeGreaterThan(0);
  });
});
