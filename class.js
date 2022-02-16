class library{
    constructor(lokasi, nama) {
        this.lokasi = lokasi;
        this.nama = nama;
    }

    findLibrary(){
        console.log(`Perpustakaan ${this.nama} terletak di ${this.lokasi}`);
    }
}

const library1 = new library("Manado", "Pelangi");
const library2 = new library("Bitung", "Awan")
library1.findLibrary();
library2.findLibrary();