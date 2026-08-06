Paginasi sudah berjalan sangat sempurna dan rapi! Terima kasih.

Sekarang, saya ingin menambahkan seksi baru untuk menjelaskan Alur Kerja (Workflow) kepada klien. Saya tidak ingin ini berada di halaman terpisah, melainkan menjadi sebuah Section baru di halaman utama (Homepage), diletakkan setelah seksi Values atau Portfolio, dan sebelum Pricing.

Tolong eksekusi PRD-v24 berikut:

Product Requirements Document (PRD) - v24
Project Name: PranajayaTech

Version: 24.0 (Workflow / Alur Kerja Section)

1. Struktur Komponen (Server Component)
Buat komponen baru bernama Workflow.tsx di dalam folder src/components/sections/.

Pastikan komponen ini adalah Server Component murni (tanpa "use client") agar skor Mobile TBT 100/100 kita tetap aman.

Integrasikan Workflow.tsx ke dalam page.tsx halaman utama menggunakan next/dynamic (Lazy Load) seperti section lainnya di bawah layar.

2. Data & Konten Alur Kerja
Berikut adalah 5 tahapan alur kerja yang harus dimasukkan ke dalam kode (buatkan juga struktur i18n/terjemahannya jika web ini mendukung bahasa Inggris en dan Indonesia id). Ini versi bahasa Indonesianya:

Konsultasi: Bedah masalah & kebutuhan bisnis Anda.

Deal & DP: Kesepakatan harga & timeline transparan.

Development: Eksekusi kode dengan standar industri.

Phase Testing: Testing terlebih dahulu secara private dengan konsumen.

Go Live Dan Pelunasan: Sistem selesai dan siap digunakan!

3. Desain UI/UX (Vertical Timeline)
Layout: Gunakan desain Vertical Timeline (Garis waktu vertikal). Di Desktop, tampilkan secara zigzag atau selang-seling (kiri-kanan dari garis tengah). Di Mobile, tampilkan lurus dari atas ke bawah dengan garis di sebelah kiri.

Visual & Ikon: Gunakan Lucide React icons (atau SVG minimalis) untuk setiap langkah yang merepresentasikan teks di atas. Bungkus ikon dengan bentuk lingkaran yang memiliki efek glow halus atau border gradient khas PranajayaTech.

Tipografi: Gunakan teks tebal untuk judul langkah dan teks sekunder (slate-400) untuk deskripsi, agar tetap terbaca jelas di atas background gelap (dark mode).

Silakan tuliskan kode untuk Workflow.tsx dan instruksi penempatannya di page.tsx sekarang.