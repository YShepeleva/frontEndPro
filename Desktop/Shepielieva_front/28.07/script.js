// let a = "";

// for (let i = 10; i <= 20; i++) {
//   a += i;
//   if (i < 20) a += ",";
// }
// console.log(a)

// //__________________________________

// let b = "";

// for (let i = 10; i < 20; i++) {
//     let operation = i * i;
//     b += operation;
//     if (i < 20) b += ", ";
// }
//         console.log(b);

// // __________________________________

// let numbers = "";

// for (let i = 1; i < 11; i++) {
//   let result = i * 7;
//   let resultingString = `${i} * 7 = ${result}; \n`;
//   numbers += resultingString;
// }

// console.log(numbers);

// // _______________________________________

// let digit = 0;

// for (let i = 1; i < 15; i++) {
//   digit += i;
// }

// console.log(digit);

// //_______________________________________

// let multiply = 15;

// for (let i = 16; i < 35; i++) {
//   multiply = multiply * i; 
// } 

// console.log(multiply);
// //_______________________________________

// let number = 0;

// for (let i = 0; i <= 500; i++) {
//   number += i/500;
// }

// console.log(number);

// //_______________________________________

// let number = 0;

// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     number += i;
//   }
// }

// console.log(number);

// //_______________________________________

// let number = 0;

// for (let i = 100; i <=200; i++) {
//   if (i % 3 === 0) {
//     number += i;
//   }
// }

// console.log(number);

// //________________________________________

// let c = parseInt(prompt("Введіть натуральне число"));

// if (c < 0) {
//   alert("Ти помилився");
// }

// let dividers = "";
// let dividersEvenCount = 0;
// let sumEven = 0;

// for (let i = 1; i <= c; i++) {
//   if (c % i === 0) {
//     dividers += i;
//     if (i < c) dividers += ", ";

//     if ( i % 2 ===0 ) {
//       dividersEvenCount++;
//       sumEven += i;
//     }
//   }
// }

// console.log(dividers);
// console.log(dividersEvenCount);
// console.log(sumEven);

// //________________________________________________

// let numbers = "";

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++){
//     let result = i * j;
//     let resultingString = `${i} * ${j} = ${result}; \n`;
//     numbers += resultingString;
//   }
//   numbers += "\n"
// }
// console.log(numbers);