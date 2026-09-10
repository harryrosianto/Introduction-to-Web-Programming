# Praktikum 7 — Memvalidasi Form Kontak Sederhana

**Tujuan:** menerapkan `event.preventDefault()` beserta validasi input kosong.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — form dan elemen `#pesan-error` sudah disediakan.
2. Pada `script.js`, tambahkan `addEventListener("submit", ...)` pada form.
3. Panggil `event.preventDefault()` di baris pertama fungsi tersebut.
4. Ambil nilai Nama dan Email, periksa apakah salah satunya kosong.
5. Tampilkan pesan error (merah) jika kosong, atau pesan sukses (hijau) jika terisi.
6. Jalankan Live Server, uji dengan form kosong dan form terisi.
7. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 7 - Validasi Form"
   ```

## Checklist

- [ ] `event.preventDefault()` dipanggil, halaman tidak reload saat submit
- [ ] Form kosong menampilkan pesan error berwarna merah
- [ ] Form terisi menampilkan pesan sukses berwarna hijau
