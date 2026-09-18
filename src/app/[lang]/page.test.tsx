import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/components/Header', () => ({
  default: ({ dict }: { dict: any }) => <header>{dict.contactBtn}</header>,
}));
vi.mock('@/components/Hero', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.title1}</section>,
}));
vi.mock('@/components/Services', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.title}</section>,
}));
vi.mock('@/components/B2B', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.title}</section>,
}));
vi.mock('@/components/Niveaux', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.title}</section>,
}));
vi.mock('@/components/Testimonials', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.testimonials?.title || 'avis'}</section>,
}));
vi.mock('@/components/Partners', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.title}</section>,
}));
vi.mock('@/components/Contact', () => ({
  default: ({ dict }: { dict: any }) => <section>{dict.title}</section>,
}));
vi.mock('@/components/WhatsAppButton', () => ({
  default: () => <div>WhatsApp</div>,
}));
vi.mock('@/components/Footer', () => ({
  default: ({ dict }: { dict: any }) => <footer>{dict.footer?.rights || 'footer'}</footer>,
}));

import Home from './page';

describe('Home page integration', () => {
  it('compose les sections principales dans le bon ordre', async () => {
    const page = await Home({ params: Promise.resolve({ lang: 'fr' }) });

    render(page);

    expect(screen.getByText('Nous Contacter')).toBeInTheDocument();
    expect(screen.getByText(/Apprenez l[’']allemand/i)).toBeInTheDocument();
    expect(screen.getByText('Une formation qui suit le réel besoin des apprenants')).toBeInTheDocument();
    expect(screen.getByText('Formez vos équipes')).toBeInTheDocument();
    expect(screen.getByText('Tous droits réservés.')).toBeInTheDocument();
  });
});
