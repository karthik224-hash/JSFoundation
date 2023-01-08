//Read data from user

const readlineSync = require("readline-sync")

const userName = readlineSync.question("What is your name?")
const userAge = readlineSync.question("May I know your age?")
console.log(typeof userAge)

// console.log("Welcome " + userName + " to JS")
console.log(`Welcome ${userName} to JS`)

const yearOfBirth = 2022 - userAge;
console.log(`You were born in the year ${yearOfBirth}`)