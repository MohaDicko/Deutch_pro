import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Partners from './Partners';

describe('Partners Component', () => {
  const mockDict = {
    badge: 'Partenaires & Équipe',
    title: 'Notre équipe en Allemagne',
    subtitle: 'Des structures fiables pour vous accompagner.'
  };

  it('affiche les textes du dictionnaire correctement', () => {
    render(<Partners dict={mockDict} />);
    
    expect(screen.getByText('Partenaires & Équipe')).toBeInTheDocument();
    expect(screen.getByText('Notre équipe en Allemagne')).toBeInTheDocument();
    expect(screen.getByText('Des structures fiables pour vous accompagner.')).toBeInTheDocument();
  });

  it('affiche tous les membres de l\'équipe codés en dur', () => {
    render(<Partners dict={mockDict} />);
    
    // Test de la présence des membres (depuis la liste PARTNERS_LIST)
    expect(screen.getByText('Tamou Traoré')).toBeInTheDocument();
    expect(screen.getByText('Malick Sissoko')).toBeInTheDocument();
    expect(screen.getByText('Fatou Traoré')).toBeInTheDocument();
    expect(screen.getByText('Lassana Traoré')).toBeInTheDocument();
    expect(screen.getByText('Amadou Doumbia')).toBeInTheDocument();
    expect(screen.getByText('Mahamadou S. Kayo')).toBeInTheDocument();
  });

  it('affiche les emails professionnels générés', () => {
    render(<Partners dict={mockDict} />);
    
    expect(screen.getByText('tamou.traore@deutschprobko.com')).toBeInTheDocument();
    expect(screen.getByText('malick.sissoko@deutschprobko.com')).toBeInTheDocument();
  });
});
