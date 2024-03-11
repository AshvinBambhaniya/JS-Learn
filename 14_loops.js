// while loop

let i = 0;
while (i < 3) {
    console.log(i); // 0 1 2
    i++;
}

console.log("---------------");

let j = 0;
do {
    console.log(j);
    j++;
} while (j != 0 && j < 3);

console.log("---------------");

for (let a = 0; a < 5; a++) {
    console.log(a);
}

// console.log(a); // ReferenceError: a is not defined

console.log("---------------");

let b = 0;

for (; b < 3; b++) { // allow syntax (b; b < 3; b++) --> (; b < 3; b++) 
    console.log(b); // 0, 1, 2
}

console.log(b);

// Infinite loop
// for (; ;) {
//     // repeats without limits
// }