# PRD: Lumea Labs - Scroll Optimization & Animation Smoothness

## 1. Masalah Utama (Scroll Jank Diagnosis)
- **Gejala:** Terjadi lag, stuttering, atau delay animasi saat halaman di-scroll ke bawah maupun ke atas. Animasi tidak berjalan mulus (drop frame rate).
- **Penyebab Umum:** 1. Efek animasi menggunakan properti non-GPU (animasi pada `top`, `margin`, `padding`, atau `opacity` tanpa hardware acceleration).
    2. Komponen `framer-motion` dengan prop `whileInView` melakukan re-render terus-menerus tanpa batasan `once: true`.
    3. Terjadi *layout reflow* yang berat saat elemen masuk ke viewport.

## 2. Solusi Teknis & Spesifikasi Performa
- **Hardware Acceleration:** Wajib memaksa browser menggunakan GPU untuk render animasi dengan menambahkan properti `transform: translateZ(0)` atau `will-change: transform, opacity`.
- **Framer Motion Optimization:**
    - Semua komponen scroll-animation wajib dikonfigurasi dengan `viewport={{ once: true, margin: "-50px" }}` agar animasi hanya berjalan sekali saat pertama kali masuk layar.
    - Hanya boleh menganimasikan properti berbasis komposit/GPU: `transform` (`x`, `y`, `scale`, `rotate`) dan `opacity`. dilarang keras menganimasikan posisi layout fisik.
- **Debouncing/Throttling:** Jika ada scroll listener custom (`window.addEventListener('scroll')`), wajib dihapus atau diganti menggunakan `useScroll` dari Framer Motion secara pasif.

## 3. Kriteria Keberhasilan (Definition of Done)
- Scroll terasa ringan dan lancar di semua device (terutama mobile dan layar dengan refresh rate tinggi 120Hz).
- Skor *Interaction to Next Paint* (INP) dan *Cumulative Layout Shift* (CLS) di Lighthouse berada di zona hijau (95+).