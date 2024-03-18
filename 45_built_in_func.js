const uri = 'https://example.com/search?q=hello world';
const encodedURI = encodeURI(uri);
console.log(encodedURI); // https://example.com/search?q=hello%20world

const uriComponent = 'hello world! How are you?';
const encodedComponent = encodeURIComponent(uriComponent);
console.log(encodedComponent); // hello%20world%21%20How%20are%20you%3F


const decodedURI = decodeURI(encodedURI);
console.log(decodedURI);  // https://example.com/search?q=hello world

const decodedComponent = decodeURIComponent(encodedComponent);
console.log(decodedComponent); // hello world! How are you?
