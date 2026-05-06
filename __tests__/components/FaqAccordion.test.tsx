import React from 'react';
import { render, screen } from '@testing-library/react';
import { FaqAccordion } from '@/components/FaqAccordion';
import type { FaqItem } from '@/types';

const items: FaqItem[] = [
  { id: 'q1', question: '¿Cómo cotizar?', answer: 'Por WhatsApp.' },
  { id: 'q2', question: '¿Realizan envíos?', answer: 'Sí, a todo el país.' },
];

describe('FaqAccordion', () => {
  it('renders all questions', () => {
    render(<FaqAccordion items={items} />);
    expect(screen.getByText('¿Cómo cotizar?')).toBeInTheDocument();
    expect(screen.getByText('¿Realizan envíos?')).toBeInTheDocument();
  });

  it('renders all answers', () => {
    render(<FaqAccordion items={items} />);
    expect(screen.getByText('Por WhatsApp.')).toBeInTheDocument();
    expect(screen.getByText('Sí, a todo el país.')).toBeInTheDocument();
  });

  it('renders correct number of details elements', () => {
    const { container } = render(<FaqAccordion items={items} />);
    expect(container.querySelectorAll('details').length).toBe(items.length);
  });

  it('renders empty list without errors', () => {
    const { container } = render(<FaqAccordion items={[]} />);
    expect(container.querySelectorAll('details').length).toBe(0);
  });
});
