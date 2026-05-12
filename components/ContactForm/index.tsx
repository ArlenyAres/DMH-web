'use client';
import { useState } from 'react';
import { buildWALink } from '@/lib/whatsapp';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', message: '' });

  const set = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}${form.company ? ` de ${form.company}` : ''}.\n\n${form.message}`;
    window.open(buildWALink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.field}>
        <label htmlFor="cf-name" className={styles.label}>Nombre</label>
        <input
          id="cf-name"
          type="text"
          className={styles.input}
          placeholder="Tu nombre completo"
          value={form.name}
          onChange={set('name')}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-company" className={styles.label}>
          Empresa <span className={styles.optional}>— opcional</span>
        </label>
        <input
          id="cf-company"
          type="text"
          className={styles.input}
          placeholder="Nombre de tu empresa"
          value={form.company}
          onChange={set('company')}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>Mensaje</label>
        <textarea
          id="cf-message"
          className={styles.textarea}
          placeholder="¿En qué podemos ayudarte?"
          rows={5}
          value={form.message}
          onChange={set('message')}
          required
        />
      </div>

      <button type="submit" className={styles.btn}>
        Enviar por WhatsApp
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
