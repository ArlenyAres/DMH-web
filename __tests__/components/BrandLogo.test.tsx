import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrandLogo } from '@/components/BrandLogo';

describe('BrandLogo', () => {
  const baseProps = {
    name: 'HP',
    imgClassName: 'img-class',
    fallbackClassName: 'fallback-class',
  };

  it('renders fallback span when no src is provided', () => {
    render(<BrandLogo {...baseProps} />);
    expect(screen.getByText('HP')).toBeInTheDocument();
  });

  it('renders an img when iconSlug is provided', () => {
    render(<BrandLogo {...baseProps} iconSlug="hp" />);
    const img = screen.getByAltText('HP');
    expect(img).toBeInTheDocument();
  });

  it('renders an img when logoSrc is provided', () => {
    render(<BrandLogo {...baseProps} logoSrc="/hp-logo.png" />);
    const img = screen.getByAltText('HP');
    expect(img).toBeInTheDocument();
  });

  it('renders fallback span after image error', async () => {
    render(<BrandLogo {...baseProps} iconSlug="hp" />);
    const img = screen.getByAltText('HP');
    await act(async () => {
      img.dispatchEvent(new Event('error'));
    });
    expect(screen.getByText('HP')).toBeInTheDocument();
  });
});
