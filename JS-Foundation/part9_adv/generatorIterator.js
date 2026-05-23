// We use * for generator function
function* numberGenerator() {  
    yield 1
    yield 2
    yield 3
}

let gen = numberGenerator()
let genTwo = numberGenerator()

// next() is used in function generator
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
