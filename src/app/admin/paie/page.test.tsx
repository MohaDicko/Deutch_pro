import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PayrollPage from './page';

describe('Payroll dashboard', () => {
  it('affiche la synthèse salariale et le net à payer', async () => {
    const page = await PayrollPage();

    render(page);

    expect(screen.getByText(/paie du mois/i)).toBeInTheDocument();
    expect(screen.getByText(/Anne Koné/i)).toBeInTheDocument();
    expect(screen.getByText(/net à payer/i)).toBeInTheDocument();
    expect(screen.getAllByText(/à valider/i).length).toBeGreaterThan(0);
  });
});
