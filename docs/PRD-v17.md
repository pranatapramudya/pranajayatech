Sebagai Principal Performance Engineer, saya sangat puas dengan hasil skor Desktop yang mencapai 100/100. Namun, berdasarkan audit Lighthouse terbaru, skor Mobile kita turun ke 71. Masalah utamanya adalah Total Blocking Time (TBT) yang tinggi (1,320 ms) dan Largest Contentful Paint (LCP) yang lambat (2.8 s).

Tolong analisis codebase Next.js saya dan terapkan perbaikan tingkat tinggi berikut ini berdasarkan PRD-v17.md. Target kita adalah skor Mobile di atas 90.

Product Requirements Document (PRD) - v17
Project Name: PranajayaTech

Version: 17.0 (Mobile Performance & JavaScript Execution Optimization)

1. Mengatasi Total Blocking Time (TBT) Kritis
Masalah: Terlalu banyak eksekusi JavaScript yang memblokir Main Thread saat inisialisasi awal di perangkat Mobile (waktu proses > 1 detik).

Solusi (Hydration & Script Optimization):

Lazy Load Non-Critical Components: Gunakan next/dynamic untuk me-render komponen yang tidak ada di viewport awal secara asinkron (misalnya Footer, widget Testimonial, animasi berat, atau komponen form di bawah layar).

Tunda Eksekusi Third-Party Script: Jika kita menggunakan script eksternal (seperti Google Analytics, Pixel, atau Cloudflare Turnstile), pastikan script tersebut menggunakan komponen <Script> dari next/script dengan strategy="lazyOnload" atau strategy="worker". Jangan biarkan script pihak ketiga memblokir render awal.

Pangkas Client Components: Pastikan komponen Hero Section sejauh mungkin menggunakan Server Component. Pindahkan direktif "use client" HANYA ke komponen sekecil mungkin (contoh: pisahkan hanya tombol interaktifnya menjadi Client Component, bukan seluruh section).

2. Mengatasi Largest Contentful Paint (LCP) Lambat
Masalah: Elemen terbesar (teks Hero atau background) memakan waktu 2.8 detik untuk selesai di-render di Mobile.

Solusi (Font & Paint Optimization):

Font Optimization: Pastikan kita sudah menggunakan next/font (Google Fonts/Local Fonts) agar font tidak memblokir render teks. Tambahkan display: swap pada konfigurasi font.

CSS Render Blocking: Hilangkan filter CSS berat (blur, backdrop-filter) dari tampilan Mobile menggunakan media query (contoh di Tailwind: hanya gunakan md:backdrop-blur-lg agar efek berat hanya berjalan di layar besar). Perangkat Mobile sebaiknya menggunakan solid background atau gradient sederhana agar CPU tidak terbebani saat merender elemen terbesar.

LCP Image Preload: Jika elemen LCP adalah sebuah gambar atau logo, wajib menggunakan <Image> dengan atribut priority={true} agar Next.js memuat gambar tersebut di urutan teratas.

Silakan lakukan audit cepat pada layout, Hero Section, dan script global saya, lalu berikan kode perbaikannya. Fokus pada pengurangan bundle size JS yang turun ke client dan peringanan CSS khusus untuk tampilan Mobile.