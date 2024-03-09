let amount = "100.64"
console.log(amount, typeof amount);
let str = "a150"

// change string to Number
// amount = parseInt(amount) // return 100 number 
// amount = parseFloat(amount)  // return 100.64
// amount = +amount
amount = Number(amount)

// str = parseInt(str) // Nan
// str = Number(str) //Nan
// str = +str //Nan

console.log(amount,typeof amount);
console.log(str,typeof str);


