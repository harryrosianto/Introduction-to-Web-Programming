# Praktikum 4 — Mengambil Data dari API Menggunakan Fetch API

**Tujuan:** menerapkan `fetch()` beserta `async`/`await` untuk mengambil data sungguhan.

## Langkah Kerja

1. Buka `starter/index.html` — sudah memiliki `<script src="script.js"></script>`.
2. Pada `script.js`, buat fungsi `async` bernama `ambilDataNegara`.
3. Di dalamnya, gunakan `await fetch(...)` ke endpoint `https://restcountries.com/v3.1/name/japan`.
4. Gunakan `await response.json()` untuk mengonversi hasilnya.
5. Tampilkan data tersebut ke Console, bungkus dengan `try`/`catch`.
6. Panggil fungsi tersebut.
7. Jalankan Live Server, buka Developer Tools, periksa hasilnya.
8. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 4 - Fetch API"
   ```

## Checklist

- [ ] Fungsi dideklarasikan sebagai `async`
- [ ] `fetch()` dan `response.json()` menggunakan `await`
- [ ] Kode dibungkus `try`/`catch`
- [ ] Data negara Jepang tampil di Console
