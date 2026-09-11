# Pengembangan Website Profil — Fitur Berbasis API (Chapter 7)

Melanjutkan Mini Project Chapter 6. Struktur HTML dan CSS yang sudah ada dipertahankan, dengan bagian **Portofolio** yang sebelumnya statis di HTML kini diambil secara dinamis dari file `portofolio.json` menggunakan Fetch API.

## Requirements

- [ ] Bagian Portofolio tidak lagi berisi data statis di `index.html`, melainkan kosong dan diisi oleh JavaScript
- [ ] Data portofolio disimpan pada `portofolio.json`, dibaca menggunakan `fetch("portofolio.json")`
- [ ] Status loading ("Memuat portofolio...") ditampilkan sebelum data selesai dimuat
- [ ] Error handling — pesan kesalahan ditampilkan apabila `portofolio.json` gagal dimuat
- [ ] Menggunakan `map()` dan `.join("")` untuk menyusun HTML, bukan `innerHTML +=` berulang

> **Catatan:** Membaca file lokal menggunakan `fetch()` membutuhkan halaman dijalankan melalui Live Server, bukan dibuka langsung dari File Explorer.

## Struktur File

```
pengembangan-profil/
├── REQUIREMENTS.md
├── starter/
│   ├── index.html          ← struktur sama seperti final Chapter 6, portofolio dikosongkan
│   ├── style.css
│   ├── script.js            ← Starter Code, berisi TODO
│   ├── portofolio.json
│   └── assets/foto-placeholder.jpg
└── final/
    ├── index.html
    ├── style.css
    ├── script.js             ← Final Code, lengkap
    ├── portofolio.json
    └── assets/foto-placeholder.jpg
```

## Commit

```bash
git add .
git commit -m "Menambahkan fitur portofolio berbasis API pada Website Profil"
```
