import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import B2B from './B2B';

describe('B2B Component', () => {
  const mockDict = {
    badge: 'Entreprises',
    title: 'Formez vos équipes',
    subtitle: 'Des solutions sur mesure.',
    features: {
      surMesure: 'Programmes sur mesure',
      horaires: 'Horaires flexibles',
      culture: 'Formation interculturelle'
    },
    form: {
      company: 'Nom de l\'Entreprise *',
      contact: 'Personne de contact *',
      email: 'Email Professionnel *',
      phone: 'Téléphone *',
      sector: 'Secteur / Industrie *',
      candidates: 'Nombre de candidats *',
      message: 'Message ou Profils recherchés',
      submit: 'Envoyer la demande',
      loading: 'Envoi...',
      success: 'Succès',
      error: 'Erreur',
      privacy: 'Confidentialité'
    },
    sectors: {
      health: 'Santé',
      craft: 'Artisanat',
      it: 'IT',
      gastro: 'Hôtellerie',
      other: 'Autre'
    },
    counts: {
      '1-2': '1 à 2',
      '3-5': '3 à 5',
      '6-10': '6 à 10',
      '10+': 'Plus de 10'
    },
    cta: 'Demander un devis'
  };

  it('affiche les textes principaux', () => {
    render(<B2B dict={mockDict} />);
    expect(screen.getByText('Entreprises')).toBeInTheDocument();
    expect(screen.getByText('Formez vos équipes')).toBeInTheDocument();
  });

  it('affiche les champs du formulaire de contact B2B', () => {
    render(<B2B dict={mockDict} />);
    // Cherche le label ou le placeholder
    expect(screen.getByText(/Nom de l'Entreprise/)).toBeInTheDocument();
    expect(screen.getByText(/Personne de contact/)).toBeInTheDocument();
    expect(screen.getByText(/Envoyer la demande/)).toBeInTheDocument();
  });

  it('affiche les caractéristiques de la formation B2B', () => {
    render(<B2B dict={mockDict} />);
    expect(screen.getByText('Programmes sur mesure')).toBeInTheDocument();
    expect(screen.getByText('Horaires flexibles')).toBeInTheDocument();
    expect(screen.getByText('Formation interculturelle')).toBeInTheDocument();
  });
});
