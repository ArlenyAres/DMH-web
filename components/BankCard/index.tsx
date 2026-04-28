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

      <div className={styles['card__rows']}>
        <div className={styles['card__row']}>
          <span className={styles['card__label']}>Banco</span>
          <span className={styles['card__value']}>{COMPANY.bank}</span>
        </div>
        <div className={styles['card__row']}>
          <span className={styles['card__label']}>Titular</span>
          <span className={styles['card__value']}>{COMPANY.bankHolder}</span>
        </div>
        <div className={styles['card__row']}>
          <span className={styles['card__label']}>Número de cuenta</span>
          <span className={`${styles['card__value']} ${styles['card__account']}`}>
            {COMPANY.bankAccount}
          </span>
        </div>
        <div className={styles['card__row']}>
          <span className={styles['card__label']}>RIF</span>
          <span className={styles['card__value']}>{COMPANY.rif}</span>
        </div>
      </div>

      <p className={styles['card__note']}>
        Incluye tu nombre completo o empresa en el concepto de la transferencia para procesarla correctamente.
      </p>
    </div>
  );
}
