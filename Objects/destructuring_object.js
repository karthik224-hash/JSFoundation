
let obj = {
    name: "Karthik",
    address: {
        state : "Telangana",
        city : "Sangareddy",
        locality : "Manjeera Nagar"
    },
    courses: ['html','css','js','reactjs','redux']
}

// let {name : userName} = obj;

// console.log(typeof userName)

// let {address : {city}} = obj

// console.log(city)

// let {name, address: {state,city,locality}, courses} = obj;
// console.log(locality)

const employees = {
    engineers:{
        em1: {
            id : 1,
            name : "Karthik",
            occupation :"SDE"
        },
        em2: {
            id : 2,
            name : "Minnu",
            occupation : "Data Engineer"
        },
    },
    placement: {
        em3: {
            id : 3,
            name : "PK",
            occupation : "Senior Lead"
        }
    },
    youtube: {
        em4: {
            id: 4,
            name : "Poojari",
            occupation : "Youtube Manager"
        },
    }
}

let {youtube : {em4 : {name, occupation}}} = employees;
console.log(name,occupation)