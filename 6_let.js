let number = 50

if (true) {
    let iflet = 50
    var ifvar = 50
}

function print() {
    let square = number * number
    let temp = 511
    var vartemp = 511

    if (number < 60) {
        var largerNumber = 80
        let anotherLargerNumber = 100

        console.log(square) // 2500
    }

    console.log(largerNumber) // 80
    // console.log(anotherLargerNumber) //ReferenceError: anotherLargerNumber is not defined
}

print()
// console.log(temp); // temp is not define
// console.log(vartemp); // vartemp is not define

// console.log(iflet); // iflet is not define
console.log(ifvar); // 50


// redeclare and reassign variables declared with let

let number1 = 50
console.log(number1) // 50

number1 = 100
console.log(number1) // 100

// let number1 = 50 //SyntaxError: Identifier 'number1' has already been declared
