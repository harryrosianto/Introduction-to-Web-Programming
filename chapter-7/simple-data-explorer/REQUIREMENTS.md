# Mini Project — Simple Data Explorer

Sebuah halaman baru dan berdiri sendiri (terpisah dari Website Profil Pribadi) yang memungkinkan pengguna mencari dan menjelajahi data negara dari **REST Countries API** secara interaktif.

## Requirements

- [ ] **Input pencarian** — pengguna dapat mengetikkan nama negara
- [ ] **Tombol Search** — memicu pencarian ketika diklik
- [ ] **Loading indicator** — status "Memuat..." ditampilkan selama data sedang diambil
- [ ] **Daftar data** — hasil pencarian ditampilkan dalam bentuk daftar/kartu menggunakan DOM
- [ ] **Detail data** — mengklik salah satu item pada daftar menampilkan informasi lebih rinci mengenai negara tersebut
- [ ] **Pesan ketika data tidak ditemukan** — ditampilkan apabila kata kunci pencarian tidak menghasilkan data apa pun
- [ ] **Error message ketika API gagal** — ditampilkan apabila permintaan gagal karena jaringan maupun status error dari server
- [ ] **Tampilan data menggunakan DOM** — seluruh hasil ditampilkan melalui manipulasi DOM, bukan ditulis manual di HTML

## Ketentuan Teknis

Wajib menerapkan: `const`/`let`, Arrow Function, Template Literal, Destructuring (minimal satu bagian), Array Methods (`map()`, dan sejenisnya), JSON (`response.json()`), Fetch API, Promise (implisit via `fetch()`) dan `async`/`await`, `try`/`catch`, serta manipulasi DOM.

> **Perhatian:** Tidak boleh menggunakan library maupun framework JavaScript apa pun (React, jQuery, Axios, dsb). Seluruh project menggunakan JavaScript vanilla.

## API yang Digunakan

**REST Countries API** — `https://restcountries.com/v3.1/name/{nama}`. Tidak membutuhkan API key, dan menyediakan cukup banyak detail (ibu kota, populasi, bendera, kawasan, mata uang) untuk ditampilkan pada bagian daftar maupun detail data.

## Struktur File

```
simple-data-explorer/
├── REQUIREMENTS.md
├── starter/
│   ├── index.html
│   ├── style.css
│   └── script.js      ← Starter Code, berisi TODO
└── final/
    ├── index.html
    ├── style.css
    └── script.js       ← Final Code, lengkap
```

## Commit

```bash
git add .
git commit -m "Menyelesaikan Simple Data Explorer"
```
