var result =
{
    "name": "deon",
    "date": new Date()
}
console.log(result.name);
console.log(result.date);

var stringify = JSON.stringify(result);
console.log(stringify);

var parse = JSON.parse(stringify);
console.log(parse.name);
console.log(parse.date);