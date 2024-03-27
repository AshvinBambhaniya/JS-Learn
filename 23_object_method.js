const todo = new Object()

todo.id = 1
todo.name = "ashvin"
todo.complete = true

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, d: 4 }

let obj3 = { obj1, obj2 } // { obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }
obj3 = { ...obj1, ...obj2 } // { a: 1, b: 2, c: 3, d: 4 }
obj3 = Object.assign(obj1, obj2) // { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj3);

// let x = todo.name // Ashvin
// x= Object.keys(todo) // [ 'id', 'name', 'complete' ]
// x = Object.values(todo) // [ 1, 'ashvin', true ]
// x= Object.entries(todo) // [ [ 'id', 1 ], [ 'name', 'ashvin' ], [ 'complete', true ] ]
// x = todo.hasOwnProperty("age") // false

console.log(obj3);
console.log(obj1);
console.log(obj2);
// console.log(x);