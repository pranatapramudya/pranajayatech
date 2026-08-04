Sebagai Principal Frontend Engineer, masalah scroll lag sudah teratasi. Namun, saya menemukan dua critical issue baru yang harus diselesaikan di tahap PRD-v15.md ini. Target saya adalah waktu respons klik di bawah 50 milidetik (Zero-Delay) untuk semua interaksi, dan perbaikan routing yang rusak.

Tolong analisis secara menyeluruh dan terapkan solusi berikut pada codebase saya:

Product Requirements Document (PRD) - v15
Project Name: PranajayaTech

Version: 15.0 (Hyper-Responsive Clicks & Routing Fix)

1. Feature Breakdown: Eliminasi Delay Tombol (Semua Perangkat)
A. Menghapus Mobile Tap Delay (300ms)
Masalah: Di perangkat mobile, browser memberikan jeda 300ms saat tombol diklik.

Solusi:

Tambahkan property CSS touch-action: manipulation; secara global untuk semua elemen <button>, <a>, dan elemen interaktif lainnya di file globals.css atau Tailwind config. Ini akan memaksa browser untuk langsung mengeksekusi klik tanpa menunggu double-tap.

B. React Concurrent Rendering (startTransition)
Masalah: Saat tombol diklik (seperti filter atau ubah state UI), UI freeze sepersekian detik karena React mengeksekusi logika berat di Main Thread.

Solusi:

Untuk fungsi onClick yang mengubah state secara lokal, bungkus fungsi pengubah state tersebut menggunakan startTransition (dari react). Ini memastikan bahwa animasi klik (feedback visual tombol saat ditekan) diprioritaskan dan dieksekusi lebih dulu daripada proses rendering data di belakangnya.

C. Preloading Animasi Interaktif (Active State)
Masalah: Efek tombol saat ditekan (active state) terasa lambat muncul.

Solusi:

Pastikan semua tombol memiliki pseudo-class :active (contoh di Tailwind: active:scale-95 active:opacity-80). Transisi ini harus menggunakan durasi yang sangat singkat (misal: duration-75 atau maksimal 100ms) agar terasa snappy.

2. Bug Fix: Tombol "Lihat Portofolio"
Masalah: Tombol "Lihat Portofolio" di Hero Section tidak berfungsi (mati) dan tidak mengarah ke halaman pembuktian konsep.

Solusi:

Ganti elemen tombol tersebut agar dibungkus secara absolut menggunakan komponen <Link href="/portofolio"> (atau sesuaikan dengan path routing halaman portofolio/pembuktian konsep yang benar).

Jika tombol saat ini menggunakan eksekusi onClick={() => router.push('/portofolio')}, HAPUS pendekatan tersebut. Penggunaan next/link sangat diwajibkan agar Next.js dapat melakukan Background Prefetching (mengunduh halaman portofolio secara otomatis saat tombol terlihat di layar, sehingga perpindahan halamannya instan 0 milidetik).

Silakan rombak CSS global saya untuk menangani touch-action, perbaiki tombol 'Lihat Portofolio' di Hero Section, dan pastikan semua tombol menggunakan next/link atau startTransition sekarang juga.