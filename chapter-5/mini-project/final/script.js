/* ==========================================================
   MINI PROJECT CHAPTER 5 — FINAL script.js
   Website Profil Pribadi - Versi Interaktif Dasar
   ========================================================== */

// ========== 1. UCAPAN SELAMAT DATANG + NAMA PENGGUNA ==========
let namaPengguna = prompt("Selamat datang! Siapa nama pengguna?");

if (namaPengguna === null || namaPengguna === "") {
    namaPengguna = "Pengunjung";
}

document.getElementById("ucapan-selamat-datang").innerText =
    "Selamat datang, " + namaPengguna + "! Senang website ini dikunjungi.";

// ========== 2. TAHUN OTOMATIS PADA FOOTER ==========
let tahunSekarang = new Date().getFullYear();
document.getElementById("tahun-footer").innerText = tahunSekarang;

// ========== 3. TOMBOL TAMPILKAN / SEMBUNYIKAN SKILL ==========
function tampilkanSkill() {
    document.getElementById("grid-skill").style.display = "grid";
}

function sembunyikanSkill() {
    document.getElementById("grid-skill").style.display = "none";
}

// ========== 4. PENGHITUNG UMUR SEDERHANA ==========
function hitungUmur() {
    let inputTahunLahir = prompt("Masukkan tahun lahir (contoh: 2005):");
    let tahunLahir = parseInt(inputTahunLahir);

    if (isNaN(tahunLahir)) {
        document.getElementById("hasil-umur").innerText =
            "Input tidak valid. Masukkan tahun dalam bentuk angka.";
        return;
    }

    let tahunIni = new Date().getFullYear();
    let umur = tahunIni - tahunLahir;

    document.getElementById("hasil-umur").innerText =
        "Perkiraan umur: " + umur + " tahun (dihitung dari tahun " + tahunLahir + " hingga " + tahunIni + ").";
}
