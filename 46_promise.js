const cart = ["fskmf", "sodnj", "fjbfij", "djsbsdb"]

const promise = createOrder(cart)
console.log(promise);

promise.then(function (orderId) {
    console.log(orderId);
    console.log(promise);
}).catch(function (err) {
    console.log(err.message);
    console.log(promise);
})

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid")
            reject(err)
        }

        const orderId = "455454"
        if (orderId) {
            setTimeout(() => {
                resolve(orderId)
            }, 2000);
        }
    })

    return pr
}

function validateCart(cart) {
    return false
}