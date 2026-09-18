import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PlanningPage from './page';

describe('Planning dashboard', () => {
  it('affiche le planning pédagogique des cours et salles', async () => {
    const page = await PlanningPage();

    render(page);

    expect(screen.getByText(/planning pédagogique/i)).toBeInTheDocument();
    expect(screen.getByText(/lundi/i)).toBeInTheDocument();
    expect(screen.getByText(/A1 - Groupe 1/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Salle 02/i).length).toBeGreaterThan(0);
  });
});
