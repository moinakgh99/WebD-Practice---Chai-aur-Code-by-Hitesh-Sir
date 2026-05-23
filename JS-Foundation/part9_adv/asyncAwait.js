function fetchUserData() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({name: "Moinak", url: "https://chaicode.com"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user Data ...");
        const userData = await fetchUserData()
        console.log("User Data fetched successfully..");
        console.log("User Data : ", userData);
    } catch (error) {
        console.log("Error Fetching Data : ", error);  
    }
}

getUserData()