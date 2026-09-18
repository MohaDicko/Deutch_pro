import { beforeEach, describe, expect, it, vi } from 'vitest';

const { prismaMock, revalidatePathMock, redirectMock } = vi.hoisted(() => ({
  prismaMock: {
    students: { create: vi.fn() },
    assessments: { create: vi.fn() },
    student_attendances: { upsert: vi.fn() },
    payrolls: { update: vi.fn(), create: vi.fn() },
    teachers: { findUnique: vi.fn(), create: vi.fn() },
    courses: { create: vi.fn() },
  },
  revalidatePathMock: vi.fn(),
  redirectMock: vi.fn(),
}));

vi.mock('@prisma/client', () => ({ PrismaClient: vi.fn(() => prismaMock) }));
vi.mock('next/cache', () => ({ revalidatePath: revalidatePathMock }));
vi.mock('next/navigation', () => ({ redirect: redirectMock }));

import { createAssessment, createAttendance, createStudent, updatePayrollStatus } from './actions';

const formData = (values: Record<string, string>) => {
  const data = new FormData();
  Object.entries(values).forEach(([key, value]) => data.set(key, value));
  return data;
};

describe('Server Actions pédagogiques', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('valide et crée un apprenant', async () => {
    prismaMock.students.create.mockResolvedValue({ id: 'student-1' });

    await createStudent(formData({
      full_name: 'Awa Diallo',
      email: 'awa@example.com',
      phone: '+22300000000',
      objective: 'Préparer le niveau B1',
      level_id: '',
    }));

    expect(prismaMock.students.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ full_name: 'Awa Diallo', status: 'inscrit', level_id: null }),
    });
    expect(revalidatePathMock).toHaveBeenCalledWith('/admin/apprenants');
    expect(redirectMock).toHaveBeenCalledWith('/admin/apprenants?created=1');
  });

  it('refuse un apprenant avec un e-mail invalide', async () => {
    await expect(createStudent(formData({
      full_name: 'Awa Diallo', email: 'invalide', phone: '', objective: '', level_id: '',
    }))).rejects.toThrow();

    expect(prismaMock.students.create).not.toHaveBeenCalled();
  });

  it('enregistre une présence par upsert pour éviter les doublons', async () => {
    prismaMock.student_attendances.upsert.mockResolvedValue({ id: 'attendance-1' });
    const date = '2026-09-18';

    await createAttendance(formData({
      student_id: '11111111-1111-4111-8111-111111111111',
      course_id: '22222222-2222-4222-8222-222222222222',
      attended_on: date,
      status: 'present',
      note: '',
    }));

    expect(prismaMock.student_attendances.upsert).toHaveBeenCalledWith(expect.objectContaining({
      where: { student_id_course_id_attended_on: expect.objectContaining({
        student_id: '11111111-1111-4111-8111-111111111111',
        course_id: '22222222-2222-4222-8222-222222222222',
      }) },
      update: { status: 'present', note: null },
    }));
  });

  it('crée une évaluation et met à jour la paie', async () => {
    prismaMock.assessments.create.mockResolvedValue({ id: 'assessment-1' });
    prismaMock.payrolls.update.mockResolvedValue({ id: 'payroll-1', status: 'paid' });
    const studentId = '33333333-3333-4333-8333-333333333333';

    await createAssessment(formData({ student_id: studentId, total_score: '82', status: 'valide', comment: 'Bon niveau' }));
    await updatePayrollStatus(formData({ id: 'payroll-1', status: 'paid' }));

    expect(prismaMock.assessments.create).toHaveBeenCalledWith({ data: expect.objectContaining({ student_id: studentId, total_score: 82, status: 'valide' }) });
    expect(prismaMock.payrolls.update).toHaveBeenCalledWith({ where: { id: 'payroll-1' }, data: { status: 'paid' } });
  });

  it('calcule et crée une fiche de paie', async () => {
    prismaMock.teachers.findUnique.mockResolvedValue({ hourly_rate: 10000 });
    prismaMock.payrolls.create.mockResolvedValue({ id: 'payroll-2' });

    const teacherId = '44444444-4444-4444-8444-444444444444';
    await (await import('./actions')).createPayroll(formData({
      teacher_id: teacherId,
      month: 'Septembre 2026',
      hours_worked: '20',
      bonus: '5000',
      deductions: '1000',
    }));

    expect(prismaMock.payrolls.create).toHaveBeenCalledWith({ data: expect.objectContaining({
      teacher_id: teacherId,
      gross_amount: 200000,
      net_amount: 204000,
      status: 'pending',
    }) });
  });

  it('crée un professeur et un cours avec leurs paramètres métier', async () => {
    prismaMock.teachers.create.mockResolvedValue({ id: 'teacher-1' });
    prismaMock.courses.create.mockResolvedValue({ id: 'course-1' });
    const teacherId = '55555555-5555-4555-8555-555555555555';
    const levelId = '66666666-6666-4666-8666-666666666666';

    const { createCourse, createTeacher } = await import('./actions');
    await createTeacher(formData({ full_name: 'Anne Koné', email: 'anne@example.com', phone: '', specialization: 'B1-B2', hourly_rate: '12000', status: 'permanent' }));
    await createCourse(formData({ title: 'B1 Intensif', course_type: 'intensif', schedule: 'Lundi 18h', room: 'Salle 02', teacher_id: teacherId, level_id: levelId }));

    expect(prismaMock.teachers.create).toHaveBeenCalledWith({ data: expect.objectContaining({ full_name: 'Anne Koné', hourly_rate: 12000, status: 'permanent' }) });
    expect(prismaMock.courses.create).toHaveBeenCalledWith({ data: expect.objectContaining({ title: 'B1 Intensif', teacher_id: teacherId, level_id: levelId }) });
  });

  it('refuse une paie si le professeur n’a pas de tarif horaire', async () => {
    prismaMock.teachers.findUnique.mockResolvedValue({ hourly_rate: null });
    const { createPayroll } = await import('./actions');

    await expect(createPayroll(formData({
      teacher_id: '77777777-7777-4777-8777-777777777777', month: 'Septembre 2026', hours_worked: '10', bonus: '0', deductions: '0',
    }))).rejects.toThrow(/tarif horaire/i);
    expect(prismaMock.payrolls.create).not.toHaveBeenCalled();
  });
});
