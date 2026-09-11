# Introduction to Web Programming — Companion Repository

Repository ini adalah **pendamping praktikum** untuk modul pembelajaran *Introduction to Web Programming*. Repository bersifat **berkelanjutan**: setiap chapter baru **menambah** folder chapter baru pada repository yang sama, bukan membuat repository terpisah.

## Daftar Chapter

| Chapter | Topik | Status |
|---|---|---|
| [`chapter-1/`](./chapter-1) | Introduction to Web Development | ✅ Selesai |
| [`chapter-2/`](./chapter-2) | HTML Fundamentals | ✅ Selesai |
| [`chapter-3/`](./chapter-3) | CSS Fundamentals | ✅ Selesai |
| [`chapter-4/`](./chapter-4) | CSS Layout | ✅ Selesai |
| [`chapter-5/`](./chapter-5) | Introduction to JavaScript | ✅ Selesai |
| [`chapter-6/`](./chapter-6) | JavaScript and the DOM | ✅ Selesai |
| [`chapter-7/`](./chapter-7) | JavaScript Advanced (ES6+, Array Methods, JSON, API, Fetch) | ✅ Selesai |
| `chapter-8/` | *(menyusul — Final Project: Vanilla Web)* | ⏳ Belum dibuat |

## Cara Menggunakan Repository Ini

```bash
git clone https://github.com/harryrosianto/Introduction-to-Web-Programming.git
cd Introduction-to-Web-Programming
```

Setiap folder chapter memiliki `README.md` sendiri berisi learning objectives, instruksi menjalankan project, dan assignment. Masuk ke folder chapter yang sedang dipelajari, lalu ikuti `README.md` di dalamnya.

## Dokumen Pendukung

- [`GIT-GUIDE.md`](./GIT-GUIDE.md) — perintah Git dan best practice yang dipakai sepanjang course ini.

## Requirements Umum

| Tools | Keterangan |
|---|---|
| [Visual Studio Code](https://code.visualstudio.com) | Code editor |
| [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) | Ekstensi VS Code untuk menjalankan HTML secara lokal |
| [Git](https://git-scm.com) | Version control |
| Browser modern | Google Chrome / Microsoft Edge / Firefox |

## Struktur Repository (akan bertambah setiap chapter)

```
Introduction-to-Web-Programming/
├── README.md
├── GIT-GUIDE.md
├── .gitignore
├── .vscode/
│   └── extensions.json
├── chapter-1/
│   ├── README.md
│   ├── starter-code/
│   ├── final-code/
│   ├── praktikum/
│   ├── challenge/
│   ├── mini-project/
│   └── assets/
└── chapter-2/
    ├── README.md
    ├── praktikum/
    │   ├── praktikum-1-hello-html/
    │   ├── praktikum-2-biodata/
    │   ├── praktikum-3-profil-mahasiswa/
    │   └── praktikum-4-halaman-berita/
    ├── challenge/
    ├── mini-project/
    │   ├── starter/
    │   └── final/
    └── assets/
```

Struktur `chapter-3/` mengikuti pola yang sama (README, praktikum bertahap, challenge, mini-project dengan `starter/` dan `final/`, serta `assets/` untuk screenshot), ditambah file `style.css` terpisah pada setiap folder karena Chapter 3 mulai memperkenalkan CSS.
