function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

// console.log(user.name);
// console.log(user);
// console.log(user.ref);
console.log(user.ref.name); //undefined

function makeUserNew() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let usernew = makeUserNew();
  
console.log(usernew.ref().name); // this properties
console.log(usernew.ref()); // this properties
console.log(usernew.ref.name); // function properties