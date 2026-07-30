# Praktikum 4 — Membuat Halaman Website Menjadi Responsif Menggunakan Media Query

**Tujuan:** menyesuaikan tampilan navbar dan grid kartu agar tetap nyaman dilihat pada layar sempit.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini — berisi navbar (Praktikum 2) dan grid skill (Praktikum 3) yang digabung.
2. Tambahkan Media Query berikut pada `style.css`:
   ```css
   @media (max-width: 600px) {
       .navbar {
           flex-direction: column;
           align-items: flex-start;
       }

       .grid-skill {
           grid-template-columns: 1fr;
       }
   }
   ```
3. Uji tampilan dengan mempersempit lebar jendela browser, atau menggunakan mode simulasi perangkat pada Developer Tools (klik kanan → Inspect → Toggle Device Toolbar).
4. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 4 - Media Query"
   ```

## Checklist

- [ ] Navbar berubah menjadi vertikal pada layar ≤600px
- [ ] Grid skill berubah menjadi 1 kolom pada layar ≤600px
- [ ] Tampilan kembali normal (horizontal, 3 kolom) pada layar lebar
- [ ] Berhasil diuji dengan Developer Tools
