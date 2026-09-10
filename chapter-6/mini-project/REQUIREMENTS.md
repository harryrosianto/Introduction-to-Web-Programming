# Mini Project — Website Profil Pribadi (Versi Interaktif dengan DOM)

Project ini melanjutkan Mini Project Chapter 5. Struktur HTML dan CSS yang sudah ada dipertahankan, dengan `script.js` yang ditulis ulang menggunakan manipulasi DOM murni.

## Requirements

- [ ] **Tombol Ganti Tema (Light/Dark)** — `addEventListener()` + `classList.toggle()`
- [ ] **Tombol Tampilkan/Sembunyikan Biodata** — `addEventListener()` + `classList.toggle()`
- [ ] **Menambah Skill Baru melalui input** — `createElement()` + `appendChild()`, validasi input tidak kosong
- [ ] **Menghapus Skill** — `remove()`, dipicu event pada masing-masing kartu Skill (`dblclick`)
- [ ] **Counter jumlah skill** — diperbarui otomatis setiap kali Skill ditambah/dihapus
- [ ] **Form kontak dengan validasi sederhana** — `event.preventDefault()`, memastikan Nama dan Email tidak kosong
- [ ] **Pesan sukses setelah form dikirim** — ditampilkan melalui manipulasi konten elemen

## Ketentuan Teknis

- [ ] Menggunakan `querySelector()`/`querySelectorAll()` sebagai pendekatan pemilihan elemen utama
- [ ] Menggunakan `addEventListener()` untuk seluruh event, **tidak ada lagi** atribut `onclick` di HTML
- [ ] Menggunakan `classList` untuk seluruh perubahan tampilan berbasis class
- [ ] Tidak menggunakan library maupun framework eksternal apa pun

> **Perhatian:** Belum menggunakan Fetch API, Promise, Async/Await, maupun framework JavaScript. Seluruh fitur interaktif dicapai murni melalui manipulasi DOM (vanilla JavaScript).

## Struktur File

```
mini-project/
├── REQUIREMENTS.md
├── starter/
│   ├── index.html        ← struktur sama seperti final Chapter 5 + elemen baru
│   ├── style.css
│   ├── script.js         ← Starter Code, berisi TODO
│   └── assets/foto-placeholder.jpg
└── final/
    ├── index.html
    ├── style.css
    ├── script.js          ← Final Code, manipulasi DOM lengkap
    └── assets/foto-placeholder.jpg
```

## Commit

```bash
git add .
git commit -m "Menyelesaikan mini project chapter 6"
```

> Catatan: Struktur ini akan dikembangkan lebih lanjut pada Chapter 7 dengan JavaScript modern (ES6+) dan Fetch API.
