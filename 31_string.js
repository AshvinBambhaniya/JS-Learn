let x;

const name = 'John';
const age = 31;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// // String Properties and Methods

// // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('Hello World');
const str = "Hello world"

x = typeof s; // object 
x = typeof str // string

x = s.length; // 11
x = str.length // 11

// Access value by key
x = s[0]; // H
x = str[0] // H

// // Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;

// // Change case
x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

// // indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('l'); // 2
x = s.lastIndexOf('l') // 9

// // substring() - search a string for a specified value
x = s.substring(2, 5);
x = s.substring(2);

// // slice() - extracts a part of a string and returns a new string
x = s.slice(96,97);

// // trim() - remove whitespace from beginning and end of string
x = '         Hello World                     ';
x = x.trim();

// // replace() - replace all instances of a string
x = s.replace('World', 'John');

// // includes() - returns true if the string is found
x = s.includes('Hell');

// // valueOf() - returns the primitive value of a variable
x = s.valueOf()

// // split() - returns an array of strings
x = s.split('');

console.log(x);


// Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
const myString = 'developer';

let myNewString;

// Solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);