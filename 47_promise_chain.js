const cart = ["fskmf", "sodnj", "fjbfij", "djsbsdb"]


createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId
    })
    .then(function (orderId) {
        return procedpayment(orderId)
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function () {
        console.log("no matter what happens this will execute");
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

function procedpayment(orderId) {

    return new Promise(function (resolve, reject) {
        resolve("Payment Succesfull")
    })

}

console.log("main");