# PranajayaTech - Solusi Digital Profesional

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Deskripsi

**PranajayaTech** adalah platform profil agensi digital modern yang dirancang untuk memberikan performa tingkat tinggi (Hyper-Responsive) dan pengalaman pengguna yang luar biasa. Dibangun dengan arsitektur _production-ready_, sistem ini mengedepankan desain *zero-latency*, keamanan tingkat tinggi pada form, serta infrastruktur *serverless* yang terukur. Kami menyediakan solusi mulai dari pembuatan landing page hingga aplikasi tingkat enterprise.

## Tech Stack

Proyek ini dibangun menggunakan teknologi mutakhir berikut:

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Actions, Edge/Node Runtime)
- **Database & Auth:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) dengan dukungan Framer Motion untuk animasi.
- **Email Notification:** [Resend API](https://resend.com/)
- **Keamanan (Anti-Spam):** [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
- **Internasionalisasi (i18n):** `next-intl` untuk dukungan Multi-Bahasa (ID/EN)

## Changelog / Release Notes

### v15.0 - Hyper-Responsive UI & Zero Latency Routing

- **Database & Infrastructure Fix:** Berhasil mengatasi error `ENOTFOUND` dengan memulihkan (resume) project database Supabase dan memastikan injeksi environment variables (`DATABASE_URL`, `RESEND_API_KEY`, Turnstile keys) di Vercel sudah bersih tanpa komentar/typo.
- **Scroll Performance Optimization (60 FPS):** Menghilangkan *scroll lag* di area Hero Section dengan mengoptimasi efek blur/glow. Beban rendering dipindahkan secara penuh ke GPU menggunakan `will-change: transform, opacity;` dan teknik CSS *paint isolation* (`contain: strict`).
- **Zero-Delay UI & Mobile Optimization:** Menghilangkan jeda tap 300ms di perangkat mobile secara global menggunakan `touch-action: manipulation;` serta mengoptimasi durasi transisi pseudo-class `:active` (dengan *startTransition* di state lokal) agar tombol merespons di bawah 50 milidetik.
- **Routing Fix:** Memperbaiki tombol **"Lihat Portofolio"** yang sebelumnya tidak responsif karena masalah tumpukan *z-index* dan mengganti/menegaskan penggunaan komponen `<Link>` dari Next.js, sehingga fitur *background prefetching* aktif dan transisi halaman menjadi instan.

## Getting Started

Panduan untuk menjalankan proyek PranajayaTech di lingkungan lokal Anda.

### 1. Clone Repositori

```bash
git clone https://github.com/username/pranajaya-tech.git
cd pranajaya-tech
```

### 2. Instalasi Dependencies

Instal semua library yang dibutuhkan menggunakan npm (direkomendasikan Node.js v18+):

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env` di root direktori dengan menyalin dari `.env.example` (jika ada), lalu isi variabel berikut:

```env
# Supabase Database URL (Pooling/Session)
DATABASE_URL="postgresql://[user]:[password]@db.[project-ref].supabase.co:5432/postgres"

# Resend API
RESEND_API_KEY="re_..."
CONTACT_EMAIL="your-email@example.com"

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY="0x4A..."
TURNSTILE_SECRET_KEY="0x4A..."
```

### 4. Jalankan Server Development

Mulai server development Next.js:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Deployment

Aplikasi ini siap di-deploy secara instan ke **Vercel**. Pastikan semua _Environment Variables_ di atas telah dimasukkan ke dashboard Vercel pada bagian _Settings > Environment Variables_ sebelum melakukan *Build & Deploy*.
