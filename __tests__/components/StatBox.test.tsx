import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatBox } from '@/components/StatBox';

describe('StatBox', () => {
  it('renders value and label', () => {
    render(<StatBox value="20+" label="Marcas" />);
    expect(screen.getByText('20+')).toBeInTheDocument();
    expect(screen.getByText('Marcas')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<StatBox value="10" label="Años" description="De experiencia" />);
    expect(screen.getByText('De experiencia')).toBeInTheDocument();
  });

  it('does not render description when omitted', () => {
    const { container } = render(<StatBox value="10" label="Años" />);
    expect(container.querySelectorAll('[class*="stat__description"]').length).toBe(0);
  });
});
