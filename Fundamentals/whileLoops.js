
// let i = 0;
// while(i < 10){
//     console.log(i)
//     i += 1;
// }

// let i = 0;
// do{
//     console.log(i);
//     i += 1;
// }while(i < 10)


let readlineSync = require("readline-sync");
let number = readlineSync.question("Enter a number less than 50 - ");

while(number >= 50){
    number = readlineSync.question("Enter a number less than 50 - ");
}

console.log("Number Accepted")
