import { ServiceCard } from '@/components/ServiceCard';
import styles from './ServicesList.module.css';
import type { ServicesListProps } from './types';

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div className={styles.list}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
