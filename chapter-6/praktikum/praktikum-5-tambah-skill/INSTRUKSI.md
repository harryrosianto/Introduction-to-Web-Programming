# Praktikum 5 — Menambahkan Item Skill Baru secara Dinamis

**Tujuan:** menerapkan `createElement()` dan `appendChild()`.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — input dan tombol sudah disediakan.
2. Pada `script.js`, tambahkan `addEventListener("click", ...)` pada tombol tambah.
3. Di dalamnya, buat elemen `<div class="kartu-skill">` baru berisi nilai input, lalu sisipkan ke `#grid-skill` menggunakan `appendChild()`.
4. Validasi agar input kosong tidak menambahkan kartu baru.
5. Kosongkan kembali input setelah skill berhasil ditambahkan.
6. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 5 - Tambah Skill Dinamis"
   ```

## Checklist

- [ ] Kartu skill baru muncul di akhir daftar setelah tombol diklik
- [ ] Input kosong tidak menambahkan kartu skill
- [ ] Input otomatis dikosongkan setelah skill berhasil ditambahkan
