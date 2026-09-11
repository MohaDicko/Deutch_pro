'use server';

import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

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
