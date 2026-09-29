import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  const mockDict = {
    footer: {
      rights: "Tous droits réservés.",
      legal: "Mentions Légales",
      privacy: "Confidentialité",
      admin: "Admin"
    }
  };

  it('affiche l\'année actuelle et les droits réservés', () => {
    render(<Footer dict={mockDict} />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    expect(screen.getByText(/Tous droits réservés/)).toBeInTheDocument();
  });

  it('affiche les liens du footer (Admin, Mentions légales)', () => {
    render(<Footer dict={mockDict} />);
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Mentions Légales')).toBeInTheDocument();
    expect(screen.getByText('Confidentialité')).toBeInTheDocument();
  });
});
