localStorage.setItem("userName", "ashvin")
localStorage.setItem("userName", "utsav")

// add object in localstorage
const user = {
    fistname: "ashvin",
    lastName: "bambhaniya",
    age: 45
}

localStorage.setItem("user-obj", JSON.stringify(user))
const userdata = JSON.parse(localStorage.getItem("user-obj"))
console.log(userdata);

console.log(localStorage);