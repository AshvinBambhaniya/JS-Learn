// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
let d;

d = new Date();

d = d.toString(); // Tue Mar 12 2024 12:32:20 GMT+0530 (India Standard Time)

// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0); // 2021-01-10T07:00:00.000Z

// // Pass in a string
d = new Date('2021-07-10T12:30:00'); // Sat Jul 10 2021 12:30:00 GMT+0530
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');
d = new Date('07-10-2022');

d = Date.now(); // 1710227167603

d = new Date();
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745); // Fri Oct 28 2022 18:30:49 GMT+0530

// // Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d.toString());
