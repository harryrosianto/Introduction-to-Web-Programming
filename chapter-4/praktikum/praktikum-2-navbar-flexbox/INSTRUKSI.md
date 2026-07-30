# Praktikum 2 — Membuat Navigation Bar Menggunakan Flexbox

**Tujuan:** membangun navigation bar lengkap dengan logo di satu sisi dan menu di sisi lainnya.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — struktur `<header class="navbar">` dengan `.logo` dan `.nav-links` sudah disediakan.
2. Tambahkan CSS berikut pada `style.css`:
   ```css
   .navbar {
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 16px 24px;
   }

   .nav-links {
       display: flex;
       gap: 16px;
   }
   ```
3. Jalankan Live Server dan amati bagaimana `justify-content: space-between` mendorong logo dan menu ke ujung berlawanan.
4. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 2 - Navigation Bar Flexbox"
   ```

## Checklist

- [ ] Logo berada di ujung kiri, menu di ujung kanan
- [ ] Seluruh elemen sejajar secara vertikal di tengah navbar
- [ ] Tautan menu tersusun sejajar dengan jarak konsisten
- [ ] Berhasil dijalankan dengan Live Server
