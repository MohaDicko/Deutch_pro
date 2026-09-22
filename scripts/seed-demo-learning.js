const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const demoStudents = [
  {
    full_name: 'Demo Awa Diallo',
    email: 'demo.awa@deutschpro.test',
    phone: '+223 76 00 00 01',
    objective: 'Préparer le niveau B1',
    level: 'B1',
  },
  {
    full_name: 'Demo Moussa Traoré',
    email: 'demo.moussa@deutschpro.test',
    phone: '+223 76 00 00 02',
    objective: 'Renforcer la compréhension orale',
    level: 'A2',
  },
  {
    full_name: 'Demo Sofia Koné',
    email: 'demo.sofia@deutschpro.test',
    phone: '+223 76 00 00 03',
    objective: 'Commencer l’allemand',
    level: 'A1',
  },
];

async function findOrCreateStudent(data, levelId) {
  const existing = await prisma.students.findFirst({ where: { email: data.email } });
  return existing ?? prisma.students.create({
    data: {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      objective: data.objective,
      level_id: levelId,
      status: 'actif',
    },
  });
}

async function findOrCreateCourse(data) {
  const existing = await prisma.courses.findFirst({ where: { title: data.title } });
  return existing ?? prisma.courses.create({ data });
}

async function main() {
  const levels = await prisma.learning_levels.findMany({
    where: { code: { in: ['A1', 'A2', 'B1'] } },
  });
  const levelByCode = new Map(levels.map((level) => [level.code, level]));

  if (levelByCode.size !== 3) {
    throw new Error('Les niveaux A1, A2 et B1 doivent être initialisés avec npm run db:seed.');
  }

  const students = [];
  for (const student of demoStudents) {
    students.push(await findOrCreateStudent(student, levelByCode.get(student.level).id));
  }

  const courses = [
    await findOrCreateCourse({
      title: 'DEMO A1 - Débutants',
      course_type: 'groupe',
      level_id: levelByCode.get('A1').id,
      schedule: 'Lundi 18h - 20h',
      room: 'Salle Demo 01',
    }),
    await findOrCreateCourse({
      title: 'DEMO A2 - Conversation',
      course_type: 'conversation',
      level_id: levelByCode.get('A2').id,
      schedule: 'Mardi 18h - 20h',
      room: 'Salle Demo 02',
    }),
    await findOrCreateCourse({
      title: 'DEMO B1 - Intensif',
      course_type: 'intensif',
      level_id: levelByCode.get('B1').id,
      schedule: 'Jeudi 18h - 20h',
      room: 'Salle Demo 03',
    }),
  ];

  for (const [index, student] of students.entries()) {
    const course = courses[index];
    await prisma.course_enrollments.upsert({
      where: { student_id_course_id: { student_id: student.id, course_id: course.id } },
      update: {},
      create: { student_id: student.id, course_id: course.id },
    });

    const assessment = await prisma.assessments.findFirst({
      where: { student_id: student.id, course_id: course.id, comment: { startsWith: 'DEMO_SEED:' } },
    });
    if (!assessment) {
      await prisma.assessments.create({
        data: {
          student_id: student.id,
          course_id: course.id,
          level_id: course.level_id,
          total_score: [82, 74, 68][index],
          status: ['valide', 'en_cours', 'renforcement'][index],
          comment: `DEMO_SEED: évaluation de démonstration ${index + 1}`,
        },
      });
    }

    const attendedOn = new Date(`2026-09-${18 - index}T18:00:00Z`);
    await prisma.student_attendances.upsert({
      where: { student_id_course_id_attended_on: { student_id: student.id, course_id: course.id, attended_on: attendedOn } },
      update: { status: index === 2 ? 'retard' : 'present', note: 'DEMO_SEED' },
      create: { student_id: student.id, course_id: course.id, attended_on: attendedOn, status: index === 2 ? 'retard' : 'present', note: 'DEMO_SEED' },
    });
  }

  console.log('Données de démonstration créées ou déjà présentes.');
  console.log(JSON.stringify({ students: students.length, courses: courses.length, assessments: students.length, attendances: students.length }));
}

main()
  .catch((error) => {
    console.error('Échec du seed de démonstration :', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
