// 1.Promise

function helloWorld(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Hello World");
        }, 2000)
    })
}
const messages = async() => {
    const msg = await helloWorld();
    console.log(msg);
}
messages();


//2.Fetch

function ambilDataUser(){}
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then (user => console.log (user))
ambilDataUser();


// 3.Async Await
const ambilDataUser = async() => {
    try{
        const response = await
        fetch('https://reqres.in/api/users')
        const user = await response.json()
        console.log(user)
    }
    catch(error){
        console.log(error)
    }
}
ambilDataUser();

// 4.Class 

class Orang{
    constructor(nama, umur)
    {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja()
    {
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
}
const user1 = new Orang("Bella", 20);
user1.bekerja();


// 5.Inheritance

class Orang{
    constructor(nama, umur)
    {
        this.nama = nama;
        this.umur = umur;
    }
    tidur()
    {
        console.log(`${this.nama} sedang tidur`);
    }
    makan()
    {
        console.log(`${this.nama} sedang makan`);
    }
}

class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah)
    {
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar()
    {
        console.log(`${this.nama} sedang belajar di ${this.namaSekolah}`);
    }
}
const user = new Pelajar("John", 17, "Unklab");
console.log(user);