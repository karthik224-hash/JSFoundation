const obj = {
    name : "Karthik",
    age : 22,
    add : {
        city : "Sangareddy",
        state : "Telangana",
    }
}

let key = "pinCode";
obj[key] = "12345678";

function getCopiedObject(source){
    const targetObj = {};
    const keys = Object.keys(source); // [city,state for second time in nested loop]
    for(let key of keys){
        if(typeof source[key] === "object")
            targetObj[key] = getCopiedObject(source[key]);
        else
            targetObj[key] = source[key];
    }
    return targetObj;
}


const copiedObj = getCopiedObject(obj);
copiedObj.name = "Minnuu";
copiedObj.add.city = "Hyderabad";
copiedObj.pinCode = "abcdefghijklmanop"
console.log(obj);
console.log(copiedObj);


//Optional chaining

const user = {
    name : "Minnu",
    age : 22,
    address :{
        street : "Manjeera Nagar",
        city : "Sangareddy"
    },
    likes: "Eating sleeping coding repeat",
    getDisplayMessage: function(){
        console.log("Welcome Karthik")
    }
}

// if(user.address !== undefined){
//     console.log(user.address.city)
// }
// else{
//     console.log("address is not found")
// }

//sol2
console.log(user.address?.city)
user.getDisplayMessage();
user.getDisplayAddress?.();

console.log(user.likes)


