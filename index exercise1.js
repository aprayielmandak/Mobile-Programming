let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people)

// 1 for loop
// for (i=0;i<people.length;i++)
// {
//     console.log(people[i]);
// }

// 2 for-each
// people.forEach(function(human){
//     console.log(human);
// });

//3 remove greg
// people.shift()
// console.log (people);

// 4 remove james
// people.pop()
// console.log(people);

// 5 add matt
// people.unshift("Matt")
// console.log(people);

// 6 add name
// people.push("K4")
// console.log(people);

// 7 after console mary, exit from loop
// for (i=0; i<people.length; i++){
//     if (i>1){
//         break;
//     }console.log(people[i])
// }

// 8 using slice
// peopleNew = people.slice(1);
// console.log(peopleNew);

//9 using splice
// people.splice(2,1,"Elisabeth", "Artie")
// console.log(people);

// 10 use concat
// let withBob = people.concat("Bob")
// console.log(people);
// console.log(withBob);

// object exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
// 1
programming.languages.push("Go")
console.log(programming);

// 2
programming['difficulty'] = 7;
console.log(programming);

//3
delete programming.jokes;
console.log(programming);

//4
programming.isFun = true;
console.log(programming);

//5 
programming.languages.map(function(item){
    for (i=0;i<programming.languages.length;i++)
    {
        console.log([i] + " - " + programming.languages[i])
    }
})