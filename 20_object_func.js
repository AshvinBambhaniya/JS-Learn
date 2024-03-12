let user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
   console.log("Hello!");
};

user.sayHi();

// this

let user1 = {
    name: "Ashvin",
    age: 21,
    giveInfo(){
        console.log(this.name,this.age);
    }
};


user1.giveInfo();