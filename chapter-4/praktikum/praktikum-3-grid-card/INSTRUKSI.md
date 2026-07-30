# Praktikum 3 — Membuat Layout Card Menggunakan CSS Grid

**Tujuan:** menyusun bagian Skill dalam bentuk grid kartu menggunakan CSS Grid.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — tiga `.kartu-skill` sudah dibungkus `<div class="grid-skill">`.
2. Tambahkan CSS berikut:
   ```css
   .grid-skill {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 16px;
   }
   ```
3. Jalankan Live Server dan amati bagaimana kartu tersusun rapi dalam 3 kolom sejajar.
4. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 3 - Grid Card"
   ```

## Checklist

- [ ] Kartu skill tersusun dalam 3 kolom sejajar
- [ ] Jarak antar kartu konsisten (menggunakan `gap`, bukan margin manual)
- [ ] Berhasil dijalankan dengan Live Server
