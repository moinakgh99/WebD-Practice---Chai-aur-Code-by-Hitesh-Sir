// PART 1
function person(name,age){
    this.name = name
    this.age = age
}

function car(make,model){
    this.make = make
    this.model = model
}

let myCar = new car("toyota","camily")
console.log(myCar);

let myNewCar = new car("tata","safari")
console.log(myNewCar);



// PART 2
function tea(type){
    this.type = type
    this.desc = () => {  // Another way of writing function
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new tea("Lemon Tea")
console.log(lemonTea.desc());



// PART 3
function animal(species){
    this.species = species
}

// To add extra features using prototype
animal.prototype.sound = function() { 
    return `${this.species} makes a sound`;
}

let dog = new animal("Dog")
console.log(dog.sound());
let cat = new animal("cat")
console.log(cat.sound());



// PART 4
function drink(name){

    // To throw an error if new keyword is not used
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let newTea = new drink("tea") // no error because new is used
console.log(tea);

let coffee = drink("coffee")
console.log(coffee); // throws an error because new is not used
