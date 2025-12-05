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