const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const levels = await prisma.learning_levels.findMany({
    orderBy: { sort_order: 'asc' },
    select: { code: true },
  });
  const expected = ['A1', 'A2', 'B1', 'B2'];
  const actual = levels.map((level) => level.code);

  if (expected.some((code, index) => actual[index] !== code)) {
    throw new Error(`Niveaux invalides. Attendu: ${expected.join(', ')}. Reçu: ${actual.join(', ')}`);
  }

  const [students, teachers, courses, assessments, attendances, payrolls] = await Promise.all([
    prisma.students.count(),
    prisma.teachers.count(),
    prisma.courses.count(),
    prisma.assessments.count(),
    prisma.student_attendances.count(),
    prisma.payrolls.count(),
  ]);

  console.log('Intégration DB OK');
  console.log(JSON.stringify({ levels: actual, students, teachers, courses, assessments, attendances, payrolls }));
}

main()
  .catch((error) => {
    console.error('Intégration DB échouée :', error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
