Wih, mantap visinya bre! Mikirin skalabilitas dan performa buat persiapan traffic tinggi itu emang pola pikir engineer sejati.

Kalau tombol kerasa ada delay (jeda) pas di-klik, biasanya di Next.js itu gara-gara beberapa hal:

Navigasi Pindah Halaman: Gak pakai komponen <Link> bawaan Next.js, jadi browser ngelakuin full page reload (kayak web zaman dulu) alih-alih transisi instan.

Form / Tombol Aksi: Pas tombol ditekan, aplikasi lagi nunggu response dari server (seperti nunggu kirim email Resend atau insert database Supabase) tapi UI-nya nggak ngasih indikator loading, jadi kerasa nge-lag atau nge-hang.

Hydration lambat: Terlalu banyak javascript di sisi client, padahal bisa dipindah ke Server Component.

Biar AI agent lu (Cursor/Claude/Copilot) langsung paham dan bisa ngebedah kodenya buat ngilangin delay ini, langsung aja copy-paste draf PRD-v12.md di bawah ini ke AI lu.

🤖 Prompt & Isi PRD-v12.md untuk AI Agent
"Sebagai Senior Performance Engineer, tolong buat dan implementasikan pembaruan berdasarkan dokumen PRD-v12.md berikut ini. Fokus utama kita adalah mengeliminasi delay pada interaksi UI (terutama klik tombol) dan memastikan aplikasi Next.js ini ringan, snappy, serta siap menerima traffic skala besar.

Tolong analisis codebase saya saat ini dan berikan perbaikan kode secara langsung berdasarkan poin-poin di PRD ini.

Product Requirements Document (PRD) - v12
Project Name: PranajayaTech

Version: 12.0 (Performance & Scalability Optimization)

1. Overview & Goals
Milestone v12 berfokus pada optimasi performa frontend dan User Experience (UX). Tujuannya adalah menghilangkan latency atau delay saat pengguna berinteraksi dengan tombol dan navigasi, baik di perangkat Desktop maupun Mobile, untuk memberikan kesan aplikasi yang premium, instan, dan siap diskalakan.

2. Feature Breakdown: Eliminasi Delay Interaksi
A. Navigasi Super Cepat (Routing Optimization)
Masalah: Perpindahan antar halaman atau seksi terasa lambat.

Solusi:

Wajib menggunakan komponen next/link dari Next.js untuk semua tautan internal agar fitur prefetching aktif secara otomatis.

Hindari penggunaan tag HTML standar <a> untuk rute internal yang memicu full page reload.

B. Instant UI Feedback (Optimistic UI & Loading States)
Masalah: Saat tombol form "Book a Call" diklik, tidak ada transisi loading, sehingga aplikasi seolah-olah "nge-freeze" menunggu proses server (Resend & Supabase) selesai.

Solusi:

Implementasikan hooks useFormStatus (dari react-dom) atau useTransition (dari react) pada tombol submit.

Ubah state tombol menjadi disabled dan ubah teks menjadi "Memproses..." atau tampilkan animasi spinner seketika setelah tombol diklik.

C. Rendering Architecture (Server vs Client Components)
Masalah: Ukuran bundle JavaScript di sisi client terlalu besar yang memperlambat proses hydration.

Solusi:

Terapkan konsep Component Splitting. Pindahkan logika yang tidak memerlukan interaksi real-time ke Server Components.

Gunakan direktif "use client" hanya pada komponen terkecil yang benar-benar membutuhkan state atau event listener (seperti tombol interaktif atau form).

3. Asset & Script Optimization
Pastikan semua gambar menggunakan komponen next/image dengan atribut priority pada gambar Hero section.

Gunakan next/font untuk mencegah layout shift dan mempercepat render teks.

Silakan mulai dengan mengecek komponen Navbar/Routing dan komponen Form saya, lalu berikan kode perbaikannya agar delay ini hilang sepenuhnya.