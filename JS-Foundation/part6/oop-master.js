let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    },
}
console.log(car.start());


function Person(name,age){
    this.name = name
    this.age = age
}

let john = new Person("John Doe",20)
console.log(john.name);


function Animal(type) {
    this.type = type
}

// To add new features to Animal, we use prototype
Animal.prototype.speak = function() {
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function() {
    return `Custom Method ${this}`
}

let myArray = [1,2,3]
console.log(myArray.hitesh());

let myNewArray = [1,2,3]
console.log(myNewArray.hitesh());


// CLASS CONCEPT

/* A function inside the class is called method */

class vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }

    // We can declare some method without using function keyword
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}

// INHERITANCE CONCEPT

class Car extends vehicle{
    drive() {
        return `${this.make} : This is an inheritance example`
    }
}

// To create an object from this

let myCar = new Car("Toyota","Corolla")
console.log(myCar.start());
console.log(myCar.drive());



/* ENCAPSULATION : restricts the direct access to the data */

class BankAccount {
    #balance = 0  // protected

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance() {
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance());



// ABSTRACTION : hiding the complex implementation details

class CoffeeMachine {
    start() {
        // call DB
        // filter the values
        return `Starting the machine...`
    }
    brewCoffee(){
        // complex calculation
        return `Brewing the coffee...`
    }

    pressStartButton() {
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1} + ${msg2}`
    }
}

let myMachine = new CoffeeMachine()
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());



// POLYMORPHISM

class Bird {
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin can't fly...`
    }
}

let bird = new Bird()
let penguin = new Penguin()

console.log(bird.fly());
console.log(penguin.fly());


// STATIC METHODS

class Calculator {
    static add(a,b){
        return a+b
    }
}

// let miniCalci = new Calculator()
// console.log(miniCalci.add(2,3));  // miniCalci.add is not a function

// If static is used, use with the class name with function name, 
console.log(Calculator.add(2,3));



// Getter and Setter

class Employee{
    #salary;
    constructor(name,salary){
        if(salary < 0){
            throw new error("Salary cannot be in negative !!");
        }
        this.name = name 
        this.#salary = salary  // Specific names are to b declare
    }

    get salary() {    // same name as declared above
        return `You are not allowed to see salary`
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        } else {
            this._salary = value
        }
    }

}

let empl = new Employee("Alice",-50000)
console.log(empl._salary);
empl.salary = 60000