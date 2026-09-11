/* ==========================================================
   SIMPLE DATA EXPLORER — FINAL script.js
   API: REST Countries (https://restcountries.com)
   ========================================================== */

const inputPencarian = document.getElementById("input-pencarian");
const tombolSearch = document.getElementById("tombol-search");
const statusPesan = document.getElementById("status-pesan");
const daftarHasil = document.getElementById("daftar-hasil");
const detailNegara = document.getElementById("detail-negara");

// Menyimpan data hasil pencarian terakhir, agar detail dapat diambil
// tanpa perlu fetch ulang saat sebuah kartu diklik.
let hasilPencarianTerakhir = [];

// ========== FUNGSI PENGAMBILAN DATA ==========
async function cariNegara(kataKunci) {
    statusPesan.textContent = "Memuat data...";
    daftarHasil.innerHTML = "";
    detailNegara.innerHTML = "";

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${kataKunci}`);

        if (!response.ok) {
            statusPesan.textContent = "Negara tidak ditemukan. Coba kata kunci lain.";
            return;
        }

        const data = await response.json();
        hasilPencarianTerakhir = data;

        statusPesan.textContent = `Ditemukan ${data.length} negara.`;
        tampilkanDaftarHasil(data);
    } catch (error) {
        statusPesan.textContent = "Terjadi masalah koneksi. Periksa jaringan internet.";
    }
}

// ========== FUNGSI RENDERING DAFTAR ==========
function tampilkanDaftarHasil(daftarNegara) {
    const kontenHTML = daftarNegara
        .map((negara, indeks) => `
            <div class="kartu-negara" data-indeks="${indeks}">
                <img src="${negara.flags.png}" alt="Bendera ${negara.name.common}">
                <strong>${negara.name.common}</strong>
            </div>
        `)
        .join("");

    daftarHasil.innerHTML = kontenHTML;
}

// Event delegation: satu event listener untuk seluruh kartu di dalam daftarHasil,
// alih-alih menambahkan addEventListener pada setiap kartu satu per satu.
daftarHasil.addEventListener("click", (event) => {
    const kartu = event.target.closest(".kartu-negara");

    if (!kartu) {
        return;
    }

    const indeks = Number(kartu.dataset.indeks);
    const negara = hasilPencarianTerakhir[indeks];
    tampilkanDetail(negara);
});

// ========== FUNGSI RENDERING DETAIL ==========
function tampilkanDetail(negara) {
    const { name, capital, population, region, flags } = negara;

    detailNegara.innerHTML = `
        <img src="${flags.png}" alt="Bendera ${name.common}" style="width: 120px;">
        <h2>${name.common}</h2>
        <p><strong>Nama Resmi:</strong> ${name.official}</p>
        <p><strong>Ibu Kota:</strong> ${capital ? capital[0] : "Tidak diketahui"}</p>
        <p><strong>Kawasan:</strong> ${region}</p>
        <p><strong>Populasi:</strong> ${population.toLocaleString("id-ID")}</p>
    `;
}

// ========== EVENT LISTENER TOMBOL SEARCH ==========
tombolSearch.addEventListener("click", () => {
    const kataKunci = inputPencarian.value.trim();

    if (kataKunci === "") {
        statusPesan.textContent = "Silakan ketikkan nama negara terlebih dahulu.";
        return;
    }

    cariNegara(kataKunci);
});

// Bonus: memungkinkan pencarian dengan menekan Enter pada input.
inputPencarian.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        tombolSearch.click();
    }
});
