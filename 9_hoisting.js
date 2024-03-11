// Hoisting 

console.log(x);
// console.log(y);  // ReferenceError: Cannot access 'y' before initialization
getName()
console.log(getName2); // undefined

var x = 5
let y = 10

var getName2 = () => {
    console.log("hello worls");
}

function getName() {
    console.log("hello world");
}

