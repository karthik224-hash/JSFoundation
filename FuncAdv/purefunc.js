/**
 * Pure Function
 * 1. It takes an argument.
 * 2. It should return something.
 * 3. For same input you should get the same output.
 * 4. The result should not be influenced by outer parameter.
 * 5. It should not mutuate the original argument.
 */

// const x = 10;

// function getDoubleValue(number){
//     return number * 2 * x;
// }

// const result = getDoubleValue(5);
// console.log(result);

// function appendNumbers(arr){
//     let newArr = [];
//     newArr.push(...arr, 5, 6);
//     return newArr;
// }

// const result = appendNumbers([1,2,3,4]);
// console.log(result);


/**
 * First class Function
 * 
 * A programming language is said to have first-class functions if functions in that language are treated like other variable.
 * So the functions can be assigned to any other variable or passed as an argument or can be returned by another fucntion.
 * 
 */


// function wrapper(){
//     return "Welcome to JavaScript";
// }

// function greetMessage(inner, name){
//     let message = inner();
//     console.log(name, message);
// }

// greetMessage(wrapper, "Karthik")


function greetMessage(){
    function wrapper(){
        let name = "Karthik";
        console.log(name, "Welcome to JS Magics");
    }
    return wrapper;
}

const output = greetMessage();
output()

greetMessage()()

