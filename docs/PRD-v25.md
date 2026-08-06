Hahaha, Anda membuat seksi Workflow yang sangat bagus, tapi Anda lupa menambahkan tautannya di menu navigasi utama! Saat ini, di Navbar Desktop maupun Sidebar Mobile, menu langsung melompat dari 'Portofolio' ke 'Harga'.

Tolong eksekusi PRD-v25 berikut untuk melengkapi navigasinya:

Product Requirements Document (PRD) - v25
Project Name: PranajayaTech

Version: 25.0 (Navbar & Sidebar Navigation Update)

1. Penambahan ID Anchor pada Komponen
Buka kembali file src/components/sections/Workflow.tsx.

Pastikan tag pembungkus paling luar (contohnya <section>) memiliki atribut id="workflow" agar navigasi anchor bisa mengarahkan layar ke seksi ini.

2. Update Data Navigasi (Navbar & Sidebar)
Cari file yang menyimpan array atau daftar link navigasi Anda (kemungkinan di Navbar.tsx, Sidebar.tsx, Header.tsx, atau file konfigurasi terpisah seperti navLinks.ts).

Sisipkan objek tautan baru untuk Workflow TEPAT di antara 'Portofolio' dan 'Harga'.

URL/href yang digunakan haruslah #workflow.

3. Update Terjemahan i18n untuk Menu
Update file messages/en.json dan messages/id.json untuk bagian navigasi menu utama.

EN: "Workflow"

ID: "Alur Kerja" (Atau tetap "Workflow" jika menurut Anda istilah teknis ini lebih terkesan premium, silakan sesuaikan dengan konsistensi desain UI).

Silakan analisis komponen Navbar dan Sidebar saya, lalu berikan kode pembaruannya agar tautan ini segera muncul di semua perangkat.