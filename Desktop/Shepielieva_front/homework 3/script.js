// // 3.1 

// console.log(typeof "Привіт");          // string
// console.log(typeof 42);                // number
// console.log(typeof true);              // boolean
// console.log(typeof undefined);         // undefined
// console.log(typeof null);              // object 
// console.log(typeof Symbol("sym"));     // symbol
// console.log(typeof 10n);               // bigint

// console.log(typeof {});                // object (звичайний об'єкт)
// console.log(typeof []);                // object (массив)
// console.log(typeof function () {});    // function

// console.log(typeof NaN);               // number (Not-a-Number, але тип — number)
// console.log(typeof new Date());        // object

// // 3.2

// let name = prompt("Введіть своє імʼя");
// let age = prompt("Введіть свій вік");
// let city = prompt("Введіть своє місто");

// document.write(`Ваше імʼя ${name}, ваш вік ${age}, ваше місто ${city}`)

// 3.3

let number = prompt("Введіть п’ятизначне число:");
let result = number.toString().split('').join(' ');

console.log(result);




