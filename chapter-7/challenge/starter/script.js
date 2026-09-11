// ==========================================================
// SOAL 1-2 — some(), every(), findIndex()
// ==========================================================
const students = [
    { name: "Harry Rosianto", major: "Ilmu Komputer", semester: 4 },
    { name: "Budi Santoso", major: "Sistem Informasi", semester: 2 },
    { name: "Siti Amalia", major: "Ilmu Komputer", semester: 6 },
];

// TODO Soal 1: gunakan some() untuk memeriksa apakah ada mahasiswa semester >= 6
// TODO Soal 1: gunakan every() untuk memeriksa apakah seluruh mahasiswa semester genap

// TODO Soal 2: gunakan findIndex() untuk menemukan posisi "Siti Amalia",
// lalu ubah data pada indeks tersebut (misalnya ubah semesternya)


// ==========================================================
// SOAL 3-4 — Menampilkan beberapa negara + Destructuring
// ==========================================================
async function tampilkanBeberapaNegara() {
    const kontainer = document.getElementById("hasil-negara");
    kontainer.textContent = "Memuat data...";

    try {
        // TODO Soal 3: fetch ke "https://restcountries.com/v3.1/region/asia"
        // TODO Soal 3: gunakan data.slice(0, 5).map(...).join("") untuk
        //              menampilkan 5 negara sekaligus

        // TODO Soal 4: di dalam .map(), gunakan Destructuring untuk mengambil
        //              name, capital, population dari setiap Object negara
    } catch (error) {
        kontainer.textContent = "Gagal memuat data negara.";
    }
}

tampilkanBeberapaNegara();
