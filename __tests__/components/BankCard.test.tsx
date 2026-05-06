import React from 'react';
import { render, screen } from '@testing-library/react';
import { BankCard } from '@/components/BankCard';
import { COMPANY } from '@/data/company';

describe('BankCard', () => {
  it('renders the bank name', () => {
    render(<BankCard />);
    expect(screen.getByText(COMPANY.bank)).toBeInTheDocument();
  });

  it('renders the account holder', () => {
    render(<BankCard />);
    expect(screen.getByText(COMPANY.bankHolder)).toBeInTheDocument();
  });

  it('renders the bank account number', () => {
    render(<BankCard />);
    expect(screen.getByText(COMPANY.bankAccount)).toBeInTheDocument();
  });

  it('renders the RIF', () => {
    render(<BankCard />);
    expect(screen.getByText(COMPANY.rif)).toBeInTheDocument();
  });

  it('renders the "Datos Bancarios" title', () => {
    render(<BankCard />);
    expect(screen.getByText('Datos Bancarios')).toBeInTheDocument();
  });
});
