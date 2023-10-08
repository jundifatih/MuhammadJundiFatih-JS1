// If, Else, Nested If
// Program untuk berbagi kategori umur seseorang.
const umur = 10;
const result = "Masuk ke dalam kategori ";
console.log("If, Else, Nested If.")
// document.write("<h1>Javascript If, Else, Nested If.</h1>")
// document.write("<p id='demo'></p>")
if (umur <= 1) {
    console.log(result + "Bayi \n");
}else if(umur <= 5){
    console.log(result + "Balita \n");
}else if(umur <= 10){
    console.log(result + "Anak-anak \n");
}else if(umur <= 19){
    console.log(result + "Remaja \n");
}else if(umur <= 44){
    console.log(result + "Dewasa \n");
}else if(umur <= 59){
    console.log(result + "Pra Lansia \n");
}
else{
    console.log("Lansia \n");
}

// Switch Case
// Program untuk kasus mengetahui kategori gender seseorang.
const kode_gender = "P";
console.log("Switch Case.")
switch (kode_gender) {
    case "L":
        console.log("Gender tersebut adalah Laki-laki \n")
        break;
    case "P":
        console.log("Gender tersebut adalah Perempuan \n")
        break;
    default:
        console.log("Periksa ke dokter terdekat! \n")
}

// For statement
// Program untuk mencetak nama-nama orang dari data array.
const array = ["Budi","Aji", "Reza", "Hanif"];
console.log("For Statement.");
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}
console.log("\n")

// while, do while
// Program untuk total nomor baris yang diperintahkan.
console.log("Do While.")
let nomor = 0;
do {
    console.log("Nomor baris "+ nomor);
    nomor++;
} while (nomor <= 10);

// Function
// Program function untuk mengisi biodata singkat seseorang.
console.log("\nFunction.") 
function Biodata(name, place, hobby) {
    console.log(`Hallo semuanya saya ${name} yang berdomisili di ${place} dan hobiku adalah ${hobby}.`);
}
Biodata("Jundi","Batam","Gaming");

// Watermark
console.log("\nFile ini dibuat oleh:\nMuhammad Jundi Fatih - Web Development - C - Morning.")