let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
  console.log(this);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

function sayHello(){
    "use strict" // undefined
    console.log(this);
}

sayHello()