import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Niveaux from './Niveaux';

describe('Niveaux Component', () => {
  const mockDict = {
    badge: 'Votre Progression',
    title: 'Du débutant à l\'expert',
    subtitle: 'Un parcours structuré.',
    A1: { title: 'A1 - Débutant', desc: 'Comprendre des expressions familières.' },
    A2: { title: 'A2 - Élémentaire', desc: 'Comprendre des phrases isolées.' },
    B1: { title: 'B1 - Intermédiaire', desc: 'Sujets familiers.' },
    B2: { title: 'B2 - Avancé', desc: 'Sujets complexes.' }
  };

  it('affiche les titres principaux de la section', () => {
    render(<Niveaux dict={mockDict} />);
    expect(screen.getByText('Votre Progression')).toBeInTheDocument();
    expect(screen.getByText('Du débutant à l\'expert')).toBeInTheDocument();
  });

  it('affiche correctement chaque niveau de langue', () => {
    render(<Niveaux dict={mockDict} />);
    
    expect(screen.getByText('A1 - Débutant')).toBeInTheDocument();
    expect(screen.getByText('Comprendre des expressions familières.')).toBeInTheDocument();
    
    expect(screen.getByText('B2 - Avancé')).toBeInTheDocument();
    expect(screen.getByText('Sujets complexes.')).toBeInTheDocument();
  });
});
