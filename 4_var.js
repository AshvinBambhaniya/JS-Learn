var num = 50

function print() {
    var square = num * num
    console.log(square);
}

console.log(num);
// console.log(square); // suare is not define
print()


// The var keyword allows for redeclaration

var number = 100
console.log(number)

var number = 500
console.log(number);

//  we have reassigning the variable number using the var

var number1 = 50
console.log(number1);

number1 = 100
console.log(number1);

number1 = 150
console.log(number1);

console.log(number2); // gives error without var number2

var number2 = 50

console.log(number2);