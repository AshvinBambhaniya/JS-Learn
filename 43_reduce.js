const arr = [1, 2, 3, 4, 5, 6]

function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.log(sum(arr));

const output = arr.reduce(function (sum, curr) {
    sum = sum + curr
    return sum
}, 0)

const max = arr.reduce(function (max, curr) {
    if (max < curr) {
        max = curr
    }
    return max
})

console.log(output);
console.log(max);


let people = [
    { firstname: "John", lastname: "Doe", age: 30 },
    { firstname: "Jane", lastname: "Smith", age: 25 },
    { firstname: "Michael", lastname: "Johnson", age: 35 },
    { firstname: "Emily", lastname: "Brown", age: 25 },
    { firstname: "David", lastname: "Williams", age: 40 }
];


const age = people.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

const result = people.filter((x)=> x.age < 35)
const resultfirstname = people.filter((x)=> x.age < 35).map((x)=> x.firstname)

console.log(age);
console.log(result);
console.log(resultfirstname);
