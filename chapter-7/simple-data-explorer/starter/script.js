/* ==========================================================
   SIMPLE DATA EXPLORER — STARTER script.js
   Lengkapi setiap bagian TODO di bawah ini.
   API: https://restcountries.com/v3.1/name/{nama}
   ========================================================== */

const inputPencarian = document.getElementById("input-pencarian");
const tombolSearch = document.getElementById("tombol-search");
const statusPesan = document.getElementById("status-pesan");
const daftarHasil = document.getElementById("daftar-hasil");
const detailNegara = document.getElementById("detail-negara");

// ========== FUNGSI PENGAMBILAN DATA ==========
async function cariNegara(kataKunci) {
    // TODO: 1. Tampilkan status "Memuat data..." ke statusPesan
    // TODO: 2. Kosongkan daftarHasil dan detailNegara dari hasil pencarian sebelumnya
    // TODO: 3. fetch ke `https://restcountries.com/v3.1/name/${kataKunci}`
    // TODO: 4. Periksa response.ok - jika false, tampilkan pesan
    //          "Negara tidak ditemukan. Coba kata kunci lain." lalu return
    // TODO: 5. Jika berhasil, ambil data melalui response.json()
    // TODO: 6. Kosongkan statusPesan, panggil tampilkanDaftarHasil(data)
    // TODO: 7. Bungkus dengan try/catch, tampilkan pesan
    //          "Terjadi masalah koneksi. Periksa jaringan internet." pada catch
}

// ========== FUNGSI RENDERING DAFTAR ==========
function tampilkanDaftarHasil(daftarNegara) {
    // TODO: gunakan map() untuk mengubah setiap Object negara menjadi
    // potongan HTML kartu (gunakan Template Literal), tampilkan bendera
    // (negara.flags.png), nama (negara.name.common)
    // TODO: gabungkan dengan .join(""), pasang ke daftarHasil.innerHTML
    // TODO: tambahkan event listener pada setiap kartu (misalnya melalui
    // event delegation pada daftarHasil) yang memanggil tampilkanDetail()
    // ketika kartu diklik
}

// ========== FUNGSI RENDERING DETAIL ==========
function tampilkanDetail(negara) {
    // TODO: gunakan Destructuring untuk mengambil name, capital, population,
    // region dari Object negara
    // TODO: susun HTML detail menggunakan Template Literal, pasang ke
    // detailNegara.innerHTML
}

// ========== EVENT LISTENER TOMBOL SEARCH ==========
tombolSearch.addEventListener("click", () => {
    const kataKunci = inputPencarian.value.trim();

    if (kataKunci === "") {
        return;
    }

    cariNegara(kataKunci);
});
