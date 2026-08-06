Saya menemukan bug performa yang cukup mengganggu. Setelah men-scroll halaman ke bawah, ketika saya mengklik Logo PranajayaTech atau menu 'Beranda' di Navbar maupun Sidebar, terjadi delay yang sangat lama (tidak responsif).

Sepertinya Next.js Router mencoba melakukan full navigation atau menjalankan middleware locale secara berlebihan, padahal saya hanya ingin kembali ke bagian paling atas halaman (scroll to top).

Tolong eksekusi PRD-v27 berikut untuk memperbaikinya:

Product Requirements Document (PRD) - v27
Project Name: PranajayaTech

Version: 27.0 (Navigation Routing Optimization & Scroll-to-Top Fix)

1. Mengubah Logika Link "Beranda" dan "Logo"
Cari komponen Navbar.tsx, Header.tsx, dan Sidebar.tsx.

Untuk tautan Logo dan menu Beranda / Home: Daripada membiarkan <Link href="/"> memicu routing berat Next.js, ubah perilakunya untuk memicu scroll halus ke atas jika user sudah berada di halaman utama.

Solusi Implementasi:
Tambahkan event handler onClick pada komponen <Link> atau tombol navigasi tersebut:

JavaScript
onClick={(e) => {
  if (window.location.pathname === '/' || window.location.pathname === '/en' || window.location.pathname === '/id') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}}
2. Menonaktifkan Prefetching Berlebihan (Opsional)
Jika ada tautan di dalam Navbar/Sidebar yang menggunakan komponen <Link> bawaan Next.js, tambahkan atribut prefetch={false} (terutama untuk menu anchor seperti #workflow, #pricing, atau tautan ke luar halaman). Ini akan sangat meringankan beban memori CPU di perangkat Mobile saat pengguna melakukan scroll.

3. CSS Smooth Scroll
Pastikan file globals.css memiliki aturan html { scroll-behavior: smooth; } agar semua navigasi anchor (#) bergerak mulus.

Silakan perbarui komponen Navbar dan Sidebar saya sekarang agar navigasinya kembali responsif dan ringan