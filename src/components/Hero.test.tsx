import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('affiche le titre principal et le bouton d’appel à l’action', () => {
    const dict = {
      badge: 'Centre d’allemand à Bamako',
      title1: 'Apprenez l’allemand',
      title2: 'pour avancer concrètement',
      subtitle: 'Une formation structurée pour progresser de A1 à B2.',
      ctaStart: 'Commencer maintenant',
      ctaB2B: 'Pour les entreprises',
      stats: {
        students: 'Méthode active',
        levels: 'Progression A1-B2',
        success: 'Accompagnement pratique',
      },
      certBadge: {
        title: 'Projet',
        subtitle: 'Cours + insertion en Allemagne',
      },
    };

    render(<Hero dict={dict} />);

    expect(screen.getByText('Apprenez l’allemand')).toBeInTheDocument();
    expect(screen.getByText('pour avancer concrètement')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Commencer maintenant/i })).toHaveAttribute('href', '#contact');
  });
});
