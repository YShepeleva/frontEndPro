//---1---

function makeCounter() {
    let currentCount = 0;

    return function (number) {
        currentCount += number
        return currentCount;
    };
}

let counterSum = makeCounter();

console.log(counterSum(4)); 
console.log(counterSum(6)); 
console.log(counterSum(10)); 
console.log(counterSum(7)); 

//---2---

function makeCounter2() {
    let currentCount = 2;

    return function (number) {
        currentCount *= number
        return currentCount
    };
}

let counterMulti = makeCounter2();

console.log(counterMulti(1)); 
console.log(counterMulti(4)); 
console.log(counterMulti(9)); 
console.log(counterMulti(10)); 

// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27