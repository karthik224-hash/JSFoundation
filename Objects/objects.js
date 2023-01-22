//Objects --> (Key: value)
//Object Literal
const personObj = {
    name : "Karthik",
    age  : 22,
    job  : "Software Engineer",
    course : ["html","css","js","reactjs"],
    "is Admin" : "true"
}; 

console.log(personObj["age"]);
console.log(personObj.name);

console.log(personObj["job"])


const obj = {
    name : "Karthik",
    greetMessage: function(){
        console.log("Hello Karthik welcome to JS")
    },
    bye(){
        console.log("Tata Bye Bye")
    }
}

console.log(obj);
obj.bye();

const readlineSync = require("readline-sync")
const key = readlineSync.question("What do you want to know about the mentor (name/age/city/state)");

const obj ={
    name : "Karthik",
    age  : 22
}

obj.city = "Sangareddy";
obj.state = "MH";

// console.log(obj[key]);  

const isPropertyFound = "age" in obj;
console.log(isPropertyFound)

for(let key in obj){
    console.log(key, obj[key])
}

//Object Reference

const person1 = {
    name : "Karthik",
    age  : 22,
    address : {
        city : "Sangareddy",
        state : "Telangana"
    }
}

const person2 = Object.assign({},person1)

person2.name = "Minnu"
person2.age = 111;
person2.address.city = "Hyderabad"

console.log(person1)
console.log(person2)


const person = {
    name : "Karthik",
    age  : 22,
    address : {
        city : "Sangareddy",
        state : "Telangana",
        landmark: {
            temple : "XYZ",
            groceryShop : "ABC"
        }
    }
}

const copiedObj = {...person}
copiedObj.name = "Minnu"
console.log(person)
console.log(copiedObj)