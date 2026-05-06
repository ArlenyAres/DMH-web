import { COMPANY } from '@/data/company';

describe('COMPANY data', () => {
  it('has a non-empty name', () => {
    expect(COMPANY.name).toBeTruthy();
  });

  it('has a valid whatsapp number format', () => {
    expect(COMPANY.whatsapp).toMatch(/^\+\d+$/);
  });

  it('has a valid email', () => {
    expect(COMPANY.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('has a valid site URL', () => {
    expect(COMPANY.siteUrl).toMatch(/^https?:\/\//);
  });

  it('has shortName "DMH"', () => {
    expect(COMPANY.shortName).toBe('DMH');
  });

  it('bankAccount is a non-empty string', () => {
    expect(COMPANY.bankAccount.length).toBeGreaterThan(0);
  });
});
