'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const prisma = new PrismaClient();

const statusSchema = z.enum(['nouveau', 'en cours', 'traité']);

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(100),
  phone: z.string().max(30).optional().nullable(),
  message: z.string().min(1).max(2000),
});

const b2bSchema = z.object({
  company: z.string().min(1).max(150),
  contact_name: z.string().min(1).max(100),
  email: z.string().email().max(100),
  phone: z.string().max(30),
  sector: z.string().max(100),
  candidates_count: z.string().max(50),
  message: z.string().max(2000).optional().nullable(),
});

const studentSchema = z.object({
  full_name: z.string().min(2).max(120),
  email: z.string().email().max(120).or(z.literal('')),
  phone: z.string().max(30),
  objective: z.string().max(300),
  level_id: z.string().uuid().optional().or(z.literal('')),
});

const teacherSchema = z.object({
  full_name: z.string().min(2).max(120),
  email: z.string().email().max(120).or(z.literal('')),
  phone: z.string().max(30),
  specialization: z.string().max(200),
  hourly_rate: z.coerce.number().min(0).max(1000000),
  status: z.enum(['permanent', 'vacataire', 'independant', 'intermittent']),
});

const assessmentSchema = z.object({
  student_id: z.string().uuid(),
  total_score: z.coerce.number().min(0).max(100),
  status: z.enum(['en_cours', 'valide', 'refuse', 'renforcement']),
  comment: z.string().max(2000),
});

const attendanceSchema = z.object({
  student_id: z.string().uuid(),
  course_id: z.string().uuid(),
  attended_on: z.coerce.date(),
  status: z.enum(['present', 'absent', 'retard', 'excuse']),
  note: z.string().max(500),
});

const courseSchema = z.object({
  title: z.string().min(2).max(150),
  course_type: z.enum(['individuel', 'groupe', 'intensif', 'preparation_examen', 'conversation']),
  schedule: z.string().max(120),
  room: z.string().max(80),
  teacher_id: z.string().uuid().optional().or(z.literal('')),
  level_id: z.string().uuid().optional().or(z.literal('')),
});

const payrollStatusSchema = z.enum(['pending', 'ready', 'paid']);

const payrollSchema = z.object({
  teacher_id: z.string().uuid(),
  month: z.string().min(1).max(40),
  hours_worked: z.coerce.number().min(0).max(1000),
  bonus: z.coerce.number().min(0).max(100000000),
  deductions: z.coerce.number().min(0).max(100000000),
});

export async function saveContact(formData: FormData) {
  try {
    // Honeypot check
    const botField = formData.get('bot_field');
    if (botField !== null && botField !== '') {
      // It's a bot, silently reject
      return { success: true };
    }

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    const validatedData = contactSchema.parse(data);

    await prisma.contacts.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || '',
        message: validatedData.message,
        language: 'fr',
        status: 'nouveau'
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du contact:', error);
    return { error: 'Failed to save contact' };
  }
}

export async function saveB2bRequest(formData: FormData) {
  try {
    // Honeypot check
    const botField = formData.get('bot_field');
    if (botField !== null && botField !== '') {
      // It's a bot, silently reject
      return { success: true };
    }

    const data = {
      company: formData.get('company'),
      contact_name: formData.get('contact_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      sector: formData.get('sector'),
      candidates_count: formData.get('candidates_count'),
      message: formData.get('message'),
    };

    const validatedData = b2bSchema.parse(data);

    await prisma.b2b_requests.create({
      data: {
        company: validatedData.company,
        contact_name: validatedData.contact_name,
        email: validatedData.email,
        phone: validatedData.phone,
        sector: validatedData.sector,
        candidates_count: validatedData.candidates_count,
        message: validatedData.message || '',
        status: 'nouveau'
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la demande B2B:', error);
    return { error: 'Failed to save B2B request' };
  }
}

export async function updateContactStatus(formData: FormData): Promise<void> {
  const id = String(formData.get('id') ?? '');
  const status = statusSchema.parse(formData.get('status'));

  if (!id) {
    throw new Error('Missing contact id');
  }

  await prisma.contacts.update({
    where: { id },
    data: { status },
  });

  revalidatePath('/admin');
}

export async function updateB2bStatus(formData: FormData): Promise<void> {
  const id = String(formData.get('id') ?? '');
  const status = statusSchema.parse(formData.get('status'));

  if (!id) {
    throw new Error('Missing B2B request id');
  }

  await prisma.b2b_requests.update({
    where: { id },
    data: { status },
  });

  revalidatePath('/admin');
}

export async function createStudent(formData: FormData): Promise<void> {
  const data = studentSchema.parse({
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    objective: formData.get('objective'),
    level_id: formData.get('level_id'),
  });

  await prisma.students.create({
    data: {
      full_name: data.full_name,
      email: data.email || null,
      phone: data.phone || null,
      objective: data.objective || null,
      level_id: data.level_id || null,
      status: 'inscrit',
    },
  });

  revalidatePath('/admin/apprenants');
  redirect('/admin/apprenants?created=1');
}

export async function createTeacher(formData: FormData): Promise<void> {
  const data = teacherSchema.parse({
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    specialization: formData.get('specialization'),
    hourly_rate: formData.get('hourly_rate'),
    status: formData.get('status'),
  });

  await prisma.teachers.create({
    data: {
      full_name: data.full_name,
      email: data.email || null,
      phone: data.phone || null,
      specialization: data.specialization || null,
      hourly_rate: data.hourly_rate,
      status: data.status,
    },
  });

  revalidatePath('/admin/professeurs');
}

export async function createAssessment(formData: FormData): Promise<void> {
  const data = assessmentSchema.parse({
    student_id: formData.get('student_id'),
    total_score: formData.get('total_score'),
    status: formData.get('status'),
    comment: formData.get('comment'),
  });

  await prisma.assessments.create({
    data: {
      student_id: data.student_id,
      total_score: data.total_score,
      status: data.status,
      comment: data.comment || null,
    },
  });

  revalidatePath('/admin/evaluations');
  revalidatePath(`/admin/apprenants/${data.student_id}`);
}

export async function createAttendance(formData: FormData): Promise<void> {
  const data = attendanceSchema.parse({
    student_id: formData.get('student_id'),
    course_id: formData.get('course_id'),
    attended_on: formData.get('attended_on'),
    status: formData.get('status'),
    note: formData.get('note'),
  });

  await prisma.student_attendances.upsert({
    where: {
      student_id_course_id_attended_on: {
        student_id: data.student_id,
        course_id: data.course_id,
        attended_on: data.attended_on,
      },
    },
    update: { status: data.status, note: data.note || null },
    create: {
      student_id: data.student_id,
      course_id: data.course_id,
      attended_on: data.attended_on,
      status: data.status,
      note: data.note || null,
    },
  });

  revalidatePath('/admin/presences');
  revalidatePath(`/admin/apprenants/${data.student_id}`);
}

export async function createCourse(formData: FormData): Promise<void> {
  const data = courseSchema.parse({
    title: formData.get('title'),
    course_type: formData.get('course_type'),
    schedule: formData.get('schedule'),
    room: formData.get('room'),
    teacher_id: formData.get('teacher_id'),
    level_id: formData.get('level_id'),
  });

  await prisma.courses.create({
    data: {
      title: data.title,
      course_type: data.course_type,
      schedule: data.schedule || null,
      room: data.room || null,
      teacher_id: data.teacher_id || null,
      level_id: data.level_id || null,
    },
  });

  revalidatePath('/admin/planning');
  revalidatePath('/admin/presences');
}

export async function updatePayrollStatus(formData: FormData): Promise<void> {
  const id = String(formData.get('id') ?? '');
  const status = payrollStatusSchema.parse(formData.get('status'));

  if (!id) {
    throw new Error('Missing payroll id');
  }

  await prisma.payrolls.update({ where: { id }, data: { status } });
  revalidatePath('/admin/paie');
}

export async function createPayroll(formData: FormData): Promise<void> {
  const data = payrollSchema.parse({
    teacher_id: formData.get('teacher_id'),
    month: formData.get('month'),
    hours_worked: formData.get('hours_worked'),
    bonus: formData.get('bonus'),
    deductions: formData.get('deductions'),
  });

  const teacher = await prisma.teachers.findUnique({
    where: { id: data.teacher_id },
    select: { hourly_rate: true },
  });

  if (!teacher?.hourly_rate) {
    throw new Error('Le professeur doit avoir un tarif horaire.');
  }

  const gross = data.hours_worked * Number(teacher.hourly_rate);
  const net = gross + data.bonus - data.deductions;

  await prisma.payrolls.create({
    data: {
      teacher_id: data.teacher_id,
      month: data.month,
      hours_worked: data.hours_worked,
      gross_amount: gross,
      bonus: data.bonus,
      deductions: data.deductions,
      net_amount: net,
      status: 'pending',
    },
  });

  revalidatePath('/admin/paie');
  redirect('/admin/paie?created=1');
}
