// Data and Process Creation

function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = true
            if(success){
                resolve("Data Fetched sucessfully..")
            } else {
                reject("Error Fetching Data..")
            }
        }, 4000);
    })
}

// Data Consumption
let response = fetchData()
console.log(response);   // Promise { <pending> }

fetchData()
    .then((data)=> console.log(data)) // Points to resolve
    .catch((error) => console.error(error))  // Points to reject