console.log(10 < 20 && 30 > 15 && 40 < 30);
console.log(10 > 20 || 30 > 15);

// && will return first flasy value or the last value

a = 10 && 20 
a = 10 && 20 && 30
a = 10 && 0 && 30
a = 10 && "" && 0 && 30


console.log(a);

// ||  will return first truthy value or the last value

b = 10 || 20
b = 0 || 21
b = 0 || null || "" || undefined

console.log(b);