const person = {
    name : "Moinak",
    greet() {
        console.log(`Hi ! My name is ${this.name}`);
    }
}

person.greet() // Hi ! My name is Moinak

const greetFunction = person.greet
greetFunction() /* Here it is transferred to another variable, so its context is lost. 
Output : Hi ! My name is undefined */

const boundGreet = person.greet.bind({name:"John"})
boundGreet() // Hi ! My name is John