import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import { COMPANY } from '@/data/company';

describe('buildWALink', () => {
  const phone = COMPANY.whatsapp.replace(/\D/g, '');

  it('returns base wa.me URL when no message is provided', () => {
    expect(buildWALink()).toBe(`https://wa.me/${phone}`);
  });

  it('returns base wa.me URL when message is an empty string', () => {
    expect(buildWALink('')).toBe(`https://wa.me/${phone}`);
  });

  it('appends encoded message as query param when message is provided', () => {
    const msg = 'Hola DMH';
    expect(buildWALink(msg)).toBe(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
  });

  it('correctly encodes special characters in message', () => {
    const msg = '¡Hola! ¿Cómo están?';
    expect(buildWALink(msg)).toBe(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
  });
});

describe('WA_MESSAGES', () => {
  it('contains the required message keys', () => {
    expect(WA_MESSAGES).toHaveProperty('general');
    expect(WA_MESSAGES).toHaveProperty('cotizacion');
    expect(WA_MESSAGES).toHaveProperty('soporte');
    expect(WA_MESSAGES).toHaveProperty('contacto');
  });

  it('all messages are non-empty strings', () => {
    Object.values(WA_MESSAGES).forEach((msg) => {
      expect(typeof msg).toBe('string');
      expect(msg.length).toBeGreaterThan(0);
    });
  });
});
