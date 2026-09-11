# Praktikum 5 — Menampilkan Data API ke Halaman HTML

**Tujuan:** menggabungkan Fetch API dengan manipulasi DOM.

## Langkah Kerja

1. Buka `starter/index.html` — sudah memiliki `<div id="hasil-negara"></div>`.
2. Pada `script.js`, buat fungsi `async` bernama `tampilkanDataNegara`.
3. Ambil data negara Jepang dari REST Countries API (seperti Praktikum 4).
4. Gunakan Template Literal untuk menyusun HTML berisi nama negara, ibu kota, dan populasi.
5. Pasang hasilnya ke `#hasil-negara` menggunakan `innerHTML`.
6. Jalankan Live Server dan amati tampilan data pada halaman (bukan hanya di Console).
7. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 5 - Menampilkan Data ke DOM"
   ```

## Checklist

- [ ] Data negara tampil di halaman, bukan hanya di Console
- [ ] Template Literal digunakan untuk menyusun HTML
- [ ] `innerHTML` digunakan untuk memasang hasilnya ke halaman
