/* ==========================================================
   MINI PROJECT CHAPTER 6 — STARTER script.js
   Lengkapi setiap bagian TODO di bawah ini menggunakan manipulasi DOM.
   Jalankan Live Server setelah setiap perubahan untuk melihat hasilnya.
   ========================================================== */

// ========== 1. TAHUN OTOMATIS PADA FOOTER ==========
// TODO: ambil tahun berjalan menggunakan new Date().getFullYear()
// TODO: tampilkan ke elemen id="tahun-footer"


// ========== 2. TOMBOL GANTI TEMA ==========
// TODO: pilih tombol id="tombol-tema" menggunakan querySelector()
// TODO: tambahkan addEventListener("click", ...) yang meng-toggle
//       class "tema-gelap" pada document.body


// ========== 3. TOMBOL TAMPILKAN/SEMBUNYIKAN BIODATA ==========
// TODO: pilih tombol id="tombol-biodata" dan elemen id="biodata"
// TODO: tambahkan addEventListener("click", ...) yang meng-toggle
//       class "tersembunyi" pada elemen biodata


// ========== 4. COUNTER JUMLAH SKILL ==========
// TODO: buat fungsi perbaruiJumlahSkill() yang menghitung
//       querySelectorAll(".kartu-skill").length dan menampilkannya
//       ke elemen id="jumlah-skill"
// TODO: panggil fungsi ini satu kali di awal agar counter akurat sejak awal


// ========== 5. TAMBAH SKILL BARU ==========
// TODO: pilih tombol id="tombol-tambah-skill", input id="input-skill-baru",
//       dan grid id="grid-skill"
// TODO: tambahkan addEventListener("click", ...) pada tombol tambah:
//       1. Ambil nilai input, jika kosong hentikan fungsi (return)
//       2. Buat elemen <div class="kartu-skill"> baru berisi nilai input
//       3. Sisipkan ke grid menggunakan appendChild()
//       4. Kosongkan kembali nilai input
//       5. Panggil ulang perbaruiJumlahSkill()


// ========== 6. HAPUS SKILL (DOUBLE-CLICK) ==========
// TODO: tambahkan addEventListener("dblclick", ...) pada grid skill:
//       1. Periksa apakah event.target memiliki class "kartu-skill"
//       2. Jika ya, panggil event.target.remove()
//       3. Panggil ulang perbaruiJumlahSkill()


// ========== 7. VALIDASI FORM KONTAK ==========
// TODO: pilih form id="form-kontak" dan elemen id="pesan-form"
// TODO: tambahkan addEventListener("submit", ...) pada form:
//       1. Panggil event.preventDefault() di baris pertama
//       2. Ambil nilai nama dan email
//       3. Jika salah satu kosong: tampilkan pesan error merah, lalu return
//       4. Jika keduanya terisi: tampilkan pesan sukses hijau
