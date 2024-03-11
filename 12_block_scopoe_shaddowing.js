var a = 10
let b = 10
const c = 10
let x = 10

{
    console.log("inside block");
    console.log(a);
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization if we declare in function let b = 20 --> if not then answer is 10 that initialize in global
    console.log(x);
    var a = 20
    let b = 20
    const c = 20
    x = x + 10
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(x);
}

console.log("main execution");
console.log(a);
console.log(b);
console.log(c);
console.log(x);