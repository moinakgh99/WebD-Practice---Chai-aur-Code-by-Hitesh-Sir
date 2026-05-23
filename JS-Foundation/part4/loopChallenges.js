/*
1. Write a for loop that loops through the array green tea, black tea, chai, oolong tea, and stops the loop when it finds chai. 
    Stores all the teas before chai in a new name array named selectedTeas.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []
for(let i=0;i<teas.length;i++){
    if(teas[i]==='chai'){
        break
    }
    selectedTeas.push(teas[i])
}
console.log(selectedTeas);


/*
2. Write a for loop that loops through the array London, New York, Paris, Berlin, and skips Paris, 
    stores the other cities in a new array named visitedCities.
*/

let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []
for(let c = 0;c<cities.length;c++){
    if(cities[c]==="Paris" || cities[c]==="paris"){
        continue
    }
    visitedCities.push(cities[c])
}
console.log(visitedCities);


/*
3. Use a for-of loop to iterate through the array 1, 2, 3, 4, 5 and stop when the number 4 is found. 
    Store the numbers before 4 in an array named smallNumbers.
*/

let array = [1,2,3,4,5]
let smallNumbers = []
for (const num of array) {
    if(num===4){
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);


/*
4. Use a for-of loop to iterate through the array chai, green tea, herbal tea, black tea, and skip herbal tea.      
    Store the other teas in an array named preferredTeas.
*/

let tea = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []
for (const num of tea) {
    if(num==="herbal tea"){
        continue
    }
    preferredTeas.push(num)
}
console.log(preferredTeas);


/*
5. Use a for-in loop to loop through an object containing city populations. 
    Stop the loop when the population of Berlin is found and store all the previous cities' populations in a new object named cityPopulations.

Let cityPopulation = {
  London: 8900000,
  New York: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
*/

let citiesPopulation = {
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000,
};
let cityNewPopulations = {

}
console.log(Object.keys(citiesPopulation));  // [ 'London', 'New York', 'Paris', 'Berlin' ]

console.log(Object.values(citiesPopulation));  // [ 8900000, 8400000, 2200000, 3500000 ]

for (const city in citiesPopulation) {
    if(city === "berlin" || city==="Berlin"){
        break
    }
    // key = value
    cityNewPopulations[city] = citiesPopulation[city]
}
console.log(cityNewPopulations);


/*
6. Use a for-in loop to loop through an object containing city populations, 
    skip any city with a population below 3 million, and store the rest in a new object named largeCities. 
Let worldCities = {
    Sydney: 5000000, 
    Tokyo: 9000000, 
    Berlin: 3500000, 
    Paris: 2200000
}
*/

let worldCities = {
    "Sydney": 5000000, 
    "Tokyo": 9000000, 
    "Berlin": 3500000, 
    "Paris": 2200000
}
let largeCities = {

}
for (const city in worldCities) {
    if(worldCities[city] < 3000000){
        continue
    }
    largeCities[city] = worldCities[city]
}
console.log(largeCities);


/*
7. Write a for-each loop that iterates through the array earl Grey, Green Tea, Chai, Oolong Tea. 
    Stop the loop when Chai is found and store all the previous tea types in an array named availableTeas.
*/

let teaTypes = ["earl Grey", "Green Tea", "Chai", "Oolong Tea"]
let availableTeas = []
teaTypes.forEach(tea => {  // Another way of writing functn
    if(tea ==="chai" || tea === "Chai"){
        return
    }
    availableTeas.push(tea)
});
console.log(availableTeas);


/*
8. Write a for-each loop that iterates through the array Berlin, Tokyo, Sydney, Paris, skips Sydney, and 
    stores the other cities in a new array named travelCities.
*/

let citiesTypes = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelCities = []
citiesTypes.forEach((city) => {
    if(city === "sydney" || city ==="Sydney"){
        return
    }
    travelCities.push(city)
});
console.log(travelCities);


/*
9. Write a for loop that iterates through the array 2, 5, 7, 9, skip the value 7 and multiply the rest by 2. 
    Store the results in a new array named doubledNumbers.
*/

let myArray = [2,5,7,9]
let doubledNumbers = []
for (let i = 0; i < myArray.length; i++) {
    if(myArray[i]===7){
        continue
    }
    let mulArray = myArray[i] * 2
    doubledNumbers.push(mulArray)
    
}
console.log(doubledNumbers);


/*
10. Use a for-of loop to iterate through the array chai, green tea, black tea, jasmine tea, herbal tea, 
    and stops when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named shortTeas.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []
for (const tea of myTeas) {
    if(tea.length > 10){
        break
    }
    shortTeas.push(tea)
}
console.log(shortTeas);
