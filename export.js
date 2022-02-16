// export
export let region = "Indonesia";

let rumah = ["Tipe1", "Tipe2",  "Tipe3", "Tipe4"];
let [Rumah1, , , Rumah4] = rumah;
console.log(Rumah1);

let mahasiswa = {
    nama: "Ferren",
    fakultas: "Ilmu Komputer",
    jurusan: "Sistem Informasi"
};
let {nama, fakultas, jurusan} = mahasiswa;

function Hello(){
    console.log(`Hallo ${nama} !`);
}

export {rumah, mahasiswa, Hello};



//export as
let movie = {
    namaMovie: "Harry Potter",
    seri: "Sorcerer's Stone",
    genre: "fantasy",
    tahunRilis: "2001"
};
let {namaMovie: namaFilm, genre:jenis, seri:series, tahunRilis:released} = movie;

function halloMovie(){
    console.log(`${namaFilm} is my favorite ${jenis} movies, the first movie "${series}" was released on ${released}`);
}

export {movie as film, halloMovie as halloFilm};



// export default
let negara = {
    namaNegara: "Indonesia",
    warnaBendera: "merah putih",
    asia: true
};
let {namaNegara: name, warnaBendera:color, asia:wilayah} = negara;
console.log(color);

export default negara;
