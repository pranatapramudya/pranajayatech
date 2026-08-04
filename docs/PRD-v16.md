Sebagai AI Agent yang membantu pengembangan PranajayaTech, tolong catat semua perbaikan performa dan bug fix yang baru saja kita selesaikan di sesi ini, lalu buatkan pembaruan penuh untuk file README.md.

Berikut adalah rekap pekerjaan/milestone yang baru saja kita eksekusi dan sudah berjalan stabil (Release v15.0):

Database & Infrastructure Fix: Berhasil mengatasi error ENOTFOUND dengan memulihkan (resume) project database Supabase dan memastikan injeksi environment variables (Database URL, Resend, Turnstile) di Vercel sudah bersih tanpa komentar/typo.

Scroll Performance Optimization (60 FPS): Menghilangkan scroll lag di area Hero Section dengan mengoptimasi efek blur/glow. Beban rendering dipindahkan ke GPU menggunakan will-change: transform, opacity; dan teknik paint isolation.

Zero-Delay UI & Mobile Optimization: Menghilangkan jeda tap 300ms di perangkat mobile secara global menggunakan touch-action: manipulation; serta mengoptimasi durasi transisi pseudo-class :active agar tombol merespons di bawah 50 milidetik.

Routing Fix: Memperbaiki tombol 'Lihat Portofolio' yang sebelumnya tidak responsif dengan mengganti tag lama menjadi komponen <Link> dari Next.js, sehingga fitur background prefetching aktif dan transisi halaman menjadi instan.

Instruksi Tugas untuk Anda sekarang:
Tolong buatkan isi file README.md yang baru, berstandar open-source profesional, dan rapi untuk repositori ini. Pastikan README.md mencakup:

Header: Nama Proyek (PranajayaTech - Solusi Digital Profesional) beserta badge (Next.js, Vercel, Supabase).

Deskripsi: Penjelasan singkat tentang agensi dan arsitektur aplikasi (siap produksi).

Tech Stack: Daftar teknologi utama yang kita gunakan (Next.js, Supabase PostgreSQL, Tailwind CSS, Resend API, Cloudflare Turnstile).

Changelog / Release Notes: Masukkan rekap 4 poin di atas sebagai catatan rilis versi terbaru (v15.0 - Hyper-Responsive UI & Zero Latency Routing).

Getting Started: Panduan singkat cara kloning, instalasi npm, setup .env, dan menjalankan server lokal (npm run dev).

Berikan output kode Markdown untuk README.md secara utuh dan lengkap sekarang agar bisa langsung saya commit dan push ke repositori.