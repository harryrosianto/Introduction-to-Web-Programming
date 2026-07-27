# Praktikum 2 — Mengubah Warna, Font, dan Background Halaman Profil

**Tujuan:** menerapkan warna, background, dan typography dasar.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini di Visual Studio Code (menggunakan HTML biodata dari Chapter 2).
2. Tambahkan aturan berikut pada `style.css` secara bertahap, jalankan Live Server setelah setiap penambahan:
   ```css
   body {
       font-family: "Segoe UI", Arial, sans-serif;
       background-color: #F8FAFC;
       color: #1E293B;
       line-height: 1.6;
   }

   h1, h2 {
       color: #2563EB;
       font-family: Georgia, serif;
   }
   ```
3. Amati dan catat dampak visual dari setiap declaration yang ditambahkan.
4. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 2 - Warna, Font, dan Background"
   ```

## Checklist

- [ ] `font-family` pada `body` berhasil diterapkan
- [ ] `background-color` dan `color` mengubah tampilan halaman
- [ ] `line-height` membuat jarak antar baris lebih lega
- [ ] Warna `h1`/`h2` berbeda dari teks paragraf
- [ ] Berhasil dijalankan dengan Live Server
