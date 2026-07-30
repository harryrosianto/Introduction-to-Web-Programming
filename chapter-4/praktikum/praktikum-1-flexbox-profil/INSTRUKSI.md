# Praktikum 1 — Mengubah Layout Website Profil Menggunakan Flexbox

**Tujuan:** menerapkan Flexbox pada bagian navigasi dan biodata Website Profil Pribadi.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini (berisi HTML biodata sederhana beserta `style.css` dari Chapter 3).
2. Ubah aturan `nav` menjadi flex container agar tautan navigasi tersusun rapi:
   ```css
   nav {
       display: flex;
       justify-content: center;
       gap: 16px;
   }
   ```
3. Bandingkan tampilan navigasi sebelum dan sesudah perubahan ini melalui Live Server.
4. Terapkan Flexbox pada `.card` agar foto profil dan teks biodata tersusun sejajar:
   ```css
   .card {
       display: flex;
       align-items: flex-start;
       gap: 20px;
   }
   ```
5. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 1 - Flexbox pada Profil"
   ```

## Checklist

- [ ] Navigasi tersusun sejajar horizontal dengan jarak konsisten
- [ ] Foto profil dan teks biodata tersusun sejajar (bukan bertumpuk)
- [ ] Berhasil dijalankan dengan Live Server
