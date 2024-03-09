let x

x = 5 + 'ashvin'  // 5ashvin string

x = 5 + 5 + 'asjhvin' // 10asjhvin string

x = 5 * "ashvin" //Nan number

x = 5 * "5" // 25 Number

x = 5 + null // 5 Number

x = Number(null) // 0 Number
x = Number(false) // 0 Number
x = Number(true) // 1 Number

x = Number(undefined) // Nan Number

x = 5 + undefined

console.log(x, typeof x);