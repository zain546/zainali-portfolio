'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'zainali546official@gmail.com',
      subject: 'Message from portfolio contact form',
      replyTo: email,
      text: `You've received a message from ${email}\n\n${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Resend error:', error);
    return { error: 'Something went wrong!' };
  }
};
