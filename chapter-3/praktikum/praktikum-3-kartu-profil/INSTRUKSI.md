# Praktikum 3 — Membuat Kartu Profil (Profile Card) Menggunakan CSS

**Tujuan:** menerapkan Box Model, Border, dan Background sekaligus untuk membentuk sebuah kartu.

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini. Elemen `<section class="card">` sudah disediakan pada `index.html`.
2. Tambahkan aturan berikut pada `style.css`:
   ```css
   .card {
       max-width: 400px;
       padding: 24px;
       margin: 24px auto;
       background-color: #FFFFFF;
       border: 1px solid #E2E8F0;
       border-radius: 12px;
       box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
   }
   ```
3. Jalankan Live Server, amati bagaimana Box Model (padding, border, margin) membentuk tampilan kartu.
4. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 3 - Kartu Profil"
   ```

## Checklist

- [ ] Kartu tampil dengan lebar maksimal 400px dan berada di tengah halaman
- [ ] Padding memberi jarak dalam yang lega
- [ ] Border dan border-radius membuat sudut kartu membulat
- [ ] Box-shadow memberi efek kartu sedikit terangkat
- [ ] Berhasil dijalankan dengan Live Server
