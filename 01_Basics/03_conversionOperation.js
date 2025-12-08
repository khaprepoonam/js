let score = "99"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "99abc" => NaN
// NaN => not a number , typeof NaN => number
// "abc" => NaN
// true => 1 , false => 0 

let isloggedIn = 1

let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn);

// 1 => true , 0 => false
// "" => false , "poonam" => true
// "poonam" => true
// null => false

let someNumber = 99

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *************************operations*************************

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "Hello"
let str2 = " Poonam"

let str3 = str1 + str2
console.log(str3);

console.log("3" + 2); // "32"
console.log(3 + "2"); // "32"
console.log("1" + 2 + 3); // "123"
console.log(1 + 2 + "3"); // "33"       
console.log("4" - 2); // 2
console.log("4" * 2); // 8      
console.log("4" / 2); // 2
console.log (("3" + 2)* 4 % 5 + 2); // 4

console.log(+true); // 1
console.log(+""); // 0  

let num1, num2 , num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); 
++gameCounter
console.log(gameCounter); // gameCounter = gameCounter + 1
