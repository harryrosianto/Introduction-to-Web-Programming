# Praktikum 7 — Menambahkan Ucapan Selamat Datang pada Website Profil Pribadi

**Tujuan:** menggabungkan variabel, fungsi, dan manipulasi teks sederhana langsung pada project utama.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — berisi potongan halaman profil dengan elemen `<p id="ucapan-selamat-datang"></p>`.
2. Buat fungsi `tampilkanUcapan()` yang:
   - Mengambil jam saat ini menggunakan `new Date().getHours()`.
   - Menentukan ucapan (Pagi/Siang/Sore/Malam) berdasarkan rentang jam menggunakan `if`/`else if`.
   - Menampilkan ucapan tersebut ke elemen `id="ucapan-selamat-datang"` menggunakan `document.getElementById(...).innerText`.
3. Panggil fungsi tersebut di akhir `script.js`.
4. Jalankan Live Server dan amati ucapan yang muncul sesuai jam saat ini.
5. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 7 - Ucapan Selamat Datang"
   ```

## Checklist

- [ ] Fungsi `tampilkanUcapan()` berhasil dibuat
- [ ] Ucapan menyesuaikan jam (Pagi/Siang/Sore/Malam)
- [ ] Ucapan tampil pada elemen HTML, bukan hanya di Console
- [ ] Fungsi benar-benar dipanggil (bukan hanya didefinisikan)
