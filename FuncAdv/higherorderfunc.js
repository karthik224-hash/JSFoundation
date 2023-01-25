/**
 * Higher Order functions
 * 
 * A Function that accepts another function as an argument or returns a function or does both is called H.O.P
 */



// function squareOfNumber(arr){
//     let squaredNumbers = [];
//     for(let number of arr){
//         squaredNumbers.push(number ** 2)
//     }
//     return squaredNumbers;
// }

// function cubeOfNumber(arr){
//     let cubedNumbers = [];
//     for(let number of arr){
//         cubedNumbers.push(number ** 3)
//     }
//     return cubedNumbers;
// }

// const output = squareOfNumber(arr);
// console.log(output);


const arr = [1,2,3,4,5]

function square(number){
    return number ** 2;
}

function cube(number){
    return number ** 3;
}

function fourthPower(number){
    return number ** 4;
}

function calculatePower(wrapper, arr){
    let tempArr = [];
    for(let number of arr){
        tempArr.push(wrapper(number));
    }
    return tempArr;
}

const squareOfNumbers = calculatePower(square, arr);
const cubeOfNumbers = calculatePower(cube, arr);
const fourthOfNumbers = calculatePower(fourthPower, arr);

console.log(squareOfNumbers);
console.log(cubeOfNumbers);
console.log(fourthOfNumbers);