export type SkillScore = {
  skill: 'listening' | 'speaking' | 'grammar' | 'vocabulary';
  score: number;
};

export type ProgressionResult = {
  passed: boolean;
  average: number;
  missingSkills: string[];
};

const MINIMUM_SKILL_SCORE = 70;
const MINIMUM_AVERAGE_SCORE = 75;

export function evaluateStudentProgress(scores: SkillScore[]): ProgressionResult {
  const requiredSkills: SkillScore['skill'][] = ['listening', 'speaking', 'grammar', 'vocabulary'];

  const normalizedScores = requiredSkills.map((skill) => {
    const existing = scores.find((entry) => entry.skill === skill);
    return existing ?? { skill, score: 0 };
  });

  const average =
    normalizedScores.reduce((total, item) => total + item.score, 0) / normalizedScores.length;

  const missingSkills = normalizedScores
    .filter((item) => item.score < MINIMUM_SKILL_SCORE)
    .map((item) => item.skill);

  const passed = average >= MINIMUM_AVERAGE_SCORE && missingSkills.length === 0;

  return {
    passed,
    average: Number(average.toFixed(2)),
    missingSkills,
  };
}
