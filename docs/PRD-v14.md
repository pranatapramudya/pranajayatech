Sebagai Principal Performance Engineer, saya membutuhkan optimasi tahap akhir berdasarkan dokumen PRD-v14.md berikut ini. Interaksi klik sudah sangat cepat, namun saya mengalami masalah scroll lag (berat/patah-patah) saat menggulir halaman di Desktop. Target saya adalah 60 FPS (rendering di bawah 16.6 milidetik per frame) saat scrolling.

Tolong analisis codebase frontend saya (terutama CSS dan komponen UI) dan berikan kode perbaikannya secara komprehensif.

Product Requirements Document (PRD) - v14
Project Name: PranajayaTech

Version: 14.0 (60-FPS Scroll & Paint Optimization)

1. Overview & Goals
Milestone v14 berfokus penuh pada optimasi rendering saat scrolling. Halaman web harus terasa sangat ringan tanpa adanya layout thrashing, paint lag, atau blocking pada Main Thread JavaScript saat pengguna melakukan scroll di resolusi Desktop.

2. Feature Breakdown: Eliminasi Lag Saat Scrolling
A. Dekopel Event Scroll (Intersection Observer & rAF)
Masalah: Penggunaan window.addEventListener('scroll') yang memicu re-render atau kalkulasi berat di setiap piksel scroll (misalnya pada Navbar atau animasi parallax).

Solusi:

Ganti semua listener scroll manual dengan Intersection Observer API untuk mendeteksi elemen yang masuk/keluar layar tanpa membebani Main Thread.

Jika event scroll absolut tetap diperlukan, bungkus fungsinya menggunakan requestAnimationFrame (rAF) dan tambahkan flag { passive: true } pada event listener agar browser tidak menunggu JavaScript selesai mengeksekusi scroll.

B. Optimasi CSS Painting & Composite (Masalah Efek Visual)
Masalah: Penggunaan berlebihan properti CSS yang mahal untuk dirender, seperti box-shadow berlapis, backdrop-filter: blur() (efek glassmorphism), dan animasi top/left/height pada elemen besar di desktop.

Solusi:

Batasi penggunaan backdrop-filter. Jika digunakan pada Navbar atau floating element, pastikan area cakupannya kecil.

Tambahkan properti CSS contain: paint layout; atau content-visibility: auto; pada section yang panjang. Ini memaksa browser untuk tidak merender elemen yang belum terlihat di layar (Viewport).

Pastikan semua animasi yang aktif saat scroll hanya menggunakan transform dan opacity.

C. Lazy Loading Komponen Berat (Dynamic Import)
Masalah: Seluruh elemen DOM (Document Object Model) di-load dan dirender sekaligus di awal, membuat beban memori Desktop bengkak.

Solusi:

Gunakan next/dynamic pada Next.js untuk me-lazy load section atau komponen yang berada jauh di bawah (below the fold) seperti Footer, seksi Portofolio beresolusi tinggi, atau widget eksternal. Komponen ini hanya boleh diunduh JavaScript-nya ketika pengguna mulai melakukan scroll mendekati area tersebut.

D. Image Decoding & Rendering
Masalah: Gambar ukuran besar di-decode oleh CPU saat pengguna menggulir layar ke arah gambar tersebut.

Solusi:

Pastikan tag <Image> (next/image) yang berada di luar jangkauan awal memiliki atribut loading="lazy".

Pertimbangkan untuk menambahkan atribut decoding="async" (jika menggunakan tag img standar) agar proses decode gambar diserahkan ke background thread dan tidak menghambat animasi scroll.

Tolong mulai dengan mengevaluasi komponen Navbar, elemen yang memiliki backdrop-filter, serta periksa semua useEffect yang mendengarkan event scroll. Berikan kode perbaikannya sekarang.