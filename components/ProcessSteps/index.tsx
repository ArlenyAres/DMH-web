'use client';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import type { ProcessStep } from './types';
import styles from './ProcessSteps.module.css';

const STEPS: ProcessStep[] = [
  {
    id: 's1',
    number: '01',
    icon: '💬',
    title: 'Consulta inicial',
    description: 'Conversamos por WhatsApp para entender tu proyecto, objetivos y presupuesto.',
  },
  {
    id: 's2',
    number: '02',
    icon: '📋',
    title: 'Propuesta técnica',
    description: 'Te enviamos presupuesto detallado, wireframe y cronograma de entrega.',
  },
  {
    id: 's3',
    number: '03',
    icon: '⚙️',
    title: 'Diseño y desarrollo',
    description: 'Construimos tu web con actualizaciones periódicas para que veas el progreso.',
  },
  {
    id: 's4',
    number: '04',
    icon: '🚀',
    title: 'Entrega y lanzamiento',
    description: 'Revisión final contigo, ajustes, deploy en producción y capacitación de uso.',
  },
];

const fadeUpStep = (i: number) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
});

export function ProcessSteps() {
  return (
    <div className={styles['process-steps']}>
      <motion.ol
        className={styles['process-steps__list']}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {STEPS.map((step, i) => (
          <Fragment key={step.id}>
            <motion.li
              className={styles['process-steps__item']}
              variants={fadeUpStep(i)}
            >
              <div className={styles['process-steps__number']}>{step.number}</div>
              <div>
                <span className={styles['process-steps__icon']} aria-hidden="true">{step.icon}</span>
                <h3 className={styles['process-steps__title']}>{step.title}</h3>
                <p className={styles['process-steps__description']}>{step.description}</p>
              </div>
            </motion.li>
            {i < STEPS.length - 1 && (
              <div className={styles['process-steps__connector']} aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </motion.ol>
    </div>
  );
}
