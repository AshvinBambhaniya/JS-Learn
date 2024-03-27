// Inversion of Control
// function fetchData(callback) {
//     setTimeout(() => {
//         console.log('Data fetched successfully');
//         callback();
//     }, Math.random() * 2000);
// }

// function processData(callback) {
//     setTimeout(() => {
//         console.log('Data processed successfully');
//         callback();
//     }, Math.random() * 2000);
// }

// function displayData() {
//     console.log('Data displayed successfully');
// }

// fetchData(() => {
//     console.log('Data fetched callback called');
// });

// processData(() => {
//     console.log('Data processed callback called');
// });

// displayData();

// solution of this using Promise

function fetchData() {
    console.log('Fetching data...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data fetched successfully');
            resolve();
        }, Math.random() * 2000);
    });
}

function processData() {
    console.log('Processing data...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data processed successfully');
            resolve();
        }, Math.random() * 2000);
    });
}

function displayData() {
    console.log('Displaying data...');
}

fetchData()
.then(() => processData())
.then(() => displayData());
