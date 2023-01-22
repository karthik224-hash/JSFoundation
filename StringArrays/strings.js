/*
    Iterating over strings.
*/

// let displayMessage = "I am Karthik"

// for(let char of displayMessage){
//     if(char === "n")
//         break;
//     else
//         console.log(char)
// }

// for(let i = 0; i < displayMessage.length; i++){
//     if(displayMessage[i] === "n"){
//         break;
//     }
//     else{
//         console.log(displayMessage[i]);
//     } 
// }


// const displayMessage = "I am Karthik age 22"
// const index = 5;
// const char = displayMessage.charAt(index);
// console.log(displayMessage.charAt(index))

//ASCII code of given character

// const asciicode = displayMessage.charCodeAt(index);
// console.log(`The ascii code of ${char} is ${asciicode}`);


// console.log(displayMessage.indexOf("a",3));

// function findCharacter(text, char){

//     const index = text.indexOf(char);
//     if(index == -1){
//         return "Character is not found";
//     }
//     else{
//         return "Character is found in string";
//     }
// }

// const findCharacter = (text,char) => text.indexOf(char) === -1 ? "char not found" : "char found";

// const result = findCharacter("I am karthik and my age is 22 years","a");
// console.log(result);


// if(displayMessage.includes("dark")){
//     console.log("Person loves to code in dark mode");
// }
// else{
//     console.log("Person loves to code in light mode");
// }

// const displayMessage = "I love to code in dark mode";
// const vowels = "aeiouAEIOU"
// let flag  = false

// for(let char of displayMessage){
//     if(vowels.includes(char.toLowerCase())){
//         flag = true;
//         break
//     }
//     else{
//         flag = false;
//     }
// }

// if(flag === true){
//     console.log("String has vowels")
// }

// else{
//     console.log("String doesn't have vowels")
// }

//upper case and lower case

// const message = "I am Karthik and I am 22 years old"

// console.log(message.toUpperCase());
// console.log(message)


// const userName = "Karthik Poojari"
// const subString = userName.substring(0,10)

// console.log(subString + ".....")

const text = "           Hola! I love coding          ";
console.log(text.trim().substring(0,6) + "........")
