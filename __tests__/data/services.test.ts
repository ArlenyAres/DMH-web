import { SERVICES } from '@/data/services';

describe('SERVICES data', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(SERVICES)).toBe(true);
    expect(SERVICES.length).toBeGreaterThan(0);
  });

  it('every service has id, emoji, title, description and items', () => {
    SERVICES.forEach((service) => {
      expect(service.id).toBeTruthy();
      expect(service.emoji).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(Array.isArray(service.items)).toBe(true);
      expect(service.items.length).toBeGreaterThan(0);
    });
  });

  it('service ids are unique', () => {
    const ids = SERVICES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('includes a "soporte" service', () => {
    const ids = SERVICES.map((s) => s.id);
    expect(ids).toContain('soporte');
  });
});
