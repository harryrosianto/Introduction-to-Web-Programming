/* ==========================================================
   MINI PROJECT CHAPTER 6 — FINAL script.js
   Website Profil Pribadi - Versi Interaktif dengan DOM
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
