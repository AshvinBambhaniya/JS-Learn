const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30,
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25,
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age: 45,
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'Sara@gmail.com',
        phone: '444-444-4444',
        age: 19,
    },
    {
        firstName: 'Jose',
        lastName: 'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age: 23,
    },
];

// challange 1
const youngPeople = people.filter((x) => x.age <= 25).map(function (x) {
    return {
        name: x.firstName + " " + x.lastName,
        email: x.email
    }
})

console.log(youngPeople);


const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter((x) => x > 0).reduce(function (sum, curr) {
    sum = sum + curr
    return sum
}, 0)


console.log(positiveSum); // 79

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((x) => {
    return x[0].toUpperCase() + x.slice(1)    
})

console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']