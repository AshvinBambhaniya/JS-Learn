var x = 10
let y = 10
let z = 10
a()
b()
console.log(x);
console.log(y);
console.log(z);


function a() {
    console.log(x);
    console.log(y);  // ReferenceError: Cannot access 'y' before initialization if we declare in function let y = 20 --> if not then answer is 10 that initialize in global
    var x = 20
    let y = 20
    z = z + 10
    console.log(x);
    console.log(y);
    console.log("a functiom");
}

function b() {
    var x = 30
    let y = 30
    z = z + 30
    console.log(x);
    console.log(y);
    console.log("b function");
}

console.log(x);
console.log(y);
console.log(z);