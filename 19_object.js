let user = {
    name: "John",
    age: 30,
    "likes birds": true, // for multi word
    45 : "Rohit", // convert 4 into string
    sport: {
        cricket : true,
        football : false,
        kabbadi : true,
    }
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin); //undefined

user.name = 'Ashvin' // change existing property   
//add new properties
user.isAdmin = true;
console.log(user);

// delete properties
delete user.age
console.log(user);
console.log(user.hasOwnProperty("age")); // false
console.log(user.hasOwnProperty("name")); // true

// access nested object
console.log(user.sport);
console.log(user.sport.cricket);

// in operator
let a = "name" in user //true
a = "jab" in user // false
console.log(a);


for (const key in user) {
   console.log(key);
   console.log(user[key]);
}