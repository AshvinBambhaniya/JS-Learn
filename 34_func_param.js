// Default Params
function registerUser(user = 'Bot') {
    return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 1000));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

function loginUsers({ id, name }) {
    return `The user ${name} with the id of ${id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};

console.log(loginUsers(user));
console.log(
    loginUser({
        id: 2,
        name: 'Sara',
    })
);

// Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);