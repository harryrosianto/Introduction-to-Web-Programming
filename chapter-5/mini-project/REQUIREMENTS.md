# Mini Project — Website Profil Pribadi (Versi Interaktif Dasar)

Project ini melanjutkan Mini Project Chapter 4. Struktur HTML dan CSS yang sudah ada dipertahankan, dengan tambahan `script.js` untuk fitur interaktivitas dasar.

## Requirements

- [ ] **Ucapan selamat datang menggunakan prompt** — meminta nama pengguna melalui `prompt()` ketika halaman dibuka
- [ ] **Menampilkan nama pengguna pada halaman** — nama yang dimasukkan ditampilkan melalui `document.getElementById()`
- [ ] **Menampilkan tahun otomatis pada footer** — menggunakan `new Date().getFullYear()`
- [ ] **Tombol "Tampilkan Skill"** — memunculkan kembali bagian Skill
- [ ] **Tombol "Sembunyikan Skill"** — menyembunyikan bagian Skill
- [ ] **Program penghitung umur sederhana** — meminta tahun lahir, menghitung umur menggunakan tahun berjalan, menampilkan hasilnya

> **Perhatian:** Belum menggunakan manipulasi DOM lanjutan, `addEventListener`, Fetch API, Promise, maupun Async/Await. Inline JavaScript (`onclick`) untuk tombol Tampilkan/Sembunyikan Skill diperbolehkan sebagai pengenalan awal, dan akan digantikan dengan pendekatan yang lebih baik pada Chapter 6.

## Struktur File

```
mini-project/
├── REQUIREMENTS.md
├── starter/
│   ├── index.html        ← struktur sama seperti final Chapter 4 + elemen baru
│   ├── style.css
│   ├── script.js         ← Starter Code, berisi TODO
│   └── assets/foto-placeholder.jpg
└── final/
    ├── index.html
    ├── style.css
    ├── script.js          ← Final Code, fitur JavaScript lengkap
    └── assets/foto-placeholder.jpg
```

## Commit

```bash
git add .
git commit -m "Menyelesaikan mini project chapter 5"
```

> Catatan: Struktur ini akan dikembangkan lebih lanjut pada Chapter 6 dengan manipulasi DOM dan event listener modern menggantikan pendekatan `prompt()`/`onclick` yang masih sederhana ini.
