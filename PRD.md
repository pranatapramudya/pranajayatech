# PRD: Lumea Labs - Elite 2D Performance Pivot

## 1. Objektif Utama
Mengubah arah desain visual dari 3D-heavy ke **High-Fidelity 2D**. Fokus pada:
- **Performa:** Loading time < 1 detik (Lighthouse score 95+).
- **Estetika:** Modern, minimalis, dan mewah menggunakan teknik *gradient typography* dan *micro-interactions*.
- **Branding:** Memperkuat identitas "Elite Engineering" melalui *clean layout*.

## 2. Strategi Visual 2D
- **Typography:** Gunakan font yang tajam dengan *letter-spacing* yang diatur dengan baik.
- **Color Palette:** *Deep dark mode* dengan aksen *gradient* halus (bukan flat).
- **Motion:** Mengganti animasi 3D berat dengan *Framer Motion* (fade-in, slide-up, entrance).
- **Micro-interactions:** Penekanan pada efek hover yang responsif.

## 3. Checklist Eksekusi
- [ ] Hapus seluruh *library* 3D (`three`, `@react-three/fiber`, `@react-three/drei`).
- [ ] Implementasikan ulang header/hero menggunakan Tailwind & Framer Motion.
- [ ] Optimasi *font loading* agar tidak ada FOIT/FOUT.
- [ ] Pastikan responsivitas di mobile 100% (tidak ada elemen yang *overflow*).