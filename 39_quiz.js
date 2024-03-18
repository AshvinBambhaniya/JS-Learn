// 1. Que-1
// console.log("hello");
// if ([]) {
//     console.log("hi");
// }

// Que-2
// if ([] == true) {
//     console.log("hii");
// }
// console.log("hello");

// Que-3
// if ([] === true) {
//     console.log("hii");
// }
// console.log("hello");

// Que-5
// const t = { a: 1, b: 2 }
// const s = { b: 4, c: 5 }
// const u = { c: 5, d: 10 }

// // const r = Object.assign({}, t, s, u) // r = { a: 1, b: 4, c: 5, d: 10 } t = { a: 1, b: 2 }
// const r = Object.assign(t, s) // r,t = { a: 1, b: 4, c: 5 }

// console.log(r);
// console.log(t);
// console.log(s);

// Que-6
// var p1 = { name: "Ashvin", age: 21 }
// var a = 45
// var b = a
// b = 654654654654
// var p2 = p1
// p2.name = "sdaaf"
// console.log(p1);
// console.log(p2);
// console.log(a);
// console.log(b);

// Que-7
// var a = 10
// console.log(a++);
// console.log(++a);
// console.log(a);

// Que-8
// var a = "Scaler"
// var r = a.substring(2,4)
// console.log(a);
// console.log(r);

// Que-9
// function name() {
//     setTimeout(() => {
//         console.log(1);
//     }, 2000);
//     console.log(2);
//     setTimeout(() => console.log(3), 0)
//     console.log(4);
// }
// name()

// Que- 10
// var a = Math.max()
// var b = Math.min()
// console.log(Math.max(1,6,5,8,9));
// console.log(Math.min());
// console.log(a);
// console.log(b);

// Que-11
// console.log(typeof(NaN));

// Que-12
// if (NaN === NaN) {
//     console.log("hello");
// }
// if (NaN == NaN) {
//     console.log("hello");
// }
// console.log("hii");

// Que-13   
// a = [1, 2, 3, 4, 5]
// console.log(a.slice(2, 4));

// Que-14
// console.log(parseInt("123Hello")); // 123
// console.log(parseInt("Hello123")); // NaN

// Que-15
// const example = ({ a, b, c }) => {
//     console.log(a, b, c);
// }

// example(1,2,3) // undefined undefined undefined
// example({ a: 1, c: 3, b: 2 }) // 1 2 3

// Que-16
// const o1 = { name: "Ashvin", Age: 16 }
// const o2 = { name: "Ashvin", Age: 16 }
// const o3 = o1

// console.log(o1 == o2); // false
// console.log(o1 === o2); // false
// console.log(o1 == o3); // true
// console.log(o1 === o3); // true 

// Que-17
// function test(...args) {
//     console.log(typeof args); // object
//     console.log(args[2]); // 1  
//     console.log(args); // [ 1, 2, 3 ]
// }

// test(1)  

// Que-18
// var cars = [ "a", "b", "c"]
// var result = cars.shift()
// console.log(cars);
// console.log(result);

// Que-19
// console.log(Math.round(107.5));

// Que-20
// let x = "dadasd10dsad"
// let y = parseInt(x)
// console.log(typeof y);
// console.log(y);

let a = 0
let b = 15
console.log(a);
if (b = a) {
    console.log("hello");
}

let d = "10"
d = parseInt(a)
let c = 10 + 10 + d
console.log(c);