// Number

let balance = 100
let anotherBalance = new Number(100)

console.log(balance);
// console.log(anotherBalance);  // [Number:100]
console.log(anotherBalance.valueOf()); // to get the value

console.log(typeof(balance));
console.log(typeof(anotherBalance));


// Boolean
let isActive = true
let isReallyActive = new Boolean(true) // Not Recommended


// null and Undefined
let firstName = null  // empty , not a string, zero, number
let lastName = undefined  // it might come in the future

console.log(firstName);
console.log(lastName);


// String , "" or '' doesn't matter
let string = "Hello"
let stringOne = 'hola'
let username = "Hitesh"

let oldGreet = string + " " + "Hitesh"
console.log(oldGreet);

let greetMessage = `Hello ${username}` // String inter-co-rellation
console.log(greetMessage);  // Highly used 

let demoOne = `Value is ${2*2}`  // can also perform computations
console.log(demoOne);


/* 
Symbols : it is always unique,it do not collides with other symbols with the same key, it returns false always if both the symbol contains the same key bcoz every symbol is unique, creates a new symbol every time
*/

let sm1 = Symbol("hitesh")  // returns Symbol(hitesh)
let sm2 = Symbol("hitesh")
// console.log(sm1 == sm2); // gives false 
console.log(sm1);
