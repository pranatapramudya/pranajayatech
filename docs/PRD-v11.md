# Product Requirements Document (PRD) - v11

**Project Name:** PranajayaTech
**Version:** 11.0 (Production Release)

## 1. Overview & Goals
Milestone v11 menandai transisi aplikasi PranajayaTech ke fase *production-ready*. Tujuan utama dari rilis ini adalah memastikan aplikasi dapat diakses secara publik melalui custom domain, mengamankan interaksi pengguna dari bot/spam, dan mengaktifkan jalur komunikasi yang andal antara calon klien dan admin melalui fitur "Book a Call".

**Key Objectives:**
- **Production Deployment:** Aplikasi berjalan stabil di lingkungan production dengan domain publik.
- **Client Communication:** Sistem notifikasi email yang andal dan terverifikasi untuk menangkap leads dari calon klien.
- **Security & Integrity:** Validasi form yang aman dan terhindar dari serangan bot menggunakan sistem Captcha modern.

## 2. Technical Specifications
Pembaruan v11 memanfaatkan kombinasi teknologi modern untuk memastikan performa, keamanan, dan keandalan sistem:
- **Framework:** Next.js
- **Hosting & Deployment:** Vercel (Production Environment)
- **Email Delivery Service:** Resend
- **Bot Protection (Captcha):** Cloudflare Turnstile

### Environment Variables Changes
Untuk mendukung fitur-fitur di atas, beberapa *Environment Variables* krusial telah diperbarui/ditambahkan di environment production (Vercel):
- `RESEND_API_KEY`: API Key dengan akses *sending* penuh dari Resend.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Site key Cloudflare Turnstile untuk validasi di sisi client.
- `TURNSTILE_SECRET_KEY`: Secret key Cloudflare Turnstile untuk verifikasi di sisi server.
- `NEXT_PUBLIC_APP_URL`: Diset ke `https://pranajayatech.online`.

## 3. Feature Breakdown: "Book a Call"
Fitur "Book a Call" adalah gerbang utama bagi prospek untuk menghubungi PranajayaTech. Sistem ini bergantung pada arsitektur Server Action / API Route untuk menangani pengiriman data secara aman.

### Alur Logika Pengiriman Email
Ketika pengguna mensubmit form "Book a Call", sistem akan menjalankan proses berikut di sisi server:

1. **Validasi Captcha:** Memverifikasi token Cloudflare Turnstile menggunakan secret key. Jika validasi gagal, proses dihentikan.
2. **Ekstraksi Data:** Mengambil data dari *form body* (seperti Nama, Email Klien, dan Pesan/Kebutuhan).
3. **Konfigurasi Resend API:**
   - **Sender (`from`):** Menggunakan domain perusahaan yang telah terverifikasi secara penuh (misalnya: `hello@pranajayatech.online` atau `onboarding@resend.dev` via API Key dengan akses sending).
   - **Recipient (`to`):** Semua notifikasi prospek klien diarahkan (*hardcoded*) secara langsung ke email utama admin: `pranatapramudya39@gmail.com`.
   - **Reply-To (`reply_to`):** Menggunakan alamat email yang di-inputkan oleh klien pada form body. Hal ini memastikan admin dapat membalas email (Reply) langsung ke prospek tanpa harus mengubah alamat email tujuan secara manual.
4. **Error Handling (Try-Catch):**
   - Seluruh proses pengiriman email dibungkus dalam blok `try-catch`.
   - **Success (`try`):** Sistem mengembalikan respons sukses dan UI menampilkan indikator keberhasilan pengiriman pesan kepada pengguna.
   - **Error (`catch`):** Jika terjadi kegagalan (misalnya karena gangguan API Resend atau koneksi server), sistem akan menangkap exception, melakukan *logging* untuk debugging, dan mengembalikan pesan error yang *user-friendly* ke sisi client tanpa mengekspos detail teknis yang sensitif.

## 4. Infrastructure & Security
Sejumlah konfigurasi infrastruktur telah diselesaikan untuk menjamin keamanan dan keandalan *deliverability* email serta aplikasi secara keseluruhan.

### DNS & Domain Configuration
Aplikasi telah di-deploy ke Vercel dan menggunakan custom domain `pranajayatech.online`. Seluruh routing DNS esensial telah divalidasi dan berjalan normal:
- **A Record & CNAME:** Telah diarahkan ke server Vercel untuk memastikan akses ke aplikasi web via domain utama dengan baik.
- **Email Deliverability (Resend):** Domain pengirim telah diverifikasi penuh via konfigurasi DNS untuk memastikan email tidak masuk ke folder spam:
  - **DKIM (DomainKeys Identified Mail):** Dikonfigurasi untuk memverifikasi keaslian pengirim.
  - **SPF (Sender Policy Framework):** Diatur untuk mengizinkan Resend mengirim email atas nama domain `pranajayatech.online`.
  - **DMARC (Domain-based Message Authentication, Reporting, and Conformance):** Telah diaktifkan untuk melindungi domain dari aktivitas *spoofing*.

### Form Security (Cloudflare Turnstile)
Untuk mencegah pengiriman form otomatis oleh bot (spam):
- Cloudflare Turnstile telah diimplementasikan sebagai alternatif Captcha modern yang lebih *user-friendly*.
- Domain `pranajayatech.online` telah ditambahkan ke dalam *whitelist* (diizinkan) pada konfigurasi Cloudflare, memastikan widget Turnstile dapat *render* dan berfungsi dengan baik di environment production (selain dari *localhost*).