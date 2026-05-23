// Checking if a number is greater than other Number:

let num1 = 3
let num2 = 8
console.log("Upper Code");

if( num1 > num2) {
    console.log("Num1 is greater");
} else {
    console.log("Nope, num1 is not greater");

}

console.log("Bottom Code");


// Checking if a string is equal to another string
let username = "chai"
let anotherUsername = "chai"

if(username != anotherUsername){
    console.log("Pick another username");
} else {
    console.log("You can pick this username");
}

// Checking if a variable is equal or not:

/*
=== is used to check the data type in JS
*/

let score = "44"

if (typeof score === "number"){
    console.log("It is a Number");
    
} else {
    console.log("It is not a number");
    
}


// Checking if a boolean value is true or not:
let isTeaReady = false
if(isTeaReady){
    console.log("Tea is not ready");
    
} else {
    console.log("Tea is Ready");
    
}

// Checking if an array is empty or not:
let items = ["item1"]
console.log(items.length);

if(items.length === 0){
    console.log("Array is empty");
    
} else {
    console.log("Array is not Empty");
    
}
