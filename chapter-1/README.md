# Chapter 1 — Introduction to Web Development

## Deskripsi

Chapter ini adalah titik awal dari seluruh course *Introduction to Web Programming*. Fokus chapter ini adalah membangun pemahaman dasar tentang bagaimana website dan internet bekerja, serta praktik langsung menulis dan menjalankan halaman HTML pertama menggunakan Visual Studio Code dan Live Server.

## Learning Objectives

Setelah menyelesaikan chapter ini, mahasiswa mampu:

- Menjelaskan konsep dasar website, web development, client, server, browser, domain, dan hosting.
- Membedakan protokol HTTP dan HTTPS.
- Membedakan frontend dan backend, serta website statis dan dinamis.
- Menginstal dan menggunakan Visual Studio Code beserta ekstensi Live Server.
- Menulis struktur dasar HTML (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) dari nol.
- Menjalankan file HTML secara lokal menggunakan Live Server.
- Menggunakan perintah Git dasar untuk mengelola progres pekerjaan.

## Cara Menjalankan Project

1. Masuk ke folder chapter ini:
   ```bash
   cd chapter-1
   ```
2. Buka folder `final-code/` (versi lengkap) atau `starter-code/` (versi latihan) di Visual Studio Code.
3. Klik kanan pada `index.html` → **Open with Live Server**.
4. Halaman akan terbuka otomatis di browser, biasanya pada `http://127.0.0.1:5500/`.

## Struktur Folder

```
chapter-1/
├── README.md
├── starter-code/
│   └── index.html          # Project awal berisi TODO, titik mulai belajar
├── final-code/
│   └── index.html          # Project lengkap, hasil akhir tutorial
├── praktikum/
│   ├── INSTRUKSI.md
│   └── starter/index.html  # Starter praktikum kelas (berisi TODO)
├── challenge/
│   ├── INSTRUKSI.md
│   └── starter/profil.html # Starter challenge mandiri (solusi tidak disediakan)
├── mini-project/
│   ├── REQUIREMENTS.md
│   └── starter/index.html  # Starter mini project "Kartu Perkenalan Digital"
└── assets/
    └── screenshot-hasil-akhir.png
```

## Penjelasan Setiap File

| File / Folder | Penjelasan |
|---|---|
| `starter-code/index.html` | Kerangka HTML kosong dengan komentar `<!-- TODO -->` sebagai titik mulai belajar struktur dasar HTML. |
| `final-code/index.html` | Implementasi lengkap struktur dasar HTML sesuai tutorial chapter 1 (judul, heading, paragraf). |
| `praktikum/INSTRUKSI.md` | Instruksi langkah demi langkah untuk praktikum kelas. |
| `praktikum/starter/index.html` | Starter code praktikum, berisi TODO yang harus dilengkapi mahasiswa. |
| `challenge/INSTRUKSI.md` | Ketentuan challenge mandiri. Solusi sengaja tidak disediakan. |
| `challenge/starter/profil.html` | Skeleton HTML kosong untuk challenge. |
| `mini-project/REQUIREMENTS.md` | Checklist requirements mini project "Kartu Perkenalan Digital Sederhana". |
| `mini-project/starter/index.html` | Starter code mini project, berisi TODO. |
| `assets/screenshot-hasil-akhir.png` | Screenshot asli hasil render `final-code/index.html`, diambil otomatis menggunakan browser headless. |

## Screenshot

![Screenshot hasil website chapter 1](./assets/screenshot-hasil-akhir.png)

> Screenshot di atas adalah hasil render asli dari `final-code/index.html`. Karena chapter ini belum menggunakan CSS, tampilannya memang masih polos mengikuti gaya default browser — hal ini sudah sesuai dengan cakupan materi chapter ini.

## Assignment

Kerjakan seluruhnya menggunakan starter code yang tersedia pada masing-masing folder.

- [ ] **Praktikum** — Lengkapi `praktikum/starter/index.html` mengikuti `praktikum/INSTRUKSI.md`.
  - [ ] TODO: Ubah `<title>` menjadi nama lengkap.
  - [ ] TODO: Ubah `<h1>` menjadi kalimat perkenalan.
  - [ ] TODO: Tambahkan 1 `<p>` baru berisi alasan belajar web development.
- [ ] **Challenge** — Lengkapi `challenge/starter/profil.html` mengikuti `challenge/INSTRUKSI.md`.
  - [ ] TODO: Isi `<title>` sesuai tema pilihan.
  - [ ] TODO: Tambahkan minimal 1 `<h1>` dan 2 `<p>` tentang profil diri.
- [ ] **Mini Project** — Lengkapi `mini-project/starter/index.html` mengikuti `mini-project/REQUIREMENTS.md`.
  - [ ] TODO: Isi `<title>` dengan format `Kartu Perkenalan - [Nama Mahasiswa]`.
  - [ ] TODO: Isi `<h1>` dengan nama lengkap.
  - [ ] TODO: Isi 3 `<p>` (asal kampus/kota, hobi, alasan belajar web development).
- [ ] **Git** — Ikuti urutan commit pada bagian [Git Commit](#git-commit-history) di bawah menggunakan project masing-masing.
- [x] Screenshot hasil akhir sudah tersedia di `assets/screenshot-hasil-akhir.png` (dapat diperbarui ulang jika starter code dimodifikasi).

---

## Git Commit History

Urutan commit yang disarankan ketika mengerjakan ulang chapter ini secara mandiri (satu commit untuk satu tahapan kerja yang jelas):

```
1. Initial commit — struktur folder kosong
2. Menambahkan starter code chapter 1
3. Menambahkan struktur HTML dasar (final-code)
4. Menambahkan praktikum
5. Menambahkan challenge
6. Menambahkan mini project
7. Menambahkan dokumentasi README
8. Finalisasi Chapter 1
```

## Git Command

Perintah Git yang dipakai untuk mengelola pekerjaan chapter ini:

```bash
# Inisialisasi repository (hanya sekali, di awal course)
git init

# Menambahkan seluruh file ke staging area
git add .

# Menyimpan perubahan sebagai commit baru
git commit -m "Menambahkan starter code chapter 1"

# Melihat daftar branch
git branch

# Membuat dan langsung berpindah ke branch baru untuk mengerjakan chapter 1
git checkout -b chapter-1

# Berpindah kembali ke branch main
git checkout main

# Menggabungkan branch chapter-1 ke branch main setelah selesai
git merge chapter-1

# Mengirim commit ke GitHub
git push -u origin main

# Melihat riwayat commit
git log --oneline
```

## Best Practice Git

- **Satu commit, satu perubahan logis.** Jangan menggabungkan "menambahkan HTML" dan "menambahkan CSS" dalam satu commit yang sama.
- **Tulis commit message dalam kalimat perintah aktif**, misalnya `Menambahkan struktur HTML dasar`, bukan `update` atau `fix`.
- **Commit sesering mungkin** setiap satu tahapan kerja selesai, jangan menunggu seluruh chapter selesai baru commit sekali.
- **Gunakan branch per chapter** (`chapter-1`, `chapter-2`, dst.) agar riwayat pekerjaan tiap chapter tetap rapi dan mudah ditelusuri, lalu `merge` ke `main` setelah chapter selesai.
- **Jangan commit file yang tidak relevan** (file sistem operasi, cache editor) — sudah diatur pada `.gitignore` di root repository.
- **Push secara rutin** ke GitHub agar pekerjaan tidak hilang dan bisa diperiksa oleh dosen/instruktur.
- **Tulis pesan commit dalam Bahasa Indonesia atau Inggris secara konsisten** — jangan dicampur dalam satu repository.
