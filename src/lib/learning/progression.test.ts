import { describe, expect, it } from 'vitest';

import { evaluateStudentProgress } from './progression';

describe('evaluateStudentProgress', () => {
  it('valide un apprenant qui a une moyenne correcte et toutes les compétences au niveau requis', () => {
    const result = evaluateStudentProgress([
      { skill: 'listening', score: 78 },
      { skill: 'speaking', score: 82 },
      { skill: 'grammar', score: 75 },
      { skill: 'vocabulary', score: 80 },
    ]);

    expect(result.passed).toBe(true);
    expect(result.average).toBeGreaterThanOrEqual(75);
    expect(result.missingSkills).toHaveLength(0);
  });

  it('refuse un apprenant si une compétence est sous le seuil minimum', () => {
    const result = evaluateStudentProgress([
      { skill: 'listening', score: 88 },
      { skill: 'speaking', score: 64 },
      { skill: 'grammar', score: 72 },
      { skill: 'vocabulary', score: 79 },
    ]);

    expect(result.passed).toBe(false);
    expect(result.missingSkills).toContain('speaking');
  });
});
