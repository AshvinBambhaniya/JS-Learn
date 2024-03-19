console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;
console.log(x);

console.error('Alert');
console.warn('Warning');

let a = [
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    { name: 'Brad', email: 'brad@gmail.com' },
    
]

console.table(a);

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);