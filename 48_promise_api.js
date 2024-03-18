const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
    // setTimeout(() => reject("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("two"), 2000);
    setTimeout(() => reject("two"), 1000);

});
const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("three"), 3000);
    setTimeout(() => reject("three"), 3000);
});

// all allsetled race any
Promise.all([p1, p2, p3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error.errors);
    });
