/* 
1. Declare an array named teaFlavors that contains the strings Green Tea, Black Tea, and Oolong Tea. 
    Access the first element of the array and store it in a variable named firstTea.
*/

let teaFlavors = ["green Tea", "black tea", "oolong tea"]

// let teaFlavors = new Array("green Tea", "black tea", "oolong tea");

firstTea = teaFlavors[0]
console.log(firstTea);


/*
2. Declare an array named cities containing London, Tokyo, Paris, and New York. 
    Access the third element in the array and store it in a variable named favoriteCity.
*/

let cities = ["London", "Tokyo", "Paris", "New York"]
const favouriteCity = cities[2]
console.log(favouriteCity);


/*
3. You have an array named teaTypes containing herbal tea, white tea, and masala chai. 
    Change the second element of the array to jasmine tea.
*/

let teaTypes = ["herbal tea","white tea","masala chai"]
teaTypes[1] = "jasmine tea"
console.log(teaTypes[1]);


/*
4. Declare an array named citiesVisited containing Mumbai and Sydney, 
    add Berlin to the array using the push method.
*/

let citiesVisited = ["mumbai","sydney"]
citiesVisited.push("berlin")
console.log(citiesVisited);


/*
5. You have an array named teaOrders with chai, iced tea, matcha, and Earl Grey. 
    Remove the last element of the array using the pop method and store it in a variable named lastOrder.
*/

let teaOrders = ["chai","iced tea","matcha","Earl grey"]
console.log(teaOrders.length);

let lastOrder = teaOrders.pop()
console.log(teaOrders.length);

console.log(lastOrder);


/*
6. You have an array named popularTeas containing green tea, oolong tea, and chai. 
    Create a soft copy of this array named softCopyTeas.
*/

let popularTeas = ["green tea","oolong tea","chai"]
let softCopyTeas = popularTeas
// popularTeas.pop()
console.log(popularTeas);

console.log(softCopyTeas);
// if a manipulation is done in original array , then it also reflects in the copy of the array as well.


/*
7. You have an array named topCities containing Berlin, Singapore, and New York. 
    Create a hard copy of this array named hardCopyCities.
to create hard copy use: ...originalArrayName
*/

let topCities = ["berlin","singapore","new york"]
let hardCopyCities = [...topCities] // it creates a hard copy, it do not affects when there is a change in original array.

// let hardCopyCities = topCities.slice()

topCities.pop()
console.log(hardCopyCities);


/*
8. You have two arrays, European cities containing Paris and Rome, and Asian cities containing Tokyo and Bangkok.
    Merge these two arrays into a new array named World Cities.
*/

let EuropeanCities = ["paris","rome"]
let AsianCities = ["tokyo","bangkok"]
/*
let worldCities = EuropeanCities + AsianCities : it becomes a string : paris, rometokyo, bangkok
*/

/*
let worldCities = [EuropeanCities, AsianCities] : it becomes two dimensional array : [["paris","rome"],["tokyo","bangkok"]]
*/

// Best method is to use concatenate method
let worldCities = EuropeanCities.concat(AsianCities)
console.log(worldCities);


/*
9. You have an array named teaMenu containing Masala Chai, Oolong Tea, and Green Tea, and Earl Grey. 
    Find the length of the array and store it in a variable named menuLength.
*/

let teaMenu = ["masala chai","oolong tea","green tea","earl grey"]
console.log(teaMenu.length);

let menuLength = teaMenu.length
console.log(menuLength);


/*
10. You have an array named cityBucketList containing Kyoto, London, Cape Town, and Vancouver. 
    Check if London is in the array and store the result in a variable named isLondonInList.
*/

let cityBucketList = ["kyoto","london","cape town","vancouver"]
let isLondonInList = cityBucketList.includes("london")
let isAnotherLondonInList = cityBucketList.includes("London")

// it depends upon the lowercase and uppercase, so make sure of the lower and upper cases.
console.log(isLondonInList);
console.log(isAnotherLondonInList);