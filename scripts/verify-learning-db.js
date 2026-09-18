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

  const level = await prisma.learning_levels.findUnique({ where: { code: 'A1' } });
  if (!level) {
    throw new Error('Le niveau A1 est introuvable.');
  }

  try {
    await prisma.$transaction(async (tx) => {
      const teacher = await tx.teachers.create({ data: { full_name: '__integration_teacher__', hourly_rate: 10000, status: 'vacataire' } });
      const student = await tx.students.create({ data: { full_name: '__integration_student__', level_id: level.id, status: 'inscrit' } });
      const course = await tx.courses.create({ data: { title: '__integration_course__', level_id: level.id, teacher_id: teacher.id, course_type: 'groupe' } });
      await tx.assessments.create({ data: { student_id: student.id, course_id: course.id, level_id: level.id, total_score: 80, status: 'valide' } });
      await tx.student_attendances.create({ data: { student_id: student.id, course_id: course.id, attended_on: new Date('2026-09-18T10:00:00Z'), status: 'present' } });
      await tx.payrolls.create({ data: { teacher_id: teacher.id, month: 'Integration', hours_worked: 10, gross_amount: 100000, net_amount: 100000 } });
      throw new Error('__ROLLBACK_INTEGRATION__');
    });
  } catch (error) {
    if (error.message !== '__ROLLBACK_INTEGRATION__') {
      throw error;
    }
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
