const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const levels = [
  { code: 'A1', label: 'Débutant', description: 'Comprendre et utiliser des expressions quotidiennes simples.', sort_order: 1 },
  { code: 'A2', label: 'Élémentaire', description: 'Communiquer dans des situations courantes et prévisibles.', sort_order: 2 },
  { code: 'B1', label: 'Intermédiaire', description: 'Comprendre les points essentiels et s’exprimer avec autonomie.', sort_order: 3 },
  { code: 'B2', label: 'Avancé', description: 'Communiquer avec aisance sur des sujets concrets et abstraits.', sort_order: 4 },
];

async function main() {
  for (const level of levels) {
    await prisma.learning_levels.upsert({
      where: { code: level.code },
      update: {
        label: level.label,
        description: level.description,
        sort_order: level.sort_order,
      },
      create: level,
    });
  }

  console.log(`Niveaux initialisés : ${levels.map((level) => level.code).join(', ')}`);
}

main()
  .catch((error) => {
    console.error('Échec de l’initialisation des niveaux :', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
