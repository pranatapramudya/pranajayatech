Sebagai Principal Frontend Engineer, saya ingin kita melakukan optimasi tingkat lanjut (Hyper-Optimization) berdasarkan PRD-v13.md di bawah ini. Target saya adalah Zero-Perceived Latency (Respons visual di bawah 50 milidetik) untuk setiap klik tombol dan transisi halaman.

Analisis codebase saya dan implementasikan perbaikan menggunakan teknik Optimistic UI, Hardware-Accelerated CSS, dan Aggressive Prefetching.

Product Requirements Document (PRD) - v13
Project Name: PranajayaTech

Version: 13.0 (Hyper-Optimization & Zero-Latency UX)

1. Overview & Goals
Milestone v13 bertujuan untuk mengeliminasi sisa delay mikrosekon pada antarmuka. Interaksi pengguna harus terasa instan (seperti aplikasi native di smartphone). Kita akan beralih dari sekadar menampilkan loading state menjadi merespons secara instan menggunakan memori lokal dan akselerasi GPU.

2. Feature Breakdown: Eksekusi Level Milidetik
A. Transisi Instan dengan Optimistic UI
Masalah: Meskipun ada spinner, masih ada jeda network saat pengguna menekan tombol "Submit" atau mengubah state.

Solusi:

Gunakan useOptimistic (React 18+) atau eksekusi state lokal secara instan.

Saat tombol diklik, UI harus langsung berubah seolah-olah sukses (misalnya: memunculkan toast notification atau checkmark), sementara proses Supabase dan Resend berjalan secara asynchronous (di background). Jika di kemudian hari gagal, baru UI di-rollback dan munculkan pesan error.

B. Hardware-Accelerated Micro-Interactions (GPU)
Masalah: Animasi tombol atau hover effect terkadang stuttering karena dieksekusi oleh CPU (Main Thread JavaScript).

Solusi:

Ubah semua efek CSS yang merender ulang layout (seperti margin, padding, width) menggunakan properti yang diakselerasi GPU: transform (seperti scale dan translate) dan opacity.

Tambahkan properti will-change: transform, opacity; pada elemen interaktif yang krusial agar browser menyiapkan alokasi memori sebelum user mengeklik.

C. Aggressive Prefetching (Preload on Hover)
Masalah: Navigasi dengan next/link normal masih membutuhkan waktu beberapa ratus milidetik untuk merender chunk baru jika belum ter-cache penuh.

Solusi:

Buat fungsi custom untuk melakukan prefetch data atau rute segera setelah mouse user masuk ke area tombol (onMouseEnter / onHover), bukan menunggu sampai tombol di-klik. Pada perangkat mobile, gunakan onPointerDown.

D. Migrasi API ke Edge Runtime (Opsional tapi Krusial)
Masalah: API Route (Node.js) Vercel mengalami cold start yang memakan waktu 1-2 detik pada eksekusi pertama.

Solusi:

Ubah rute API yang ringan menjadi Edge Functions dengan menambahkan export const runtime = 'edge'; di file Server Action / Route Handler. Ini akan membuat response backend dieksekusi dari CDN terdekat dengan klien dalam hitungan milidetik.

Tolong berikan kode implementasinya, dimulai dari komponen tombol interaktif, form submission dengan useOptimistic, dan konfigurasi Edge Runtime untuk API kita.