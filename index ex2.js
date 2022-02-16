// - Destructuring (Array & Object)

//Array
let pisang = ["raja", "goroho", "ambon"];
let [pisang1, pisang2, pisang3] = pisang;
console.log(pisang2);
//Dengan menggunakan destructuring kita tidak perlu mendeklarasikan variabel di dalam array satu persatu 

//Object
let jambu = {
    jenis: "jambuAir",
    warna: "merah",
    manis: false
};
let {jenis: type, warna:color, manis:sweet} = jambu;
console.log(type);
//Kalau ingin menggunakan destructuring pada object kita harus menggunakan nama yang sama, tetapi jika ingin mengubah namanya maka kita bisa menambahkan ":" terus diikuti dengan nama barunya
//Dengan menggunakan destructuring kita tidak perlu memanggil properti dengan nama objectnya, cukup langsung dengan nama propertinya saja


// --------------------------------------------------------------------------------------------------------------------- //


// - Destructuring dengan mengambil sebagian item (Array & Object)

//Array
let rumah = ["Tipe1", "Tipe2",  "Tipe3", "Tipe4"];
let [Rumah1, , , Rumah4] = rumah;
console.log(Rumah1);
console.log(Rumah4);
//Di sini item yang tidak diambil adalah index ke 1 dan ke 2, dengan cara hanya menaruh "," kosong

//Object
let mobil = {
    merk: "Honda",
    jenis: "Sedan",
    warna: "Hitam",
    manual: false
};
let {merk, manual} = mobil;
console.log(merk, manual);
//object tidak memperhatikan urutan, jadi dapat diambil apa saja


// --------------------------------------------------------------------------------------------------------------------- //


// - Destructuring dengan menggunakan default value (Array & Object)

//Array
let angka = ["a","b", "c", "d", "e"];
let {satu=10, dua=20, tiga=30, empat=40, lima=50} = angka;
console.log(tiga);

//Object
function Mengemudi({pengemudi = "X", kendaraan = "Y", tujuan = "Z"}){
  return `Seorang ${pengemudi} mengemudikan kendaraan ${kendaraan} dengan tujuan ${tujuan}`;
  }
let test = Mengemudi ({pengemudi: "supir", tujuan:"rumah"});
console.log(test);


// --------------------------------------------------------------------------------------------------------------------- //

// - Destructuring dengan mengambil sebagian item (Array & Object)

//Array
let rumah = ["Tipe1", "Tipe2",  "Tipe3", "Tipe4"];
let [Rumah1, , , Rumah4] = rumah;
console.log(Rumah1);
console.log(Rumah4);
//Di sini item yang tidak diambil adalah index ke 1 dan ke 2, dengan cara hanya menaruh "," kosong

//Object
let mobil = {
    merk: "Honda",
    jenis: "Sedan",
    warna: "Hitam",
    manual: false
};
let {merk, manual} = mobil;
console.log(merk, manual);
//object tidak memperhatikan urutan, jadi dapat diambil apa saja


// --------------------------------------------------------------------------------------------------------------------- //


// - Destructuring dengan menggunakan default value (Array & Object)

//Array
let angka = ["a","b", "c", "d", "e"];
let {satu=10, dua=20, tiga=30, empat=40, lima=50} = angka;
console.log(tiga);

//Object
function Mengemudi({pengemudi = "X", kendaraan = "Y", tujuan = "Z"}){
  return `Seorang ${pengemudi} mengemudikan kendaraan ${kendaraan} dengan tujuan ${tujuan}`;
  }
let test = Mengemudi ({pengemudi: "supir", tujuan:"rumah"});
console.log(test);


// --------------------------------------------------------------------------------------------------------------------- //


// - Destructuring dengan menggunakan rest operator (Array & Object)

//Array
const animals = ["Dog", "Rabbit", "Cat", "Cow", "Fish", "Lizard", "Bird"];
const [a, b, c, ...rest] = animals;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

//Object
const mahasiswa = {
    nama: "Jane",
    gender: "Female",
    faculty: "Ekonomi",
    address: "Manado",
    ActiveStudent: true
};
const {nama, gender, ...mhs} = mahasiswa;
console.log(gender);
console.log(mhs);