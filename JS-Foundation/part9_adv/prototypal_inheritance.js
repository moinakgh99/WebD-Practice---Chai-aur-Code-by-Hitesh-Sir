function Person(name){
    this.name = name
}

// To add new features, we use prototype
Person.prototype.greet = function() {
    console.log(`Hello ! My name is ${this.name}`);
}

let moinak = new Person("Moinak")
moinak.greet()