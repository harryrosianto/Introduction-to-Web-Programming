// TODO: modernisasi kode di bawah ini:
// 1. Ganti var menjadi const
// 2. Ubah function tampilkanBio menjadi Arrow Function
// 3. Ganti operator + dengan Template Literal

var nama = "Harry Rosianto";
var semester = 4;

function tampilkanBio(nama, semester) {
    return "Nama: " + nama + ", Semester: " + semester;
}

console.log(tampilkanBio(nama, semester));
