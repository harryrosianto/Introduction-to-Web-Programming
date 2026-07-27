# Praktikum 1 — Menghubungkan File CSS Eksternal dengan HTML

**Tujuan:** memastikan file CSS eksternal dapat terhubung dengan benar ke dokumen HTML.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini di Visual Studio Code. Sebuah file `style.css` kosong sudah disediakan.
2. Periksa bahwa `index.html` sudah memiliki tag `<link>` yang mengarah ke `style.css` di dalam `<head>`.
3. Tuliskan satu aturan sederhana pada `style.css` sebagai pengujian:
   ```css
   body {
       background-color: lightyellow;
   }
   ```
4. Jalankan `index.html` menggunakan Live Server. Apabila latar belakang halaman berubah menjadi kuning muda, berarti file CSS telah berhasil terhubung.
5. Hapus aturan pengujian setelah dipastikan berhasil.
6. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 1 - Menghubungkan CSS Eksternal"
   ```

## Checklist

- [ ] `style.css` terhubung dengan benar melalui tag `<link>`
- [ ] Perubahan warna latar belakang berhasil terlihat saat pengujian
- [ ] Berhasil dijalankan dengan Live Server tanpa error
