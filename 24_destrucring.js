const firstName = "Ashvin"
const lastName = "bambhaniya"
const age = 21

const person = {
    firstName,
    lastName,
    age
}

console.log(person);

// Destructuring
const todo = {
    id: 1,
    title: "My Title",
    user: {
        name: "Ashvin"
    }
}

const { id: todoId, title, user, user: { name } } = todo
console.log(todoId, title, user, name)


// Array Destrcuring
const numbers = [23, 67, 33, 49, 52]

const [f, s, ...rest] = numbers

console.log(f, s, rest);

//Convert it into json
const todoJson = JSON.stringify(todo)
console.log(todoJson);

// convert json to object
const myobj = JSON.parse(todoJson)
console.log(myobj);