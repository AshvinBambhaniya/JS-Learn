// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resove")
//     }, 10000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise resove")
//     }, 5000)
// })

async function handlePromise1(){
    console.log("Hello world");

    const val = await p1;
    console.log("Namste 11");
    console.log(val);

    const val2 = await p2;
    console.log("Namste 12");
    console.log(val2);
}

async function handlePromise2(){
    console.log("Hello world");

    const val = await p1;
    console.log("Namste 21");
    console.log(val);

    const val2 = await p2;
    console.log("Namste 22");
    console.log(val2);
}

const API = "https://api.github.com/users/AshvinBambhaniya2003"

async function handlePromise3(){

    const data = await fetch(API)

    const jsonData = await data.json()

    console.log(jsonData);
}

// handlePromise1()
// handlePromise2()
handlePromise3()

console.log("after function");
