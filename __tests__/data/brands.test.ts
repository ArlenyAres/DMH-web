import { BRANDS } from '@/data/brands';

describe('BRANDS data', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(BRANDS)).toBe(true);
    expect(BRANDS.length).toBeGreaterThan(0);
  });

  it('every brand has id, name, and category', () => {
    BRANDS.forEach((brand) => {
      expect(brand.id).toBeTruthy();
      expect(brand.name).toBeTruthy();
      expect(brand.category).toBeTruthy();
    });
  });

  it('brand ids are unique', () => {
    const ids = BRANDS.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('contains well-known brands like HP and DELL', () => {
    const names = BRANDS.map((b) => b.name);
    expect(names).toContain('HP');
    expect(names).toContain('DELL');
  });
});
