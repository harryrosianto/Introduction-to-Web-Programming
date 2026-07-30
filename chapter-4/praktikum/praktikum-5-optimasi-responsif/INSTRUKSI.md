# Praktikum 5 — Mengoptimalkan Tampilan Website pada Desktop, Tablet, dan Smartphone

**Tujuan:** menyempurnakan Media Query agar terdapat tiga tingkatan tampilan yang jelas (Mobile First bertingkat).

## Langkah Kerja

1. Buka folder `starter/` pada praktikum ini (kelanjutan dari Praktikum 4).
2. Susun ulang Media Query menggunakan pendekatan Mobile First bertingkat:
   ```css
   /* Gaya dasar: Smartphone */
   .grid-skill {
       grid-template-columns: 1fr;
   }

   /* Tablet ke atas */
   @media (min-width: 600px) {
       .grid-skill {
           grid-template-columns: repeat(2, 1fr);
       }
   }

   /* Desktop */
   @media (min-width: 1024px) {
       .grid-skill {
           grid-template-columns: repeat(3, 1fr);
       }

       body {
           max-width: 960px;
           margin: 0 auto;
       }
   }
   ```
3. Uji tampilan pada tiga ukuran layar berbeda menggunakan Developer Tools, pastikan transisi antar breakpoint terlihat mulus.
4. Commit hasil pekerjaan:
   ```bash
   git add .
   git commit -m "Menyelesaikan praktikum 5 - Optimasi Responsif"
   ```

## Checklist

- [ ] Smartphone: grid skill 1 kolom
- [ ] Tablet (≥600px): grid skill 2 kolom
- [ ] Desktop (≥1024px): grid skill 3 kolom, halaman dibatasi 960px dan di tengah
- [ ] Transisi antar breakpoint teruji mulus di Developer Tools
