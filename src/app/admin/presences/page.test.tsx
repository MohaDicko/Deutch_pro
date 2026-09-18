import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AttendancePage from './page';

describe('Attendance dashboard', () => {
  it('affiche la saisie et l’historique des présences', async () => {
    const page = await AttendancePage();

    render(page);

    expect(screen.getByText(/présences et assiduité/i)).toBeInTheDocument();
    expect(screen.getByText(/enregistrer une présence/i)).toBeInTheDocument();
    expect(screen.getByText(/historique récent/i)).toBeInTheDocument();
  });
});
