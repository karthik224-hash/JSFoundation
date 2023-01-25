/**
 * Map - Filter
 */

// const arr = [1,2,3,4,5]

// function getSquares(number){
//     return number ** 2;
// }

// const output = arr.map(getSquares)
// console.log(typeof output)

// const squareNumbers = arr.map((number, index) => { 
//     console.log(index)    
//     return number ** 2
// })
// console.log(squareNumbers)




// function squareOfNumbers(arr){
//     const tempArr = []
//     for(let number of arr){
//         tempArr.push(number ** 2)
//     }
//     return tempArr;
// }

// const result = squareOfNumbers(arr)
// console.log(result)



// function fiterNumbers(arr){
//     const tempArr = [];
//     for(let number of arr){
//         if(number > 5){
//             tempArr.push(number);
//         }
//     }
//     return tempArr;
// }

// const arr = [1,2,3,4,5,6,7];

// const output = arr.filter(number => number > 5)
// console.log(output)

/**
 * reduce --
 */

const arr = [1,2,3,4,5];

const reducerFun = (acc, cur) => acc + cur;

const output = arr.reduce(reducerFun, 0)

console.log(output)