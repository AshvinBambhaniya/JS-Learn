const number = 50


// const number = 100  // SyntaxError: Identifier 'number' has already been declared

function print() {
  const square = number * number

  if (number < 60) {
    var largerNumber = 80
    const anotherLargerNumber = 100

    console.log(square) // 2500
  }

  console.log(largerNumber) // 80
  console.log(anotherLargerNumber) // // ReferenceError: anotherLargerNumber is not defined
}

print()