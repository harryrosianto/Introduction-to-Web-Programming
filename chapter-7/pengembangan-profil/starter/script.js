/* ==========================================================
   PENGEMBANGAN WEBSITE PROFIL — CHAPTER 7
   Fitur Chapter 5-6 dipertahankan seluruhnya (tahun otomatis,
   ganti tema, tampil/sembunyikan biodata, counter skill, tambah/hapus
   skill, validasi form). Lengkapi TODO di bagian akhir untuk fitur
   Portofolio berbasis API (membaca portofolio.json menggunakan fetch()).
   ========================================================== */

// ========== 1. TAHUN OTOMATIS PADA FOOTER ==========
const tahunSekarang = new Date().getFullYear();
document.getElementById("tahun-footer").textContent = tahunSekarang;

// ========== 2. TOMBOL GANTI TEMA ==========
const tombolTema = document.querySelector("#tombol-tema");

tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-gelap");
});

// ========== 3. TOMBOL TAMPILKAN/SEMBUNYIKAN BIODATA ==========
const tombolBiodata = document.querySelector("#tombol-biodata");
const biodataSection = document.querySelector("#biodata");

tombolBiodata.addEventListener("click", function () {
    biodataSection.classList.toggle("tersembunyi");
});

// ========== 4. COUNTER JUMLAH SKILL ==========
function perbaruiJumlahSkill() {
    const jumlah = document.querySelectorAll(".kartu-skill").length;
    document.getElementById("jumlah-skill").textContent = jumlah;
}

perbaruiJumlahSkill();

// ========== 5. TAMBAH SKILL BARU ==========
const tombolTambahSkill = document.querySelector("#tombol-tambah-skill");
const inputSkillBaru = document.querySelector("#input-skill-baru");
const gridSkill = document.querySelector("#grid-skill");

tombolTambahSkill.addEventListener("click", function () {
    const namaSkill = inputSkillBaru.value;

    if (namaSkill === "") {
        return;
    }

    const kartuBaru = document.createElement("div");
    kartuBaru.classList.add("kartu-skill");
    kartuBaru.textContent = namaSkill;

    gridSkill.appendChild(kartuBaru);
    inputSkillBaru.value = "";

    perbaruiJumlahSkill();
});

// ========== 6. HAPUS SKILL (DOUBLE-CLICK) ==========
gridSkill.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("kartu-skill")) {
        event.target.remove();
        perbaruiJumlahSkill();
    }
});

// ========== 7. VALIDASI FORM KONTAK ==========
const formKontak = document.querySelector("#form-kontak");
const pesanForm = document.querySelector("#pesan-form");

formKontak.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    if (nama === "" || email === "") {
        pesanForm.textContent = "Nama dan email wajib diisi.";
        pesanForm.style.color = "red";
        return;
    }

    pesanForm.textContent = "Form berhasil dikirim. Terima kasih!";
    pesanForm.style.color = "green";
});

// ========== 8. PORTOFOLIO BERBASIS API (CHAPTER 7 — TODO) ==========
// TODO: buat fungsi async bernama tampilkanPortofolio() yang:
// 1. Memilih elemen id="grid-portofolio", tampilkan teks
//    "Memuat portofolio..." terlebih dahulu
// 2. Di dalam try: fetch("portofolio.json")
// 3. Periksa response.ok - jika false, tampilkan pesan
//    "Data portofolio tidak dapat dimuat." lalu return
// 4. Jika berhasil, ambil data dengan response.json()
// 5. Gunakan map() untuk mengubah setiap item menjadi potongan HTML
//    (gunakan Template Literal; tambahkan class "item-unggulan" jika
//    item.unggulan bernilai true), lalu gabungkan dengan .join("")
// 6. Pasang hasilnya ke grid-portofolio menggunakan innerHTML
// 7. Di dalam catch: tampilkan pesan
//    "Terjadi masalah saat memuat portofolio."


// TODO: panggil fungsi tampilkanPortofolio() di sini
