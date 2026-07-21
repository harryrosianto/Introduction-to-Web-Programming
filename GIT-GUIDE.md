# Git Guide — Introduction to Web Programming

Panduan ini berlaku untuk seluruh chapter pada course ini. Setiap chapter memiliki bagian "Git Commit History" dan "Git Command" sendiri pada `README.md` masing-masing; dokumen ini adalah referensi umum yang menjelaskan alur kerja Git secara menyeluruh.

## Alur Kerja Git Sepanjang Course

Repository ini bersifat berkelanjutan. Setiap chapter baru ditambahkan ke branch `main` melalui branch kerja terpisah:

```
main
 ├── chapter-1  →  merge ke main setelah selesai
 ├── chapter-2  →  merge ke main setelah selesai
 └── chapter-3  →  merge ke main setelah selesai (dan seterusnya)
```

## Perintah Git yang Digunakan

| Perintah | Fungsi |
|---|---|
| `git init` | Inisialisasi repository baru (hanya dijalankan sekali di awal course). |
| `git status` | Melihat status file (belum staged, staged, atau sudah committed). |
| `git add .` | Menambahkan seluruh perubahan ke staging area. |
| `git add <nama-file>` | Menambahkan file tertentu saja ke staging area. |
| `git commit -m "pesan"` | Menyimpan perubahan pada staging area sebagai commit baru. |
| `git branch` | Menampilkan daftar branch yang ada. |
| `git branch <nama-branch>` | Membuat branch baru. |
| `git checkout <nama-branch>` | Berpindah ke branch tertentu. |
| `git checkout -b <nama-branch>` | Membuat sekaligus berpindah ke branch baru. |
| `git merge <nama-branch>` | Menggabungkan branch tertentu ke branch yang sedang aktif. |
| `git push -u origin main` | Mengirim commit ke GitHub untuk pertama kali pada branch `main`. |
| `git push` | Mengirim commit ke GitHub pada push berikutnya. |
| `git pull` | Mengambil dan menggabungkan perubahan terbaru dari GitHub. |
| `git log --oneline` | Melihat riwayat commit secara ringkas. |
| `git clone <url>` | Menyalin repository dari GitHub ke komputer lokal. |

## Alur Kerja per Chapter (Contoh)

```bash
# 1. Pastikan berada di branch main dan sudah up to date
git checkout main
git pull

# 2. Buat branch baru untuk chapter yang sedang dikerjakan
git checkout -b chapter-2

# 3. Kerjakan tugas, lalu commit setiap tahapan selesai
git add .
git commit -m "Menambahkan struktur HTML chapter 2"

git add .
git commit -m "Menambahkan CSS chapter 2"

# 4. Setelah chapter selesai, kembali ke main dan gabungkan
git checkout main
git merge chapter-2

# 5. Kirim ke GitHub
git push
```

## Konvensi Commit Message

Gunakan kalimat perintah aktif, singkat, dan jelas menjelaskan **apa** yang ditambahkan/diubah:

```
Initial commit
Menambahkan struktur HTML dasar
Menambahkan Semantic HTML
Menambahkan CSS
Memperbaiki layout
Menambahkan JavaScript
Refactoring kode
Finalisasi chapter
```

Hindari pesan commit yang tidak deskriptif seperti `update`, `fix`, `asdf`, atau `wip`.

## Best Practice Umum

1. **Commit kecil dan sering** — mudah ditelusuri dan mudah di-*revert* jika terjadi kesalahan.
2. **Satu branch per chapter** — menjaga riwayat kerja tetap terorganisir.
3. **Tulis pesan commit yang jelas** — commit message adalah dokumentasi progres belajar.
4. **Jangan commit kredensial** (token, password, API key) — periksa `.gitignore` sebelum commit.
5. **Push secara rutin** — jangan menyimpan pekerjaan hanya secara lokal.
6. **Gunakan `git status` sebelum `git add`** — memastikan hanya file yang relevan yang ikut ter-commit.
