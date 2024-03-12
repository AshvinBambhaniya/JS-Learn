let x;

const arr = [28, 38, 44, 29, 109];

arr.push(100); // (6) [28, 38, 44, 29, 109, 100]

arr.pop(); // (5) [28, 38, 44, 29, 109]

arr.unshift(99); // (6) [99, 28, 38, 44, 29, 109]

arr.shift(); // (5) [28, 38, 44, 29, 109]

arr.reverse();  //(5) [109, 29, 44, 38, 28]

// includes() - Check to see if something is in the array
x = arr.includes(109);

// // indexOf() - Return the index of the first match
x = arr.indexOf(28); // 4
x = arr.indexOf(465465); // -1


// Return array as a string
x = arr.toString(); // "109,29,44,38,28"
x = arr.join(); // "109,29,44,38,28"

x = arr.slice(1, 4); // (3) [29, 44, 38]

x = arr.splice(0, 2, 45);

x = arr.splice(4, 1);

// // Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(arr);
console.log(x);