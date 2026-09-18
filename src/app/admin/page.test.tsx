import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { findManyContacts, findManyB2b } = vi.hoisted(() => ({
  findManyContacts: vi.fn(),
  findManyB2b: vi.fn(),
}));

const daysAgo = (days: number) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);

const contacts = [
  {
    id: '1',
    name: 'Awa Diallo',
    email: 'awa@test.com',
    phone: '+223 00 00 00 00',
    message: 'Je veux préparer le niveau B1',
    language: 'fr',
    status: 'nouveau',
    created_at: daysAgo(5),
  },
  {
    id: '2',
    name: 'Moussa Traoré',
    email: 'moussa@test.com',
    phone: '+223 11 11 11 11',
    message: 'Désire des cours intensifs',
    language: 'fr',
    status: 'traite',
    created_at: daysAgo(20),
  },
];

const b2bRequests = [
  {
    id: '10',
    company: 'Orange Mali',
    contact_name: 'Saliou Koné',
    email: 'saliou@orange.ml',
    phone: '+223 22 22 22 22',
    sector: 'Télécom',
    candidates_count: '12',
    message: 'Besoin d’une formation allemande pour nos équipes.',
    status: 'en cours',
    created_at: daysAgo(12),
  },
];

vi.mock('@prisma/client', () => ({
  PrismaClient: vi.fn(() => ({
    contacts: { findMany: findManyContacts },
    b2b_requests: { findMany: findManyB2b },
  })),
}));

import AdminDashboard from './page';

describe('Admin dashboard', () => {
  beforeEach(() => {
    findManyContacts.mockReset();
    findManyB2b.mockReset();
    findManyContacts.mockResolvedValue(contacts);
    findManyB2b.mockResolvedValue(b2bRequests);
  });

  it('affiche les filtres et la recherche pour gérer les demandes commerciales', async () => {
    const page = await AdminDashboard({
      searchParams: Promise.resolve({ tab: 'all', q: '', status: 'all', dateRange: '30' }),
    });

    render(page);

    expect(screen.getByPlaceholderText(/rechercher/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /tous/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /nouveau/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /en cours/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('button', { name: /mettre à jour/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /exporter csv/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/filtrer par date/i)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /mettre à jour/i }).length).toBeGreaterThan(0);
  });
});
