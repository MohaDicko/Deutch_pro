import { beforeEach, describe, expect, it, vi } from 'vitest';

const { prismaMock, revalidatePathMock } = vi.hoisted(() => ({
  prismaMock: {
    students: { create: vi.fn() },
    assessments: { create: vi.fn() },
    student_attendances: { upsert: vi.fn() },
    payrolls: { update: vi.fn() },
  },
  revalidatePathMock: vi.fn(),
}));

vi.mock('@prisma/client', () => ({ PrismaClient: vi.fn(() => prismaMock) }));
vi.mock('next/cache', () => ({ revalidatePath: revalidatePathMock }));

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
});
