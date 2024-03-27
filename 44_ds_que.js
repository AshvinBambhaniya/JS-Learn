const orders = [
    {
        id: 1,
        date: "2024-03-19",
        products: [
            { id: 1, name: "tshirt", price: 50 },
            { id: 2, name: "tshirt", price: 50 }
        ],
        status_history: [
            { id: 1, name: "inprogress", date: "2024-02-20" },
            { id: 2, name: "inprogress", date: "2024-02-20" }
        ]
    },
    {
        id: 2,
        date: "2024-03-19",
        products: [
            { id: 1, name: "tshirt", price: 50 },
            { id: 2, name: "tshirt", price: 200 }
        ],
        status_history: [
            { id: 1, name: "pending", date: "2024-03-19" },
            { id: 2, name: "inprogress", date: "2024-02-20" }
        ]
    }
]

function ListSumOfProductsPriceByOrder(orders) {
    const productInfo = orders.map((order) => {
        return {
            id: order.id,
            products: order.products
        };
    })

    productInfo.forEach((element) => {
        const sum = element.products.reduce((sum, curr) => {
            sum = sum + curr.price
            return sum
        }, 0)
        console.log(element.id, sum);
    });
}

function GetmaxProductPriceByOrders(orders) {
    const productInfo = orders.map((order) => {
        return {
            id: order.id,
            products: order.products
        };
    })

    productInfo.forEach((element) => {
        const max = element.products.reduce((max, curr) => {
            if (max < curr.price) {
                max = curr.price
            }
            return max
        }, 0)
        console.log(element.id, max);
    });
}

function GetStatusProductPriceByOrders(orders) {
    const productInfo = orders.map((order) => {
        return {
            id: order.id,
            products: order.products
        };
    })

    productInfo.forEach((element) => {
        const max = element.
            console.log(element.id, max);
    });
}

function findOrdersByStatus(orders, statusInfo = "pending") {
    const statusHistoryArray = []

    const statusHistory = orders.map((order) => {
        return {
            orderId: order.id,
            status_history: order.status_history
        };
    })

    statusHistory.forEach((element) => {
        const statusHistory = element.status_history.filter((status) => {
            return status.name === statusInfo
        })
        if (statusHistory.length > 0) {
            statusHistoryArray.push({ orderId: element.orderId, statusHistory: statusHistory })
        }
    });

    return statusHistoryArray
}

function findOrdersByDateRange(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    return orders.filter(order => {
        const orderDate = new Date(order.date);
        return orderDate >= startDate && orderDate <= endDate;
    });
}

function findMaxPriceForEachOrder() {
    return orders.map(order => ({
        id: order.id,
        maxPrice: Math.max(...order.products.map(product => product.price))
    }));
}

console.log(findOrdersByStatus(orders,"inprogress"))