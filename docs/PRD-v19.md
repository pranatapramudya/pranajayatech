Analisis kata kunci Anda bagus, tapi terlalu teknis dan niche. Target pasar saya ada dua:

Lokal & Nasional (Sumedang / Indonesia): Pemilik bisnis tradisional, UMKM, dan perusahaan yang mencari jasa pembuatan aplikasi atau web custom.

Internasional: Para founder atau developer yang mencari solusi instan seperti SaaS boilerplate atau jasa web development kelas premium.

Tolong eksekusi PRD-v19 berikut untuk memperbarui strategi SEO kita:

Product Requirements Document (PRD) - v19
Project Name: PranajayaTech

Version: 19.0 (Glocal SEO Expansion & Bilingual Keywords)

1. Pembaruan Metadata & JSON-LD
Rombak kembali file layout.tsx (atau file yang menangani generateMetadata) dan JsonLd.tsx. Kita harus memisahkan strategi keyword berdasarkan parameter locale (EN dan ID).

A. Strategi Locale id (Fokus Pebisnis Lokal & Nasional)
Keywords Wajib: Software House Sumedang, Jasa Pembuatan Website, Jasa Pembuatan Aplikasi Bisnis, Sistem Kasir Otomatis, Digitalisasi UMKM, Web Developer Indonesia.

Meta Description (ID): "PranajayaTech adalah Software House dari Sumedang, Indonesia. Kami membantu digitalisasi bisnis Anda melalui pembuatan website custom, sistem kasir otomatis, hingga aplikasi manajemen B2B siap pakai."

B. Strategi Locale en (Fokus Internasional & SaaS)
Keywords Wajib: Premium SaaS Boilerplate, Next.js SaaS Template, Custom Web Development Indonesia, B2B Software Agency, High-Availability Cloud Native.

Meta Description (EN): "PranajayaTech is a premium software agency based in Indonesia. We build custom web applications and ship production-ready premium SaaS boilerplates in weeks."

2. Eksekusi Kode
Update keywords array di dalam objek metadata untuk masing-masing bahasa.

Update deskripsi di JSON-LD (Organization dan WebSite) agar lebih merangkul profil bisnis sebagai "Software House & SaaS Agency" yang berlokasi di Indonesia.

Silakan tulis ulang kode pembaruan untuk layout.tsx dan JsonLd.tsx sekarang.