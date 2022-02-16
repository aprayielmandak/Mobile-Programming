//------- Asynchronous JS -------


//SetTimeout
setTimeout(() => {
    console.log("Nasi telah masak");
}, 1000);
function kerja(){
    console.log(`memasak nasi di rice cooker memerlukan waktu sekitar 30 meint, tergantung banyaknya beras yang dimasak`)
}
kerja();


//Callback
function proses1(){
    console.log("process 1 is done")
}

function proses2(Callback){
    setTimeout(function(){
        console.log("process 2 is done");
        Callback();
    },2000);
}

function proses3(){
    console.log("process 3 is done");
}
proses1();
proses2(proses3);


//Promise
let morning = true;

let Greeting = new Promise((resolve, reject) => {
    if (morning) {
        resolve("Good morning!");
    }
    else{
        reject("Good night!");
    }
});

//Promise then
Greeting.then((salam) => {
    console.log(salam);
})
//Promise catch
.catch((error)=> {
    console.log(error);
})


//Async/await
let condition = true;

async function testStatus(){
    if(condition) {
        return `Ready!!!`;
    }
    else{
        throw `Not ready!`
    }
};
//console.log(testStatus());
async function ready(){
    try{
        const message = await testStatus(condition);
        console.log(message);
        console.log("The player is ready ");
    } catch(error){
        console.log(error);
    }
}
ready(true);