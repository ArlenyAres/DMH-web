import { COMPANY } from '@/data/company';
import styles from './BankCard.module.css';

export function BankCard() {
  return (
    <div className={styles.card}>
      <div className={styles['card__header']}>
        <span className={styles['card__icon']} aria-hidden="true">🏦</span>
        <div>
          <div className={styles['card__title']}>Datos Bancarios</div>
          <div className={styles['card__subtitle']}>Transferencia a nombre de:</div>
        </div>
      </div>

      <dl className={styles['card__rows']}>
        <div className={styles['card__row']}>
          <dt className={styles['card__label']}>Banco</dt>
          <dd className={styles['card__value']}>{COMPANY.bank}</dd>
        </div>
        <div className={styles['card__row']}>
          <dt className={styles['card__label']}>Titular</dt>
          <dd className={styles['card__value']}>{COMPANY.bankHolder}</dd>
        </div>
        <div className={styles['card__row']}>
          <dt className={styles['card__label']}>Número de cuenta</dt>
          <dd className={`${styles['card__value']} ${styles['card__account']}`}>
            {COMPANY.bankAccount}
          </dd>
        </div>
        <div className={styles['card__row']}>
          <dt className={styles['card__label']}>RIF</dt>
          <dd className={styles['card__value']}>{COMPANY.rif}</dd>
        </div>
      </dl>

      <p className={styles['card__note']}>
        Incluye tu nombre completo o empresa en el concepto de la transferencia para procesarla correctamente.
      </p>
    </div>
  );
}
