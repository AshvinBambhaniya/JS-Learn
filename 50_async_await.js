function someAsyncOperation() {
    return new Promise((resolve) => {
        // resolve("hello")
        console.log("hello")
        setTimeout(() => {
            // console.log("something");
            resolve("something")
        }, 2000);

        // Adding another setTimeout inside someAsyncOperation
        setTimeout(() => {
            console.log("Another setTimeout inside someAsyncOperation");
        }, 4000); // This one will execute after 4 seconds
    });
}

async function myAsyncFunction() {
    try {
        // asynchronous operation
        let result = await someAsyncOperation();
        console.log(result);

        console.log("I will wait");
    } catch (error) {
        console.log(error);
    }
}

myAsyncFunction();