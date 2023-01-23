function getObjects(name, city){
    return{
        name,
        city
    }
}

const obj = getObjects("Karthik", "Sangareddy")
console.log(obj)

const student = "Minnu";
const course = "redux";

console.log({student, course});


//this keyword

const user1 = {
    userName : "Prakash",
    age : 100,
    showInfo(){
        console.log(this.userName)
    },
};

user1.showInfo()

const user2 = {
    userName : "Ashish",
    age : 110,
    displayMessage: () => {
        console.log(this.age);
    },
};

//Arrows functions don't have their own this.
user2.showInfo = user1.showInfo;
user2.showInfo();
user2.displayMessage();
console.log(user1.age)

//Function borrowing - call, apply and bind.

const user1 = {
    name : "Prakash",
    age: 99,
    displayMessage(){
        console.log(this.age);
    }
};

const user2 = {
    name : "Ashish",
    age: 100,
    
};

const user3 = {
    name : "Minnu",
    age : 120,
};

function sayHi(degree, year){
    console.log(this.name, degree, year)
};

//Explict binding
// sayHi.call(user1,"BTECHIT", 2022);// the value of this is user1
// sayHi.call(user2, "BTECHCSE", 2021);// the value of this is user2


sayHi.apply(user1,["BTECHIT", "2022"]);
sayHi.apply(user2, ["BTECHCSE", "2021"]);

const result = sayHi.bind(user3, "B.Tech - cs");
result(2022)