function add(num1,num2) {
    console.log(num1 + num2);
    return 45
}

function change(a, b) {
    a = 10
    b = 20
}

let a = 1
let b = 2

add(5, 10);
change(a, b)
console.log(a,b);

// Returning a value
function subtract(num1, num2) {
    return num1 - num2;

    console.log('After the return');
}

let r = add(4,5)

// Assign the returned value to a variable
const result = subtract(10, 2);

console.log(result, subtract(20, 5));