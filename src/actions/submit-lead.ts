"use server";

import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validations/lead";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitLead(formData: FormData) {
  try {
    // 1. Extract and Validate Input
    const rawData = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectDetails: formData.get("projectDetails"),
    };
    console.log('1. Validating Zod...');
    const validatedData = leadSchema.safeParse(rawData);

    if (!validatedData.success) {
      const errorMessage = validatedData.error.issues.map(issue => issue.message).join(', ');
      return { success: false, error: errorMessage };
    }

    const data = validatedData.data;

    // 1.5 Verify Turnstile Token
    const turnstileToken = formData.get("turnstileToken");
    if (!turnstileToken) {
      return { success: false, error: 'Verifikasi keamanan gagal. Silakan coba lagi.' };
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });
    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return { success: false, error: 'Verifikasi keamanan gagal. Silakan coba lagi.' };
    }

    // 2. Store to PostgreSQL via Prisma
    console.log('2. Inserting to Supabase...');
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        company: data.company || "",
        email: data.email,
        phone: data.phone || "",
        projectDetails: data.projectDetails,
      },
    });

    // 3. Send Email Notification via Resend
    try {
      console.log('3. Sending via Resend...');
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: 'Lumea Labs <onboarding@resend.dev>',
          to: 'pranatapramudya39@gmail.com',
          subject: `🚨 New B2B Lead: ${data.company ? data.company : data.name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
              <h2 style="color: #0F172A;">🚀 New Project Inquiry</h2>
              <p>Sistem Lumea Labs baru saja menangkap prospek high-ticket baru.</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${data.name}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${data.company || '-'}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${data.email}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${data.phone || '-'}</td></tr>
              </table>
              <h3 style="margin-top: 24px; color: #0F172A;">Project Details:</h3>
              <div style="background-color: #F8FAFC; padding: 16px; border-radius: 8px; border: 1px solid #E2E8F0; white-space: pre-wrap;">
                ${data.projectDetails}
              </div>
            </div>
          `,
        });
      }
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
      // Proceed anyway
    }

    // 5. Return success
    return { success: true };

  } catch (error: any) {
    console.error('FULL BACKEND ERROR:', error);
    return { success: false, error: error?.message || 'Terjadi kesalahan sistem yang tidak diketahui.' };
  }
}
