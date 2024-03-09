// Hoist
function print() {
    var square1 = number * number // number is undefined
    console.log(square1)

    var number = 50

    var square2 = number * number
    console.log(square2)
}

print()
// NaN
// 2500