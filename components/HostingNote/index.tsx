import styles from './HostingNote.module.css';

export function HostingNote() {
  return (
    <aside className={styles['hosting-note']} aria-label="Información sobre hosting y dominio">
      <div className={styles['hosting-note__header']}>
        <span className={styles['hosting-note__dot']} aria-hidden="true">⚠</span>
        <p className={styles['hosting-note__title']}>
          El costo de hosting y dominio anual no está incluido en el precio
        </p>
      </div>
      <p className={styles['hosting-note__text']}>
        El precio cotizado cubre el diseño y desarrollo de tu web. El hosting (servidor) y el
        dominio (ej: tuempresa.com) se pagan directamente al proveedor que elijas, de forma anual.
      </p>
      <table className={styles['hosting-note__table']} aria-label="Referencia de precios de hosting y dominio">
        <tbody>
          <tr className={styles['hosting-note__table-row']}>
            <td className={styles['hosting-note__table-label']}>Dominio .com</td>
            <td className={styles['hosting-note__table-value']}>Desde $10/año</td>
          </tr>
          <tr className={styles['hosting-note__table-row']}>
            <td className={styles['hosting-note__table-label']}>Dominio .com.ve</td>
            <td className={styles['hosting-note__table-value']}>Desde $15/año</td>
          </tr>
          <tr className={styles['hosting-note__table-row']}>
            <td className={styles['hosting-note__table-label']}>Hosting compartido</td>
            <td className={styles['hosting-note__table-value']}>$30–$80/año</td>
          </tr>
          <tr className={styles['hosting-note__table-row']}>
            <td className={styles['hosting-note__table-label']}>Cloud (Vercel/Netlify)</td>
            <td className={styles['hosting-note__table-value']}>Desde $0/año</td>
          </tr>
        </tbody>
      </table>
      <p className={styles['hosting-note__footer']}>
        Podemos asesorarte en la elección del mejor proveedor para tu proyecto.
      </p>
    </aside>
  );
}
