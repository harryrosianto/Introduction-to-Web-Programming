# Praktikum 3 — Membuat Tombol "Ubah Tema"

**Tujuan:** menerapkan `addEventListener()` dan `classList.toggle()`.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — tombol dan class `.tema-gelap` sudah disediakan.
2. Pada `script.js`, pilih tombol menggunakan `getElementById()`.
3. Tambahkan `addEventListener("click", ...)` yang meng-*toggle* class `tema-gelap` pada `document.body`.
4. Jalankan Live Server dan klik tombol "Ubah Tema" beberapa kali.
5. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 3 - Tombol Ubah Tema"
   ```

## Checklist

- [ ] Tombol berhasil dipilih menggunakan `getElementById()`
- [ ] `classList.toggle()` berhasil mengganti tema setiap kali tombol diklik
- [ ] Tema kembali ke semula setelah tombol diklik dua kali
