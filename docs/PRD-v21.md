Pekerjaan yang bagus untuk perbaikan grid mobile-nya! Sekarang teksnya sudah sangat terbaca.

Saat ini, saya ingin mengantisipasi bertambahnya jumlah proyek di masa depan. Saya ingin menambahkan fitur pembatasan jumlah maksimal kartu portofolio yang tampil di awal, lengkap dengan fungsi 'Next Page' atau 'Load More' untuk melihat sisanya. Saya harus bisa mengatur berapa batas maksimal (max items) untuk Desktop dan Mobile.

Tolong eksekusi PRD-v21 berikut:

Product Requirements Document (PRD) - v21
Project Name: PranajayaTech

Version: 21.0 (Portfolio Pagination & Item Limit Control)

1. Fitur Pembatasan Jumlah Item (Max Limit)
Masalah: Semua data portofolio dirender sekaligus, yang akan merusak UX dan performa ketika datanya semakin banyak.

Solusi:

Buat variabel konfigurasi yang mudah saya ubah, contohnya INITIAL_LIMIT = 6. Artinya, hanya 6 kartu pertama yang dirender saat web pertama kali dibuka.

Jika memungkinkan, buat logikanya adaptif (misal: di layar Mobile menampilkan 3 kartu awal, sedangkan di Desktop 6 kartu awal). Jika terlalu rumit tanpa merusak arsitektur Server Component, gunakan batasan global (misal: flat 4 atau 6 kartu untuk semua device).

2. Implementasi Navigasi (Load More / Pagination)
Opsi A (URL Search Params - SEO & SSR Friendly): Gunakan parameter URL seperti ?page=2 atau ?limit=12. Tambahkan tombol "Muat Lebih Banyak" atau "Selanjutnya" yang menggunakan komponen <Link> dari Next.js untuk memuat sisa data tanpa perlu "use client" yang berat.

Opsi B (Lightweight Client Component): Jika menggunakan useState untuk Load More, pastikan hanya komponen bungkus Grid portofolio saja yang menjadi Client Component, BUKAN seluruh section halaman, untuk menjaga skor Mobile TBT (Total Blocking Time) kita tetap hijau.

3. Desain Tombol
Buat tombol "Tampilkan Lebih Banyak" di bagian bawah tengah grid portofolio.

Desain tombol harus senada dengan branding premium agensi (elegan, tidak terlalu mencolok tapi mengundang untuk di-klik).

Tombol harus otomatis hilang (disembunyikan) jika semua portofolio sudah berhasil ditampilkan.

Silakan pilih pendekatan terbaik antara Opsi A atau Opsi B yang tidak akan merusak skor 100/100 Lighthouse Mobile kita, lalu berikan kodenya.