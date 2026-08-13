# Praktikum 1 — Membuat File script.js dan Menampilkan Pesan di Console

**Tujuan:** memastikan file JavaScript eksternal dapat terhubung dan berjalan dengan benar.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini di Visual Studio Code.
2. Periksa bahwa `index.html` sudah memiliki tag `<script src="script.js"></script>` sesaat sebelum `</body>`.
3. Tuliskan kode berikut pada `script.js`:
   ```javascript
   console.log("File script.js berhasil terhubung ke Website Profil Pribadi");
   ```
4. Jalankan `index.html` menggunakan Live Server, lalu buka Developer Tools (F12) dan periksa tab Console.
5. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 1 - Membuat script.js"
   ```

## Checklist

- [ ] `script.js` terhubung dengan benar melalui tag `<script src="...">`
- [ ] Pesan berhasil tampil di Console (bukan di halaman)
- [ ] Berhasil dijalankan dengan Live Server
