function order(){
    let count = 4
    return function() {
        count++
        return count
    }
}

let increment = order()
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());