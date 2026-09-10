# Challenge — Chapter 6

Dikerjakan secara mandiri. Solusi tidak disertakan dalam repository ini.

## Ketentuan

1. Tambahkan sebuah counter yang menampilkan jumlah Skill saat ini, diperbarui otomatis setiap kali sebuah Skill ditambah maupun dihapus.
2. Modifikasi fitur hapus skill agar sebelum kartu benar-benar dihapus, muncul konfirmasi menggunakan `confirm()` (kotak dialog Ya/Tidak, mirip `alert()` namun mengembalikan nilai boolean).
3. Tambahkan validasi tambahan pada form kontak: alamat email wajib mengandung karakter `"@"` sebelum dianggap valid (petunjuk: gunakan method String `includes()`).
4. Buat sebuah daftar pengalaman organisasi baru menggunakan `<ul>` kosong, lalu buat form kecil (input nama organisasi dan peran) yang menambahkan item baru ke daftar tersebut setiap kali disubmit, menggunakan `createElement()` dan `event.preventDefault()`.
5. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan challenge chapter 6"
   ```

## Struktur File

```
challenge/
├── INSTRUKSI.md
└── starter/
    ├── index.html
    └── script.js
```
