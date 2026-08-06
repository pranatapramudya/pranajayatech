Ah, sepertinya ada sedikit miskomunikasi. Saya tidak ingin menggunakan Horizontal Carousel / digeser. Yang saya maksud dengan 'Next Page' adalah Classic Numeric Pagination di bagian bawah (ada deretan angka 1, 2, 3, dst., beserta tombol Prev/Next).

Tolong batalkan PRD-v22 dan segera eksekusi PRD-v23 berikut:

Product Requirements Document (PRD) - v23
Project Name: PranajayaTech

Version: 23.0 (Classic Numeric Pagination)

1. Kembalikan ke Grid Layout (Responsif)
Hapus semua class terkait flex, overflow-x-auto, dan snap.

Kembalikan struktur pembungkus kartu portofolio menjadi Grid seperti pada PRD-v20: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.

2. Implementasi Sistem Paginasi Angka (Client-Side Slicing)
Buat useState untuk melacak halaman saat ini: const [currentPage, setCurrentPage] = useState(1).

Tentukan jumlah item per halaman: const ITEMS_PER_PAGE = 4 (atau sesuaikan jika ingin dibedakan antara Mobile dan Desktop menggunakan hook useMobile).

Hitung total halaman: const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE).

Potong array data yang di-render berdasarkan halaman aktif:
const currentProjects = projects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).

3. Desain Komponen Navigasi Angka
Di bawah grid portofolio, buat komponen navigasi horizontal (di-tengah/ center).

Komponen ini harus memiliki:

Tombol "Sebelumnya" (Disabled jika currentPage === 1).

Deretan angka halaman (1, 2, 3, dst.) yang dihasilkan dari mapping totalPages. Berikan indikator visual (highlight warna/border) pada angka halaman yang sedang aktif.

Tombol "Selanjutnya" (Disabled jika currentPage === totalPages).

Saat tombol angka atau Next/Prev diklik, ubah currentPage dan pastikan transisi pergantian kartu terlihat smooth.

Silakan rombak kembali Portfolio.tsx dengan pendekatan Classic Numeric Pagination ini dan berikan kodenya.