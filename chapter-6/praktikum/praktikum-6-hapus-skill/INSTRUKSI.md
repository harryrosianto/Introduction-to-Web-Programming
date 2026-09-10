# Praktikum 6 — Menghapus Item Skill dari Daftar

**Tujuan:** menerapkan `remove()` pada elemen yang dipilih pengguna.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — sudah berisi beberapa kartu skill.
2. Pada `script.js`, tambahkan `addEventListener("dblclick", ...)` pada `#grid-skill` (bukan pada setiap kartu satu per satu).
3. Di dalamnya, periksa `event.target` — apabila memiliki class `kartu-skill`, panggil `.remove()` pada elemen tersebut.
4. Jalankan Live Server, lalu klik dua kali (double-click) pada salah satu kartu skill.
5. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 6 - Hapus Skill"
   ```

## Checklist

- [ ] Event didaftarkan pada `#grid-skill`, bukan pada setiap kartu satu per satu
- [ ] `event.target` diperiksa menggunakan `classList.contains("kartu-skill")`
- [ ] Kartu yang diklik dua kali berhasil terhapus, kartu lain tetap ada
