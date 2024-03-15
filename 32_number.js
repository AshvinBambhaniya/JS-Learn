let x;

const num = new Number(5);

x = num.toString(); // string 5
x = num.toString().length; // numbber 1

// // toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(4); // 5.0000

// // toPrecision() - returns a number with the specified length
x = num.toPrecision(4); // 5.000

// // toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// // toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

// // valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(typeof x, x);