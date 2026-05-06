import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ServiceCard } from '@/components/ServiceCard';
import type { Service } from '@/types';

const service: Service = {
  id: 'test-svc',
  emoji: '🔧',
  title: 'Soporte Técnico',
  description: 'Asistencia post-venta.',
  items: ['Técnicos certificados', 'Respaldo post-venta'],
};

describe('ServiceCard', () => {
  it('renders the service title', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByText('Soporte Técnico')).toBeInTheDocument();
  });

  it('renders the service description', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByText('Asistencia post-venta.')).toBeInTheDocument();
  });

  it('renders all service items', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByText('Técnicos certificados')).toBeInTheDocument();
    expect(screen.getByText('Respaldo post-venta')).toBeInTheDocument();
  });

  it('renders the emoji', () => {
    render(<ServiceCard service={service} />);
    expect(screen.getByText('🔧')).toBeInTheDocument();
  });

  it('has the correct aria-label on the card', () => {
    render(<ServiceCard service={service} />);
    expect(
      screen.getByRole('button', { name: /Ver más sobre Soporte Técnico/i })
    ).toBeInTheDocument();
  });

  it('opens the popup on click', () => {
    render(<ServiceCard service={service} />);
    const card = screen.getByRole('button', { name: /Ver más sobre Soporte Técnico/i });
    fireEvent.click(card);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes the popup when Escape is pressed', () => {
    render(<ServiceCard service={service} />);
    const card = screen.getByRole('button', { name: /Ver más sobre Soporte Técnico/i });
    fireEvent.click(card);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
