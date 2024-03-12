var arr = ["ashvin", 45, true, undefined, null, ["bambhaniya", 45]]

console.log(arr);

arr[0] = 45
arr[7] = 45 
console.log(arr[6]); // undefined

console.log(arr);

console.log(arr[5]);

let tarr = [[4, 5], [5], [2, 21], [2, 2]]

console.log(tarr);

arr.forEach(element => {
    console.log(element);
});
