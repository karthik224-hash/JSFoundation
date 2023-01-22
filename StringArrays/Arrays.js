// let s1 = "Karthik"
// let s2 = "Poojari"
// let s3 = "Minnu"
// let s4 = "Chinnu"

// let studentsName = ["Karthik","Poojari","Minnu","Chinnu"]
// console.log(studentsName[0]);
// console.log(studentsName[1]);
// console.log(studentsName[2]);

// for(let i = 0; i < studentsName.length; i++){
//     console.log(studentsName[i])
// }

// for(let name of studentsName){
//     console.log(name)
// }

// for(let name in studentsName){
//     console.log(studentsName[name])
// }

// let arr1 = [1,2,3]
// let arr2 = arr1

// //Shallow Copy
// console.log("Arr1 - ", arr1);
// console.log("Arr1 - ", arr2);

// arr2.push(4)

// console.log("Updated Arr1 : ", arr1);
// console.log("Updated Arr2 : ", arr2);


// //Spread Operator
// let arr3 = [...arr1];
// console.log("Arr3 -",arr3);
// arr3.push(5);
// console.log("Updated Arr1 - ",arr1);
// console.log("Updated Arr3 - ", arr3);


// let arr4 = [1,2,3,4];

// let arr5 = [];

// for(let number of arr4){
//     arr5.push(number)
// }

// console.log("Arr4 -", arr4);
// console.log("Arr5 -", arr5);


// arr5.push(5)
// console.log("Updated Arr4 - ",arr4);
// console.log("Updated Arr5 - ", arr5);


//Mutuable or immutable object (not changed)

// let fruits = ["apple","manago","banana"]
// console.log(fruits)
// fruits.push("orange")
// console.log(fruits)

// fruits.push("kiwi","berries","melons")
// console.log(fruits)


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// let arr4 = arr1.concat(arr2);
// let arr5 = arr1.concat(arr2, arr3, arr4);
// console.log(arr4);
// console.log(arr5)

// pop, slice, splice

// let courses = ["html","css", "js", "reactjs", "jquery"]
// console.log("Courses -", courses)
// let removedItems = courses.pop()

// console.log("RI - ", removedItems)
// console.log("Updated courses - ",courses)

// let value = courses.slice(1, 4);
// console.log(courses)
// console.log(value)

// let name = "Karthik"

// let firstUpperCaseChar = name[0].toUpperCase();
// let capitalizeName = firstUpperCaseChar + name.slice(1).toUpperCase();

// console.log(capitalizeName)

//Starting from index 1 delete two items
// courses.splice(3, 0, "next.js")

// console.log(courses)

// const availableSize = ["S","L","XL","XXL","XXXL"]

// const readLineSync = require("readline-sync")

// const userSize =  readLineSync.question("Which size of Shirt do you want (S/L/XL/XXL/XXXL) - ")

// const isSizeAvailable = availableSize.includes(userSize);

// if(isSizeAvailable){
//     console.log("Size is available")
// }
// else{
//     console.log("Size is not availbale")
// }


// const fruits = ["Apple","Mango","Orange","Banana"]
// fruits.sort()
// console.log(fruits)

// const numbers = [1,4,2,6,7,3,9,8,5,61,31,51,11]

// function sortInAscendingOrder(a,b){
//     return a - b;
// }

// function sortInDescendingOrder(a,b){
//     return b - a;
// }

// numbers.sort(sortInDescendingOrder);
// console.log(numbers)


// const inputStr = "madam"
// const arrOfChar = inputStr.split("");
// arrOfChar.reverse()
// const reversedStr = arrOfChar.join("");
// console.log(reversedStr)

//Spread operator avoids mututation
// const arr1 = [1,2,3,4,5]
// const arr2 = [8,9]

// const arr3 = [...arr1,6,7,...arr2,10,11];
// console.log(arr3);

// console.log(arr1);


//Destructuring Arrays

// const numbers = [1,2,3]

// const [a,b,c] = [1,2,3]

// console.log(a);
// console.log(b);
// console.log(c);

// const arr = [["html","css","js"],1,2,3,4,5,6];

// const [courses, ...rest] = arr;

// console.log(courses);
// console.log(rest)

let a = 10;
let b = 15;
[a,b] = [b,a]

console.log("A - ",a);
console.log("B -", b);