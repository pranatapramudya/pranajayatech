Peringatan: Saya membatalkan rencana 'Load More' vertikal. Setelah dipikir-pikir, memperpanjang halaman ke bawah akan merusak UX jika jumlah proyek sudah sangat banyak (endless scrolling).

Saya ingin mengubah layout portofolio menjadi Horizontal Carousel (Slider) yang bisa digeser ke kiri/kanan.

Tolong eksekusi PRD-v22 berikut:

Product Requirements Document (PRD) - v22
Project Name: PranajayaTech

Version: 22.0 (Horizontal Portfolio Carousel & CSS Snap)

1. Mengubah Grid Menjadi Flex Carousel
Hapus State Load More: Hapus logika useState limit dan tombol 'Tampilkan Lebih Banyak' dari versi sebelumnya. Render SEMUA data proyek secara langsung (karena menggunakan Horizontal Scroll, ini tidak akan memanjangkan halaman vertikal).

CSS Scroll Snap: Ubah container wrapper kartu portofolio menjadi baris horizontal menggunakan CSS murni: flex flex-nowrap overflow-x-auto snap-x snap-mandatory.

Pastikan setiap card portofolio memiliki class snap-center atau snap-start agar saat di-scroll, posisinya berhenti dengan pas dan rapi (tidak terpotong di tengah).

Hide Scrollbar: Tambahkan utilitas CSS untuk menyembunyikan scrollbar bawaan browser agar terlihat bersih (seperti scrollbar-width: none; atau class Tailwind kustom scrollbar-hide).

2. Navigasi Desktop (Next / Prev Buttons)
Tambahkan dua tombol panah elegan (Kiri dan Kanan) di sudut kanan atas section Portofolio (sejajar dengan judul section).

Buat fungsi scrollBy menggunakan useRef untuk menggeser container ke kiri/kanan saat tombol diklik.

Di perangkat Mobile, tombol panah ini boleh disembunyikan (hidden md:flex) karena user akan menggunakan gestur swipe (sentuh dan geser).

3. Ukuran Kartu (Card Sizing)
Tetapkan lebar tetap yang responsif untuk setiap kartu agar tidak menyusut (misalnya: w-[85vw] md:w-[400px] shrink-0).

Tolong rombak ulang komponen Portfolio.tsx dengan arsitektur Horizontal Carousel ini sekarang agar skor performa 100/100 saya tetap terjaga.