const username = {
    firstname: "Hitesh",  // inner keys can be modified
    isLoggedIn: true
}

username.firstname = "Mr. H"
username.lastname = "Chaudhary"

console.log(username.firstname);
console.log(username.lastname);
console.log(username);
console.log(typeof(username));

let today = new Date()
console.log(today.getDate());


// Array
let anotherUsername = ["hitesh",true]
console.log(anotherUsername[0]);


// Implicit conversion is not better for js
let isValue = true  // Considers true as 1
console.log(isValue + 1);

let AnotherValue = "2abc"
console.log(Number(AnotherValue));  // NaN 
console.log(typeof Number(AnotherValue));

console.log(Number(null));  // 0
console.log(Number(undefined));  // NaN
