import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AssessmentsPage from './page';

describe('Assessments dashboard', () => {
  it('affiche les résultats et les apprenants à accompagner', async () => {
    const page = await AssessmentsPage();

    render(page);

    expect(screen.getByText(/évaluations des apprenants/i)).toBeInTheDocument();
    expect(screen.getByText(/Awa Diallo/i)).toBeInTheDocument();
    expect(screen.getByText(/Renforcement/i)).toBeInTheDocument();
  });
});
