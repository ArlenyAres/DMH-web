import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeatureCard } from '@/components/FeatureCard';

describe('FeatureCard', () => {
  const props = {
    emoji: '🚀',
    title: 'Entrega Rápida',
    description: 'Entregamos en tiempo récord.',
  };

  it('renders the title', () => {
    render(<FeatureCard {...props} />);
    expect(screen.getByText('Entrega Rápida')).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<FeatureCard {...props} />);
    expect(screen.getByText('Entregamos en tiempo récord.')).toBeInTheDocument();
  });

  it('renders the emoji', () => {
    render(<FeatureCard {...props} />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('renders an article element', () => {
    const { container } = render(<FeatureCard {...props} />);
    expect(container.querySelector('article')).toBeInTheDocument();
  });
});
