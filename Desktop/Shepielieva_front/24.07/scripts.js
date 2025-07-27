// let a = parseFloat(prompt("введіть перше число"));
// let b = parseFloat(prompt("введіть друге число"));

// if (a > b) {
//     console.log(`the number ${a} bigger than ${b}`);
// } else if (a < b) {
//     console.log(`the number ${a} lass than ${b}`)
// } else {
//     console.log (`number ${a} and ${b} are the same`)
// } 


// let firstDistance = parseFloat(prompt("введіть першу відставнь в км")) * 1000;
// let secondDistance = parseFloat(prompt("введіть другу відстань в футах")) * 0.305; 
// 
// if (firstDistance < secondDistance) {
//     console.log (`the first ${firstDistance}m distance shoter than second ${secondDistance}m`);
// } else if (firstDistance > secondDistance) {
//     console.log(`the second distance ${secondDistance}m is shoter than the first ${firstDistance}m`);
// } else {
//     console.log(`distances are equal`);
// }


// let a = parseInt(prompt("введіть число a для перевірки"));
// let b = parseInt(prompt("введіть число b"));

// if (isNaN(a) || isNaN(b)) {
//     alert("введіть числове значення");
// } else {
//     if (a > b) {
//         if (a % b === 0) {
//             console.log(`число a: ${a} є дільником числа b: ${b}`);
//         } else {
//             console.log(`число a: ${a} a не є дільником числа b: ${b}`);
//         }
//     } else if (a < b) {
//         if (b % a === 0) {
//             console.log(`число b: ${b} a є дільником числа a: ${a}`);
//         } else {
//             console.log(`число b: ${b} a не є дільником числа a: ${a}`);
//         }
//     } else {
//         console.log(`обидва числа рівні: ${a}`);
//         console.log(`і кожне число є дільником іншого`);
//     }
// }


// let a = parseInt(prompt("введіть будь-яке число для перевірки на парність"));

// if (a % 2 === 0) {
//     console.log(`число є парним, бо його остання цифра: ${a % 10}`);
// } else {
//     console.log(`число не є парним, бо його остання цифра: ${a % 10}`);
// }


// let a = parseInt(prompt("введіть двозначне число"));
// let firstDigit = Math.floor(a / 10);
// let secondDigit = a % 10;

// alert(`число складається з: ${firstDigit} і ${secondDigit}`)

// let isAdmin = confirm("Порівняти ці числа?");

// if (firstDigit > secondDigit) {
//     alert("перше число більше за друге");
// } else if (firstDigit < secondDigit){
//     alert("перше число більше за друге");
// } else {
//     alert("числа однакові")
// }


// let a = parseInt(prompt("Введіть трьохзначне число"));
// let str = a.toString();

// let firstDigit = parseInt(str[0]);
// let secondDigit = parseInt(str[1]);
// let thirdDigit = parseInt(str[2]);

// let summNum = firstDigit + secondDigit + thirdDigit;
// let multiPly = firstDigit * secondDigit * thirdDigit;

//     if (summNum % 2 === 0) {
//         console.log(`число є парним ${summNum}`);
//     } else {
//         console.log(`число не є парним ${summNum}`);
//     }

//     if (summNum % 5 === 0) {
//         console.log(`число ${summNum} є кратне 5`);
//     } else {
//         console.log(`число ${summNum} не кратне 5`)
//     }

//     if (multiPly > 100) {
//         console.log(`добуток чисел ${multiPly} більше за 100`)
//     } else {
//         console.log(`добуток чисел ${multiPly} менше за 100`)
//     }

//     if (firstDigit === secondDigit && secondDigit === thirdDigit) {
//         console.log("ви ввели однакові цифри трьохзначного числа");
//     } else if (firstDigit === secondDigit) {
//         console.log("перше і друге число однакові");
//     } else if (secondDigit === thirdDigit) {
//         console.log("друге і третє число однакові");
//     } else if (thirdDigit === firstDigit) {
//         console.log("перше і третє число однакові");
//     } else {
//         console.log("ви ввели різні цифри трьохзначного числа");
//     }
    
let number = parseInt(prompt("Введіть шестизначне число на перевірку дзеркальності"));

let str = number.toString();

let a = parseInt(str[0]);
let b = parseInt(str[1]);
let c = parseInt(str[2]);
let d = parseInt(str[3]);
let e = parseInt(str[4]);
let f = parseInt(str[5]);

if (a === f && b === e && c === d) {
    document.write(`WOW! Ви ввели дзеркальне число - ${a}${b}${c}${d}${e}${f}`);
    } else {
        document.write(":( число звичайне");
    }
