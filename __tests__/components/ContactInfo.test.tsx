import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactInfo } from '@/components/ContactInfo';
import { COMPANY } from '@/data/company';

describe('ContactInfo', () => {
  it('renders the WhatsApp display number', () => {
    render(<ContactInfo />);
    expect(screen.getByText(COMPANY.whatsappDisplay)).toBeInTheDocument();
  });

  it('renders the email', () => {
    render(<ContactInfo />);
    expect(screen.getByText(COMPANY.email)).toBeInTheDocument();
  });

  it('renders the executive name', () => {
    render(<ContactInfo />);
    expect(screen.getByText(COMPANY.executive)).toBeInTheDocument();
  });

  it('renders the company name', () => {
    render(<ContactInfo />);
    expect(screen.getByText(COMPANY.name)).toBeInTheDocument();
  });

  it('renders the executive role', () => {
    render(<ContactInfo />);
    expect(screen.getByText(COMPANY.role)).toBeInTheDocument();
  });

  it('WhatsApp link opens in a new tab', () => {
    render(<ContactInfo />);
    const waLink = screen.getByText(COMPANY.whatsappDisplay).closest('a');
    expect(waLink).toHaveAttribute('target', '_blank');
  });
});
