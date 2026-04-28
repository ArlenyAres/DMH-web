import { COMPANY } from '@/data/company';

export function buildWALink(message?: string): string {
  const base = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general:    '¡Hola DMH! Me gustaría información sobre sus productos y servicios.',
  cotizacion: '¡Hola DMH! Quiero solicitar una cotización.',
  soporte:    '¡Hola DMH! Necesito soporte técnico.',
  contacto:   '¡Hola Ligia! Soy cliente y me gustaría una cotización.',
} as const;
