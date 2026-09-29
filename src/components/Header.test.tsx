import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  const mockDict = {
    nav: {
      accueil: "Accueil",
      services: "Services",
      niveaux: "Niveaux",
      temoignages: "Témoignages",
      b2b: "B2B"
    },
    contactBtn: "Nous Contacter",
    portalBtn: "Portail Étudiant"
  };

  it('affiche le logo de Deutsch Pro Bamako', () => {
    render(<Header dict={mockDict} lang="fr" />);
    // Le composant doit avoir un texte Deutsch Pro Bamako
    expect(screen.getByText(/Deutsch Pro Bamako/i)).toBeInTheDocument();
  });

  it('affiche les liens de navigation', () => {
    render(<Header dict={mockDict} lang="fr" />);
    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Niveaux')).toBeInTheDocument();
  });

  it('affiche le bouton de contact', () => {
    render(<Header dict={mockDict} lang="fr" />);
    expect(screen.getByText('Nous Contacter')).toBeInTheDocument();
  });
});
