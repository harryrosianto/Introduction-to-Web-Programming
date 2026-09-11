# Praktikum 6 — Menambahkan Loading State dan Error Handling

**Tujuan:** menyempurnakan Praktikum 5 dengan status memuat dan penanganan kesalahan yang lebih baik.

## Langkah Kerja

1. Buka `starter/index.html` dan `starter/script.js` (kelanjutan Praktikum 5).
2. Tampilkan teks "Memuat data..." ke `#hasil-negara` sebelum memulai `fetch()`.
3. Gunakan endpoint dengan nama negara yang **tidak valid** untuk menguji error handling.
4. Periksa `response.ok` — jika `false`, tampilkan pesan "Negara tidak ditemukan..." dan hentikan fungsi.
5. Bungkus keseluruhan dengan `try`/`catch` untuk menangani kegagalan jaringan.
6. Jalankan Live Server, amati status "Memuat data..." yang tampil sesaat.
7. Nonaktifkan koneksi internet sesaat, jalankan kembali, amati pesan kegagalan koneksi.
8. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 6 - Loading State dan Error Handling"
   ```

## Checklist

- [ ] Status "Memuat data..." tampil sebelum data/pesan error muncul
- [ ] `response.ok` diperiksa sebelum memproses data
- [ ] Pesan "Negara tidak ditemukan..." tampil untuk nama negara yang salah
- [ ] Pesan kegagalan koneksi tampil saat internet dimatikan
