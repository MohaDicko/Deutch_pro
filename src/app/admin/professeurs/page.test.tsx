import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import TeachersPage from './page';

describe('Teachers dashboard', () => {
  it('affiche le suivi des professeurs et leurs spécialités', async () => {
    const page = await TeachersPage();

    render(page);

    expect(screen.getByText(/gestion professeurs/i)).toBeInTheDocument();
    expect(screen.getAllByText(/spécialités/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Anne Koné/i)).toBeInTheDocument();
    expect(screen.getByText(/Deutsch B1 - B2/i)).toBeInTheDocument();
  });
});
