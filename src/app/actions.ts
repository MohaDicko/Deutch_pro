'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function saveContact(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    await prisma.contacts.create({
      data: {
        name,
        email,
        phone,
        message,
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
    const company = formData.get('company') as string;
    const contact_name = formData.get('contact_name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const sector = formData.get('sector') as string;
    const candidates_count = formData.get('candidates_count') as string;
    const message = formData.get('message') as string;

    await prisma.b2b_requests.create({
      data: {
        company,
        contact_name,
        email,
        phone,
        sector,
        candidates_count,
        message,
        status: 'nouveau'
      }
    });

    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la demande B2B:', error);
    return { error: 'Failed to save B2B request' };
  }
}
