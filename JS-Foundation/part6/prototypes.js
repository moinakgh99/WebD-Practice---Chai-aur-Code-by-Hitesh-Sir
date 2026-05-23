let computer = {cpu: 12}
let lenovo = { screen: "HD",
    __proto__: computer // using the properties of computer
}
let tomHardware = {}

console.log(`lenovo`, lenovo.__proto__);


let genericCar = {tyres: 4}
let tesla = {driver: "AI"}

// Another way of writing __proto__
Object.setPrototypeOf(tesla,genericCar)

console.log(`Tesla`, Object.getPrototypeOf(tesla));
