import Link from 'next/link';
import { COMPANY } from '@/data/company';
import { buildWALink, WA_MESSAGES } from '@/lib/whatsapp';
import styles from './ContactInfo.module.css';

export function ContactInfo() {
  return (
    <div className={styles.info}>
      <div className={styles['info__item']}>
        <span className={styles['info__icon']} aria-hidden="true">📱</span>
        <div className={styles['info__content']}>
          <div className={styles['info__label']}>WhatsApp</div>
          <Link
            href={buildWALink(WA_MESSAGES.contacto)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles['info__value']} ${styles['info__link']}`}
          >
            {COMPANY.whatsappDisplay}
          </Link>
          <div className={styles['info__sub']}>Respuesta en horas hábiles</div>
        </div>
      </div>

      <div className={styles['info__item']}>
        <span className={styles['info__icon']} aria-hidden="true">📞</span>
        <div className={styles['info__content']}>
          <div className={styles['info__label']}>Teléfono</div>
          <Link
            href={`tel:${COMPANY.phone}`}
            className={`${styles['info__value']} ${styles['info__link']}`}
          >
            {COMPANY.phoneDisplay}
          </Link>
        </div>
      </div>

      <div className={styles['info__item']}>
        <span className={styles['info__icon']} aria-hidden="true">✉</span>
        <div className={styles['info__content']}>
          <div className={styles['info__label']}>Correo electrónico</div>
          <Link
            href={`mailto:${COMPANY.email}`}
            className={`${styles['info__value']} ${styles['info__link']}`}
          >
            {COMPANY.email}
          </Link>
        </div>
      </div>

      <div className={styles['info__item']}>
        <span className={styles['info__icon']} aria-hidden="true">✉</span>
        <div className={styles['info__content']}>
          <div className={styles['info__label']}>Correo de ventas</div>
          <Link
            href={`mailto:${COMPANY.salesEmail}`}
            className={`${styles['info__value']} ${styles['info__link']}`}
          >
            {COMPANY.salesEmail}
          </Link>
        </div>
      </div>

      <div className={styles['info__item']}>
        <span className={styles['info__icon']} aria-hidden="true">👩‍💼</span>
        <div className={styles['info__content']}>
          <div className={styles['info__label']}>Ejecutiva de Ventas</div>
          <div className={styles['info__value']}>{COMPANY.executive}</div>
          <div className={styles['info__sub']}>{COMPANY.role}</div>
        </div>
      </div>

      <div className={styles['info__item']}>
        <span className={styles['info__icon']} aria-hidden="true">🏢</span>
        <div className={styles['info__content']}>
          <div className={styles['info__label']}>Razón social</div>
          <div className={styles['info__value']}>{COMPANY.name}</div>
          <div className={styles['info__sub']}>RIF: {COMPANY.rif}</div>
        </div>
      </div>
    </div>
  );
}
