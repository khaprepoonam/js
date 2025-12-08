// primitive 

// 7 types: string, number, boolean, null, undefined, symbol, bigint

// Reference = (non-primitive)
// Object, Array, Function

const score =  100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail; // undefined     

const id = Symbol("1234")
const anotherId = Symbol ("1234") 

console.log(id === anotherId); // false
const bigNumber = 1239876565454545634345434564675767n

const heros = ["kartikman", "superman", "batman"];  
let myObj = {   
    name: "poonam",
    age: 19,
}

const myFunction = function() {
    console.log("hello world");
}   
console.log (typeof bigNumber); // function

   

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof score);
console.log(typeof isloggedIn); 
// null => object 
console.log(typeof userEmail); 
console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++ 

// stack (primitive) , heap (non-primitive)

let myYoutubeName = "teq.uila09"

let anotherName =  myYoutubeName
anotherName = "teq.uila10"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi : "user@okaxis"
}
let userTwo = userOne

userTwo.email = "poonam@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// ++++++++++++++++++++++++++++++++++++++++++++++++