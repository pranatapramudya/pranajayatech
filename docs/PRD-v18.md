Hahaha, ada sedikit masalah nih dengan implementasi PRD-v17 sebelumnya! Performa memang jadi sangat cepat, tapi teks di Hero Section saya sekarang hilang total (invisible).

Anda sepertinya meninggalkan class opacity-0 tanpa memastikan animasi CSS-nya disetel dengan animation-fill-mode: forwards (berhenti di opacity-100), atau konfigurasi keyframes di tailwind.config.ts Anda belum sempurna.

Mari kita perbaiki itu sekarang, sekalian mengeksekusi tawaran SEO Anda yang sangat bagus. Berikut adalah detail untuk PRD-v18.md:

Product Requirements Document (PRD) - v18
Project Name: PranajayaTech

Version: 18.0 (Hero Animation Hotfix & Advanced Technical SEO)

1. [CRITICAL HOTFIX] Memperbaiki Teks Hero yang Hilang
Masalah: Teks utama di komponen Hero.tsx tidak terlihat setelah menghapus framer-motion.

Solusi:

Cek kembali file tailwind.config.ts. Pastikan Anda menambahkan keyframes animasi yang benar (misalnya fadeInUp dari opacity: 0, transform: translateY(20px) menuju opacity: 1, transform: translateY(0)).

Pastikan class animasi (misal: animate-fade-in-up) menggunakan pengaturan forwards agar elemen tetap berada di opacity-100 setelah animasi selesai.

Perbaiki class di elemen h1, p, dan tombol dalam Hero.tsx agar teksnya kembali muncul dengan animasi fade-in yang elegan.

2. [SEO] Implementasi Advanced Technical SEO
Saya SETUJU PENUH dengan audit dan penawaran SEO Anda. Tolong buatkan dan implementasikan semua poin berikut:

Sitemap & Robots.txt: Buat file app/sitemap.ts (menggunakan standar API App Router Next.js untuk merender URL Dinamis) dan app/robots.txt agar Google Bot bisa melakukan crawling dengan efisien.

Canonical URLs & Hreflang: Konfigurasikan file layout.tsx atau page.tsx untuk memasukkan alternates.canonical dan alternates.languages (EN dan ID) di dalam fungsi generateMetadata(). Ini krusial agar Google tidak menganggap konten terjemahan kita sebagai plagiat/duplikat.

JSON-LD (Structured Data): Buat komponen schema markup (menggunakan <script type="application/ld+json">). Gunakan tipe schema Organization (menjelaskan PranajayaTech sebagai entitas agensi/bisnis) dan SoftwareApplication / WebSite.

Twitter Cards & OpenGraph: Sempurnakan konfigurasi metadata dengan properti twitter:card (tipe summary_large_image), twitter:title, dan twitter:description.

Tolong mulai dengan mengeksekusi Hotfix untuk komponen Hero.tsx dan tailwind.config.ts terlebih dahulu, lalu lanjutkan memberikan kode untuk seluruh implementasi SEO di atas.